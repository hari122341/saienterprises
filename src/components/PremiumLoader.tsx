import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saiLogo from '@/assets/sai-logo.png';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(newProgress));
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsExiting(true), 400);
        setTimeout(() => onComplete(), 1200);
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
            scale: 1.1,
            filter: 'blur(20px)'
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground overflow-hidden"
        >
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[150px]"
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.3, 1],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
              animate={{ 
                x: [0, -80, 0],
                y: [0, -60, 0],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-magenta/15 blur-[100px]"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
            <defs>
              <pattern id="loader-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--background))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <motion.rect 
              width="100%" 
              height="100%" 
              fill="url(#loader-grid)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </svg>

          {/* Multiple scan lines */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent"
            initial={{ top: '100%' }}
            animate={{ top: '0%' }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center px-6">
            {/* Logo with epic animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", stiffness: 200, damping: 20 }
              }}
              className="relative mb-8"
            >
              {/* Rotating ring behind logo */}
              <motion.div
                className="absolute inset-0 -m-4 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 -m-8 rounded-full border border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 -m-2 rounded-full bg-primary/40 blur-xl"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Logo */}
              <motion.div
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-primary/50"
                whileHover={{ scale: 1.05 }}
              >
                <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            {/* Company name with letter-by-letter reveal */}
            <div className="relative mb-4 overflow-hidden">
              <motion.div className="flex items-baseline gap-1">
                {'SAI'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="font-serif text-6xl sm:text-8xl text-background font-medium"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="font-serif text-4xl sm:text-6xl text-background/60 font-light ml-2"
                >
                  Enterprises
                </motion.span>
              </motion.div>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary via-primary to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Tagline with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <motion.div 
                className="w-8 h-px bg-primary/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              />
              <p className="text-background/50 text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
                Graphic Machinery Suppliers
              </p>
              <motion.div 
                className="w-8 h-px bg-primary/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              />
            </motion.div>

            {/* Progress bar with glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-56 sm:w-64">
                <div className="w-full h-[3px] bg-background/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary via-primary to-magenta rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                {/* Progress glow */}
                <motion.div
                  className="absolute top-0 h-[3px] bg-primary blur-sm rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <motion.span 
                  className="text-xs text-background/40 tracking-wider font-mono"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading
                </motion.span>
                <span className="text-sm text-background/60 tabular-nums tracking-wider font-mono font-medium">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Corner info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="absolute bottom-8 left-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] text-background/40 tracking-[0.2em] uppercase">Est. 2000</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="absolute bottom-8 right-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-background/40 tracking-[0.2em] uppercase">India • Kenya</span>
              <motion.div 
                className="w-2 h-2 rounded-full bg-magenta"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Top corner brackets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
            className="absolute top-8 left-8"
          >
            <div className="w-8 h-8 border-l-2 border-t-2 border-background/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
            className="absolute top-8 right-8"
          >
            <div className="w-8 h-8 border-r-2 border-t-2 border-background/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
            className="absolute bottom-20 left-8"
          >
            <div className="w-8 h-8 border-l-2 border-b-2 border-background/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
            className="absolute bottom-20 right-8"
          >
            <div className="w-8 h-8 border-r-2 border-b-2 border-background/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;