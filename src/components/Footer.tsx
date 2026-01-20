import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import { companyInfo } from '@/data/products';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={saiLogo} alt="Sai Enterprises" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm mb-2">{companyInfo.motto}</p>
            <p className="text-background/60 text-sm">{companyInfo.experience} of excellence</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Machinery</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/machinery/pre-press" className="text-background/70 hover:text-background transition-colors">Pre-Press</Link></li>
              <li><Link to="/machinery/press" className="text-background/70 hover:text-background transition-colors">Press</Link></li>
              <li><Link to="/machinery/post-press" className="text-background/70 hover:text-background transition-colors">Post-Press</Link></li>
              <li><Link to="/machinery/corrugation" className="text-background/70 hover:text-background transition-colors">Corrugation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/brands" className="text-background/70 hover:text-background transition-colors">Brand Partners</Link></li>
              <li><Link to="/global" className="text-background/70 hover:text-background transition-colors">Global Presence</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-background/70 hover:text-background text-sm mb-3">
              <Mail className="w-4 h-4" /> {companyInfo.email}
            </a>
            <div className="flex items-start gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>HQ: {companyInfo.locations.headquarters.city}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex items-center justify-between">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-sm text-background/70 hover:text-background">
            <ArrowUp className="w-4 h-4" /> Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
