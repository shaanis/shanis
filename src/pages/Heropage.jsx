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
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_SKIP = 4;

const SCENES = [
  {
    start: 0.20,
    end: 0.45, 
    position: "bottom-left", 
    title: "Full Stack Engineering",
    subtitle: "01 / ARCHITECTURE",
    description: "Delivering end-to-end web solutions with modern frontend frameworks and scalable backend systems.",
  },
  {
    start: 0.55, // Starts shortly after scene 1
    end: 0.75,   
    position: "top-right", 
    title: "Performance & Scalability",
    subtitle: "02 / OPTIMIZATION",
    description: "Architecting efficient APIs and optimized data flows with Node.js and caching strategies.",
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
        img.onerror = () => resolve();
      });
    };

    const preloadImages = async () => {
      const keyFrames = [];
      for (let i = 1; i <= TOTAL_FRAMES; i += FRAME_SKIP) keyFrames.push(i);
      const batchSize = 12;
      for (let i = 0; i < keyFrames.length; i += batchSize) {
        await Promise.all(keyFrames.slice(i, i + batchSize).map(loadImage));
      }
      setIsReady(true);
      const remainingFrames = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!keyFrames.includes(i)) remainingFrames.push(i);
      }
      for (let i = 0; i < remainingFrames.length; i += 8) {
        await Promise.all(remainingFrames.slice(i, i + 8).map(loadImage));
        await new Promise(r => setTimeout(r, 10));
      }
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = (frameIndex) => {
      const frame = Math.floor(frameIndex);
      let img = imagesRef.current[frame] || imagesRef.current.find(i => i);
      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let dW, dH, x, y;
        if (canvasRatio > imgRatio) {
          dW = canvas.width; dH = canvas.width / imgRatio;
          x = 0; y = (canvas.height - dH) / 2;
        } else {
          dW = canvas.height * imgRatio; dH = canvas.height;
          x = (canvas.width - dW) / 2; y = 0;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, dW, dH);
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
        end: "+=400%",
        scrub: 0.8,
        pin: true,
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

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setOpenMenu(false); }
  };

  return (
    
    <div className="relative bg-[#050505] overflow-x-hidden">
      {loadProgress < 100 && (
        <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center">
          <div className="w-48 h-[1px] bg-white/10 overflow-hidden mb-4">
            <div className="h-full bg-white transition-all duration-500 ease-out" style={{ width: `${loadProgress}%` }} />
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.8em] font-light">SYSTEM INITIALIZING {loadProgress}%</span>
        </div>
      )}

      {/* <Header activeSection={activeSection} onNavClick={handleNavClick} openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
 <SEO {...seoData.home} />
      <main>
        <section id="home" ref={containerRef} className="relative w-full h-screen bg-black">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60" />
          
          <div 
            className="absolute inset-0 flex flex-col justify-start md:justify-center items-center px-6 z-20 pointer-events-none pt-24 md:pt-0"
            style={{ 
              opacity: `calc(1 - (var(--scroll-progress, 0) * 6))`,
              transform: `translateY(calc(var(--scroll-progress, 0) * -150px))`
            }}
          >
            <div className="text-center mt-64">
              <p className="text-[8px] md:text-[10px] text-white/40 font-medium mb-4 tracking-[1em] uppercase">Full Stack Developer</p>
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

      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
        :root { --scroll-progress: 0; }
      `}} />
    </div>
  );
};

const SceneOverlay = ({ scene }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const progress = `var(--scroll-progress, 0)`;
  const localProgress = `clamp(0, (${progress} - ${scene.start}) / (${scene.end} - ${scene.start}), 1)`;
  
  // LOGIC: On mobile, fade out. On Desktop, Stay visible (clamp to 1 after fade-in)
  const opacity = isMobile 
    ? `calc(clamp(0, ${localProgress} * 10, 1) * clamp(0, (1 - ${localProgress}) * 10, 1))`
    : `clamp(0, ${localProgress} * 10, 1)`;

  const getDesktopClasses = () => {
    if (scene.position === "bottom-left") return "items-end justify-start text-left pb-24 lg:pb-32";
    if (scene.position === "top-right") return "items-start justify-end text-right pt-24 lg:pt-32";
    return "items-center justify-center";
  };

  return (
    <div
      className={`absolute inset-0 flex px-6 md:px-20 lg:px-32 z-30 pointer-events-none 
      ${isMobile ? "items-center justify-center pt-32 mt-32" : getDesktopClasses()}`}
      style={{ opacity }}
    >
      <div className={`max-w-xl ${isMobile ? "text-center" : ""}`}>
        <p className="text-[10px] md:text-[11px] text-blue-400 font-bold tracking-[0.5em] mb-3 uppercase">
          {scene.subtitle}
        </p>
        <h2
          className="text-xl md:text-[40px] lg:text-[48px] font-black uppercase leading-none mb-4 text-white"
          style={{
            letterSpacing: `calc(0.2em - (${localProgress} * 0.2em))`,
            transform: `translateY(calc(20px - (${localProgress} * 20px)))`,
          }}
        >
          {scene.title}
        </h2>
        
        {/* Alignment controlled divider */}
        <div className={`h-[1px] w-24 bg-blue-500/50 mb-6 ${
          isMobile || scene.position === "top-right" ? "ml-auto" : "mr-auto"
        } ${isMobile ? "mx-auto" : ""}`} />

        <p className={`text-xs md:text-sm text-white/60 leading-relaxed max-w-xs md:max-w-sm 
          ${scene.position === "top-right" && !isMobile ? "ml-auto" : ""}`}>
          {scene.description}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;