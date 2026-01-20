import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Wrench, HeartHandshake, Building2, Briefcase, Globe } from 'lucide-react';
import { companyInfo } from '@/data/products';

const timelineEvents = [
  { year: '2000', title: 'Foundation', description: 'Started operations in Hyderabad with a vision for excellence' },
  { year: '2005', title: 'Expansion', description: 'Opened branches in New Delhi and Pune' },
  { year: '2010', title: 'Growth', description: 'Established presence in Vijayawada, Andhra Pradesh' },
  { year: '2015', title: 'Global Reach', description: 'Opened overseas branch in Nairobi, Kenya' },
  { year: '2024', title: 'Today', description: '24+ years serving the printing & packaging industry' },
];

const services = [
  { icon: Briefcase, title: 'Consultancy', description: 'Expert guidance before purchase' },
  { icon: Wrench, title: 'Installation', description: 'Professional commissioning' },
  { icon: Users, title: 'Service & Support', description: 'Ongoing technical assistance' },
  { icon: HeartHandshake, title: 'Long-term Partnership', description: 'We grow with you' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full" />
      </div>

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Sai Enterprises
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A trusted name in graphic machinery supply with over two decades of industry expertise
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Founded with a commitment to building long-term relationships, Sai Enterprises has grown
                to become a leading supplier of graphic and corrugation machinery across India and Africa.
              </p>
              <p className="mb-4">
                We operate from multiple cities including <strong>New Delhi</strong>, <strong>Pune</strong>,
                and <strong>Vijayawada (Andhra Pradesh)</strong>, with <strong>Hyderabad (Telangana)</strong> as
                our Head Office. Our overseas branch in <strong>Nairobi, Kenya</strong> extends our reach
                to the African market.
              </p>
              <p>
                We undertake consultancy for printing machines, installation of pre-owned and new printing
                machines, and supply of the latest post-press equipment from globally renowned brands.
              </p>
            </div>
          </motion.div>

          {/* Right - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-5 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-2">
                        {event.year}
                      </span>
                      <h4 className="font-bold text-foreground mb-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  {/* Spacer */}
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Head Office */}
            <div className="p-5 rounded-xl bg-primary text-primary-foreground text-center col-span-2 md:col-span-1">
              <Building2 className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold">{companyInfo.locations.headquarters.city}</h4>
              <p className="text-sm opacity-80">{companyInfo.locations.headquarters.type}</p>
            </div>

            {/* Branches */}
            {companyInfo.locations.branches.map((branch) => (
              <div
                key={branch.city}
                className="p-5 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <MapPin className="w-6 h-6 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground">{branch.city}</h4>
                <p className="text-xs text-muted-foreground">{branch.state || branch.country}</p>
              </div>
            ))}

            {/* Overseas */}
            <div className="p-5 rounded-xl bg-accent text-accent-foreground text-center">
              <Globe className="w-6 h-6 mx-auto mb-3" />
              <h4 className="font-bold">{companyInfo.locations.overseas.city}</h4>
              <p className="text-sm opacity-80">{companyInfo.locations.overseas.country}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
