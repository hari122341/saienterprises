import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { partnerBrands } from '@/data/products';

const BrandsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInView = useInView(marqueeRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  // Create duplicated brands for marquee
  const duplicatedBrands = [...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32"
            style={{ opacity: heroOpacity, y: heroY }}
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
              className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Brands we <span className="text-primary italic">trust.</span>
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              World-class manufacturers delivering quality and reliability.
            </motion.p>
          </motion.div>
        </section>

        {/* Scrolling Marquee - Row 1 */}
        <section ref={marqueeRef} className="py-16 sm:py-20 overflow-hidden bg-background">
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-12 sm:gap-20"
              animate={marqueeInView ? { x: ['0%', '-33.33%'] } : {}}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`row1-${brand.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Logo Typography */}
                  <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap tracking-tight">
                    {brand.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {brand.country}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scrolling Marquee - Row 2 (Reverse) */}
        <section className="pb-16 sm:pb-20 overflow-hidden bg-background">
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-12 sm:gap-20"
              animate={marqueeInView ? { x: ['-33.33%', '0%'] } : {}}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`row2-${brand.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Logo Typography */}
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground/30 group-hover:text-primary/60 transition-colors whitespace-nowrap italic">
                    {brand.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mt-2">
                    {brand.country}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HPM Exclusive */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <Star className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Exclusive Partnership
                </span>
                <Star className="w-4 h-4 text-primary-foreground/60" />
              </div>
              
              <motion.h2 
                className="font-black text-5xl sm:text-6xl md:text-7xl text-primary-foreground tracking-wider mb-4"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                HPM
              </motion.h2>
              <p className="text-primary-foreground/70 text-lg sm:text-xl">
                Sole authorized agent for HPM in India
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Grid */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Partners
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                All <span className="text-primary italic">brands.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="aspect-square border border-border hover:border-primary/30 bg-background hover:bg-secondary/30 transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-6 group"
                >
                  <span className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors text-center">
                    {brand.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-2">
                    {brand.country}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Note */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Quality Assurance
              <span className="w-8 h-px bg-primary" />
            </span>
            <p className="text-foreground text-xl sm:text-2xl leading-relaxed mb-4 font-serif">
              Each brand we represent has been selected for their commitment to 
              precision engineering, reliability, and long-term value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you choose machinery through Sai Enterprises, you're choosing quality 
              backed by decades of industry experience.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-foreground mb-6 text-2xl sm:text-3xl font-serif">
              Looking for specific machinery?
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors group"
            >
              <span className="font-medium">Contact us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default BrandsPage;
