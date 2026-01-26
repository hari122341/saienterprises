import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import MachinePreviewModal from '@/components/ui/MachinePreviewModal';
import { productCategories, Product } from '@/data/products';

// Category images
const categoryImages: Record<string, string> = {
  'pre-press': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  'press': 'https://images.unsplash.com/photo-1581092160607-ee22731e3a0f?w=600&h=400&fit=crop',
  'post-press': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
  'corrugation': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
};

const MachineryCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const heroRef = useRef<HTMLElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  const category = productCategories.find(c => c.slug === categorySlug);

  if (!category) {
    return (
      <PageTransition>
        <Header />
        <main className="pt-32 pb-20 px-8 md:px-16 lg:px-24 min-h-screen">
          <h1 className="text-3xl text-foreground mb-4 font-serif">Category not found</h1>
          <Link to="/machinery" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Machinery
          </Link>
        </main>
        <Footer />
      </PageTransition>
    );
  }

  const handleOpenPreview = (product: Product, index: number) => {
    setSelectedProduct(product);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % category.products.length;
    setSelectedProduct(category.products[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = selectedIndex === 0 ? category.products.length - 1 : selectedIndex - 1;
    setSelectedProduct(category.products[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[55vh] flex items-center justify-center bg-foreground overflow-hidden">
          {/* Animated gradient glow */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-sm text-background/50 mb-8"
            >
              <Link to="/" className="hover:text-background transition-colors">Home</Link>
              <span>/</span>
              <Link to="/machinery" className="hover:text-background transition-colors">Machinery</Link>
              <span>/</span>
              <span className="text-background">{category.name}</span>
            </motion.nav>

            <motion.span
              className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-primary" />
              {category.products.length} Machines
              <span className="w-8 h-px bg-primary" />
            </motion.span>

            <motion.h1 
              className="text-background text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {category.name}
            </motion.h1>
            
            <motion.p 
              className="text-background/60 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {category.description}
            </motion.p>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                Browse
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                All <span className="text-primary italic">machines.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <motion.div 
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-secondary rounded-sm"
                    onClick={() => handleOpenPreview(product, index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <motion.img 
                      src={product.image || categoryImages[category.id]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Quick view indicator */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg"
                      >
                        <Eye className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                    </motion.div>

                    {/* Product info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <motion.h3 
                        className="font-serif text-xl sm:text-2xl text-background mb-2 group-hover:text-primary transition-colors duration-300"
                      >
                        {product.name}
                      </motion.h3>
                      {product.sizes && product.sizes.length > 0 && (
                        <p className="text-sm text-background/60">
                          {product.sizes.length} size{product.sizes.length > 1 ? 's' : ''} available
                        </p>
                      )}
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-5 left-5">
                      <span className="text-sm font-medium text-background/30 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card footer */}
                  <motion.div 
                    className="p-4 border border-t-0 border-border bg-background group-hover:border-primary/30 transition-all duration-300"
                    whileHover={{ backgroundColor: 'hsl(var(--secondary) / 0.3)' }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Click to preview
                      </span>
                      <Link
                        to={`/machinery/${categorySlug}/${product.id}`}
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1 group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Details
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Get Started
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h3 className="text-foreground mb-4 text-2xl sm:text-3xl font-serif">
              Looking for something specific?
            </h3>
            <p className="text-muted-foreground mb-8">
              Contact our team for expert guidance on {category.name.toLowerCase()} machinery.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors group rounded-full"
              >
                <span className="font-medium">Request Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Preview Modal */}
      <MachinePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        categorySlug={categorySlug || ''}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={category.products.length > 1}
        hasPrev={category.products.length > 1}
      />
    </PageTransition>
  );
};

export default MachineryCategory;
