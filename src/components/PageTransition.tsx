import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Buttery smooth page transition variants
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom smooth easing
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 1.01,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
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
