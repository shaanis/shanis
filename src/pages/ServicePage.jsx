import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  Code2,
  Palette,
  SearchCheck,
  Sparkles,
  MonitorSmartphone,
  Gauge,
  Layers3,
  Mouse,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";

const services = [
  {
    title: "Web Development",
    desc: "Clean, scalable, and high-performing websites built with modern frontend architecture.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    desc: "Premium interfaces with strong visual hierarchy, clean spacing, and smooth interactions.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "SEO Growth",
    desc: "Technical SEO, indexing setup, speed optimization, and search-friendly structure.",
    icon: <SearchCheck className="w-6 h-6" />,
  },
];

const highlights = [
  {
    title: "Premium UI",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Responsive",
    icon: <MonitorSmartphone className="w-5 h-5" />,
  },
  {
    title: "Fast Loading",
    icon: <Gauge className="w-5 h-5" />,
  },
];

const process = [
  {
    title: "Discover",
    desc: "Understand your brand, target users, and website goals.",
  },
  {
    title: "Design",
    desc: "Create clean layouts, strong spacing, and premium visual sections.",
  },
  {
    title: "Develop",
    desc: "Build responsive, fast, SEO-ready pages with modern React structure.",
  },
  {
    title: "Launch",
    desc: "Optimize, test, deploy, and make the site production-ready.",
  },
];

function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const yGrid = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yGlowOne = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const yGlowTwo = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <motion.div
        style={{ y: yGrid, scale }}
        className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:90px_90px]"
      />

      <motion.div
        style={{ y: yGlowOne }}
        className="absolute -top-64 -left-64 h-[650px] w-[650px] rounded-full bg-blue-500/25 blur-[160px]"
      />

      <motion.div
        style={{ y: yGlowTwo }}
        className="absolute -bottom-64 -right-64 h-[650px] w-[650px] rounded-full bg-purple-500/25 blur-[160px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.78)_70%)]" />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

function FloatingVisual() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yCard = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const ySmallOne = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const ySmallTwo = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative hidden lg:block">
      <motion.div
        style={{ y: yCard, rotate }}
        className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl shadow-2xl shadow-black/50"
      >
        <div className="rounded-[2rem] border border-white/10 bg-black/55 p-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="mt-6 h-72 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-white/5 p-6">
            <div className="h-full rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <div className="h-4 w-28 rounded-full bg-white/20" />
              <div className="mt-8 h-14 w-3/4 rounded-2xl bg-white/15" />
              <div className="mt-4 h-14 w-1/2 rounded-2xl bg-white/10" />

              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-white/10" />
                <div className="h-20 rounded-2xl bg-white/10" />
                <div className="h-20 rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-sm text-white/40">Performance</p>
              <h3 className="mt-2 text-3xl font-semibold">98%</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-sm text-white/40">SEO Ready</p>
              <h3 className="mt-2 text-3xl font-semibold">100%</h3>
            </div>
          </div>
        </div>
      </motion.div>

     

     
    </div>
  );
}

function ParallaxSectionTitle({ eyebrow, title, desc }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.06em] leading-tight">
        {title}
      </h2>

      {desc && (
        <p className="mt-6 text-white/55 text-lg leading-relaxed">{desc}</p>
      )}
    </motion.div>
  );
}

export default function ServicePage() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const heroTextY = useTransform(smoothProgress, [0, 0.35], ["0%", "-18%"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0.15]);

  return (
    <>
      <SEO {...seoData.services} />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <ParallaxBackground />

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
              

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-8 text-5xl md:text-7xl xl:text-8xl font-semibold tracking-[-0.07em] leading-[0.9]"
              >
                Clean  websites with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">
                  parallax motion.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16 }}
                className="mt-8 max-w-2xl text-base md:text-xl text-white/55 leading-relaxed"
              >
                I create premium websites, clean UI designs, and SEO-ready web
                experiences with smooth scroll depth, responsive layouts, and
                modern visual storytelling.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-black font-medium hover:bg-blue-100 transition"
                >
                  Start Project
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white/80 hover:bg-white/10 transition"
                >
                  View Services
                </a>
              </motion.div>

              <div className="mt-14 grid grid-cols-3 gap-3 max-w-xl">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                      {item.icon}
                    </div>
                    <p className="text-sm text-white/70">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <FloatingVisual />
          </div>

        
        </section>

        {/* SERVICES */}
        <section id="services" className="relative px-6 py-28">
          <div className="max-w-7xl mx-auto">
            <ParallaxSectionTitle
              eyebrow="Services"
              title="Everything needed to build a premium online presence."
              desc="A clean agency-style service page with depth, scroll motion, and professional content sections."
            />

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {services.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  whileHover={{ y: -12 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl hover:bg-white/[0.075] transition"
                >
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-400/10 blur-3xl group-hover:bg-purple-400/20 transition" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                        {item.icon}
                      </div>

                      <span className="text-5xl font-semibold text-white/10">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-white/52 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10" />

                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/45 group-hover:text-white transition">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARALLAX STRIP */}
        <section className="relative px-6 py-32 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute inset-x-0 top-1/2 -z-0 h-px bg-white/10"
          />

          <motion.div
            initial={{ x: "8%" }}
            whileInView={{ x: "-8%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 whitespace-nowrap text-[14vw] font-semibold tracking-[-0.08em] text-white/[0.055]"
          >
            CLEAN  · PARALLAX · PREMIUM ·
          </motion.div>

          <div className="relative z-20 mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-black/55 p-8 text-center backdrop-blur-2xl md:p-14">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Result focused
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.06em] leading-tight">
              Designed to feel smooth while staying clean and professional.
            </h2>

            <p className="mt-6 text-white/55 text-lg leading-relaxed">
              The page uses layered movement, floating UI cards, animated
              sections, and parallax background depth without adding a heavy
              header or cluttered layout.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative px-6 py-28">
          <div className="max-w-7xl mx-auto">
            <ParallaxSectionTitle
              eyebrow="Process"
              title="A simple workflow from concept to launch."
              desc="Each step is structured to keep the project clean, fast, responsive, and professional."
            />

            <div className="mt-16 grid md:grid-cols-4 gap-5">
              {process.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 65 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
                >
                  <div className="text-5xl font-semibold text-white/10">
                    0{index + 1}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-6xl mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-white p-8 text-black md:p-16"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-black/40">
                  Let’s build
                </p>

                <h2 className="mt-6 text-4xl md:text-7xl font-semibold tracking-[-0.07em] leading-tight">
                  Need a premium website with scroll motion?
                </h2>
              </div>

              <div>
                <p className="text-black/60 text-lg leading-relaxed">
                  I can create a clean, responsive, professional page with
                  parallax animation, premium spacing, and SEO-ready structure.
                </p>

                <a
  href="https://wa.me/917356379172?text=Hi%20Shanis%2C%20I%20want%20to%20build%20a%20premium%20website."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-9 py-4 text-white font-medium hover:bg-black/85 transition"
>
  Contact Now
  <ArrowRight className="w-5 h-5" />
</a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}