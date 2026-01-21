import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/products';
import saiLogo from '@/assets/sai-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand & CTA */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-background/10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden border border-background/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={saiLogo} 
                    alt="Sai Enterprises" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <span className="font-serif text-xl text-background">Sai Enterprises</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-background/40">
                    Since 2000
                  </span>
                </div>
              </div>
              <p className="text-background/60 text-sm sm:text-base leading-relaxed max-w-md">
                {companyInfo.experience} of excellence in graphic & corrugation machinery.
                Building long-term relationships across India and East Africa.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-serif text-2xl sm:text-3xl text-background mb-6">
                Ready to elevate your<br />print production?
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-sm font-medium tracking-wide">Get in touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16 sm:mb-20">
            {/* Navigation */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 font-medium mb-5">
                Navigate
              </p>
              <nav className="space-y-3">
                {['About', 'Machinery', 'Brands', 'Global', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    to={`/${item.toLowerCase()}`} 
                    className="block text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Locations */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 font-medium mb-5">
                Locations
              </p>
              <div className="space-y-3 text-sm">
                <p className="text-primary font-medium">Hyderabad</p>
                <p className="text-background/50">New Delhi</p>
                <p className="text-background/50">Pune</p>
                <p className="text-background/50">Vijayawada</p>
                <p className="text-primary font-medium">Nairobi</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 font-medium mb-5">
                Contact
              </p>
              <div className="space-y-3">
                {companyInfo.phones.slice(0, 2).map((phone) => (
                  <a 
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {phone}
                  </a>
                ))}
                {companyInfo.emails.slice(0, 1).map((email) => (
                  <a 
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 font-medium mb-5">
                Partners
              </p>
              <div className="space-y-3 text-sm text-background/50">
                <p>Heidelberg</p>
                <p>Komori</p>
                <p>Manroland</p>
                <p className="text-primary font-medium">HPM (Sole Agent)</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-background/10">
            <p className="text-xs text-background/40">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-background/30">
                India
              </span>
              <span className="w-4 h-px bg-background/20" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-background/30">
                Kenya
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
