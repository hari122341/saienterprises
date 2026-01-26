import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { partnerBrands } from '@/data/products';

const PartnersPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const brandsInView = useInView(brandsRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-foreground overflow-hidden">
          {/* Animated gradient glow */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32"
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          >
            <motion.span
              className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-primary" />
              Partners
              <span className="w-8 h-px bg-primary" />
            </motion.span>
            
            <motion.h1 
              className="text-background mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Brands we <span className="text-primary italic">trust.</span>
            </motion.h1>
            
            <motion.p 
              className="text-background/60 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              World-class manufacturers delivering quality and reliability.
            </motion.p>
          </motion.div>
        </section>

        {/* Brand Grid - Single, Clean Layout */}
        <section ref={brandsRef} className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={brandsInView ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                Partners
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Our <span className="text-primary italic">partners.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={brandsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.06, 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative aspect-[4/3] min-h-[140px] sm:min-h-[160px] border border-border hover:border-primary/30 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 flex flex-col items-center justify-center p-6 sm:p-8 cursor-default"
                >
                  <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300 block mb-3">
                    {brand.name}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {brand.country}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HPM Exclusive Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-primary overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <Star className="w-4 h-4 text-primary-foreground/40" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
                  Exclusive Partnership
                </span>
                <Star className="w-4 h-4 text-primary-foreground/40" />
              </div>
              
              <motion.h2 
                className="font-black text-5xl sm:text-6xl md:text-7xl text-primary-foreground tracking-wider mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                HPM
              </motion.h2>
              
              <p className="text-primary-foreground/70 text-lg sm:text-xl max-w-md mx-auto">
                Sole authorized agent for HPM in India
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Get Started
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h3 className="text-foreground mb-8 text-2xl sm:text-3xl md:text-4xl font-serif">
              Looking for specific machinery?
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all group rounded-full"
              >
                <span className="font-medium">Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default PartnersPage;
