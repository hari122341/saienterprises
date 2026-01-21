import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '@/data/products';
import machineryPrepress from '@/assets/machinery-prepress.jpg';
import machineryDetail from '@/assets/machinery-detail.jpg';
import machineryPostpress from '@/assets/machinery-postpress.jpg';
import machineryCorrugation from '@/assets/machinery-corrugation.jpg';

const categoryImages: Record<string, string> = {
  'pre-press': machineryPrepress,
  'press': machineryDetail,
  'post-press': machineryPostpress,
  'corrugation': machineryCorrugation,
};

const OfferingsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-secondary/50 overflow-hidden">
      {/* Background image that changes on hover */}
      <AnimatePresence mode="wait">
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.08, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none"
            style={{ y: bgY }}
          >
            <img 
              src={categoryImages[productCategories[hoveredIndex]?.slug] || machineryPrepress}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(1)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              What We Offer
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Machinery for every<br />stage of print.
              </h2>
              <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
                Four comprehensive categories covering the complete graphic production workflow.
              </p>
            </div>
          </motion.div>

          {/* Category Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/machinery/${category.slug}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group block relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Background image for card */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img 
                      src={categoryImages[category.slug] || machineryPrepress}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(1)' }}
                    />
                  </div>

                  <div className="relative p-8 md:p-10">
                    {/* Number */}
                    <span className="text-xs font-mono text-muted-foreground/40 mb-4 block">
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors mb-4">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-md">
                      {category.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        View machinery
                      </span>
                      <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
