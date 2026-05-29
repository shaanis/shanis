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
import { seoData } from "../seo/seoConfig";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "CasaAura",
    label: "Luxury Commerce",
    category: "E-Commerce",
    desc: "A premium shopping experience crafted with clean product presentation and smooth conversion flow.",
    image: casaAura,
    live: "https://cas4aura.netlify.app",
  },
  {
    title: "Tripeloo",
    label: "Travel Platform",
    category: "Travel Tech",
    desc: "A modern travel product with elegant discovery, booking-focused structure, and fast performance.",
    image: tripeloo,
    live: "https://tripeloodemo.netlify.app",
  },
  {
    title: "DVA",
    label: "Fashion Store",
    category: "Fashion",
    desc: "A bold fashion storefront with premium visual hierarchy and product-first storytelling.",
    image: dva,
    live: "https://d-va.netlify.app",
  },
  {
    title: "Acrewala",
    label: "Fintech Product",
    category: "Fintech",
    desc: "A structured fintech interface built for trust, clarity, and smooth digital transactions.",
    image: acrewala,
    live: "https://acerwala.netlify.app",
  },
  {
    title: "DoorCarts",
    label: "Productivity Tool",
    category: "Productivity",
    desc: "A practical business tool focused on speed, usability, and clean action-based workflows.",
    image: doorcarts,
    live: "https://doorcarts.vercel.app/",
  },
  {
    title: "Sagara",
    label: "Mobile App",
    category: "Flutter App",
    desc: "A mobile-first application concept with clean structure, scalable logic, and app-like interaction.",
    image: sagara,
    live: "https://github.com/shaanis/sagara.git",
  },
];

