import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-foreground overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <motion.img 
          key={activeIndex}
          src={categoryImages[productCategories[activeIndex]?.slug] || machineryPrepress}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.8 }}
          style={{ filter: 'grayscale(0.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
      </motion.div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
              />
              Machinery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background leading-tight">
              Complete print<br />
              <span className="text-primary">workflow</span> coverage.
            </h2>
          </motion.div>

          {/* Interactive Category List */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Category Navigation */}
            <div className="space-y-0">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group"
                >
                  <Link
                    to={`/machinery/${category.slug}`}
                    className={`flex items-center justify-between py-6 border-b transition-all duration-500 ${
                      activeIndex === index 
                        ? 'border-primary' 
                        : 'border-background/10 hover:border-background/30'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className={`text-xs font-mono transition-colors duration-300 ${
                        activeIndex === index ? 'text-primary' : 'text-background/30'
                      }`}>
                        0{index + 1}
                      </span>
                      <span className={`font-serif text-2xl sm:text-3xl md:text-4xl transition-all duration-300 ${
                        activeIndex === index 
                          ? 'text-background translate-x-2' 
                          : 'text-background/50 group-hover:text-background/70'
                      }`}>
                        {category.name}
                      </span>
                    </div>
                    <motion.div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-background/10 text-background/30 group-hover:bg-background/20'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right - Active Category Details */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                <motion.img 
                  src={categoryImages[productCategories[activeIndex]?.slug]}
                  alt={productCategories[activeIndex]?.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <p className="text-background/60 text-sm sm:text-base leading-relaxed mb-6">
                {productCategories[activeIndex]?.description}
              </p>
              <Link
                to={`/machinery/${productCategories[activeIndex]?.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span>Explore {productCategories[activeIndex]?.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
