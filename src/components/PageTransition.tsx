import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Smooth, premium page transition variants
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom expo-out easing
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <motion.div
      className={`min-h-screen bg-background ${className}`}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;