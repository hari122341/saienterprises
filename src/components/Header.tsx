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
      {/* Floating Navbar - Always on top */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed z-[100] top-0 left-0 right-0 transition-all duration-500 ${
          isInHeroSection
            ? 'bg-white/5 backdrop-blur-md border-b border-white/10' 
            : 'bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-sm'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
              <motion.div 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img 
                  src={saiLogoCmyk} 
                  alt="Sai Enterprises" 
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </motion.div>
              <div className="flex flex-col">
                <span 
                  className={`font-serif text-sm sm:text-[15px] md:text-base font-bold tracking-wide leading-tight transition-colors duration-200 ${
                    useLightText ? 'text-white' : 'text-foreground'
                  }`}
                >
                  Sai Enterprises
                </span>
                <span className={`text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                  useLightText ? 'text-white/60' : 'text-primary'
                }`}>
                  Graphic Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`relative px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-300 rounded-full ${
                      isActive(link.href)
                        ? useLightText 
                          ? 'text-white bg-white/20' 
                          : 'text-primary bg-primary/10'
                        : useLightText 
                          ? 'text-white/70 hover:text-white hover:bg-white/10' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
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
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2 flex items-center justify-center transition-all duration-300 ${
                useLightText 
                  ? 'text-white hover:text-white/80' 
                  : 'text-foreground hover:text-foreground/70'
              }`}
              aria-label="Toggle menu"
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
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden bg-foreground"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at center, hsl(var(--background)) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            <div className="h-full flex flex-col items-center justify-center px-6 relative">
              <nav className="flex flex-col items-center gap-4">
                {[{ name: 'Home', href: '/' }, ...navLinks].map((link, i) => {
                  const active = location.pathname === link.href || 
                    (link.href === '/machinery' && location.pathname.startsWith('/machinery'));
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        className="block py-2 text-center"
                      >
                        <motion.span 
                          className={`font-serif text-4xl sm:text-5xl transition-colors ${
                            active 
                              ? 'text-primary font-bold' 
                              : 'text-background/50 hover:text-background/70'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-[10px] uppercase tracking-[0.2em] text-background/30"
              >
                Since 2000 · India & Kenya
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
