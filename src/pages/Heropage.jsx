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
    end: 0.45,
    position: "bottom-left",
    title: "Full Stack Engineering",
    subtitle: "01 / ARCHITECTURE",
    description:
      "Delivering end-to-end web solutions with modern frontend frameworks and scalable backend systems.",
  },
  {
    start: 0.55,
    end: 0.75,
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 0.45,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          document.documentElement.style.setProperty(
            "--scroll-progress",
            self.progress.toFixed(4)
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#050505] overflow-x-hidden">
      <SEO {...seoData.home} />

      <main>
        <section
          id="home"
          ref={containerRef}
          className="relative w-full h-screen bg-black overflow-hidden"
        >
          {/* VIDEO BACKGROUND */}
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => {
              videoRef.current?.play().catch(() => {});
            }}
          />

          {/* SMALL DARK OVERLAY ONLY */}
          

          {/* HERO TITLE */}
          <div
            className="
              absolute inset-0 z-20 pointer-events-none px-6
              flex flex-col items-center justify-center text-center
            "
            style={{
              opacity: `calc(1 - (var(--scroll-progress, 0) * 6))`,
              transform: `translateY(calc(var(--scroll-progress, 0) * -120px))`,
            }}
          >
            <div className="text-center">
              <p className="text-[8px] md:text-[10px] text-white/55 font-medium mb-4 tracking-[0.8em] uppercase">
                Full Stack Developer
              </p>

              <h1 className="text-[45px] md:text-[110px] leading-[0.85] font-black text-white uppercase tracking-tighter">
                <span className="block">Mohammed</span>
                <span className="text-white/20 outline-text">Shanis</span>
              </h1>
            </div>
          </div>

          {SCENES.map((scene, index) => (
            <SceneOverlay key={index} scene={scene} />
          ))}
        </section>

        <div className="relative z-40 bg-[#050505]">
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

            .outline-text {
              -webkit-text-stroke: 1px rgba(255,255,255,0.3);
              color: transparent;
            }

            video {
              transform: translateZ(0);
              backface-visibility: hidden;
              will-change: transform;
            }
          `,
        }}
      />
    </div>
  );
};

const SceneOverlay = ({ scene }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const progress = `var(--scroll-progress, 0)`;
  const localProgress = `clamp(0, (${progress} - ${scene.start}) / (${scene.end} - ${scene.start}), 1)`;

  const opacity = isMobile
    ? `calc(clamp(0, ${localProgress} * 10, 1) * clamp(0, (1 - ${localProgress}) * 10, 1))`
    : `clamp(0, ${localProgress} * 10, 1)`;

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
        ${
          isMobile
            ? "items-center justify-center text-center"
            : getDesktopClasses()
        }
      `}
      style={{ opacity }}
    >
      <div className={`max-w-xl ${isMobile ? "mx-auto text-center" : ""}`}>
        <p className="text-[10px] md:text-[11px] text-blue-400 font-bold tracking-[0.5em] mb-3 uppercase">
          {scene.subtitle}
        </p>

        <h2
          className="text-2xl md:text-[40px] lg:text-[48px] font-black uppercase leading-none mb-4 text-white"
          style={{
            letterSpacing: `calc(0.2em - (${localProgress} * 0.2em))`,
            transform: `translateY(calc(20px - (${localProgress} * 20px)))`,
          }}
        >
          {scene.title}
        </h2>

        <div
          className={`h-[1px] w-24 bg-blue-500/50 mb-6 ${
            isMobile
              ? "mx-auto"
              : scene.position === "top-right"
              ? "ml-auto"
              : "mr-auto"
          }`}
        />

        <p
          className={`
            text-xs md:text-sm text-white/65 leading-relaxed max-w-xs md:max-w-sm
            ${isMobile ? "mx-auto text-center" : ""}
            ${
              scene.position === "top-right" && !isMobile
                ? "ml-auto text-right"
                : ""
            }
          `}
        >
          {scene.description}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;