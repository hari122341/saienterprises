import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import hpmMachine from '@/assets/hpm-machine.png';
import hpmLogo from '@/assets/hpm-logo.png';

const stats = [
  { value: '24+', label: 'Years' },
  { value: '500+', label: 'Clients' },
  { value: '#1', label: 'In India' },
  { value: '2', label: 'Continents' },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const machineY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const machineScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] bg-foreground overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foreground to-transparent z-[5] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Upper section: text + machine */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 sm:pt-32 pb-8 gap-4 lg:gap-12 xl:gap-20">
          
          {/* Left: Copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* HPM Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6 sm:mb-8 bg-background/[0.06] backdrop-blur-sm border border-background/10 rounded-full px-4 py-2"
            >
              <img src={hpmLogo} alt="HPM" className="h-5 sm:h-6 w-auto" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-background/70 font-medium">
                Sole Agent in India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] text-background leading-[1.0] tracking-[-0.03em] mb-5 sm:mb-6"
            >
              India's <span className="italic font-normal text-primary">Largest</span>
              <br />
              Paper Cutter
              <br />
              Distributor
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-background/55 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-7 sm:mb-9"
            >
              Premium graphic & corrugation machinery trusted by 500+ printers. 
              24 years of engineering excellence across two continents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-sm text-sm font-semibold tracking-wide uppercase"
              >
                Explore Machinery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-background/20 text-background/80 hover:bg-background/10 hover:text-background transition-all duration-300 rounded-sm text-sm font-semibold tracking-wide uppercase"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Right: Machine Image */}
          <motion.div
            className="flex-1 max-w-lg xl:max-w-xl flex items-center justify-center"
            style={{ y: machineY, scale: machineScale }}
          >
            <motion.img
              src={hpmMachine}
              alt="HPM Paper Cutting Machine"
              className="w-full max-w-[420px] xl:max-w-[500px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative z-10 border-t border-background/10"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between sm:justify-center gap-6 sm:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
              >
                <div className="font-serif text-xl sm:text-2xl md:text-3xl text-background tracking-tight">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-background/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-background/30 hover:text-background/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
