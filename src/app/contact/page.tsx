"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Contact from "@/components/Contact";

function Page() {
  const [result, setResult] = useState("");

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "040d05cd-6694-4720-a1f5-3d83032c4da5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      form.reset();
    } else {
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="relative">
      {/* your JSX stays SAME */}
    </div>
  );
}

export default Page;
