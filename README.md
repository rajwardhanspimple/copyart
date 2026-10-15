# Haoqi Wen — Design Engineer Portfolio

A high-fidelity design engineering portfolio featuring interactive 3D WebGL typography, floating sticker playground, and spatial case studies.

---

## 🚀 Quick Deployment Guide

### Deploy to Netlify

#### Option A: Direct Git Push (Recommended)
1. Create a new repository on [GitHub](https://github.com/new).
2. Push this project to GitHub (see GitHub Instructions below).
3. Go to [Netlify](https://app.netlify.com/) and click **"Add new site"** ➔ **"Import an existing project"**.
4. Select your GitHub repository.
5. Netlify will automatically detect the configuration from `netlify.toml`:
   - **Publish directory**: `.` (root)
   - **Build command**: *(leave blank)*
6. Click **Deploy Site**. Your site will be live within seconds with full 3D models and font headers pre-configured!

#### Option B: Drag and Drop (Manual)
1. Log into your [Netlify Dashboard](https://app.netlify.com/).
2. Navigate to the **Sites** tab.
3. Drag and drop the `D:/workspace1` folder directly onto the upload zone.

---

## 🐙 Push to GitHub

Run the following commands in this directory:

```bash
# 1. Add all files
git add .

# 2. Commit
git commit -m "Initial commit: Complete Haoqi Wen portfolio with 3D canvas and assets"

# 3. Rename branch to main
git branch -M main

# 4. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 💻 Local Development & Testing

Run with any static server or Vite:

```bash
# Option 1: Using npx serve
npx serve .

# Option 2: Using Vite
npm run dev

# Option 3: Using Python 3
python -m http.server 8080
```

---

## 📂 Project Structure

```text
├── index.html            # Main entry point with 3D WebGL Canvas
├── netlify.toml          # Netlify configuration & asset cache headers
├── .gitignore            # Git exclusion rules
├── .nojekyll             # Prevents static hosts from ignoring _next
├── fonts/                # Custom local fonts (TikTokSans, GeistMono, DepartureMono)
├── model/                # 3D WebGL assets (hello.gltf, cnt.gltf, cursor.glb)
├── sticker_img/          # 12 interactive sticker textures
├── work/                 # Portfolio showcase images & case study screenshots
├── _next/                # Bundled client-side runtime & stylesheets
└── [subpages]/           # Static routes (reunimos, adrive, teambition, etc.)
```
