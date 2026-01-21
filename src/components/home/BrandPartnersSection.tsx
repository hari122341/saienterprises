import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { partnerBrands } from '@/data/products';

// Professional monochrome logo-style designs for each brand
const brandLogos: Record<string, { initials: string; style: 'square' | 'circle' | 'rounded' | 'pill' }> = {
  'Heidelberg': { initials: 'HD', style: 'square' },
  'Komori': { initials: 'K', style: 'circle' },
  'Manroland': { initials: 'MR', style: 'rounded' },
  'Mitsubishi': { initials: '◇', style: 'square' },
  'Müller Martini': { initials: 'MM', style: 'pill' },
  'MBO': { initials: 'MBO', style: 'square' },
  'HPM': { initials: 'HPM', style: 'rounded' },
  'Kanefusa': { initials: 'K', style: 'circle' },
};

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
          <p className="caption mb-6">Our Brand Partners</p>
          
          {/* Heading */}
          <h2 className="text-foreground mb-16 max-w-xl">
            We work with the best.
          </h2>

          {/* Brand Grid - Clean, minimal, premium */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-4xl">
            {partnerBrands.map((brand, index) => {
              const logo = brandLogos[brand.name] || { initials: brand.name.charAt(0), style: 'circle' };
              
              return (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group"
                >
                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary/50 transition-all duration-500">
                    {/* Logo Mark - Professional monochrome style */}
                    <div 
                      className={`
                        w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4
                        border-2 border-muted-foreground/20 group-hover:border-primary/40
                        bg-background group-hover:bg-primary/5
                        transition-all duration-500
                        ${logo.style === 'circle' ? 'rounded-full' : ''}
                        ${logo.style === 'square' ? 'rounded-sm' : ''}
                        ${logo.style === 'rounded' ? 'rounded-xl' : ''}
                        ${logo.style === 'pill' ? 'rounded-2xl' : ''}
                      `}
                    >
                      <span 
                        className={`
                          font-semibold text-muted-foreground group-hover:text-primary 
                          transition-colors duration-500 tracking-tight
                          ${logo.initials.length > 2 ? 'text-sm md:text-base' : 'text-lg md:text-xl'}
                        `}
                        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                      >
                        {logo.initials}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <h4 
                      className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {brand.name}
                    </h4>

                    {/* Country - subtle */}
                    <p className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">
                      {brand.country}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust statement + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <p 
              className="text-muted-foreground text-lg max-w-md leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Only genuine products from globally renowned manufacturers.
            </p>
            <Link
              to="/brands"
              className="btn-quiet group"
            >
              <span>View all brands</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
