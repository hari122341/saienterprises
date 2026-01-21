import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
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

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative h-screen min-h-[600px] bg-background overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/30" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <motion.div 
                className="w-8 sm:w-12 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary font-medium">
                Since 2000 · India & East Africa
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-8"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background leading-[1.1] max-w-4xl">
              We believe in
              <motion.span 
                className="block text-primary italic"
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
            className="text-background/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 md:mb-12"
          >
            Premium graphic machinery suppliers. Trusted by printers across 
            two continents for quality and service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/machinery"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Explore Machinery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-background/40 text-background hover:bg-background/10 hover:border-background/60 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="px-5 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between border-t border-background/15 pt-6 sm:pt-8">
            {/* Stats */}
            <div className="hidden sm:flex items-center gap-6 md:gap-12">
              {[
                { value: '24+', label: 'Years' },
                { value: '500+', label: 'Clients' },
                { value: '8+', label: 'Brands' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-xl md:text-2xl text-background">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-background/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 sm:gap-3 text-background/60 hover:text-background transition-colors ml-auto group"
              whileHover={{ y: 3 }}
            >
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
