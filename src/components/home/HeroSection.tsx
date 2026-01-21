import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const imageY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-background"
    >
      {/* Two-column layout */}
      <div className="min-h-screen grid lg:grid-cols-2">
        
        {/* Left - Content */}
        <motion.div 
          className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-32 lg:py-20"
          style={{ opacity: contentOpacity }}
        >
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                <span className="w-8 h-px bg-primary" />
                Since 2000
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6"
            >
              Your Partner in{' '}
              <span className="text-primary">Printing</span>{' '}
              Excellence
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
            >
              Premium graphic machinery suppliers delivering world-class 
              pre-press, post-press, and corrugation solutions across 
              India and East Africa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Machinery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
            >
              {[
                { value: '24+', label: 'Years' },
                { value: '500+', label: 'Clients' },
                { value: '8+', label: 'Brands' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl md:text-4xl text-foreground">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div 
          className="relative hidden lg:block"
          style={{ y: imageY }}
        >
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Industrial printing machinery" 
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.8) brightness(0.95)' }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-primary/5" />
          </div>
          
          {/* Brand partners overlay card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-8 right-8 p-6 bg-background/95 backdrop-blur-sm border border-border"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Authorized Partners</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground">
              <span>Heidelberg</span>
              <span className="text-muted-foreground">•</span>
              <span>Komori</span>
              <span className="text-muted-foreground">•</span>
              <span>Manroland</span>
              <span className="text-muted-foreground">•</span>
              <span>Bobst</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary">+4 more</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile image - shows below content on mobile */}
      <div className="lg:hidden relative h-64 -mt-8">
        <img 
          src={heroImage} 
          alt="Industrial printing machinery" 
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.8) brightness(0.95)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;