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
      className="relative h-screen min-h-[700px] bg-background overflow-hidden"
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

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full pointer-events-none"
        style={{ y: floatY1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-primary/5 rounded-full pointer-events-none"
        style={{ y: floatY2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

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
            <div className="inline-flex items-center gap-3 bg-background/5 backdrop-blur-sm px-4 py-2 rounded-full border border-background/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-background/80 font-medium">
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
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.05] max-w-5xl">
              We believe in
              <motion.span 
                className="block text-primary"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="italic">long-term</span>
              </motion.span>
              relationships.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-background/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-10 md:mb-14"
          >
            Premium graphic machinery suppliers. Trusted by printers across 
            two continents for quality and exceptional service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/machinery"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Explore Machinery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-background/10 backdrop-blur-sm border border-background/30 text-background hover:bg-background/20 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Contact Us</span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-12 md:mt-16 pt-8 border-t border-background/10"
          >
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '24+', label: 'Years Experience' },
              { value: '5', label: 'Office Locations' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
              >
                <span className="block font-serif text-2xl sm:text-3xl text-background">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-background/50">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
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
            className="w-px h-10 bg-gradient-to-b from-background/60 to-transparent"
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
