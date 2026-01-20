import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Package, Layers, Printer, Scissors } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productCategories } from '@/data/products';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'pre-press': Layers,
  'press': Printer,
  'post-press': Scissors,
  'corrugation': Package,
};

const MachineryCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = productCategories.find(c => c.slug === categorySlug);
  const Icon = categoryIcons[category?.id || ''] || Package;

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
            <Link to="/machinery" className="inline-flex items-center gap-2 text-primary font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Machinery Hub
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Group products by subcategory
  const subcategories = category.products.reduce((acc, product) => {
    const subcat = product.subcategory || 'General';
    if (!acc[subcat]) {
      acc[subcat] = [];
    }
    acc[subcat].push(product);
    return acc;
  }, {} as Record<string, typeof category.products>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-16 bg-secondary/30 border-b border-border">
          <div className="container-wide">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/machinery" className="text-muted-foreground hover:text-primary transition-colors">Machinery</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{category.name}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-foreground mb-2">{category.name}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {category.description}
                </p>
                <p className="text-sm text-primary mt-2">{category.products.length} machines available</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products by Subcategory */}
        <section className="section-padding">
          <div className="container-wide">
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
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    {subcategoryName}
                    <span className="text-sm font-normal text-muted-foreground">({products.length})</span>
                  </h2>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/machinery/${categorySlug}/${product.id}`}
                        className="group block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-industrial transition-all"
                      >
                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                          <Package className="w-10 h-10 text-muted-foreground/30" />
                        </div>

                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {product.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        )}

                        {product.sizes && product.sizes.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.sizes.slice(0, 3).map((size) => (
                              <span
                                key={size}
                                className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded"
                              >
                                {size}
                              </span>
                            ))}
                            {product.sizes.length > 3 && (
                              <span className="px-2 py-0.5 text-muted-foreground text-xs">
                                +{product.sizes.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                          View Details
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container-wide text-center">
            <h2 className="text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact our team for expert guidance on finding the right {category.name.toLowerCase()} machinery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                to="/machinery"
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MachineryCategory;
