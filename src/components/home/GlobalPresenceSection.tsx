import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Building2, Globe } from 'lucide-react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const locations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      country: 'India',
      type: 'Headquarters',
      icon: Building2,
    },
    { 
      city: 'New Delhi', 
      country: 'India',
      type: 'Branch',
      icon: MapPin,
    },
    { 
      city: 'Pune', 
      country: 'India',
      type: 'Branch',
      icon: MapPin,
    },
    { 
      city: 'Vijayawada', 
      country: 'India',
      type: 'Branch',
      icon: MapPin,
    },
    { 
      city: companyInfo.locations.overseas.city, 
      country: 'Kenya',
      type: 'International',
      icon: Globe,
    },
  ];

  const stats = [
    { value: '5', label: 'Offices', suffix: '' },
    { value: '2', label: 'Continents', suffix: '' },
    { value: '500', label: 'Clients', suffix: '+' },
    { value: '24', label: 'Years', suffix: '+' },
  ];

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 md:py-40 bg-foreground overflow-hidden">
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

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center p-6 sm:p-8 bg-background/5 border border-background/10"
              >
                <span className="block font-serif text-4xl sm:text-5xl md:text-6xl text-background">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </span>
                <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-background/50 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Locations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {locations.map((location, index) => {
              const Icon = location.icon;
              const isHeadquarters = location.type === 'Headquarters';
              const isInternational = location.type === 'International';
              
              return (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`group relative p-6 sm:p-8 transition-all duration-300 ${
                    isHeadquarters 
                      ? 'bg-primary text-primary-foreground sm:col-span-2 lg:col-span-1' 
                      : isInternational
                        ? 'bg-background/10 border border-primary/30'
                        : 'bg-background/5 border border-background/10 hover:border-background/20'
                  }`}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                      isHeadquarters 
                        ? 'bg-primary-foreground/10' 
                        : 'bg-primary/10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className={`w-4 h-4 ${
                      isHeadquarters ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </motion.div>

                  {/* Type badge */}
                  <span className={`inline-block text-[8px] uppercase tracking-[0.2em] px-2 py-1 rounded-full mb-3 ${
                    isHeadquarters 
                      ? 'bg-primary-foreground/10 text-primary-foreground' 
                      : isInternational
                        ? 'bg-primary/10 text-primary'
                        : 'bg-background/10 text-background/60'
                  }`}>
                    {location.type}
                  </span>

                  {/* City */}
                  <h3 className={`font-serif text-xl sm:text-2xl mb-1 ${
                    isHeadquarters ? 'text-primary-foreground' : 'text-background'
                  }`}>
                    {location.city}
                  </h3>

                  {/* Country */}
                  <p className={`text-sm ${
                    isHeadquarters ? 'text-primary-foreground/60' : 'text-background/50'
                  }`}>
                    {location.country}
                  </p>

                  {/* Pulse for HQ */}
                  {isHeadquarters && (
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
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
