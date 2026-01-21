import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Their machinery transformed our production line completely. Quality equipment and exceptional after-sales support.",
    author: "Rajesh Kumar",
    company: "PrintPro Industries",
    location: "Hyderabad",
  },
  {
    quote: "We've partnered with Sai Enterprises for over 15 years. Their commitment to quality and service is unmatched.",
    author: "Mohammed Ali",
    company: "Graphic Solutions",
    location: "Nairobi",
  },
  {
    quote: "From consultation to installation, every step was handled with professionalism. Our Heidelberg press runs flawlessly.",
    author: "Priya Sharma",
    company: "Sharma Print Works",
    location: "Delhi",
  },
  {
    quote: "The team understood our requirements perfectly and delivered exactly what we needed.",
    author: "David Ochieng",
    company: "East Africa Press",
    location: "Mombasa",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-foreground overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Testimonials
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
          </motion.div>

          {/* Quote Display */}
          <div className="relative min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                {/* Large Quote Mark */}
                <motion.span 
                  className="block font-serif text-[120px] sm:text-[180px] leading-none text-primary/20 mb-[-40px] sm:mb-[-60px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  "
                </motion.span>
                
                {/* Quote */}
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background leading-tight max-w-4xl mx-auto mb-10">
                  {testimonials[activeIndex].quote}
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-background font-medium text-lg sm:text-xl mb-1">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-background/50 text-sm">
                    {testimonials[activeIndex].company}, {testimonials[activeIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-3 mt-12"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative group"
              >
                <span className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary scale-125' : 'bg-background/20 hover:bg-background/40'
                }`} />
                {index === activeIndex && (
                  <motion.span 
                    className="absolute inset-0 rounded-full border border-primary"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
