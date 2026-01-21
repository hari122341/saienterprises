import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import saiLogo from '@/assets/sai-logo.png';
import heroImage from '@/assets/hero-industrial.jpg';
import machineryPrepress from '@/assets/machinery-prepress.jpg';
import machineryDetail from '@/assets/machinery-detail.jpg';
import machineryPostpress from '@/assets/machinery-postpress.jpg';
import corrugationHero from '@/assets/corrugation-hero.jpg';

const disciplines = [
  { name: 'Pre-Press', href: '/machinery/pre-press', image: machineryPrepress },
  { name: 'Press', href: '/machinery/press', image: machineryDetail },
  { name: 'Post-Press', href: '/machinery/post-press', image: machineryPostpress },
  { name: 'Corrugation', href: '/machinery/corrugation', image: corrugationHero },
];

const trustPoints = [
  { value: '24+', label: 'Years of Experience' },
  { value: 'India & Kenya', label: 'Global Presence' },
  { value: 'New & Refurbished', label: 'Machinery Options' },
  { value: 'Heidelberg, Komori', label: 'Brand Partnerships' },
];

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            1️⃣ ARRIVAL - Full-height Hero with real imagery
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Background Image Layer - Color-graded industrial imagery */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
              style={{ 
                filter: 'saturate(0.7) brightness(0.85) contrast(1.05)',
              }}
            />
            {/* Overlay for text legibility - brand-aligned */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>

          {/* Hero Content */}
          <div className="relative px-8 md:px-16 lg:px-24 py-32">
            <div className="max-w-3xl">
              {/* Rounded Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-10"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
                  <img 
                    src={saiLogo} 
                    alt="Sai Enterprises" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Company Name - Caption style */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="caption mb-8"
              >
                Sai Enterprises — Graphic Machinery Suppliers
              </motion.p>

              {/* Primary Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-foreground mb-8 text-balance"
              >
                We believe in<br />
                long-term relationships.
              </motion.h1>

              {/* Supporting Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
              >
                24 years of excellence in graphic & corrugation machinery.
                Trusted across India and East Africa.
              </motion.p>

              {/* Two Understated CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <Link
                  to="/machinery"
                  className="btn-primary group"
                >
                  <span>Explore Machinery</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-quiet group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            2️⃣ DIRECTION - Disciplines with hover image reveals
        ═══════════════════════════════════════════════════════════════ */}
        <section className="border-t border-border bg-background">
          <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="caption mb-16"
            >
              What we do
            </motion.p>
            
            {/* Discipline cards with hover image reveal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {disciplines.map((discipline, index) => (
                <motion.div
                  key={discipline.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={discipline.href}
                    className="group block relative h-64 md:h-72 rounded-lg overflow-hidden"
                  >
                    {/* Background image - reveals on hover */}
                    <div className="absolute inset-0">
                      <img 
                        src={discipline.image} 
                        alt={discipline.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        style={{ filter: 'saturate(0.7) brightness(0.4)' }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Default state - subtle background */}
                    <div className="absolute inset-0 bg-secondary group-hover:opacity-0 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 
                        className="text-2xl md:text-3xl text-foreground group-hover:text-primary-foreground transition-colors duration-500 mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {discipline.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            3️⃣ TRUST SNAPSHOT - Credibility without cards
        ═══════════════════════════════════════════════════════════════ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust points with subtle separators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {trustPoints.map((point, index) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative lg:text-center"
                  >
                    {/* Vertical separator on larger screens */}
                    {index > 0 && (
                      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                    )}
                    
                    <p 
                      className="text-2xl md:text-3xl text-foreground mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {point.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                      {point.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            4️⃣ EXIT CTA - One calm line
        ═══════════════════════════════════════════════════════════════ */}
        <section className="border-t border-border bg-background">
          <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-foreground mb-8">
                Explore our complete machinery range
              </h2>
              <Link
                to="/machinery"
                className="btn-quiet group inline-flex"
              >
                <span>View All Machinery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
