"use client";
import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <footer className="relative w-full bg-[#04091A] overflow-hidden pt-20 pb-8">

      {/* Top blue divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,179,224,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Brand + tagline */}
      <div className="relative z-10 flex flex-col items-center mb-16 px-6 text-center">
        <span
          className="uppercase tracking-[0.35em] text-xs font-semibold mb-3"
          style={{ color: "#7AB3E0" }}
        >
          Believe Music India
        </span>
        <h2
          className="text-3xl md:text-4xl font-black mb-3"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #ffffff 30%, #7AB3E0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          From Gurukul to Global
        </h2>
        <div className="w-12 h-[2px] mt-2" style={{ background: "#7AB3E0" }} />
      </div>

      {/* Grid links */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

        {/* Company */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: "#7AB3E0" }}
          >
            Company
          </h3>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/courses" },
              { label: "Blog", href: "/courses" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: "#7AB3E0" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Our Courses", href: "/courses" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: "#7AB3E0" }}
          >
            Follow Us
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Facebook", href: "https://www.facebook.com/believemusicindia" },
              { label: "Instagram", href: "https://www.instagram.com/believemusicindia/" },
              {
                label: "Twitter",
                href: "https://x.com/i/flow/login?redirect_after_login=%2Fhashtag%2FBelievemusicindia%3Fsrc%3Dhashtag_click",
              },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: "#7AB3E0" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li>New Delhi, India</li>
            <li>Delhi 10001</li>
            <li>
              <a
                href="mailto:info@musicschool.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@musicschool.com
              </a>
            </li>
            <li>
              <a
                href="tel:+11234567890"
                className="hover:text-white transition-colors duration-200"
              >
                (123) 456-7890
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Diamond divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
          <div
            className="w-2 h-2 rotate-45 border"
            style={{ borderColor: "#7AB3E0" }}
          />
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
        </div>

        <p className="text-center text-neutral-600 text-xs tracking-widest uppercase">
          © 2026 From Gurukul to Global. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Contact;