"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { title } from "process";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
    {
    title: "Master Your Instrument",
    description:
      "Learn guitar, piano, vocals, drums, and more with structured lessons designed to build strong foundations and advanced skills.",
  },
  {
    title: "Learn from Industry Professionals",
    description:
      "Train under experienced musicians and performers who bring real-world knowledge into every lesson.",
  },
  {
    title: "Create, Record & Perform",
    description:
      "Explore music production, sound engineering, and live performance techniques for real musical growth.",
  },
  {
    title: "A Supportive Creative Community",
    description:
      "Join a vibrant community of learners and artists that inspires collaboration, creativity, and confidence.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore.",
  },

  {
    title: "",
    description:
    ""
  },
];

function Tap() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default Tap;
