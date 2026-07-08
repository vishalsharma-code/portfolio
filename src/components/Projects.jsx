import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiTag } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'Student Management System',
    track: 'software',
    year: '2025',
    tools: ['React.js', 'Tailwind CSS', 'Django', 'HTML5', 'CSS3', 'REST APIs'],
    description:
      'Responsive CRUD application for managing student records with form validation, REST API integration, and a clean modern UI.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    emoji: '🎓',
    highlight: 'Full-stack CRUD App',
  },
  {
    id: 2,
    title: 'Supply Chain Analysis',
    track: 'data',
    year: '2025',
    tools: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'],
    description:
      'End-to-end supply chain analysis to identify bottlenecks, forecast demand, and optimize inventory. Achieved 99–100% reporting accuracy through structured data validation SOPs.',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    emoji: '🏭',
    highlight: '99–100% Accuracy',
  },
  {
    id: 3,
    title: 'House Price Prediction',
    track: 'data',
    year: '2023–24',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'SQL', 'Excel', 'Git'],
    description:
      'Cleaned and engineered features from raw housing datasets. Built and tuned regression models (Linear Regression, Random Forest). Used EDA and visualizations to uncover key price drivers.',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    emoji: '🏠',
    highlight: 'ML Regression Model',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'software', label: '⚛️ Software' },
  { id: 'data', label: '📊 Data' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.track === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: 'var(--bg-cream)',
        padding: '6rem 0',
      }}
    >
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Recent <span className="orange">Projects</span>
          </h2>
          <p
            style={{
              color: 'var(--text-gray)',
              maxWidth: '480px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Real outcomes, measurable results. Filter by track to explore.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {FILTERS.map(f => (
            <button
              key={f.id}
              id={`project-filter-${f.id}`}
              className={`filter-tab ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card"
                style={{ overflow: 'hidden' }}
              >
                {/* Thumbnail */}
                <div
                  className="proj-thumb"
                  style={{
                    background: project.gradient,
                    borderRadius: '0',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ fontSize: '3rem' }}>{project.emoji}</span>
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.9)',
                        textAlign: 'center',
                        padding: '0 1rem',
                      }}
                    >
                      {project.title}
                    </span>
                  </div>

                  {/* Track badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255,255,255,0.25)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '999px',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      fontFamily: 'Poppins, sans-serif',
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {project.track === 'software' ? '⚛️ Software' : '📊 Data'}
                  </div>

                  {/* Year badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(0,0,0,0.25)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '999px',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Highlight */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(238,108,46,0.1)',
                      borderRadius: '999px',
                      padding: '0.25rem 0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <FiTag size={11} style={{ color: 'var(--accent-orange)' }} />
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent-orange)',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {project.highlight}
                    </span>
                  </div>

                  <p
                    style={{
                      color: 'var(--text-gray)',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tool chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tools.map(tool => (
                      <span
                        key={tool}
                        style={{
                          background: 'var(--bg-cream)',
                          color: 'var(--text-navy)',
                          borderRadius: '999px',
                          padding: '0.2rem 0.65rem',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
