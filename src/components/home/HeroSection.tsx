import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState<'machinery' | 'contact' | null>(null);
  
  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  
  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 800], [0, 300]);
  const imageScale = useTransform(scrollY, [0, 800], [1.1, 1.3]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02);
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-end overflow-hidden bg-foreground"
      onMouseMove={handleMouseMove}
    >
      {/* Dramatic background with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <motion.img 
          src={heroImage} 
          alt="" 
          className="w-full h-[130%] object-cover"
          style={{ 
            filter: 'grayscale(0.4) brightness(0.4) contrast(1.2)',
            x: springX,
            y: springY,
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-foreground/40" />
      
      {/* Animated grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Logo - Top left, small and confident */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-6 md:left-12 lg:left-16 z-20"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-background/20 bg-background/10 backdrop-blur-sm">
          <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top line - caption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-background/50 font-medium">
              Est. 2000 · Hyderabad
            </span>
          </motion.div>

          {/* Giant headline - split layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">
            {/* Left - Main headline */}
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-background leading-[0.9] tracking-tight"
              >
                We believe<br />
                in <span className="text-primary italic">long-term</span><br />
                relationships.
              </motion.h1>
            </div>

            {/* Right - Info card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pl-12"
            >
              <div className="flex flex-col gap-8">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pb-6 border-b border-background/10">
                  {[
                    { value: '24+', label: 'Years' },
                    { value: '500+', label: 'Clients' },
                    { value: '2', label: 'Continents' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-serif text-2xl md:text-3xl text-background mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-background/40">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-background/60 text-sm md:text-base leading-relaxed max-w-sm">
                  Graphic machinery suppliers trusted by printers across India and East Africa. 
                  From pre-press to post-press, we deliver excellence.
                </p>

                {/* CTAs - Modern button style */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/machinery"
                    onMouseEnter={() => setIsHovered('machinery')}
                    onMouseLeave={() => setIsHovered(null)}
                    className="group relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ 
                        backgroundColor: isHovered === 'machinery' ? 'hsl(var(--primary))' : 'transparent' 
                      }}
                      className="flex items-center gap-3 px-6 py-4 border border-background/20 hover:border-primary transition-colors"
                    >
                      <span className="text-sm font-medium text-background">
                        Explore Machinery
                      </span>
                      <ArrowRight className="w-4 h-4 text-background transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  </Link>
                  
                  <Link
                    to="/contact"
                    onMouseEnter={() => setIsHovered('contact')}
                    onMouseLeave={() => setIsHovered(null)}
                    className="group"
                  >
                    <div className="flex items-center gap-3 px-6 py-4 text-background/60 hover:text-background transition-colors">
                      <span className="text-sm">Contact</span>
                      <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 md:mt-16 pt-6 border-t border-background/10 flex items-center justify-between"
          >
            {/* Scroll indicator */}
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <div className="w-px h-8 bg-gradient-to-b from-background/40 to-transparent" />
              </motion.div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-background/30">
                Scroll to explore
              </span>
            </div>

            {/* Brand partners hint */}
            <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-background/30">
              <span>Heidelberg</span>
              <span className="w-1 h-1 rounded-full bg-background/20" />
              <span>Komori</span>
              <span className="w-1 h-1 rounded-full bg-background/20" />
              <span>Manroland</span>
              <span className="w-1 h-1 rounded-full bg-background/20" />
              <span className="text-primary">+5 more</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.2, height: 200 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-px bg-gradient-to-b from-transparent via-background to-transparent"
        />
      </div>
    </section>
  );
};

export default HeroSection;
