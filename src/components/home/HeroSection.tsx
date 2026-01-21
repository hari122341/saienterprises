import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 800], [0, 200]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);

  const stats = [
    { value: '24+', label: 'Years' },
    { value: '500+', label: 'Clients' },
    { value: '2', label: 'Continents' },
    { value: '8+', label: 'Brands' },
  ];

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background Image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-[120%] object-cover"
          style={{ 
            filter: 'saturate(0.6) brightness(0.9) contrast(1.05)',
          }}
        />
        {/* Primary color overlay for brand consistency */}
        <div className="absolute inset-0 bg-primary/5" />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-12 lg:px-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Micro label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">
                Since 2000 • India & East Africa
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-8"
            >
              We believe in<br />
              <span className="text-primary">long-term</span><br />
              relationships.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              Premium graphic machinery suppliers. Trusted by printers for 
              quality pre-press, post-press, and corrugation solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <span className="text-sm font-medium">Explore Machinery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span className="text-sm font-medium">Get in Touch</span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl md:text-4xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar with brand partners hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border/30 bg-background/80 backdrop-blur-sm"
      >
        <div className="px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Partner names */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Trusted Brands:</span>
              <span className="hidden sm:inline">Heidelberg • Komori • Manroland • Bobst • HPM</span>
              <span className="sm:hidden">Heidelberg • Komori • +6</span>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span className="text-[10px] uppercase tracking-wider hidden sm:inline">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
