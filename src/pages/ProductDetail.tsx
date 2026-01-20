import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, CheckCircle2, Ruler, Settings, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { productCategories, Product } from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  // Find the product across all categories
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
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link to="/#products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const product = foundProduct;
  const category = foundCategory;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4 border-b border-border">
          <div className="container-wide">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                to={`/#${category.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12 md:py-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border border-border flex items-center justify-center relative overflow-hidden">
                  {/* Industrial pattern background */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
                        linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
                        linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                    }}
                  />

                  <div className="text-center z-10">
                    <Package className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Product Image</p>
                    <p className="text-primary font-medium">{product.name}</p>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {category.name}
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link
                  to={`/#${category.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {category.name}
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {product.subcategory && (
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full mb-4">
                    {product.subcategory}
                  </span>
                )}

                {product.description && (
                  <p className="text-lg text-muted-foreground mb-8">{product.description}</p>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Settings className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">{category.name}</p>
                  </div>
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <Ruler className="w-6 h-6 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Available Sizes</p>
                      <p className="font-semibold text-foreground">{product.sizes.length} options</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#contact" className="flex-1">
                    <Button className="w-full h-12 text-base font-semibold">
                      Request Quote
                    </Button>
                  </Link>
                  <Link to="/#contact" className="flex-1">
                    <Button variant="outline" className="w-full h-12 text-base">
                      <Wrench className="w-4 h-4 mr-2" />
                      Get Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        {(product.specifications || product.sizes || product.features) && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-wide">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-8"
              >
                Specifications & Features
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-primary" />
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground">{key}</span>
                          <span className="font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Available Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Available Sizes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        <section className="py-12 md:py-16">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-8"
            >
              Related Products
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="block p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Image placeholder */}
                      <div className="aspect-[4/3] rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                        <Package className="w-12 h-12 text-muted-foreground/30" />
                      </div>

                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      {relatedProduct.subcategory && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {relatedProduct.subcategory}
                        </p>
                      )}
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Interested in {product.name}?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our team provides technical guidance and suitable machinery solutions. Get a
                personalized consultation today.
              </p>
              <Link to="/#contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 text-base font-semibold"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
