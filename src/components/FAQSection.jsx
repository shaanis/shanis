import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle, FiCode, FiBriefcase, FiMail, FiGlobe } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) with over 1 year of production experience. I've delivered 8+ deployed projects using these technologies, focusing on optimized APIs, responsive interfaces, and well-structured database systems.",
      icon: <FiCode className="text-xl" />,
      category: "Technical"
    },
    {
      question: "What was your role at Highskilz?",
      answer: "As a Full Stack Developer at Highskilz (Aug 2024 – Sep 2025), I produced and maintained 5+ full-stack products serving 500+ users. Key achievements include achieving 40% faster API responses, integrating payment gateways and Google APIs, setting up automated deployment pipelines reducing manual effort by 80%, and ensuring 99.9% uptime across applications.",
      icon: <FiBriefcase className="text-xl" />,
      category: "Experience"
    },
    {
      question: "Can you tell me about your e-commerce project CasaAura?",
      answer: "CasaAura is a home decor e-commerce platform I built using React, Node, and MongoDB. It handles 100+ daily visitors with features like Razorpay integration (increasing checkout completion by 25%), product filtering, wishlist, and cart management. Live demo available at https://cas4Aura.netlify.app",
      icon: <FiGlobe className="text-xl" />,
      category: "Projects"
    },
    {
      question: "Do you have experience with mobile development?",
      answer: "Yes, I developed a Club Management App using Flutter and Node.js with features like member registration, fee tracking, expense management, role-based authentication, Cloudinary integration for file storage, and server-side PDF report generation.",
      icon: <FiCode className="text-xl" />,
      category: "Technical"
    },
    {
      question: "What about the Tripeloo booking project?",
      answer: "Tripeloo is a resort and activities booking web app with role-based dashboards for admins and vendors across 20+ destinations. I implemented real-time search and filtering (improving data fetch time by 40%), secure payments, and booking verification for 50+ users. Demo: https://tripeloodemo.netlify.app",
      icon: <FiGlobe className="text-xl" />,
      category: "Projects"
    },
    {
      question: "What's your typical response time for inquiries?",
      answer: "I typically respond to emails within 24 hours. For urgent matters, you can reach me via phone at +91 7356379172. I'm always open to discussing new opportunities and creative projects.",
      icon: <FiMail className="text-xl" />,
      category: "Contact"
    },
    {
      question: "What tools and integrations are you familiar with?",
      answer: "I work with REST APIs, JWT authentication, Git/GitHub, deployment platforms (Netlify, Vercel, Render), and integrations like Razorpay payment gateway, Google APIs, and Cloudinary for media management. I also use Tailwind CSS and Bootstrap for frontend development.",
      icon: <FiCode className="text-xl" />,
      category: "Technical"
    },
    {
      question: "What's your educational background?",
      answer: "I completed a MERN Stack Internship at Luminar Technolab Kochi (Aug 2024 – Mar 2025) and hold a BSc in Computer Science from University of Calicut (Aug 2021 – Mar 2024). This combination of formal education and practical training has equipped me with strong fundamentals and real-world experience.",
      icon: <FiBriefcase className="text-xl" />,
      category: "Education"
    }
  ];

  const categories = ["All", "Technical", "Projects", "Experience", "Contact", "Education"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div id="faq" className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-black/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-l from-black/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FiHelpCircle className="text-3xl text-black" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about my experience, projects, and services
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-black to-gray-600 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -20 }}
                className="overflow-hidden"
              >
                <div
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white border-2 border-black shadow-[0_10px_40px_rgb(0,0,0,0.1)]"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        openIndex === index ? "bg-black/10" : "bg-gray-100"
                      } transition-colors`}>
                        <div className={openIndex === index ? "text-black" : "text-gray-700"}>
                          {faq.icon}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-black mt-1">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <FiChevronDown className={`text-2xl ${
                        openIndex === index ? "text-black" : "text-gray-400"
                      }`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          {faq.question.includes("CasaAura") && (
                            <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                              <p className="text-sm text-gray-600">
                                <strong>Live Demo:</strong>{" "}
                                <a 
                                  href="https://cas4Aura.netlify.app" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-black hover:underline font-medium"
                                >
                                  https://cas4Aura.netlify.app
                                </a>
                              </p>
                            </div>
                          )}
                          {faq.question.includes("Tripeloo") && (
                            <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                              <p className="text-sm text-gray-600">
                                <strong>Live Demo:</strong>{" "}
                                <a 
                                  href="https://tripeloodemo.netlify.app" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-black hover:underline font-medium"
                                >
                                  https://tripeloodemo.netlify.app
                                </a>
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-black to-gray-900 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always happy to discuss your specific requirements or provide more detailed information about my projects and experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:mhdshanis3@gmail.com"
                className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Send me an Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+917356379172"
                className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200">
            <div className="text-3xl font-bold text-black">8+</div>
            <div className="text-gray-600 mt-2">Deployed Projects</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200">
            <div className="text-3xl font-bold text-black">40%</div>
            <div className="text-gray-600 mt-2">API Performance Boost</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200">
            <div className="text-3xl font-bold text-black">500+</div>
            <div className="text-gray-600 mt-2">Users Served</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200">
            <div className="text-3xl font-bold text-black">99.9%</div>
            <div className="text-gray-600 mt-2">Uptime Record</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;