# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Start Development Server

The development server is **ALREADY RUNNING** at:

```
http://localhost:5173
```

Open this URL in your browser to see your portfolio! ✨

---

## 🎨 Try Different Themes

1. Open http://localhost:5173
2. Look for the **palette icon** (🎨) in the top-right navbar
3. Hover over it to see theme options:
   - **Dark Glass** (Default) - Glassmorphism with blue/purple
   - **Neon Cyberpunk** - Futuristic with neon glow
   - **Minimal Light** - Clean professional look
   - **Midnight Pro** - Premium dark blue
4. Click any theme to switch instantly!

Your choice is saved automatically in localStorage.

---

## 📝 Customize Your Portfolio (3 Easy Steps)

### Step 1: Update Your Personal Info (5 min)

Open `src/components/Hero.jsx` and find:

```javascript
// Line 40: Change your name
<span className="gradient-text">Your Name Here</span>

// Line 44: Change your role
Software Engineer @ Your Company

// Line 24: Update social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL', label: 'Email' },
];
```

**Save the file** - the page will auto-reload! 🔄

### Step 2: Update GitHub Projects (1 min)

Open `src/components/Projects.jsx`:

```javascript
// Line 14: Change username
const response = await fetch(
  "https://api.github.com/users/YOUR_USERNAME/repos...",
);
```

**Save** - your GitHub repos will now auto-fetch!

### Step 3: Update Contact Info (2 min)

Open `src/components/Contact.jsx`:

```javascript
// Line 28: Update your contact details
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com/username",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/profile",
    href: "https://...",
  },
];
```

**Done!** ✅ You now have a personalized portfolio.

---

## 🎯 What to Customize Next

For detailed customization:

- See **CUSTOMIZATION.md** for complete guide
- Update skills, experience, education
- Add your resume to `/public/resume.pdf`
- Customize theme colors
- Update meta tags for SEO

---

## 🏗️ Build for Production

When ready to deploy:

```bash
# Build optimized production version
npm run build

# Preview production build locally
npm run preview
```

The build creates a `/dist` folder ready for deployment.

---

## 🚀 Deploy (Choose One)

### Option 1: Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

Follow prompts → Your site is live! 🎉

### Option 2: Netlify

```bash
npm run build
# Drag /dist folder to https://app.netlify.com/drop
```

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
# Add deploy script to package.json
npm run deploy
```

See **DEPLOYMENT.md** for detailed deployment instructions.

---

## 📚 Documentation Reference

| File                   | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| **README.md**          | Main documentation, features, tech stack |
| **CUSTOMIZATION.md**   | Detailed customization guide             |
| **DEPLOYMENT.md**      | Complete deployment instructions         |
| **PROJECT_SUMMARY.md** | Full project overview                    |
| **QUICK_START.md**     | This file! Quick reference               |

---

## 🎨 File Structure Overview

```
src/
├── components/        # All React components
│   ├── Hero.jsx      # ⭐ Update: Name, role, links
│   ├── About.jsx     # ⭐ Update: Bio, stats
│   ├── Skills.jsx    # ⭐ Update: Your skills
│   ├── Experience.jsx # ⭐ Update: Work history
│   ├── Projects.jsx  # ⭐ Update: GitHub username
│   ├── Education.jsx # ⭐ Update: Your degree
│   └── Contact.jsx   # ⭐ Update: Contact info
│
├── contexts/
│   └── ThemeContext.jsx  # Theme system (colors here)
│
└── App.jsx           # Main app (no changes needed)
```

---

## ⚡ Common Tasks

### Task: Change Primary Color

**File**: `src/contexts/ThemeContext.jsx`

```javascript
darkGlass: {
  colors: {
    primary: '#YOUR_COLOR',  // Change this!
  }
}
```

### Task: Add New Skill

**File**: `src/components/Skills.jsx`

```javascript
skills: ["React", "JavaScript", "YourNewSkill"];
```

### Task: Update Work Experience

**File**: `src/components/Experience.jsx`

```javascript
experiences = [
  {
    company: "Your Company",
    role: "Your Role",
    // ... more details
  },
];
```

### Task: Change Footer Text

**File**: `src/components/Footer.jsx`

```javascript
Built with ❤️ by Your Name
```

---

## 🐛 Quick Troubleshooting

### Server won't start?

```bash
# Stop current server (Ctrl+C)
npm install
npm run dev
```

### Changes not showing?

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear cache and reload

### GitHub projects not loading?

- Check username in `Projects.jsx`
- GitHub API has rate limits (60/hour)
- Fallback data will show if API fails

---

## 🎓 Learn More

- **React**: https://react.dev/learn
- **Framer Motion**: https://www.framer.com/motion/
- **CSS**: Modify any `.css` file for styling changes

---

## ✅ Checklist Before Deploying

- [ ] Updated personal info in Hero
- [ ] Updated GitHub username in Projects
- [ ] Updated contact info
- [ ] Tested all themes
- [ ] Added resume to /public
- [ ] Updated meta tags in index.html
- [ ] Tested on mobile (DevTools)
- [ ] Build succeeds: `npm run build`
- [ ] Replaced favicon

---

## 🎉 You're All Set!

Your portfolio is:

- ✅ Running locally
- ✅ Production-ready
- ✅ Fully customizable
- ✅ Ready to deploy

**Next Steps:**

1. Customize your information
2. Test everything works
3. Deploy to Vercel/Netlify
4. Share with the world! 🌍

---

**Need Help?**
Check the other docs:

- Full features: `README.md`
- Customization: `CUSTOMIZATION.md`
- Deployment: `DEPLOYMENT.md`
- Overview: `PROJECT_SUMMARY.md`

**Happy coding!** 🚀✨
