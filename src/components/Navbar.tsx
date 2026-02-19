"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "top-0 py-3" : "top-4 py-0",
        className
      )}
    >
      {/* Blue top border line — only when scrolled */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0 30%, #7AB3E0 70%, transparent)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div
        className={cn(
          "max-w-5xl mx-auto px-6 transition-all duration-500",
          scrolled
            ? "bg-[#04091A]/90 backdrop-blur-md border border-[#0D1F3C] rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div
              className="w-5 h-5 border-2 rotate-45 transition-all duration-300 group-hover:bg-[#7AB3E0]/20"
              style={{ borderColor: "#7AB3E0" }}
            />
            <span
              className="text-white font-black text-lg tracking-tight leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Believe
              <span style={{ color: "#7AB3E0" }}>.</span>
            </span>
          </Link>

          {/* ── Nav links ── */}
          <nav className="hidden md:flex items-center gap-1">
            <Menu setActive={setActive}>

              {/* Home */}
              <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home" />
              </Link>

              {/* Our Courses — with dropdown */}
              <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-1 min-w-[200px]">
                  {[
                    { label: "All Courses", href: "/courses" },
                    { label: "Basic Music Theory", href: "/courses/music-theory" },
                    { label: "Advanced Composition", href: "/courses/composition" },
                    { label: "Song Writing", href: "/courses/songwriting" },
                    { label: "Music Production", href: "/courses/production" },
                  ].map((item) => (
                    <HoveredLink key={item.label} href={item.href}>
                      <span className="flex items-center gap-2 group/item">
                        <span
                          className="w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover/item:w-3"
                          style={{ background: "#7AB3E0" }}
                        />
                        {item.label}
                      </span>
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>

              {/* About */}
              <Link href="/about">
                <MenuItem setActive={setActive} active={active} item="About Us" />
              </Link>

              {/* Contact */}
              <Link href="/contact">
                <MenuItem setActive={setActive} active={active} item="Contact Us" />
              </Link>

            </Menu>
          </nav>

          {/* ── CTA button ── */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:text-white"
              style={{ background: "#1A3F6F", borderColor: "#7AB3E0" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Get Started</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Mobile menu
───────────────────────────────────────────────── */
function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "All Courses", href: "/courses" },
    { label: "Basic Music Theory", href: "/courses/music-theory" },
    { label: "Advanced Composition", href: "/courses/composition" },
    { label: "Song Writing", href: "/courses/songwriting" },
    { label: "Music Production", href: "/courses/production" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] group"
        aria-label="Toggle menu"
      >
        <span
          className="block h-[1.5px] w-6 transition-all duration-300 origin-center"
          style={{
            background: open ? "#7AB3E0" : "#fff",
            transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block h-[1.5px] w-6 transition-all duration-300"
          style={{
            background: open ? "#7AB3E0" : "#fff",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block h-[1.5px] w-6 transition-all duration-300 origin-center"
          style={{
            background: open ? "#7AB3E0" : "#fff",
            transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className="absolute top-full left-0 right-0 overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "600px" : "0px",
          background: "#04091A",
          borderTop: open ? "1px solid #0D1F3C" : "none",
        }}
      >
        {/* Blue accent line */}
        <div
          className="h-[1px] w-full"
          style={{
            background: "linear-gradient(to right, transparent, #7AB3E0 30%, #7AB3E0 70%, transparent)",
          }}
        />

        <nav className="flex flex-col py-4 px-6">
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 py-3 text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white border-b"
              style={{ borderColor: "#0D1F3C", animationDelay: `${i * 40}ms` }}
            >
              <span
                className="w-0 h-[1.5px] transition-all duration-300 group-hover:w-4"
                style={{ background: "#7AB3E0" }}
              />
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white"
            style={{ background: "#1A3F6F" }}
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;