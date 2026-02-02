"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/data.json";
import Contact  from '@/components/Contact'
function page() {
  return (
    <div>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b mb-8 from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About US
          </h1>
          <p></p>
          <span className="text-l font-medium  text-neutral-300  max-w-lg mx-auto my-7  text-center relative  z-10">
            Believe in Music is a creative learning space built on discipline,
            heritage, and modern expression. We bring together dedicated mentors
            and passionate learners to explore music through structured
            practice, performance, and experimentation. Rooted in timeless
            traditions and shaped by contemporary sounds, our approach focuses
            on real growth, artistic confidence, and individuality. We believe
            music is more than a skill — it’s a journey of consistency,
            creativity, and self-discovery.
          </span>
        </div>
      </div>
      <div className="bg-gray-950 text-white">
        <div className=" max-w-5xl mx-auto p-4   ">
          <h1 className="text-4xl    font-bold mt-6 mb-7 underline">
            Believe in India
          </h1>
          <p className="  font-medium max-w  mx-auto my-7  text-xl relative z-10 ">
            Believe has been active in India’s music scene since 2013, a vast
            and vibrant market with a rich variety of genres, languages and
            artists. We have traditionally offered a gamut of services including
            sales and distribution, building audiences with local partners,
            major audio and video streaming and entertainment platforms.
          </p>
          <p className="  font-medium   max-w  mx-auto my-7  text-xl relative z-10 ">
            {" "}
            Since 2019 we’ve expanded our services and team: 230+ music industry
            experts working out of offices in Mumbai, Mohali and Chennai.
            Together they provide a range of artist services, digital content
            and trade marketing, music licensing and bespoke branding solutions.
          </p>
          <h1 className="text-4xl font-bold mt-6 mb-7 underline ">Artists & Label Focus</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {courseData?.artist?.map((artist, index) => (
          <CardContainer key={index} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {artist.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {artist.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={artist.image}
                  height={1000}
                  width={1000}
                  className="h-100 w-100 rounded-xl group-hover/card:shadow-xl"
                  alt={artist.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
        </div>
        <BackgroundBeams />
        <Contact/>
         

    </div>
  );
}

export default page;
