import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/data/products';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255),
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      toast({
        title: "Enquiry Received",
        description: "We'll get back to you within 24-48 business hours.",
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
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      
      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-background/50 font-medium mb-6">
              Get in Touch
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background leading-[1.1] mb-4">
              Let's discuss your requirements.
            </h2>
            
            <p className="text-background/60 mb-12">
              We usually respond within 24–48 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Name', required: true, placeholder: 'Your name' },
                  { name: 'company', label: 'Company', required: false, placeholder: 'Company name' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label 
                      className={`
                        absolute left-0 transition-all duration-300 pointer-events-none
                        ${focusedField === field.name || formData[field.name as keyof typeof formData]
                          ? '-top-5 text-xs text-background/50'
                          : 'top-3 text-background/40'
                        }
                      `}
                    >
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full py-3 bg-transparent border-0 border-b-2 text-background placeholder:text-transparent
                        focus:outline-none focus:ring-0 transition-colors duration-300
                        ${errors[field.name] 
                          ? 'border-red-400' 
                          : 'border-background/20 focus:border-primary'
                        }
                      `}
                    />
                    {errors[field.name] && (
                      <span className="absolute -bottom-5 left-0 text-xs text-red-400">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="relative">
                <label 
                  className={`
                    absolute left-0 transition-all duration-300 pointer-events-none
                    ${focusedField === 'email' || formData.email
                      ? '-top-5 text-xs text-background/50'
                      : 'top-3 text-background/40'
                    }
                  `}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full py-3 bg-transparent border-0 border-b-2 text-background
                    focus:outline-none focus:ring-0 transition-colors duration-300
                    ${errors.email 
                      ? 'border-red-400' 
                      : 'border-background/20 focus:border-primary'
                    }
                  `}
                />
                {errors.email && (
                  <span className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label 
                  className={`
                    absolute left-0 transition-all duration-300 pointer-events-none
                    ${focusedField === 'message' || formData.message
                      ? '-top-5 text-xs text-background/50'
                      : 'top-3 text-background/40'
                    }
                  `}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`
                    w-full py-3 bg-transparent border-0 border-b-2 text-background resize-none
                    focus:outline-none focus:ring-0 transition-colors duration-300
                    ${errors.message 
                      ? 'border-red-400' 
                      : 'border-background/20 focus:border-primary'
                    }
                  `}
                />
                {errors.message && (
                  <span className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 mt-8"
              >
                <span className="text-background font-medium">Send Enquiry</span>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Phone Card */}
            <div className="p-8 md:p-10 border border-background/10 hover:border-background/20 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-background/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-background/60 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-background/40 block mb-4">
                    Call Us
                  </span>
                  <div className="space-y-2">
                    {companyInfo.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block font-serif text-xl md:text-2xl text-background hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-8 md:p-10 border border-background/10 hover:border-background/20 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-background/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-background/60 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-background/40 block mb-4">
                    Mail Us
                  </span>
                  <div className="space-y-2">
                    {companyInfo.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-lg text-background hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Head Office Card */}
            <div className="p-8 md:p-10 bg-primary text-primary-foreground group">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 block mb-4">
                    Head Office
                  </span>
                  <h4 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-2">
                    {companyInfo.locations.headquarters.city}
                  </h4>
                  <p className="text-primary-foreground/70">
                    {companyInfo.locations.headquarters.state}, {companyInfo.locations.headquarters.country}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
