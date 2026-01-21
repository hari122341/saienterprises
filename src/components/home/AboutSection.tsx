import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
          
          {/* Main Statement - Large card spanning left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-border/50 p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] group hover:border-primary/20 transition-colors duration-500"
          >
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
                More than<br />
                <span className="text-primary">machinery</span> suppliers.
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                With over 24 years of expertise in graphic and corrugation machinery, 
                we've built trust across India and East Africa through genuine partnership.
              </p>
              <div className="w-12 h-px bg-primary/40 group-hover:w-24 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Years Counter - Top right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-center items-center text-center min-h-[200px]"
          >
            <div className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
              <AnimatedCounter end={24} suffix="+" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mt-2">
              Years Experience
            </span>
          </motion.div>

          {/* Philosophy Card - Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-secondary/50 border border-border/50 p-8 md:p-10 flex flex-col justify-center min-h-[200px] group hover:bg-secondary transition-colors duration-500"
          >
            <blockquote 
              className="font-serif text-xl md:text-2xl text-foreground leading-snug italic"
            >
              "We believe in long-term relationships — growing together as trusted partners."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Our Philosophy
              </span>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 grid grid-cols-3 gap-4 md:gap-6"
          >
            {[
              { number: 500, suffix: '+', label: 'Clients Served' },
              { number: 2, suffix: '', label: 'Continents' },
              { number: 100, suffix: '%', label: 'Commitment' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-background border border-border/50 p-6 md:p-8 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <div className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={1.5 + index * 0.3} />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
