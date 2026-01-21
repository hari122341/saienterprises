import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(newProgress));
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsExiting(true), 300);
        setTimeout(() => onComplete(), 1000);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  // Staggered letter animation for "SAI"
  const letters = ['S', 'A', 'I'];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground overflow-hidden"
        >
          {/* Animated gradient mesh */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
              animate={{ 
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
              animate={{ 
                x: [0, -40, 0],
                y: [0, -40, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Blueprint grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--background))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Animated horizontal scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Main logo letters with stagger */}
            <div className="relative mb-10">
              <div className="flex items-center gap-1">
                {letters.map((letter, index) => (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative"
                  >
                    <span className="font-serif text-7xl sm:text-8xl text-background font-medium tracking-wide">
                      {letter}
                    </span>
                    {/* Subtle glow under each letter */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/60 blur-sm rounded-full"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Company name reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center overflow-hidden"
            >
              <motion.h1 
                className="text-background/90 text-sm sm:text-base tracking-[0.4em] uppercase font-medium"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Enterprises
              </motion.h1>
            </motion.div>

            {/* Tagline with typewriter effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-background/40 text-[10px] tracking-[0.3em] uppercase mt-4"
            >
              Graphic Machinery Suppliers
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              className="mt-12 flex flex-col items-center"
            >
              <div className="w-48 h-[2px] bg-background/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-primary to-primary/50"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-[10px] text-background/30 mt-3 tabular-nums tracking-wider">
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="absolute bottom-8 left-8 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-background/20" />
            <span className="text-[9px] text-background/30 tracking-[0.2em] uppercase">Est. 2000</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="absolute bottom-8 right-8 flex items-center gap-3"
          >
            <span className="text-[9px] text-background/30 tracking-[0.2em] uppercase">India • Kenya</span>
            <div className="w-8 h-px bg-background/20" />
          </motion.div>

          {/* Top corner markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.8 }}
            className="absolute top-8 left-8 w-6 h-6"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-background" />
            <div className="absolute top-0 left-0 h-full w-px bg-background" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.8 }}
            className="absolute top-8 right-8 w-6 h-6"
          >
            <div className="absolute top-0 right-0 w-full h-px bg-background" />
            <div className="absolute top-0 right-0 h-full w-px bg-background" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
