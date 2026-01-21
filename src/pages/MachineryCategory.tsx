import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { productCategories } from '@/data/products';

const MachineryCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = productCategories.find(c => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl text-foreground mb-4">Category not found</h1>
          <Link to="/machinery" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Machinery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Group products by category
  const subcategories = category.products.reduce((acc, product) => {
    const subcat = product.category || 'General';
    if (!acc[subcat]) {
      acc[subcat] = [];
    }
    acc[subcat].push(product);
    return acc;
  }, {} as Record<string, typeof category.products>);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-8 md:px-16 lg:px-24 border-b border-border">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/machinery" className="hover:text-foreground transition-colors">Machinery</Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-foreground mb-6">{category.name}</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              {category.description}
            </p>
            <p className="caption mt-6">{category.products.length} machines</p>
          </motion.div>
        </section>

        {/* Products - Editorial list style */}
        <section className="py-12 md:py-16 px-8 md:px-16 lg:px-24">
          {Object.entries(subcategories).map(([subcategoryName, products], sectionIndex) => (
            <motion.div
              key={subcategoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {subcategoryName !== 'General' && (
                <p className="caption mb-8">{subcategoryName}</p>
              )}

              <div className="border-t border-border">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      to={`/machinery/${categorySlug}/${product.id}`}
                      className="editorial-list-item group"
                    >
                      <div className="flex-1 pr-8">
                        <h3 className="text-lg md:text-xl font-light text-foreground group-hover:text-muted-foreground transition-colors mb-1" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {product.description}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {product.sizes && product.sizes.length > 0 && (
                          <span className="hidden sm:block text-xs text-muted-foreground">
                            {product.sizes.length} size{product.sizes.length > 1 ? 's' : ''}
                          </span>
                        )}
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="border-t border-border py-24 md:py-32 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h3 className="text-foreground mb-6">
              Looking for something specific?
            </h3>
            <p className="text-muted-foreground mb-8">
              Contact our team for expert guidance on {category.name.toLowerCase()} machinery.
            </p>
            <Link
              to="/contact"
              className="btn-quiet group inline-flex"
            >
              <span>Request quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default MachineryCategory;