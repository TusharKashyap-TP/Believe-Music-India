"use client";
import React from "react";
import { motion } from "motion/react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LampContainer } from "./ui/lamp";

const people = [
  {
    id: 1,
    name: "Lata Mangeshkar",
    designation: "Playback Singer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp-kg-hbns2I5yhng7bSvcanP-3zVycC7-vlL-yz32uhTIS8KZMsGxrWOAxIQ0eSiSYaxgkXjNmgSefj8dnZolujVdUIN4rUbvaPe2b1fkw&s=10",

  },
  {
    id: 2,
    name: "Shreya Ghoshal",
    designation: "Playback Singer",
    image:"data:image/webp;base64,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",
  },
    {
    id: 3,
    name: "Zakir Hussain",
    designation: "Tabla Maestro",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFgB6MXS_ozjMYlLnq2I5dYayOYYNylNnq0OXrdjxnHQryGJSQEgBV0zmGlbc8TIKWj0J6O-OxeQy8I0S2XzCrsmVRmJidhNEdrCuXoEh&s=10",
    },
    {
    id: 4,
    name: "Ravi Shankar",
    designation: "Sitar Player",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtE7kgkNQl5rLrW_ezEBSp5yfXnQE-QITb_qLyEMfc3pu46yzFl2P1HTQh1sar6OBDbhusv3RtNB8S1qRFS8g-Ju1zj5csBt2fvU5Yi9pgw&s=10",
    },
    {
    id: 5,
    name: "Arijit Singh",
    designation: "Playback Singer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETraqkav99oDFbUFGsbCDZl0Mteg_X51A8QGEdAE7vwEtf5WxDLa__Nl6HP71zQTFI7scIFhdXe-HvmMlZTX9grvaQBvTHDmR8-dRxiCzGQ&s=10",
  },
  
  {
    id: 6,
    name: "Sonu Nigam",
    designation: "Singer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT35twg_fQtujVl2CrxqWLzAhjA0HW35RvUpwlSk22UNbRtOtr4KAtuNVO8nnYAavOEjv6-acWIdmGZv9nmBNIjtHdTMUYvIz_ppJAdHCe4Q&s=10",
  },
 {
    id: 7,
    name: "A. R. Rahman",
    designation: "Music Composer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lxE7bGAQiZ8_zAlRY9pHMRqr2KnvoFgSeL1J1gi9xnJhJ3hJL1_MG_xkUCMxunDX8iexb3bbElVnIqb0CPwtKp8zvLXKJWT3LYBF-vJNKw&s=10",
  },
  {
    id: 8,
    name: "Hariharan",
    designation: "Classical Vocalist",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuG4iXgcBNXEAF8WgisLIA7b80FiF9S76Z-f-elI0vklsFRLTRG3kY7i4Si7Kesl-R43g3sdP7TTgAqLNrC4R6zXCLlbM6d2tCcK0wktp&s=10",
  },
 
  {
    id: 9,
    name: "Shankar Mahadevan",
    designation: "Singer & Composer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NkHENnCRV6cB_1rwhQko1PIEpe3jTzE_NZBHBPMiu28Q_8EqxP398PrrNHMoJSOACyCVGWRNM6tbcUKC8n7cvh2InOFXSujnwspvzTcl-g&s=10",
  },
  {
    id: 10,
    name: "Anoushka Shankar",
    designation: "Sitar Player",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqiFSReZElFgO0Oh-o4i-aF7nqOGjCb2Sg35flhHmiRwVxaXQDX2U6L1VOXnfgSBucNnXknayJg1LUhyPC3htD4RNZDGJJhv5DdB5ci2N&s=10",
  },

];

function Us() {
  return (
    <div className="relative w-full bg-[#04091A] overflow-hidden">
      {/* Top blue divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, #7AB3E0, transparent)",
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
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7AB3E0" }}
            />
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
            background:
              "linear-gradient(to right, transparent, #7AB3E0, transparent)",
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
          Discover the talented professionals who will guide your musical
          journey
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
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#4a6a88" }}
          >
            <span className="font-bold" style={{ color: "#7AB3E0" }}>
              10
            </span>{" "}
            World-Class Instructors
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
                  background:
                    "linear-gradient(135deg, #ffffff 30%, #7AB3E0 100%)",
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
          <div
            className="w-2 h-2 rotate-45 border"
            style={{ borderColor: "#7AB3E0" }}
          />
          <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
        </div>
      </LampContainer>

      {/* Bottom blue divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />
    </div>
  );
}

export default Us;
