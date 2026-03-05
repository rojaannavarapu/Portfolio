# 🚀 Roja's Portfolio - Modern Developer Portfolio

A stunning, production-ready developer portfolio built with React, Vite, and Framer Motion. Features multiple theme options, smooth animations, and GitHub API integration.

## ✨ Features

### 🎨 Multiple UI Themes

- **Dark Glass** (Default) - Glassmorphism with blue/purple gradients
- **Neon Cyberpunk** - Dark theme with neon cyan/magenta glow
- **Minimal Light** - Clean, professional light theme
- **Midnight Pro** - Premium dark blue theme

### 📱 Sections

1. **Hero** - Animated introduction with social links and resume download
2. **About** - Professional summary with animated stats
3. **Skills** - Categorized skill chips with hover effects
4. **Experience** - Animated timeline of work history at Accenture
5. **Projects** - Auto-fetches GitHub repositories via API
6. **Education** - Academic background from Aditya Degree College
7. **Contact** - Contact form and information cards

### 🎯 Premium Features

- ✅ Theme switcher with localStorage persistence
- ✅ Smooth scroll navigation
- ✅ Scroll progress indicator
- ✅ Responsive mobile design
- ✅ Animated gradient backgrounds
- ✅ Loading screen animation
- ✅ Glass UI effects
- ✅ Smooth page transitions
- ✅ GitHub API integration
- ✅ SEO optimized

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS3** - Styling with custom properties
- **GitHub API** - Project fetching

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd roja-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

Or connect your GitHub repository to Vercel:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Deploy! (Vercel auto-detects Vite)

### Deploy to Netlify

1. **Build the project**

```bash
npm run build
```

2. **Deploy via Netlify CLI**

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or via Netlify UI:

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

## 🎨 Customization Guide

### 1. Personal Information

**Update your details in:**

#### Hero Section (`src/components/Hero.jsx`)

```javascript
// Update name, role, description, and social links
const socialLinks = [
  { icon: Github, href: "YOUR_GITHUB_URL", label: "GitHub" },
  { icon: Linkedin, href: "YOUR_LINKEDIN_URL", label: "LinkedIn" },
  { icon: Mail, href: "YOUR_EMAIL", label: "Email" },
];
```

#### Contact Section (`src/components/Contact.jsx`)

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "YOUR_EMAIL",
    href: "mailto:YOUR_EMAIL",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/YOUR_USERNAME",
    href: "YOUR_GITHUB",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "YOUR_LINKEDIN",
    href: "YOUR_LINKEDIN_URL",
  },
];
```

### 2. GitHub Projects

**Update GitHub username in `src/components/Projects.jsx`:**

```javascript
const response = await fetch(
  "https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6",
);
```

### 3. Skills

**Edit skills in `src/components/Skills.jsx`:**

```javascript
const skillCategories = [
  { category: 'Frontend', skills: ['React', 'JavaScript', ...] },
  { category: 'Backend', skills: ['Node.js', 'Python', ...] },
  // Add your own categories and skills
];
```

### 4. Experience

**Update work experience in `src/components/Experience.jsx`:**

```javascript
const experiences = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: 'Start - End',
    description: ['Achievement 1', 'Achievement 2', ...],
    technologies: ['Tech1', 'Tech2', ...],
  },
];
```

### 5. Education

**Update education in `src/components/Education.jsx`:**

```javascript
const educationData = [
  {
    degree: "Your Degree",
    institution: "Your Institution",
    period: "Start - End",
    description: "Description",
    achievements: ["Achievement 1", "Achievement 2"],
  },
];
```

### 6. About Section

**Edit the about text in `src/components/About.jsx`:**

```javascript
<p>Your professional summary here...</p>
```

### 7. Resume

Add your resume PDF to the `public` folder as `resume.pdf`, or update the link in Hero component.

### 8. Theme Colors

**Customize theme colors in `src/contexts/ThemeContext.jsx`:**

```javascript
darkGlass: {
  colors: {
    primary: '#6366f1', // Change to your color
    secondary: '#8b5cf6',
    // ... other colors
  }
}
```

### 9. Favicon & Meta Tags

**Update `index.html`:**

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description" />
```

Add your favicon to `public` folder.

## 📁 Project Structure

```
roja-portfolio/
├── public/
│   └── resume.pdf          # Your resume
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section
│   │   ├── About.css
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Contact.css
│   │   ├── Education.jsx   # Education section
│   │   ├── Education.css
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Experience.css
│   │   ├── Footer.jsx      # Footer
│   │   ├── Footer.css
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Hero.css
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Projects.jsx    # GitHub projects
│   │   ├── Projects.css
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Skills.css
│   │   ├── ThemeToggle.jsx # Theme switcher
│   │   └── ThemeToggle.css
│   ├── contexts/
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   ├── main.jsx            # Entry point
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Performance Tips

1. **Optimize Images**: Compress images before adding to `public` folder
2. **Lazy Loading**: Components are already optimized with Framer Motion
3. **Bundle Size**: The build is optimized with Vite's tree-shaking
4. **Lighthouse Score**: Should achieve 90+ on all metrics

## 🐛 Troubleshooting

### GitHub API Rate Limit

If you exceed GitHub's rate limit, the Projects section will show fallback mock data.

### Theme Not Persisting

Check browser localStorage is enabled. Theme preference is saved automatically.

### Build Errors

Make sure all dependencies are installed:

```bash
npm install
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork and customize this portfolio for your needs!

## 📧 Contact

- **Email**: roja@example.com
- **GitHub**: [@rojaannavarapu](https://github.com/rojaannavarapu)
- **LinkedIn**: [Roja Annavarapu](https://linkedin.com/in/roja-annavarapu)

---

**Built with ❤️ by Roja Annavarapu**

# Portfolio
