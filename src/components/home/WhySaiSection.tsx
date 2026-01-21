import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const reasons = [
  {
    id: '01',
    title: '24+ Years of Industry Expertise',
    description: 'Established trust and deep knowledge in graphic machinery since 2000. Our experience speaks through every successful installation.',
    stat: '24+',
    statLabel: 'Years',
  },
  {
    id: '02',
    title: 'Consultancy-First Approach',
    description: 'We understand your needs before recommending machinery. Every solution is tailored to your production requirements.',
    stat: '100%',
    statLabel: 'Custom Solutions',
  },
  {
    id: '03',
    title: 'New & Refurbished Options',
    description: 'Quality machinery at various price points. Whether you need brand new or certified refurbished, we deliver value.',
    stat: '2x',
    statLabel: 'Flexibility',
  },
  {
    id: '04',
    title: 'Complete Installation Support',
    description: 'From delivery to commissioning, our technical team ensures your machinery is production-ready.',
    stat: '500+',
    statLabel: 'Installations',
  },
  {
    id: '05',
    title: 'Long-Term Partnerships',
    description: 'We grow with our clients, building relationships that span decades, not transactions.',
    stat: '∞',
    statLabel: 'Commitment',
  },
];

const WhySaiSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-secondary/30 py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">
              Why Choose Us
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
              Your trusted partner in print excellence.
            </h2>

            <div className="w-16 h-1 bg-primary mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed">
              Every partnership begins with trust. Here's why leading printers choose Sai Enterprises.
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-1">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 md:py-8 flex items-start justify-between gap-6 text-left group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      {/* Number */}
                      <span className="text-xs font-mono text-muted-foreground/50 pt-1">
                        {reason.id}
                      </span>
                      
                      {/* Title */}
                      <h4 
                        className={`
                          font-serif text-xl md:text-2xl lg:text-3xl transition-colors duration-300
                          ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                        `}
                      >
                        {reason.title}
                      </h4>
                    </div>

                    {/* Toggle icon */}
                    <div className={`
                      w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300
                      ${openIndex === index 
                        ? 'bg-primary border-primary text-primary-foreground rotate-0' 
                        : 'border-border text-muted-foreground group-hover:border-primary group-hover:text-primary'
                      }
                    `}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Content */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-10 md:pl-[72px] pr-16 md:pr-20">
                          <div className="grid md:grid-cols-3 gap-8">
                            {/* Description */}
                            <div className="md:col-span-2">
                              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                {reason.description}
                              </p>
                            </div>

                            {/* Stat highlight */}
                            <div className="flex md:justify-end items-start">
                              <div className="text-right">
                                <div className="font-serif text-4xl md:text-5xl text-primary mb-1">
                                  {reason.stat}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                  {reason.statLabel}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySaiSection;
