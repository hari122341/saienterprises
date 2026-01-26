import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const WhySaiSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const pillars = [
    { number: '24+', label: 'Years of Trust', description: 'Building relationships since 2000' },
    { number: '500+', label: 'Clients Served', description: 'Across India and East Africa' },
    { number: '100%', label: 'Genuine Products', description: 'Only authentic machinery' },
    { number: '2', label: 'Continents', description: 'India & Kenya operations' },
  ];

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden">
      <motion.div 
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
        style={{ scaleY: lineScale }}
      />

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header - Centered */}
          <ScrollReveal animation="fadeUp" className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Why Us
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Trust built over <span className="text-primary italic">two decades.</span>
            </h2>
          </ScrollReveal>

          {/* Stats Grid - Equal height cards */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-10 sm:mb-14">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.label}
                  className="bg-background p-4 sm:p-6 md:p-8 group hover:bg-secondary/30 transition-colors duration-500 text-center flex flex-col justify-center min-h-[160px] sm:min-h-[180px]"
                  whileHover={{ y: -5 }}
                >
                  <motion.span 
                    className="block font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-2 sm:mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pillar.number}
                  </motion.span>
                  <h4 className="font-medium text-foreground mb-1 text-xs sm:text-sm">{pillar.label}</h4>
                  <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA - Centered */}
          <ScrollReveal animation="fadeUp" delay={0.2} className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-relaxed">
              We don't just sell machinery.<br />
              We build <span className="text-primary">partnerships.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every client relationship begins with understanding your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
            >
              <span className="text-sm font-medium">Start a conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhySaiSection;
