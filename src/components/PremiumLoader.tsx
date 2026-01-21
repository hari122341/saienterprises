import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saiLogo from '@/assets/sai-logo.png';

interface PremiumLoaderProps {
  onComplete: () => void;
}

const PremiumLoader = ({ onComplete }: PremiumLoaderProps) => {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase('text'), 600);
    const textTimer = setTimeout(() => setPhase('exit'), 1600);
    const exitTimer = setTimeout(() => onComplete(), 2200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'hsl(200 12% 97%)' }}
        >
          <div className="flex flex-col items-center">
            {/* Logo with elegant entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -inset-6 rounded-full border border-primary/10"
              />
              
              {/* Logo container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-2 border-primary/20"
                style={{ backgroundColor: 'hsl(200 12% 97%)' }}
              >
                <img 
                  src={saiLogo} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Subtle pulse */}
              <motion.div
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-primary/30"
              />
            </motion.div>

            {/* Company Name - staged reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: phase === 'text' ? 1 : 0, 
                y: phase === 'text' ? 0 : 15 
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 text-center"
            >
              <h1 
                className="text-2xl md:text-3xl tracking-wide"
                style={{ 
                  fontFamily: "'Cormorant Garamond', Georgia, serif", 
                  fontWeight: 500,
                  color: 'hsl(210 25% 10%)'
                }}
              >
                Sai Enterprises
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'text' ? 0.5 : 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-3 text-[10px] uppercase tracking-[0.25em]"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  color: 'hsl(210 12% 45%)'
                }}
              >
                Graphic Machinery Suppliers
              </motion.p>
            </motion.div>

            {/* Loading line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 h-px"
              style={{ backgroundColor: 'hsl(195 85% 40% / 0.4)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
