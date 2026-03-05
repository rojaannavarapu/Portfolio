import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Briefcase, Code, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '1+' },
    { icon: Heart, label: 'SLA Compliance', value: '100%' },
    { icon: Code, label: 'Incident Mitigations', value: '15+' },
    { icon: User, label: 'Certifications', value: '3+' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card">
              <h3>Network Operations Engineer | Cloud Enthusiast | Problem Solver</h3>
              <p>
                I'm a result-oriented Network Operations Engineer at Accenture with a strong foundation in L2/L3 network infrastructure and incident management. Currently, I'm pursuing a Master of Computer Applications (MCA) at Andhra University to deepen my expertise in distributed systems and cloud-native networking.
              </p>
              <p>
                With a proven track record of maintaining high-availability environments for global clients like TIAA, my core focus lies in providing proactive network monitoring, resolving complex routing issues, and transitioning enterprise workloads to Microsoft Azure.
              </p>
              <p>
                I strive to ensure 100% SLA compliance for high-priority incidents and enjoy developing automated diagnostic scripts to optimize routine health checks and infrastructure stability.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="stat-icon">
                  <stat.icon size={28} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
