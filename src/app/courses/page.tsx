'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import courseData from "@/data/music.json";
import Contact from '@/components/Contact';

/* ─────────────────────────────────────────────────
   Category filter pill
───────────────────────────────────────────────── */
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] border transition-all duration-300 overflow-hidden group"
      style={{
        borderColor: active ? "#7AB3E0" : "#0D1F3C",
        background: active ? "#7AB3E0" : "linear-gradient(145deg, #070E1F, #05091A)",
        color: active ? "#04091A" : "#4a6a8a",
      }}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      <span className="relative">{label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────────
   Course card — fixed 22rem × 30rem uniform size
───────────────────────────────────────────────── */
function CourseCard({ course }: { course: (typeof courseData.courses)[0] }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card">
        <div
          className="rounded-2xl border p-6 overflow-hidden flex flex-col"
          style={{
            background: "linear-gradient(145deg, #070E1F, #05091A)",
            borderColor: "#0D1F3C",
            width: "22rem",
            height: "30rem",
          }}
        >
          {/* Blue top accent */}
          <div
            className="absolute top-0 left-8 right-8 h-[1px]"
            style={{
              background:
                "linear-gradient(to right, transparent, #7AB3E0, transparent)",
            }}
          />

          {/* Instructor badge */}
          {course.instructor && (
            <CardItem translateZ="30" className="mb-3">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "#7AB3E0" }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#7AB3E0" }}
                />
                {course.instructor}
              </span>
            </CardItem>
          )}

          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-black text-white leading-tight mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {course.title}
          </CardItem>

          {/* Description — clamped to 2 lines */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm leading-relaxed mt-2 mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {course.description}
          </CardItem>

          {/* Image — fixed height */}
          <CardItem translateZ="100" className="w-full">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={course.image}
                height={600}
                width={600}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                alt={course.title}
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

           
            </div>
          </CardItem>

          {/* Meta row — pushed to bottom */}
          <div
            className="flex items-center gap-4 mt-auto pt-4 border-t text-[10px] uppercase tracking-widest text-neutral-600"
            style={{ borderColor: "#0D1F3C" }}
          >
            {course.duration && <span>⏱ {course.duration}</span>}
            {course.lessons && <span>◈ {course.lessons} lessons</span>}
            {course.price && (
              <span className="ml-auto font-bold" style={{ color: "#7AB3E0" }}>
                {course.price}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-4">
            <CardItem
              translateZ={20}
              as="button"
              className="text-xs font-medium tracking-wide transition-colors duration-200 hover:text-white"
              style={{ color: "#7AB3E0" }}
            >
              Learn more →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="relative overflow-hidden group/btn px-5 py-2 text-xs font-bold text-white tracking-widest uppercase transition-opacity duration-200 hover:opacity-90"
              style={{ background: "#1A3F6F" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />
              <span className="relative">Enroll Now</span>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

/* ─────────────────────────────────────────────────
   Main page
───────────────────────────────────────────────── */
export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Auto-generate unique categories from JSON data
  const categories = [
    "All",
    ...Array.from(
      new Set(
        courseData.courses
          .map((c) => c.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ];

  const filtered =
    activeFilter === "All"
      ? courseData.courses
      : courseData.courses.filter((c) =>
          c.category?.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <main className="min-h-screen bg-[#04091A] text-white overflow-x-hidden">

      {/* ── HERO HEADER ── */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04091A] z-10 pointer-events-none" />

        {/* Left accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #7AB3E0 30%, #7AB3E0 70%, transparent)",
          }}
        />

        <div className="relative z-20 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7AB3E0]" />
            <span
              className="text-[10px] uppercase tracking-[0.35em] font-semibold"
              style={{ color: "#7AB3E0" }}
            >
              Our Curriculum
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#7AB3E0]" />
          </div>

          <h1
            className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6"
            style={{
              fontFamily: "'Georgia', serif",
              background: "linear-gradient(135deg, #fff 30%, #7AB3E0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            All Courses
          </h1>

          {/* Decorative rule */}
          <div
            className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "#7AB3E0" }}
          />

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-light">
            {courseData.courses.length} curated programs built for every stage
            of your musical journey — from foundations to mastery.
          </p>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2 opacity-40">
            <span className="text-[10px] tracking-widest uppercase text-neutral-400">
              Explore
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-neutral-400 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* Section divider */}
          <div className="flex items-center gap-6 mb-10">
            <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-semibold"
              style={{ color: "#7AB3E0" }}
            >
              Filter by Category
            </span>
            <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>

          {/* Live count */}
          <p className="text-center mt-6 text-xs uppercase tracking-widest text-neutral-600">
            Showing{" "}
            <span style={{ color: "#7AB3E0" }}>{filtered.length}</span>{" "}
            {filtered.length === 1 ? "course" : "courses"}
          </p>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="px-6 pb-14">
        <div
          className="max-w-3xl mx-auto grid grid-cols-3 gap-6 border-y py-8"
          style={{ borderColor: "#0D1F3C" }}
        >
          {[
            { num: `${courseData.courses.length}+`, label: "Courses" },
            { num: "12+", label: "Mentors" },
            { num: "500+", label: "Students" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-black"
                style={{ color: "#7AB3E0" }}
              >
                {s.num}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COURSE GRID ── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-neutral-600 text-sm uppercase tracking-widest">
                No courses found in this category.
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-2">
              {filtered.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="relative px-6">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #7AB3E0 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #7AB3E0 0px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="relative z-10">
          <Contact />
        </div>
      </section>

    </main>
  );
}