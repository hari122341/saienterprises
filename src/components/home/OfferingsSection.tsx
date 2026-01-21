import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '@/data/products';

const OfferingsSection = () => {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption */}
          <p className="caption mb-16">What We Offer</p>

          {/* Categories - Editorial list style */}
          <div className="max-w-4xl">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/machinery/${category.slug}`}
                  className="editorial-list-item group"
                >
                  <div className="flex-1">
                    <h3 
                      className="text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="hidden sm:inline">View</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;
