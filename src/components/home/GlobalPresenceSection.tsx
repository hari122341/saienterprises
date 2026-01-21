import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const indiaLocations = [
    { city: companyInfo.locations.headquarters.city, isHQ: true },
    { city: 'New Delhi', isHQ: false },
    { city: 'Pune', isHQ: false },
    { city: 'Vijayawada', isHQ: false },
  ];

  const africaLocation = { 
    city: companyInfo.locations.overseas.city, 
    country: companyInfo.locations.overseas.country,
    isInternational: true 
  };

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-foreground overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Global Reach
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background leading-tight">
              Two continents.<br />
              <span className="text-primary">One</span> commitment.
            </h2>
          </motion.div>

          {/* Locations Display */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* India Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs uppercase tracking-[0.25em] text-background/50 font-medium">
                  India
                </span>
              </div>
              
              <div className="space-y-4">
                {indiaLocations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className={`font-serif text-2xl sm:text-3xl md:text-4xl transition-colors duration-300 ${
                        location.isHQ 
                          ? 'text-primary' 
                          : 'text-background/80 group-hover:text-background'
                      }`}>
                        {location.city}
                      </span>
                      {location.isHQ && (
                        <motion.span 
                          className="text-[9px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 }}
                        >
                          Headquarters
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* East Africa Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-xs uppercase tracking-[0.25em] text-background/50 font-medium">
                  East Africa
                </span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary">
                    {africaLocation.city}
                  </span>
                  <motion.span 
                    className="text-[9px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    International
                  </motion.span>
                </div>
                <p className="text-background/50 text-sm mt-2">{africaLocation.country}</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Connection line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-background/10 flex items-center justify-center"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm text-background/40 font-medium tracking-wide">4 Cities</span>
              <motion.div 
                className="w-16 sm:w-24 h-px bg-gradient-to-r from-primary/60 via-primary to-primary/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <span className="text-xs sm:text-sm text-background/40 font-medium tracking-wide">2 Continents</span>
              <motion.div 
                className="w-16 sm:w-24 h-px bg-gradient-to-r from-primary/60 via-primary to-primary/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.4 }}
              />
              <span className="text-xs sm:text-sm text-background/40 font-medium tracking-wide">24+ Years</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
