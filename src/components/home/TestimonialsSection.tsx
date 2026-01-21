import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Their machinery transformed our production line completely. Quality equipment and exceptional after-sales support.",
    author: "Rajesh Kumar",
    role: "Production Head",
    company: "PrintPro Industries",
    location: "Hyderabad",
  },
  {
    quote: "We've partnered with Sai Enterprises for over 15 years. Their commitment to quality and service is unmatched.",
    author: "Mohammed Ali",
    role: "Managing Director",
    company: "Graphic Solutions",
    location: "Nairobi",
  },
  {
    quote: "From consultation to installation, every step was handled with professionalism. Our Heidelberg press runs flawlessly.",
    author: "Priya Sharma",
    role: "Operations Manager",
    company: "Sharma Print Works",
    location: "Delhi",
  },
  {
    quote: "The team understood our requirements perfectly and delivered exactly what we needed. Highly recommended.",
    author: "David Ochieng",
    role: "CEO",
    company: "East Africa Press",
    location: "Mombasa",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-secondary/30 overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Trusted by industry leaders.
            </h2>
          </motion.div>

          {/* Testimonial Display */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main Quote */}
            <div className="lg:col-span-3 relative">
              <Quote className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 text-primary/10" />
              
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 pl-4 sm:pl-6 border-l-2 border-primary/30"
                >
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <footer>
                    <p className="text-lg sm:text-xl text-foreground font-medium mb-1">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[activeIndex].company}, {testimonials[activeIndex].location}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Navigation Cards */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`relative flex-shrink-0 text-left p-4 sm:p-5 transition-all duration-300 min-w-[200px] lg:min-w-0 ${
                    index === activeIndex 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card border border-border hover:border-primary/30'
                  }`}
                >
                  {/* Progress bar for active */}
                  {index === activeIndex && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-foreground/30"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                  
                  <p className={`font-medium text-sm mb-1 ${
                    index === activeIndex ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-xs ${
                    index === activeIndex ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {testimonial.company}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
