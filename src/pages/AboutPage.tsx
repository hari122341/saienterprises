import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { companyInfo } from '@/data/products';
import aboutImage from '@/assets/about-locations.jpg';

const locations = [
  { city: 'Hyderabad', role: 'Head Office', country: 'India' },
  { city: 'New Delhi', role: 'Branch', country: 'India' },
  { city: 'Pune', role: 'Branch', country: 'India' },
  { city: 'Vijayawada', role: 'Branch', country: 'India' },
  { city: 'Nairobi', role: 'East Africa Office', country: 'Kenya' },
];

const services = [
  'Expert Consultancy',
  'Installation & Commissioning',
  'Technical Support',
  'New Machinery',
  'Refurbished Machinery',
  'Spare Parts',
];

const AboutPage = () => {
  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img 
              src={aboutImage} 
              alt="" 
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.7) brightness(0.85) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 md:pb-24">
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
                About
              </motion.p>
              <h1 className="text-foreground mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
                We've been here<br />
                long enough.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                {companyInfo.experience} of excellence in graphic and corrugation machinery. 
                Building long-term relationships across India and East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story - Calm Narrative */}
        <section className="py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.p 
                className="text-foreground text-lg sm:text-xl md:text-2xl leading-relaxed font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Sai Enterprises was founded with a simple belief: the printing and packaging 
                industry deserves a trusted partner who understands their needs and stands 
                by them through every decision.
              </motion.p>
              <motion.p 
                className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Over two decades later, that belief remains at the core of everything we do. 
                We provide not just machinery, but expertise, helping businesses choose the 
                right equipment, install it properly, and maintain it throughout its lifecycle.
              </motion.p>
              <motion.p 
                className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                From pre-press to corrugation, from new installations to refurbished solutions, 
                we offer the complete range of graphic machinery with the technical knowledge 
                and after-sales support that serious buyers expect.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services - Simple List */}
        <section className="border-t border-border py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-8 sm:mb-12">What we do</p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-0 max-w-3xl">
              {services.map((service, index) => (
                <motion.div 
                  key={service}
                  className="py-4 sm:py-5 border-b border-border text-foreground text-base sm:text-lg font-serif"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Locations - Editorial List */}
        <section className="border-t border-border py-14 sm:py-20 md:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-8 sm:mb-12">Locations</p>
            
            <div className="max-w-3xl">
              {locations.map((location, index) => (
                <motion.div 
                  key={location.city}
                  className="py-4 sm:py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <span className="text-lg sm:text-xl md:text-2xl text-foreground font-serif">
                    {location.city}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm text-muted-foreground">{location.role}</span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{location.country}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to work with us?
            </h3>
            <Link
              to="/contact"
              className="btn-primary group inline-flex"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default AboutPage;
