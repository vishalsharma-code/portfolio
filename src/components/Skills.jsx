import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SWE_SKILLS = [
  { category: 'Languages', items: ['JavaScript', 'Python'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Database', items: ['SQL', 'MySQL'] },
  { category: 'Core CS', items: ['OOP', 'SDLC', 'STLC'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { category: 'Concepts', items: ['REST APIs', 'Debugging', 'Testing', 'Problem Solving'] },
];

const DA_SKILLS = [
  { category: 'Programming & Analysis', items: ['SQL', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Analysis', 'EDA'] },
  { category: 'BI & Visualization', items: ['Power BI', 'Tableau', 'MS Excel', 'Pivot Tables', 'VLOOKUP/XLOOKUP'] },
  { category: 'Data Platforms', items: ['Databricks'] },
  { category: 'GenAI & Agentic Tools', items: ['Claude', 'Microsoft Copilot'] },
  { category: 'Data Practices', items: ['Data Validation', 'ETL Concepts', 'Data Integration', 'Data Cleaning', 'Data Processing'] },
  { category: 'Version Control', items: ['Git', 'GitHub', 'VS Code'] },
];

const CHIP_ICONS = {
  'React.js': '⚛️', 'Python': '🐍', 'SQL': '🗄️', 'JavaScript': '🟨',
  'Power BI': '📊', 'Tableau': '📈', 'HTML5': '🌐', 'CSS3': '🎨',
  'Git': '🔀', 'MySQL': '🗃️', 'Claude': '🤖', 'Microsoft Copilot': '🤖',
  'Pandas': '🐼', 'NumPy': '🔢', 'Databricks': '⚡',
};

function SkillCategory({ category, items }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: 'white',
        borderRadius: '18px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(16,26,61,0.06)',
      }}
    >
      <h4
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '0.85rem',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '1rem',
        }}
      >
        {category}
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {items.map(item => (
          <span key={item} className="skill-chip">
            {CHIP_ICONS[item] && <span>{CHIP_ICONS[item]}</span>}
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('swe');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const skills = activeTab === 'swe' ? SWE_SKILLS : DA_SKILLS;

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: 'var(--bg-cream)',
        padding: '6rem 0',
      }}
    >
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">
            My <span className="orange">Skills</span>
          </h2>
          <p
            style={{
              color: 'var(--text-gray)',
              maxWidth: '500px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Expertise across two tracks — switch between them to explore.
          </p>
        </motion.div>

        {/* Toggle tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          <button
            id="skills-tab-swe"
            className={`filter-tab ${activeTab === 'swe' ? 'active' : ''}`}
            onClick={() => setActiveTab('swe')}
          >
            ⚛️ Software Engineering
          </button>
          <button
            id="skills-tab-da"
            className={`filter-tab ${activeTab === 'da' ? 'active' : ''}`}
            onClick={() => setActiveTab('da')}
          >
            📊 Data Analytics
          </button>
        </motion.div>

        {/* Track label banner */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'swe' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: activeTab === 'swe'
              ? 'linear-gradient(135deg, rgba(16,26,61,0.04), rgba(16,26,61,0.02))'
              : 'linear-gradient(135deg, rgba(238,108,46,0.06), rgba(238,108,46,0.02))',
            borderRadius: '20px',
            padding: '1.25rem 2rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderLeft: `4px solid ${activeTab === 'swe' ? 'var(--text-navy)' : 'var(--accent-orange)'}`,
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>{activeTab === 'swe' ? '⚛️' : '📊'}</span>
          <div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-navy)',
              }}
            >
              {activeTab === 'swe' ? 'Software Engineering Track' : 'Data Analytics Track'}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>
              {activeTab === 'swe'
                ? 'Building scalable, user-friendly applications with modern web technologies'
                : 'Transforming raw data into insights with BI tools, Python, and AI-assisted analytics'}
            </div>
          </div>
        </motion.div>

        {/* Skill grid */}
        <motion.div
          key={activeTab + '-grid'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skills.map((s) => (
            <SkillCategory key={s.category} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
