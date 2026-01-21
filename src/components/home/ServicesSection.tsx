import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Package, Wrench, HeadphonesIcon, Award } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

const services = [
  {
    icon: Package,
    title: "Trading & Export",
    description: "Complete range of graphic machinery for national and international markets.",
  },
  {
    icon: Wrench,
    title: "Modernization",
    description: "Upgrading existing units to advanced multi-color presses.",
  },
  {
    icon: HeadphonesIcon,
    title: "Service & Support",
    description: "Continuous technical support and long-term reliability.",
  },
  {
    icon: Award,
    title: "HPM Sole Agent",
    description: "Exclusive agent in India for HPM packaging machines.",
    highlight: true,
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Inquiry');
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const decoY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <>
      <section ref={containerRef} className="relative py-20 sm:py-28 md:py-36 bg-background overflow-hidden">
        {/* Parallax decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-primary/10 pointer-events-none"
          style={{ y: decoY }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-primary/5 pointer-events-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        />

        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-16 sm:mb-20"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <motion.span 
                  className="w-8 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                />
                Services
              </span>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                  Four pillars of<br />
                  <span className="text-primary">excellence.</span>
                </h2>
                <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
                  Core capabilities driving success for over two decades.
                </p>
              </div>
            </motion.div>

            {/* Horizontal Scrolling Services */}
            <div className="relative">
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 scrollbar-hide">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -8 }}
                      onClick={() => {
                        setSelectedService(service.title);
                        setIsModalOpen(true);
                      }}
                      className={`group relative flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer transition-all duration-500 ${
                        service.highlight ? 'bg-primary text-primary-foreground' : 'bg-card border border-border hover:border-primary/30'
                      }`}
                    >
                      <div className="p-6 sm:p-8">
                        {/* Number */}
                        <span className={`text-6xl sm:text-7xl font-serif opacity-10 absolute top-4 right-6 ${
                          service.highlight ? 'text-primary-foreground' : 'text-foreground'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Icon */}
                        <motion.div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                            service.highlight 
                              ? 'bg-primary-foreground/10' 
                              : 'bg-primary/10'
                          }`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <Icon className={`w-5 h-5 ${service.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                        </motion.div>

                        {/* Content */}
                        <h3 className={`font-serif text-xl sm:text-2xl mb-3 ${
                          service.highlight ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
                        } transition-colors`}>
                          {service.title}
                        </h3>
                        
                        {service.highlight && (
                          <span className="inline-block mb-3 text-[9px] uppercase tracking-[0.2em] bg-primary-foreground/10 px-2 py-1">
                            Exclusive
                          </span>
                        )}
                        
                        <p className={`text-sm leading-relaxed mb-6 ${
                          service.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div className={`flex items-center gap-2 text-sm font-medium ${
                          service.highlight ? 'text-primary-foreground' : 'text-primary'
                        }`}>
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Bottom line */}
                      {!service.highlight && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Scroll hint */}
              <div className="flex justify-center mt-8 lg:hidden">
                <motion.div 
                  className="flex items-center gap-2 text-muted-foreground text-xs"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>Swipe to explore</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              </div>
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
