import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import { NAV_LINKS, COMPANY } from '@/constants';
import Button from '@/components/common/Button';
import logo from '@/assets/images/logo.webp';
import { slideInFromLeft } from '@/animations/variants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-nav border-b border-border-light py-3 transition-all duration-300"
      role="banner"
    >
      <div className="container-custom">
        <nav
          className="flex items-center justify-between w-full"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Seravo Life Sciences Home"
            >
              {/* Image wrapper to crop out any baked-in border from the image file */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center mix-blend-multiply">
                <img src={logo} alt="Seravo Life Sciences Logo" className="absolute w-[115%] h-[115%] max-w-none object-fill" />
              </div>
              
              <div className="flex flex-col justify-center">
                <span
                  className="text-xl md:text-2xl font-black font-heading tracking-tight leading-none text-navy mb-0.5 uppercase"
                >
                  Seravo
                </span>
                <span
                  className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase leading-none text-text-muted"
                >
                  Life Sciences
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-none items-center justify-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-text-heading hover:text-primary'
                }`}
              >
                {link.name}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-success rounded-full origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <div className="hidden md:block">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={HiPhone}
              >
                Request Callback
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-text-heading hover:bg-light-bg ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white shadow-elevated lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2.5">
                    <img src={logo} alt="Seravo Life Sciences Logo" className="h-10 w-auto object-contain" />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold font-heading text-text-heading leading-tight">
                        Seravo
                      </span>
                      <span className="text-[10px] font-medium tracking-wider uppercase text-text-muted leading-none">
                        Life Sciences
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-text-muted hover:bg-light-bg transition-colors"
                    aria-label="Close menu"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive(link.path)
                            ? 'bg-medical-light text-primary'
                            : 'text-text-heading hover:bg-light-bg hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-border-light">
                  <Button to="/contact" variant="primary" size="lg" fullWidth icon={HiPhone}>
                    Request Callback
                  </Button>
                  <p className="text-center text-xs text-text-muted mt-4">
                    {COMPANY.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
