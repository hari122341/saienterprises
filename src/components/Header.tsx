import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import saiLogoCmyk from '@/assets/sai-logo-cmyk.png';

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          setIsHeroSection(window.scrollY < window.innerHeight * 0.6);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { name: 'About', href: '/about' },
    { name: 'Machinery', href: '/machinery' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = useCallback((href: string) => {
    if (href === '/machinery') return location.pathname.startsWith('/machinery');
    return location.pathname === href;
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-50 rounded-full transition-all duration-300 ${
          isInHeroSection
            ? 'bg-transparent border border-white/10' 
            : 'bg-background/80 backdrop-blur-xl border border-border/30 shadow-sm'
        }`}
      >
        <div className="px-3 sm:px-5">
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8">
                <img 
                  src={saiLogoCmyk} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <span 
                  className={`font-serif text-sm sm:text-base font-bold tracking-wide leading-tight transition-colors duration-200 ${
                    useLightText ? 'text-white' : 'text-foreground'
                  }`}
                >
                  Sai Enterprises
                </span>
                <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                  useLightText ? 'text-white/50' : 'text-primary'
                }`}>
                  Graphic Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] font-semibold transition-colors duration-200 rounded-full ${
                    isActive(link.href)
                      ? useLightText 
                        ? 'text-white bg-white/15' 
                        : 'text-primary bg-primary/10'
                      : useLightText 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        useLightText ? 'bg-white' : 'bg-primary'
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                useLightText 
                  ? 'text-white bg-white/10 active:bg-white/20' 
                  : 'text-foreground bg-secondary/60 active:bg-secondary'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-foreground"
          >
            <div className="h-full flex flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-3">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href || 
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={link.href}
                        className="block py-2 text-center"
                      >
                        <span 
                          className={`font-serif text-3xl sm:text-4xl transition-colors ${
                            active 
                              ? 'text-primary font-bold' 
                              : 'text-background/50 active:text-background/70'
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <span className="absolute bottom-8 text-[10px] uppercase tracking-[0.15em] text-background/30">
                Since 2000 · India & Kenya
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
