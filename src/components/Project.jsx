import React, { useState } from "react";

const categories = ["Projects"];
import hero from "../assets/projects/2.webp";
import acrewala from "../assets/projects/mockups/acrewala.webp";
import tripeloo from "../assets/projects/mockups/tripeloo.webp";
import sagara from "../assets/projects/mockups/bb.webp";
import doorcarts from "../assets/projects/mockups/doorcarts.webp";
import casaAura from "../assets/projects/mockups/mockupcasa.webp";
import dva from "../assets/projects/mockups/dva3.webp";
import Header from "../components/Header";

const projects = [
  {
    title: "casaAura",
    description:
      "An elegant home decor e-commerce website offering a curated selection of furniture, lighting, and interior accessories. Built with React and TailwindCSS, featuring a responsive UI, product filtering, and a seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    // github: "https://github.com/shaanis/casaAura", // update if different repo
    live: "https://cas4aura.netlify.app", // corrected URL casing
    image: casaAura,
  }
  ,
  {
    title: "Tripeloo",
    description:
      "A modern travel booking platform that allows users to explore and book resorts, holiday packages, and events. Features include dynamic search filters, real-time availability, and a seamless booking experience with an intuitive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    // github: "https://github.com/shaanis/tripeloo", // update with your actual repo URL
    live: "https://tripeloodemo.netlify.app", // update if deployed elsewhere
    image: tripeloo,
  }
  ,
  {
    title: "DVA",
    description:
      "A stylish fashion showcase website highlighting premium women's dresses, designed with an elegant and responsive UI. It allows users to explore collections, view product details, and make direct enquiries through WhatsApp for a personalized shopping experience.",
    tech: ["React", "TailwindCSS", "MongoDB", "Express", "Node.js"], // adjust if you used different tech
    // github: "https://github.com/shaanis/dva", // update with your actual repo link
    live: "https://d-va.netlify.app", // update with your actual live link
    image: dva,
  }
  ,
  {
    title: "Acrewala",
    description:
      "E‑commerce with server actions, Stripe payments, inventory sync, and Redis caching for hot products.",
    tech: ["React", "MongoDB", "Node.js"],
    // github: "https://github.com/shaanis/shoppulse",
    live: "https://acerwala.netlify.app",
    image: acrewala
  },
  {
    title: "DoorCarts",
    description:
      "A collaborative meeting management platform that enables users to schedule meetings, create polls, and participate in real-time decision-making. Includes secure admin and user login, meeting participation, and interactive polling features for smooth coordination.",
    tech: ["React", "Firebase", "TailwindCSS"],
    // github: "https://github.com/shaanis/doorcarts", // update if different
    live: "https://doorcarts.vercel.app/",
    image: doorcarts,
  }
  ,
  {
    title: "Sagara Blackborn",
    description:
      "A Flutter application built for a local sports and arts club to manage monthly membership payments, track expenses, store member data, and generate detailed payment records. Includes features like manual payment entry, history view, receipt generation, and secure API-based data storage.",
    tech: ["Flutter", "Node.js"],
    github: "https://github.com/shaanis/sagara.git",
    image: sagara,
  }

];

const Project = () => {
  const [active, setActive] = useState("Mens");

  return (
    <>
      <section
        id="projects"
        className="relative w-full bg-white rounded-t-[10px] sm:rounded-t-[26px] md:rounded-t-[18px] shadow-2xl overflow-hidden"
      >        {/* <Header/> */}
        {/* ------------------ HERO SECTION ------------------ */}
        <div className="relative w-full h-[250px] sm:h-[380px] ">
          {/* HERO IMAGE */}
          <img loading="lazy"
            src={hero}
            alt="Mohammed Shanis Portfolio - Latest Full Stack and Flutter Projects"
            className="w-full h-full object-cover object-center "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* TEXT CONTENT */}
          <div className="absolute bottom-10 left-6 sm:bottom-20 sm:left-16 text-white">
            <h2 className="text-lg sm:text-2xl font-medium">Latest Projects</h2>
            <button className="mt-2 underline text-sm font-light">
              see all →
            </button>
          </div>
        </div>


        {/* ------------------ PRODUCT SECTION ------------------ */}
        <div className="w-[90%] mx-auto py-12">
          {/* Tabs */}
          <div className="flex justify-center space-x-10 text-gray-500 text-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`pb-2 ${active === "Projects"
                  ? "text-black border-b-2 border-black"
                  : "hover:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {/* Product Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
            {projects.map((item, index) => (
              <div key={index} className="cursor-pointer w-full">

                <div className="relative 
          w-full 
          h-[150px] 
          xs:h-[170px]
          sm:h-[200px] 
          md:h-[230px] 
          bg-gray-100 
          rounded-lg 
          overflow-hidden 
          group">

                  {/* Image */}
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="
            absolute inset-0 bg-black/70 
            opacity-0 group-hover:opacity-100 
            transition-all duration-500
            p-3 sm:p-4 
            flex flex-col justify-end 
            text-white
          "
                  >
                    <h3 className="text-xs sm:text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-[9px] sm:text-xs mt-1 line-clamp-3 opacity-90">
                      {item.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[7px] sm:text-[10px] bg-white/20 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-2 sm:mt-4 text-xs sm:text-base text-gray-700">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Project;
