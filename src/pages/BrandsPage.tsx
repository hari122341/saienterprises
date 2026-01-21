import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { partnerBrands } from '@/data/products';
import PageTransition from '@/components/PageTransition';

const BrandsPage = () => {
  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-12 md:pb-16 px-5 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-4 sm:mb-6">Partners</p>
            <h1 className="text-foreground mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
              Brands we trust.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              We work with world-class manufacturers to bring you machinery 
              that meets the highest standards of quality and reliability.
            </p>
          </motion.div>
        </section>

        {/* Brands List - Editorial style */}
        <section className="border-t border-border py-12 sm:py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ x: 15, transition: { duration: 0.3 } }}
                className="py-6 sm:py-8 md:py-10 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                  {brand.name}
                </h3>
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm text-muted-foreground">{brand.country}</span>
                  {brand.specialty && (
                    <>
                      <span className="text-muted-foreground/30 hidden sm:block">·</span>
                      <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{brand.specialty}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust note */}
        <section className="py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.p 
              className="text-foreground text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Each brand we represent has been selected for their commitment to 
              precision engineering, reliability, and long-term value.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              When you choose machinery through Sai Enterprises, you're choosing quality 
              backed by decades of industry experience.
            </motion.p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h3 className="text-foreground mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-serif">
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
    </PageTransition>
  );
};

export default BrandsPage;
