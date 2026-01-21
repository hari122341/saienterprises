import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Building2, Globe2, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const locations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      region: companyInfo.locations.headquarters.state,
      country: 'India',
      type: 'Headquarters',
      description: 'Our central hub for operations, service, and support across India.',
      isHQ: true,
    },
    { 
      city: 'New Delhi', 
      region: 'Delhi', 
      country: 'India', 
      type: 'Regional Office',
      description: 'Serving North India with dedicated sales and service teams.',
      isHQ: false,
    },
    { 
      city: 'Pune', 
      region: 'Maharashtra', 
      country: 'India', 
      type: 'Branch Office',
      description: 'Supporting western region clients with local expertise.',
      isHQ: false,
    },
    { 
      city: 'Vijayawada', 
      region: 'Andhra Pradesh', 
      country: 'India', 
      type: 'Branch Office',
      description: 'Coastal region coverage with rapid response capability.',
      isHQ: false,
    },
    { 
      city: companyInfo.locations.overseas.city, 
      region: companyInfo.locations.overseas.country,
      country: 'East Africa',
      type: 'International Office',
      description: 'Expanding our reach across the African continent.',
      isHQ: false,
    },
  ];

  const stats = [
    { value: '2', label: 'Continents', icon: Globe2 },
    { value: '5', label: 'Offices', icon: Building2 },
    { value: '2000+', label: 'Clients Served', icon: ArrowUpRight },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Reach
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Two continents. One commitment.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              From our roots in Hyderabad, we've grown to serve printers across India and East Africa with the same dedication to quality.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative bg-card border border-border p-6 md:p-8 text-center group hover:border-primary/30 transition-colors duration-300"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 opacity-60" />
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* HQ Card - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-primary text-primary-foreground p-8 md:p-10 relative overflow-hidden group"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest bg-primary-foreground/10 px-3 py-1.5">
                    Headquarters
                  </span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl mb-2">{locations[0].city}</h3>
                <p className="text-primary-foreground/60 text-sm mb-4">
                  {locations[0].region}, {locations[0].country}
                </p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mt-auto">
                  {locations[0].description}
                </p>

                {/* Animated accent */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary-foreground/20"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Other Location Cards */}
            {locations.slice(1).map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground bg-secondary px-2 py-1">
                    {location.type}
                  </span>
                </div>

                <h4 className="font-serif text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {location.city}
                </h4>
                <p className="text-muted-foreground text-xs mb-3">
                  {location.region}, {location.country}
                </p>
                <p className="text-muted-foreground/80 text-sm leading-relaxed">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Connection line visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">India</span>
            </div>
            <motion.div 
              className="w-24 md:w-32 h-px bg-gradient-to-r from-primary via-primary/50 to-primary"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">East Africa</span>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
