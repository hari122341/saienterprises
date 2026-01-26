import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        setIsExiting(true);
        setTimeout(() => onComplete(), 500);
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
        transition: 'opacity 0.5s ease-out',
        pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,156,204,0.2), transparent 70%)' }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center px-6">
        {/* CMYK Logo with shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <svg 
            viewBox="0 0 100 100" 
            className="w-24 h-24 sm:w-32 sm:h-32"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="cyan-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00bcd4">
                  <animate attributeName="stop-color" values="#00bcd4;#4dd0e1;#00bcd4" dur="1.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#00bcd4" />
              </linearGradient>
              <linearGradient id="magenta-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e91e63">
                  <animate attributeName="stop-color" values="#e91e63;#f48fb1;#e91e63" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#e91e63" />
              </linearGradient>
              <linearGradient id="yellow-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffeb3b">
                  <animate attributeName="stop-color" values="#ffeb3b;#fff59d;#ffeb3b" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#ffeb3b" />
              </linearGradient>
            </defs>

            {/* Cyan leaf */}
            <motion.ellipse
              cx="25" cy="58" rx="16" ry="32"
              fill="url(#cyan-shimmer)"
              initial={{ opacity: 0, scale: 0, rotate: -50 }}
              animate={{ opacity: 1, scale: 1, rotate: -28 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '35px 85px' }}
            />
            
            {/* Magenta leaf */}
            <motion.ellipse
              cx="38" cy="53" rx="12" ry="28"
              fill="url(#magenta-shimmer)"
              initial={{ opacity: 0, scale: 0, rotate: -35 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '45px 80px' }}
            />
            
            {/* Yellow leaf */}
            <motion.ellipse
              cx="62" cy="53" rx="12" ry="28"
              fill="url(#yellow-shimmer)"
              initial={{ opacity: 0, scale: 0, rotate: 35 }}
              animate={{ opacity: 1, scale: 1, rotate: 10 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '55px 80px' }}
            />
            
            {/* Black leaf */}
            <motion.ellipse
              cx="75" cy="58" rx="16" ry="32"
              fill="#1a1f26"
              initial={{ opacity: 0, scale: 0, rotate: 50 }}
              animate={{ opacity: 1, scale: 1, rotate: 28 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '65px 85px' }}
            />
          </svg>

          {/* Glow */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full blur-xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,156,204,0.3), transparent 60%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Company name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-center mb-2"
          style={{ 
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: '#e8eaed'
          }}
        >
          Sai Enterprises
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-sm sm:text-base mb-1"
          style={{ 
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: '#9aa0a6',
            fontStyle: 'italic'
          }}
        >
          We believe in long term relationships
        </motion.p>

        {/* Sub-caption */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-[9px] uppercase tracking-[0.2em] mb-8"
          style={{ color: '#00bcd4' }}
        >
          Graphic Machinery Suppliers
        </motion.span>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-32 sm:w-40">
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
            className="text-[10px] mt-3 tabular-nums tracking-wider"
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
        transition={{ delay: 1.3 }}
        className="absolute bottom-5 left-5 text-[8px] tracking-[0.15em] uppercase hidden sm:block"
        style={{ color: '#5f6368' }}
      >
        Est. 2000
      </motion.span>
      
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-5 right-5 text-[8px] tracking-[0.15em] uppercase hidden sm:block"
        style={{ color: '#5f6368' }}
      >
        India · Kenya
      </motion.span>
    </div>
  );
};

export default PremiumLoader;
