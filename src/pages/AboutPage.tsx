import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
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
        {/* Hero Section with Image */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={aboutImage} 
              alt="" 
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.7) brightness(0.85) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative w-full px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="caption mb-6">About</p>
              <h1 className="text-foreground mb-8">
                We've been here<br />
                long enough.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                {companyInfo.experience} of excellence in graphic and corrugation machinery. 
                Building long-term relationships across India and East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story - Calm Narrative */}
        <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-foreground text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Sai Enterprises was founded with a simple belief: the printing and packaging 
                industry deserves a trusted partner who understands their needs and stands 
                by them through every decision.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Over two decades later, that belief remains at the core of everything we do. 
                We provide not just machinery, but expertise—helping businesses choose the 
                right equipment, install it properly, and maintain it throughout its lifecycle.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From pre-press to corrugation, from new installations to refurbished solutions, 
                we offer the complete range of graphic machinery with the technical knowledge 
                and after-sales support that serious buyers expect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services - Simple List */}
        <section className="border-t border-border py-20 md:py-28 px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">What we do</p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-3xl">
              {services.map((service) => (
                <div 
                  key={service}
                  className="py-5 border-b border-border text-foreground text-lg"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Locations - Editorial List */}
        <section className="border-t border-border py-20 md:py-28 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-12">Locations</p>
            
            <div className="max-w-3xl">
              {locations.map((location) => (
                <div 
                  key={location.city}
                  className="py-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-2"
                >
                  <span 
                    className="text-xl md:text-2xl text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {location.city}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{location.role}</span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="text-sm text-muted-foreground">{location.country}</span>
                  </div>
                </div>
              ))}
            </div>
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
    </motion.div>
  );
};

export default AboutPage;
