import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiGlobe } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const EDUCATION = [
  {
    degree: 'B.E. Computer Science & Engineering (Data Science)',
    institution: 'K N S Institute of Technology — VTU, Bengaluru',
    year: '2022 – 2026',
    score: 'CGPA: 8.22',
  },
  {
    degree: 'PUC (PCMC)',
    institution: 'Sindhi PU College, Bengaluru',
    year: '2020 – 2022',
    score: '77.77%',
  },
  {
    degree: 'SSLC',
    institution: 'Royal Academy Public School, Bengaluru',
    year: '2020',
    score: '86.88%',
  },
];

const LANGUAGES = ['English', 'Hindi', 'Kannada'];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: 'white',
        padding: '6rem 0',
      }}
    >
      <div className="container-xl">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">
            About <span className="orange">Me</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* LEFT: Stat card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            {/* Large stat card */}
            <div
              style={{
                background: 'var(--bg-cream)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))',
                  borderRadius: '24px 24px 0 0',
                }}
              />
              <div
                style={{
                  fontSize: '4rem',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  color: 'var(--text-navy)',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}
              >
                8.22
              </div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: 'var(--accent-orange)',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                CGPA — VTU
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {[
                  { num: '4', label: 'Certifications' },
                  { num: '3', label: 'Major Projects' },
                  { num: '99%+', label: 'Data Accuracy' },
                  { num: '2026', label: 'CS Graduate' },
                ].map(item => (
                  <div
                    key={item.label}
                    style={{
                      background: 'white',
                      borderRadius: '14px',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        color: 'var(--accent-orange)',
                      }}
                    >
                      {item.num}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-gray)',
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                background: 'linear-gradient(135deg, #C77DFF, #EE6C2E)',
                borderRadius: '14px',
                padding: '0.75rem 1.25rem',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                boxShadow: '0 8px 25px rgba(238,108,46,0.35)',
              }}
            >
              🎓 CS Graduate
            </motion.div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <p className="section-label">My Story</p>
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: '1.8rem',
                color: 'var(--text-navy)',
                marginBottom: '1.25rem',
                lineHeight: 1.25,
              }}
            >
              A Graduate Who Bridges{' '}
              <span style={{ color: 'var(--accent-orange)' }}>Code & Data</span>
            </h3>
            <p
              style={{
                color: 'var(--text-gray)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Detail-oriented and intellectually curious Computer Science & Engineering (Data Science)
              graduate with hands-on experience in React.js, JavaScript, Python, SQL/MySQL, and
              Business Intelligence tools (Power BI, Tableau). Comfortable working independently to
              deliver accurate, reliable results — from application development and debugging to data
              validation, visualization, and insight generation. Experienced applying Generative AI
              tools (Claude, Copilot) to accelerate analysis and reporting.
            </p>

            {/* Education */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                <FiBookOpen size={18} style={{ color: 'var(--accent-orange)' }} />
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-navy)',
                  }}
                >
                  Education
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {EDUCATION.map((edu, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div className="timeline-dot" style={{ marginTop: '5px' }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          color: 'var(--text-navy)',
                        }}
                      >
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>
                        {edu.institution}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.75rem',
                          marginTop: '0.2rem',
                        }}
                      >
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>
                          {edu.year}
                        </span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--accent-orange)',
                          }}
                        >
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <FiGlobe size={18} style={{ color: 'var(--accent-orange)' }} />
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-navy)',
                  }}
                >
                  Languages
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {LANGUAGES.map(lang => (
                  <span key={lang} className="skill-chip">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
