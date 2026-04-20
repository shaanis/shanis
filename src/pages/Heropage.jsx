import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiX } from "react-icons/fi";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

const SCENES = [
  {
    start: 0.2,
    end: 0.45,
    title: "Full Stack Engineering",
    description:
      "Delivering end-to-end web solutions with modern frontend frameworks and scalable backend systems, ensuring performance, reliability, and exceptional user experience.",
  },
  {
    start: 0.6,
    end: 0.85,
    title: "Performance & Scalability",
    description:
      "Architecting efficient APIs and optimized data flows with Node.js, databases, and caching strategies to handle real-world scale and high-demand applications.",
  },
];


const HeroPage = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const imagesRef = useRef([]);
  const [activeSection, setActiveSection] = useState("home");
  const [loadProgress, setLoadProgress] = useState(0);
  const scrollData = useRef({ frame: 0 });

  useEffect(() => {
    const preloadImages = async () => {
      let loadedCount = 0;
      const criticalIndices = [
        ...Array.from({ length: 15 }, (_, i) => i + 1),
        ...Array.from({ length: 10 }, (_, i) => Math.floor((TOTAL_FRAMES / 10) * i) + 1),
      ].filter((v, i, a) => a.indexOf(v) === i);

      const loadBatch = async (indices) => {
        const batchPromises = indices.map((i) => {
          return new Promise((resolve) => {
            const frame = i.toString().padStart(3, "0");
            const path = new URL(`../assets/images/ezgif-frame-${frame}.png`, import.meta.url).href;
            const img = new Image();
            img.src = path;
            img.onload = () => {
              loadedCount++;
              imagesRef.current[i - 1] = img;
              setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
              resolve();
            };
            img.onerror = resolve;
          });
        });
        await Promise.all(batchPromises);
      };

      await loadBatch(criticalIndices);
      const remainingIndices = Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1)
        .filter(i => !criticalIndices.includes(i));

      const chunkSize = 20;
      for (let i = 0; i < remainingIndices.length; i += chunkSize) {
        const chunk = remainingIndices.slice(i, i + chunkSize);
        await loadBatch(chunk);
      }
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const render = (frameIndex) => {
      const frame = Math.floor(frameIndex);
      let img = imagesRef.current[frame];
      if (!img) {
        for (let i = frame; i >= 0; i--) {
          if (imagesRef.current[i]) {
            img = imagesRef.current[i];
            break;
          }
        }
      }

      if (img && img.complete) {
        const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * ratio) / 2;
        const y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(scrollData.current.frame);
    };

    window.addEventListener("resize", resize);
    resize();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 0.1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          scrollData.current.frame = (TOTAL_FRAMES - 1) * self.progress;
          render(scrollData.current.frame);
          document.documentElement.style.setProperty('--scroll-progress', self.progress);
        }
      }
    });

    return () => {
      window.removeEventListener("resize", resize);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "about", "testimonials", "faq", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => entry.isIntersecting && setActiveSection(id),
          { threshold: 0.3 }
        );
        obs.observe(el);
        return obs;
      }
      return null;
    }).filter(Boolean);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpenMenu(false);
    }
  };

  return (
    <div className="relative bg-black overflow-x-hidden">
      {loadProgress < 15 && (
        <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center">
          <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden mb-6 relative">
            <div className="absolute inset-0 h-full bg-white transition-all duration-300" style={{ width: `${loadProgress}%` }}></div>
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.6em] uppercase">Initializing</span>
        </div>
      )}

      <Header activeSection={activeSection} onNavClick={handleNavClick} openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <main>
        {/* HERO SECTION */}
        <section id="home" ref={containerRef} className="relative z-10 w-full h-screen bg-black text-white">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

          {/* NAME LAYER - Disappears on mobile, stays on desktop */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-24 z-20 pointer-events-none transition-transform duration-300"
            style={{
              // CSS calculation: 1 (always visible) on large screens, scroll-dependent on small screens
              opacity: `var(--name-opacity, calc(1 - (var(--scroll-progress, 0) * 8)))`,
              marginTop: window.innerWidth < 768 ? '160px' : '0px'
            }}
          >
            <div className="text-center md:text-left md:mt-16">
              <p className="text-[10px] md:text-[18px] text-white/30 font-light mb-2 md:mb-8 tracking-[0.6em] md:tracking-[0.8em] uppercase">
                FULL STACK DEVELOPER
              </p>
              <h1 className="text-[32px] sm:text-[40px] md:text-[110px] leading-[1.1] md:leading-[0.9] font-black text-white uppercase tracking-tighter mix-blend-difference">
                Mohammed <br className="hidden md:block" /> <span className="text-white">Shanis</span>
              </h1>
            </div>
          </div>

          {/* CSS adjustment to keep desktop visibility at 1 */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (min-width: 768px) {
              :root { --name-opacity: 1 !important; }
            }
          `}} />

          {/* Scene Text */}
          {SCENES.map((scene, index) => (
            <SceneOverlay key={index} scene={scene} />
          ))}

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40">
            <span className="text-[8px] tracking-[1em] uppercase mb-4 text-white">Scroll</span>
            <div className="w-[1px] h-8 md:h-12 bg-white/20" />
          </div>
        </section>

        <div className="relative z-40 -mt-120">
          <Project />
        </div>

        <div className="relative z-30">
          <AboutMe />
          <TestimonialSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

const SceneOverlay = ({ scene }) => {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center items-center md:items-end px-6 md:px-32 text-center md:text-right z-30 pointer-events-none"
      style={{
        opacity: `calc(clamp(0, (var(--scroll-progress, 0) - ${scene.start - 0.05}) * 20, 1) * clamp(0, (${scene.end + 0.05} - var(--scroll-progress, 0)) * 20, 1))`,
        transform: `translateY(calc(20px - (clamp(0, (var(--scroll-progress, 0) - ${scene.start}) * 10, 1) * 20px)))`,
        marginTop: window.innerWidth < 768 ? '160px' : '0px'
      }}
    >
      <div className="max-w-[90%] md:max-w-xl md:-mt-56">
        <h2 className="text-2xl sm:text-3xl md:text-7xl font-black mb-2 md:mb-4 text-white tracking-tighter uppercase leading-none italic">
          {scene.title}
        </h2>
        <p className="text-[12px] sm:text-sm md:text-xl text-white/40 font-light leading-relaxed tracking-wide">
          {scene.description}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;