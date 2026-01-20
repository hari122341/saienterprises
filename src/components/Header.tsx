import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import saiLogo from '@/assets/sai-logo.png';
import { productCategories } from '@/data/products';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Partners', href: '#partners' },
    { name: 'Global Presence', href: '#global' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img
              src={saiLogo}
              alt="Sai Enterprises"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsOpen(false)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-xl border border-border overflow-hidden"
                      >
                        {productCategories.map((category) => (
                          <a
                            key={category.id}
                            href={`#${category.slug}`}
                            className="block px-4 py-3 hover:bg-secondary transition-colors"
                          >
                            <span className="font-medium text-foreground">
                              {category.name}
                            </span>
                            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                              {category.description}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-4"
          >
            <a
              href="mailto:reddydayaker@gmail.com"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">reddydayaker@gmail.com</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-wide py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-foreground font-medium hover:bg-secondary rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="mailto:reddydayaker@gmail.com"
                  className="flex items-center gap-2 py-3 px-4 text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-4 h-4" />
                  reddydayaker@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
