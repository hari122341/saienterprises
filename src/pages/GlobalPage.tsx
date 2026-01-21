import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import brochureHero from '@/assets/brochure-hero.jpg';

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
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero with Image */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={brochureHero} 
              alt="" 
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.6) brightness(0.8) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative w-full px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
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
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                Five locations across two countries, providing local support 
                and expertise to the printing and packaging industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* India */}
        <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">India</p>
            
            <div className="max-w-2xl">
              {locations.india.map((location, index) => (
                <motion.div 
                  key={location.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="py-6 md:py-8 border-b border-border flex items-center justify-between"
                >
                  <span 
                    className="text-xl md:text-2xl text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {location.city}
                  </span>
                  <span className="text-sm text-muted-foreground">{location.role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Kenya */}
        <section className="border-t border-border py-20 md:py-28 px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">Kenya</p>
            
            <div className="max-w-2xl">
              {locations.kenya.map((location, index) => (
                <motion.div 
                  key={location.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="py-6 md:py-8 border-b border-border flex items-center justify-between"
                >
                  <span 
                    className="text-xl md:text-2xl text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {location.city}
                  </span>
                  <span className="text-sm text-muted-foreground">{location.role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Reach statement */}
        <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24">
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
              Our presence in these strategic locations allows us to provide 
              rapid response, local expertise, and ongoing support.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're in Maharashtra or Mombasa, we're equipped to serve 
              your machinery needs with the same commitment to quality and service.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-secondary/30">
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

export default GlobalPage;
