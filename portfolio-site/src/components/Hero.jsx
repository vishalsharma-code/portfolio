import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiMapPin, FiCode } from 'react-icons/fi';
import avatarImg from '../assets/avatar.png';

const ROLES = [
  { text: 'Software Engineer', color: 'var(--text-navy)', icon: '⚛️' },
  { text: 'Data Analyst', color: 'var(--accent-orange)', icon: '📊' },
];

const TOOL_BADGES = ['React.js', 'Python', 'SQL', 'Power BI', 'Tableau'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx(i => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const role = ROLES[roleIdx];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--bg-cream)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(199,125,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-8rem',
          left: '-8rem',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(238,108,46,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative dots */}
      <div className="dot" style={{ top: '20%', right: '38%', color: '#EE6C2E', animationDelay: '0s' }} />
      <div className="dot" style={{ top: '35%', right: '20%', color: '#3B82F6', animationDelay: '1s' }} />
      <div className="dot" style={{ bottom: '30%', right: '35%', color: '#2ECC71', animationDelay: '2s' }} />
      <div className="dot" style={{ top: '55%', left: '5%', color: '#C77DFF', animationDelay: '0.5s' }} />

      <div className="container-xl" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                borderRadius: '999px',
                padding: '0.4rem 1rem',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: 'var(--badge-green)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'pulse-soft 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--text-navy)',
                }}
              >
                Available for Opportunities
              </span>
            </div>

            {/* Greeting */}
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: 'var(--text-gray)',
                marginBottom: '0.5rem',
              }}
            >
              Hi there! 👋 I am
            </p>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                color: 'var(--text-navy)',
                lineHeight: 1.05,
                marginBottom: '0.75rem',
              }}
            >
              Vishal{' '}
              <span style={{ color: 'var(--accent-orange)' }}>Sharma</span>
            </h1>

            {/* Animated role */}
            <div
              style={{
                height: '2.2rem',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              <motion.div
                key={roleIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  color: role.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>{role.icon}</span>
                <span>{role.text}</span>
              </motion.div>
            </div>

            {/* Bio */}
            <p
              style={{
                color: 'var(--text-gray)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '0.75rem',
                maxWidth: '520px',
              }}
            >
              Detail-oriented CS & Engineering (Data Science) graduate with hands-on experience in
              React.js, Python, SQL, and Business Intelligence tools — from building web applications
              to delivering Power BI dashboards and ML models.
            </p>

            {/* Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-gray)',
                fontSize: '0.9rem',
                marginBottom: '2rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <FiMapPin size={15} style={{ color: 'var(--accent-orange)' }} />
              Bengaluru, Karnataka
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a
                href="/Vishal_Sharma_Software_Engineer .pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="hero-download-resume"
              >
                <FiDownload size={16} />
                View Resume
              </a>
              <a href="#contact" className="btn-outline" id="hero-contact">
                <FiMail size={16} />
                Contact Me
              </a>
            </div>

            {/* Tool badges */}
            <div>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-gray)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Top Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {TOOL_BADGES.map(badge => (
                  <span key={badge} className="skill-chip" style={{ fontSize: '0.8rem' }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Avatar + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Avatar container */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Gradient ring behind avatar */}
              <div
                style={{
                  width: '400px',
                  height: '420px',
                  borderRadius: '50% 50% 50% 50% / 45% 45% 55% 55%',
                  background: 'linear-gradient(135deg, rgba(199,125,255,0.25), rgba(238,108,46,0.25))',
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
              <img
                src={avatarImg}
                alt="Vishal Sharma — Software Engineer & Data Analyst"
                style={{
                  width: '380px',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '50% 50% 50% 50% / 45% 45% 55% 55%',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 20px 40px rgba(16,26,61,0.15))',
                }}
              />

              {/* Floating badge: Best Design */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '4%',
                  right: '-5%',
                  background: 'white',
                  borderRadius: '16px',
                  padding: '0.75rem 1rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  zIndex: 10,
                  minWidth: '160px',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🏆</span>
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: 'var(--text-navy)',
                    }}
                  >
                    8.22 CGPA
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-gray)',
                    }}
                  >
                    VTU Graduate
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '-8%',
                  background: 'white',
                  borderRadius: '16px',
                  padding: '0.75rem 1rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(238,108,46,0.12)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiCode size={18} style={{ color: 'var(--accent-orange)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--text-navy)',
                    }}
                  >
                    3 Projects
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--badge-green)', fontWeight: 600 }}>
                    Delivered ✓
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Dual-track */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '28%',
                  right: '-10%',
                  background: 'linear-gradient(135deg, #C77DFF, #EE6C2E)',
                  borderRadius: '14px',
                  padding: '0.6rem 1rem',
                  boxShadow: '0 8px 25px rgba(238,108,46,0.3)',
                  zIndex: 10,
                  color: 'white',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                  }}
                >
                  SWE + Data
                </div>
                <div style={{ fontSize: '0.68rem', opacity: 0.9 }}>Dual Expertise</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 24,
            height: 36,
            border: '2px solid rgba(16,26,61,0.25)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: 'var(--accent-orange)',
              borderRadius: '2px',
            }}
          />
        </motion.div>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            color: 'var(--text-gray)',
            opacity: 0.6,
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
