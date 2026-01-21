import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const imageOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const contentY = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-foreground overflow-hidden"
    >
      {/* Full background image with overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.8)' }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />

      {/* Main content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-32"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          {/* Top row - Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium">
                Trusted Since 2000
              </span>
            </div>
          </motion.div>

          {/* Headline - Large and impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background/90 leading-[0.95]">
              Your Partner in
            </span>
            <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary leading-[0.95] mt-2">
              Printing Excellence
            </span>
          </motion.h1>

          {/* Description + CTAs row */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-background/60 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
                Premium graphic machinery suppliers delivering world-class 
                pre-press, post-press, and corrugation solutions to printers 
                across India and East Africa.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/machinery"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <span className="text-sm font-semibold">Explore Machinery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-background/20 text-background hover:bg-background/10 transition-all duration-300"
                >
                  <span className="text-sm font-semibold">Get in Touch</span>
                </Link>
              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 md:gap-6 lg:justify-end"
            >
              {[
                { icon: Calendar, value: '24+', label: 'Years Experience' },
                { icon: Users, value: '500+', label: 'Happy Clients' },
                { icon: MapPin, value: '2', label: 'Continents' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="flex-1 max-w-[140px] p-4 md:p-5 bg-background/5 backdrop-blur-sm border border-background/10"
                >
                  <stat.icon className="w-4 h-4 text-primary mb-3" />
                  <div className="font-serif text-2xl md:text-3xl text-background">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-background/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom brand strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-background/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-wider text-background/40">Authorized Partners</span>
                <div className="hidden md:flex items-center gap-4 text-xs text-background/60">
                  <span>Heidelberg</span>
                  <span className="w-1 h-1 rounded-full bg-background/30" />
                  <span>Komori</span>
                  <span className="w-1 h-1 rounded-full bg-background/30" />
                  <span>Manroland</span>
                  <span className="w-1 h-1 rounded-full bg-background/30" />
                  <span>Bobst</span>
                  <span className="w-1 h-1 rounded-full bg-background/30" />
                  <span className="text-primary">+4 more</span>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-background/50 hover:text-background transition-colors"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[10px] uppercase tracking-wider hidden sm:inline">Scroll to explore</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;