# 📝 Customization Guide

This guide will help you personalize the portfolio to make it your own.

## 🎯 Quick Start Checklist

- [ ] Update personal information (name, role, bio)
- [ ] Add your social media links
- [ ] Update GitHub username for project fetching
- [ ] Customize skills list
- [ ] Add your work experience
- [ ] Update education details
- [ ] Add your resume PDF
- [ ] Customize theme colors (optional)
- [ ] Update contact information
- [ ] Add favicon and meta tags

## 1️⃣ Personal Information

### Hero Section

**File**: `src/components/Hero.jsx`

```javascript
// Line ~40: Update your name
<h1 className="hero-title" variants={itemVariants}>
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>

// Line ~44: Update your role
<h2 className="hero-subtitle" variants={itemVariants}>
  Your Job Title @ Your Company
</h2>

// Line ~48: Update your description
<p className="hero-description" variants={itemVariants}>
  Your personal description here.
  <br />
  More about what you do and your passion.
</p>

// Line ~24: Update social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' },
];
```

## 2️⃣ About Section

**File**: `src/components/About.jsx`

```javascript
// Line ~50-70: Update your bio
<p>
  Your professional introduction...
</p>
<p>
  More about your journey and expertise...
</p>
<p>
  Your interests and hobbies...
</p>

// Line ~15: Update stats
const stats = [
  { icon: Briefcase, label: 'Years Experience', value: 'X+' },
  { icon: Code, label: 'Projects Completed', value: 'X+' },
  { icon: Heart, label: 'Happy Clients', value: 'X+' },
  { icon: User, label: 'Technologies', value: 'X+' },
];
```

## 3️⃣ Skills

**File**: `src/components/Skills.jsx`

```javascript
// Line ~10: Update your skills
const skillCategories = [
  {
    category: "Frontend",
    skills: ["Your", "Frontend", "Skills"],
  },
  {
    category: "Backend",
    skills: ["Your", "Backend", "Skills"],
  },
  {
    category: "Database",
    skills: ["Your", "Database", "Skills"],
  },
  {
    category: "Tools & Others",
    skills: ["Your", "Tools", "And", "Technologies"],
  },
];
```

## 4️⃣ Experience

**File**: `src/components/Experience.jsx`

```javascript
// Line ~10: Update your work experience
const experiences = [
  {
    company: "Your Current Company",
    role: "Your Current Role",
    period: "Start Date - Present",
    description: [
      "Your achievement or responsibility 1",
      "Your achievement or responsibility 2",
      "Your achievement or responsibility 3",
      "Your achievement or responsibility 4",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  {
    company: "Your Previous Company",
    role: "Your Previous Role",
    period: "Start Date - End Date",
    description: [
      "Your achievement or responsibility 1",
      "Your achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2"],
  },
];
```

## 5️⃣ Projects (GitHub Integration)

**File**: `src/components/Projects.jsx`

```javascript
// Line ~14: Update GitHub username
const response = await fetch(
  "https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated&per_page=6",
);
```

**Optional**: Update fallback projects (shown if API fails)

```javascript
// Line ~35-60: Update mock data
setRepos([
  {
    id: 1,
    name: "Your Project Name",
    description: "Your project description",
    html_url: "https://github.com/username/repo",
    homepage: "https://your-demo.com",
    stargazers_count: 10,
    forks_count: 2,
    language: "JavaScript",
  },
  // Add more projects...
]);
```

## 6️⃣ Education

**File**: `src/components/Education.jsx`

```javascript
// Line ~10: Update your education
const educationData = [
  {
    degree: "Your Degree Name",
    institution: "Your University/College",
    period: "Start Year - End Year",
    description: "Brief description of your studies and focus areas.",
    achievements: [
      "Your Achievement 1",
      "Your Achievement 2",
      "Your Achievement 3",
    ],
  },
];
```

## 7️⃣ Contact

**File**: `src/components/Contact.jsx`

```javascript
// Line ~28: Update contact information
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/YOUR_USERNAME",
    href: "https://github.com/YOUR_USERNAME",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/YOUR_PROFILE",
    href: "https://linkedin.com/in/YOUR_PROFILE",
  },
];
```

### Email Integration (Optional)

To make the contact form functional, integrate with a service like:

- **EmailJS** - Free email service
- **Formspree** - Simple form backend
- **Netlify Forms** - If deploying on Netlify

