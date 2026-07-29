"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import profile from "../assets/projects/mockups/profile.jpeg";
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="bg-[#030303] text-white min-h-screen selection:bg-white selection:text-black overflow-hidden">
     <SEO {...seoData.about} />

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                              linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

      
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center">

          {/* PROFILE */}
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative mb-12"
          >
            {/* glowing ring */}

            {/* rotating border */}
            <div className="absolute -inset-3 border border-white/10 rounded-full animate-spin-slow" />

            <Image
              src={profile}
              alt="Shanis"
              className="relative w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* NAME */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <span className="text-[10px] tracking-[0.7em] text-white/20 uppercase block mb-4">
              Developer_Profile
            </span>

            <h1 className="text-6xl md:text-[7vw] font-bold tracking-tight leading-none">
              Mohammed <br />
              <span className="text-white/30 italic font-light">Shanis</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* TEXT */}
        <div className="lg:col-span-8 space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Engineering Meets <br />
            <span className="text-white/40">Creative Precision.</span>
          </motion.h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
            <p>
              I build scalable, production-ready applications using the MERN stack,
              focusing on performance, architecture, and clean design systems.
            </p>
            <p>
              My work blends <span className="text-white">logic</span> with
              <span className="text-white"> aesthetics</span>, creating digital
              products that are both powerful and visually refined.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          {[
            { label: "Projects", value: "50+" },
            { label: "Experience", value: "2y+" },
            { label: "Clients", value: "20+" },
            { label: "Availability", value: "Open" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center hover:bg-white hover:text-black transition-all duration-500"
            >
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-40">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-12">

          <div className="md:col-span-4">
            <h2 className="text-xl uppercase tracking-widest text-white/20 sticky top-32">
              Journey
            </h2>
          </div>

          <div className="md:col-span-8 space-y-20">
            {[
              {
                year: "2025",
                title: "Full Stack Developer",
                desc: "Building real-time apps, booking platforms, and scalable systems.",
              },
              {
                year: "2024",
                title: "Frontend Specialist",
                desc: "Advanced UI animations with GSAP & Framer Motion.",
              },
              {
                year: "2023",
                title: "Started Journey",
                desc: "Learned JavaScript, React, and backend fundamentals.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative pl-10 border-l border-white/10 group"
              >
                {/* glowing dot */}
                <div className="absolute left-[-6px] top-1 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white] group-hover:scale-150 transition" />

                <span className="text-sm text-white/30">{item.year}</span>
                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT COMPONENT ================= */}
      <div className="bg-black rounded-t-[3rem]">
        <AboutMe />
      </div>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            Let’s Build Something <br />
            <span className="text-white/40 italic">Extraordinary</span>
          </h2>

          <a
            href="/contact"
            className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* SPIN */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;