import { Link } from 'react-router-dom';
import { companyInfo } from '@/data/products';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - Company */}
          <div>
            <p className="text-sm font-medium text-foreground mb-4">Sai Enterprises</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {companyInfo.experience} of excellence in graphic & corrugation machinery.
              <br />
              India · Kenya
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/machinery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Machinery
            </Link>
            <Link to="/brands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Brands
            </Link>
            <Link to="/global" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Global
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <a 
              href={`mailto:${companyInfo.email}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;