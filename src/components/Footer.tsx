import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import { companyInfo, productCategories } from '@/data/products';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={saiLogo}
              alt="Sai Enterprises"
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm mb-4">
              {companyInfo.motto}
            </p>
            <p className="text-background/60 text-sm">
              {companyInfo.experience} of excellence in Graphic & Corrugation Machinery
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.slug}`}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-background text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partners" className="text-background/70 hover:text-background text-sm transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#global" className="text-background/70 hover:text-background text-sm transition-colors">
                  Global Presence
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background text-sm transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Head Office: {companyInfo.locations.headquarters.city},{' '}
                  {companyInfo.locations.headquarters.state}
                </span>
              </li>
            </ul>

            {/* Locations Summary */}
            <div className="mt-4 pt-4 border-t border-background/10">
              <p className="text-xs text-background/50 mb-2">Also serving from:</p>
              <p className="text-xs text-background/70">
                {companyInfo.locations.branches.map((b) => b.city).join(' • ')} •{' '}
                {companyInfo.locations.overseas.city}, {companyInfo.locations.overseas.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
