import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Palette } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { themes, currentTheme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <motion.button
        className="theme-toggle-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={20} />
      </motion.button>
      <div className="theme-dropdown">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
            onClick={() => setTheme(theme.id)}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="theme-color-preview" style={{ background: theme.colors.primary }} />
            {theme.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
