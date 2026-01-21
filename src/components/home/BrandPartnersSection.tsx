import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { partnerBrands } from '@/data/products';

const BrandPartnersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Split brands into two rows for the marquee
  const row1Brands = partnerBrands.slice(0, 4);
  const row2Brands = partnerBrands.slice(4);

  // Duplicate for seamless loop
  const duplicatedRow1 = [...row1Brands, ...row1Brands, ...row1Brands];
  const duplicatedRow2 = [...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 md:py-40 bg-secondary/30 overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-muted-foreground max-w-lg mx-auto mt-4 text-sm sm:text-base">
              Authorized partners with the world's leading manufacturers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee - Row 1 (Left to Right) */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedRow1.map((brand, index) => (
            <motion.div
              key={`row1-${brand.name}-${index}`}
              className="group flex-shrink-0 w-[240px] sm:w-[300px] p-6 sm:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <span className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {brand.name}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  {brand.country}
                </span>
                <span className="mt-auto text-sm text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  {brand.specialty}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Marquee - Row 2 (Right to Left) */}
      <div className="relative mb-16 sm:mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ['-33.33%', '0%'] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedRow2.map((brand, index) => (
            <motion.div
              key={`row2-${brand.name}-${index}`}
              className="group flex-shrink-0 w-[240px] sm:w-[300px] p-6 sm:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <span className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {brand.name}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  {brand.country}
                </span>
                <span className="mt-auto text-sm text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  {brand.specialty}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* HPM Highlight */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-primary text-primary-foreground p-10 sm:p-14 md:p-16 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <span className="inline-block text-[9px] uppercase tracking-[0.25em] bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                  Exclusive Partnership
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                  Sole Agent for HPM<br />
                  <span className="text-primary-foreground/70">in India</span>
                </h3>
                <p className="text-primary-foreground/70 max-w-md text-base sm:text-lg">
                  Premium paper cutting and packaging machines with dedicated expert support and genuine parts.
                </p>
              </div>
              <Link
                to="/brands"
                className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 hover:bg-primary-foreground/90 transition-colors"
              >
                <span className="text-sm font-semibold">View all partners</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
