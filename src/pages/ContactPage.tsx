import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { companyInfo, productCategories } from '@/data/products';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', company: '', city: '', machinery: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    toast({ title: 'Enquiry Sent!', description: 'We respond within 24-48 business hours.' });
    setFormData({ name: '', company: '', city: '', machinery: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-secondary/30 border-b border-border">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="micro-label text-primary mb-4 block">Get in Touch</span>
              <h1 className="text-foreground mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our team provides technical guidance and suitable machinery solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <Input placeholder="Company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <Input placeholder="City *" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" required value={formData.machinery} onChange={e => setFormData({...formData, machinery: e.target.value})}>
                    <option value="">Machinery Interest *</option>
                    {productCategories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    <option value="Consultation">General Consultation</option>
                  </select>
                  <Textarea placeholder="Your message..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Enquiry</>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We respond within 24-48 business hours.</p>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <Building2 className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{companyInfo.name}</h3>
                  <p className="opacity-80 mb-4">{companyInfo.tagline}</p>
                  <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                    {companyInfo.email}
                  </a>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Head Office
                  </h4>
                  <p className="text-muted-foreground">
                    {companyInfo.locations.headquarters.city}, {companyInfo.locations.headquarters.state}<br />
                    {companyInfo.locations.headquarters.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
