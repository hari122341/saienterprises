import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { partnerBrands } from '@/data/products';
import { CheckCircle2, Award, Globe } from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <section id="partners" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Brand Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with the world's leading manufacturers of printing and finishing machinery
          </p>
        </motion.div>

        {/* Partner Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnerBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredBrand(brand.name)}
              onMouseLeave={() => setHoveredBrand(null)}
              className="group"
            >
              <div
                className={`relative h-full p-6 rounded-2xl border-2 transition-all duration-500 ${
                  hoveredBrand === brand.name
                    ? 'bg-primary border-primary shadow-xl'
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                {/* Brand Name - Logo Placeholder */}
                <div className="text-center mb-4">
                  <h3
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                      hoveredBrand === brand.name
                        ? 'text-primary-foreground'
                        : 'text-foreground'
                    }`}
                    style={{ fontFamily: 'system-ui' }}
                  >
                    {brand.name}
                  </h3>
                </div>

                {/* Country Flag / Origin */}
                <div
                  className={`text-center transition-colors ${
                    hoveredBrand === brand.name
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground'
                  }`}
                >
                  <span className="text-sm font-medium flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    {brand.country}
                  </span>
                </div>

                {/* Specialty - Revealed on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredBrand === brand.name ? 1 : 0,
                    height: hoveredBrand === brand.name ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-primary-foreground/20 text-center">
                    <p className="text-sm text-primary-foreground/90">{brand.specialty}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Authorized Dealers</h4>
                <p className="text-sm text-muted-foreground">
                  Official partners for premium printing and finishing machinery brands
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Genuine Parts</h4>
                <p className="text-sm text-muted-foreground">
                  All machinery and spare parts sourced directly from manufacturers
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Global Standards</h4>
                <p className="text-sm text-muted-foreground">
                  European and Japanese engineering excellence for your production
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
