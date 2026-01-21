import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    machinery: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "We'll respond within 24-48 business hours.",
    });

    setFormData({ name: '', company: '', city: '', machinery: '', message: '' });
  };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-6">Contact</p>
            <h1 className="text-foreground mb-8">
              Let's talk.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Whether you're looking for new machinery, need technical consultation, 
              or have questions about our services—we're here to help.
            </p>
          </motion.div>
        </section>

        {/* Form + Info Grid */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 max-w-6xl">
            {/* Form - Takes more space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Company */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Company name"
                  />
                </div>

                {/* City */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your city"
                  />
                </div>

                {/* Machinery Interest */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3">
                    Machinery Interest
                  </label>
                  <select
                    value={formData.machinery}
                    onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground text-lg focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select category</option>
                    {productCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="Other">Other / General enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-3">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground text-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="btn-primary group"
                  >
                    <span>Send message</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>

              <p className="text-sm text-muted-foreground mt-10 pt-6 border-t border-border">
                We respond within 24–48 business hours.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-12">
                {/* Email */}
                <div>
                  <p className="caption mb-4">Email</p>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-xl text-foreground hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {companyInfo.email}
                  </a>
                </div>

                {/* Head Office */}
                <div>
                  <p className="caption mb-4">Head Office</p>
                  <p 
                    className="text-xl text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {companyInfo.locations.headquarters.city}
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {companyInfo.locations.headquarters.country}
                  </p>
                </div>

                {/* Branches */}
                <div>
                  <p className="caption mb-4">Branches</p>
                  <p className="text-muted-foreground leading-relaxed">
                    New Delhi · Pune · Vijayawada
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Nairobi, Kenya
                  </p>
                </div>

                {/* Experience */}
                <div className="pt-8 border-t border-border">
                  <p 
                    className="text-3xl text-foreground mb-2"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    24+
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ContactPage;
