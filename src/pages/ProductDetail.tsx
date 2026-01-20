import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Package, CheckCircle2, Ruler, Settings, Wrench } from 'lucide-react';
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
        <main className="pt-32 pb-20">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
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

  const product = foundProduct;
  const category = foundCategory;

  // Get related products
  const relatedProducts = category.products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4 border-b border-border">
          <div className="container-wide">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/machinery" className="text-muted-foreground hover:text-primary transition-colors">Machinery</Link>
              <span className="text-muted-foreground">/</span>
              <Link to={`/machinery/${category.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{category.name}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12 md:py-16">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-[4/3] rounded-2xl bg-secondary/50 border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Package className="w-20 h-20 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Product Image</p>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {category.name}
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  to={`/machinery/${category.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-sm hover:underline mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {category.name}
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {product.subcategory && (
                  <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full mb-4">
                    {product.subcategory}
                  </span>
                )}

                {product.description && (
                  <p className="text-lg text-muted-foreground mb-8">{product.description}</p>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Settings className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">{category.name}</p>
                  </div>
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <Ruler className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Available Sizes</p>
                      <p className="font-semibold text-foreground">{product.sizes.length} options</p>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 py-3 px-6 bg-primary text-primary-foreground font-medium rounded-lg text-center hover:bg-primary/90 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 py-3 px-6 border border-border text-foreground font-medium rounded-lg text-center hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                  >
                    <Wrench className="w-4 h-4" />
                    Get Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        {(product.specifications || product.sizes || product.features || product.applications) && (
          <section className="py-12 bg-secondary/30">
            <div className="container-wide">
              <h2 className="text-2xl font-bold text-foreground mb-8">Specifications & Features</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Technical Specs */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-primary" />
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                          <span className="text-muted-foreground text-sm">{key}</span>
                          <span className="font-medium text-foreground text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Available Sizes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span key={size} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span key={app} className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12">
            <div className="container-wide">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/machinery/${category.slug}/${relatedProduct.id}`}
                    className="group block p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-industrial transition-all"
                  >
                    <div className="aspect-[4/3] rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                      <Package className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {relatedProduct.name}
                    </h3>
                    {relatedProduct.subcategory && (
                      <p className="text-sm text-muted-foreground">{relatedProduct.subcategory}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 gradient-premium">
          <div className="container-wide text-center">
            <h2 className="text-primary-foreground mb-4">Interested in {product.name}?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Our team provides technical guidance and suitable machinery solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
