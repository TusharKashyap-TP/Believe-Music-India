"use client";
import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

function Cards() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-24">

      {/* Top divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Dotted animated background */}
      <DottedGlowBackground
        className="absolute inset-0 pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-700"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Eyebrow */}
        <span
          className="uppercase tracking-[0.35em] text-xs font-semibold mb-4"
          style={{ color: "#C9A84C" }}
        >
          Testimonials
        </span>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-4 px-4"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #fff 30%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hear Our Harmony
        </h2>

        {/* Sub-heading */}
        <p className="text-neutral-400 text-base mb-12 tracking-wide">
          Voices of success from our students
        </p>

        {/* Gold rule */}
        <div
          className="w-16 h-[2px] mb-12"
          style={{ background: "#C9A84C" }}
        />

        {/* Infinite moving cards */}
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

      </div>

      {/* Bottom divider line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

    </section>
  );
}

export default Cards;