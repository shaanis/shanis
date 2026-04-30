import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

// Mockup imports (keeping your existing imports)
import acrewala from "../assets/projects/mockups/acrewala.webp";
import tripeloo from "../assets/projects/mockups/tripeloo.webp";
import sagara from "../assets/projects/mockups/bb.webp";
import doorcarts from "../assets/projects/mockups/doorcarts.webp";
import casaAura from "../assets/projects/mockups/mockupcasa.webp";
import dva from "../assets/projects/mockups/dva3.webp";

const projects = [
  { title: "CasaAura", category: "E-Commerce", tech: ["React", "MongoDB"], live: "https://cas4aura.netlify.app", image: casaAura },
  { title: "Tripeloo", category: "Travel Tech", tech: ["Node.js", "Express"], live: "https://tripeloodemo.netlify.app", image: tripeloo },
  { title: "DVA", category: "Fashion", tech: ["Tailwind", "React"], live: "https://d-va.netlify.app", image: dva },
  { title: "Acrewala", category: "Fintech", tech: ["Stripe", "Redis"], live: "https://acerwala.netlify.app", image: acrewala },
  { title: "DoorCarts", category: "Productivity", tech: ["Firebase", "React"], live: "https://doorcarts.vercel.app/", image: doorcarts },
  { title: "Sagara", category: "Mobile App", tech: ["Flutter", "Dart"], github: "https://github.com/shaanis/sagara.git", image: sagara },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative w-full mb-20 md:mb-40"
    >
      <div className="relative overflow-hidden rounded-sm bg-[#111]">
        {/* Project Image with Zoom Effect */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/5] md:aspect-[16/10] object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Floating Tech Tags (Only visible on hover) */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-6 flex justify-between items-end">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-2">{project.category}</p>
          <h3 className="text-3xl md:text-5xl font-light tracking-tighter uppercase">{project.title}</h3>
        </div>
        <div className="flex gap-4">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-500">
              ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-500">
              git
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  const { scrollYProgress } = useScroll();
  const xText = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Helmet>
        <title>Portfolio | Selected Works</title>
        <meta name="description" content="A gallery of premium digital solutions and full-stack applications." />
      </Helmet>

     

      {/* LARGE STICKY BACKGROUND TEXT */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        <motion.h1 
          style={{ x: xText }}
          className="text-[20vw] font-black text-white/[0.02] whitespace-nowrap leading-none mt-40"
        >
          FEATURED WORKS — SELECTED CASES — 2024
        </motion.h1>
      </div>

      <main className="relative z-10 pt-40 px-6 md:px-12">
        {/* HEADER SECTION */}
        <div className="max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-mono text-white/40 uppercase tracking-[0.5em] mb-6">Archive.01</h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
              CRAFTING <br /> DIGITAL <br /> <span className="text-white/20">SYSTEMS.</span>
            </h1>
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-y-0">
          {projects.map((project, index) => (
            <div key={index} className={index % 2 !== 0 ? "md:mt-40" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="relative z-10 py-20 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white/40 text-xs tracking-widest uppercase">
          Available for new opportunities 2026
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-white/50">LinkedIn</a>
          <a href="#" className="hover:text-white/50">GitHub</a>
          <a href="#" className="hover:text-white/50">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;