import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_SKIP = 4; // Load every 4th frame for preview, load rest progressively

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
  const [isReady, setIsReady] = useState(false);
  const scrollData = useRef({ frame: 0 });
  const loadingRef = useRef({ loaded: 0, total: TOTAL_FRAMES });

  useEffect(() => {
    const loadImage = (frameNumber) => {
      return new Promise((resolve) => {
        const frame = frameNumber.toString().padStart(3, "0");
        const img = new Image();
        img.src = new URL(`../assets/images/ezgif-frame-${frame}.webp`, import.meta.url).href;
        
        img.onload = () => {
          imagesRef.current[frameNumber - 1] = img;
          loadingRef.current.loaded++;
          setLoadProgress(Math.floor((loadingRef.current.loaded / TOTAL_FRAMES) * 100));
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`Failed to load frame ${frame}`);
          resolve();
        };
      });
    };

    const preloadImages = async () => {
      // Phase 1: Load key frames quickly (every FRAME_SKIP-th frame)
      const keyFrames = [];
      for (let i = 1; i <= TOTAL_FRAMES; i += FRAME_SKIP) {
        keyFrames.push(i);
      }
      
      // Load key frames in parallel batches
      const batchSize = 10;
      for (let i = 0; i < keyFrames.length; i += batchSize) {
        const batch = keyFrames.slice(i, i + batchSize);
        await Promise.all(batch.map(loadImage));
      }

      setIsReady(true); // Start animation with key frames

      // Phase 2: Load remaining frames in background
      const remainingFrames = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!keyFrames.includes(i)) {
          remainingFrames.push(i);
        }
      }

      // Load remaining frames in small batches with delay
      for (let i = 0; i < remainingFrames.length; i += 5) {
        const batch = remainingFrames.slice(i, i + 5);
        await Promise.all(batch.map(loadImage));
        // Small delay to prevent blocking
        await new Promise(resolve => setTimeout(resolve, 10));
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const render = (frameIndex) => {
      const frame = Math.floor(frameIndex);
      let img = imagesRef.current[frame];
      
      // Fallback to nearest available frame
      if (!img) {
        for (let i = frame; i >= 0; i--) {
          if (imagesRef.current[i]) {
            img = imagesRef.current[i];
            break;
          }
        }
      }

      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, x, y;
        
        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          x = 0;
          y = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          x = (canvas.width - drawWidth) / 2;
          y = 0;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
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
        scrub: 0.3,
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
  }, [isReady]);

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
      {loadProgress < 100 && (
        <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center">
          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-[10px] text-white/40 tracking-[0.6em] uppercase">
            Loading {loadProgress}%
          </span>
        </div>
      )}

      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        openMenu={openMenu} 
        setOpenMenu={setOpenMenu} 
      />

      <main>
        <section id="home" ref={containerRef} className="relative z-10 w-full h-screen bg-black text-white">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

          <div
            className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-24 z-20 pointer-events-none"
            style={{
              opacity: `var(--name-opacity, calc(1 - (var(--scroll-progress, 0) * 8)))`,
              marginTop: window.innerWidth < 768 ? '160px' : '0px'
            }}
          >
            <div className="text-center md:text-left md:mt-28">
              <p className="text-[10px] md:text-[18px] text-white/30 font-light mb-2 md:mb-8 tracking-[0.6em] md:tracking-[0.8em] uppercase">
                FULL STACK DEVELOPER
              </p>
              <h1 className="text-[32px] sm:text-[40px] md:text-[110px] leading-[1.1] md:leading-[0.9] font-black text-white uppercase tracking-tighter mix-blend-difference">
                Mohammed <br className="hidden md:block" /> <span className="text-white">Shanis</span>
              </h1>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            @media (min-width: 768px) {
              :root { --name-opacity: 1 !important; }
            }
          `}} />

          {SCENES.map((scene, index) => (
            <SceneOverlay key={index} scene={scene} />
          ))}

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40">
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