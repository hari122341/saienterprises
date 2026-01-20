import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mail } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMachineryOpen, setIsMachineryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const machineryLinks = [
    { name: 'Pre-Press', href: '/machinery/pre-press' },
    { name: 'Press', href: '/machinery/press' },
    { name: 'Post-Press', href: '/machinery/post-press' },
    { name: 'Corrugation', href: '/machinery/corrugation' },
  ];

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Machinery', href: '/machinery', hasDropdown: true },
    { name: 'Brands', href: '/brands' },
    { name: 'Global', href: '/global' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const showWhiteText = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={saiLogo}
              alt="Sai Enterprises"
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsMachineryOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsMachineryOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    showWhiteText
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-foreground hover:text-primary hover:bg-secondary'
                  } ${location.pathname.startsWith(link.href) && link.href !== '/machinery' ? 'bg-primary/10 text-primary' : ''}`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Machinery Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isMachineryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-card rounded-xl shadow-industrial-lg border border-border overflow-hidden"
                      >
                        <div className="py-2">
                          {machineryLinks.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                                location.pathname === item.href ? 'text-primary bg-primary/5' : 'text-foreground'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showWhiteText
                ? 'text-white hover:bg-white/10'
                : 'text-foreground hover:bg-secondary'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMachineryOpen(!isMachineryOpen)}
                        className="w-full flex items-center justify-between py-3 px-4 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMachineryOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMachineryOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {machineryLinks.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block py-2.5 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-3 px-4 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 bg-primary text-primary-foreground font-medium text-center rounded-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
