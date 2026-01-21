import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeroSection(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isHomepage = location.pathname === '/';
  const useLightText = isHomepage && isHeroSection && !isScrolled;

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Machinery', href: '/machinery' },
    { name: 'Brands', href: '/brands' },
    { name: 'Global', href: '/global' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/machinery') return location.pathname.startsWith('/machinery');
    return location.pathname === href;
  };

  const showBackdrop = !isHomepage || isScrolled;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBackdrop 
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className={`w-9 h-9 rounded-full overflow-hidden transition-all duration-300 ${
                  useLightText ? 'ring-2 ring-white/20' : 'ring-2 ring-primary/20'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-serif text-base sm:text-lg tracking-wide transition-colors duration-300 leading-tight ${
                  useLightText ? 'text-white' : 'text-foreground'
                }`}>
                  Sai Enterprises
                </span>
                <span className={`text-[8px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  useLightText ? 'text-white/50' : 'text-muted-foreground'
                }`}>
                  Since 2000
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? useLightText ? 'text-white' : 'text-primary'
                      : useLightText 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                useLightText ? 'text-white bg-white/10' : 'text-foreground bg-secondary'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div 
                className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between px-8 py-24">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center space-y-2">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={`group flex items-center justify-between py-4 border-b border-background/10 ${
                        location.pathname === link.href ? 'border-primary/50' : ''
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className={`text-xs font-mono ${
                          location.pathname === link.href ? 'text-primary' : 'text-background/30'
                        }`}>
                          0{i + 1}
                        </span>
                        <span className={`font-serif text-3xl sm:text-4xl transition-colors ${
                          location.pathname === link.href 
                            ? 'text-primary' 
                            : 'text-background/60 group-hover:text-background'
                        }`}>
                          {link.name}
                        </span>
                      </div>
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          location.pathname === link.href 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-background/10 text-background/30'
                        }`}
                        whileHover={{ scale: 1.1, x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-background/10"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 mb-2">Get in touch</p>
                <a href="mailto:msrao@saienterprises.info" className="text-background/70 text-sm hover:text-primary transition-colors">
                  msrao@saienterprises.info
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
