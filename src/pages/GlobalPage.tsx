import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';

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
        {/* Hero - Text only */}
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-end bg-secondary/30">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Content */}
          <div className="relative w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 md:pb-24 pt-28 sm:pt-36 md:pt-44">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.p 
                className="caption mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Presence
              </motion.p>
              <h1 className="text-foreground mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
                India.<br />
                East Africa.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                Five locations across two countries, providing local support 
                and expertise to the printing and packaging industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* India */}
        <section className="py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-8 sm:mb-12">India</p>
            
            <div className="max-w-2xl">
              {locations.india.map((location, index) => (
                <motion.div 
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 15, transition: { duration: 0.3 } }}
                  className="py-5 sm:py-6 md:py-8 border-b border-border flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl text-foreground font-serif group-hover:text-primary transition-colors">
                    {location.city}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{location.role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Kenya */}
        <section className="border-t border-border py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-8 sm:mb-12">Kenya</p>
            
            <div className="max-w-2xl">
              {locations.kenya.map((location, index) => (
                <motion.div 
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 15, transition: { duration: 0.3 } }}
                  className="py-5 sm:py-6 md:py-8 border-b border-border flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl text-foreground font-serif group-hover:text-primary transition-colors">
                    {location.city}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{location.role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Reach statement */}
        <section className="py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
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
              Our presence in these strategic locations allows us to provide 
              rapid response, local expertise, and ongoing support.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Whether you're in Maharashtra or Mombasa, we're equipped to serve 
              your machinery needs with the same commitment to quality and service.
            </motion.p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h3 className="text-foreground mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-serif">
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
