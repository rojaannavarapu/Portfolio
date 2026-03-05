import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Networking & Cloud',
      skills: ['BGP', 'OSPF', 'VLANs', 'STP', 'HSRP', 'TCP/IP', 'Subnetting', 'Azure VNet', 'NSG', 'Hybrid Cloud'],
    },
    {
      category: 'IPAM & Network Services',
      skills: ['Infoblox', 'DHCP', 'DNS Management', 'Dig Utility'],
    },
    {
      category: 'Monitoring & Diagnostics',
      skills: ['Cisco DNAC', 'Lighthouse', 'Control Center', 'PuTTY', 'Wireshark', 'Express Ticketing', 'RCA'],
    },
    {
      category: 'Systems & Programming',
      skills: ['Linux', 'Ubuntu/CentOS', 'Windows Server', 'Python', 'C Programming', 'Cybersecurity'],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="section-description">
            Technologies I've worked with and continue to master
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
