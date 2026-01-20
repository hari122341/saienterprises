import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  { name: 'Pre-Press', href: '/machinery/pre-press' },
  { name: 'Press', href: '/machinery/press' },
  { name: 'Post-Press', href: '/machinery/post-press' },
  { name: 'Corrugation', href: '/machinery/corrugation' },
];

const Index = () => {
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
        {/* Hero - Quiet, full-height intro */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            {/* Small confident logo/name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="caption mb-12 md:mb-16"
            >
              Sai Enterprises
            </motion.p>

            {/* Main statement */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-foreground mb-8"
            >
              We believe in<br />
              long-term relationships.
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-16"
            >
              24 years of excellence in graphic & corrugation machinery.
              India and East Africa.
            </motion.p>

            {/* Two understated links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-12"
            >
              <Link
                to="/machinery"
                className="btn-quiet group"
              >
                <span>Machinery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-quiet group"
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Horizontal divider with category words */}
        <section className="border-t border-border">
          <div className="px-8 md:px-16 lg:px-24 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-start md:justify-between gap-8 md:gap-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={category.href}
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground hover:text-muted-foreground transition-colors"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {category.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;