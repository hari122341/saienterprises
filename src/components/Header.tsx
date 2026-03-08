import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
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
          setIsScrolled(window.scrollY > 20);
          setIsHeroSection(window.scrollY < window.innerHeight * 0.5);
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
  const showSolid = !isInHero || isScrolled;

  const isActive = useCallback((href: string) => {
    if (href === '/machinery') return location.pathname.startsWith('/machinery');
    return location.pathname === href;
  }, [location.pathname]);

  return (
    <>
      {/* ─── Fixed navbar ─── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-[100] top-0 left-0 right-0"
      >
        {/* Glass bar */}
        <div className={`transition-all duration-500 ${
          showSolid
            ? 'bg-background/92 backdrop-blur-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] border-b border-border/30'
            : 'bg-white/[0.04] backdrop-blur-md'
        }`}>
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[68px]">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 group">
                <img
                  src={saiLogoCmyk}
                  alt="Sai Enterprises"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
                <div className="flex flex-col">
                  <span className={`font-serif text-[13px] sm:text-sm font-bold tracking-[0.01em] leading-tight transition-colors duration-300 ${
                    showSolid ? 'text-foreground' : 'text-white'
                  }`}>
                    Sai Enterprises
                  </span>
                  <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${
                    showSolid ? 'text-primary' : 'text-white/50'
                  }`}>
                    Graphic Machinery
                  </span>
                </div>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center">
                <div className={`flex items-center rounded-full px-1 py-1 transition-all duration-500 ${
                  showSolid ? 'bg-secondary/50' : 'bg-white/[0.06]'
                }`}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`relative px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] font-medium rounded-full transition-all duration-300 ${
                        isActive(link.href)
                          ? showSolid
                            ? 'text-primary-foreground bg-primary shadow-sm'
                            : 'text-white bg-white/20'
                          : showSolid
                            ? 'text-muted-foreground hover:text-foreground'
                            : 'text-white/55 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Phone + CTA */}
                <div className="flex items-center gap-3 ml-5">
                  <a
                    href="tel:+919312175513"
                    className={`hidden xl:flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-300 ${
                      showSolid ? 'text-muted-foreground hover:text-foreground' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    <Phone className="w-3 h-3" />
                    +91 931 217 5513
                  </a>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.1em] font-semibold transition-all duration-300 ${
                      showSolid
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : 'bg-white text-foreground hover:bg-white/90'
                    }`}
                  >
                    Get Quote
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </nav>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(p => !p)}
                className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                  showSolid
                    ? 'text-foreground bg-secondary/60 hover:bg-secondary'
                    : 'text-white bg-white/10 hover:bg-white/20'
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                      <X className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
                      <Menu className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] lg:hidden bg-foreground/[0.98]"
          >
            <div className="h-full flex flex-col items-center justify-center px-8 relative">
              <nav className="flex flex-col items-center gap-2">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href ||
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link to={link.href} className="block py-2 text-center">
                        <span className={`font-serif text-4xl sm:text-5xl transition-colors ${
                          active ? 'text-primary font-bold' : 'text-background/35 hover:text-background/65'
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
                transition={{ delay: 0.35 }}
                className="absolute bottom-10 flex flex-col items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/20">
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
