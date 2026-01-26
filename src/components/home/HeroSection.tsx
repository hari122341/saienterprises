import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  // Floating decorative elements
  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] bg-background overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </motion.div>

      {/* Animated decorative elements - hidden on mobile for performance */}
      <motion.div 
        className="hidden md:block absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full pointer-events-none"
        style={{ y: floatY1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-1/3 left-1/4 w-32 h-32 border border-primary/5 rounded-full pointer-events-none"
        style={{ y: floatY2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="hidden sm:block absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-20 py-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 sm:mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-background/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-background/10">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/80 font-medium">
                Since 2000 · India & East Africa
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <h1 className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.05] max-w-5xl">
              We believe in
              <motion.span 
                className="block text-primary"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                long-term
              </motion.span>
              relationships.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-background/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-sm sm:max-w-lg md:max-w-xl mb-8 sm:mb-10 md:mb-14"
          >
            Premium graphic machinery suppliers. Trusted by printers across 
            two continents for quality and exceptional service.
          </motion.p>

          {/* Mobile Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex sm:hidden gap-6 mb-8 pb-6 border-b border-background/20"
          >
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-primary">25+</span>
              <span className="text-[10px] uppercase tracking-wider text-background/60">Years</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-background">500+</span>
              <span className="text-[10px] uppercase tracking-wider text-background/60">Clients</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-background">2</span>
              <span className="text-[10px] uppercase tracking-wider text-background/60">Continents</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/machinery"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-sm text-base font-semibold tracking-wide"
            >
              Explore Machinery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-background/10 backdrop-blur-sm border border-background/30 text-background hover:bg-background/20 transition-all duration-300 rounded-sm text-base font-semibold tracking-wide"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 justify-center"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-3 text-background/60 hover:text-background transition-colors group"
          whileHover={{ y: 3 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 sm:h-10 bg-gradient-to-b from-background/60 to-transparent"
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
