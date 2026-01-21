import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { partnerBrands } from '@/data/products';

const BrandsPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-6">Partners</p>
            <h1 className="text-foreground mb-8">
              Brands we trust.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              We work with world-class manufacturers to bring you machinery 
              that meets the highest standards of quality and reliability.
            </p>
          </motion.div>
        </section>

        {/* Brands List - Editorial style */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="py-8 md:py-10 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:pl-4 transition-all duration-300"
              >
                <h3 
                  className="text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {brand.name}
                </h3>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground">{brand.country}</span>
                  {brand.specialty && (
                    <>
                      <span className="text-muted-foreground/30">·</span>
                      <span className="text-sm text-muted-foreground">{brand.specialty}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust note */}
        <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p 
              className="text-foreground text-xl md:text-2xl leading-relaxed mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Each brand we represent has been selected for their commitment to 
              precision engineering, reliability, and long-term value.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When you choose machinery through Sai Enterprises, you're choosing quality 
              backed by decades of industry experience.
            </p>
          </motion.div>
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
            <h3 className="text-foreground mb-8">
              Looking for specific machinery?
            </h3>
            <Link
              to="/contact"
              className="btn-primary group inline-flex"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BrandsPage;
