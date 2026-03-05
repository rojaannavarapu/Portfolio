import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  darkGlass: {
    id: "darkGlass",
    name: "Dark Glass",
    colors: {
      bg: "#0a0a0f",
      bgSecondary: "rgba(15, 15, 25, 0.8)",
      text: "#e8e8f0",
      textSecondary: "#a8a8b8",
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#ec4899",
      cardBg: "rgba(25, 25, 40, 0.6)",
      cardBorder: "rgba(99, 102, 241, 0.3)",
      glowPrimary: "rgba(99, 102, 241, 0.5)",
      glowSecondary: "rgba(139, 92, 246, 0.4)",
    },
    effects: {
      blur: "blur(16px)",
      glass: true,
      neon: false,
    },
  },
  neonCyberpunk: {
    id: "neonCyberpunk",
    name: "Neon Cyberpunk",
    colors: {
      bg: "#000000",
      bgSecondary: "#0a0a0a",
      text: "#00ffff",
      textSecondary: "#ff00ff",
      primary: "#00ffff",
      secondary: "#ff00ff",
      accent: "#00ff00",
      cardBg: "rgba(10, 10, 10, 0.9)",
      cardBorder: "rgba(0, 255, 255, 0.8)",
      glowPrimary: "rgba(0, 255, 255, 0.8)",
      glowSecondary: "rgba(255, 0, 255, 0.8)",
    },
    effects: {
      blur: "none",
      glass: false,
      neon: true,
    },
  },
  minimalLight: {
    id: "minimalLight",
    name: "Minimal Light",
    colors: {
      bg: "#ffffff",
      bgSecondary: "#f8f9fa",
      text: "#1a1a1a",
      textSecondary: "#6c757d",
      primary: "#0d6efd",
      secondary: "#6610f2",
      accent: "#d63384",
      cardBg: "#ffffff",
      cardBorder: "rgba(0, 0, 0, 0.1)",
      glowPrimary: "rgba(13, 110, 253, 0.15)",
      glowSecondary: "rgba(102, 16, 242, 0.15)",
    },
    effects: {
      blur: "none",
      glass: false,
      neon: false,
    },
  },
  midnightPro: {
    id: "midnightPro",
    name: "Midnight Pro",
    colors: {
      bg: "#0f172a",
      bgSecondary: "#1e293b",
      text: "#f1f5f9",
      textSecondary: "#94a3b8",
      primary: "#3b82f6",
      secondary: "#60a5fa",
      accent: "#06b6d4",
      cardBg: "rgba(30, 41, 59, 0.8)",
      cardBorder: "rgba(59, 130, 246, 0.4)",
      glowPrimary: "rgba(59, 130, 246, 0.3)",
      glowSecondary: "rgba(96, 165, 250, 0.3)",
    },
    effects: {
      blur: "blur(8px)",
      glass: true,
      neon: false,
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "darkGlass";
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const theme = themes[currentTheme];

  const value = {
    theme,
    currentTheme,
    setTheme: setCurrentTheme,
    themes: Object.values(themes),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
