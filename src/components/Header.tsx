import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import saiLogoCmyk from '@/assets/sai-logo-cmyk.png';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Machinery', href: '/machinery' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

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

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isHomepage = location.pathname === '/';
  const isInHero = isHomepage && isHeroSection && !isScrolled;

  const isActive = useCallback((href: string) => {
    if (href === '/machinery') return location.pathname.startsWith('/machinery');
    return location.pathname === href;
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setIsMobileMenuOpen(p => !p), []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed z-[100] top-0 left-0 right-0 transition-all duration-500 ${
          isInHero
            ? 'bg-transparent'
            : 'bg-background/85 backdrop-blur-xl border-b border-border/20 shadow-sm'
        }`}
      >
        <div className="px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <motion.img
                src={saiLogoCmyk}
                alt="Sai Enterprises"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
                whileHover={{ scale: 1.05 }}
                loading="eager"
              />
              <div className="flex flex-col">
                <span className={`font-serif text-sm sm:text-[15px] font-bold tracking-wide leading-tight transition-colors duration-300 ${
                  isInHero ? 'text-white' : 'text-foreground'
                }`}>
                  Sai Enterprises
                </span>
                <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isInHero ? 'text-white/50' : 'text-muted-foreground'
                }`}>
                  Graphic Machinery Suppliers
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? isInHero
                          ? 'text-white'
                          : 'text-primary'
                        : isInHero
                          ? 'text-white/60 hover:text-white'
                          : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute bottom-0 left-4 right-4 h-[2px] ${
                          isInHero ? 'bg-white' : 'bg-primary'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  to="/contact"
                  className={`ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 ${
                    isInHero
                      ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  Get Quote
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile toggle */}
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.92 }}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isInHero
                  ? 'text-white bg-white/10 hover:bg-white/20'
                  : 'text-foreground bg-foreground/5 hover:bg-foreground/10'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden bg-foreground/98"
          >
            <div className="absolute inset-0 opacity-[0.04]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mob-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="hsl(var(--background))" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mob-grid)" />
              </svg>
            </div>

            <div className="h-full flex flex-col items-center justify-center px-8 relative">
              <nav className="flex flex-col items-center gap-3">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href ||
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link to={link.href} className="block py-2 text-center">
                        <span className={`font-serif text-4xl sm:text-5xl transition-colors ${
                          active ? 'text-primary font-bold' : 'text-background/40 hover:text-background/70'
                        }`}>
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-10 flex flex-col items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/25">
                  Since 2000 · India & Kenya
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
