import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layers, Printer, Scissors, Package, ChevronRight, ArrowRight } from 'lucide-react';
import { productCategories } from '@/data/products';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'pre-press': Layers,
  'press': Printer,
  'post-press': Scissors,
  'corrugation': Package,
};

const ProductUniverse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="products" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Product Universe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete range of machinery for Pre-Press, Press, Post-Press & Corrugation
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || Package;
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                id={category.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className="group cursor-pointer"
              >
                <div
                  className={`relative h-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-primary border-primary shadow-xl scale-[1.02]'
                      : 'bg-card border-border hover:border-primary/50 hover:shadow-lg'
                  }`}
                >
                  {/* Category Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isActive ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors ${
                        isActive ? 'text-primary-foreground' : 'text-primary'
                      }`}
                    />
                  </div>

                  {/* Category Info */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {category.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 line-clamp-2 transition-colors ${
                      isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {category.description}
                  </p>

                  {/* Product Count */}
                  <div
                    className={`flex items-center justify-between pt-4 border-t transition-colors ${
                      isActive ? 'border-primary-foreground/20' : 'border-border'
                    }`}
                  >
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}
                    >
                      {category.products.length} Products
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ${
                        isActive
                          ? 'text-primary-foreground translate-x-1'
                          : 'text-muted-foreground group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Product Sections */}
        {productCategories.map((category, catIndex) => {
          const Icon = categoryIcons[category.id] || Package;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.products.slice(0, 8).map((product, prodIndex) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + prodIndex * 0.05 }}
                    className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    {product.subcategory && (
                      <span className="inline-block px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded mb-2">
                        {product.subcategory}
                      </span>
                    )}
                    {product.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="flex flex-wrap gap-1">
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
                            +{product.sizes.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* View All Card */}
                {category.products.length > 8 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="p-5 rounded-xl bg-secondary/50 border border-dashed border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">
                      +{category.products.length - 8} more products
                    </span>
                    <span className="text-sm text-muted-foreground">View all {category.name}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductUniverse;
