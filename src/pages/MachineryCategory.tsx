import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import MachinePreviewModal from '@/components/ui/MachinePreviewModal';
import { productCategories, Product } from '@/data/products';

// Category images
const categoryImages: Record<string, string> = {
  'pre-press': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'press': 'https://images.unsplash.com/photo-1581092160607-ee22731e3a0f?w=400&h=300&fit=crop',
  'post-press': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
  'corrugation': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
};

const MachineryCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
        <section className="relative min-h-[50vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Decorative orb */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/machinery" className="hover:text-foreground transition-colors">Machinery</Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
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
              className="text-foreground text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {category.name}
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {category.description}
            </motion.p>
          </div>
        </section>

        {/* Products Grid - Big Image Cards */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {category.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div 
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-secondary"
                  onClick={() => handleOpenPreview(product, index)}
                >
                  {/* Image */}
                  <img 
                    src={product.image || categoryImages[category.id]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Quick view button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-14 h-14 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </motion.div>

                  {/* Product info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="font-serif text-lg sm:text-xl text-background mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    {product.sizes && product.sizes.length > 0 && (
                      <p className="text-xs text-background/60">
                        {product.sizes.length} size{product.sizes.length > 1 ? 's' : ''} available
                      </p>
                    )}
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-background/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-4 border border-t-0 border-border bg-background group-hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Click to preview
                    </span>
                    <Link
                      to={`/machinery/${categorySlug}/${product.id}`}
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h3 className="text-foreground mb-4 text-xl sm:text-2xl font-serif">
              Looking for something specific?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our team for expert guidance on {category.name.toLowerCase()} machinery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
            >
              <span className="text-sm font-medium">Request quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
