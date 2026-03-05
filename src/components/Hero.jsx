import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Hero.css';

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rojaannavarapu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/roja-annavarapu19', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rojaannavarapu98@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {theme.effects.neon && <div className="cyber-grid" />}
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <Code2 size={16} />
          <span>Available for Opportunities</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Roja Sriprajna</span>
        </motion.h1>

        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Network Operations Engineer @ Accenture
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          Result-oriented professional with a strong foundation in L2/L3 infrastructure.
          <br />
          Passionate about maintaining high-availability environments and transitioning workloads to the cloud.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${theme.colors.glowPrimary}` }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-line" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
