import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { companyInfo } from '@/data/products';

const milestones = [
  { year: '2000', title: 'Founded', description: 'Started operations in Hyderabad' },
  { year: '2005', title: 'Expansion', description: 'Opened Delhi and Pune branches' },
  { year: '2012', title: 'International', description: 'Established Kenya office' },
  { year: '2018', title: 'HPM Partnership', description: 'Became sole agent for India' },
  { year: '2024', title: 'Today', description: '500+ clients across 2 continents' },
];

const services = [
  { title: 'Expert Consultancy', description: 'Guidance before every purchase decision' },
  { title: 'Installation', description: 'Complete setup and commissioning' },
  { title: 'Technical Support', description: 'Ongoing maintenance and service' },
  { title: 'New Machinery', description: 'Latest equipment from top brands' },
  { title: 'Refurbished Options', description: 'Quality pre-owned alternatives' },
  { title: 'Spare Parts', description: 'Genuine components and consumables' },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-end bg-secondary/30 overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.div 
            className="relative w-full px-6 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20 md:pb-28 pt-32 sm:pt-40"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-8 h-px bg-primary" />
                About
              </motion.span>
              <h1 className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                We've been here<br />
                <span className="text-primary italic">long enough.</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed">
                {companyInfo.experience} of excellence in graphic and corrugation machinery. 
                Building long-term relationships across India and East Africa.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight mb-6">
                A belief that became<br />
                <span className="text-primary italic">a business.</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-foreground text-lg leading-relaxed font-serif">
                Sai Enterprises was founded with a simple belief: the printing and packaging 
                industry deserves a trusted partner who understands their needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over two decades later, that belief remains at the core of everything we do. 
                We provide not just machinery, but expertise, helping businesses choose the 
                right equipment, install it properly, and maintain it throughout its lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From pre-press to corrugation, from new installations to refurbished solutions, 
                we offer the complete range with the technical knowledge that serious buyers expect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 sm:py-28 bg-secondary/30">
          <div className="px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 sm:mb-16"
              >
                <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                  <span className="w-8 h-px bg-primary" />
                  Journey
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                  Key <span className="text-primary italic">milestones.</span>
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background p-6 hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <span className="font-serif text-3xl text-primary mb-3 block">{milestone.year}</span>
                    <h3 className="font-medium text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Complete <span className="text-primary italic">solutions.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 sm:py-28 bg-foreground">
          <div className="px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                  <span className="w-8 h-px bg-primary" />
                  Locations
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-background">
                  Where we <span className="text-primary italic">operate.</span>
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary p-6"
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50 mb-2 block">
                    Headquarters
                  </span>
                  <h3 className="font-serif text-2xl text-primary-foreground mb-1">Hyderabad</h3>
                  <p className="text-primary-foreground/60 text-sm">Telangana, India</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-background/10 border border-background/20 p-6"
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] text-background/40 mb-2 block">
                    International
                  </span>
                  <h3 className="font-serif text-2xl text-background mb-1">Nairobi</h3>
                  <p className="text-background/50 text-sm">Kenya</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-background/5 p-6"
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] text-background/40 mb-2 block">
                    Branches
                  </span>
                  <p className="text-background/70 text-sm leading-relaxed">
                    New Delhi · Pune · Vijayawada
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="text-foreground mb-6 text-2xl sm:text-3xl font-serif">
              Ready to work with us?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can support your printing and packaging needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group"
            >
              <span className="text-sm font-medium">Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default AboutPage;
