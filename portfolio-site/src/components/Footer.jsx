import React from 'react';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/vishalsharma-code', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/vishal089', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:sharmavishal2478@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--text-navy)',
        padding: '3rem 0 2rem',
      }}
    >
      <div className="container-xl">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '1.5rem',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '1.4rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            VS<span style={{ color: 'var(--accent-orange)' }}>.</span>
          </a>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-orange)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {SOCIALS.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent-orange)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © {new Date().getFullYear()} Vishal Sharma. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Built with React.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
