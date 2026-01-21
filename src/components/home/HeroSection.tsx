import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image Layer - Color-graded industrial imagery */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            filter: 'saturate(0.6) brightness(0.75) contrast(1.1)',
          }}
        />
        {/* Blue-tinted overlay to match brand */}
        <div className="absolute inset-0 bg-primary/10" />
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      {/* Hero Content */}
      <div className="relative px-8 md:px-16 lg:px-24 py-32">
        <div className="max-w-3xl">
          {/* Rounded Logo - Small, confident, subtle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-xl border border-primary/20 bg-background/60 backdrop-blur-sm">
              <img 
                src={saiLogo} 
                alt="Sai Enterprises" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Company Name - Caption style */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="caption mb-8"
          >
            Sai Enterprises
          </motion.p>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground mb-8 text-balance"
          >
            We believe in<br />
            long-term relationships.
          </motion.h1>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            Graphic Machinery Suppliers with 24+ years of industry experience.
            Trusted across India and East Africa.
          </motion.p>

          {/* Two Understated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              to="/machinery"
              className="btn-primary group"
            >
              <span>Explore Machinery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="btn-quiet group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-24"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
