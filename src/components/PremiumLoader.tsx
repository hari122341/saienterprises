import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saiLogoCmyk from '@/assets/sai-logo-cmyk.png';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(newProgress));
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsExiting(true), 300);
        setTimeout(() => onComplete(), 900);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Gradient accent - subtle */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center px-6">
            {/* Logo with elegant reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mb-10"
            >
              {/* Logo */}
              <motion.div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <img 
                  src={saiLogoCmyk} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-contain" 
                />
              </motion.div>
            </motion.div>

            {/* Company name - clean typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-6"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-medium tracking-tight">
                Sai Enterprises
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-muted-foreground text-sm sm:text-base tracking-wide mb-12 italic"
            >
              We believe in long term relationships
            </motion.p>

            {/* Minimal progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="flex flex-col items-center"
            >
              {/* Progress line */}
              <div className="relative w-48 sm:w-56">
                <div className="w-full h-[2px] bg-border rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
              
              {/* Progress percentage */}
              <motion.span 
                className="text-xs text-muted-foreground mt-4 tabular-nums tracking-wider"
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Corner accents - minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute bottom-8 left-8 hidden sm:block"
          >
            <span className="text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase">
              Est. 2000
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute bottom-8 right-8 hidden sm:block"
          >
            <span className="text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase">
              India • Kenya
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
