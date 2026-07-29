"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiGlobe, 
  FiArrowUp
} from "react-icons/fi";
import logo from "../assets/projects/ms-removebg-preview.png";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute top-1/4 left-10 w-60 h-60 bg-gradient-to-br from-gray-800/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-gradient-to-tl from-gray-800/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

         {/* BRAND SECTION */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="flex flex-col items-center md:items-start"
>
  <Image
    src={logo} width={230}
    alt="logo"
   
  />
</motion.div>




          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-white"></span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold tracking-wide">Contact Info</h3>

            <div className="space-y-4">
              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                  <FiMail className="text-lg text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:mhdshanis3@gmail.com"
                    className="text-white hover:text-gray-300"
                  >
                    mhdshanis3@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                  <FiPhone className="text-lg text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+917356379172"
                    className="text-white hover:text-gray-300"
                  >
                    +91 73563 79172
                  </a>
                </div>
              </div>

              {/* PORTFOLIO */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                  <FiGlobe className="text-lg text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Portfolio</p>
                  <a
                    href="https://shanis.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    shanis.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold tracking-wide">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "MERN",
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "Flutter",
                "Firebase",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm hover:border-gray-600 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">Open for Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700/40 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Mohammed Shanis. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition"
          >
            <span className="text-gray-300 group-hover:text-white">Back to Top</span>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowUp className="text-lg group-hover:text-white" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
