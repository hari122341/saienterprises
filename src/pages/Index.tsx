import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Printer, Scissors, Package, MapPin, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PremiumLoader from '@/components/PremiumLoader';
import saiLogo from '@/assets/sai-logo.png';
import { partnerBrands } from '@/data/products';

const categories = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press', 
    icon: Layers,
    description: 'Plate making, exposure & imaging solutions',
    href: '/machinery/pre-press'
  },
  { 
    id: 'press', 
    name: 'Press', 
    icon: Printer,
    description: 'Offset & digital printing machinery',
    href: '/machinery/press'
  },
  { 
    id: 'post-press', 
    name: 'Post-Press', 
    icon: Scissors,
    description: 'Cutting, binding, lamination & finishing',
    href: '/machinery/post-press'
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation', 
    icon: Package,
    description: 'Heavy-duty corrugation machinery',
    href: '/machinery/corrugation'
  },
];

const whyUs = [
  { title: 'Expert Consultancy', description: 'Thorough guidance before every purchase' },
  { title: 'Installation & Commissioning', description: 'Professional setup by experienced technicians' },
  { title: 'Ongoing Support', description: 'Dedicated service throughout machine lifecycle' },
  { title: 'New & Refurbished Options', description: 'Quality machinery at competitive prices' },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <PremiumLoader onComplete={() => setIsLoading(false)} minimumDuration={2200} />
      )}
      <div className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Header />
        
        <main>
          {/* HERO SECTION */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-premium">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 blueprint-grid opacity-30" />
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />

            <div className="relative z-10 container-wide text-center pt-24 pb-20">
              {/* Logo */}
              <motion.img
                src={saiLogo}
                alt="Sai Enterprises"
                className="h-20 md:h-24 mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Headline */}
              <motion.h1 
                className="text-white mb-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="block text-white/90">We Believe in</span>
                <span className="block text-gradient-gold mt-2">Long-Term Relationships</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                24+ Years of Excellence in Graphic & Corrugation Machinery
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  to="/machinery"
                  className="group px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-industrial-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Explore Machinery
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  Request Consultation
                </Link>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/40"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </section>

          {/* WHY SAI ENTERPRISES */}
          <section className="section-padding-sm bg-background">
            <div className="container-wide">
              <div className="text-center mb-12">
                <span className="micro-label text-primary mb-3 block">Why Choose Us</span>
                <h2 className="text-foreground">Why Sai Enterprises?</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-industrial transition-all"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* MACHINERY OVERVIEW */}
          <section className="section-padding-sm bg-secondary/30">
            <div className="container-wide">
              <div className="text-center mb-12">
                <span className="micro-label text-primary mb-3 block">Our Products</span>
                <h2 className="text-foreground mb-4">Machinery Categories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Complete range of printing and packaging machinery solutions
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={category.href}
                        className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-industrial-lg transition-all"
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {category.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                          View Machines
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/machinery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View All Machinery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* BRANDS STRIP */}
          <section className="py-12 bg-card border-y border-border">
            <div className="container-wide">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="micro-label text-primary mb-2 block">Trusted Partners</span>
                  <h3 className="text-xl font-bold text-foreground">World-Class Brands</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  {partnerBrands.slice(0, 6).map((brand) => (
                    <motion.span
                      key={brand.name}
                      className="text-lg font-bold text-muted-foreground/60 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {brand.name}
                    </motion.span>
                  ))}
                </div>
                <Link
                  to="/brands"
                  className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* QUICK GLOBAL PRESENCE */}
          <section className="section-padding-sm bg-background">
            <div className="container-wide">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="micro-label text-primary mb-3 block">Our Reach</span>
                  <h2 className="text-foreground mb-4">Global Presence</h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Serving the printing and packaging industry across India and Africa with 5 strategic locations.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">India</span>
                      <span className="text-sm opacity-80">4 Cities</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">Kenya</span>
                      <span className="text-sm opacity-80">Nairobi</span>
                    </div>
                  </div>
                  <Link
                    to="/global"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View Full Global Presence
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">5</div>
                    <div className="text-muted-foreground">Locations</div>
                    <div className="text-sm text-muted-foreground mt-1">2 Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRIMARY CTA */}
          <section className="py-16 gradient-premium">
            <div className="container-wide text-center">
              <h2 className="text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Our team provides technical guidance and suitable machinery solutions for your requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
