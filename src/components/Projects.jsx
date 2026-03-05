import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const repos = [
    {
      id: 1,
      name: 'Azure Hybrid Connectivity Implementation',
      description: 'Designed secure Azure Virtual Networks with segmented subnets and restrictive Network Security Groups (NSGs). Implemented Point-to-Site and Site-to-Site connectivity between on-premise labs and Azure environments.',
      html_url: '#',
      stargazers_count: 0,
      forks_count: 0,
      language: 'Azure',
    },
    {
      id: 2,
      name: 'Automated Network Diagnostic Suite',
      description: 'Developed scripted utilities to automate repetitive diagnostic tasks, reducing incident verification time. Built health-check dashboards for Cisco switches to visualize port status and VLAN distribution.',
      html_url: '#',
      stargazers_count: 0,
      forks_count: 0,
      language: 'Python',
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      Python: '#3776ab',
      Azure: '#0078d4',
    };
    return colors[language] || '#8b8b8b';
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-description">
            Recent projects from my GitHub
          </p>
        </motion.div>

        <div className="projects-grid">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-header">
                <Github size={32} />
                <div className="project-links">
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{repo.name}</h3>
              <p className="project-description">
                {repo.description || 'No description available'}
              </p>

              <div className="project-footer">
                <div className="project-stats">
                  <span className="stat">
                    <Star size={16} />
                    {repo.stargazers_count}
                  </span>
                  <span className="stat">
                    <GitFork size={16} />
                    {repo.forks_count}
                  </span>
                </div>
                {repo.language && (
                  <div className="project-language">
                    <span
                      className="language-dot"
                      style={{ background: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
