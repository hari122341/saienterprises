import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { partnerBrands } from '@/data/products';

// Professional wordmark-style logos for each brand
const brandStyles: Record<string, { 
  wordmark: string; 
  weight: string;
  letterSpacing: string;
  accent?: boolean;
}> = {
  'Heidelberg': { wordmark: 'HEIDELBERG', weight: 'font-bold', letterSpacing: 'tracking-[0.15em]' },
  'Komori': { wordmark: 'KOMORI', weight: 'font-bold', letterSpacing: 'tracking-[0.2em]' },
  'Manroland': { wordmark: 'manroland', weight: 'font-medium', letterSpacing: 'tracking-[0.1em]' },
  'Mitsubishi': { wordmark: 'MITSUBISHI', weight: 'font-semibold', letterSpacing: 'tracking-[0.12em]' },
  'Müller Martini': { wordmark: 'MÜLLER MARTINI', weight: 'font-semibold', letterSpacing: 'tracking-[0.08em]', accent: true },
  'MBO': { wordmark: 'MBO', weight: 'font-black', letterSpacing: 'tracking-[0.25em]' },
  'HPM': { wordmark: 'HPM', weight: 'font-black', letterSpacing: 'tracking-[0.3em]', accent: true },
  'Kanefusa': { wordmark: 'KANEFUSA', weight: 'font-medium', letterSpacing: 'tracking-[0.15em]' },
};

const BrandPartnersSection = () => {
  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
            Our Partners
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            We work with the best.
          </h2>
        </motion.div>

        {/* Brand Marquee Wall */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling brands - Row 1 */}
          <div className="flex gap-8 md:gap-16 overflow-hidden mb-8">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-8 md:gap-16 shrink-0"
            >
              {[...partnerBrands, ...partnerBrands].map((brand, index) => {
                const style = brandStyles[brand.name] || { wordmark: brand.name.toUpperCase(), weight: 'font-medium', letterSpacing: 'tracking-wider' };
                return (
                  <div 
                    key={`${brand.name}-${index}`}
                    className="group shrink-0 py-6 px-4"
                  >
                    <span 
                      className={`
                        text-2xl md:text-3xl lg:text-4xl ${style.weight} ${style.letterSpacing}
                        text-muted-foreground/30 group-hover:text-primary
                        transition-colors duration-500 cursor-default whitespace-nowrap
                        ${style.accent ? 'text-primary/40' : ''}
                      `}
                    >
                      {style.wordmark}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Scrolling brands - Row 2 (reverse) */}
          <div className="flex gap-8 md:gap-16 overflow-hidden">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="flex gap-8 md:gap-16 shrink-0"
            >
              {[...partnerBrands.slice().reverse(), ...partnerBrands.slice().reverse()].map((brand, index) => {
                const style = brandStyles[brand.name] || { wordmark: brand.name.toUpperCase(), weight: 'font-medium', letterSpacing: 'tracking-wider' };
                return (
                  <div 
                    key={`${brand.name}-rev-${index}`}
                    className="group shrink-0 py-6 px-4"
                  >
                    <span 
                      className={`
                        text-xl md:text-2xl lg:text-3xl ${style.weight} ${style.letterSpacing}
                        text-muted-foreground/20 group-hover:text-primary
                        transition-colors duration-500 cursor-default whitespace-nowrap
                      `}
                    >
                      {style.wordmark}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Static brand grid with countries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 md:mt-24 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 max-w-4xl">
            {partnerBrands.map((brand, index) => {
              const style = brandStyles[brand.name] || { wordmark: brand.name.toUpperCase(), weight: 'font-medium', letterSpacing: 'tracking-wider' };
              return (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group text-center"
                >
                  <div className="mb-3">
                    <span 
                      className={`
                        text-xs md:text-sm ${style.weight} ${style.letterSpacing}
                        text-foreground group-hover:text-primary
                        transition-colors duration-300
                      `}
                    >
                      {style.wordmark}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {brand.country}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="font-serif text-lg md:text-xl text-muted-foreground italic max-w-md">
            Only genuine products from globally renowned manufacturers.
          </p>
          <Link
            to="/brands"
            className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">View all brands</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
