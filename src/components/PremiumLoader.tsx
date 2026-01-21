import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saiLogo from '@/assets/sai-logo.png';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [phase, setPhase] = useState<'draw' | 'logo' | 'text' | 'exit'>('draw');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100));
    }, 30);

    const drawTimer = setTimeout(() => setPhase('logo'), 400);
    const logoTimer = setTimeout(() => setPhase('text'), 1000);
    const textTimer = setTimeout(() => setPhase('exit'), 2000);
    const exitTimer = setTimeout(() => onComplete(), 2600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(drawTimer);
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
            <motion.div 
              animate={{ y: [0, -60] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                height: '200%'
              }}
            />
          </div>

          {/* Central content */}
          <div className="relative flex flex-col items-center">
            {/* Blueprint-style frame */}
            <div className="relative">
              {/* Corner brackets - animated draw */}
              <svg className="absolute -inset-8 md:-inset-12 w-[calc(100%+64px)] md:w-[calc(100%+96px)] h-[calc(100%+64px)] md:h-[calc(100%+96px)]" viewBox="0 0 200 200">
                <motion.path
                  d="M 20 10 L 10 10 L 10 20"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M 180 10 L 190 10 L 190 20"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M 190 180 L 190 190 L 180 190"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M 10 180 L 10 190 L 20 190"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 md:-inset-6"
              >
                <div className="w-full h-full rounded-full border border-dashed border-background/10" />
              </motion.div>

              {/* Logo container with glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                
                {/* Logo */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/30 bg-background shadow-2xl">
                  <img 
                    src={saiLogo} 
                    alt="Sai Enterprises" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Pulse rings */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-primary/40"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  className="absolute inset-0 rounded-full border border-primary/20"
                />
              </motion.div>
            </div>

            {/* Company name - staggered reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase === 'text' ? 1 : 0, 
                y: phase === 'text' ? 0 : 20 
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 text-center"
            >
              <h1 className="font-serif text-3xl md:text-4xl text-background tracking-wide">
                Sai Enterprises
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: phase === 'text' ? '60px' : 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mx-auto mt-4 h-px bg-primary"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'text' ? 0.5 : 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-4 text-[10px] uppercase tracking-[0.3em] text-background/50"
              >
                Graphic Machinery Suppliers
              </motion.p>
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40">
            <div className="h-px bg-background/10 overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[9px] text-background/30 font-mono">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Decorative corner text */}
          <div className="absolute top-8 left-8 text-[9px] font-mono text-background/20 tracking-wider">
            EST. 2000
          </div>
          <div className="absolute top-8 right-8 text-[9px] font-mono text-background/20 tracking-wider">
            INDIA · KENYA
          </div>
          <div className="absolute bottom-8 left-8 text-[9px] font-mono text-background/20 tracking-wider hidden md:block">
            24+ YEARS EXPERIENCE
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PremiumLoader;
