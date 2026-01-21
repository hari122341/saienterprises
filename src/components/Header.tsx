import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
        className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 rounded-2xl ${
          showBackdrop 
            ? 'bg-background/70 backdrop-blur-xl border border-border/30 shadow-lg shadow-foreground/5' 
            : 'bg-white/5 backdrop-blur-sm border border-white/10'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div 
                className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
              </motion.div>
              <span className={`font-serif text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                useLightText ? 'text-white' : 'text-foreground'
              }`}>
                Sai Enterprises
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? useLightText ? 'text-white' : 'text-primary'
                      : useLightText 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                useLightText ? 'text-white bg-white/10' : 'text-foreground bg-secondary/80'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Clean Mobile Menu */}
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
              className="absolute inset-0 bg-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col px-6 pt-20 pb-8">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center -mt-16">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-3 border-b border-border/50 ${
                        location.pathname === link.href ? '' : ''
                      }`}
                    >
                      <span className={`font-serif text-2xl transition-colors ${
                        location.pathname === link.href 
                          ? 'text-primary' 
                          : 'text-foreground'
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-border"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">Email</p>
                <a href="mailto:msrao@saienterprises.info" className="text-foreground text-sm">
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
