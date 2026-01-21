import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

const services = [
  {
    title: "Trading & Export",
    description: "Complete range of graphic machinery for national and international markets.",
    stats: "50+ Countries",
  },
  {
    title: "Modernization",
    description: "Upgrading existing units to advanced multi-color presses.",
    stats: "200+ Upgrades",
  },
  {
    title: "Service & Support",
    description: "Continuous technical support, maintenance, and reliability assurance.",
    stats: "24/7 Support",
  },
  {
    title: "HPM Sole Agent",
    description: "Exclusive authorized agent in India for HPM premium packaging machines.",
    stats: "Exclusive",
    highlight: true,
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Inquiry');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <>
      <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-background overflow-hidden">
        {/* Subtle decorative line */}
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none"
          style={{ y: lineY }}
        />

        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Header - Left aligned */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12 sm:mb-16 max-w-2xl"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <motion.span 
                  className="w-8 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                />
                Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4">
                What we <span className="text-primary italic">do.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Core capabilities driving success for over two decades.
              </p>
            </motion.div>

            {/* Mobile Horizontal Scroll */}
            <div 
              ref={scrollRef}
              className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedService(service.title);
                      setIsModalOpen(true);
                    }}
                    className={`flex-shrink-0 w-[260px] cursor-pointer transition-all duration-500 ${
                      service.highlight 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card border border-border'
                    }`}
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="relative p-5">
                      {/* Number */}
                      <span className={`text-[10px] uppercase tracking-[0.15em] mb-4 block ${
                        service.highlight ? 'text-primary-foreground/50' : 'text-muted-foreground'
                      }`}>
                        0{index + 1}
                      </span>

                      <h3 className={`font-serif text-xl mb-2 ${
                        service.highlight ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${
                        service.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {service.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        service.highlight 
                          ? 'bg-primary-foreground/10 text-primary-foreground' 
                          : 'bg-secondary text-foreground'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                        {service.stats}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => {
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setSelectedService(service.title);
                      setIsModalOpen(true);
                    }}
                    className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ${
                      service.highlight 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card border border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="relative p-6">
                      {/* Number */}
                      <span className={`text-[10px] uppercase tracking-[0.15em] mb-6 block ${
                        service.highlight ? 'text-primary-foreground/50' : 'text-muted-foreground'
                      }`}>
                        0{index + 1}
                      </span>

                      {service.highlight && (
                        <motion.div className="absolute top-4 right-4">
                          <Sparkles className="w-4 h-4 text-primary-foreground/40" />
                        </motion.div>
                      )}

                      <h3 className={`font-serif text-xl mb-3 ${
                        service.highlight ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
                      } transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 ${
                        service.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                          service.highlight 
                            ? 'bg-primary-foreground/10 text-primary-foreground' 
                            : 'bg-secondary text-foreground'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {service.stats}
                        </div>
                        
                        <motion.div 
                          className={`${service.highlight ? 'text-primary-foreground' : 'text-primary'}`}
                          animate={isHovered ? { x: 3 } : { x: 0 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Hover accent line */}
                      {!service.highlight && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceType={selectedService}
      />
    </>
  );
};

export default ServicesSection;
