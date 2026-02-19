"use client";

import { Button } from "./ui/moving-border";
import courseData from "../data/music.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const Featured = () => {
  const featured = courseData.courses.filter((course) => course.isFeatured);

  return (
    <section className="relative w-full bg-[#04091A] overflow-hidden py-28">

      {/* Top blue divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,179,224,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <span
          className="uppercase tracking-[0.35em] text-xs font-semibold mb-4 block"
          style={{ color: "#7AB3E0" }}
        >
          Featured Courses
        </span>
        <h2
          className="text-4xl md:text-6xl font-black"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(135deg, #ffffff 30%, #7AB3E0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Learn With the Best
        </h2>
        <div
          className="w-16 h-[2px] mx-auto mt-6"
          style={{ background: "#7AB3E0" }}
        />
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-[#070E1F] overflow-hidden h-full max-w-sm w-full">
                <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow">

                  {/* Course number badge */}
                  <span
                    className="text-xs uppercase tracking-[0.2em] font-bold mb-4 px-3 py-1 rounded-full border"
                    style={{ color: "#7AB3E0", borderColor: "rgba(122,179,224,0.27)" }}
                  >
                    Course 0{course.id}
                  </span>

                  <p
                    className="text-xl font-black mb-3 text-white"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-400 leading-relaxed flex-grow mb-2">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <p
                    className="text-xs uppercase tracking-widest mt-4 mb-6"
                    style={{ color: "#7AB3E0" }}
                  >
                    {course.instructor}
                  </p>

                  <Link
                    href="/courses"
                    className="w-full text-center py-2 px-6 rounded-xl text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                    style={{ background: "#1A3F6F" }}
                  >
                    Know More →
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All button */}
      <div className="mt-10 text-center">
        <Link href="/courses">
          <Button className="font-semibold bg-white dark:bg-[#070E1F] text-black dark:text-white border-neutral-200 dark:border-[#0D1F3C] cursor-pointer">
            View All Courses
          </Button>
        </Link>
      </div>

      {/* Bottom diamond divider */}
      <div className="relative z-10 flex items-center gap-4 max-w-xs mx-auto mt-16 px-4">
        <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
        <div
          className="w-2 h-2 rotate-45 border"
          style={{ borderColor: "#7AB3E0" }}
        />
        <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
      </div>

      {/* Bottom blue divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
        }}
      />

    </section>
  );
};

export default Featured;