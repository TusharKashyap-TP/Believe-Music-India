"use client";
import React from "react";
import { motion } from "motion/react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LampContainer } from "./ui/lamp";

const people = [
  {
    id: 1,
    name: "Arjun Malhotra",
    designation: "Classical Guitarist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 2,
    name: "Kavya Nair",
    designation: "Carnatic Vocalist",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    id: 3,
    name: "Ritvik Banerjee",
    designation: "Tabla Artist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    designation: "Hindustani Classical Singer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 5,
    name: "Aditya Rao",
    designation: "Music Producer & Composer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

function Us() {
  return (
    <LampContainer>
      <motion.h1
        className="text-center text-6xl font-bold mb-10"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Meet Our Indian Artists
      </motion.h1>
      <h4 className="font-semibold text-2xl">Discover the talented professionals who will guide your musical journey

</h4>

      <div className="flex flex-row items-center justify-center  gap-3 mt-4 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </LampContainer>
  );
}

export default Us;
