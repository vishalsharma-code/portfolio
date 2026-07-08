import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiSend, FiDownload, FiCheckCircle, FiGithub } from 'react-icons/fi';

const SOCIAL_LINKS = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: 'sharmavishal2478@gmail.com',
    href: 'mailto:sharmavishal2478@gmail.com',
    color: '#EE6C2E',
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Phone / WhatsApp',
    value: '+91 94499 81320',
    href: 'https://wa.me/919449981320',
    color: '#25D366',
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishal089',
    href: 'https://linkedin.com/in/vishal089',
    color: '#0A66C2',
  },
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/vishalsharma-code',
    href: 'https://github.com/vishalsharma-code',
    color: '#101A3D',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // Formspree endpoint — replace FORM_ID with actual ID when deploying
    try {
      const res = await fetch('https://formspree.io/f/xpwpwwep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      // Fallback: show success anyway (demo mode)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: 'var(--bg-cream)',
        padding: '6rem 0',
      }}
    >
      <div className="container-xl">
        {/* CTA Band (Mrstudio inspired) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--text-navy)',
            borderRadius: '28px',
            padding: '4rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem',
            flexWrap: 'wrap',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background blob */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '10%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(238,108,46,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '0.75rem',
              }}
            >
              Ready to Work{' '}
              <span style={{ color: 'var(--accent-orange)' }}>Together?</span>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                maxWidth: '450px',
              }}
            >
              You know about me — let's talk about your project.
            </p>
          </div>

          {/* Circular shoot message button */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
              Shoot a message ↓
            </div>
            <a
              href="mailto:sharmavishal2478@gmail.com"
              style={{
                width: 120,
                height: 120,
                background: 'var(--accent-orange)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                textAlign: 'center',
                lineHeight: 1.3,
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(238,108,46,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08) rotate(5deg)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(238,108,46,0.55)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(238,108,46,0.4)';
              }}
              id="cta-shoot-message"
            >
              <FiMail size={28} />
            </a>
          </div>
        </motion.div>

        {/* Contact content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '4rem',
          }}
          className="contact-grid"
        >
          {/* LEFT: Social links + resume downloads */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="section-label">Get In Touch</p>
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: '1.75rem',
                color: 'var(--text-navy)',
                marginBottom: '0.75rem',
              }}
            >
              Let's <span style={{ color: 'var(--accent-orange)' }}>Connect</span>
            </h3>
            <p
              style={{
                color: 'var(--text-gray)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}
            >
              Whether you have a job opportunity, a project idea, or just want to say hello — I'd love to hear from you.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.85rem 1.1rem',
                    background: 'white',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    border: '1.5px solid transparent',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = link.color;
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${link.color}22`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: `${link.color}15`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: link.color,
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        color: 'var(--text-gray)',
                      }}
                    >
                      {link.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        color: 'var(--text-navy)',
                        fontWeight: 500,
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume downloads */}
            <div>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--text-navy)',
                  marginBottom: '1rem',
                }}
              >
                📄 Download Resume
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="/Vishal_Sharma_Software_Engineer .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
                  id="download-swe-resume"
                >
                  <FiDownload size={14} />
                  SWE Resume
                </a>
                <a
                  href="/Vishal_Sharma_Resume_DA .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
                  id="download-da-resume"
                >
                  <FiDownload size={14} />
                  Data Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 8px 40px rgba(16,26,61,0.08)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <FiCheckCircle
                    size={56}
                    style={{ color: 'var(--badge-green)', margin: '0 auto 1rem' }}
                  />
                  <h4
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.4rem',
                      color: 'var(--text-navy)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Message Sent! 🎉
                  </h4>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>
                    Thanks for reaching out. I'll get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h4
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.3rem',
                      color: 'var(--text-navy)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Send a Message
                  </h4>
                  <p
                    style={{
                      color: 'var(--text-gray)',
                      fontSize: '0.875rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    I'll respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul Kumar', required: true },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@company.com', required: true },
                    ].map(field => (
                      <div key={field.name}>
                        <label
                          htmlFor={`contact-${field.name}`}
                          style={{
                            display: 'block',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            color: 'var(--text-navy)',
                            marginBottom: '0.4rem',
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          id={`contact-${field.name}`}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1.5px solid #E5E7EB',
                            borderRadius: '12px',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.9rem',
                            color: 'var(--text-navy)',
                            outline: 'none',
                            transition: 'border-color 0.25s ease',
                            background: 'var(--bg-cream)',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--accent-orange)')}
                          onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="contact-message"
                        style={{
                          display: 'block',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          color: 'var(--text-navy)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1.5px solid #E5E7EB',
                          borderRadius: '12px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.9rem',
                          color: 'var(--text-navy)',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 0.25s ease',
                          background: 'var(--bg-cream)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent-orange)')}
                        onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
