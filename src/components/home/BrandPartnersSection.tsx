import { motion } from 'framer-motion';
import { partnerBrands } from '@/data/products';

const BrandPartnersSection = () => {
  return (
    <section className="border-t border-border bg-background">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption */}
          <p className="caption mb-16">Our Brand Partners</p>

          {/* Brand Grid - Clean, minimal, premium */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Logo placeholder - monochrome, reveals on hover */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-500">
                  <span 
                    className="text-xl md:text-2xl font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {brand.name.charAt(0)}
                  </span>
                </div>

                {/* Brand Name */}
                <h4 
                  className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {brand.name}
                </h4>

                {/* Country - subtle */}
                <p className="text-xs text-muted-foreground mt-1">
                  {brand.country}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-16 max-w-lg mx-auto"
          >
            Only genuine products from globally renowned manufacturers.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
