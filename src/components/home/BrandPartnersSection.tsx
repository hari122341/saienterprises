import { useRef } from 'react';
import { motion } from 'framer-motion';
import { partnerBrands } from '@/data/products';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const BrandPartnersSection = () => {
  const containerRef = useRef(null);

  // Duplicate for seamless loop
  const duplicatedBrands = [...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <section id="partners" ref={containerRef} className="py-16 sm:py-20 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal animation="fadeUp" className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Partners
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              World-class <span className="text-primary italic">partners.</span>
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Scrolling Marquee - Row 1 */}
      <div className="relative mb-6 sm:mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-secondary/100 via-secondary/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-secondary/100 via-secondary/60 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-10 sm:gap-16"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`row1-${brand.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {brand.name}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-2 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {brand.country}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Marquee - Row 2 (Reverse, slightly faster) */}
      <div className="relative mb-8 sm:mb-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-secondary/100 via-secondary/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-secondary/100 via-secondary/60 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-10 sm:gap-16"
          animate={{ x: ['-33.33%', '0%'] }}
          transition={{
            x: {
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`row2-${brand.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground/40 group-hover:text-primary/70 transition-colors duration-300 whitespace-nowrap italic">
                {brand.name}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 mt-2 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                {brand.country}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* HPM Exclusive - Premium treatment */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="scaleUp" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative py-10 sm:py-12 px-8 sm:px-12 border border-primary/30 bg-primary/5 overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8">
                <div className="absolute top-0 left-0 w-full h-px bg-primary" />
                <div className="absolute top-0 left-0 h-full w-px bg-primary" />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-full h-px bg-primary" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-primary" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary/60" />
                  <span className="font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-wider">HPM</span>
                  <Star className="w-4 h-4 text-primary/60" />
                </div>
                <div className="hidden sm:block h-10 w-px bg-primary/30" />
                <div className="text-center sm:text-left">
                  <span className="text-foreground font-medium block mb-1">
                    Sole Agent for HPM in India
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    Exclusive Partnership
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
