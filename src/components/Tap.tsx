"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Master Your Instrument",
    description:
      "Learn guitar, piano, vocals, drums, and more with structured lessons designed to build strong foundations and advanced skills.",
  },
  {
    title: "Learn from Industry Professionals",
    description:
      "Train under experienced musicians and performers who bring real-world knowledge into every lesson.",
  },
  {
    title: "Create, Record & Perform",
    description:
      "Explore music production, sound engineering, and live performance techniques for real musical growth.",
  },
  {
    title: "A Supportive Creative Community",
    description:
      "Join a vibrant community of learners and artists that inspires collaboration, creativity, and confidence.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you're always learning with the most current and effective methods.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you'll never find yourself without something new to explore.",
  },
];

function Tap() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden">

      {/* Top gold divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 text-center pt-24 pb-12 px-4">
        <span
          className="uppercase tracking-[0.35em] text-xs font-semibold mb-4 block"
          style={{ color: "#C9A84C" }}
        >
          Why Choose Us
        </span>
        <h2
          className="text-4xl md:text-6xl font-black"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #ffffff 30%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Believe Difference
        </h2>
        <div
          className="w-16 h-[2px] mx-auto mt-6"
          style={{ background: "#C9A84C" }}
        />
      </div>

      {/* Sticky scroll */}
      <div className="relative z-10">
        <StickyScroll content={musicSchoolContent} />
      </div>

      {/* Bottom diamond divider */}
      <div className="relative z-10 flex items-center gap-4 max-w-xs mx-auto py-12 px-4">
        <div className="h-[1px] flex-1 bg-neutral-800" />
        <div
          className="w-2 h-2 rotate-45 border"
          style={{ borderColor: "#C9A84C" }}
        />
        <div className="h-[1px] flex-1 bg-neutral-800" />
      </div>

      {/* Bottom gold divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

    </section>
  );
}

export default Tap;