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
import mobilebg from "../assets/cloud.mp4";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

const SCENES = [
  {
    start: 0.2, // മൊബൈലിൽ കൃത്യമായി വരാൻ ടൈമിംഗ് അഡ്ജസ്റ്റ് ചെയ്തു
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

  const [isMobileVideo, setIsMobileVideo] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileVideo(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }, [isMobileVideo]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // MOBILE SCREEN OPTIONS
    mm.add("(max-width: 767px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=220%", // മൊബൈലിൽ സ്ക്രോളിംഗ് കുറച്ചുകൂടി സ്മൂത്ത് ആക്കാൻ 135%-ൽ നിന്ന് 220% ആക്കി
        scrub: 0.3,   // സ്ക്രോൾ ചെയ്യുമ്പോൾ ജർക്ക് അടിക്കാതിരിക്കാൻ 0.3 ആക്കി
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          document.documentElement.style.setProperty(
            "--scroll-progress",
            self.progress.toFixed(3)
          );
        },
        onLeave: () => {
          document.documentElement.style.setProperty("--scroll-progress", "1");
        },
        onEnterBack: () => {
          ScrollTrigger.refresh();
        },
      });

      return () => {
        trigger.kill();
        document.documentElement.style.setProperty("--scroll-progress", "0");
      };
    });

    // DESKTOP SCREEN OPTIONS
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
            self.progress.toFixed(4)
          );
        },
      });

      return () => {
        trigger.kill();
        document.documentElement.style.setProperty("--scroll-progress", "0");
      };
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => mm.revert();
  }, []);

  return (
    <div className="relative bg-[#050505] overflow-x-hidden">
      <SEO {...seoData.home} />

      <main>
        <section
          id="home"
          ref={containerRef}
          className="relative w-full h-[100svh] bg-black overflow-hidden isolate"
        >
          <video
            key={isMobileVideo ? "mobile-video" : "desktop-video"}
            ref={videoRef}
            src={isMobileVideo ? mobilebg : VIDEO_URL}
            className="
              absolute inset-0 z-0
              h-full w-full min-h-[100svh]
              object-cover object-center
              opacity-95 scale-[1.03]
              md:scale-100
            "
            autoPlay
            muted
            loop
            playsInline
            preload={isMobileVideo ? "metadata" : "auto"}
            disablePictureInPicture
            onCanPlay={() => {
              videoRef.current?.play().catch(() => {});
              ScrollTrigger.refresh();
            }}
          />

          <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />

          {/* MAIN HERO TITLE */}
          <div
            className="
              absolute inset-0 z-20 pointer-events-none px-5
              flex flex-col items-center justify-center text-center
            "
            style={{
              opacity: `clamp(0, calc(1 - (var(--scroll-progress, 0) * 4.5)), 1)`,
              transform: `translate3d(0, calc(var(--scroll-progress, 0) * -50px), 0)`,
              filter: `blur(calc(var(--scroll-progress, 0) * 6px))`,
            }}
          >
            <div className="text-center hero-title-reveal">
              <p className="text-[10px] sm:text-xs md:text-[11px] text-amber-400/90 font-medium mb-3 tracking-[0.5em] md:tracking-[0.8em] uppercase">
                Full Stack Developer
              </p>

              <h1 className="text-5xl sm:text-[72px] md:text-[118px] leading-[0.85] font-black text-white uppercase tracking-tighter">
                <span className="block">Mohammed</span>
                <span className="block outline-text">Shanis</span>
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

            html,
            body {
              overflow-x: hidden;
            }

            .outline-text {
              -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.7);
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
                -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.7);
              }
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
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const progress = `var(--scroll-progress, 0)`;
  const localProgress = `clamp(0, (${progress} - ${scene.start}) / (${scene.end} - ${scene.start}), 1)`;

  const opacity = isMobile
    ? `calc(clamp(0, ${localProgress} * 6, 1) * clamp(0, (1 - ${localProgress}) * 6, 1))`
    : `clamp(0, ${localProgress} * 8, 1)`;

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
        ${isMobile ? "items-center justify-center text-center" : getDesktopClasses()}
      `}
      style={{ opacity }}
    >
      <div
        className={`max-w-xl ${isMobile ? "mx-auto text-center" : ""}`}
        style={{
          transform: isMobile
            ? `translate3d(0, calc(20px - (${localProgress} * 20px)), 0)`
            : `translate3d(0, calc(32px - (${localProgress} * 32px)), 0)`,
          filter: isMobile
            ? `blur(calc((1 - ${localProgress}) * 4px))`
            : `blur(calc((1 - ${localProgress}) * 10px))`,
        }}
      >
        <p
          className="
            text-[11px] sm:text-sm
            text-blue-400 font-bold
            tracking-[0.25em] md:tracking-[0.5em]
            mb-3 uppercase
          "
        >
          {scene.subtitle}
        </p>

        {/* മൊബൈലിനായി ഹെഡിങ് സൈസ് അഡ്ജസ്റ്റ് ചെയ്തു (text-3xl) */}
        <h2
          className="
            text-3xl sm:text-[54px] md:text-[42px] lg:text-[52px]
            font-black uppercase leading-[1.0] mb-4 text-white
            tracking-tight
          "
        >
          {scene.title}
        </h2>

        <div
          className={`h-[1px] bg-blue-400/70 mb-5 ${
            isMobile ? "mx-auto" : scene.position === "top-right" ? "ml-auto" : "mr-auto"
          }`}
          style={{ width: "60px" }} // ഫോർമുല ഒഴിവാക്കി ഫിക്സഡ് വിഡ്ത്ത് നൽകി മൊബൈലിൽ വൃത്തിയാക്കി
        />

        <p
          className={`
            text-[14px] sm:text-[17px] md:text-sm text-white/80 leading-relaxed
            max-w-[290px] sm:max-w-sm
            ${isMobile ? "mx-auto text-center" : ""}
            ${scene.position === "top-right" && !isMobile ? "ml-auto text-right" : ""}
          `}
        >
          {scene.description}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;