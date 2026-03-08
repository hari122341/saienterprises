import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import hpmMachine from '@/assets/hpm-machine.png';
import hpmLogo from '@/assets/hpm-logo.png';
import yearsBadge from '@/assets/24-years-badge.png';
import largestSellingBadge from '@/assets/largest-selling-badge.png';

/* ── Floating grid dots ── */
const GridOverlay = () => (
  <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-[0.07]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="hsl(var(--background))" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  </div>
);

/* ── Floating particles ── */
const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        dur: 14 + Math.random() * 20,
        delay: Math.random() * -20,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/25"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -80]);
  const machineY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-foreground"
    >
      {/* BG image + overlays */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <img src={heroImage} alt="Industrial printing facility" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/70 to-foreground/95" />
      </motion.div>

      <GridOverlay />
      <Particles />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/6 blur-[100px] pointer-events-none z-[3]" />

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 sm:pt-32 pb-8 gap-6 lg:gap-14 xl:gap-20">

          {/* Left: Copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* HPM pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-3 rounded-full border border-background/15 bg-background/[0.07] backdrop-blur-sm px-4 py-2 mb-6 sm:mb-7"
            >
              <img src={hpmLogo} alt="HPM" className="h-5 sm:h-6 w-auto" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-background/70">
                Sole HPM Agent in India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-background text-[clamp(2.2rem,7.5vw,5.8rem)] leading-[0.96] tracking-[-0.03em] mb-5 sm:mb-6"
            >
              <span className="block text-primary italic font-semibold">#1 in India.</span>
              The Largest Paper Cutter
              <span className="block">Distribution House.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-background/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-9"
            >
              India's largest HPM paper cutter distribution house. 24+ years of trusted partnerships
              delivering world-class graphic and corrugation machinery across two continents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore Machinery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 border border-background/20 bg-background/[0.06] text-background/85 px-7 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-background/12 hover:text-background"
              >
                Request Quote
              </Link>
            </motion.div>

            {/* Trust badges - moved below CTAs, bigger & highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.68 }}
              className="mt-9 sm:mt-10 flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {[
                { src: hpmLogo, alt: 'HPM Sole Agent India', bg: true },
                { src: largestSellingBadge, alt: "India's largest selling paper cutter", bg: false },
                { src: yearsBadge, alt: '24 years of excellence', bg: false },
              ].map((badge, i) => (
                <motion.div
                  key={badge.alt}
                  className={`rounded-lg border border-background/15 backdrop-blur-sm shadow-lg ${badge.bg ? 'bg-white/95 p-2.5 sm:p-3' : 'bg-background/10 p-2 sm:p-2.5'}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.72 + i * 0.1 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Machine + surrounding context */}
          <motion.div
            className="flex-1 max-w-md xl:max-w-lg flex flex-col items-center justify-center gap-6"
            style={{ y: machineY }}
          >
            {/* Glow behind machine */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 bg-primary/8 rounded-full blur-[60px] pointer-events-none" />
              <motion.img
                src={hpmMachine}
                alt="HPM Paper Cutting Machine"
                className="relative w-full max-w-[380px] xl:max-w-[440px] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Machine caption card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-background/[0.08] backdrop-blur-sm border border-background/12 rounded-lg px-5 py-3.5 text-center max-w-xs"
            >
              <p className="font-serif text-background text-sm sm:text-base font-semibold leading-snug">
                HPM Programmable Paper Cutter
              </p>
              <p className="text-background/50 text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-1.5">
                Precision Engineered in Germany
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-background/40 hover:text-background/70 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
