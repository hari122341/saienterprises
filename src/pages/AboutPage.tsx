import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Wrench, Users, HeartHandshake, Building2, Globe, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo } from '@/data/products';

const services = [
  { icon: Briefcase, title: 'Expert Consultancy', description: 'Thorough guidance before every purchase to ensure you get the right machinery for your needs.' },
  { icon: Wrench, title: 'Installation & Commissioning', description: 'Professional setup by experienced technicians for seamless production startup.' },
  { icon: Users, title: 'Ongoing Support', description: 'Dedicated service and support throughout the machine lifecycle.' },
  { icon: HeartHandshake, title: 'Long-term Partnership', description: 'We grow together with our clients as their trusted machinery partner.' },
];

const timeline = [
  { year: '2000', event: 'Established in Hyderabad with a vision for excellence in graphic machinery' },
  { year: '2005', event: 'Expanded operations to New Delhi and Pune' },
  { year: '2010', event: 'Extended presence to Vijayawada, Andhra Pradesh' },
  { year: '2015', event: 'Opened overseas branch in Nairobi, Kenya' },
  { year: 'Today', event: '24+ years serving the printing & packaging industry with trust and expertise' },
];

const AboutPage = () => {
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
              <span className="micro-label text-primary mb-4 block">Our Story</span>
              <h1 className="text-foreground mb-4">About Sai Enterprises</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A trusted name in graphic machinery supply with over two decades of industry expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding-sm">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a commitment to building <span className="text-foreground font-medium">long-term relationships</span>, 
                    Sai Enterprises has grown to become a leading supplier of graphic and corrugation machinery 
                    across India and Africa.
                  </p>
                  <p>
                    With over <span className="text-foreground font-medium">24 years of experience</span>, we have 
                    established ourselves as a trusted partner for printing and packaging businesses looking for 
                    quality machinery solutions.
                  </p>
                  <p>
                    We undertake consultancy for printing machines, installation of pre-owned and new printing 
                    machines, and supply of the latest post-press equipment from globally renowned brands.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Timeline</h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={item.year} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding-sm bg-secondary/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="micro-label text-primary mb-3 block">What We Do</span>
              <h2 className="text-foreground">Our Services</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding-sm">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="micro-label text-primary mb-3 block">Where We Operate</span>
              <h2 className="text-foreground">Our Locations</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Head Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-primary text-primary-foreground text-center col-span-1 sm:col-span-2 lg:col-span-1"
              >
                <Building2 className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-1">{companyInfo.locations.headquarters.city}</h4>
                <p className="text-sm opacity-80">{companyInfo.locations.headquarters.state}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded text-xs">
                  Head Office
                </span>
              </motion.div>

              {/* Branches */}
              {companyInfo.locations.branches.map((branch, index) => (
                <motion.div
                  key={branch.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <MapPin className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold text-foreground mb-1">{branch.city}</h4>
                  <p className="text-sm text-muted-foreground">{branch.state}</p>
                </motion.div>
              ))}

              {/* Overseas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-accent text-accent-foreground text-center"
              >
                <Globe className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-1">{companyInfo.locations.overseas.city}</h4>
                <p className="text-sm opacity-80">{companyInfo.locations.overseas.country}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded text-xs">
                  Overseas
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-premium">
          <div className="container-wide text-center">
            <h2 className="text-white mb-4">Let's Work Together</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Partner with us for your machinery needs and experience the Sai Enterprises difference.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
