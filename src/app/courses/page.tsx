'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import courseData from "@/data/music.json";
import Contact from '@/components/Contact';

/* =========================
   FIXED TYPE (IMPORTANT)
========================= */
type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor?: string;
  isFeatured?: boolean;
  image: string;

  // optional fields used in UI
  level?: string;
  duration?: string;
  lessons?: number;
  category?: string;
};

const courses = courseData.courses as Course[];

/* ───────────────────────── */
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

/* ───────────────────────── */
function CourseCard({ course }: { course: Course }) {
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
          {course.instructor && (
            <CardItem translateZ="30" className="mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7AB3E0]">
                {course.instructor}
              </span>
            </CardItem>
          )}

          <CardItem translateZ="50" className="text-xl font-black text-white mb-2">
            {course.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm leading-relaxed mb-4"
          >
            {course.description}
          </CardItem>

          <CardItem translateZ="100" className="w-full">
{/* <<<<<<< HEAD */}
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
=======
            <Image
              src={course.image}
              height={600}
              width={600}
              className="h-44 w-full object-cover rounded-xl"
              alt={course.title}
            />
{/* >>>>>>> 3ef811d (fix TypeScript errors) */}
          </CardItem>

          {/* META */}
          <div className="mt-auto pt-4 border-t border-[#0D1F3C] text-sm flex gap-3 flex-wrap">
            {course.level && <span>🎯 {course.level}</span>}
            {course.duration && <span>⏱ {course.duration}</span>}
            {course.lessons && <span>📚 {course.lessons} lessons</span>}
          </div>

          <div className="mt-2 font-bold text-[#7AB3E0]">₹{course.price}</div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(
        courses
          .map((c) => c.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ];

  const filtered: Course[] =
    activeFilter === "All"
      ? courses
      : courses.filter(
          (c) => c.category?.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <main className="min-h-screen bg-[#04091A] text-white">

      <section className="pt-36 pb-24 px-6 text-center">
        <BackgroundBeams />
        <h1 className="text-6xl font-black mb-6">All Courses</h1>
        <p className="text-neutral-400">
          {courses.length} courses available
        </p>
      </section>

      <section className="px-6 pb-10">
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
      </section>

      <section className="px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
