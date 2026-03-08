import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Award, Globe2 } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import hpmLogo from '@/assets/hpm-logo.png';
import yearsBadge from '@/assets/24-years-badge.png';
import largestSellingBadge from '@/assets/largest-selling-badge.png';

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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-transparent to-foreground/30" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-20 py-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Trust strip - top badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-background/8 backdrop-blur-sm px-3 py-1.5 rounded-full border border-background/10">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-background/80 font-medium">
                Sole HPM Agent in India
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-background/8 backdrop-blur-sm px-3 py-1.5 rounded-full border border-background/10">
              <Award className="w-3 h-3 text-primary" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-background/80 font-medium">
                24+ Years of Excellence
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 bg-background/8 backdrop-blur-sm px-3 py-1.5 rounded-full border border-background/10">
              <Globe2 className="w-3 h-3 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-background/80 font-medium">
                India & East Africa
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.02] mx-auto">
              India's largest
              <motion.span 
                className="block text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                paper cutter
              </motion.span>
              distributor.
            </h1>
          </motion.div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-background/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10"
          >
            Sole agents for HPM Paper Cutters. Premium graphic and corrugation 
            machinery trusted by 500+ printers across two continents.
          </motion.p>

          {/* HPM Logo + Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-background/15 mx-auto max-w-2xl"
          >
            <motion.div 
              className="bg-background/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-background/10"
              whileHover={{ scale: 1.05 }}
            >
              <img src={hpmLogo} alt="HPM Paper Cutter" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
            >
              <img src={largestSellingBadge} alt="India's Largest Selling Paper Cutter" className="h-14 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-70" />
            </motion.div>
            <motion.div 
              className="hidden sm:block"
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <img src={yearsBadge} alt="24 Years of Excellence" className="h-16 md:h-20 w-auto object-contain" />
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
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
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
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
