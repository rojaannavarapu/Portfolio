import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Andhra University',
      period: '2024 - Present',
      description: 'Relevant Coursework: Cloud Computing, Advanced Networking, Data Structures',
      achievements: [
        'Pursuing to deepen expertise in distributed systems',
        'Focus on cloud-native networking'
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Adikavi Nannaya University',
      period: 'Graduated 2023',
      description: 'Focus: Computer Networks, DBMS, and Operating Systems',
      achievements: [
        'Strong foundation in core computer science',
        'Academic excellence in DBMS and Networks'
      ],
    },
  ];

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="education-content">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="education-icon">
                <GraduationCap size={40} />
              </div>

              <div className="education-details">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <h4 className="education-institution">{edu.institution}</h4>
                  </div>
                  <div className="education-period">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>

                <div className="education-achievements">
                  <div className="achievements-title">
                    <Award size={18} />
                    <span>Achievements</span>
                  </div>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
