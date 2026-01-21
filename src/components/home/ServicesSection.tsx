import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

const services = [
  {
    title: "Trading & Exporting",
    description: "We supply a complete range of Pre-Press, Press, Post-Press, and allied graphic machinery, serving both national and international print & publishing industries with reliable sourcing and guidance.",
    highlight: false,
  },
  {
    title: "Modernization",
    description: "We help modernize existing printing units — from baby offset machines to advanced multi-color presses, enabling higher efficiency, consistency, and production value.",
    highlight: false,
  },
  {
    title: "Service & Support",
    description: "Our trained and experienced service team ensures continuous technical support, maintenance, and long-term reliability for every machine we supply.",
    highlight: false,
  },
  {
    title: "Sole Agent – HPM (India)",
    description: "We are the exclusive sole agent in India for HPM paper cutting and packaging machines, offering authentic equipment backed by expert support.",
    highlight: true,
    modalService: "HPM Machines (India)",
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('General Inquiry');

  const openInquiry = (serviceTitle: string) => {
    // Map service titles to modal options
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
      <section className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 md:mb-28"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Our Services
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl">
              What we do for our clients
            </h2>
          </motion.div>

          {/* Services Grid - Asymmetric Editorial Layout */}
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Number */}
                <div className={`md:col-span-1 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <span className="text-xs text-muted-foreground/50 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <div className={`md:col-span-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <button
                    onClick={() => openInquiry(service.title)}
                    className={`text-left font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                      service.highlight 
                        ? 'text-primary hover:text-primary/80' 
                        : 'text-foreground group-hover:text-primary'
                    }`}
                  >
                    {service.title}
                  </button>
                  {service.highlight && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-[0.2em] text-primary/70 border border-primary/20 px-3 py-1">
                      Exclusive
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-1 md:text-left' : ''}`}>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                  <button
                    onClick={() => openInquiry(service.title)}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group/btn"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Spacer */}
                <div className="md:col-span-1" />
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 md:mt-32 h-px bg-border origin-left"
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
              Looking for the right machinery or upgrade guidance?
            </p>
            <button
              onClick={() => {
                setSelectedService('General Inquiry');
                setIsModalOpen(true);
              }}
              className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-base font-medium">Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceType={selectedService}
      />
    </>
  );
};

export default ServicesSection;
