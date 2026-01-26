import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { companyInfo } from '@/data/products';

const milestones = [
  { year: '2000', title: 'Foundation', description: 'Established in Hyderabad with a vision to serve the printing industry.' },
  { year: '2005', title: 'National Expansion', description: 'Opened branch offices in New Delhi and Pune.' },
  { year: '2012', title: 'Going International', description: 'Established our overseas office in Nairobi, Kenya.' },
  { year: '2018', title: 'HPM Partnership', description: 'Became the sole authorized agent for HPM in India.' },
  { year: 'Now', title: '24+ Years Strong', description: '500+ satisfied clients across two continents.' },
];

const services = [
  { title: 'Expert Consultancy', description: 'Guidance before every purchase' },
  { title: 'Installation & Setup', description: 'Complete commissioning support' },
  { title: 'Technical Support', description: 'Ongoing maintenance services' },
  { title: 'New Machinery', description: 'Latest equipment from top brands' },
  { title: 'Refurbished Options', description: 'Quality pre-owned alternatives' },
  { title: 'Genuine Spare Parts', description: 'Authentic components always' },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroProgress, [0, 0.5], [0, 100]);

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
          {/* Subtle ambient glow */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32 pb-20"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <motion.span
              className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-primary" />
              About Us
              <span className="w-8 h-px bg-primary" />
            </motion.span>
            
            <motion.h1 
              className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We've been here<br />
              <span className="text-primary italic">long enough.</span>
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {companyInfo.experience} of excellence in graphic and corrugation machinery. 
              Building long-term relationships across India and East Africa.
            </motion.p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-14 sm:py-18 md:py-24 px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-6">
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
              <p className="text-foreground text-lg sm:text-xl leading-relaxed font-serif">
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

        {/* Animated Timeline */}
        <section ref={timelineRef} className="py-16 sm:py-20 md:py-24 bg-foreground overflow-hidden">
          <div className="px-6 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 sm:mb-12 md:mb-16"
              >
                <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                  <span className="w-8 h-px bg-primary" />
                  Our Journey
                  <span className="w-8 h-px bg-primary" />
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background">
                  Key <span className="text-primary italic">milestones.</span>
                </h2>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                {/* Animated line - centered on all screen sizes */}
                <motion.div 
                  className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-background/20"
                  initial={{ scaleY: 0 }}
                  animate={timelineInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ originY: 0 }}
                />
                <motion.div 
                  className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-primary"
                  initial={{ height: 0 }}
                  animate={timelineInView ? { height: "100%" } : {}}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                />

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                  {milestones.map((milestone, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, y: 30 }}
                        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.4 + index * 0.15,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative pl-10 sm:pl-14 md:pl-0"
                      >
                        {/* Dot - always on the left for mobile, centered for desktop */}
                        <motion.div 
                          className="absolute left-0 sm:left-2 md:left-1/2 md:-translate-x-1/2 top-0"
                          initial={{ scale: 0 }}
                          animate={timelineInView ? { scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.6 + index * 0.15,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            milestone.year === 'Now' 
                              ? 'bg-primary' 
                              : 'bg-background/10 border border-background/30'
                          }`}>
                            <motion.div 
                              className={`w-2.5 h-2.5 rounded-full ${
                                milestone.year === 'Now' 
                                  ? 'bg-primary-foreground' 
                                  : 'bg-primary'
                              }`}
                              animate={milestone.year === 'Now' ? { 
                                scale: [1, 1.5, 1],
                              } : {}}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                        </motion.div>

                        {/* Content - stacks on mobile, alternates on desktop */}
                        <div className={`md:grid md:grid-cols-2 md:gap-8`}>
                          <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                            <motion.div
                              whileHover={{ x: isEven ? -4 : 4 }}
                              transition={{ duration: 0.2 }}
                              className="bg-background/5 p-4 sm:p-5 md:p-6 border border-background/10 hover:border-primary/30 transition-colors"
                            >
                              <span className={`inline-block text-xs sm:text-sm font-bold tracking-wider mb-2 ${
                                milestone.year === 'Now' 
                                  ? 'text-primary' 
                                  : 'text-background/50'
                              }`}>
                                {milestone.year}
                              </span>
                              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-background mb-1 sm:mb-2">
                                {milestone.title}
                              </h3>
                              <p className="text-background/60 text-xs sm:text-sm md:text-base leading-relaxed">
                                {milestone.description}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Premium Grid */}
        <section className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 sm:mb-20"
            >
              <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                What We Do
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Complete <span className="text-primary italic">solutions.</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                End-to-end support for your printing and packaging machinery needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 sm:p-8 bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500"
                >
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-6xl font-serif text-primary/5 group-hover:text-primary/10 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05, type: "spring" }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  
                  {/* Hover accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 sm:py-28 bg-primary">
          <div className="px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-4">
                  <span className="w-8 h-px bg-primary-foreground/30" />
                  Locations
                  <span className="w-8 h-px bg-primary-foreground/30" />
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-primary-foreground">
                  Where we <span className="italic">operate.</span>
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm p-6 text-center border border-primary-foreground/20"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50 block mb-2">
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
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/5 p-6 text-center border border-primary-foreground/10"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50 block mb-2">
                    International
                  </span>
                  <h3 className="font-serif text-2xl text-primary-foreground mb-1">Nairobi</h3>
                  <p className="text-primary-foreground/60 text-sm">Kenya, East Africa</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/5 p-6 text-center border border-primary-foreground/10"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50 block mb-2">
                    Branch Offices
                  </span>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
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
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-foreground mb-6 text-3xl sm:text-4xl font-serif">
              Ready to work with us?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can support your printing and packaging needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors group"
            >
              <span className="font-medium">Get in touch</span>
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
