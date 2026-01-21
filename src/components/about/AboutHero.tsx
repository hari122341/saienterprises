import type { RefObject } from "react";
import { motion } from "framer-motion";

import aboutLocations from "@/assets/about-locations.jpg";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";

type AboutHeroProps = {
  experience: string;
};

const AboutHero = ({ experience }: AboutHeroProps) => {
  const { ref, y, scale, opacity } = useParallaxScroll({ speed: 0.2 });

  return (
    <section
      ref={ref as unknown as RefObject<HTMLElement>}
      className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y, scale, opacity }}
      >
        <img
          src={aboutLocations}
          alt="Sai Enterprises locations and service presence"
          className="w-full h-full object-cover"
          style={{
            filter:
              "saturate(0.82) brightness(0.68) contrast(1.08) hue-rotate(-10deg)",
          }}
          decoding="async"
        />

        {/* Editorial overlays (cool grade + vignette + grain + subtle technical grid) */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

        {/* Soft grain (no external assets) */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--foreground)/0.14) 0, transparent 45%), radial-gradient(circle at 70% 40%, hsl(var(--foreground)/0.10) 0, transparent 42%), radial-gradient(circle at 45% 75%, hsl(var(--foreground)/0.12) 0, transparent 48%)",
            backgroundSize: "180px 180px",
            filter: "blur(0.2px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)/0.8) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(circle at 50% 35%, black 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            className="caption mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About
          </motion.p>
          <h1 className="text-foreground mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            We&apos;ve been here
            <br />
            long enough.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            {experience} of excellence in graphic and corrugation machinery. Building long-term
            relationships across India and East Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
