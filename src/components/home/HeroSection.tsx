import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative h-screen bg-background overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <img 
          src={heroImage} 
          alt="Industrial printing machinery" 
          className="w-full h-full object-cover"
        />
        {/* Sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/20" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          {/* Micro Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Since 2000 · India & East Africa
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.1] max-w-4xl">
              We believe in
              <span className="block text-primary italic">long-term</span>
              relationships.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-background/60 text-lg md:text-xl leading-relaxed max-w-xl mb-12"
          >
            Premium graphic machinery suppliers. Trusted by printers across 
            two continents for quality and service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/machinery"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Explore Machinery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-background/30 text-background hover:bg-background/10 hover:border-background/50 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
          <div className="flex items-center justify-between border-t border-background/10 pt-8">
            {/* Stats */}
            <div className="hidden md:flex items-center gap-12">
              {[
                { value: '24+', label: 'Years' },
                { value: '500+', label: 'Clients' },
                { value: '8+', label: 'Brands' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-2xl text-background">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-background/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 text-background/50 hover:text-background transition-colors ml-auto"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;