import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Palette, Globe } from "lucide-react";
import profile from "../assets/projects/mockups/img2.jpeg";

const AboutMe = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "Firebase", icon: "🔥" },
    { name: "Flutter", icon: "📱" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Socket.IO", icon: "🔌" },
    { name: "GSAP", icon: "✨" },
  ];

  const specialties = [
    { icon: <Code size={20} />, title: "Full-Stack", desc: "MERN Stack" },
    { icon: <Cpu size={20} />, title: "APIs", desc: "REST & WebSockets" },
    { icon: <Palette size={20} />, title: "UI/UX", desc: "Responsive Design" },
    { icon: <Globe size={20} />, title: "Deployment", desc: "Cloud & DevOps" },
  ];

  return (
    <div id="about" className="w-full bg-gradient-to-b from-white to-[#f5f5f5] overflow-hidden">

      {/* ---------------- MINIMAL HEADER ---------------- */}
      <div className="relative w-full pt-28 pb-16 sm:pt-20 sm:pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black/80 text-sm font-medium mb-4">
              About
            </span> */}
             <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-black to-gray-600 rounded-full mt-4 mb-6"></div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">

          {/* LEFT - PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-black/0 via-black/5 to-black/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                  <img
                    src={profile}
                    alt="Shanis"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">Shanis</h3>
                    <p className="text-white/90 mt-1">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="font-semibold text-black mb-4">Get in touch</h4>
                <a
                  href="mailto:mhdshanis3@gmail.com"
                  className="group flex items-center justify-between px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300"
                >
                  <span className="font-medium">Contact Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Crafting Digital Experiences
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm a passionate full-stack developer specializing in the MERN stack, 
                  with hands-on experience building production-grade applications. 
                  From booking platforms to e-commerce systems, I focus on creating 
                  scalable solutions with excellent user experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines technical precision with creative problem-solving. 
                  I believe in writing clean, maintainable code and building interfaces 
                  that are both beautiful and functional.
                </p>
              </div>
            </div>

            {/* Specialties Grid */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {specialties.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-black">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-white rounded-full 
                             border border-gray-200 hover:border-black transition-all duration-300 
                             hover:shadow-md cursor-default"
                  >
                    {/* <span className="text-sm">{skill.icon}</span> */}
                    <span className="font-medium text-black">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;