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

  // Gold-toned radial gradient replacing the original cyan/purple/blue
  const goldGradient = [
    "radial-gradient(circle_farthest-side_at_0_100%, #C9A84C, transparent)",
    "radial-gradient(circle_farthest-side_at_100%_0, #8a6420, transparent)",
    "radial-gradient(circle_farthest-side_at_100%_100%, #d4b96a, transparent)",
    "radial-gradient(circle_farthest-side_at_0_0, #7a5f1a, #080808)",
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
          backgroundImage: goldGradient,
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
          backgroundImage: goldGradient,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};