import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo } from '@/data/products';

const GlobalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-secondary/30 border-b border-border">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="micro-label text-primary mb-4 block">Our Reach</span>
              <h1 className="text-foreground mb-4">Global Presence</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Serving the printing and packaging industry across India and Africa.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">India</h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                    <Building2 className="w-6 h-6 mb-3" />
                    <h3 className="font-bold text-lg">{companyInfo.locations.headquarters.city}</h3>
                    <p className="opacity-80">{companyInfo.locations.headquarters.state}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded text-xs">Head Office</span>
                  </div>
                  {companyInfo.locations.branches.map((branch) => (
                    <div key={branch.city} className="p-6 rounded-xl bg-card border border-border">
                      <MapPin className="w-5 h-5 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground">{branch.city}</h3>
                      <p className="text-muted-foreground text-sm">{branch.state}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Africa</h2>
                <div className="p-8 rounded-xl bg-accent text-accent-foreground">
                  <Globe className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-xl">{companyInfo.locations.overseas.city}</h3>
                  <p className="opacity-80 text-lg">{companyInfo.locations.overseas.country}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded text-sm">Overseas Branch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 gradient-premium">
          <div className="container-wide text-center">
            <h2 className="text-primary-foreground mb-4">Have Questions?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalPage;
