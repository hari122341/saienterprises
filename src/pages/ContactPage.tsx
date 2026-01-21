import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const ContactPage = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true });
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
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

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

  const contactCards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: companyInfo.phones[0],
      href: `tel:${companyInfo.phones[0]}`,
      description: 'Mon-Sat, 9am-6pm IST'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: companyInfo.emails[0],
      href: `mailto:${companyInfo.emails[0]}`,
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Hyderabad, India',
      href: '#',
      description: 'Headquarters'
    },
  ];

  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[65vh] flex items-center justify-center bg-foreground overflow-hidden">
          {/* Animated ambient background */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <motion.div 
            className="relative text-center px-6 sm:px-8 pt-24 sm:pt-32"
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
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
              Let's <span className="text-primary italic">connect.</span>
            </motion.h1>
            
            <motion.p 
              className="text-background/60 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ready to transform your printing capabilities? We're here to help.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-background border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 sm:p-8 bg-secondary/30 hover:bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                      {card.label}
                    </span>
                    <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors block mb-1">
                      {card.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {card.description}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={formRef} className="py-20 sm:py-28 px-6 sm:px-8 md:px-16 lg:px-24 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
                <span className="w-8 h-px bg-primary" />
                Send a Message
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Get in <span className="text-primary italic">touch.</span>
              </h2>
            </motion.div>

            {/* Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all rounded-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all rounded-sm"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all rounded-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all rounded-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                  Interest
                </label>
                <select
                  value={formData.machinery}
                  onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                  className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all appearance-none cursor-pointer rounded-sm"
                >
                  <option value="">Select machinery category</option>
                  {productCategories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                  <option value="Other">Other / General enquiry</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3 group-focus-within:text-primary transition-colors">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary/30 border-2 border-border px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/50 transition-all resize-none rounded-sm"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 transition-all group rounded-full ${
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

                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Experience Badge Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-serif text-5xl sm:text-6xl text-primary">24+</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground mb-2">Years of Excellence</p>
            <p className="text-foreground">
              Trusted by 500+ clients across India and East Africa
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ContactPage;
