import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Printer, Scissors, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productCategories } from '@/data/products';

const categoryData = [
  { 
    id: 'pre-press', 
    name: 'Pre-Press', 
    icon: Layers,
    description: 'Plate making, exposure, and imaging solutions for professional print preparation. Everything you need before the printing process begins.',
    problems: ['Plate exposure and processing', 'CTP and CTCP systems', 'Film separation and imaging'],
    href: '/machinery/pre-press',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'press', 
    name: 'Press', 
    icon: Printer,
    description: 'Offset and digital printing machinery from world-renowned manufacturers including Heidelberg, Komori, and Manroland.',
    problems: ['Sheet-fed offset printing', 'Web offset for high volumes', 'Digital printing solutions'],
    href: '/machinery/press',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'post-press', 
    name: 'Post-Press', 
    icon: Scissors,
    description: 'Complete finishing solutions including cutting, binding, lamination, coating, die-cutting, and packaging.',
    problems: ['Cutting and trimming', 'Binding and stitching', 'Lamination and coating', 'Die cutting and foiling'],
    href: '/machinery/post-press',
    color: 'from-orange-500 to-red-500'
  },
  { 
    id: 'corrugation', 
    name: 'Corrugation', 
    icon: Package,
    description: 'Heavy-duty corrugation machinery for the packaging industry. Built for scale and reliability.',
    problems: ['Board cutting and slitting', 'Die cutting for corrugated', 'High-volume production'],
    href: '/machinery/corrugation',
    color: 'from-green-500 to-emerald-500'
  },
];

const MachineryHub = () => {
  // Get product counts
  const getCategoryCount = (categoryId: string) => {
    const category = productCategories.find(c => c.id === categoryId);
    return category?.products.length || 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-16 bg-secondary/30 border-b border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="micro-label text-primary mb-4 block">Our Products</span>
              <h1 className="text-foreground mb-4">Machinery Hub</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore our complete range of printing and packaging machinery solutions. 
                From pre-press to corrugation, we have everything you need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Blocks */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {categoryData.map((category, index) => {
                const Icon = category.icon;
                const productCount = getCategoryCount(category.id);
                
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
                      className="group block h-full p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-industrial-lg transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </h2>
                            <span className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                              {productCount} machines
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-6">
                            {category.description}
                          </p>
                          
                          {/* Problems solved */}
                          <div className="mb-6">
                            <p className="text-sm font-medium text-foreground mb-2">Solutions for:</p>
                            <div className="flex flex-wrap gap-2">
                              {category.problems.map((problem) => (
                                <span 
                                  key={problem}
                                  className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-lg"
                                >
                                  {problem}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-2 text-primary font-medium">
                            View Machines
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-muted-foreground text-sm">Machine Types</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">8+</div>
                <div className="text-muted-foreground text-sm">Global Brands</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">24+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">5</div>
                <div className="text-muted-foreground text-sm">Service Locations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding-sm">
          <div className="container-wide">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-primary-foreground mb-4">Need Help Choosing?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Our team provides expert consultancy to help you find the right machinery for your requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MachineryHub;
