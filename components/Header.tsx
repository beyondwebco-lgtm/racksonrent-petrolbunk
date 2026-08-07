"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Store } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

interface HeaderProps {
  onSelectRole?: (role: "bunk-owner" | "brand-merchant") => void;
}

export default function Header({ onSelectRole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(2);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      closeMenu();
    }
  };

  const handleListYourSpace = () => {
    closeMenu();
    if (onSelectRole) onSelectRole("bunk-owner");
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#F0E2E4] bg-[#FFFDF5]/97 backdrop-blur-md ${
        scrolled ? "py-1.5 shadow-sm" : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Logo & Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group focus:outline-none"
          aria-label="Racks on Rent Home"
        >
          {/* Square Rack-Icon Logo */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#F0E2E4] shadow-xs group-hover:scale-[1.03] transition-transform">
            <Image
              src="/images/logo.png"
              alt="Racks on Rent Logo Icon"
              fill
              sizes="(max-width: 640px) 44px, (max-width: 1024px) 48px, 52px"
              priority
              className="object-contain"
            />
          </div>

          {/* Separate Horizontal Logo Lockup */}
          <div className="flex flex-col justify-center">
            {/* Main Brand Title */}
            <div className="flex items-baseline font-black tracking-tighter leading-none text-xl sm:text-2xl lg:text-3xl">
              <span className="text-[#650000] font-black italic">Racks</span>
              <span className="text-[#FAFA33] font-bold italic lowercase mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
              <span className="text-[#FAFA33] font-black italic">Rent</span>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-1 mt-0.5 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
              <span className="h-[1.5px] w-3 bg-[#650000] inline-block" />
              <span className="text-[#650000]">SUBLET SPACE.</span>
              <span className="text-[#FAFA33]">SHARE SUCCESS.</span>
              <span className="h-[1.5px] w-3 bg-[#650000] inline-block" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e as any, link.href)}
              className="nav-link-hover px-2.5 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-[#1F1F1F] hover:text-[#650000] hover:bg-[#FFFBCC]/60 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleListYourSpace}
            className="btn-primary text-xs xl:text-sm px-4 xl:px-5 py-2 rounded-full"
            style={{ borderRadius: "9999px" }}
          >
            <Store className="w-4 h-4 flex-shrink-0" />
            <span>List Your Space</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleListYourSpace}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#FAFA33] text-[#650000] border border-[#E6D900] text-xs font-extrabold shadow-xs cursor-pointer"
          >
            <Store className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">List Space</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-xl text-[#1F1F1F] hover:bg-[#FFFBCC]/60 border border-[#F0E2E4] transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-4 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 focus:outline-none group"
              aria-label="Racks on Rent Home"
            >
              {/* Square Icon */}
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#F0E2E4]">
                <Image
                  src="/images/logo.png"
                  alt="Racks on Rent Logo Icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              {/* Brand Name */}
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline font-black tracking-tighter leading-none text-2xl">
                  <span className="text-[#650000] font-black italic">Racks</span>
                  <span className="text-[#FAFA33] font-bold italic lowercase mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
                  <span className="text-[#FAFA33] font-black italic">Rent</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-[8px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
                  <span className="h-[1.5px] w-3 bg-[#650000] inline-block" />
                  <span className="text-[#650000]">SUBLET SPACE.</span>
                  <span className="text-[#FAFA33]">SHARE SUCCESS.</span>
                  <span className="h-[1.5px] w-3 bg-[#650000] inline-block" />
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="p-2.5 rounded-xl text-[#1F1F1F] hover:bg-[#FFFBCC]/50 border border-[#F0E2E4] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className="block px-4 py-3 rounded-xl font-bold text-lg text-[#1F1F1F] hover:bg-[#FFFBCC]/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Action CTA button inside Drawer */}
          <div className="p-6 border-t border-[#F0E2E4] bg-[#FFFBCC]/30">
            <button
              type="button"
              onClick={handleListYourSpace}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] py-3.5 text-base font-extrabold text-[#650000] border border-[#E6D900] shadow-xs cursor-pointer"
            >
              <Store className="w-5 h-5" />
              <span>List Your Space</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
