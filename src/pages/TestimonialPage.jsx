import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

const testimonials = [
  {
    name: "Aarav Menon",
    role: "Senior Engineer",
    review: "Shanis delivers perfect UI, smooth animations, and great performance. A rare blend of aesthetic taste and technical rigor.",
    year: "2025"
  },
  {
    name: "Meera Varma",
    role: "Product Manager",
    review: "Exceptional quality. Communication and speed were top-notch. He doesn't just build features; he builds products.",
    year: "2025"
  },
  {
    name: "Rahul Kumar",
    role: "Startup Founder",
    review: "Amazing work ethic. The final product exceeded our expectations and helped us secure our next round of funding.",
    year: "2024"
  },
  {
    name: "Sanya Patel",
    role: "UX Designer",
    review: "Attention to detail is remarkable. Every transition and micro-interaction was handled with absolute precision.",
    year: "2024"
  },
];

const TestimonialPage = () => {
  return (
    /* Mobile: min-h-screen (allows total page scroll)
       MD+: h-screen overflow-hidden (locks the viewport for the split effect)
    */
    <div className="bg-[#050505] text-white min-h-screen md:h-screen md:overflow-hidden font-sans selection:bg-white selection:text-black">
      <Helmet>
        <title>Testimonials | Engineering Reputation</title>
        <meta name="description" content="Verified feedback from industry leaders on full-stack development and UI engineering." />
      </Helmet>

      <Header />

      <main className="flex flex-col md:flex-row h-full pt-32 md:pt-0">
        
        {/* LEFT SIDE: FIXED ON MD+, SCROLLS ON MOBILE */}
        <section className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-[#050505] z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em] mb-6 block">Proof of Excellence</span>
            <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12">
              CLIENT <br />
              <span className="text-white/20 italic font-light">VOICES.</span>
            </h1>
            
            <div className="grid grid-cols-2 gap-8 max-w-sm">
              <div>
                <h3 className="text-3xl font-light tracking-tighter">100%</h3>
                <p className="text-[9px] uppercase tracking-widest text-white/40">Success Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-light tracking-tighter">30+</h3>
                <p className="text-[9px] uppercase tracking-widest text-white/40">Global Clients</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* RIGHT SIDE: SCROLLS INDEPENDENTLY ON MD+ */}
        <section className="w-full md:w-1/2 h-auto md:h-full md:overflow-y-auto px-8 md:px-20 py-20 md:py-40 space-y-32 md:space-y-64 scrollbar-hide">
          <div className="pb-20 md:pb-40"> 
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group mb-32 md:mb-64 last:mb-0"
              >
                <span className="absolute -top-12 left-0 text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">
                  [{t.year}]
                </span>

                <blockquote className="text-2xl md:text-4xl font-light leading-tight tracking-tight mb-12">
                  “{t.review}”
                </blockquote>

                <div className="flex flex-col border-l border-white/20 pl-6">
                  <cite className="not-italic text-sm font-bold uppercase tracking-widest mb-1">
                    {t.name}
                  </cite>
                  <span className="text-xs text-white/40 font-mono uppercase">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* FINAL CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-20 border-t border-white/10"
            >
              <p className="text-white/40 text-sm mb-8">Ready to be the next success story?</p>
              <a 
                href="mailto:shanis@developer.com"
                className="text-4xl md:text-6xl font-bold tracking-tighter hover:text-white/50 transition-colors uppercase"
              >
                Let's Talk →
              </a>
            </motion.div>

            {/* FOOTER - Visible at the end of the scroll */}
            <footer className="mt-40 py-12 border-t border-white/10 flex justify-between items-center">
              <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Mohammed Shanis</p>
              <div className="flex gap-6 text-[9px] uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">GitHub</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        }
      `}} />
    </div>
  );
};

export default TestimonialPage;