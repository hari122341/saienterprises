import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '@/data/products';
import machineryPrepress from '@/assets/machinery-prepress.jpg';
import machineryDetail from '@/assets/machinery-detail.jpg';
import machineryPostpress from '@/assets/machinery-postpress.jpg';
import machineryCorrugation from '@/assets/machinery-corrugation.jpg';

// Map categories to images
const categoryImages: Record<string, string> = {
  'pre-press': machineryPrepress,
  'press': machineryDetail,
  'post-press': machineryPostpress,
  'corrugation': machineryCorrugation,
};

const OfferingsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string>(machineryPrepress);

  return (
    <section className="relative bg-foreground overflow-hidden min-h-screen">
      {/* Background Image with overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={activeImage} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(1)' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-background/60 font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-[1.05]">
            Direction
          </h2>
        </motion.div>

        {/* Full-width category links */}
        <div className="max-w-6xl">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setActiveImage(categoryImages[category.slug] || machineryPrepress);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                to={`/machinery/${category.slug}`}
                className="group block border-t border-background/10 hover:border-background/30 transition-colors duration-500"
              >
                <div className="py-8 md:py-10 flex items-center justify-between">
                  {/* Category Number + Name */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-xs font-mono text-background/30 w-8">
                      0{index + 1}
                    </span>
                    <h3 
                      className="font-serif text-3xl md:text-5xl lg:text-6xl text-background transition-all duration-500"
                      style={{
                        transform: hoveredIndex === index ? 'translateX(16px)' : 'translateX(0)',
                        color: hoveredIndex === index ? 'hsl(var(--primary))' : undefined,
                      }}
                    >
                      {category.name}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div 
                    className="flex items-center gap-4 transition-all duration-500"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0.3,
                      transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-8px)',
                    }}
                  >
                    <span className="hidden md:block text-sm text-background/60">
                      Explore
                    </span>
                    <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-background group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Description - revealed on hover */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-background/50 text-base md:text-lg pb-6 pl-14 md:pl-[72px] max-w-2xl">
                    {category.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-background/10" />
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
