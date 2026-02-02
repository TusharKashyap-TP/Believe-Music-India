"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Contact  from '@/components/Contact'


function Page() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target; // ✅ get form reference
    const formData = new FormData(form);
    formData.append("access_key", "040d05cd-6694-4720-a1f5-3d83032c4da5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      form.reset(); // ✅ RESET FORM HERE
    } else {
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="relative">
      <div className="mt-40 p-4 text-center">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b mb-8 from-neutral-200 to-neutral-600 font-sans font-bold">
          Contact Us
        </h1>

        <p className="max-w-xl mx-auto text-neutral-300">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
      </div>

      <section className="relative z-10 max-w-xl mx-auto p-6">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-white">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Your Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-white text-black font-semibold hover:bg-blue-600"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center text-green-400 font-medium">
              {result}
            </p>
          )}
        </form>
      </section>

      <BackgroundBeams />
      <Contact/>
    </div>
  );
}

export default Page;
