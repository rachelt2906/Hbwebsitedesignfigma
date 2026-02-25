import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomCursor } from "./CustomCursor";

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/work", label: "Work" },
    { path: "/gallery", label: "Gallery" },
    { path: "/offerings", label: "Offerings" },
    { path: "/formats", label: "Formats" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-[#e2ddd6]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
      <CustomCursor />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[52px] py-7 flex items-center justify-between ${
          scrolled ? 'bg-[rgba(7,7,10,0.95)] backdrop-blur-md' : 'bg-gradient-to-b from-[rgba(7,7,10,0.95)] to-transparent'
        }`}
      >
        <Link to="/" className="group" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <motion.h1 
            className="text-xl tracking-[0.2em] uppercase font-light"
            whileHover={{ scale: 1.05 }}
          >
            THE <span style={{ color: 'var(--brass)' }}>HARBOURERS</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-[0.72rem] tracking-[0.15em] uppercase transition-colors"
              style={{ color: location.pathname === link.path ? 'var(--brass)' : 'var(--text-dim)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[var(--border)] fixed top-[72px] left-0 right-0 z-40"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-lg tracking-wide hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#07070a] border-t border-[var(--border)] py-10 px-[52px]">
        <div className="flex justify-between items-center">
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--text-dim)' }}>
            The Harbourers
          </div>
          <div className="text-[0.68rem] tracking-[0.1em]" style={{ color: 'var(--text-muted)' }}>
            © 2026 The Harbourers. All rights reserved.
          </div>
          <div className="hidden md:flex gap-7">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[0.65rem] tracking-[0.15em] uppercase transition-colors hover:text-[var(--brass)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}