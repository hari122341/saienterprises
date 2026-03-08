import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import hpmMachine from '@/assets/hpm-machine.png';
import hpmLogo from '@/assets/hpm-logo.png';
import yearsBadge from '@/assets/24-years-badge.png';
import largestSellingBadge from '@/assets/largest-selling-badge.png';

/* ── Subtle grid texture ── */
const GridTexture = () => (
  <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0v60" fill="none" stroke="hsl(var(--background))" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hg)" />
    </svg>
  </div>
);

/* ── Floating particles ── */
const Particles = () => {
  const dots = useMemo(
    () => Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 1.5 + Math.random() * 2.5,
      d: 16 + Math.random() * 18,
      dl: Math.random() * -18,
    })),
    []
  );
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {dots.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.45, 0.1] }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.dl, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ── Badge data ── */
const badges = [
  { src: null as unknown as string, alt: 'HPM Sole Agent India', isHpm: true },
  { src: null as unknown as string, alt: "India's largest selling paper cutter", isHpm: false },
  { src: null as unknown as string, alt: '24 years of excellence', isHpm: false },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);
  const machineY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const machineRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  // Assign real imports
  badges[0].src = hpmLogo;
  badges[1].src = largestSellingBadge;
  badges[2].src = yearsBadge;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-foreground"
    >
      {/* BG */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <img src={heroImage} alt="Industrial facility" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/75 to-foreground" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-foreground/30" />
      </motion.div>

      <GridTexture />
      <Particles />

      {/* Ambient glows */}
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[400px] rounded-full bg-primary/[0.05] blur-[100px] pointer-events-none z-[3]" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px] pointer-events-none z-[3]" />

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-5 sm:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 pb-6 gap-8 lg:gap-10 xl:gap-16 max-w-[1400px] mx-auto w-full">

          {/* ─── Left: Copy ─── */}
          <div className="flex-[1.15] max-w-2xl text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <span className="w-8 h-px bg-primary" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Sole HPM Agent in India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-background leading-[0.94] tracking-[-0.03em] mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 5.2rem)' }}
            >
              <span className="text-primary italic">#1</span> Paper Cutter
              <br />
              Distribution House
              <br />
              <span className="text-background/50 font-normal text-[0.55em]">in India</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-background/50 text-[13px] sm:text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-7 sm:mb-8"
            >
              24+ years of precision machinery, authentic HPM support, and trusted 
              partnerships across India and East Africa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-8 sm:mb-0"
            >
              <Link
                to="/machinery"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
              >
                Explore Machinery
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-background/20 text-background/70 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-background/[0.08] hover:text-background hover:border-background/30"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>

          {/* ─── Right: Machine + Badges ─── */}
          <motion.div
            className="flex-1 max-w-sm lg:max-w-md xl:max-w-lg flex flex-col items-center gap-6"
            style={{ y: machineY }}
          >
            {/* Machine with glow */}
            <div className="relative">
              <div className="absolute -inset-12 bg-primary/[0.06] rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -inset-6 bg-background/[0.02] rounded-3xl pointer-events-none" />
              <motion.img
                src={hpmMachine}
                alt="HPM Paper Cutting Machine"
                className="relative w-full max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] h-auto"
                style={{ rotate: machineRotate, filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' }}
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* 3 Badges — unified cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-sm"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.alt}
                  className="aspect-[4/3] flex items-center justify-center rounded-xl bg-white/[0.07] border border-white/[0.08] backdrop-blur-sm p-3 sm:p-3.5 hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Micro caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-background/30 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-center"
            >
              HPM Paper Cutter · German Engineered
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-background/30 hover:text-background/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
