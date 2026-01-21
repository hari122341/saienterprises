import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import OfferingsSection from '@/components/home/OfferingsSection';
import BrandPartnersSection from '@/components/home/BrandPartnersSection';
import GlobalPresenceSection from '@/components/home/GlobalPresenceSection';
import WhySaiSection from '@/components/home/WhySaiSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main>
        {/* 1️⃣ HERO - Identity & Confidence */}
        <HeroSection />

        {/* 2️⃣ ABOUT - Short Intro */}
        <AboutSection />

        {/* 3️⃣ WHAT WE OFFER - Core Domains */}
        <OfferingsSection />

        {/* 4️⃣ OUR BRAND PARTNERS - Premium Wall of Trust */}
        <BrandPartnersSection />

        {/* 5️⃣ GLOBAL PRESENCE - Map Section */}
        <GlobalPresenceSection />

        {/* 6️⃣ WHY SAI ENTERPRISES - Trust Highlights */}
        <WhySaiSection />

        {/* 7️⃣ CONTACT US - Form */}
        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
