/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl px-4 py-2 text-xs shadow-xl"
                // Gold-themed tooltip box
                // @ts-ignore
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                  background: "rgba(8,8,8,0.95)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 0 20px rgba(201,168,76,0.15)",
                }}
              >
                {/* Gold bottom line accents */}
                <div
                  className="absolute inset-x-4 -bottom-px z-30 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #C9A84C, transparent)",
                  }}
                />

                <div
                  className="relative z-30 text-sm font-black"
                  style={{
                    fontFamily: "'Georgia', serif",
                    color: "#ffffff",
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="text-xs font-medium mt-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Avatar with gold ring on hover */}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full object-cover object-top !p-0 transition-all duration-300 group-hover:z-30 group-hover:scale-110"
            style={{
              border: hoveredIndex === item.id
                ? "2px solid #C9A84C"
                : "2px solid rgba(201,168,76,0.25)",
              boxShadow: hoveredIndex === item.id
                ? "0 0 16px rgba(201,168,76,0.4)"
                : "none",
            }}
          />
        </div>
      ))}
    </>
  );
};