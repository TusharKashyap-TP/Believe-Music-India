"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/data.json";
import Contact from "@/components/Contact";

function Page() {
  return (
    <main className="bg-[#04091A] text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04091A] z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
          <span
            className="uppercase tracking-[0.35em] text-xs font-semibold mb-6"
            style={{ color: "#7AB3E0" }}
          >
            Our Story
          </span>

          <h1
            className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8"
            style={{
              fontFamily: "'Georgia', serif",
              background: "linear-gradient(135deg, #fff 30%, #7AB3E0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Us
          </h1>

          <div className="w-16 h-[2px] mb-8" style={{ background: "#7AB3E0" }} />

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            Believe in Music is a creative learning space built on discipline,
            heritage, and modern expression. We bring together dedicated mentors
            and passionate learners to explore music through structured practice,
            performance, and experimentation. Rooted in timeless traditions and
            shaped by contemporary sounds — it&apos;s a journey of consistency,
            creativity, and self-discovery.
          </p>
        </div>

        <div className="absolute bottom-10 z-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-neutral-400">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── BELIEVE IN INDIA ── */}
      <section className="relative py-28 px-6">
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #7AB3E0 30%, #7AB3E0 70%, transparent)",
          }}
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="md:sticky md:top-32">
            <span
              className="block uppercase tracking-[0.3em] text-xs font-semibold mb-4"
              style={{ color: "#7AB3E0" }}
            >
              Since 2013
            </span>
            <h2
              className="text-5xl font-black leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Believe
              <br />
              <span style={{ color: "#7AB3E0" }}>in India</span>
            </h2>
            <div
              className="mt-6 w-10 h-10 border-2 rotate-45"
              style={{ borderColor: "#7AB3E033" }}
            />
          </div>

          <div className="space-y-8 text-neutral-300 text-lg font-light leading-relaxed border-l border-[#0D1F3C] pl-12">
            <p>
              Believe has been active in India&apos;s music scene since{" "}
              <span className="text-white font-medium">2013</span>, a vast and
              vibrant market with a rich variety of genres, languages and artists.
              We have traditionally offered a gamut of services including sales
              and distribution, building audiences with local partners, major
              audio and video streaming and entertainment platforms.
            </p>
            <p>
              Since 2019 we&apos;ve expanded our services and team:{" "}
              <span className="text-white font-medium">230+ music industry</span>{" "}
              experts working out of offices in Mumbai, Mohali and Chennai.
              Together they provide a range of artist services, digital content
              and trade marketing, music licensing and bespoke branding solutions.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#0D1F3C]">
              {[
                { num: "230+", label: "Experts" },
                { num: "3",    label: "Offices" },
                { num: "10+",  label: "Years"   },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-black" style={{ color: "#7AB3E0" }}>{s.num}</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTISTS SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
            <div className="text-center">
              <span
                className="block uppercase tracking-[0.3em] text-xs font-semibold mb-2"
                style={{ color: "#7AB3E0" }}
              >
                Roster
              </span>
              <h2
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Artists &amp; Labels
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-[#0D1F3C]" />
          </div>

          {/* ── Card grid: 3 cols on lg, 2 on md, 1 on sm ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {courseData?.artist?.map((artist, index) => (
              <CardContainer key={index} className="inter-var w-full">
                <CardBody className="relative group/card w-full">
                  <div
                    className="relative flex flex-col w-full h-[26rem] rounded-2xl border p-6 overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, #070E1F, #05091A)",
                      borderColor: "#0D1F3C",
                    }}
                  >
                    {/* Silver-blue top accent */}
                    <div
                      className="absolute top-0 left-8 right-8 h-[1px]"
                      style={{
                        background: "linear-gradient(to right, transparent, #7AB3E0, transparent)",
                      }}
                    />

                    {/* Title */}
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-white mb-1 shrink-0"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {artist.title}
                    </CardItem>

                    {/* Description */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-400 text-sm leading-relaxed mt-2 mb-4 shrink-0"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: "hidden",
                      }}
                    >
                      {artist.description}
                    </CardItem>

                    {/* Image */}
                    <CardItem translateZ="100" className="w-full flex-1 min-h-0">
                      <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <Image
                          src={artist.image}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                          alt={artist.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    </CardItem>

                    {/* Actions */}
                    <div
                      className="flex justify-between items-center mt-4 pt-4 border-t shrink-0"
                      style={{ borderColor: "#0D1F3C" }}
                    >
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="text-xs font-medium tracking-wide transition-colors hover:text-white"
                        style={{ color: "#7AB3E0" }}
                      >
                        Learn more →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="relative overflow-hidden group/btn px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#1A3F6F" }}
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />
                        <span className="relative">Connect</span>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="relative py-20 px-6">
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

export default Page;