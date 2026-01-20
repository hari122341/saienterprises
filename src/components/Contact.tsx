import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    machinery: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Enquiry Sent!',
      description: 'Our team will contact you shortly with suitable machinery solutions.',
    });

    setFormData({
      name: '',
      company: '',
      city: '',
      machinery: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team provides technical guidance and suitable machinery solutions for your requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Enquiry Form</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="machinery" className="block text-sm font-medium text-foreground mb-2">
                    Machinery Interest *
                  </label>
                  <select
                    id="machinery"
                    name="machinery"
                    required
                    value={formData.machinery}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select category</option>
                    {productCategories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                    <option value="Multiple Categories">Multiple Categories</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main Contact Card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                  <p className="text-primary-foreground/80">{companyInfo.tagline}</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">{companyInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Head Office */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Head Office
              </h4>
              <p className="text-muted-foreground">
                {companyInfo.locations.headquarters.city}, {companyInfo.locations.headquarters.state}
                <br />
                {companyInfo.locations.headquarters.country}
              </p>
            </div>

            {/* Other Locations */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold text-foreground mb-4">Branch Offices</h4>
              <div className="grid grid-cols-2 gap-4">
                {companyInfo.locations.branches.map((branch) => (
                  <div key={branch.city} className="text-sm">
                    <p className="font-medium text-foreground">{branch.city}</p>
                    <p className="text-muted-foreground">{branch.state || branch.country}</p>
                  </div>
                ))}
                <div className="text-sm">
                  <p className="font-medium text-accent">{companyInfo.locations.overseas.city}</p>
                  <p className="text-muted-foreground">{companyInfo.locations.overseas.country}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
