"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { div } from "motion/react-client";
function Contact() {
  return (
    <div className=" bg-gray-950 mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 mb-15 px-30  ">
<div className="max-w-7xl">
          <h1 className="font-semibold text-xl">Company</h1>
          <ul className="space-y-2 text-gray-400 mt-3">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="courses">Careers</Link>
            </li>
            <li>
              <Link href="/coures">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-xl ">Quick Links</h1>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <Link href="/" className="font-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="font-light">
                Our Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-light">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-light">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-7xl">
          <h1 className="font-semibold text-xl ">Follow Us</h1>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <Link
                href="https://www.facebook.com/believemusicindia"
                className="font-light"
              >
                Facebook
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/believemusicindia/"
                className="font-light"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2Fhashtag%2FBelievemusicindia%3Fsrc%3Dhashtag_click"
                className="font-light"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-7xl">
          <h1 className="font-semibold text-xl"> Contact Us</h1>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>New Delhi, India</li>
            <li>Delhi 10001</li>
            <li>Email: info@musicschool.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>
      <p className="text-center font-extralight mb-7 text-xs">© 2026 From Gurukul to Global. All rights reserved.</p>
    </div>
  );
}

export default Contact;
