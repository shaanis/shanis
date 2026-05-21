// src/pages/CinematicLanding.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";

import acrewala from "../assets/projects/mockups/acrewala.webp";
import tripeloo from "../assets/projects/mockups/tripeloo.webp";
import sagara from "../assets/projects/mockups/bb.webp";
import doorcarts from "../assets/projects/mockups/doorcarts.webp";
import casaAura from "../assets/projects/mockups/mockupcasa.webp";
import dva from "../assets/projects/mockups/dva3.webp";
import SEO from "../seo/SEO";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "CasaAura",
    label: "Luxury Commerce",
    category: "E-Commerce",
    desc: "A premium shopping experience crafted with clean product presentation and smooth conversion flow.",
    tech: ["React", "MongoDB", "Tailwind"],
    live: "https://cas4aura.netlify.app",
    image: casaAura,
  },
  {
    title: "Tripeloo",
    label: "Travel Platform",
    category: "Travel Tech",
    desc: "A modern travel product with elegant discovery, booking-focused structure, and fast performance.",
    tech: ["Node.js", "Express", "React"],
    live: "https://tripeloodemo.netlify.app",
    image: tripeloo,
  },
  {
    title: "DVA",
    label: "Fashion Store",
    category: "Fashion",
    desc: "A bold fashion storefront with premium visual hierarchy and product-first storytelling.",
    tech: ["React", "Tailwind", "UI Design"],
    live: "https://d-va.netlify.app",
    image: dva,
  },
  {
    title: "Acrewala",
    label: "Fintech Product",
    category: "Fintech",
    desc: "A clear and structured fintech interface built for trust, clarity, and smooth digital transactions.",
    tech: ["Stripe", "Redis", "Backend"],
    live: "https://acerwala.netlify.app",
    image: acrewala,
  },
  {
    title: "DoorCarts",
    label: "Productivity Tool",
    category: "Productivity",
    desc: "A practical business tool focused on speed, usability, and clean action-based workflows.",
    tech: ["Firebase", "React", "Automation"],
    live: "https://doorcarts.vercel.app/",
    image: doorcarts,
  },
  {
    title: "Sagara",
    label: "Mobile App",
    category: "Flutter App",
    desc: "A mobile-first application concept with clean structure, scalable logic, and app-like interaction.",
    tech: ["Flutter", "Dart", "Mobile"],
    live: "https://github.com/shaanis/sagara.git",
    image: sagara,
  },
];

