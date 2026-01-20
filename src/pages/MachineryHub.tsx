import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productCategories } from '@/data/products';

const categories = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press',
    tagline: 'Plate making, exposure & imaging solutions',
    href: '/machinery/pre-press'
  },
  { 
    id: 'press', 
    name: 'Press',
    tagline: 'Offset & digital printing machinery',
    href: '/machinery/press'
  },
  { 
    id: 'post-press', 
    name: 'Post-Press',
    tagline: 'Cutting, binding & finishing solutions',
    href: '/machinery/post-press'
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation',
    tagline: 'Heavy-duty packaging machinery',
    href: '/machinery/corrugation'
  },
];

const MachineryHub = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const getCategoryCount = (categoryId: string) => {
    const category = productCategories.find(c => c.id === categoryId);
    return category?.products.length || 0;
  };

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Header />
      
      <main>
        {/* Page intro */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-6">Machinery</p>
            <h1 className="text-foreground mb-6">
              Choose a discipline.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Complete range of printing and packaging machinery solutions.
            </p>
          </motion.div>
        </section>

        {/* Full-screen category sections */}
        {categories.map((category, index) => {
          const count = getCategoryCount(category.id);
          
          return (
            <section 
              key={category.id}
              className="min-h-[70vh] md:min-h-screen flex flex-col justify-center border-t border-border px-8 md:px-16 lg:px-24"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <p className="caption mb-8">{String(index + 1).padStart(2, '0')}</p>
                
                <Link 
                  to={category.href}
                  className="group block"
                >
                  <h2 className="display-word text-foreground mb-8 group-hover:text-muted-foreground transition-colors duration-500">
                    {category.name}
                  </h2>
                  
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                      <p className="text-muted-foreground text-lg md:text-xl mb-4">
                        {category.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {count} machines available
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-foreground group-hover:text-muted-foreground transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </section>
          );
        })}

        {/* Contact CTA */}
        <section className="border-t border-border py-24 md:py-32 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="caption mb-6">Need guidance?</p>
            <h3 className="text-foreground mb-8">
              Our team provides expert consultancy for your requirements.
            </h3>
            <Link
              to="/contact"
              className="btn-quiet group inline-flex"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MachineryHub;