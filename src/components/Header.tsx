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
      setIsHeroSection(window.scrollY < window.innerHeight * 0.6);
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
  const shouldHide = isHomepage && isHeroSection && !isScrolled;
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

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: shouldHide ? 0 : 1, 
          y: shouldHide ? -20 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-full ${
          isScrolled || !isHomepage
            ? 'bg-background/60 backdrop-blur-2xl border border-border/20 shadow-lg shadow-foreground/[0.02]' 
            : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.08]'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(1.8)',
        }}
      >
        <div className="px-3 sm:px-5">
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-1 ring-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
              </motion.div>
              <span className={`font-serif text-sm tracking-wide transition-colors duration-300 ${
                useLightText ? 'text-white' : 'text-foreground'
              }`}>
                Sai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-300 rounded-full ${
                    isActive(link.href)
                      ? useLightText 
                        ? 'text-white bg-white/10' 
                        : 'text-primary bg-primary/10'
                      : useLightText 
                        ? 'text-white/60 hover:text-white hover:bg-white/5' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                useLightText 
                  ? 'text-white bg-white/10 hover:bg-white/20' 
                  : 'text-foreground bg-secondary/50 hover:bg-secondary'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div 
              className="absolute inset-0 bg-foreground/95"
              style={{ backdropFilter: 'blur(40px) saturate(1.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Floating orbs for ambient effect */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[80px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-[60px]"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6">
              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-1">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href || 
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ 
                        delay: i * 0.08, 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="relative"
                    >
                      <Link
                        to={link.href}
                        className="relative block py-3 px-10 text-center group"
                      >
                        {/* Active background */}
                        {active && (
                          <motion.div
                            layoutId="mobile-nav-active"
                            className="absolute inset-0 bg-primary/20 rounded-2xl"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        
                        <span className={`relative font-serif text-4xl sm:text-5xl transition-colors ${
                          active 
                            ? 'text-primary' 
                            : 'text-background/60 group-hover:text-background'
                        }`}>
                          {link.name}
                        </span>

                        {/* Hover underline */}
                        {!active && (
                          <motion.div
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/40 group-hover:w-12 transition-all duration-300 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 flex flex-col items-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-background/20" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-background/30">
                    Since 2000
                  </span>
                  <div className="w-8 h-px bg-background/20" />
                </div>
                <span className="text-[10px] text-background/20">
                  India • Kenya
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
