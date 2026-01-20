import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { partnerBrands } from '@/data/products';

const BrandsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-secondary/30 border-b border-border">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="micro-label text-primary mb-4 block">Trusted Partners</span>
              <h1 className="text-foreground mb-4">World-Class Brands</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We work with the world's leading manufacturers of printing and finishing machinery.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-industrial transition-all text-center"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-4">
                    <Globe className="w-4 h-4" />
                    {brand.country}
                  </p>
                  <p className="text-sm text-muted-foreground">{brand.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 gradient-premium">
          <div className="container-wide text-center">
            <h2 className="text-primary-foreground mb-4">Need Specific Brand Equipment?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us for availability and pricing.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrandsPage;
