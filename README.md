# Remote Recruit Landing Page

A high-performance, modern, and accessible landing page for **Remote Recruit** built with Next.js and Tailwind CSS.

## Features & Highlights

- **Scroll-to-Top Functionality**: A floating scroll-to-top button that appears smoothly once the user scrolls down 300px, enabling swift navigation back to the top of the landing page.
- **Vast Performance Improvements**:
  - Replaced a heavy **20.5 MB** background image (`/banner-bg.png`) with an optimized version (`/banner_bg.png`, 947 KB).
  - Configured Next.js's `<Image>` component (`next/image`) for automatic optimization, responsive sizing, modern formats (WebP/AVIF), and visual layout stability (Cumulative Layout Shift prevention).
  - Applied native `loading="lazy"` to all footer images, section SVGs, and illustration vectors.
- **Accessibility (Lighthouse Score ≥ 90)**:
  - Added descriptive `alt` tags to all image assets (logos, icons, illustrations) for screen readers.
  - Wrapped interactive logo elements in native accessible `<button>` components with appropriate `aria-label` tags.
  - Ensured correct semantic structure and keyboard navigation.

---

## Tech Stack & Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Compiler)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Core Language**: TypeScript / React 19

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or later) installed.

### Setup Instructions

1. **Clone the Repository** (or navigate to the project directory):
   ```bash
   git clone https://github.com/askeelad/remoterecruit-project.git
   cd remoterecruit-project
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Run ESLint/Linting**:
   ```bash
   npm run lint
   ```

---

## Deployment Guide

### Deploying to Vercel

The easiest way to deploy this project is via the [Vercel GitHub Integration](https://vercel.com/docs/concepts/deployments/git):

1. Commit and push all changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: implement scroll-to-top, lazy-loading and lighthouse optimizations"
   git push origin main
   ```
2. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New > Project**.
3. Import the `remoterecruit-project` repository.
4. Keep the default settings (Next.js is automatically detected) and click **Deploy**.
5. Vercel will build the production bundle and provide a live URL.

### Deploying to Netlify

1. Commit and push changes to GitHub.
2. Go to the [Netlify Dashboard](https://app.netlify.com/) and click **Add new site > Import an existing project**.
3. Connect with GitHub, select the repository, and Netlify will auto-detect Next.js.
4. Click **Deploy Site**.

---

## Known Issues & Limitations

- **Large SVG Vectors**: The illustrations (`sec1.svg` and `sec3.svg`) contain complex paths and are relatively large (1.6 MB and 2.4 MB). While we've optimized their loading using lazy loading (`loading="lazy"`), in high-performance environments, converting them to compressed WebP raster formats or simplifying the vectors will reduce payload size further.
- **Local Dev Server Image Optimization**: In development mode, Next.js does not cache optimized images aggressively. Once deployed in production (on Vercel/Netlify), Next.js automatically utilizes edge-caching for optimized images, resulting in instant load times.
