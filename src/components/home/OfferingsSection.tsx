import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '@/data/products';

const OfferingsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-foreground overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px),
                              linear-gradient(hsl(var(--background)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
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
              Machinery
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background leading-tight">
              Complete print<br />
              <span className="text-primary">workflow</span> coverage.
            </h2>
          </motion.div>

          {/* Category Cards Grid - Text based, no icons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {productCategories.map((category, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link
                    to={`/machinery/${category.slug}`}
                    className={`group relative block p-6 sm:p-8 h-full min-h-[260px] sm:min-h-[300px] transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary' 
                        : 'bg-background/5 hover:bg-background/10 border border-background/10'
                    }`}
                  >
                    {/* Large Number */}
                    <span className={`absolute top-4 right-4 text-6xl sm:text-7xl font-serif transition-colors duration-300 ${
                      isActive ? 'text-primary-foreground/10' : 'text-background/5'
                    }`}>
                      0{index + 1}
                    </span>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full pt-12 sm:pt-16">
                      <h3 className={`font-serif text-2xl sm:text-3xl mb-3 transition-colors duration-300 ${
                        isActive ? 'text-primary-foreground' : 'text-background'
                      }`}>
                        {category.name}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 line-clamp-3 transition-colors duration-300 ${
                        isActive ? 'text-primary-foreground/70' : 'text-background/50'
                      }`}>
                        {category.description}
                      </p>

                      {/* Products count */}
                      <div className={`mt-auto flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                        isActive ? 'border-primary-foreground/20' : 'border-background/10'
                      }`}>
                        <span className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                          isActive ? 'text-primary-foreground/60' : 'text-background/40'
                        }`}>
                          {category.products.length} Products
                        </span>
                        
                        <motion.div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'bg-primary-foreground text-primary' 
                              : 'bg-background/10 text-background/50 group-hover:bg-primary group-hover:text-primary-foreground'
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
                        isActive ? 'bg-primary-foreground/20' : 'bg-primary'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link
              to="/machinery"
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium tracking-wide">Explore all machinery</span>
              <motion.div
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ x: 5 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
