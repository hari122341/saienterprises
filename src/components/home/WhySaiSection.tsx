import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySaiSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const pillars = [
    { number: '24+', label: 'Years of Trust', description: 'Building relationships since 2000' },
    { number: '500+', label: 'Satisfied Clients', description: 'Across India and East Africa' },
    { number: '100%', label: 'Genuine Products', description: 'Only authentic machinery' },
    { number: '2', label: 'Continents', description: 'India & Kenya operations' },
  ];

  const values = [
    'Consultancy before every sale',
    'New & refurbished options',
    'Complete installation support',
    'Ongoing technical maintenance',
    'Long-term partnership approach',
    'Exclusive HPM sole agency',
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 bg-background overflow-hidden">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
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
              Why Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Trust built over<br />
              <span className="text-primary">two decades.</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16 sm:mb-20">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 sm:p-8 md:p-10 group hover:bg-secondary/30 transition-colors duration-500"
              >
                <motion.span 
                  className="block font-serif text-4xl sm:text-5xl md:text-6xl text-primary mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {pillar.number}
                </motion.span>
                <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">{pillar.label}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
          >
            {/* Left - Statement */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-relaxed">
                We don't just sell machinery.<br />
                We build <span className="text-primary">partnerships.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every client relationship begins with understanding your needs. We provide expert guidance, 
                genuine products, and unwavering support at every step of your journey.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
              >
                <span className="text-sm font-medium">Start a conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 py-3 border-b border-border group cursor-default"
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors" />
                  </motion.div>
                  <span className="text-sm text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySaiSection;
