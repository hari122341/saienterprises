import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumLoaderProps {
  onComplete: () => void;
}

// CMYK Leaf SVG paths - extracted from logo shape
const LeafPath = ({ color, delay, direction }: { color: string; delay: number; direction: 'left' | 'right' }) => {
  const isLeft = direction === 'left';
  
  return (
    <motion.path
      d={isLeft 
        ? "M50 80 Q30 50 50 20 Q40 50 50 80" 
        : "M50 80 Q70 50 50 20 Q60 50 50 80"
      }
      fill={color}
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotate: isLeft ? -45 : 45,
        x: isLeft ? -20 : 20,
        y: 20
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ transformOrigin: '50% 80%' }}
    />
  );
};

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 3200;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(newProgress));
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsExiting(true), 400);
        setTimeout(() => onComplete(), 1100);
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
            scale: 1.05,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'hsl(210 20% 6%)' }}
        >
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(200 10% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(200 10% 30%) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Ambient glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: 'radial-gradient(circle, hsl(195 80% 40% / 0.15), transparent 70%)' }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Subtle scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(195 80% 50% / 0.3), transparent)' }}
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center px-6">
            {/* CMYK Logo Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              {/* Animated CMYK Leaves */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-32 h-32 sm:w-40 sm:h-40"
                style={{ overflow: 'visible' }}
              >
                {/* Cyan leaf - left outer */}
                <motion.ellipse
                  cx="25" cy="60"
                  rx="18" ry="35"
                  fill="hsl(195 100% 50%)"
                  initial={{ opacity: 0, scale: 0, rotate: -60 }}
                  animate={{ opacity: 1, scale: 1, rotate: -30 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '35px 90px' }}
                />
                
                {/* Magenta leaf - left inner */}
                <motion.ellipse
                  cx="38" cy="55"
                  rx="14" ry="32"
                  fill="hsl(335 100% 50%)"
                  initial={{ opacity: 0, scale: 0, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: -12 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '45px 85px' }}
                />
                
                {/* Yellow leaf - right inner */}
                <motion.ellipse
                  cx="62" cy="55"
                  rx="14" ry="32"
                  fill="hsl(48 100% 50%)"
                  initial={{ opacity: 0, scale: 0, rotate: 40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 12 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '55px 85px' }}
                />
                
                {/* Black leaf - right outer */}
                <motion.ellipse
                  cx="75" cy="60"
                  rx="18" ry="35"
                  fill="hsl(210 20% 12%)"
                  initial={{ opacity: 0, scale: 0, rotate: 60 }}
                  animate={{ opacity: 1, scale: 1, rotate: 30 }}
                  transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '65px 90px' }}
                />
              </svg>

              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 -m-8 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, hsl(195 80% 50% / 0.2), transparent 60%)' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </motion.div>

            {/* Company name - elegant serif typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-4"
            >
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
                style={{ 
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  color: 'hsl(200 10% 92%)'
                }}
              >
                Sai Enterprises
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-sm sm:text-base mb-3 italic"
              style={{ 
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: 'hsl(200 8% 55%)'
              }}
            >
              We believe in long term relationships
            </motion.p>

            {/* Sub-caption */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-[10px] uppercase tracking-[0.25em] mb-14"
              style={{ color: 'hsl(195 80% 50%)' }}
            >
              Graphic Machinery Suppliers
            </motion.span>

            {/* Minimal progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
              className="flex flex-col items-center"
            >
              {/* Progress line */}
              <div className="relative w-40 sm:w-48">
                <div 
                  className="w-full h-[1px] rounded-full overflow-hidden"
                  style={{ backgroundColor: 'hsl(210 10% 20%)' }}
                >
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, hsl(195 80% 50%), hsl(335 70% 55%))'
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
              
              {/* Progress text */}
              <motion.span 
                className="text-[10px] mt-4 tabular-nums tracking-widest"
                style={{ color: 'hsl(200 8% 45%)' }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Corner info - subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="absolute bottom-8 left-8 hidden sm:block"
          >
            <span 
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: 'hsl(200 8% 35%)' }}
            >
              Est. 2000
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="absolute bottom-8 right-8 hidden sm:block"
          >
            <span 
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: 'hsl(200 8% 35%)' }}
            >
              India · Kenya
            </span>
          </motion.div>

          {/* Minimal corner brackets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 2.4, duration: 0.4 }}
            className="absolute top-8 left-8 w-6 h-6 border-l border-t hidden sm:block"
            style={{ borderColor: 'hsl(200 10% 40%)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 2.4, duration: 0.4 }}
            className="absolute top-8 right-8 w-6 h-6 border-r border-t hidden sm:block"
            style={{ borderColor: 'hsl(200 10% 40%)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
