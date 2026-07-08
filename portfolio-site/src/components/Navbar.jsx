import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '0.5rem' : '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? '98%' : '94%',
        maxWidth: '1200px',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          background: 'white',
          borderRadius: '999px',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled ? '0 8px 40px rgba(16,26,61,0.12)' : '0 4px 20px rgba(16,26,61,0.08)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: '1.25rem',
            color: 'var(--text-navy)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          VS<span style={{ color: 'var(--accent-orange)' }}>.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex" style={{ gap: '2rem' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.55rem 1.5rem', fontSize: '0.875rem' }}
          >
            Hire Me
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-navy)',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '1.5rem',
            marginTop: '0.5rem',
            boxShadow: '0 8px 40px rgba(16,26,61,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
