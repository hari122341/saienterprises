import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import hpmLogo from '@/assets/hpm-logo.png';
import yearsBadge from '@/assets/24-years-badge.png';
import largestSellingBadge from '@/assets/largest-selling-badge.png';

const trustStats = [
  { value: '24+', label: 'Years of Experience' },
  { value: '500+', label: 'Installations' },
  { value: '#1', label: 'Largest Paper Cutter Seller' },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -80]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-foreground"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <img src={heroImage} alt="HPM industrial paper cutting machinery" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/65 to-foreground" />
      </motion.div>

      <motion.div
        className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col justify-center px-5 sm:px-8 md:px-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto w-full max-w-6xl text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="inline-flex items-center gap-3 rounded-full border border-background/20 bg-background/10 px-4 sm:px-5 py-2 backdrop-blur-sm"
          >
            <img src={hpmLogo} alt="HPM logo" className="h-5 sm:h-6 w-auto" />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-background/80">
              Sole HPM Agent in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8 font-serif text-background text-[clamp(2.4rem,8.5vw,6.4rem)] leading-[0.95] tracking-[-0.03em]"
          >
            India&apos;s Largest
            <span className="block text-primary italic font-semibold">HPM Paper Cutter</span>
            Distribution House
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mx-auto mt-5 sm:mt-6 max-w-3xl text-background/75 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Trusted by print leaders for 24+ years with precision machinery, authentic support,
            and long-term partnerships across India and East Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/machinery"
              className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-primary/90"
            >
              Explore Machinery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 border border-background/25 bg-background/10 text-background px-7 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-background/15"
            >
              Request Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 border border-background/15"
          >
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="bg-background/[0.06] px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r last:border-b-0 sm:last:border-r-0 border-background/15"
              >
                <p className="font-serif text-background text-2xl sm:text-3xl leading-none">{item.value}</p>
                <p className="mt-2 text-background/60 text-[10px] sm:text-xs uppercase tracking-[0.16em]">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.82 }}
            className="mt-7 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6"
          >
            <img
              src={largestSellingBadge}
              alt="India's largest selling paper cutter badge"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              loading="lazy"
            />
            <img
              src={yearsBadge}
              alt="24 years experience badge"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-background/55 hover:text-background transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
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
