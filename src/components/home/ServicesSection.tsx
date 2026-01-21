import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Wrench, HeadphonesIcon, Award } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

const services = [
  {
    icon: Package,
    title: "Trading & Exporting",
    shortTitle: "Trading",
    description: "Complete range of Pre-Press, Press, Post-Press, and allied graphic machinery for national and international markets.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Modernization",
    shortTitle: "Modernization",
    description: "Upgrading existing printing units — from baby offset to advanced multi-color presses for higher efficiency.",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    title: "Service & Support",
    shortTitle: "Service",
    description: "Trained service team ensuring continuous technical support, maintenance, and long-term reliability.",
    highlight: false,
  },
  {
    icon: Award,
    title: "Sole Agent – HPM (India)",
    shortTitle: "HPM India",
    description: "Exclusive sole agent in India for HPM paper cutting and packaging machines with expert support.",
    highlight: true,
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('General Inquiry');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openInquiry = (serviceTitle: string) => {
    const serviceMap: Record<string, string> = {
      "Trading & Exporting": "Trading & Exporting",
      "Modernization": "Modernization",
      "Service & Support": "Service & Support",
      "Sole Agent – HPM (India)": "HPM Machines (India)",
    };
    setSelectedService(serviceMap[serviceTitle] || 'General Inquiry');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="px-6 md:px-12 lg:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto mb-16 md:mb-20"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                  <span className="w-8 h-px bg-primary" />
                  Our Services
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  What we do for<br />our clients
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed">
                Four core capabilities that have driven our success for over two decades.
              </p>
            </div>
          </motion.div>

          {/* Services Grid - Card-based layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => openInquiry(service.title)}
                    className={`
                      group relative cursor-pointer p-8 md:p-10 border transition-all duration-500
                      ${service.highlight 
                        ? 'bg-primary/5 border-primary/20 hover:bg-primary/10' 
                        : 'bg-card border-border hover:border-primary/30 hover:bg-secondary/50'
                      }
                    `}
                  >
                    {/* Number badge */}
                    <span className="absolute top-6 right-6 text-xs font-mono text-muted-foreground/40">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
                      ${service.highlight 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className={`
                        font-serif text-xl md:text-2xl mb-3 transition-colors duration-300
                        ${service.highlight ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                      `}>
                        {service.title}
                      </h3>
                      {service.highlight && (
                        <span className="inline-block mb-3 text-[9px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-1">
                          Exclusive
                        </span>
                      )}
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className={`
                      flex items-center gap-2 text-sm font-medium transition-all duration-300
                      ${isHovered ? 'text-primary' : 'text-muted-foreground'}
                    `}>
                      <span>Learn more</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 md:mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <p className="font-serif text-lg md:text-xl text-muted-foreground italic">
                Looking for the right machinery or upgrade guidance?
              </p>
              <button
                onClick={() => {
                  setSelectedService('General Inquiry');
                  setIsModalOpen(true);
                }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <span className="text-sm font-medium">Talk to our team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
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
