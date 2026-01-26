import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { productCategories } from '@/data/products';

// Category images
const categoryImages: Record<string, string> = {
  'pre-press': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  'press': 'https://images.unsplash.com/photo-1581092160607-ee22731e3a0f?w=800&h=600&fit=crop',
  'post-press': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
  'corrugation': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
};

const categories = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press',
    description: 'Plate making, exposure and imaging solutions for precision preparation.',
    color: 'from-cyan-500/20 to-cyan-500/5',
    accent: 'bg-cyan-500',
  },
  { 
    id: 'press', 
    name: 'Press',
    description: 'Offset and digital printing machinery for high-quality production.',
    color: 'from-primary/20 to-primary/5',
    accent: 'bg-primary',
  },
  { 
    id: 'post-press', 
    name: 'Post-Press',
    description: 'Cutting, binding and finishing solutions for professional output.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    accent: 'bg-emerald-500',
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation',
    description: 'Heavy-duty packaging machinery for industrial-scale operations.',
    color: 'from-amber-500/20 to-amber-500/5',
    accent: 'bg-amber-500',
  },
];

const MachineryHub = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  const getCategoryCount = (categoryId: string) => {
    const category = productCategories.find(c => c.id === categoryId);
    return category?.products.length || 0;
  };

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
          {/* Animated ambient glows */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }} />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <motion.span
              className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-primary" />
              Machinery
              <span className="w-8 h-px bg-primary" />
            </motion.span>
            
            <motion.h1 
              className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Choose a <span className="text-primary italic">discipline.</span>
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Complete range of printing and packaging machinery solutions.
            </motion.p>
          </motion.div>
        </section>

        {/* Categories Grid - Image Cards */}
        <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {categories.map((category, index) => {
              const count = getCategoryCount(category.id);
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/machinery/${category.id}`}
                    className="group block relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={categoryImages[category.id]}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/20" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end">
                      {/* Number */}
                      <motion.span 
                        className="absolute top-5 right-5 sm:top-6 sm:right-6 text-5xl sm:text-6xl md:text-7xl font-serif text-background/10 group-hover:text-primary/30 transition-colors duration-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        0{index + 1}
                      </motion.span>

                      {/* Accent line */}
                      <motion.div 
                        className={`w-12 h-1 ${category.accent} mb-4`}
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      />

                      {/* Title */}
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-background mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-background/70 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-md line-clamp-2">
                        {category.description}
                      </p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs text-background/50">
                          {count} machines
                        </span>
                        <motion.div 
                          className="flex items-center gap-1.5 sm:gap-2 text-background group-hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-xs font-medium">Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Need Help?
              <span className="w-8 h-px bg-primary" />
            </span>
            <h3 className="text-foreground mb-6 text-2xl sm:text-3xl font-serif">
              Our team provides expert consultancy for your specific requirements.
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
            >
              <span className="text-sm font-medium">Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default MachineryHub;
