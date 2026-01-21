import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const ContactPage = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    machinery: '',
    message: '',
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll respond within 24 to 48 business hours.",
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', phone: '', machinery: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      items: companyInfo.emails,
      type: 'email'
    },
    {
      icon: Phone,
      label: 'Phone',
      items: companyInfo.phones,
      type: 'phone'
    },
  ];

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-foreground overflow-hidden">
          {/* Animated background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Floating orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
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
              Contact
              <span className="w-8 h-px bg-primary" />
            </motion.span>
            
            <motion.h1 
              className="text-background mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Let's <span className="text-primary italic">talk.</span>
            </motion.h1>
            
            <motion.p 
              className="text-background/70 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Whether you're looking for new machinery, need technical consultation, 
              or have questions, we're here to help.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="mb-8">
                  <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                    <span className="w-8 h-px bg-primary" />
                    Send a Message
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                    Get in <span className="text-primary italic">touch.</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Interest
                    </label>
                    <select
                      value={formData.machinery}
                      onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                      className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select machinery category</option>
                      {productCategories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      <option value="Other">Other / General enquiry</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary/30 border-2 border-border px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitted}
                    whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 transition-all group ${
                      isSubmitted 
                        ? 'bg-green-600 text-white cursor-default' 
                        : 'bg-foreground text-background hover:bg-foreground/90'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="font-medium">Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-sm text-muted-foreground mt-6">
                  We typically respond within 24 to 48 business hours.
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
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{info.label}</span>
                    </div>
                    <div className="space-y-2 pl-15">
                      {info.items.map((item) => (
                        <motion.a 
                          key={item}
                          href={info.type === 'email' ? `mailto:${item}` : `tel:${item}`}
                          className="block text-foreground hover:text-primary transition-colors font-serif text-lg"
                          whileHover={{ x: 5 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Locations */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
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
                      <p className="text-sm text-muted-foreground">Kenya, East Africa</p>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                      Also in New Delhi, Pune, Vijayawada
                    </p>
                  </div>
                </motion.div>

                {/* Experience badge */}
                <motion.div 
                  className="p-6 bg-primary/5 border border-primary/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-serif text-4xl text-primary mb-1">24+</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Years of Excellence
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Trusted by 500+ clients across India and East Africa.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ContactPage;
