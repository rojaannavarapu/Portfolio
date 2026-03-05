# 🚀 Quick Deployment Scripts

## Vercel Deployment (Recommended)

### First Time Setup

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Deploy (interactive - follow prompts)
vercel
```

### Subsequent Deployments

```bash
# Deploy to production
vercel --prod
```

---

## Netlify Deployment

### First Time Setup

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify (opens browser)
netlify login

# Initialize Netlify in your project
netlify init
```

### Subsequent Deployments

```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### Or use Netlify Drag & Drop

1. Build the project: `npm run build`
2. Visit: https://app.netlify.com/drop
3. Drag the `dist` folder to the page
4. Done!

---

## GitHub Pages Deployment

### Setup

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
```

### Deploy

```bash
npm run deploy
```

Then enable GitHub Pages in your repository settings.

---

## Custom Domain Setup

### Vercel

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as shown

### Netlify

1. Go to Netlify dashboard
2. Select your site
3. Go to Domain settings
4. Add custom domain
5. Update DNS records as shown

---

## Environment Variables (if needed)

If you add API keys later (e.g., for EmailJS):

### Create `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_TOKEN=your_github_token
```

### Add to Vercel:

```bash
vercel env add VITE_EMAILJS_SERVICE_ID
# Enter value when prompted
```

### Add to Netlify:

1. Go to Site settings → Environment variables
2. Add each variable

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information updated
- [ ] GitHub username updated in Projects.jsx
- [ ] Resume PDF added to /public
- [ ] All links tested and working
- [ ] Meta tags updated in index.html
- [ ] Favicon replaced
- [ ] Build succeeds locally: `npm run build`
- [ ] Preview works locally: `npm run preview`
- [ ] Mobile responsive checked
- [ ] All themes tested
- [ ] Contact form tested (if integrated with backend)

---

## Continuous Deployment

### Vercel + GitHub

1. Push code to GitHub
2. Connect repository in Vercel dashboard
3. Every push to main branch auto-deploys!

### Netlify + GitHub

1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Every push to main branch auto-deploys!

### Configuration:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18.x or higher

---

## Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to App.jsx:

```javascript
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <YourComponents />
      <Analytics />
    </>
  );
}
```

---

## Performance Tips

### Before Deploying:

1. **Optimize images**: Use WebP format, compress images
2. **Check bundle size**: `npm run build` shows bundle sizes
3. **Test Lighthouse**: Use Chrome DevTools Lighthouse
4. **Enable caching**: Vercel/Netlify do this automatically

### Expected Lighthouse Scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Troubleshooting Deployment

### Build Fails on Vercel/Netlify

**Check**:

- Node version matches your local version
- All dependencies in package.json
- No hardcoded localhost URLs
- Environment variables set correctly

**Fix**:

```bash
# Locally test production build
npm run build
npm run preview
```

### 404 on Page Refresh

**Cause**: SPA routing not configured

**Fix**:

- Vercel: `vercel.json` already configured ✅
- Netlify: `netlify.toml` already configured ✅

### CSS Not Loading

**Check**:

- Import paths are correct
- CSS files are in /src
- No absolute paths

---

## Post-Deployment

After successful deployment:

1. ✅ Test all navigation
2. ✅ Check all links
3. ✅ Test on mobile devices
4. ✅ Verify GitHub API works
5. ✅ Test contact form (if integrated)
6. ✅ Check all themes
7. ✅ Test on different browsers
8. ✅ Share your portfolio! 🎉

---

## Updating Your Live Site

```bash
# Make your changes locally
# Test locally: npm run dev

# Build and test production:
npm run build
npm run preview

# Deploy:
vercel --prod
# or
netlify deploy --prod --dir=dist
```

With GitHub integration, just:

```bash
git add .
git commit -m "Update portfolio"
git push
# Automatically deploys! ✨
```

---

**Need Help?**

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Check PROJECT_SUMMARY.md for troubleshooting

**Ready to go live?** 🚀
Choose your preferred platform and follow the steps above!
