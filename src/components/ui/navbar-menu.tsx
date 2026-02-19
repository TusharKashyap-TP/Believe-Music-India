/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, Transition } from "framer-motion";

/* FIXED transition typing */
const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium tracking-wide transition-colors duration-200"
        style={{
          color: active === item ? "#7AB3E0" : "#a3a3a3",
        }}
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
                style={{
                  background: "rgba(4,9,26,0.95)",
                  border: "1px solid rgba(122,179,224,0.2)",
                  boxShadow: "0 0 30px rgba(122,179,224,0.08)",
                }}
              >
                <div
                  className="w-full h-[1px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #7AB3E0, transparent)",
                  }}
                />

                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full flex justify-center items-center space-x-6 px-8 py-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-3 group">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-xl shadow-2xl"
      />
      <div>
        <h4
          className="text-base font-black mb-1"
          style={{ fontFamily: "'Georgia', serif", color: "#ffffff" }}
        >
          {title}
        </h4>
        <p className="text-sm max-w-[10rem]" style={{ color: "#737373" }}>
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-sm font-light transition-colors duration-200 block py-0.5"
      style={{ color: "#a3a3a3" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#7AB3E0")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
    >
      {children}
    </a>
  );
};
