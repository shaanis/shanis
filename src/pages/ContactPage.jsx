import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";
const ContactPage = () => {

      const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_xq8d9oi",
        "template_zhc0uqp",
        formRef.current,
        "OjahHd--sZ4xidMQt"
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          formRef.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSending(false);
          alert("Something went wrong. Try again!");
        }
      );
  };
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <SEO {...seoData.contact} />

      {/* HERO - Oversized Typography Approach */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        {/* Massive background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[30vw] font-black whitespace-nowrap">CONTACT</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">01 — Get in touch</p>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
              Say
              <br />
              Hello.
            </h1>
            <div className="w-32 h-[2px] bg-white/20 my-8" />
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Let's collaborate and build something that matters. 
              Available for freelance and full-time opportunities.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-wider text-gray-600"
        >
          SCROLL
        </motion.div>
      </section>

      {/* DIRECT CONTACT - Minimal Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              label: "Email",
              value: "Gmail",
              link: "mailto:mhdshanis3@gmail.com",
              detail: "Reply within 24h"
            },
            {
              label: "Social",
              value: "Instagram",
              link: "https://instagram.com/shaaaanis",
              detail: "DM open"
            },
            {
              label: "Phone",
              value: "+91 7356379172",
              link: "tel:+917356379172",
              detail: "Mon-Fri, 9-6 IST"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <p className="text-sm text-gray-500 mb-3 tracking-wide">{item.label}</p>
              <a 
                href={item.link}
                className="text-3xl md:text-4xl font-bold hover:text-gray-400 transition-colors duration-300 block"
              >
                {item.value}
              </a>
              <p className="text-sm text-gray-600 mt-3">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      {/* FORM - PREMIUM GLASS UI */}
<section className="min-h-screen border-t border-white/10 flex items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">

  {/* background glow */}
  <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full top-[-100px] left-[-100px]" />
  <div className="absolute w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="w-full max-w-5xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm text-gray-400 tracking-widest mb-4">
          02 — Start a conversation
        </p>

        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
          Tell me your vision.
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Whether you’re building a brand, launching a product, or scaling your business —
          let’s create something that stands out.
        </p>

        {/* mini highlights */}
        <div className="mt-8 space-y-3 text-sm text-gray-500">
          <p> Fast response within 24 hours</p>
          <p> Freelance & full-time available</p>
          <p> Working worldwide</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <form  ref={formRef} onSubmit={sendEmail} className="space-y-6">

        {/* Floating Input */}
        <div className="relative group">
          <input
            type="text"
            required
            name="user_name"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-white/60 transition"
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500 group-focus-within:text-white transition">
            Name
          </label>
        </div>

        <div className="relative group">
          <input
            type="email"
            required  
            name="user_email"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-white/60 transition"
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500 group-focus-within:text-white transition">
            Email
          </label>
        </div>
        <div className="relative group">
          <input
            type="tel"
            required  
            name="user_phone"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-white/60 transition"
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500 group-focus-within:text-white transition">
            Phone
          </label>
        </div>

        <div className="relative group">
          <select name="service" className="w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 focus:outline-none text-white">
            <option className="bg-black">Select service</option>
            <option className="bg-black">Web Design</option>
            <option className="bg-black">Web Development</option>
            <option className="bg-black">App Development</option>
          </select>
          <label className="absolute left-4 top-2 text-xs text-gray-500">
            Service
          </label>
        </div>

        <div className="relative group">
          <textarea
            rows="4"
            required
            name="message"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-white/60 transition resize-none"
          />
          <label className="absolute left-4 top-2 text-xs text-gray-500 group-focus-within:text-white transition">
            Message
          </label>
        </div>

        {/* CTA */}
        {/* BUTTON */}
                          <motion.button
                            type="submit"
                            disabled={isSending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full rounded-xl py-4 px-6 font-bold transition-all shadow-lg ${isSending
                                ? "bg-white/30 text-gray-300 cursor-not-allowed"
                                : "bg-gradient-to-r from-white to-gray-200 text-black hover:shadow-xl"
                              }`}
                          >
                            {isSending ? "Sending..." : "Send Message"}
                          </motion.button>
        
                          {/* SUCCESS */}
                          {sent && (
                            <p className="text-green-400 mt-3 animate-pulse">
                              Message sent successfully!
                            </p>
                          )}
      </form>

    </div>
  </motion.div>
</section>

      {/* STATS - Number Focused */}
      <section className="border-t border-white/10 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="text-sm text-gray-500 tracking-wide">03 — By the numbers</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Work that speaks for itself</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "50+", label: "Projects", suffix: "" },
              { number: "100", label: "Clients", suffix: "%", isPercent: true },
              { number: "15", label: "Countries", suffix: "" },
              { number: "4.98", label: "Rating", suffix: "★" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black tracking-tighter">
                  {stat.number}
                  {stat.isPercent && <span className="text-3xl">%</span>}
                </div>
                <div className="text-gray-500 text-sm mt-3 tracking-wide">
                  {stat.label} {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FINAL CTA - Massive */}
      <section className="relative py-48 px-6 md:px-12 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <p className="text-sm text-gray-500 tracking-wide mb-6">04 — Let's work</p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1]">
            Let's build
            <br />
            something
            <br />
            great.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-all inline-flex items-center gap-2 group"
          >
            Start a project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER - Clean */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 Studio Work</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;