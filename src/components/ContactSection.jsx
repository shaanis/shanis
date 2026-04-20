import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

const ContactSection = () => {
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
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-8 overflow-hidden relative"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-black to-gray-600 rounded-full mt-4 mb-6"></div>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have an idea, project, or just want to say hello? I'm always open
            to new opportunities and creative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-[0_20px_60px_rgb(0,0,0,0.08)]">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2 flex items-center gap-3">
                  <span className="w-2 h-8 bg-black rounded-full"></span>
                  Get In Touch
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have a question or want to collaborate, I'd love
                  to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:mhdshanis3@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                >
                  <div className="p-3 rounded-lg bg-black/5">
                    <FiMail className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-black font-semibold">
                      mhdshanis3@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917356379172"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                >
                  <div className="p-3 rounded-lg bg-black/5">
                    <FiPhone className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-black font-semibold">
                      +91 73563 79172
                    </p>
                  </div>
                </a>

                <a
                  href="https://shanis.in"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                >
                  <div className="p-3 rounded-lg bg-black/5">
                    <FiGlobe className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Portfolio
                    </p>
                    <p className="text-black font-semibold">shanis.in</p>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-4 font-medium">Find me online</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/shaanis"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-black text-black hover:text-white border border-gray-200 hover:border-black transition-all group"
                  >
                    <FiGithub className="text-xl" />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/mohammed-shanis-p-14893032b"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-black text-black hover:text-white border border-gray-200 hover:border-black transition-all group"
                  >
                    <FiLinkedin className="text-xl" />
                    <span className="font-medium text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-black via-black to-gray-900 shadow-2xl relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-white/10">
                    <FiMessageSquare className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Send a Message
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* FORM */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                  {/* NAME + EMAIL + PHONE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                        <FiUser className="text-sm" /> Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        // placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-white/30 placeholder-gray-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                        <FiMail className="text-sm" /> Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        // placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-white/30 placeholder-gray-400"
                      />
                    </div>

                    {/* Phone (ADDED) */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                        <FiPhone className="text-sm" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="user_phone"
                        required
                        // placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-white/30 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                      <FiMessageSquare className="text-sm" /> Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder=""
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-white/30 placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>

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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
