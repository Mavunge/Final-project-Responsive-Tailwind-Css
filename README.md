# Powerflow Electrical & CCTV Installation

**Live Site:** https://powerflowelectric.netlify.app  
**GitHub:** https://github.com/Mavunge/Final-project-Responsive-Tailwind-Css  

---

##  Objective  
This project is a responsive landing page created with **React**, **Vite**, and **Tailwind CSS**. It precisely implements the provided LG (desktop) layout, while also introducing a custom brand identity, original content, and a unique color system.

---

##  Design & Layout Implementation  
- Maintains the exact spacing, grid/flex structures, and layout proportions from the LG design.  
- Uses the same component hierarchy and image placement.  
- All content, colors, logo, icons, and text have been replaced to reflect the Powerflow brand.

---

##  Technology Stack  
- **React 18+** (functional components & hooks)  
- **Vite** (for fast development & build)  
- **Tailwind CSS 3+** (utility-first styling)  
- Semantic HTML for accessibility

---

##  Responsive Design  
- **SM (≤ 640px):** Mobile-first vertical layout  
- **MD (641–1023px):** Tablet view that retains structure  
- **LG (≥ 1024px):** Pixel-perfect replication of the original desktop design  
- Smooth transitions between breakpoints for layout and typography

---

##  Brand Identity & Content  
- **Brand Name:** Powerflow Electrical & CCTV Installation  
- **Tagline:** “Reliable. Secure. Smart Electrical Solutions.”  
- Written value proposition, target audience, and tone.  
- Original, professional content across:  
  - Hero section (with headline + call-to-action)  
  - At least 3 service/feature sections  
  - About / Company story section  
  - Contact / CTA section  
- High-quality, optimized images with alt text.  

---

##  Color System & Typography  
- Custom color palette in `tailwind.config.js` with:  
  - Primary, Secondary, Accent, Neutral Dark, Neutral Light  
  - All colors meet WCAG AA contrast  
- Custom font stack, 3+ font weights, consistent scale across breakpoints  

---

##  Components  
Reusable components include:  
- **Button** (variants: primary, secondary, outline)  
- **Card** (customizable via props)  
- **SectionWrapper** (consistent spacing)  
- **ResponsiveImage** (lazy-loaded)  

Best practices used:  
- Props destructuring  
- Conditional rendering  
- Custom hooks for shared logic  
- Clean folder structure

---

## ⚡ Performance & Accessibility  
- Lighthouse targets achieved:  
  - Performance: 85+  
  - Accessibility: 95+  
  - Best Practices: 90+  
  - SEO: 90+  
- Optimizations include lazy loading, `React.memo`, and semantic HTML.

---

##  Deployment  
- Deployed on **Netlify**  
- Vite build used for optimization  
- SSL enabled  
- Live deploy link above

---

##  Project Structure  
dist/
├ index.html
├ _redirects
├ vite.svg
└ assets/
├ *.css
├ *.js
└ images...
src/
├ components/
├ sections/
├ hooks/
└ assets/
screenshots/
├ lg-view.png
├ md-view.png
├ sm-view.png
└ lighthouse-scores.PNG

---

##  Screenshots  
Included in `/screenshots`:  
- Desktop (LG) view  
- Tablet (MD) view  
- Mobile (SM) view  
- Lighthouse scores

---

##  Commit History  
Example meaningful commits:  
```text
feat: initialize React + Vite + Tailwind setup  
feat: build Header & Navigation  
feat: implement Hero section  
feat: reusable Button component  
feat: service Cards + images  
feat: About section  
refactor: section wrappers + spacing  
perf: lazy-load images  
chore: configure ESLint & clean code  
feat: responsive breakpoints (MD, SM)  
feat: add screenshots + Lighthouse report  
docs: update README  
License

This project is available for educational and portfolio use. Feel free to fork, adapt, or extend.

 Acknowledgements

Images sourced from Unsplash / Pexels

Thank you to all open-source libraries used in this build.


---

If you like, I can also help you format your commit history section to match what your instructor