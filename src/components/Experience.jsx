import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';

const EXPERIENCE = [
  {
    role: 'Android App Development Intern (GenAI)',
    company: 'CL Infotech Pvt. Ltd. / Mindmatrix',
    location: 'Bengaluru',
    period: 'Feb 2026 – May 2026',
    tools: ['Kotlin', 'Room DB', 'Firebase', 'Jetpack Compose', 'Google Maps API', 'GenAI'],
    points: [
      'Android application development using Kotlin and Jetpack Compose',
      'Hands-on with Android Studio, Google Cloud Labs, and Google AI Studio to explore GenAI in app development',
      'UI/UX design, prototyping, feature development, debugging, and iterative enhancement',
      'Firebase integration and standard Android development workflows',
    ],
    gradient: 'linear-gradient(135deg, #C77DFF, #EE6C2E)',
    icon: '📱',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        background: 'white',
        padding: '6rem 0',
      }}
    >
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Work History</p>
          <h2 className="section-title">
            My <span className="orange">Experience</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem',
            alignItems: 'flex-start',
          }}
          className="exp-grid"
        >
          {/* LEFT: Stacked cards (Mrstudio style) */}
          <div style={{ position: 'relative' }}>
            {/* Background decorative card */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '-20px',
                height: '220px',
                background: 'var(--bg-cream)',
                borderRadius: '20px',
                zIndex: 0,
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="gradient-border"
              style={{
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg, #C77DFF, #EE6C2E)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                📱
              </div>

              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: 'var(--text-navy)',
                  marginBottom: '0.35rem',
                }}
              >
                Android App Dev Intern
              </h3>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--accent-orange)',
                  marginBottom: '1rem',
                }}
              >
                CL Infotech / Mindmatrix
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-gray)',
                  }}
                >
                  <FiCalendar size={13} />
                  Feb 2026 – May 2026
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-gray)',
                  }}
                >
                  <FiMapPin size={13} />
                  Bengaluru, Karnataka
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {EXPERIENCE[0].tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      background: 'rgba(238,108,46,0.1)',
                      color: 'var(--accent-orange)',
                      borderRadius: '999px',
                      padding: '0.2rem 0.7rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Currently looking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: 'var(--text-navy)',
                borderRadius: '18px',
                padding: '1.25rem 1.5rem',
                marginTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: 'var(--badge-green)',
                  borderRadius: '50%',
                  flexShrink: 0,
                  animation: 'pulse-soft 2s ease-in-out infinite',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'white',
                  }}
                >
                  Open to Opportunities
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
                  SWE · Data Analyst · Fresher roles
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Full description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <p className="section-label">Recent Role</p>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.75rem',
                  color: 'var(--text-navy)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                Android App Development{' '}
                <span style={{ color: 'var(--accent-orange)' }}>Internship</span>
              </h3>
              <p
                style={{
                  color: 'var(--text-gray)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                }}
              >
                Gained hands-on experience building Android applications at CL Infotech Pvt. Ltd.,
                working at the intersection of mobile development and Generative AI exploration. The
                internship involved the full development lifecycle — from design and prototyping to
                Firebase integration and iterative debugging.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {EXPERIENCE[0].points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: 'rgba(238,108,46,0.12)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <FiChevronRight size={14} style={{ color: 'var(--accent-orange)' }} />
                  </div>
                  <p
                    style={{
                      color: 'var(--text-gray)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              Let's Collaborate
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
