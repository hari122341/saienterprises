import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { partnerBrands } from '@/data/products';

const BrandPartnersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const featuredBrands = partnerBrands.slice(0, 4);
  const otherBrands = partnerBrands.slice(4);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-secondary/30 overflow-hidden">
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              World-class <span className="text-primary">brands.</span>
            </h2>
          </motion.div>

          {/* Featured Brands - Large Typography */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {featuredBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group text-center py-8 sm:py-12 border-b border-border hover:border-primary/30 transition-colors"
                >
                  <motion.span 
                    className="block font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] text-foreground/20 group-hover:text-primary transition-colors duration-500"
                    whileHover={{ letterSpacing: '0.15em' }}
                  >
                    {brand.name.toUpperCase()}
                  </motion.span>
                  <span className="block mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {brand.country}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Brands - Compact Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 mb-16"
          >
            {otherBrands.map((brand, index) => (
              <motion.span
                key={brand.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                className="text-sm sm:text-base font-semibold tracking-[0.15em] text-foreground/30 hover:text-primary transition-colors cursor-default"
              >
                {brand.name.toUpperCase()}
              </motion.span>
            ))}
          </motion.div>

          {/* HPM Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary text-primary-foreground p-8 sm:p-12 text-center"
          >
            <span className="inline-block text-[9px] uppercase tracking-[0.25em] bg-primary-foreground/10 px-3 py-1.5 mb-4">
              Exclusive Partnership
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">
              Sole Agent for HPM in India
            </h3>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-6 text-sm sm:text-base">
              Premium paper cutting and packaging machines with dedicated expert support.
            </p>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity text-sm font-medium"
            >
              <span>View all partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
