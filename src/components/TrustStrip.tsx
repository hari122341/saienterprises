import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe2, Handshake, Settings } from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    title: '24+ Years',
    subtitle: 'Industry Experience',
    description: 'Trusted expertise since 2000',
  },
  {
    icon: Globe2,
    title: 'Global Presence',
    subtitle: 'India & Kenya',
    description: '5 locations across 2 countries',
  },
  {
    icon: Handshake,
    title: 'Authorized Partner',
    subtitle: 'Premium Brands',
    description: 'Heidelberg, Komori, Manroland',
  },
  {
    icon: Settings,
    title: 'New & Refurbished',
    subtitle: 'Complete Solutions',
    description: 'Machinery with assurance',
  },
];

const TrustStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      id="trust"
      ref={ref}
      className="relative py-12 md:py-16 bg-card border-y border-border overflow-hidden"
    >
      {/* Subtle animated background */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--primary)) 0,
              hsl(var(--primary)) 1px,
              transparent 1px,
              transparent 20px
            )`,
          }}
        />
      </motion.div>

      <div className="container-wide relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                >
                  {/* Icon Container with animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-primary mb-2">
                    {point.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
