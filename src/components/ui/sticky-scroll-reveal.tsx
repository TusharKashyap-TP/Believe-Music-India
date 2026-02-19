"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Blue-toned background colors cycling through dark navy shades
  const backgroundColors = [
    "#04091A",
    "#050C20",
    "#060E22",
  ];

  // Blue-toned gradients for the right panel
  const linearGradients = [
    "linear-gradient(to bottom right, #7AB3E0, #0D1F3C)",
    "linear-gradient(to bottom right, #1A3F6F, #7AB3E0)",
    "linear-gradient(to bottom right, #0D1F3C, #b0d4f0)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* Left: scrolling text */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">

              {/* Blue number indicator */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0 }}
                className="block text-xs uppercase tracking-[0.3em] font-semibold mb-3"
                style={{ color: "#7AB3E0" }}
              >
                0{index + 1}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: activeCard === index ? "#ffffff" : "#6b6b6b",
                }}
              >
                {item.title}
              </motion.h2>

              {/* Blue underline on active */}
              <motion.div
                animate={{ width: activeCard === index ? "3rem" : "0rem" }}
                transition={{ duration: 0.3 }}
                className="h-[2px] mt-3 mb-4"
                style={{ background: "#7AB3E0" }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                className="mt-2 max-w-sm text-sm leading-relaxed"
                style={{ color: activeCard === index ? "#d4d4d4" : "#555" }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right: sticky visual panel */}
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-xl lg:block border",
          contentClassName,
        )}
        style={{
          background: backgroundGradient,
          borderColor: "rgba(122,179,224,0.3)",
          boxShadow: "0 0 40px rgba(122,179,224,0.1)",
        }}
      >
        {/* Decorative inner overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(122,179,224,0.3) 0px, transparent 1px, transparent 20px)",
          }}
        />
        {/* Active card number watermark */}
        <div
          className="absolute bottom-4 right-4 text-6xl font-black opacity-20 select-none"
          style={{ fontFamily: "'Georgia', serif", color: "#fff" }}
        >
          0{activeCard + 1}
        </div>
        <div className="relative z-10 p-4">
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};