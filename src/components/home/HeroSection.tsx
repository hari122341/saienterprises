import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const imageY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Background Image - Right side only */}
      <motion.div 
        className="absolute top-0 right-0 w-full lg:w-3/5 h-full"
        style={{ y: imageY }}
      >
        <div className="relative w-full h-full">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.7) brightness(0.95)' }}
          />
          {/* Gradient fade to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Since 2000 · India & East Africa
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-foreground leading-[1.1] mb-8"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                We believe in
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mt-2">
                long-term
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                relationships.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-lg"
            >
              Premium graphic machinery suppliers. Trusted by printers 
              across two continents for quality and service.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <span className="text-sm font-medium">Explore Machinery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium">Contact Us</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats bar - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex items-center justify-between">
            {/* Stats */}
            <div className="flex items-center gap-8 md:gap-14">
              {[
                { value: '24+', label: 'Years' },
                { value: '500+', label: 'Clients' },
                { value: '8+', label: 'Brands' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-2xl md:text-3xl text-foreground">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint */}
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;