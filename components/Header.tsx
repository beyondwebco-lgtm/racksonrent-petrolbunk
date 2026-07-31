"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Store } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

interface HeaderProps {
  onSelectRole?: (role: "bunk-owner" | "brand-merchant") => void;
}

export default function Header({ onSelectRole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  const handleListYourSpace = () => {
    closeMenu();
    if (onSelectRole) {
      onSelectRole("bunk-owner");
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-md ${
        scrolled ? "py-2 shadow-xs" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#0B1E36]/30 shadow-md flex-shrink-0 bg-white p-1">
            <Image
              src="/images/logo.jpeg"
              alt="Racks on Rent Logo"
              fill
              sizes="(max-width: 640px) 56px, 64px"
              priority
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B1E36] block leading-none">
              Racks<span className="text-[#006699]">on</span>Rent
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-wider uppercase block mt-1">
              Sublet Space. Share Success.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-[#0B1E36] hover:text-[#061221] hover:bg-[#FEF9C3]/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={handleListYourSpace}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F4E409] px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#061221] transition hover:bg-[#061221] hover:text-[#F4E409] shadow-xs border border-[#0B1E36]/20 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>List Your Space</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleListYourSpace}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#F4E409] text-[#061221] text-xs font-extrabold shadow-xs hover:bg-[#061221] hover:text-[#F4E409] transition-colors cursor-pointer"
          >
            <Store className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">List Space</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-xl text-[#0B1E36] hover:text-[#061221] hover:bg-[#FEF9C3]/50 border border-[#E2E8F0] transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#F8FAFC] lg:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-4 px-4 sm:px-6 flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#0B1E36]/30 shadow-md flex-shrink-0 bg-white p-1">
                <Image
                  src="/images/logo.jpeg"
                  alt="Racks on Rent Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[#0B1E36] block leading-none">
                  Racks<span className="text-[#006699]">on</span>Rent
                </span>
                <span className="text-xs font-extrabold text-[#0B1E36] tracking-wider uppercase block mt-1">
                  Sublet Space. Share Success.
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="p-2.5 rounded-xl text-[#0B1E36] hover:bg-[#FEF9C3]/50 border border-[#E2E8F0] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl font-bold text-lg text-[#0B1E36] hover:bg-[#FEF9C3]/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom Action CTA button inside Drawer */}
          <div className="p-6 border-t border-[#E2E8F0] bg-[#FEF9C3]/40">
            <button
              type="button"
              onClick={handleListYourSpace}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] py-3.5 text-base font-extrabold text-[#061221] shadow-xs hover:bg-[#061221] hover:text-[#F4E409] transition-colors"
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
