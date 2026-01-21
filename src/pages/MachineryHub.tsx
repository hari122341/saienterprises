import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { productCategories } from '@/data/products';
import machineryPrepress from '@/assets/machinery-prepress.jpg';
import machineryDetail from '@/assets/machinery-detail.jpg';
import machineryPostpress from '@/assets/machinery-postpress.jpg';
import corrugationHero from '@/assets/corrugation-hero.jpg';

const categories = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press',
    tagline: 'Plate making, exposure & imaging solutions for precision preparation.',
    href: '/machinery/pre-press',
    image: machineryPrepress,
  },
  { 
    id: 'press', 
    name: 'Press',
    tagline: 'Offset & digital printing machinery for high-quality production.',
    href: '/machinery/press',
    image: machineryDetail,
  },
  { 
    id: 'post-press', 
    name: 'Post-Press',
    tagline: 'Cutting, binding & finishing solutions for professional output.',
    href: '/machinery/post-press',
    image: machineryPostpress,
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation',
    tagline: 'Heavy-duty packaging machinery for industrial-scale operations.',
    href: '/machinery/corrugation',
    image: corrugationHero,
  },
];

const MachineryHub = () => {
  const getCategoryCount = (categoryId: string) => {
    const category = productCategories.find(c => c.id === categoryId);
    return category?.products.length || 0;
  };

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Page Intro */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-6">Machinery</p>
            <h1 className="text-foreground mb-8">
              Choose a discipline.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Complete range of printing and packaging machinery solutions.
              Each discipline represents decades of expertise and trusted partnerships.
            </p>
          </motion.div>
        </section>

        {/* Category Sections - One per visual frame */}
        {categories.map((category, index) => {
          const count = getCategoryCount(category.id);
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={category.id}
              className="relative min-h-[80vh] md:min-h-screen flex items-center border-t border-border overflow-hidden"
            >
              {/* Background Image - Color graded */}
              <div className={`absolute inset-0 ${isEven ? 'md:right-1/3' : 'md:left-1/3 md:right-0'} md:w-2/3`}>
                <img 
                  src={category.image} 
                  alt="" 
                  className="w-full h-full object-cover opacity-20 md:opacity-30"
                  style={{ 
                    filter: 'saturate(0.6) brightness(0.9) contrast(1.05)',
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-background via-background/90 to-transparent' : 'from-transparent via-background/90 to-background'}`} />
              </div>

              {/* Content */}
              <div className="relative w-full px-8 md:px-16 lg:px-24 py-20">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8 }}
                  className={`max-w-2xl ${isEven ? '' : 'md:ml-auto'}`}
                >
                  {/* Number */}
                  <p className="caption mb-8 text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  
                  <Link 
                    to={category.href}
                    className="group block"
                  >
                    {/* Category Name */}
                    <h2 
                      className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 group-hover:text-primary transition-colors duration-500"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1 }}
                    >
                      {category.name}
                    </h2>
                    
                    {/* Tagline */}
                    <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-md leading-relaxed">
                      {category.tagline}
                    </p>
                    
                    {/* Meta + CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        {count} machines available
                      </p>
                      <div className="flex items-center gap-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Contact CTA */}
        <section className="border-t border-border py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-secondary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="caption mb-6">Need guidance?</p>
            <h3 className="text-foreground mb-8">
              Our team provides expert consultancy for your specific requirements.
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

export default MachineryHub;
