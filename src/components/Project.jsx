"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import hero from "../assets/projects/2.webp";
import acrewala from "../assets/projects/mockups/acrewala.webp";
import tripeloo from "../assets/projects/mockups/tripeloo.webp";
import sagara from "../assets/projects/mockups/bb.webp";
import doorcarts from "../assets/projects/mockups/doorcarts.webp";
import casaAura from "../assets/projects/mockups/mockupcasa.webp";
import dva from "../assets/projects/mockups/dva3.webp";
import Image from "next/image";

const projects = [
  {
    title: "casaAura",
    description:
      "An elegant home decor e-commerce website offering a curated selection of furniture, lighting, and interior accessories. Built with React and TailwindCSS, featuring a responsive UI, product filtering, and a seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    live: "https://cas4aura.netlify.app",
    image: casaAura,
  },
  {
    title: "Tripeloo",
    description:
      "A modern travel booking platform that allows users to explore and book resorts, holiday packages, and events. Features include dynamic search filters, real-time availability, and a seamless booking experience with an intuitive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    live: "https://tripeloodemo.netlify.app",
    image: tripeloo,
  },
  {
    title: "DVA",
    description:
      "A stylish fashion showcase website highlighting premium women's dresses, designed with an elegant and responsive UI. It allows users to explore collections, view product details, and make direct enquiries through WhatsApp for a personalized shopping experience.",
    tech: ["React", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    live: "https://d-va.netlify.app",
    image: dva,
  },
  {
    title: "Acrewala",
    description:
      "E‑commerce with server actions, Stripe payments, inventory sync, and Redis caching for hot products.",
    tech: ["React", "MongoDB", "Node.js"],
    live: "https://acerwala.netlify.app",
    image: acrewala,
  },
  {
    title: "DoorCarts",
    description:
      "A collaborative meeting management platform that enables users to schedule meetings, create polls, and participate in real-time decision-making. Includes secure admin and user login, meeting participation, and interactive polling features for smooth coordination.",
    tech: ["React", "Firebase", "TailwindCSS"],
    live: "https://doorcarts.vercel.app/",
    image: doorcarts,
  },
  {
    title: "Sagara Blackborn",
    description:
      "A Flutter application built for a local sports and arts club to manage monthly membership payments, track expenses, store member data, and generate detailed payment records. Includes features like manual payment entry, history view, receipt generation, and secure API-based data storage.",
    tech: ["Flutter", "Node.js"],
    github: "https://github.com/shaanis/sagara.git",
    image: sagara,
  },
];

const Project = () => {
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();
  const openPage = () => {
    router.push("/projects");
  }

  return (
    <>
      <section
        id="projects"
        className="relative w-full bg-white rounded-t-[10px] sm:rounded-t-[26px] md:rounded-t-[18px] shadow-2xl overflow-hidden"
      >
        {/* ------------------ HERO SECTION ------------------ */}
        <div className="relative w-full h-[250px] sm:h-[380px] ">
          <Image
            loading="lazy"
            src={hero}
            alt="Mohammed Shanis Portfolio - Latest Full Stack and Flutter Projects"
            className="w-full h-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-10 left-6 sm:bottom-20 sm:left-16 text-white">
            <h2 className="text-lg sm:text-2xl font-medium">Latest Projects</h2>
            <button onClick={openPage} className="mt-2 underline text-sm font-light">
              see all →
            </button>
          </div>
        </div>

        {/* ------------------ INFINITE RUNNING SECTION ------------------ */}
        <div className="w-full py-16 bg-white overflow-hidden relative">
          
          
          <motion.div
            className="flex space-x-6 w-max px-3"
            animate={isPaused ? "paused" : { x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25, 
              repeat: Infinity,
            }}
          >
            {projects.map((item, index) => (
              <div
                key={`set1-${index}`}
                className="w-[240px] xs:w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-[160px] sm:h-[200px] md:h-[220px] bg-gray-100 rounded-xl overflow-hidden group">
                  {/* Image */}
                  <Image
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 sm:p-5 flex flex-col justify-end text-white">
                    <h3 className="text-sm sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs mt-1 line-clamp-3 opacity-80">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[8px] sm:text-[10px] bg-white/20 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="mt-3 text-sm sm:text-base font-medium text-gray-800 px-1">
                  {item.title}
                </h3>
              </div>
            ))}

            {projects.map((item, index) => (
              <div
                key={`set2-${index}`}
                className="w-[240px] xs:w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-[160px] sm:h-[200px] md:h-[220px] bg-gray-100 rounded-xl overflow-hidden group">
                  <Image
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 sm:p-5 flex flex-col justify-end text-white">
                    <h3 className="text-sm sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs mt-1 line-clamp-3 opacity-80">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[8px] sm:text-[10px] bg-white/20 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-sm sm:text-base font-medium text-gray-800 px-1">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Project;