const ProjectPage = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const bodyRefs = useRef([]);
  const barRefs = useRef([]);

  useLayoutEffect(() => {
    // മൊബൈൽ ആണെങ്കിൽ GSAP സ്റ്റാക്കിംഗ് ഇഫക്റ്റ് പൂർണ്ണമായി ഒഴിവാക്കുന്നു
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      const bodies = bodyRefs.current.filter(Boolean);
      const bars = barRefs.current.filter(Boolean);

      if (!cards.length) return;

      const getLayout = () => {
        const w = window.innerWidth;
        const isTab = w >= 768 && w < 1024;

        return {
          top: 45,
          stackGap: isTab ? 36 : 14,
          hiddenY: window.innerHeight + 100,
        };
      };

      const updateCards = (progress) => {
        const { top, stackGap, hiddenY } = getLayout();
        const N = projects.length;
        
        const currentProg = progress * (N - 1);
        const activeIndex = Math.floor(currentProg);
        const t = currentProg - activeIndex;

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const body = bodies[i];
          const bar = bars[i];
          if (!card) continue;

          let y, scale, opacity, zIndex;

          if (i < activeIndex) {
            y = top + i * stackGap;
            scale = 1 - (activeIndex - i) * 0.015;
            opacity = 1;
            zIndex = 50 + i;
          } else if (i === activeIndex) {
            const finalStackY = top + i * stackGap;
            y = gsap.utils.interpolate(top + (i * stackGap), finalStackY - stackGap, t);
            scale = 1 - t * 0.015;
            opacity = 1;
            zIndex = 100 + i;
          } else if (i === activeIndex + 1) {
            const startY = hiddenY;
            const endY = top + i * stackGap; 
            y = gsap.utils.interpolate(startY, endY, t);
            scale = 1;
            opacity = 1;
            zIndex = 300 + i;
          } else {
            y = hiddenY;
            scale = 1;
            opacity = 0;
            zIndex = 10 + i;
          }

          gsap.set(card, {
            y,
            scale,
            opacity,
            zIndex,
            force3D: true,
            overwrite: "auto",
          });

          if (body) {
            const bodyAlpha = i === activeIndex ? 1 - t : i === activeIndex + 1 ? t : 0;
            gsap.set(body, { autoAlpha: bodyAlpha, overwrite: "auto" });
          }

          if (bar) {
            const barAlpha = i < activeIndex ? 1 : i === activeIndex ? t : 0;
            gsap.set(bar, { autoAlpha: barAlpha, overwrite: "auto" });
          }
        }
      };

      gsap.set(cards, {
        willChange: "transform, opacity",
        transformOrigin: "center top",
      });

      updateCards(0);

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${projects.length * 600}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          updateCards(self.progress);
        },
      });

      const handleResize = () => {
        // റിസൈസ് ചെയ്യുമ്പോൾ മൊബൈൽ ആകുകയാണെങ്കിൽ പേജ് റീലോഡ് ചെയ്യുകയോ ട്രിഗർ മാറ്റുകയോ ചെയ്യാം
        if (window.innerWidth < 768) {
          window.location.reload();
        } else {
          updateCards(trigger.progress);
          trigger.refresh();
        }
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        trigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050403] text-white">
      <SEO {...seoData.projects} />
      <Helmet>
        <title>Selected Works | Mohammed Shanis</title>
      </Helmet>

      <section
        ref={sectionRef}
        className="relative h-auto md:h-screen w-full md:overflow-hidden bg-[#050403]"
      > 
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,150,70,0.12),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(255,190,80,0.08),transparent_34%),linear-gradient(180deg,#090503,#050403_56%,#000)]" />

        <div className="relative mx-auto flex flex-col md:block gap-8 md:gap-0 h-full w-full max-w-[1400px] px-4 py-12 md:py-0 sm:px-8">
          <h1 className="text-center mt-2 font-black uppercase  tracking-[-0.06em] -mb-5">
        PROJECTS
      </h1>
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="relative md:absolute left-0 right-0 md:left-4 md:right-4 h-auto md:h-[500px] lg:h-[540px] overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#11100f] shadow-[0_40px_120px_rgba(0,0,0,0.85)] lg:rounded-[2.4rem]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),radial-gradient(circle_at_10%_10%,rgba(255,172,91,0.06),transparent_32%)] " />

              {/* PROJECT BAR */}
              <div
                ref={(el) => {
                  barRefs.current[index] = el;
                }}
                className="absolute left-0 right-0 top-0 z-30 flex h-[48px] items-center gap-4 bg-[#11100f] px-6 sm:px-10 border-b border-white/5"
              >
              </div>

              {/* PROJECT BODY */}
              <div
                ref={(el) => {
                  bodyRefs.current[index] = el;
                }}
                className="project-body relative z-10 grid h-full grid-rows-[auto_auto] lg:grid-cols-[0.85fr_1.15fr] lg:grid-rows-1"
              >
                <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-14">
                  <div>
                    <div className="mb-4 flex items-center gap-3 sm:mb-5">
                      <span className="rounded-full border border-orange-200/15 bg-orange-200/10 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.22em] text-orange-200 sm:px-4">
                        {project.label}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-[0.26em] text-white/45">
                        0{index + 1} / 0{projects.length}
                      </span>
                    </div>

                    <h2 className="text-[clamp(1.8rem,7vw,4.8rem)] font-black uppercase leading-[0.85] tracking-[-0.06em]">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-[9px] font-black uppercase tracking-[0.36em] text-orange-200">
                      {project.category}
                    </p>

                    <p className="mt-4 max-w-md text-xs leading-5 text-white/60 sm:text-sm sm:leading-6 lg:text-base">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-orange-200 sm:px-6 sm:text-[10px]"
                    >
                      View Project 
                    </a>
                    <a
                      href="https://wa.me/917356379172"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/75 transition hover:bg-white/10 sm:px-6 sm:text-[10px]"
                    >
                      Discuss 
                    </a>
                  </div>
                </div>

                {/* Desktop Image */}
                <div className="hidden min-h-0 items-center p-8 lg:flex">
                  <div className="w-full overflow-hidden rounded-[1.8rem] bg-[#181818] aspect-[16/10] shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center"
                      loading={index <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      draggable="false"
                      幕
                    />
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block px-6 pb-6 lg:hidden">
                  <div className="w-full overflow-hidden rounded-[1.2rem] bg-[#181818] aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center"
                      loading={index <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;