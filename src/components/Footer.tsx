import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/products';
import saiLogoCmyk from '@/assets/sai-logo-cmyk.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 md:py-20 border-b border-background/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Left - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
                  <img src={saiLogoCmyk} alt="Sai Enterprises" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-serif text-base sm:text-lg text-background block">Sai Enterprises</span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-primary">Graphic Machinery Suppliers</span>
                </div>
              </div>
              <p className="text-background/50 text-sm leading-relaxed max-w-sm mb-6 sm:mb-8">
                Premium graphic machinery suppliers. Building long-term relationships across India and East Africa since 2000.
              </p>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                {companyInfo.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="text-sm text-background/70 hover:text-primary transition-colors break-all">
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="flex flex-col justify-center lg:items-end">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-background mb-5 sm:mb-6 lg:text-right leading-snug">
                Ready to elevate your<br className="hidden sm:block" />
                print production?
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 sm:px-6 py-3 hover:bg-primary/90 transition-colors w-fit"
              >
                <span className="text-sm font-medium">Get in touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="py-10 sm:py-12 border-b border-background/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/30 mb-3 sm:mb-4">Navigate</p>
              <nav className="space-y-2">
                {['About', 'Machinery', 'Partners', 'Contact'].map((item) => (
                  <Link key={item} to={`/${item.toLowerCase()}`} className="block text-sm text-background/60 hover:text-background transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/30 mb-3 sm:mb-4">Locations</p>
              <div className="space-y-1.5 sm:space-y-2 text-sm">
                <p className="text-primary">Hyderabad</p>
                <p className="text-background/40">New Delhi</p>
                <p className="text-background/40">Pune</p>
                <p className="text-primary">Nairobi</p>
              </div>
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/30 mb-3 sm:mb-4">Call Us</p>
              <div className="space-y-1.5 sm:space-y-2">
                {companyInfo.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-xs sm:text-sm text-background/60 hover:text-background transition-colors">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/30 mb-3 sm:mb-4">Mail Us</p>
              <div className="space-y-1.5 sm:space-y-2">
                {companyInfo.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-xs sm:text-sm text-background/60 hover:text-background transition-colors break-all">
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background/30 mb-3 sm:mb-4">Follow Us</p>
              <a 
                href={`https://${companyInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30">
            © {currentYear} {companyInfo.name}
          </p>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-background/30">
            <span>India</span>
            <span className="w-3 h-px bg-background/20" />
            <span>Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
