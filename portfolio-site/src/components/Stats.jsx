import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  {
    value: '8.22',
    suffix: '',
    label: 'CGPA',
    sublabel: 'VTU — B.E. CS (Data Science)',
    icon: '🎓',
    color: 'var(--accent-orange)',
  },
  {
    value: '4',
    suffix: '+',
    label: 'Certifications',
    sublabel: 'AWS, IBM, Simplilearn & more',
    icon: '📜',
    color: '#C77DFF',
  },
  {
    value: '3',
    suffix: '',
    label: 'Major Projects',
    sublabel: 'SWE + Data Analytics',
    icon: '🚀',
    color: 'var(--text-navy)',
  },
  {
    value: '99',
    suffix: '%+',
    label: 'Reporting Accuracy',
    sublabel: 'Supply Chain Data Project',
    icon: '✅',
    color: '#2ECC71',
  },
];

function StatCounter({ value, suffix, inView }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value.includes('.');
    const num = parseFloat(value);
    const duration = 1500;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(isDecimal ? current.toFixed(2) : Math.floor(current).toString());
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--text-navy)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(199,125,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(238,108,46,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--accent-orange)',
              marginBottom: '0.5rem',
            }}
          >
            By The Numbers
          </p>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'white',
              lineHeight: 1.15,
            }}
          >
            Real Results,{' '}
            <span style={{ color: 'var(--accent-orange)' }}>Measurable Impact</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.09)',
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: stat.color,
                  borderRadius: '24px 24px 0 0',
                }}
              />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                <StatCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'white',
                  marginBottom: '0.3rem',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
