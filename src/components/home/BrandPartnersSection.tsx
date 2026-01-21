import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { partnerBrands } from '@/data/products';

const BrandPartnersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Duplicate for seamless loop
  const duplicatedBrands = [...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-secondary/30 overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Partners
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              World-class <span className="text-primary italic">brands.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee - Fast, minimal, logo-style */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-8 sm:gap-12"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`row1-${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                {brand.country}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Marquee - Row 2 (Reverse) */}
      <div className="relative mb-12 sm:mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-8 sm:gap-12"
          animate={{ x: ['-33.33%', '0%'] }}
          transition={{
            x: {
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`row2-${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                {brand.country}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* HPM Highlight - Minimal */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-8 sm:py-10 px-8 sm:px-12 border border-primary/30 bg-primary/5"
          >
            <span className="font-serif text-3xl sm:text-4xl text-primary">HPM</span>
            <div className="h-px w-12 sm:h-8 sm:w-px bg-primary/30" />
            <span className="text-sm sm:text-base text-foreground/80 text-center sm:text-left">
              Sole Agent for HPM in India
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
              Exclusive
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
