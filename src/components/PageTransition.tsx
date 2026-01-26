import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Premium page transition variants with refined easing
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: 'blur(4px)',
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom smooth expo easing
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    filter: 'blur(2px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Overlay variants for dramatic page transition
const overlayVariants: Variants = {
  initial: {
    scaleY: 1,
  },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <>
      {/* Page content with animation */}
      <motion.div
        className={`min-h-screen bg-background ${className}`}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
