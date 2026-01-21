import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';

// Section IDs that correspond to homepage sections
const homepageSections: Record<string, string> = {
  '/about': 'about',
  '/contact': 'contact',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

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
  const isInHeroSection = isHomepage && isHeroSection && !isScrolled;
  const useLightText = isInHeroSection;

  const navLinks = [
    { name: 'About', href: '/about', sectionId: 'about' },
    { name: 'Machinery', href: '/machinery', sectionId: null },
    { name: 'Brands', href: '/brands', sectionId: 'partners' },
    { name: 'Contact', href: '/contact', sectionId: 'contact' },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string, sectionId: string | null) => {
    // If we're on homepage and there's a corresponding section, scroll to it
    if (isHomepage && sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    }
    // Otherwise, navigate normally (handled by Link)
  }, [isHomepage, scrollToSection]);

  const isActive = (href: string) => {
    if (href === '/machinery') return location.pathname.startsWith('/machinery');
    return location.pathname === href;
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-full ${
          isInHeroSection
            ? 'bg-transparent border-transparent' 
            : 'bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-foreground/[0.08]'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div 
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 transition-all duration-300 ${
                  useLightText ? 'ring-white/20' : 'ring-primary/20'
                }`}
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={saiLogo} alt="Sai Enterprises" className="w-full h-full object-cover" />
              </motion.div>
              <motion.span 
                className={`font-serif text-base sm:text-lg tracking-wide transition-colors duration-300 ${
                  useLightText ? 'text-white' : 'text-foreground'
                }`}
                whileHover={{ x: 2 }}
              >
                Sai <span className="font-light">Enterprises</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                    className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-300 rounded-full group ${
                      isActive(link.href)
                        ? useLightText 
                          ? 'text-white bg-white/15' 
                          : 'text-primary bg-primary/10'
                        : useLightText 
                          ? 'text-white/70 hover:text-white hover:bg-white/10' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                          useLightText ? 'bg-white' : 'bg-primary'
                        }`}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                useLightText 
                  ? 'text-white bg-white/15 hover:bg-white/25' 
                  : 'text-foreground bg-secondary/60 hover:bg-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Menu className="w-5 h-5" />
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Clean dark backdrop */}
            <motion.div 
              className="absolute inset-0 bg-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6">
              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-4">
                {[{ name: 'Home', href: '/', sectionId: null as string | null }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href || 
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.9 }}
                      transition={{ 
                        delay: i * 0.08, 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                    >
                      <Link
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                        className="relative block py-2 text-center group"
                      >
                        <motion.span 
                          className={`relative font-serif text-4xl sm:text-5xl transition-all duration-300 ${
                            active 
                              ? 'text-primary font-semibold' 
                              : 'text-background/30 group-hover:text-background/70'
                          }`}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Minimal footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 text-center"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/20">
                  Since 2000 • India & Kenya
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
