import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import saiLogo from '@/assets/sai-logo.png';

interface PremiumLoaderProps {
  onComplete: () => void;
  minimumDuration?: number;
}

const PremiumLoader = ({ onComplete, minimumDuration = 2500 }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'exit'>('loading');

  useEffect(() => {
    const startTime = Date.now();
    const targetDuration = minimumDuration;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / targetDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setPhase('complete');
        setTimeout(() => {
          setPhase('exit');
          setTimeout(onComplete, 600);
        }, 400);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [minimumDuration, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center gradient-premium"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.98,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 blueprint-grid opacity-30" />
          
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Horizontal scanning line */}
            <motion.line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="hsl(192 85% 50% / 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Vertical lines */}
            <motion.line
              x1="25%"
              y1="0"
              x2="25%"
              y2="100%"
              stroke="hsl(192 85% 50% / 0.1)"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.line
              x1="75%"
              y1="0"
              x2="75%"
              y2="100%"
              stroke="hsl(192 85% 50% / 0.1)"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </svg>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container with Blueprint Frame */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Corner Brackets */}
              <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)]">
                {/* Top Left */}
                <motion.path
                  d="M 16 4 L 4 4 L 4 16"
                  fill="none"
                  stroke="hsl(192 85% 50% / 0.6)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </svg>

              {/* Logo */}
              <motion.img
                src={saiLogo}
                alt="Sai Enterprises"
                className="h-20 md:h-28 w-auto relative z-10"
                initial={{ filter: 'brightness(0) invert(1) opacity(0)' }}
                animate={{ 
                  filter: 'brightness(0) invert(1) opacity(1)',
                }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 blur-2xl bg-accent/20 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.5, 0.3],
                  scale: [0.8, 1.2, 1]
                }}
                transition={{ duration: 2, times: [0, 0.5, 1] }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2">
                SAI ENTERPRISES
              </h1>
              <p className="text-white/60 text-sm tracking-[0.3em] uppercase">
                Graphic Machinery Suppliers
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80">
              {/* Progress Track */}
              <div className="relative h-[2px] bg-white/10 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-white to-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Progress Text */}
              <div className="flex justify-between items-center mt-4">
                <motion.span
                  className="text-xs text-white/40 tracking-widest uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Initializing
                </motion.span>
                <motion.span
                  className="text-xs text-white/60 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>

            {/* Calibration Marks */}
            <motion.div
              className="flex gap-1 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 border border-accent/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: progress > (i + 1) * 20 ? 1 : 0.3,
                    scale: 1,
                    backgroundColor: progress > (i + 1) * 20 ? 'hsl(192 85% 50% / 0.5)' : 'transparent'
                  }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute bottom-8 left-8 text-white/20 text-[10px] font-mono tracking-wider">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              EST. 2000 — 24+ YEARS
            </motion.span>
          </div>
          <div className="absolute bottom-8 right-8 text-white/20 text-[10px] font-mono tracking-wider">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              INDIA • KENYA
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
