import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      transition={{ duration: 0.4 }}
    >
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-8 md:px-16 lg:px-24">
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
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Whether you're looking for new machinery, need technical consultation, 
              or have questions about our services.
            </p>
          </motion.div>
        </section>

        {/* Form + Info */}
        <section className="border-t border-border py-16 md:py-24 px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* Machinery Interest */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Machinery interest
                  </label>
                  <select
                    value={formData.machinery}
                    onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select category</option>
                    {productCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="Other">Other / General enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Send message →
                  </button>
                </div>
              </form>

              <p className="text-sm text-muted-foreground mt-8">
                We respond within 24–48 business hours.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-12">
                {/* Email */}
                <div>
                  <p className="caption mb-4">Email</p>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-lg text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                {/* Head Office */}
                <div>
                  <p className="caption mb-4">Head Office</p>
                  <p className="text-foreground">
                    {companyInfo.locations.headquarters.city}
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {companyInfo.locations.headquarters.country}
                  </p>
                </div>

                {/* Branches */}
                <div>
                  <p className="caption mb-4">Branches</p>
                  <p className="text-muted-foreground">
                    New Delhi · Pune · Vijayawada · Nairobi
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