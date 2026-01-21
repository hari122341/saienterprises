import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Package, Wrench, HeadphonesIcon, Award, Sparkles } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

const services = [
  {
    icon: Package,
    title: "Trading & Export",
    description: "Complete range of graphic machinery for national and international markets with seamless logistics.",
    stats: "50+ Countries",
  },
  {
    icon: Wrench,
    title: "Modernization",
    description: "Upgrading existing units to advanced multi-color presses with cutting-edge technology.",
    stats: "200+ Upgrades",
  },
  {
    icon: HeadphonesIcon,
    title: "Service & Support",
    description: "Continuous technical support, maintenance, and long-term reliability assurance.",
    stats: "24/7 Support",
  },
  {
    icon: Award,
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

  const decoY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decoRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <>
      <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-background overflow-hidden">
        {/* Premium decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary"
          style={{ y: decoY }}
        />
        <motion.div 
          className="absolute bottom-40 left-32 w-40 h-40 border border-primary/10 rounded-full"
          style={{ y: decoY, rotate: decoRotate }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
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
              className="mb-12 sm:mb-16"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
                <div>
                  <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                    <motion.span 
                      className="w-8 h-px bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                    />
                    Services
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                    Four pillars of<br />
                    <span className="text-primary italic">excellence.</span>
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed lg:text-right">
                  Core capabilities that have driven success for over two decades.
                </p>
              </div>
            </motion.div>

            {/* Mobile Horizontal Scroll */}
            <div 
              ref={scrollRef}
              className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                {services.map((service, index) => {
                  const Icon = service.icon;
                  
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => {
                        setSelectedService(service.title);
                        setIsModalOpen(true);
                      }}
                      className={`flex-shrink-0 w-[280px] cursor-pointer overflow-hidden transition-all duration-500 ${
                        service.highlight 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-card border border-border'
                      }`}
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="relative p-6">
                        {/* Background number */}
                        <span className={`absolute top-4 right-4 text-[80px] font-serif leading-none pointer-events-none ${
                          service.highlight ? 'text-primary-foreground/5' : 'text-foreground/[0.03]'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Icon */}
                        <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                          service.highlight ? 'bg-primary-foreground/10' : 'bg-primary/10'
                        }`}>
                          <Icon className={`w-5 h-5 ${service.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                          {service.highlight && (
                            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary-foreground/60" />
                          )}
                        </div>

                        {/* Content */}
                        <h3 className={`font-serif text-xl sm:text-2xl mb-3 ${
                          service.highlight ? 'text-primary-foreground' : 'text-foreground'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-sm leading-relaxed mb-4 ${
                          service.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {service.description}
                        </p>

                        {/* Stats badge */}
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
                  );
                })}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
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
                    <div className="relative p-8 sm:p-10">
                      {/* Background number */}
                      <span className={`absolute top-6 right-8 text-[100px] sm:text-[120px] font-serif leading-none pointer-events-none transition-all duration-500 ${
                        service.highlight 
                          ? 'text-primary-foreground/5' 
                          : isHovered ? 'text-primary/10' : 'text-foreground/[0.02]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <motion.div 
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                          service.highlight ? 'bg-primary-foreground/10' : 'bg-primary/10'
                        }`}
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`w-7 h-7 ${service.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                        {service.highlight && (
                          <motion.div
                            className="absolute -top-1 -right-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Sparkles className="w-4 h-4 text-primary-foreground/60" />
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Content */}
                      <div className="relative">
                        {service.highlight && (
                          <span className="inline-block mb-3 text-[9px] uppercase tracking-[0.2em] bg-primary-foreground/10 px-3 py-1.5 rounded-full">
                            Exclusive Partnership
                          </span>
                        )}
                        
                        <h3 className={`font-serif text-2xl sm:text-3xl mb-4 ${
                          service.highlight ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
                        } transition-colors duration-300`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-base leading-relaxed mb-6 ${
                          service.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {service.description}
                        </p>

                        {/* Stats badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                          service.highlight 
                            ? 'bg-primary-foreground/10 text-primary-foreground' 
                            : 'bg-secondary text-foreground'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {service.stats}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        className={`absolute bottom-8 right-8 flex items-center gap-2 text-sm font-medium ${
                          service.highlight ? 'text-primary-foreground' : 'text-primary'
                        }`}
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                      >
                        <span className="hidden sm:inline">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>

                      {/* Hover accent line */}
                      {!service.highlight && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? '100%' : 0 }}
                          transition={{ duration: 0.4 }}
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
