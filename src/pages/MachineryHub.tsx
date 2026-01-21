import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { productCategories } from '@/data/products';

const categories = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press',
    description: 'Plate making, exposure and imaging solutions for precision preparation.',
    color: 'from-cyan-500/20 to-transparent',
  },
  { 
    id: 'press', 
    name: 'Press',
    description: 'Offset and digital printing machinery for high-quality production.',
    color: 'from-primary/20 to-transparent',
  },
  { 
    id: 'post-press', 
    name: 'Post-Press',
    description: 'Cutting, binding and finishing solutions for professional output.',
    color: 'from-emerald-500/20 to-transparent',
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation',
    description: 'Heavy-duty packaging machinery for industrial-scale operations.',
    color: 'from-amber-500/20 to-transparent',
  },
];

const MachineryHub = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        <section ref={heroRef} className="relative min-h-[50vh] flex items-end bg-secondary/30 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <motion.div 
            className="relative w-full px-6 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-28 sm:pt-36"
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Machinery
              </span>
              <h1 className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
                Choose a <span className="text-primary italic">discipline.</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed">
                Complete range of printing and packaging machinery solutions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
            {categories.map((category, index) => {
              const count = getCategoryCount(category.id);
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/machinery/${category.id}`}
                    className="group block relative overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    {/* Gradient accent */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 sm:p-10">
                      {/* Number */}
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-8 block">
                        0{index + 1}
                      </span>

                      {/* Title */}
                      <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <span className="text-xs text-muted-foreground">
                          {count} machines
                        </span>
                        <motion.div 
                          className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-xs font-medium">Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
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
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Need Help?
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
