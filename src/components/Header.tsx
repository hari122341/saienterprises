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
        className={`fixed top-4 left-4 right-4 z-50 rounded-full transition-all duration-300 ${
          isInHeroSection
            ? 'bg-white/5 backdrop-blur-md border border-white/10' 
            : 'bg-background/70 backdrop-blur-xl border border-border/40 shadow-lg'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10">
                <img 
                  src={saiLogoCmyk} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <span 
                  className={`font-serif text-base sm:text-lg font-bold tracking-wide leading-tight transition-colors duration-200 ${
                    useLightText ? 'text-white' : 'text-foreground'
                  }`}
                >
                  Sai Enterprises
                </span>
                <span className={`text-[8px] sm:text-[9px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                  useLightText ? 'text-white/50' : 'text-primary'
                }`}>
                  Graphic Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-200 rounded-full ${
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
                    <span
                      className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
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
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                useLightText 
                  ? 'text-white bg-white/15 active:bg-white/25' 
                  : 'text-foreground bg-secondary/60 active:bg-secondary'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                      initial={{ opacity: 0, y: 20 }}
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
                              ? 'text-primary font-semibold' 
                              : 'text-background/40 active:text-background/70'
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <span className="absolute bottom-10 text-[10px] uppercase tracking-[0.15em] text-background/20">
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
