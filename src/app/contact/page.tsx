"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";

/* ────────────────────────────────────────────
   Reusable input that matches the site's style
──────────────────────────────────────────── */
function GoldInput({
  label,
  icon: Icon,
  ...props
}: {
  label: string;
  icon: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-500">
        {label}
      </label>
      <div
        className="relative flex items-center border transition-colors duration-300"
        style={{
          borderColor: focused ? "#7AB3E0" : "#0D1F3C",
          background: "linear-gradient(145deg, #070E1F, #05091A)",
        }}
      >
        <Icon
          className="absolute left-4 w-4 h-4 shrink-0 transition-colors duration-300"
          style={{ color: focused ? "#7AB3E0" : "#2a4a6a" }}
        />
        <input
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none"
        />
        {/* animated blue bottom bar */}
        <span
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
          style={{
            width: focused ? "100%" : "0%",
            background: "linear-gradient(90deg, #7AB3E0, #b0d4f0)",
          }}
        />
      </div>
    </div>
  );
}

function GoldTextarea({
  label,
  icon: Icon,
  ...props
}: {
  label: string;
  icon: React.ElementType;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-500">
        {label}
      </label>
      <div
        className="relative border transition-colors duration-300"
        style={{
          borderColor: focused ? "#7AB3E0" : "#0D1F3C",
          background: "linear-gradient(145deg, #070E1F, #05091A)",
        }}
      >
        <Icon
          className="absolute left-4 top-4 w-4 h-4 shrink-0 transition-colors duration-300"
          style={{ color: focused ? "#7AB3E0" : "#2a4a6a" }}
        />
        <textarea
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none resize-none"
        />
        <span
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
          style={{
            width: focused ? "100%" : "0%",
            background: "linear-gradient(90deg, #7AB3E0, #b0d4f0)",
          }}
        />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Info row
──────────────────────────────────────────── */
function InfoRow({
  Icon,
  label,
  value,
}: {
  Icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 group-hover:border-[#7AB3E033]"
        style={{ borderColor: "#0D1F3C", background: "linear-gradient(145deg, #070E1F, #05091A)" }}
      >
        <Icon className="w-4 h-4 transition-colors duration-300 group-hover:text-[#7AB3E0]" style={{ color: "#2a4a6a" }} />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-0.5">{label}</p>
        <p className="text-sm text-neutral-300 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Stat card
──────────────────────────────────────────── */
function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-black" style={{ color: "#7AB3E0" }}>{num}</p>
      <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">{label}</p>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Contact page
──────────────────────────────────────────── */
export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "040d05cd-6694-4720-a1f5-3d83032c4da5");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20 px-6 bg-[#04091A]">

      {/* Background beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Vignette fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04091A] via-transparent to-[#04091A] z-10 pointer-events-none" />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #7AB3E0 30%, #7AB3E0 70%, transparent)",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-16"
        >
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
          <div className="text-center">
            <span
              className="block uppercase tracking-[0.3em] text-xs font-semibold mb-2"
              style={{ color: "#7AB3E0" }}
            >
              Reach Out
            </span>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Contact Us
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
        </motion.div>

        {/* ── Body grid ── */}
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">

          {/* ── LEFT: Info card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border p-8 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #070E1F, #05091A)",
              borderColor: "#0D1F3C",
            }}
          >
            {/* Blue top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-[1px]"
              style={{
                background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
              }}
            />

            <span
              className="block uppercase tracking-[0.3em] text-xs font-semibold mb-3"
              style={{ color: "#7AB3E0" }}
            >
              Get In Touch
            </span>
            <h3
              className="text-3xl font-black leading-tight mb-3"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Contact
              <br />
              <span style={{ color: "#7AB3E0" }}>Information</span>
            </h3>

            {/* Decorative rotated block */}
            <div
              className="mb-8 w-8 h-8 border-2 rotate-45"
              style={{ borderColor: "#7AB3E033" }}
            />

            <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-light">
              We design premium websites, brands, and digital experiences.
              Reach out and let&rsquo;s discuss your next big idea.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <InfoRow Icon={MapPin} label="Location" value="Delhi, India" />
              <InfoRow Icon={Mail} label="Email" value="believemusicindia@gmail.com" />
              <InfoRow Icon={Phone} label="Phone" value="+91 98242 30723" />
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 pt-6 border-t"
              style={{ borderColor: "#0D1F3C" }}
            >
              <StatCard num="10+" label="Years" />
              <StatCard num="230+" label="Artists" />
              <StatCard num="3" label="Offices" />
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative rounded-2xl border p-8 flex flex-col gap-5 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #070E1F, #05091A)",
              borderColor: "#0D1F3C",
            }}
          >
            {/* Blue top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-[1px]"
              style={{
                background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
              }}
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <GoldInput label="Your Name" icon={User} type="text" name="name" required placeholder="John Doe" />
              <GoldInput label="Email Address" icon={Mail} type="email" name="email" required placeholder="john@email.com" />
            </div>

            <GoldInput label="Subject" icon={MessageSquare} type="text" name="subject" placeholder="Web Design · Brand Identity · Other" />

            <GoldTextarea label="Message" icon={MessageSquare} name="message" required rows={5} placeholder="Tell us about your project…" />

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full py-4 text-sm font-bold text-white tracking-widest uppercase transition-all duration-300 hover:opacity-90 disabled:opacity-50 overflow-hidden"
              style={{ background: "#1A3F6F" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">
                {status === "sending" ? "Sending…" : "Send Message →"}
              </span>
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs tracking-wider"
                style={{ color: "#7AB3E0" }}
              >
                ✦ &nbsp; Message sent! We&rsquo;ll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs tracking-wider text-red-400"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}