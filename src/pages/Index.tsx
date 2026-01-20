import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import ProductUniverse from '@/components/ProductUniverse';
import Partners from '@/components/Partners';
import WhySaiEnterprises from '@/components/WhySaiEnterprises';
import GlobalPresence from '@/components/GlobalPresence';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ProductUniverse />
        <Partners />
        <WhySaiEnterprises />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
