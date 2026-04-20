import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Menon",
    role: "Software Engineer",
    review:
      "Shanis delivers perfect UI, smooth animations, and great performance. Very reliable and talented.",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Meera Varma",
    role: "Product Manager",
    review:
      "Exceptional quality! Communication, speed, and final output were all top-notch.",
    img: "https://i.pravatar.cc/150?img=30",
  },
  {
    name: "Rahul Kumar",
    role: "Startup Founder",
    review:
      "Amazing work ethic and technical skills. The final product exceeded expectations.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Sanya Patel",
    role: "UX Designer",
    review:
      "Attention to detail is remarkable. Delivered exactly what was envisioned, on time.",
    img: "https://i.pravatar.cc/150?img=60",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goToNext]);

  return (
    <section
      id="testimonials"
      className="w-full py-16 bg-black text-white relative"
      aria-label="Client Testimonials"
    >
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Review",
          itemReviewed: {
            "@type": "Person",
            name: "Mohammed Shanis",
          },
        })}
      </script>

      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide mb-10">
          What Clients Say
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          <div className="relative min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center px-4">

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    “{testimonials[currentIndex].review}”
                  </p>

                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={testimonials[currentIndex].img}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border border-gray-700"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={goToPrev}
              className="p-2 border border-gray-700 hover:border-white rounded-full transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-300" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 border border-gray-700 hover:border-white rounded-full transition"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-gray-300" />
              ) : (
                <Play className="w-5 h-5 text-gray-300" />
              )}
            </button>

            <button
              onClick={goToNext}
              className="p-2 border border-gray-700 hover:border-white rounded-full transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-white w-6" : "bg-gray-600 w-2"
                }`}
              ></button>
            ))}
          </div>

        </div>

        {/* Progress */}
        <div className="mt-10">
          <div className="h-0.5 bg-gray-700 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: isAutoPlaying ? Infinity : 0,
              }}
              key={currentIndex}
            />
          </div>

          <p className="text-xs text-gray-500 mt-2 text-center tracking-wide">
            {isAutoPlaying ? "Auto-playing" : "Paused"} • Slide{" "}
            {currentIndex + 1}/{testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
