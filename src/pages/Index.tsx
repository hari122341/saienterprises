import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import saiLogo from '@/assets/sai-logo.png';
import heroImage from '@/assets/hero-industrial.jpg';

const disciplines = [
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
        {/* 1️⃣ ARRIVAL - Hero with background image */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          {/* Content */}
          <div className="relative container-full py-32">
            <div className="max-w-4xl">
              {/* Rounded Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-primary/20">
                  <img 
                    src={saiLogo} 
                    alt="Sai Enterprises" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Company Name - calmly written */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="caption mb-6"
              >
                Sai Enterprises — Graphic Machinery Suppliers
              </motion.p>

              {/* One strong sentence */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground mb-6"
              >
                We believe in<br />
                long-term relationships.
              </motion.h1>

              {/* Supporting line */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12"
              >
                24 years of excellence in graphic & corrugation machinery.
                Trusted across India and East Africa.
              </motion.p>

              {/* Two understated actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8"
              >
                <Link
                  to="/machinery"
                  className="btn-primary group"
                >
                  <span>Explore Machinery</span>
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
          </div>
        </section>

        {/* 2️⃣ DIRECTION - Four disciplines spaced apart */}
        <section className="border-t border-border">
          <div className="container-full py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
            >
              {disciplines.map((discipline, index) => (
                <motion.div
                  key={discipline.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={discipline.href}
                    className="group block"
                  >
                    <h3 
                      className="text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      {discipline.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3️⃣ TRUST - Quiet, not loud */}
        <section className="border-t border-border bg-secondary/30">
          <div className="container-full py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
            >
              <div className="trust-item text-left md:text-center">
                <p className="value">24+</p>
                <p className="label">Years of Excellence</p>
              </div>
              <div className="trust-item text-left md:text-center">
                <p className="value">India & Kenya</p>
                <p className="label">Global Presence</p>
              </div>
              <div className="trust-item text-left md:text-center">
                <p className="value">Heidelberg, Komori</p>
                <p className="label">Premium Partnerships</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4️⃣ EXIT CTA - One clear line */}
        <section className="border-t border-border">
          <div className="container-full py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-foreground mb-6">
                Explore our machinery solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                From pre-press to corrugation, discover equipment that delivers precision and reliability.
              </p>
              <Link
                to="/machinery"
                className="btn-quiet group"
              >
                <span>View All Machinery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
