import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-foreground overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          {/* Header - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-background leading-tight">
              Where we <span className="text-primary italic">operate.</span>
            </h2>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
            {/* Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary p-6 sm:p-8"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50 mb-3 block">
                Headquarters
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-1">
                {companyInfo.locations.headquarters.city}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {companyInfo.locations.headquarters.state}, {companyInfo.locations.headquarters.country}
              </p>
            </motion.div>

            {/* International */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/10 border border-background/20 p-6 sm:p-8"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-background/40 mb-3 block">
                International Office
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-background mb-1">
                {companyInfo.locations.overseas.city}
              </h3>
              <p className="text-background/50 text-sm">
                {companyInfo.locations.overseas.country}
              </p>
            </motion.div>
          </div>

          {/* Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.15em] text-background/40">
              Branches:
            </span>
            <div className="flex flex-wrap gap-3">
              {['New Delhi', 'Pune', 'Vijayawada'].map((city, i) => (
                <span 
                  key={city}
                  className="text-background/70 text-sm px-3 py-1 bg-background/5 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
