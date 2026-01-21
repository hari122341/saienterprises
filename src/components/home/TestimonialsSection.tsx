import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Their machinery transformed our production line completely. Quality equipment and exceptional after-sales support.",
    author: "Rajesh Kumar",
    role: "Production Head",
    company: "PrintPro Industries, Hyderabad",
  },
  {
    quote: "We've partnered with Sai Enterprises for over 15 years. Their commitment to quality and service is unmatched in the industry.",
    author: "Mohammed Ali",
    role: "Managing Director",
    company: "Graphic Solutions, Nairobi",
  },
  {
    quote: "From consultation to installation, every step was handled with professionalism. Our Heidelberg press runs flawlessly.",
    author: "Priya Sharma",
    role: "Operations Manager",
    company: "Sharma Print Works, Delhi",
  },
  {
    quote: "The team understood our requirements perfectly and delivered exactly what we needed. Highly recommended.",
    author: "David Ochieng",
    role: "CEO",
    company: "East Africa Press, Mombasa",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Client Voices
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background leading-tight">
              Trusted by industry leaders.
            </h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Main testimonial display */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Quote side */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-16 h-16 text-primary/20" />
                <blockquote className="relative z-10 font-serif text-2xl md:text-3xl lg:text-4xl text-background leading-relaxed pl-6 border-l-2 border-primary/30">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>

              {/* Author side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl text-background font-medium mb-1">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-background/60 text-sm mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[activeIndex].company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  
                  {/* Progress dots */}
                  <div className="flex gap-2 ml-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'w-8 bg-primary' 
                            : 'w-1.5 bg-background/30 hover:bg-background/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background accent */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            />
          </div>

          {/* Bottom testimonial cards preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-background/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  className={`text-left p-4 transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary/10 border border-primary/30' 
                      : 'bg-background/5 border border-transparent hover:bg-background/10'
                  }`}
                >
                  <p className="text-background/80 text-xs line-clamp-2 mb-3 leading-relaxed">
                    "{testimonial.quote.substring(0, 60)}..."
                  </p>
                  <p className={`text-[10px] uppercase tracking-wider ${
                    index === activeIndex ? 'text-primary' : 'text-background/40'
                  }`}>
                    {testimonial.author}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
