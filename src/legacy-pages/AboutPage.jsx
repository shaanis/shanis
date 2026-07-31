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
    <div className="bg-[#050505] text-neutral-200 min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
      <SEO {...seoData.about} />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,191,0,0.04),transparent_60%)]" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* PROFILE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-amber-500/30 ring-offset-2 ring-offset-[#050505]">
              <Image
                src={profile}
                alt="Mohammed Shanis"
                priority
                className="object-cover w-full h-full filter grayscale contrast-110"
              />
              {/* Golden glow overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-500/20 to-transparent opacity-60" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-amber-500/10 animate-spin-slow" />
          </motion.div>

          {/* NAME */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-amber-500/60 font-mono">
              Full Stack Developer
            </span>

            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white leading-tight">
              Mohammed{" "}
              <span className="font-serif italic text-amber-400">
                Shanis
              </span>
            </h1>
          </motion.div>

          {/* Subtle decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mt-8"
          />
        </div>
      </section>

      {/* ================= PHILOSOPHY & STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* TEXT */}
          <div className="lg:col-span-7 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light text-white leading-snug"
            >
              Engineering meets{" "}
              <br />
              <span className="font-serif italic text-amber-400/80">
                creative precision.
              </span>
            </motion.h2>

            <div className="space-y-6 text-neutral-400 font-light text-lg md:text-xl leading-relaxed">
              <p>
                I architect and build performant, scalable applications with
                modern JavaScript frameworks. My focus lies in core
                architecture, clean code, and fast user interfaces.
              </p>
              <p className="text-neutral-500">
                Bridging backend logic with polished aesthetics to build
                simple solutions for complex digital problems.
              </p>
            </div>
          </div>

          {/* STATS — Glassmorphism cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/[0.02]">
            {[
              { label: "Projects", value: "6+" },
              { label: "Experience", value: "1 Year" },
              { label: "Availability", value: "Open" },
              { label: "Status", value: "Available" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.02] hover:bg-amber-500/5 transition-all duration-500 group"
              >
                <div className="text-3xl md:text-4xl font-light text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
                  {item.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-mono">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY / TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.5em] text-amber-500/60 font-mono sticky top-24">
              Journey
            </h2>
          </div>

          <div className="md:col-span-8 space-y-14">
            {[
              {
                year: "2025",
                title: "Full Stack Developer",
                desc: "Building real-time applications, platforms, and scalable backend services.",
              },
              {
                year: "2024",
                title: "Frontend Specialist",
                desc: "Crafting modern web interfaces with advanced motion and interactivity.",
              },
              // {
              //   year: "2023",
              //   title: "Foundations",
              //   desc: "Deep-dived into JavaScript, Web performance, and API design.",
              // },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative pl-8 border-l border-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <span className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-neutral-800 border border-neutral-700 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-normal text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-amber-500/50 mt-1 sm:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-neutral-400 font-light text-sm max-w-xl leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT COMPONENT ================= */}
      <div className="border-t border-white/5">
        <AboutMe />
      </div>

      {/* ================= CTA ================= */}
      <section className="relative py-36 px-6 border-t border-white/5 text-center overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500/10 rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto space-y-10"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight">
            Let’s build something{" "}
            <br />
            <span className="font-serif italic text-amber-400">
              meaningful.
            </span>
          </h2>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full border border-amber-500/30 text-sm tracking-[0.3em] text-amber-300 hover:bg-amber-500/10 hover:border-amber-400/50 transition-all duration-500 font-mono uppercase relative group overflow-hidden"
            >
              <span className="relative z-10">Get in touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;