"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

const SCENES = [
  {
    start: 0.2,
    end: 0.5,
    position: "bottom-left",
    title: "Full Stack Engineering",
    subtitle: "01 / ARCHITECTURE",
    description:
      "Delivering end-to-end web solutions with modern frontend frameworks and scalable backend systems.",
  },
  {
    start: 0.55,
    end: 0.88,
    position: "top-right",
    title: "Performance & Scalability",
    subtitle: "02 / OPTIMIZATION",
    description:
      "Architecting efficient APIs and optimized data flows with Node.js and caching strategies.",
  },
];

const HeroPage = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

 const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  useEffect(() => {
    const handleResize = () => setMounted(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=70%",
        scrub: 0.25,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          document.documentElement.style.setProperty(
            "--scroll-progress",
            self.progress.toFixed(4),
          );
        },
      });

      return () => {
        trigger.kill();
        document.documentElement.style.setProperty("--scroll-progress", "0");
      };
    });

    mm.add("(min-width: 768px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=380%",
        scrub: 0.28,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          document.documentElement.style.setProperty(
            "--scroll-progress",
            self.progress.toFixed(4),
          );
        },
      });

      return () => {
        trigger.kill();
        document.documentElement.style.setProperty("--scroll-progress", "0");
      };
    });

    setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => mm.revert();
  }, []);

  return (
    <div className="relative bg-white overflow-x-hidden">
      <SEO {...seoData.home} />

      <main>
        <section
          id="home"
          ref={containerRef}
          className="relative w-full h-[120svh] md:h-[100svh] bg-[#0c1122] md:bg-white overflow-hidden isolate"
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="
              absolute left-0 top-0 z-0
              h-[36svh] w-full
              object-cover object-center
              opacity-95
              md:inset-0 md:h-full md:min-h-[100svh]
            "
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.currentTime = 0;
            }}
            onCanPlay={() => {
              videoRef.current?.play().catch(() => {});
              ScrollTrigger.refresh();
            }}
          />

          <div className="absolute left-0 top-0 z-10 h-[36svh] w-full bg-black/20 pointer-events-none md:inset-0 md:h-full" />

          {/* Smooth gradient that extends down to match card position */}
          <div className="absolute left-0 top-[26svh] z-10 h-40 w-full bg-gradient-to-t from-[#0c1122] via-[#0c1122]/95 to-transparent pointer-events-none md:from-transparent md:via-transparent md:inset-x-0 md:bottom-0 md:top-auto" />

          <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />

          <div
            className="
              absolute left-0 top-0 z-20 h-[36svh] w-full pointer-events-none px-5
              flex flex-col items-center justify-center text-center
              md:inset-0 md:h-full
            "
            style={
              mounted
                ? {}
                : {
                    opacity: `clamp(0, calc(1 - (var(--scroll-progress, 0) * 4.5)), 1)`,
                    transform: `translate3d(0, calc(var(--scroll-progress, 0) * -50px), 0)`,
                    filter: `blur(calc(var(--scroll-progress, 0) * 6px))`,
                  }
            }
          >
            <div
  className={`text-center ${
    mounted ? "hero-title-reveal md:pt-0 pt-4" : "pt-4"
  }`}
