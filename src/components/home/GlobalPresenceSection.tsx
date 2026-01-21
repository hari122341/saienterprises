import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const floatY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-primary overflow-hidden">
      {/* Parallax background layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"
        style={{ scale: bgScale }}
      />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none"
        style={{ y: floatY1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-primary-foreground/3 blur-2xl pointer-events-none"
        style={{ y: floatY2 }}
      />
      
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 sm:mb-28"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary-foreground/40"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Presence
              <motion.span 
                className="w-8 h-px bg-primary-foreground/40"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-none">
              Two continents.
            </h2>
          </motion.div>

          {/* Locations - Large Typography */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* India */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary-foreground"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">India</span>
              </div>
              
              <div className="space-y-6">
                {[
                  { city: companyInfo.locations.headquarters.city, label: 'HQ' },
                  { city: 'New Delhi', label: null },
                  { city: 'Pune', label: null },
                  { city: 'Vijayawada', label: null },
                ].map((loc, i) => (
                  <motion.div
                    key={loc.city}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-baseline gap-4"
                  >
                    <span className={`font-serif text-3xl sm:text-4xl md:text-5xl ${
                      loc.label ? 'text-primary-foreground' : 'text-primary-foreground/40'
                    }`}>
                      {loc.city}
                    </span>
                    {loc.label && (
                      <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/60 bg-primary-foreground/10 px-2 py-1">
                        {loc.label}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* East Africa */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary-foreground"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">East Africa</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-baseline gap-4"
              >
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground">
                  {companyInfo.locations.overseas.city}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/60 bg-primary-foreground/10 px-2 py-1">
                  International
                </span>
              </motion.div>
              <p className="text-primary-foreground/40 text-sm mt-2">{companyInfo.locations.overseas.country}</p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 sm:mt-28 pt-12 border-t border-primary-foreground/10 flex flex-wrap justify-center gap-12 sm:gap-20"
          >
            {[
              { value: '5', label: 'Offices' },
              { value: '24+', label: 'Years' },
              { value: '500+', label: 'Clients' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <span className="block font-serif text-4xl sm:text-5xl text-primary-foreground">{stat.value}</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
