import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay to ensure component is mounted
    const mountTimer = setTimeout(() => setShowContent(true), 50);
    
    const duration = 3000;
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
    
    return () => clearTimeout(mountTimer);
  }, [onComplete]);

  if (!showContent) {
    return (
      <div 
        className="fixed inset-0 z-[100]"
        style={{ backgroundColor: 'hsl(210 20% 6%)' }}
      />
    );
  }

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

          {/* Center content */}
          <div className="relative flex flex-col items-center px-6">
            {/* CMYK Logo Animation with Shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-10"
            >
              {/* Animated CMYK Leaves with Shimmer */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-28 h-28 sm:w-36 sm:h-36"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Shimmer gradient for each leaf */}
                  <linearGradient id="shimmer-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(195 100% 50%)" />
                    <stop offset="50%" stopColor="hsl(195 100% 70%)" />
                    <stop offset="100%" stopColor="hsl(195 100% 50%)" />
                    <animate attributeName="x1" values="-100%;100%" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="0%;200%" dur="2s" repeatCount="indefinite" />
                  </linearGradient>
                  <linearGradient id="shimmer-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(335 100% 50%)" />
                    <stop offset="50%" stopColor="hsl(335 100% 70%)" />
                    <stop offset="100%" stopColor="hsl(335 100% 50%)" />
                    <animate attributeName="x1" values="-100%;100%" dur="2s" begin="0.2s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="0%;200%" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </linearGradient>
                  <linearGradient id="shimmer-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(48 100% 50%)" />
                    <stop offset="50%" stopColor="hsl(48 100% 70%)" />
                    <stop offset="100%" stopColor="hsl(48 100% 50%)" />
                    <animate attributeName="x1" values="-100%;100%" dur="2s" begin="0.4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="0%;200%" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </linearGradient>
                  <linearGradient id="shimmer-black" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(210 20% 15%)" />
                    <stop offset="50%" stopColor="hsl(210 20% 25%)" />
                    <stop offset="100%" stopColor="hsl(210 20% 15%)" />
                    <animate attributeName="x1" values="-100%;100%" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="0%;200%" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </linearGradient>
                </defs>

                {/* Cyan leaf - left outer */}
                <motion.ellipse
                  cx="25" cy="60"
                  rx="18" ry="35"
                  fill="url(#shimmer-cyan)"
                  initial={{ opacity: 0, scale: 0, rotate: -60 }}
                  animate={{ opacity: 1, scale: 1, rotate: -30 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '35px 90px' }}
                />
                
                {/* Magenta leaf - left inner */}
                <motion.ellipse
                  cx="38" cy="55"
                  rx="14" ry="32"
                  fill="url(#shimmer-magenta)"
                  initial={{ opacity: 0, scale: 0, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: -12 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '45px 85px' }}
                />
                
                {/* Yellow leaf - right inner */}
                <motion.ellipse
                  cx="62" cy="55"
                  rx="14" ry="32"
                  fill="url(#shimmer-yellow)"
                  initial={{ opacity: 0, scale: 0, rotate: 40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 12 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '55px 85px' }}
                />
                
                {/* Black leaf - right outer */}
                <motion.ellipse
                  cx="75" cy="60"
                  rx="18" ry="35"
                  fill="url(#shimmer-black)"
                  initial={{ opacity: 0, scale: 0, rotate: 60 }}
                  animate={{ opacity: 1, scale: 1, rotate: 30 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '65px 90px' }}
                />
              </svg>

              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 -m-6 rounded-full blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, hsl(195 80% 50% / 0.25), transparent 60%)' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Company name - elegant serif typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-3"
            >
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-sm sm:text-base mb-2"
              style={{ 
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: 'hsl(200 8% 60%)',
                fontStyle: 'italic'
              }}
            >
              We believe in long term relationships
            </motion.p>

            {/* Sub-caption */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-10"
              style={{ color: 'hsl(195 80% 50%)' }}
            >
              Graphic Machinery Suppliers
            </motion.span>

            {/* Minimal progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="flex flex-col items-center"
            >
              {/* Progress line */}
              <div className="relative w-36 sm:w-44">
                <div 
                  className="w-full h-[2px] rounded-full overflow-hidden"
                  style={{ backgroundColor: 'hsl(210 10% 18%)' }}
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
                className="text-[10px] mt-3 tabular-nums tracking-widest font-medium"
                style={{ color: 'hsl(200 8% 50%)' }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Corner info - subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="absolute bottom-6 left-6 hidden sm:block"
          >
            <span 
              className="text-[9px] tracking-[0.15em] uppercase"
              style={{ color: 'hsl(200 8% 35%)' }}
            >
              Est. 2000
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="absolute bottom-6 right-6 hidden sm:block"
          >
            <span 
              className="text-[9px] tracking-[0.15em] uppercase"
              style={{ color: 'hsl(200 8% 35%)' }}
            >
              India · Kenya
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
