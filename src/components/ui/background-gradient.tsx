"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  // Blue-toned radial gradient replacing the gold
  const blueGradient = [
    "radial-gradient(circle_farthest-side_at_0_100%, #7AB3E0, transparent)",
    "radial-gradient(circle_farthest-side_at_100%_0, #1A3F6F, transparent)",
    "radial-gradient(circle_farthest-side_at_100%_100%, #b0d4f0, transparent)",
    "radial-gradient(circle_farthest-side_at_0_0, #0D1F3C, #04091A)",
  ].join(",");

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>

      {/* Blurred outer glow */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: blueGradient,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-50 group-hover:opacity-80 blur-xl transition duration-500 will-change-transform",
        )}
      />

      {/* Sharp inner border gradient */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: blueGradient,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};