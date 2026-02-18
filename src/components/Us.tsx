"use client";
import React from "react";
import { motion } from "motion/react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LampContainer } from "./ui/lamp";

const people = [
  {
    id: 1,
    name: "Arjun Malhotra",
    designation: "Classical Guitarist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 2,
    name: "Kavya Nair",
    designation: "Carnatic Vocalist",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    id: 3,
    name: "Ritvik Banerjee",
    designation: "Tabla Artist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    designation: "Hindustani Classical Singer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 5,
    name: "Aditya Rao",
    designation: "Music Producer & Composer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

function Us() {
  return (
    <div className="relative w-full bg-[#080808] overflow-hidden">

      {/* Top gold divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

      <LampContainer>
        {/* Eyebrow */}
        <motion.span
          className="block uppercase tracking-[0.35em] text-xs font-semibold mb-5 text-center"
          style={{ color: "#C9A84C" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
        >
          Our Instructors
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className="text-center text-5xl md:text-6xl font-black mb-6"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #ffffff 30%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          Meet Our Indian Artists
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          className="w-16 h-[2px] mx-auto mb-6"
          style={{ background: "#C9A84C" }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        {/* Subheading */}
        <motion.p
          className="text-neutral-400 text-base text-center max-w-lg mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
        >
          Discover the talented professionals who will guide your musical journey
        </motion.p>

        {/* Tooltip avatars */}
        <motion.div
          className="flex flex-row items-center justify-center gap-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
        >
          <AnimatedTooltip items={people} />
        </motion.div>

        {/* Bottom diamond divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mt-14">
          <div className="h-[1px] flex-1 bg-neutral-800" />
          <div
            className="w-2 h-2 rotate-45 border"
            style={{ borderColor: "#C9A84C" }}
          />
          <div className="h-[1px] flex-1 bg-neutral-800" />
        </div>

      </LampContainer>

      {/* Bottom gold divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

    </div>
  );
}

export default Us;