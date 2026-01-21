import { Link } from 'react-router-dom';
import { companyInfo } from '@/data/products';
import saiLogo from '@/assets/sai-logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border/30">
                <img 
                  src={saiLogo} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-foreground">Sai Enterprises</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-4">
              {companyInfo.experience} of excellence in graphic & corrugation machinery.
              Building long-term relationships across India and East Africa.
            </p>
            <a 
              href={`mailto:${companyInfo.email}`}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-6">
              Navigation
            </p>
            <nav className="space-y-3">
              <Link to="/about" className="block text-sm text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/machinery" className="block text-sm text-foreground hover:text-primary transition-colors">
                Machinery
              </Link>
              <Link to="/brands" className="block text-sm text-foreground hover:text-primary transition-colors">
                Brands
              </Link>
              <Link to="/global" className="block text-sm text-foreground hover:text-primary transition-colors">
                Global Presence
              </Link>
              <Link to="/contact" className="block text-sm text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-6">
              Locations
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Hyderabad <span className="text-foreground/50">· Head Office</span></p>
              <p>New Delhi</p>
              <p>Pune</p>
              <p>Vijayawada</p>
              <p>Nairobi <span className="text-foreground/50">· Kenya</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            India · Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
