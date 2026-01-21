import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const ContactPage = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    machinery: '',
    message: '',
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "We'll respond within 24 to 48 business hours.",
    });

    setFormData({ name: '', company: '', city: '', machinery: '', message: '' });
  };

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

          {/* Floating accent */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
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
                Contact
              </span>
              <h1 className="text-foreground mb-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
                Let's <span className="text-primary italic">talk.</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed">
                Whether you're looking for new machinery, need technical consultation, 
                or have questions about our services, we're here to help.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2">
                      Interest
                    </label>
                    <select
                      value={formData.machinery}
                      onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                      className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select category</option>
                      {productCategories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      <option value="Other">Other / General enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors group"
                >
                  <span className="font-medium">Send message</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <p className="text-sm text-muted-foreground mt-6">
                We respond within 24 to 48 business hours.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                </div>
                <div className="space-y-2">
                  {companyInfo.emails.map((email) => (
                    <motion.a 
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-foreground hover:text-primary transition-colors font-serif text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {email}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Phone</span>
                </div>
                <div className="space-y-2">
                  {companyInfo.phones.map((phone) => (
                    <motion.a 
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-foreground hover:text-primary transition-colors font-serif text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {phone}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Offices</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-serif text-lg text-foreground">Hyderabad</p>
                    <p className="text-sm text-muted-foreground">Headquarters, India</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg text-foreground">Nairobi</p>
                    <p className="text-sm text-muted-foreground">Kenya</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Also in New Delhi, Pune, Vijayawada
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <motion.div 
                className="pt-8 border-t border-border"
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-serif text-4xl text-primary mb-1">24+</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Years of Excellence
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ContactPage;
