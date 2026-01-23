# Idika Eco Domes - Implementation & Deployment Plan

## 🏗️ Architecture Overview

```
┌─────────────────────┐     ┌─────────────────────┐
│  GitHub Repo 1      │     │  GitHub Repo 2      │
│  (Images Only)      │     │  (Main Project)     │
│  - Public repo      │     │  - Source code      │
│  - /images folder   │     │  - Uses image URLs  │
└─────────┬───────────┘     └─────────┬───────────┘
          │                           │
          │ jsDelivr CDN              │ CI/CD
          ▼                           ▼
┌─────────────────────┐     ┌─────────────────────┐
│  jsDelivr CDN       │     │  Netlify            │
│  (Global caching)   │     │  - Auto deploy      │
│                     │     │  - Free SSL         │
└─────────────────────┘     └─────────────────────┘
                                      │
                                      │ DNS (A/CNAME)
                                      ▼
                            ┌─────────────────────┐
                            │  Hostinger DNS      │
                            │  - Custom domain    │
                            │  - idika.in         │
                            └─────────────────────┘
```

---

## 📁 Step 1: Create Image Repository

### Repository Structure
```
idika-images (Public GitHub repo)
├── rooms/
│   ├── sun-drenched-dome/
│   │   ├── image-1.jpg
│   │   ├── image-2.jpg
│   │   ├── image-3.jpg
│   │   ├── image-4.jpg
│   │   └── image-5.jpg
│   ├── forest-whisper/
│   │   ├── image-1.jpg
│   │   └── ...
│   ├── horizon-dome/
│   │   └── ...
│   ├── wellness-sanctuary/
│   │   └── ...
│   └── family-gathering/
│       └── ...
├── gallery/
│   ├── exterior/
│   │   └── ...
│   ├── interior/
│   │   └── ...
│   ├── nature/
│   │   └── ...
│   └── experiences/
│       └── ...
├── homepage/
│   ├── hero.jpg
│   ├── about-section.jpg
│   └── ...
└── README.md
```

### Image Guidelines
- **Format**: WebP preferred (best compression), JPG acceptable
- **Max Size**: 200KB per image (use TinyPNG or Squoosh to compress)
- **Dimensions**: 
  - Room images: 800x600px
  - Gallery images: 1200x800px
  - Hero images: 1920x1080px
- **Naming**: Use lowercase, hyphens (e.g., `sun-dome-exterior-1.jpg`)

---

## 🔗 Step 2: Use jsDelivr CDN URLs

### URL Format
```
https://cdn.jsdelivr.net/gh/USERNAME/REPO@BRANCH/path/to/image.jpg
```

### Example URLs
```javascript
// Room images
"https://cdn.jsdelivr.net/gh/updatetrend123-star/idika-images@main/rooms/sun-drenched-dome/image-1.jpg"

// Gallery images
"https://cdn.jsdelivr.net/gh/updatetrend123-star/idika-images@main/gallery/exterior/dome-sunset.jpg"
```

### Why jsDelivr?
| Feature | Benefit |
|---------|---------|
| Global CDN | Fast loading worldwide |
| Free | No cost for open source |
| No rate limits | Unlike raw GitHub URLs |
| Auto-caching | 7-day cache for performance |
| Version control | Use `@main` or `@v1.0` tags |

---

## 🚀 Step 3: Netlify CI/CD Setup

### Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub → Select `idika-eco-domes` repo
4. Configure build settings:

### Build Settings
```
Build command: npm run build
Publish directory: dist
Node version: 18 (or latest LTS)
```

### Environment Variables (if needed)
```
VITE_APP_ENV=production
```

### Auto-Deploy
- ✅ Deploys automatically on every push to `main`
- ✅ Deploy previews for pull requests
- ✅ Rollback to previous versions available

---

## 🌐 Step 4: Hostinger Domain Configuration

### DNS Records to Add in Hostinger

#### For root domain (idika.in)
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

#### For www subdomain
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

### Netlify Domain Settings
1. Go to Netlify Dashboard → Your Site → Domain Settings
2. Click "Add custom domain"
3. Enter: `idika.in`
4. Also add: `www.idika.in`
5. Wait for DNS propagation (up to 48 hours, usually 1-2 hours)
6. Enable HTTPS (automatic with Let's Encrypt)

---

## 📋 Step 5: Update siteData.ts

### Template for Image URLs
```typescript
// Base URL for jsDelivr
const IMAGE_BASE = "https://cdn.jsdelivr.net/gh/updatetrend123-star/idika-images@main";

// Room images example
images: [
  {
    src: `${IMAGE_BASE}/rooms/sun-drenched-dome/image-1.jpg`,
    alt: "Sun-Drenched Dome exterior view"
  },
  {
    src: `${IMAGE_BASE}/rooms/sun-drenched-dome/image-2.jpg`,
    alt: "Cozy bedroom interior"
  },
  // ... more images
]
```

---

## ✅ Deployment Checklist

### Before First Deploy
- [ ] Create image repository (public)
- [ ] Upload and optimize all images
- [ ] Update all image URLs in `siteData.ts`
- [ ] Test locally with `npm run build && npm run preview`
- [ ] Push to GitHub

### Netlify Setup
- [ ] Connect GitHub repo to Netlify
- [ ] Configure build settings
- [ ] Test deploy preview
- [ ] Verify site works at `.netlify.app` URL

### Domain Setup
- [ ] Add DNS records in Hostinger
- [ ] Add custom domain in Netlify
- [ ] Wait for DNS propagation
- [ ] Verify HTTPS is enabled
- [ ] Test both `idika.in` and `www.idika.in`

### Post-Launch
- [ ] Test all pages on mobile and desktop
- [ ] Verify all images load correctly
- [ ] Test WhatsApp booking flow
- [ ] Check page load speed (aim for <3s)
- [ ] Submit sitemap to Google Search Console

---

## 🔧 Troubleshooting

### Images Not Loading
1. Check if image repo is public
2. Verify jsDelivr URL format is correct
3. Clear browser cache
4. Check browser console for errors

### DNS Not Working
1. Wait up to 48 hours for propagation
2. Use [dnschecker.org](https://dnschecker.org) to verify
3. Ensure no conflicting records in Hostinger

### Build Failing on Netlify
1. Check build logs in Netlify dashboard
2. Ensure `npm run build` works locally
3. Verify Node version matches local environment

---

## 📊 Performance Targets

| Metric | Target | How to Achieve |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | Lazy loading, optimized images |
| Largest Contentful Paint | < 2.5s | WebP images, CDN delivery |
| Time to Interactive | < 3s | Code splitting, minimal JS |
| Total Page Size | < 3MB | Image compression |

---

## 🔄 Update Workflow

### To Update Images
1. Add/replace images in `idika-images` repo
2. Push to GitHub
3. jsDelivr cache updates within 24 hours (or use purge API)

### To Update Website
1. Make changes in `idika-eco-domes` repo
2. Push to `main` branch
3. Netlify auto-deploys in ~1-2 minutes

---

## 📞 Contact & Support

- **WhatsApp**: +91 7207357312
- **Email**: hello@idika.in

---

*Last Updated: January 22, 2026*
