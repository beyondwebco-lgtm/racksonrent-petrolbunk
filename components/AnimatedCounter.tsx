"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

export default function AnimatedCounter({
  targetNumber,
  prefix = "",
  suffix = "",
  durationMs = 1200,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      const timer = setTimeout(() => {
        setCount(targetNumber);
      }, 0);
      return () => clearTimeout(timer);
    }

    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            let startTime: number | null = null;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / durationMs, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easeProgress * targetNumber));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(targetNumber);
              }
            };

            window.requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNumber, durationMs]);

  return (
    <span ref={domRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
