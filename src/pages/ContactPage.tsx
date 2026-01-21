import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
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
        <section className="pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-12 md:pb-16 px-5 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="caption mb-4 sm:mb-6">Contact</p>
            <h1 className="text-foreground mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
              Let's talk.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Whether you're looking for new machinery, need technical consultation, 
              or have questions about our services, we're here to help.
            </p>
          </motion.div>
        </section>

        {/* Form + Info Grid */}
        <section className="border-t border-border py-12 sm:py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 max-w-6xl">
            {/* Form - Takes more space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Name */}
                <motion.div 
                  className="group"
                  whileFocus={{ scale: 1.01 }}
                >
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 sm:mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 sm:py-3 text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                {/* Company */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 sm:mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 sm:py-3 text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Company name"
                  />
                </div>

                {/* City */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 sm:mb-3">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 sm:py-3 text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your city"
                  />
                </div>

                {/* Machinery Interest */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 sm:mb-3">
                    Machinery Interest
                  </label>
                  <select
                    value={formData.machinery}
                    onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 sm:py-3 text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select category</option>
                    {productCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="Other">Other or General enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-2 sm:mb-3">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 sm:py-3 text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 sm:pt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary group"
                  >
                    <span>Send message</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </form>

              <p className="text-xs sm:text-sm text-muted-foreground mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-border">
                We respond within 24 to 48 business hours.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="caption mb-3 sm:mb-4">Email</p>
                  <div className="space-y-2">
                    {companyInfo.emails.map((email) => (
                      <motion.a 
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-lg sm:text-xl text-foreground hover:text-primary transition-colors duration-300 font-serif break-all"
                        whileHover={{ x: 5 }}
                      >
                        {email}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Head Office */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="caption mb-3 sm:mb-4">Head Office</p>
                  <p className="text-lg sm:text-xl text-foreground font-serif">
                    {companyInfo.locations.headquarters.city}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                    {companyInfo.locations.headquarters.country}
                  </p>
                </motion.div>

                {/* Branches */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="caption mb-3 sm:mb-4">Branches</p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    New Delhi · Pune · Vijayawada
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                    Nairobi, Kenya
                  </p>
                </motion.div>

                {/* Experience */}
                <motion.div 
                  className="pt-6 sm:pt-8 border-t border-border"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-2xl sm:text-3xl text-foreground mb-1 sm:mb-2 font-serif">
                    24+
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
                    Years of Excellence
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ContactPage;
