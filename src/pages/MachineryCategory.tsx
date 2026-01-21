import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { productCategories } from '@/data/products';

const MachineryCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
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

  // Group products by subcategory
  const subcategories = category.products.reduce((acc, product) => {
    const subcat = product.category || 'General';
    if (!acc[subcat]) {
      acc[subcat] = [];
    }
    acc[subcat].push(product);
    return acc;
  }, {} as Record<string, typeof category.products>);

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end bg-secondary/30 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative w-full px-6 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-28 sm:pt-36">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/machinery" className="hover:text-foreground transition-colors">Machinery</Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                {category.products.length} Machines
              </span>
              <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-4">
                {category.name}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            {Object.entries(subcategories).map(([subcategoryName, products], sectionIndex) => (
              <motion.div
                key={subcategoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                {subcategoryName !== 'General' && subcategoryName !== category.id && (
                  <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    {subcategoryName}
                  </h2>
                )}

                <div className="grid gap-3">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        to={`/machinery/${categorySlug}/${product.id}`}
                        className="group flex items-center justify-between p-4 sm:p-5 border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all duration-300"
                      >
                        <div className="flex-1 pr-4">
                          <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors mb-1">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {product.description}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 shrink-0">
                          {product.sizes && product.sizes.length > 0 && (
                            <span className="hidden sm:block text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                              {product.sizes.length} size{product.sizes.length > 1 ? 's' : ''}
                            </span>
                          )}
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
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
            className="max-w-xl"
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
    </PageTransition>
  );
};

export default MachineryCategory;
