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
    <div className="relative w-full bg-[#04091A] overflow-hidden">

      {/* Top blue divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />

      <LampContainer>

        {/* Eyebrow pill */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em]"
            style={{
              background: "rgba(122,179,224,0.1)",
              border: "1px solid rgba(122,179,224,0.35)",
              color: "#7AB3E0",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7AB3E0" }} />
            Our Instructors
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-center text-5xl md:text-6xl font-black mb-6 leading-tight"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #ffffff 30%, #7AB3E0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          Meet Our Indian Artists
        </motion.h1>

        {/* Blue rule */}
        <motion.div
          className="w-24 h-[2px] mx-auto mb-6"
          style={{
            background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        {/* Subheading */}
        <motion.p
          className="text-base text-center max-w-md mx-auto mb-12 font-light leading-relaxed"
          style={{ color: "#8a9bb0" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
        >
          Discover the talented professionals who will guide your musical journey
        </motion.p>

        {/* Avatars */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "#4a6a88" }}>
            <span className="font-bold" style={{ color: "#7AB3E0" }}>5</span> World-Class Instructors
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12 max-w-sm mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
        >
          {[
            { value: "12+", label: "Years Exp." },
            { value: "5K+", label: "Students" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 py-4 rounded-xl"
              style={{
                background: "rgba(122,179,224,0.04)",
                border: "1px solid rgba(122,179,224,0.1)",
              }}
            >
              <span
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Georgia', serif",
                  background: "linear-gradient(135deg, #ffffff 30%, #7AB3E0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] uppercase tracking-widest font-medium"
                style={{ color: "#4a6a88" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom diamond divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mt-14">
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
          <div className="w-2 h-2 rotate-45 border" style={{ borderColor: "#7AB3E0" }} />
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
        </div>

      </LampContainer>

      {/* Bottom blue divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />

    </div>
  );
}

export default Us;