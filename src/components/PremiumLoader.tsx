import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        setIsExiting(true);
        setTimeout(() => onComplete(), 400);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundColor: '#0d1117',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.4s ease-out',
        pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,156,204,0.15), transparent 70%)' }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <img 
            src={saiLogoCmyk} 
            alt="Sai Enterprises" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        </motion.div>

        {/* Company name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl font-serif font-bold tracking-wide text-center mb-1"
          style={{ color: '#e8eaed' }}
        >
          Sai Enterprises
        </motion.h1>

        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.2em] mb-8"
          style={{ color: '#00bcd4' }}
        >
          Graphic Machinery Suppliers
        </motion.span>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-28 sm:w-32">
            <div 
              className="w-full h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: '#2d3139' }}
            >
              <div 
                className="h-full rounded-full transition-all duration-100"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00bcd4, #e91e63)'
                }}
              />
            </div>
          </div>
          
          <span 
            className="text-[9px] mt-2 tabular-nums tracking-wider"
            style={{ color: '#5f6368' }}
          >
            {progress}%
          </span>
        </motion.div>
      </div>

      {/* Corner info */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 left-4 text-[8px] tracking-[0.12em] uppercase hidden sm:block"
        style={{ color: '#5f6368' }}
      >
        Est. 2000
      </motion.span>
      
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 right-4 text-[8px] tracking-[0.12em] uppercase hidden sm:block"
        style={{ color: '#5f6368' }}
      >
        India · Kenya
      </motion.span>
    </div>
  );
};

export default PremiumLoader;
