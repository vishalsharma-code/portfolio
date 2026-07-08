import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CERTS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: '#FF9900',
    bg: '#FFF8F0',
  },
  {
    name: 'IBM SkillBuild — AI & Data Analytics',
    issuer: 'IBM',
    icon: '🤖',
    color: '#1F70C1',
    bg: '#F0F5FF',
  },
  {
    name: 'SQL & Business Intelligence',
    issuer: 'Simplilearn',
    icon: '🗄️',
    color: '#EE6C2E',
    bg: '#FFF3EE',
  },
  {
    name: 'Data Analytics Virtual Experience',
    issuer: 'TATA',
    icon: '📊',
    color: '#00A2E8',
    bg: '#F0FAFF',
  },
  {
    name: 'SAP Data Analytics Cloud',
    issuer: 'SAP',
    icon: '💎',
    color: '#0070F3',
    bg: '#F0F5FF',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
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
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            <span className="orange">Certifications</span>
          </h2>
          <p
            style={{
              color: 'var(--text-gray)',
              maxWidth: '450px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Industry-recognized credentials validating expertise in cloud, AI, data, and BI.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: cert.bg,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  flexShrink: 0,
                  border: `2px solid ${cert.color}22`,
                }}
              >
                {cert.icon}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--text-navy)',
                    marginBottom: '0.2rem',
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: cert.color,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {cert.issuer}
                </div>
              </div>

              {/* Checkmark */}
              <div
                style={{
                  marginLeft: 'auto',
                  width: 28,
                  height: 28,
                  background: '#E8FFF2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
