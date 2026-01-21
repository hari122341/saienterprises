import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { partnerBrands } from '@/data/products';

// Brand logo components - clean typographic treatment
const BrandLogo = ({ name, country }: { name: string; country: string }) => {
  const getLogoStyle = (brandName: string) => {
    switch (brandName) {
      case 'Heidelberg':
        return 'font-bold tracking-tight';
      case 'Komori':
        return 'font-bold tracking-wide';
      case 'Manroland':
        return 'font-medium tracking-normal';
      case 'Mitsubishi':
        return 'font-bold tracking-wider';
      case 'Müller Martini':
        return 'font-semibold tracking-normal';
      case 'MBO':
        return 'font-black tracking-widest';
      case 'HPM':
        return 'font-black tracking-wider';
      case 'Kanefusa':
        return 'font-semibold tracking-wide';
      default:
        return 'font-bold';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className={`text-2xl sm:text-3xl text-foreground ${getLogoStyle(name)}`}>
        {name}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {country}
      </span>
    </div>
  );
};

const BrandsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[50vh] flex items-end bg-secondary/30 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <motion.div 
            className="relative w-full px-6 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-28 sm:pt-36"
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Partners
              </span>
              <h1 className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
                Brands we <span className="text-primary italic">trust.</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed">
                World-class manufacturers delivering quality and reliability.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Brand Logos Grid */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="aspect-square border border-border hover:border-primary/30 bg-background hover:bg-secondary/30 transition-all duration-300 flex items-center justify-center p-4"
                >
                  <BrandLogo name={brand.name} country={brand.country} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HPM Exclusive */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Exclusive Partnership
                </span>
                <Star className="w-4 h-4 text-primary-foreground/60" />
              </div>
              
              <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary-foreground tracking-wider mb-4">
                HPM
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-md mx-auto">
                Sole authorized agent for HPM paper cutting systems in India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Note */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Quality Assurance
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="text-foreground mb-6 text-2xl sm:text-3xl font-serif">
              Looking for specific machinery?
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
            >
              <span className="text-sm font-medium">Contact us</span>
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
