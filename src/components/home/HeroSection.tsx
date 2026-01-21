import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 800], [0, 200]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section 
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
            filter: 'saturate(0.5) brightness(0.85) contrast(1.1)',
          }}
        />
        {/* Brand-colored overlay */}
        <div className="absolute inset-0 bg-primary/10" />
      </motion.div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left - Main Content */}
            <div className="lg:col-span-7">
              {/* Logo + Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-background shadow-lg">
                  <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                    Est. 2000
                  </span>
                  <h2 className="font-serif text-xl text-foreground">Sai Enterprises</h2>
                </div>
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
                className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10"
              >
                Graphic Machinery Suppliers with 24+ years of industry experience. 
                Trusted by printers across India and East Africa.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/machinery"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span className="text-sm font-medium">Explore Machinery</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="text-sm font-medium">Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border p-8 md:p-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
                  Trusted By Industry Leaders
                </h3>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '24+', label: 'Years Experience' },
                    { value: '500+', label: 'Clients Served' },
                    { value: '2', label: 'Continents' },
                    { value: '8+', label: 'Brand Partners' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-center p-4 bg-secondary/50"
                    >
                      <div className="font-serif text-2xl md:text-3xl text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Brand partners hint */}
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Brand Partners</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-foreground/70">
                    <span>Heidelberg</span>
                    <span className="text-muted-foreground/30">•</span>
                    <span>Komori</span>
                    <span className="text-muted-foreground/30">•</span>
                    <span>Manroland</span>
                    <span className="text-muted-foreground/30">•</span>
                    <span className="text-primary">+5 more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
