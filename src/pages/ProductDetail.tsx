import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productCategories, Product } from '@/data/products';

const ProductDetail = () => {
  const { categorySlug, productId } = useParams<{ categorySlug: string; productId: string }>();

  // Find the product and category
  let foundProduct: Product | undefined;
  let foundCategory: typeof productCategories[0] | undefined;

  for (const category of productCategories) {
    const product = category.products.find((p) => p.id === productId);
    if (product) {
      foundProduct = product;
      foundCategory = category;
      break;
    }
  }

  if (!foundProduct || !foundCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl text-foreground mb-4">Product not found</h1>
          <Link to="/machinery" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Machinery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const product = foundProduct;
  const category = foundCategory;

  // Get related products
  const relatedProducts = category.products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="pt-24 pb-8 px-8 md:px-16 lg:px-24 border-b border-border">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/machinery" className="hover:text-foreground transition-colors">Machinery</Link>
            <span>/</span>
            <Link to={`/machinery/${category.slug}`} className="hover:text-foreground transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </motion.nav>
        </div>

        {/* Product Hero - Calm, centered */}
        <section className="py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="caption mb-6">{category.name}</p>
              
              <h1 className="text-foreground mb-8">
                {product.name}
              </h1>
              
              {product.subcategory && (
                <p className="text-muted-foreground text-lg mb-8">
                  {product.subcategory}
                </p>
              )}

              {product.description && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {product.description}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Specifications - Revealed on demand, clean layout */}
        {(product.specifications || product.sizes || product.features || product.applications) && (
          <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="caption mb-12">Specifications</p>

                <div className="space-y-16">
                  {/* Available Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-6">Available Sizes</h4>
                      <div className="flex flex-wrap gap-3">
                        {product.sizes.map((size) => (
                          <span 
                            key={size} 
                            className="px-4 py-2 border border-border text-sm text-foreground"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Specs */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-6">Technical Details</h4>
                      <div className="border-t border-border">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div 
                            key={key} 
                            className="flex justify-between py-4 border-b border-border"
                          >
                            <span className="text-muted-foreground text-sm">{key}</span>
                            <span className="text-foreground text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-6">Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start gap-3">
                            <span className="text-foreground">—</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Applications */}
                  {product.applications && product.applications.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-6">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span 
                            key={app} 
                            className="text-sm text-muted-foreground"
                          >
                            {app}
                            <span className="ml-2 text-border">·</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Request Quote - Calm CTA */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-foreground mb-6">
                Interested in this machine?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Our team provides technical guidance and suitable solutions.
              </p>
              <Link
                to="/contact"
                className="btn-quiet group inline-flex justify-center"
              >
                <span>Request quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <p className="caption mb-8">Related</p>
              
              <div className="border-t border-border">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/machinery/${category.slug}/${relatedProduct.id}`}
                    className="editorial-list-item group"
                  >
                    <span className="text-lg font-light text-foreground group-hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                      {relatedProduct.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;