>
              <p className="text-[9px] sm:text-xs md:text-[11px] text-amber-400/90 font-medium mb-2 tracking-[0.42em] md:tracking-[0.8em] uppercase">
                Full Stack Developer
              </p>

              <h1 className="text-[42px] sm:text-[72px] md:text-[118px] leading-[0.85] font-black text-white uppercase tracking-tighter ">
                <span className="block">Mohammed</span>
                <span className="block outline-text">Shanis</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            {SCENES.map((scene, index) => (
              <SceneOverlay key={index} scene={scene} />
            ))}
          </div>

          {/* Premium Mobile Cards Component */}
          <MobileSceneCards scenes={SCENES} />

        </section>

        <div className="relative z-40 bg-white">
          <IntroSection />
          <Project />
          <AboutMe />
          <TestimonialSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --scroll-progress: 0;
            }

            html,
            body {
              overflow-x: hidden;
              background: #ffffff;
            }

            .outline-text {
              -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.75);
              color: transparent;
              paint-order: stroke fill;
            }

            video {
              transform: translate3d(0, 0, 0);
              backface-visibility: hidden;
              image-rendering: auto;
              will-change: transform;
            }

            .hero-title-reveal {
              animation: heroReveal 1.05s cubic-bezier(.16, 1, .3, 1) both;
            }

            @keyframes heroReveal {
              0% {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
                filter: blur(8px);
              }
              100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                filter: blur(0);
              }
            }

            @media (max-width: 767px) {
              .outline-text {
                -webkit-text-stroke: 1.1px rgba(255, 255, 255, 0.75);
              }

              .mobile-scene-card-1 {
                animation: slideFromRight 0.75s cubic-bezier(.16, 1, .3, 1) both;
              }

              .mobile-scene-card-2 {
                animation: slideFromLeft 0.75s cubic-bezier(.16, 1, .3, 1) both;
                animation-delay: 0.15s;
              }

              @keyframes slideFromRight {
                0% {
                  opacity: 0;
                  transform: translate3d(35px, 0, 0);
                }
                100% {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }

              @keyframes slideFromLeft {
                0% {
                  opacity: 0;
                  transform: translate3d(-35px, 0, 0);
                }
                100% {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
            }
          `,
        }}
      />
    </div>
  );
};

// Updated Premium Glassmorphic Mobile Cards
const MobileSceneCards = ({ scenes }) => {
  return (
    <div className="md:hidden absolute left-0 right-0 top-[42svh] z-30 px-6">
      <div className="mx-auto flex max-w-[360px] flex-col gap-5">
        
        {/* Card 1 */}
        <div className="mobile-scene-card-1 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/[0.07] to-white/[0.01] p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Soft ambient glow inside card */}
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400/90">
                  {scenes[0].subtitle.split(' / ')[1] || "ARCHITECTURE"}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-white/30">01</span>
            </div>

            <h2 className="text-[22px] font-black uppercase leading-tight tracking-tight text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
              {scenes[0].title}
            </h2>

            <p className="mt-3 text-[13.5px] leading-relaxed text-white/60 font-light">
              {scenes[0].description}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mobile-scene-card-2 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/[0.07] to-white/[0.01] p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Ambient glow with a bit of variation */}
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400/90">
                  {scenes[1].subtitle.split(' / ')[1] || "OPTIMIZATION"}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-white/30">02</span>
            </div>

            <h2 className="text-[22px] font-black uppercase leading-tight tracking-tight text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
              {scenes[1].title}
            </h2>

            <p className="mt-3 text-[13.5px] leading-relaxed text-white/60 font-light">
              {scenes[1].description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-16 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.09),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-blue-600">
              About Experience
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-zinc-950 sm:text-5xl md:text-7xl">
              Building
              <br />
              Modern
              <br />
              Digital
              <br />
              Products
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
              I create premium web experiences with React, Node.js, Tailwind
              CSS, GSAP and scalable backend systems. Focused on performance,
              animations, clean architecture and modern user experience.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:gap-5">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
                <p className="text-3xl font-black text-zinc-950 md:text-4xl">
                  5+
                </p>
                <p className="mt-2 text-sm text-zinc-600">Premium Projects</p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
                <p className="text-3xl font-black text-zinc-950 md:text-4xl">
                  1+
                </p>
                <p className="mt-2 text-sm text-zinc-600">Years Experience</p>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-zinc-200 bg-zinc-950 p-5 text-white md:mt-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-300">
                Specialized In
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {["React", "Node.js", "MongoDB", "Tailwind", "GSAP", "SEO"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SceneOverlay = ({ scene }) => {
  const progress = `var(--scroll-progress, 0)`;
  const localProgress = `clamp(0, (${progress} - ${scene.start}) / (${scene.end} - ${scene.start}), 1)`;

  const opacity = `clamp(0, ${localProgress} * 8, 1)`;

  const getDesktopClasses = () => {
    if (scene.position === "bottom-left") {
      return "items-end justify-start text-left pb-24 lg:pb-32";
    }

    if (scene.position === "top-right") {
      return "items-start justify-end text-right pt-24 lg:pt-32";
    }

    return "items-center justify-center text-center";
  };

  return (
    <div
      className={`
        absolute inset-0 flex px-6 md:px-20 lg:px-32 z-30 pointer-events-none 
        ${getDesktopClasses()}
      `}
      style={{ opacity }}
    >
      <div
        className="max-w-xl"
        style={{
          transform: `translate3d(0, calc(32px - (${localProgress} * 32px)), 0)`,
          filter: `blur(calc((1 - ${localProgress}) * 10px))`,
        }}
      >
        <p className="text-[11px] sm:text-sm text-blue-400 font-bold tracking-[0.5em] mb-3 uppercase">
          {scene.subtitle}
        </p>

        <h2 className="text-[42px] lg:text-[52px] font-black uppercase leading-[1.0] mb-4 text-white tracking-tight">
          {scene.title}
        </h2>

        <div
          className={`h-[1px] bg-blue-400/70 mb-5 ${
            scene.position === "top-right" ? "ml-auto" : "mr-auto"
          }`}
          style={{ width: "60px" }}
        />

        <p
          className={`
            text-sm text-white/80 leading-relaxed max-w-sm
            ${scene.position === "top-right" ? "ml-auto text-right" : ""}
          `}
        >
          {scene.description}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;