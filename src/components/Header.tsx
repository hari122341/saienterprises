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
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'z-[201] bg-foreground'
            : isInHero
              ? 'z-[100] bg-transparent'
              : 'z-[100] bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-[0_1px_20px_-6px_hsl(var(--foreground)/0.08)]'
        }`}
      >
        <div className="px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 relative z-10">
              <motion.img
                src={saiLogoCmyk}
                alt="Sai Enterprises"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
                whileHover={{ scale: 1.05 }}
                loading="eager"
              />
              <div className="flex flex-col">
                <span className={`font-serif text-sm sm:text-[15px] font-bold tracking-wide leading-tight transition-colors duration-300 ${
                  isInHero || isMobileMenuOpen ? 'text-white' : 'text-foreground'
                }`}>
                  Sai Enterprises
                </span>
                <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isInHero || isMobileMenuOpen ? 'text-white/50' : 'text-muted-foreground'
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
                  className={`ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 ${
                    isInHero
                      ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md'
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
              className={`md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'text-white bg-white/10'
                  : isInHero
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

      {/* Mobile overlay — z-[200] ensures it's above everything except header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[200] md:hidden bg-foreground overflow-hidden animate-fade-in">
            <div className="h-full flex flex-col items-center justify-center px-8">
              <nav className="flex flex-col items-center gap-3">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href ||
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));

                  return (
                    <div
                      key={link.name}
                      className="animate-fade-up"
                      style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-center"
                      >
                        <span className={`font-serif text-4xl sm:text-5xl transition-colors duration-300 ${
                          active ? 'text-primary font-bold' : 'text-white/50 hover:text-white/70'
                        }`}>
                          {link.name}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </nav>

              <div
                className="absolute bottom-12 flex flex-col items-center gap-5 animate-fade-up"
                style={{ animationDelay: '300ms', animationFillMode: 'both' }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:bg-primary/90"
                >
                  Get a Quote <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                  Since 2000 · India & Kenya
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
