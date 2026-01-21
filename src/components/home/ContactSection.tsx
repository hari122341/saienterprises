import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/data/products';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
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
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-secondary/30">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
              />
              Contact Us
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
              />
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-3 sm:mb-4">
              Let's discuss your requirements.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
              We usually respond within 24 to 48 business hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-3 sm:space-y-4"
            >
              {/* Phone */}
              <motion.div 
                className="p-5 sm:p-6 bg-card border border-border hover:border-primary/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Call Us</h4>
                    <div className="space-y-1">
                      {companyInfo.phones.map(phone => (
                        <a 
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="p-5 sm:p-6 bg-card border border-border hover:border-primary/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-foreground mb-2">Email Us</h4>
                    <div className="space-y-1">
                      {companyInfo.emails.map(email => (
                        <a 
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="p-5 sm:p-6 bg-primary text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-foreground mb-2">Head Office</h4>
                    <p className="font-serif text-base sm:text-lg text-primary-foreground">
                      {companyInfo.locations.headquarters.city}
                    </p>
                    <p className="text-primary-foreground/70 text-xs sm:text-sm">
                      {companyInfo.locations.headquarters.state}, India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div 
                className="p-5 sm:p-6 bg-card border border-border"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">Follow Us</h4>
                    <a 
                      href={`https://${companyInfo.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border p-5 sm:p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border text-foreground text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                        transition-colors placeholder:text-muted-foreground/50
                        ${errors.name ? 'border-destructive' : 'border-border'}
                      `}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-[10px] sm:text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border text-foreground text-sm
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                      transition-colors placeholder:text-muted-foreground/50
                      ${errors.email ? 'border-destructive' : 'border-border'}
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] sm:text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`
                      w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border text-foreground text-sm resize-none
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                      transition-colors placeholder:text-muted-foreground/50
                      ${errors.message ? 'border-destructive' : 'border-border'}
                    `}
                    placeholder="Tell us about your machinery requirements..."
                  />
                  {errors.message && (
                    <p className="text-[10px] sm:text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <span className="text-sm font-medium">Sending...</span>
                  ) : (
                    <>
                      <span className="text-sm font-medium">Send Enquiry</span>
                      <Send className="w-4 h-4" />
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