const DesktopPinnedShowcase = () => {
  const sectionRef = useRef(null);
  const sceneRefs = useRef([]);
  const contentRefs = useRef([]);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const progressRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sceneEls = sceneRefs.current;
      const contentEls = contentRefs.current;
      const cardEls = cardRefs.current;
      const imageEls = imageRefs.current;
      const progressEls = progressRefs.current;

      gsap.set(sceneEls, {
        autoAlpha: 0,
        zIndex: 1,
        force3D: true,
      });

      gsap.set(sceneEls[0], {
        autoAlpha: 1,
        zIndex: 2,
      });

      gsap.set(contentEls, {
        y: 36,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(contentEls[0], {
        y: 0,
        autoAlpha: 1,
      });

      gsap.set(cardEls, {
        y: 52,
        scale: 0.96,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(cardEls[0], {
        y: 0,
        scale: 1,
        autoAlpha: 1,
      });

      gsap.set(imageEls, {
        scale: 1.04,
        force3D: true,
      });

      gsap.set(imageEls[0], {
        scale: 1,
      });

      gsap.set(progressEls, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(progressEls[0], {
        scaleX: 1,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out", // Changed from 'none' to handle interpolation breaks smoothly
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scenes.length * 1200}`,
          scrub: 0.5, // Reduced from 0.85 for tighter tracking with smooth dampening
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      scenes.forEach((_, index) => {
        if (index === scenes.length - 1) return;

        const currentScene = sceneEls[index];
        const nextScene = sceneEls[index + 1];

        const currentContent = contentEls[index];
        const nextContent = contentEls[index + 1];

        const currentCard = cardEls[index];
        const nextCard = cardEls[index + 1];

        const currentImage = imageEls[index];
        const nextImage = imageEls[index + 1];

        const currentProgress = progressEls[index];
        const nextProgress = progressEls[index + 1];

        const pos = index * 1.6;

        tl.set(
          nextScene,
          {
            autoAlpha: 1,
            zIndex: 3,
          },
          pos
        );

        tl.to(
          currentContent,
          {
            y: -34,
            autoAlpha: 0,
            duration: 0.45,
          },
          pos
        );

        tl.to(
          currentCard,
          {
            y: -42,
            scale: 0.975,
            autoAlpha: 0,
            duration: 0.55,
          },
          pos
        );

        tl.to(
          currentImage,
          {
            scale: 1.035,
            duration: 0.55,
          },
          pos
        );

        tl.to(
          currentProgress,
          {
            scaleX: 0,
            duration: 0.35,
          },
          pos
        );

        tl.fromTo(
          nextContent,
          {
            y: 38,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.58,
          },
          pos + 0.28
        );

        tl.fromTo(
          nextCard,
          {
            y: 48,
            scale: 0.965,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.62,
          },
          pos + 0.24
        );

        tl.fromTo(
          nextImage,
          {
            scale: 1.04,
          },
          {
            scale: 1,
            duration: 0.75,
          },
          pos + 0.24
        );

        tl.fromTo(
          nextProgress,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.55,
          },
          pos + 0.38
        );

        tl.set(
          currentScene,
          {
            autoAlpha: 0,
            zIndex: 1,
          },
          pos + 1.05
        );

        tl.to({}, { duration: 0.3 });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen w-full overflow-hidden bg-[#050302] lg:block [backface-visibility:hidden]"
    >
      {/* Premium abstract background - no faded text */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,104,62,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,56,91,0.16),transparent_34%),linear-gradient(180deg,#080302,#020101)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.9)_100%)]" />

      <div className="absolute left-10 right-10 top-8 z-50 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.32em] text-white/42">
        <span>Selected Works</span>
       
      </div>

      {scenes.map((scene, index) => (
        <article
          key={scene.title}
          ref={(el) => {
            sceneRefs.current[index] = el;
          }}
          className="absolute inset-0 h-full w-full [will-change:transform,opacity]"
        >

          <div className="relative z-20 flex h-full items-center px-12 xl:px-16">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="text-left [will-change:transform,opacity]"
              >
                <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-orange-100">
                  {scene.label}
                </span>

                <h1 className="max-w-4xl text-[clamp(4.5rem,8vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
                  {scene.title}
                </h1>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.34em] text-orange-200/70">
                  {scene.category}
                </p>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/66 xl:text-lg">
                  {scene.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {scene.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex items-center gap-4">
                  <a
                    href={scene.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.24em] text-black transition duration-300 hover:scale-[1.03] hover:bg-orange-200"
                  >
                    View Project 
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-xs font-black uppercase tracking-[0.24em] text-white/70 transition duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Discuss
                  </a>
                </div>
              </div>

              <div>
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="relative mx-auto w-full max-w-[700px] will-change-transform [backface-visibility:hidden]"
                >
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-500/10" />

                  <div className="relative rounded-[2rem] border border-white/14 bg-white/[0.06] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.48)] md:p-4">
                    <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                        {scene.category}
                      </span>
                    </div>

                    <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                      <img
                        ref={(el) => {
                          imageRefs.current[index] = el;
                        }}
                        src={scene.image}
                        alt={scene.title}
                        className="aspect-[16/10] w-full object-cover object-center will-change-transform [backface-visibility:hidden]"
                        draggable="false"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-200/80">
                            Project 0{index + 1}
                          </p>
                          <h3 className="mt-1 text-3xl font-black uppercase tracking-[-0.05em]">
                            {scene.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 right-4 overflow-hidden rounded-full border border-white/15 bg-black/55 px-5 py-3">
                    <div className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/55">
                      0{index + 1} / 0{scenes.length}
                    </div>

                    <div className="h-[2px] w-28 bg-white/10">
                      <div
                        ref={(el) => {
                          progressRefs.current[index] = el;
                        }}
                        className="h-full w-full bg-orange-200 [will-change:transform]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const MobileTabletShowcase = () => {
  return (
    <section className="relative block overflow-hidden bg-[#050302] px-4 pb-20 pt-24 sm:px-6 lg:hidden">
      <SEO {...seoData.projects} />
      {/* Same abstract background for mobile/tablet */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,104,62,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,56,91,0.16),transparent_34%),linear-gradient(180deg,#080302,#020101)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.88)_100%)]" />

      <div className="relative z-10 mb-10 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.26em] text-white/42">
        <span>Selected Works</span>
        <span>2026</span>
      </div>

      <div className="relative z-10 space-y-8 sm:space-y-10">
        {scenes.map((scene, index) => (
          <article
            key={scene.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 sm:p-5"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-orange-100">
                {scene.label}
              </span>

              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/35">
                0{index + 1} / 0{scenes.length}
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.35rem] bg-black">
              <img
                src={scene.image}
                alt={scene.title}
                className="aspect-[16/11] w-full object-cover object-center"
                loading={index <= 1 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
              />
            </div>

            <div className="pt-6 text-center">
              <h2 className="text-[clamp(2.6rem,14vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
                {scene.title}
              </h2>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.32em] text-orange-200/70">
                {scene.category}
              </p>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/64 sm:text-base">
                {scene.desc}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {scene.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/62"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={scene.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black"
                >
                  View Project 
                </a>

                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-white/70"
                >
                  Discuss
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const ProjectPage = () => {
  return (
    <main className="min-h-screen bg-[#050302] text-white">
      <Helmet>
        <title>Selected Works | Mohammed Shanis</title>
        <meta
          name="description"
          content="Premium responsive project showcase using React, Tailwind CSS, GSAP and ScrollTrigger."
        />
      </Helmet>

      <DesktopPinnedShowcase />
      <MobileTabletShowcase />

      <section
        id="contact"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050302] px-6 py-24 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,104,62,0.2),transparent_35%),linear-gradient(180deg,#050302,#000)]" />
          
        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-orange-200/70">
            Let&apos;s Build
          </p>

          <h2 className="text-[clamp(3rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
            Ready for a premium website?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Let&apos;s create a cinematic portfolio, business website,
            e-commerce platform, or full-stack product with premium design and
            performance.
          </p>

          <a
            href="https://wa.me/917356379172"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.25em] text-black transition duration-300 hover:scale-105 hover:bg-orange-200"
          >
            Contact Now 
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;