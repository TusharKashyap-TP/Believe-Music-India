"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function Hero() {
  return (
    <div className="relative h-screen w-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden">

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #080808)",
        }}
      />

      {/* Subtle radial gold glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <span
          className="uppercase tracking-[0.4em] text-xs font-semibold mb-6"
          style={{ color: "#C9A84C" }}
        >
          Welcome to
        </span>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-8xl font-black leading-none mb-6"
          style={{
            fontFamily: "'Georgia', serif",
            background: "linear-gradient(160deg, #ffffff 0%, #e0e0e0 40%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Believe Music India
        </h1>

        {/* Gold rule */}
        <div
          className="w-20 h-[2px] mb-8"
          style={{ background: "#C9A84C" }}
        />

        {/* Subheading */}
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-light mb-12">
          Believe in Music blends legacy and creativity through guided learning
          and practice, empowering artists to grow with confidence and discover
          their unique sound.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="mt-10 text-center">
        <Link href="/courses">
          <Button className=" font-semibold bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer ">
            View All Courses
          </Button>
        </Link>
      </div>  
          
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className=" absolute bottom-10 z-20 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-neutral-400 mt-10">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-400 to-transparent animate-pulse" />
      </div>

    </div>
  );
}

export default Hero;