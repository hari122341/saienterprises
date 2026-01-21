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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isHomepage = location.pathname === '/';
  const useLightText = isHomepage && isHeroSection && !isScrolled;

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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <motion.div 
                className={`w-10 h-10 rounded-full overflow-hidden border transition-all duration-300 ${
                  useLightText ? 'border-white/20' : 'border-border/30'
                } shadow-sm`}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={saiLogo} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col">
                <span 
                  className={`font-serif text-base tracking-wide transition-colors duration-300 ${
                    useLightText 
                      ? 'text-white group-hover:text-white/80' 
                      : 'text-foreground group-hover:text-muted-foreground'
                  }`}
                >
                  Sai Enterprises
                </span>
                <span className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  useLightText ? 'text-white/50' : 'text-muted-foreground/70'
                }`}>
                  Since 2000
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive(link.href)
                      ? useLightText ? 'text-white' : 'text-foreground'
                      : useLightText 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 -mr-2 transition-colors ${
                useLightText ? 'text-white' : 'text-foreground'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <div className="relative h-full flex flex-col justify-center px-10">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-3 font-serif text-4xl sm:text-5xl tracking-wide transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-primary-foreground'
                          : 'text-primary-foreground/50 hover:text-primary-foreground hover:translate-x-2'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-16 left-10 right-10"
              >
                <div className="flex items-center gap-4 text-primary-foreground/40">
                  <span className="w-12 h-px bg-primary-foreground/20" />
                  <span className="text-xs uppercase tracking-[0.2em]">India & East Africa</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
