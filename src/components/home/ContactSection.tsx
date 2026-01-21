import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/data/products';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Received",
      description: "We'll get back to you within 24-48 business hours.",
    });
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="caption mb-8">Contact Us</p>
            <h2 className="text-foreground mb-6">
              Let's discuss your requirements.
            </h2>
            <p className="text-muted-foreground mb-10">
              We usually respond within 24–48 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                  placeholder="Tell us about your machinery requirements..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary group mt-4"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-16"
          >
            {/* Phone Numbers */}
            <div className="mb-10">
              <p className="caption mb-4">Call Us</p>
              <div className="space-y-3">
                {companyInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                      {phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="mb-10">
              <p className="caption mb-4">Mail Us</p>
              <div className="space-y-3">
                {companyInfo.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="mb-10">
              <p className="caption mb-4">Follow Us</p>
              <a
                href={`https://${companyInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Facebook</span>
              </a>
            </div>

            {/* Head Office */}
            <div className="pt-10 border-t border-border">
              <p className="caption mb-4">Head Office</p>
              <p 
                className="text-xl text-foreground mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {companyInfo.locations.headquarters.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {companyInfo.locations.headquarters.state}, {companyInfo.locations.headquarters.country}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
