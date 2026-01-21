import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Machinery', href: '/machinery' },
    { name: 'Brands', href: '/brands' },
    { name: 'Global', href: '/global' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/machinery') {
      return location.pathname.startsWith('/machinery');
    }
    return location.pathname === href;
  };

  return (
    <>
      {/* Thin, caption-style navigation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo + Text */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border/30 shadow-sm">
                <img 
                  src={saiLogo} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-light tracking-wide text-foreground group-hover:text-muted-foreground transition-colors">
                Sai Enterprises
              </span>
            </Link>

            {/* Desktop Navigation - light weight, generous spacing */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - minimal */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full screen premium overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Background with brand color */}
            <div className="absolute inset-0 bg-primary" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              {/* Navigation Links - Large editorial typography */}
              <nav className="space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={link.href}
                      className={`block text-4xl font-light tracking-wide transition-opacity duration-300 ${
                        isActive(link.href)
                          ? 'text-primary-foreground'
                          : 'text-primary-foreground/70 hover:text-primary-foreground'
                      }`}
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-12 left-8 right-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-sm font-medium tracking-wide">Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
