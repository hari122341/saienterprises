import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/data/products';
import { z } from 'zod';
import { useRef } from 'react';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      contactSchema.parse(formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Enquiry Sent",
        description: "We'll respond within 24 to 48 business hours.",
      });
      setFormData({ name: '', company: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 md:py-40 bg-foreground overflow-hidden">
      {/* Premium decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px),
                              linear-gradient(hsl(var(--background)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
              Contact
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-4">
              Let's start a <span className="text-primary italic">conversation.</span>
            </h2>
            <p className="text-background/60 max-w-lg mx-auto text-base sm:text-lg">
              Ready to transform your print production? We typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Phone Card */}
              <motion.div 
                className="group p-6 sm:p-8 bg-background/5 border border-background/10 hover:border-primary/30 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-background mb-3">Call Us</h4>
                    <div className="space-y-1">
                      {companyInfo.phones.map(phone => (
                        <a 
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-background/70 hover:text-primary transition-colors text-base"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                className="group p-6 sm:p-8 bg-background/5 border border-background/10 hover:border-primary/30 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-background mb-3">Email Us</h4>
                    <div className="space-y-1">
                      {companyInfo.emails.map(email => (
                        <a 
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-background/70 hover:text-primary transition-colors text-base break-all"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                className="group p-6 sm:p-8 bg-primary"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-foreground/80 mb-2">Head Office</h4>
                    <p className="font-serif text-2xl text-primary-foreground mb-1">
                      {companyInfo.locations.headquarters.city}
                    </p>
                    <p className="text-primary-foreground/60 text-sm">
                      {companyInfo.locations.headquarters.state}, India
                    </p>
                  </div>
                </div>
                
                {/* Sparkle decoration */}
                <motion.div 
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-primary-foreground/20" />
                </motion.div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 p-6 bg-background/5 border border-background/10"
              >
                <span className="font-serif text-4xl sm:text-5xl text-primary">24+</span>
                <div>
                  <p className="text-background font-medium">Years of Excellence</p>
                  <p className="text-background/50 text-sm">Trusted across continents</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-background p-8 sm:p-10 md:p-12 shadow-2xl">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">Send us a message</h3>
                  <p className="text-muted-foreground text-sm">Fill in the form below and we'll get back to you.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3.5 bg-secondary/50 border text-foreground text-base
                        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background
                        transition-all placeholder:text-muted-foreground/50
                        ${errors.name ? 'border-destructive' : 'border-border'}
                      `}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-secondary/50 border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background transition-all placeholder:text-muted-foreground/50"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3.5 bg-secondary/50 border text-foreground text-base
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background
                      transition-all placeholder:text-muted-foreground/50
                      ${errors.email ? 'border-destructive' : 'border-border'}
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3.5 bg-secondary/50 border text-foreground text-base resize-none
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background
                      transition-all placeholder:text-muted-foreground/50
                      ${errors.message ? 'border-destructive' : 'border-border'}
                    `}
                    placeholder="Tell us about your machinery requirements..."
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-base font-medium"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
