import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { companyInfo } from '@/data/products';
import ScrollReveal from '@/components/ScrollReveal';

const GlobalPresenceSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const locations = [
    {
      type: 'Headquarters',
      city: companyInfo.locations.headquarters.city,
      region: `${companyInfo.locations.headquarters.state}, ${companyInfo.locations.headquarters.country}`,
      isPrimary: true,
    },
    {
      type: 'International',
      city: companyInfo.locations.overseas.city,
      region: companyInfo.locations.overseas.country,
      isPrimary: false,
    },
  ];

  const branches = ['New Delhi', 'Pune', 'Vijayawada'];

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 bg-foreground overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]"
          animate={{ 
            x: [100, 0, 100],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"
          animate={{ 
            x: [-50, 50, -50],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header - Centered */}
          <ScrollReveal animation="fadeUp" className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Global Presence
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-background leading-tight">
              Where we <span className="text-primary italic">operate.</span>
            </h2>
          </ScrollReveal>

          {/* Main Locations Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {locations.map((location, index) => (
              <ScrollReveal key={location.city} animation={index === 0 ? 'slideLeft' : 'slideRight'} delay={0.1 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`relative group cursor-default overflow-hidden ${
                    location.isPrimary 
                      ? 'bg-primary' 
                      : 'bg-background/5 border border-background/10'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      location.isPrimary 
                        ? 'bg-gradient-to-br from-white/10 to-transparent' 
                        : 'bg-gradient-to-br from-primary/10 to-transparent'
                    }`}
                  />

                  <div className="relative p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-[9px] uppercase tracking-[0.2em] font-medium ${
                        location.isPrimary ? 'text-primary-foreground/60' : 'text-background/40'
                      }`}>
                        {location.type}
                      </span>
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MapPin className={`w-4 h-4 ${
                          location.isPrimary ? 'text-primary-foreground/40' : 'text-primary/40'
                        }`} />
                      </motion.div>
                    </div>
                    
                    <h3 className={`font-serif text-2xl sm:text-3xl md:text-4xl mb-1 ${
                      location.isPrimary ? 'text-primary-foreground' : 'text-background'
                    }`}>
                      {location.city}
                    </h3>
                    <p className={`text-xs sm:text-sm ${
                      location.isPrimary ? 'text-primary-foreground/60' : 'text-background/50'
                    }`}>
                      {location.region}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Branch Offices */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-background/30">
                Branch Offices
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {branches.map((city) => (
                  <motion.span 
                    key={city}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    className="text-background/60 text-sm px-5 py-2 bg-background/5 rounded-full border border-background/10 cursor-default transition-all"
                  >
                    {city}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
