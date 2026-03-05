import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Accenture (Client: TIAA)',
      role: 'Network Operations Engineer',
      period: '2024 - Present',
      description: [
        'Manage L2 network operations for a large-scale Cisco environment, ensuring 100% SLA compliance for high-priority incidents and outages.',
        'Utilize Cisco DNAC and Infoblox for proactive network monitoring, troubleshooting connectivity, and mitigation of potential network degradation.',
        'Resolve complex routing and switching issues and perform Root Cause Analysis (RCA) to drive long-term infrastructure stability and performance.',
        'Oversee end-to-end incident management using Express Ticketing, providing detailed technical documentation to global stakeholders.',
      ],
      technologies: ['Cisco DNAC', 'Infoblox', 'Routing & Switching', 'TCP/IP', 'RCA', 'SLA Management'],
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <motion.div
                className="timeline-content glass-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-period">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
