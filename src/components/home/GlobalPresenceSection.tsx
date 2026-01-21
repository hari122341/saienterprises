import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Globe } from 'lucide-react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const mainLocations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      country: 'India',
      type: 'Headquarters',
      icon: Building2,
    },
    { 
      city: companyInfo.locations.overseas.city, 
      country: 'Kenya',
      type: 'International Office',
      icon: Globe,
    },
  ];

  const branches = ['New Delhi', 'Pune', 'Vijayawada'];

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-foreground overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
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
              Global Presence
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background leading-tight">
              Two continents.<br />
              <span className="text-primary italic">One vision.</span>
            </h2>
          </motion.div>

          {/* Main Locations - Compact cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {mainLocations.map((location, index) => {
              const Icon = location.icon;
              const isHQ = location.type === 'Headquarters';
              
              return (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-6 sm:p-8 ${
                    isHQ ? 'bg-primary text-primary-foreground' : 'bg-background/10 border border-primary/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      isHQ ? 'bg-primary-foreground/10' : 'bg-primary/10'
                    }`}>
                      <Icon className={`w-4 h-4 ${isHQ ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <div>
                      <span className={`inline-block text-[8px] uppercase tracking-[0.2em] px-2 py-1 rounded-full mb-2 ${
                        isHQ ? 'bg-primary-foreground/10 text-primary-foreground' : 'bg-primary/10 text-primary'
                      }`}>
                        {location.type}
                      </span>
                      <h3 className={`font-serif text-2xl sm:text-3xl mb-1 ${
                        isHQ ? 'text-primary-foreground' : 'text-background'
                      }`}>
                        {location.city}
                      </h3>
                      <p className={`text-sm ${isHQ ? 'text-primary-foreground/60' : 'text-background/50'}`}>
                        {location.country}
                      </p>
                    </div>
                  </div>
                  
                  {isHQ && (
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-foreground"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Branch Offices - Simple inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/40">Branches:</span>
            {branches.map((city, i) => (
              <span key={city} className="flex items-center gap-3 sm:gap-4">
                <span className="text-background/70 text-sm sm:text-base">{city}</span>
                {i < branches.length - 1 && <span className="text-background/20">·</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
