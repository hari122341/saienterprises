import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import OfferingsSection from '@/components/home/OfferingsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BrandPartnersSection from '@/components/home/BrandPartnersSection';
import GlobalPresenceSection from '@/components/home/GlobalPresenceSection';
import WhySaiSection from '@/components/home/WhySaiSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <PageTransition>
      <Header />
      
      <main>
        {/* 1️⃣ HERO - Identity & Confidence */}
        <HeroSection />

        {/* 2️⃣ ABOUT - Short Intro */}
        <AboutSection />

        {/* 3️⃣ WHAT WE OFFER - Core Domains */}
        <OfferingsSection />

        {/* 4️⃣ OUR SERVICES - Capabilities & Authority */}
        <ServicesSection />

        {/* 5️⃣ OUR BRAND PARTNERS - Premium Wall of Trust */}
        <BrandPartnersSection />

        {/* 6️⃣ GLOBAL PRESENCE - Map Section */}
        <GlobalPresenceSection />

        {/* 7️⃣ WHY SAI ENTERPRISES - Trust Highlights */}
        <WhySaiSection />

        {/* 8️⃣ CONTACT US - Form */}
        <ContactSection />
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Index;
