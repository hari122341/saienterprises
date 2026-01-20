import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locations = {
  india: [
    { city: 'Hyderabad', role: 'Head Office' },
    { city: 'New Delhi', role: 'Branch Office' },
    { city: 'Pune', role: 'Branch Office' },
    { city: 'Vijayawada', role: 'Branch Office' },
  ],
  kenya: [
    { city: 'Nairobi', role: 'East Africa Office' },
  ],
};

const GlobalPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-6">Presence</p>
            <h1 className="text-foreground mb-8">
              India.<br />
              East Africa.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Five locations across two countries, providing local support 
              and expertise to the printing and packaging industry.
            </p>
          </motion.div>
        </section>

        {/* India */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">India</p>
            
            <div className="border-t border-border max-w-2xl">
              {locations.india.map((location) => (
                <div 
                  key={location.city}
                  className="py-6 md:py-8 border-b border-border flex items-center justify-between"
                >
                  <span 
                    className="text-xl md:text-2xl font-light text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {location.city}
                  </span>
                  <span className="text-sm text-muted-foreground">{location.role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Kenya */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">Kenya</p>
            
            <div className="border-t border-border max-w-2xl">
              {locations.kenya.map((location) => (
                <div 
                  key={location.city}
                  className="py-6 md:py-8 border-b border-border flex items-center justify-between"
                >
                  <span 
                    className="text-xl md:text-2xl font-light text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {location.city}
                  </span>
                  <span className="text-sm text-muted-foreground">{location.role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Reach statement */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our presence in these strategic locations allows us to provide 
              rapid response, local expertise, and ongoing support to our clients. 
              Whether you're in Maharashtra or Mombasa, we're equipped to serve 
              your machinery needs.
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
              Find your nearest office.
            </h3>
            <Link
              to="/contact"
              className="btn-quiet group inline-flex"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default GlobalPage;