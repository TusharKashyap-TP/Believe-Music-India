"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
  },
];

function Upcoming() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-28">

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
            "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 text-center mb-4 px-4">
        <span
          className="uppercase tracking-[0.35em] text-xs font-semibold mb-4 block"
          style={{ color: "#C9A84C" }}
        >
          Upcoming Webinars
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
          Learn With the Best
        </h2>
        <div
          className="w-16 h-[2px] mx-auto mt-6"
          style={{ background: "#C9A84C" }}
        />
      </div>

      {/* Hover effect cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: `/courses/${webinar.slug}`,
          }))}
        />
      </div>

      {/* CTA button */}
      <div className="relative z-10 mt-10 text-center">
        <Link href="/courses">
          <Button className="font-semibold bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer">
            View All Webinars
          </Button>
        </Link>
      </div>

      {/* Bottom diamond divider */}
      <div className="relative z-10 flex items-center gap-4 max-w-xs mx-auto mt-16 px-4">
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

export default Upcoming;