Example with EmailJS:

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    });
};
```

## 8️⃣ Resume

1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf`

Or update the link in `src/components/Hero.jsx`:

```javascript
// Line ~60
<motion.a
  href="/path-to-your-resume.pdf"  // Update this
  download
  className="btn btn-secondary"
>
```

## 9️⃣ Theme Customization

**File**: `src/contexts/ThemeContext.jsx`

### Modify Existing Themes

```javascript
darkGlass: {
  id: 'darkGlass',
  name: 'Dark Glass',
  colors: {
    bg: '#0a0a0f',              // Main background
    bgSecondary: 'rgba(15, 15, 25, 0.8)',  // Secondary background
    text: '#e8e8f0',            // Main text color
    textSecondary: '#a8a8b8',   // Secondary text
    primary: '#6366f1',         // Primary color (change this!)
    secondary: '#8b5cf6',       // Secondary color (change this!)
    accent: '#ec4899',          // Accent color
    cardBg: 'rgba(25, 25, 40, 0.6)',  // Card background
    cardBorder: 'rgba(99, 102, 241, 0.3)',  // Card border
    glowPrimary: 'rgba(99, 102, 241, 0.5)',  // Glow effect
    glowSecondary: 'rgba(139, 92, 246, 0.4)',
  },
}
```

### Add New Theme

```javascript
export const themes = {
  // ... existing themes

  yourTheme: {
    id: "yourTheme",
    name: "Your Theme Name",
    colors: {
      bg: "#000000",
      bgSecondary: "#111111",
      text: "#ffffff",
      textSecondary: "#999999",
      primary: "#YOUR_COLOR",
      secondary: "#YOUR_COLOR",
      accent: "#YOUR_COLOR",
      cardBg: "rgba(20, 20, 20, 0.8)",
      cardBorder: "rgba(255, 255, 255, 0.1)",
      glowPrimary: "rgba(255, 0, 0, 0.3)",
      glowSecondary: "rgba(0, 255, 0, 0.3)",
    },
    effects: {
      blur: "blur(12px)",
      glass: true,
      neon: false,
    },
  },
};
```

## 🔟 SEO & Meta Tags

**File**: `index.html`

```html
<!-- Update title -->
<title>Your Name - Your Job Title Portfolio</title>

<!-- Update description -->
<meta name="description" content="Your custom description here" />

<!-- Update keywords -->
<meta name="keywords" content="Your, Keywords, Here" />

<!-- Update Open Graph tags -->
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />

<!-- Add your URL after deployment -->
<meta property="og:url" content="https://your-domain.com" />
<meta property="og:image" content="https://your-domain.com/og-image.png" />
```

### Add Favicon

1. Create your favicon (use favicon.io)
2. Replace `/vite.svg` in `public` folder
3. Update in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

## 1️⃣1️⃣ Footer

**File**: `src/components/Footer.jsx`

```javascript
// Line ~15: Update footer text
<p className="footer-text">
  Built with <Heart size={16} className="heart-icon" /> by Your Name
</p>
```

## 🎨 Color Reference

Use these tools to find your color palette:

- [Coolors.co](https://coolors.co) - Color palette generator
- [Color Hunt](https://colorhunt.co) - Curated color palettes
- [Adobe Color](https://color.adobe.com) - Professional color tool

## 🚀 After Customization

1. **Test locally**:

```bash
npm run dev
```

2. **Build for production**:

```bash
npm run build
```

3. **Preview production build**:

```bash
npm run preview
```

4. **Deploy** (see README.md for deployment instructions)

## ✅ Final Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information
- [ ] Tested all sections
- [ ] Verified all links work
- [ ] Added your resume
- [ ] Tested on mobile devices
- [ ] Checked all themes
- [ ] Verified GitHub API integration
- [ ] Updated meta tags for SEO
- [ ] Added favicon
- [ ] Tested contact form (if integrated)

## 💡 Tips

1. **Keep it updated**: Regularly update your projects and experience
2. **Personal touch**: Add your personality to the content
3. **Professional photos**: Consider adding a professional photo
4. **Analytics**: Add Google Analytics to track visitors
5. **Performance**: Keep images optimized for web
6. **Mobile first**: Always test on mobile devices

Need help? Check the README.md or create an issue on GitHub!
