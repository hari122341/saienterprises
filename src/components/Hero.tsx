import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(0 0% 100%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(0 0% 100%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/95" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        {/* Decorative circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary-foreground/20"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/20"
        />
      </div>

      {/* Content */}
      <div className="relative container-wide text-center z-10 pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src={saiLogo}
            alt="Sai Enterprises"
            className="h-24 md:h-32 lg:h-40 mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight"
        >
          We Believe in
          <span className="block mt-2 text-accent">Long-Term Relationships</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-4"
        >
          24+ Years of Excellence in Graphic & Corrugation Machinery
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-12"
        >
          Your trusted partner for Pre-Press, Press, Post-Press & Corrugation solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Get Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a href="#trust" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
