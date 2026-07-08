# Product Requirements Document
## Vishal Sharma — Personal Portfolio Website

**Version:** 1.0
**Date:** July 8, 2026
**Owner:** Vishal Sharma
**Document type:** Product Requirements Document (PRD)

---

## 1. Overview

Vishal Sharma is building a personal portfolio website to showcase his dual expertise as a **Software Engineer** (React.js, JavaScript, Python) and **Data Analyst** (SQL, Python, Power BI, Tableau). The site will serve as a central, always-on resume and project showcase for recruiters, hiring managers, and potential collaborators.

The visual direction is inspired by the "Mrstudio"-style personal portfolio template — a warm, confident, editorial layout with bold rounded typography, a peach/cream background, navy headline text, and a single strong orange accent color used for CTAs and highlights.

## 2. Goals & Objectives

| Goal | Description |
|---|---|
| Establish credibility | Present Vishal as a serious, detail-oriented CS graduate with real internship and project experience. |
| Dual-track positioning | Clearly communicate two hireable skill tracks (Software Engineering and Data Analytics) without confusing the visitor. |
| Drive action | Make it effortless for a recruiter to view the resume, contact Vishal, or check GitHub/LinkedIn. |
| Show, not just tell | Surface real project outcomes (e.g., accuracy %, dashboards, CRUD apps) rather than generic skill lists. |

## 3. Target Audience

- Technical recruiters and HR screeners doing a 30–60 second scan.
- Hiring managers / engineering leads evaluating project depth.
- Referral contacts and LinkedIn connections.

## 4. Design Inspiration Reference

Reference screenshots analyzed (personal portfolio template, "Mrstudio"):

- **Layout pattern:** Full-width hero with photo on the right, bold headline + short bio + primary CTA on the left, floating badge cards ("Best Design Awards", tool logos) layered over the photo.
- **Services section:** Stacked overlapping cards on the left (icon + title + description) paired with a heading + paragraph + CTA on the right.
- **Trust/stats section:** Numbered value props (1, 2, 3 list) next to a photo, plus a floating stat callout card.
- **Metrics section:** Large bold stat callouts (e.g., "566.12k", "256.12k") next to a heading + description + CTA — good pattern for surfacing measurable project results (accuracy %, CGPA, etc.).
- **Recent Work grid:** 3-column square project cards with strong flat-color thumbnails.
- **Footer / CTA band:** Large bold headline ("Ready to Get Started?") with a circular "Shoot Message" CTA button and simplified nav repeated.

### 4.1 Color Palette (extracted from screenshots)

| Token | Hex (approx.) | Usage |
|---|---|---|
| `--bg-cream` | `#FBEEE4` | Hero/section background |
| `--bg-white` | `#FFFFFF` | Cards, nav bar |
| `--accent-orange` | `#EE6C2E` | Primary buttons, highlights, active nav state |
| `--text-navy` | `#101A3D` | Headlines, logo text |
| `--text-gray` | `#5C6478` | Body copy |
| `--gradient-purple-orange` | `#C77DFF → #EE6C2E` | Decorative card border/glow accents |
| `--badge-green` | `#2ECC71` | Small accent dots/badges |

### 4.2 Typography

- **Headings:** Bold, rounded, geometric sans-serif (visually consistent with **Poppins Bold / Baloo 2 Bold**) — large scale (48–64px for hero H1), tight line-height, navy color.
- **Body text:** Regular-weight sans-serif (visually consistent with **Inter / Poppins Regular**), gray, 16–18px, relaxed line-height for readability.
- **Buttons/labels:** Semi-bold, small caps or sentence case, white text on orange pill-shaped buttons (fully rounded corners).

### 4.3 Component Style Notes

- Fully rounded ("pill") buttons with solid orange fill and white text.
- Cards use soft shadows, large corner radius (16–24px), and occasional gradient border strokes.
- Small circular outline "dots" (red, blue, green) scattered as decorative elements around hero imagery.
- Floating info cards overlap section boundaries for visual depth.

## 5. Sitemap / Information Architecture

1. **Home (Hero)** — Identity statement, dual-role tagline, primary CTA, trust badges/tools.
2. **About Me** — Summary, education, languages.
3. **Skills** — Split by track: Software Engineering vs. Data Analytics.
4. **Experience** — Internship timeline.
5. **Projects** — Card grid, filterable by track (Software / Data).
6. **Achievements / Stats** — CGPA, certifications count, projects completed, accuracy metrics.
7. **Certifications** — Logos/badges list.
8. **Contact / CTA band** — Contact form + direct links (email, phone, LinkedIn, GitHub).
9. **Footer** — Nav repeat, socials, copyright.

## 6. Content Requirements (sourced directly from resume)

### 6.1 Hero Section
- **Name:** Vishal Sharma
- **Tagline options (toggle or combined):**
  - "Aspiring Software Engineer — React.js · JavaScript · Python · SQL"
  - "Data Analyst — SQL · Python · Power BI · Data Visualization"
- **Location:** Bengaluru, Karnataka
- **Bio (short):** Detail-oriented Computer Science & Engineering (Data Science) graduate with hands-on experience across software development and data analytics — from building React applications to delivering Power BI dashboards and ML models.
- **Primary CTA:** "View Resume" / "Hire Me"
- **Secondary CTA:** "Contact Me"

### 6.2 About Me
Full professional summary (merge both resume versions):
> Detail-oriented and intellectually curious Computer Science & Engineering (Data Science) graduate with hands-on experience in React.js, JavaScript, Python, SQL/MySQL, and Business Intelligence tools (Power BI, Tableau). Comfortable working independently to deliver accurate, reliable results — from application development and debugging to data validation, visualization, and insight generation. Experienced applying Generative AI tools (Claude, Copilot) to accelerate analysis and reporting.

**Education**
- B.E. Computer Science & Engineering (Data Science), VTU — K N S Institute of Technology, Bengaluru (2022–2026), CGPA: 8.22
- PUC (PCMC), Sindhi PU College, Bengaluru (2020–2022) — 77.77%
- SSLC, Royal Academy Public School, Bengaluru (2020) — 86.88%

**Languages:** English · Hindi · Kannada

**Contact:** +91 94499 81320 · sharmavishal2478@gmail.com · linkedin.com/in/vishal089 · github.com/vishalsharma-code

### 6.3 Skills (two-column / toggle: Software Engineering | Data Analytics)

**Software Engineering track**
- Languages: JavaScript, Python
- Frontend: React.js, HTML5, CSS3, Tailwind CSS
- Database: SQL, MySQL
- Core CS: OOP, SDLC, STLC
- Tools: Git, GitHub, VS Code, Postman
- Concepts: REST APIs, Debugging, Testing, Problem Solving

**Data Analytics track**
- Programming & Analysis: SQL, Python (Pandas, NumPy, Matplotlib), Statistical Analysis, EDA
- BI & Visualization: Power BI, Tableau, MS Excel (Pivot Tables, VLOOKUP/XLOOKUP, Data Cleaning)
- Data Platforms: Databricks (familiar)
- GenAI & Agentic Tools: Claude, Microsoft Copilot
- Data Practices: Data Validation & Quality, ETL Concepts, Data Integration, Data Processing, Data Cleaning
- Version Control: Git, GitHub, VS Code

### 6.4 Experience
**Android App Development Intern (GenAI)** — CL Infotech Pvt. Ltd. / Mindmatrix, Bengaluru
*Feb 2026 – May 2026*
Tools: Kotlin · Room DB · Firebase · Jetpack Compose · Google Maps API · GenAI
- Android application development using Kotlin and Jetpack Compose
- Hands-on with Android Studio, Google Cloud Labs, and Google AI Studio to explore GenAI in app development
- UI/UX design, prototyping, feature development, debugging, and iterative enhancement
- Firebase integration and standard Android development workflows

### 6.5 Projects (card grid — tag each card Software / Data)

1. **Student Management System** *(Software · 2025)*
   Tools: React.js, Tailwind CSS, Django, HTML5, CSS3, REST APIs
   - Responsive CRUD app for managing student records with form validation and REST API integration.

2. **Supply Chain Analysis** *(Data · 2025)*
   Tools: SQL, Python, Excel, Power BI
   - Analyzed end-to-end supply chain data to identify bottlenecks, forecast demand, and optimize inventory.
   - Achieved 99–100% reporting accuracy through structured data validation SOPs.
   - Built interactive Power BI/Tableau dashboards (order fulfillment rate, lead time, supplier performance).

3. **House Price Prediction** *(Data/ML · 2023–2024)*
   Tools: Python, Scikit-learn, Pandas, Matplotlib, SQL, Excel, Git
   - Cleaned and engineered features from raw housing datasets; built and tuned regression models (Linear Regression, Random Forest).
   - Used EDA and visualizations to uncover key price drivers.

### 6.6 Stats / Highlights band (numeric callouts, styled like the reference "566.12k" module)
- **8.22** CGPA
- **4** Certifications earned
- **3** Major projects delivered
- **99–100%** Reporting accuracy achieved (Supply Chain project)

### 6.7 Certifications
- AWS Certified Cloud Practitioner
- IBM SkillBuild (AI & Data Analytics)
- SQL & BI — Simplilearn
- TATA Data Analytics Virtual Experience
- SAP Data Analytics Cloud

### 6.8 Contact / CTA Band
Headline (styled like reference): **"Ready to Work Together?"**
Sub-line: "You know about me — let's talk about your project."
- Contact form: Name, Email, Message
- Direct links: Email, Phone, LinkedIn, GitHub
- Resume download button (PDF — offer both Software Engineer and Data Analyst resume versions as toggle/download options)

## 7. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR1 | Responsive layout (mobile, tablet, desktop) | Must |
| FR2 | Sticky nav bar with smooth-scroll to sections | Must |
| FR3 | Downloadable resume PDF(s) — separate SWE and Data Analyst versions | Must |
| FR4 | Project cards filterable by track (Software / Data) | Should |
| FR5 | Working contact form (email delivery via form service, e.g., Formspree/EmailJS) | Must |
| FR6 | Social links (LinkedIn, GitHub, Email, Phone/WhatsApp) | Must |
| FR7 | Skills toggle/tab between Software Engineering and Data Analytics views | Should |
| FR8 | Scroll-triggered subtle animations (fade/slide-in) consistent with reference site's playful feel | Could |
| FR9 | Dark-mode toggle | Won't (v1) |
| FR10 | Blog/articles section | Won't (v1) |

## 8. Non-Functional Requirements

- **Performance:** Lighthouse performance score ≥ 90; hero image optimized/lazy-loaded.
- **Accessibility:** WCAG 2.1 AA — sufficient color contrast between navy text and cream background, alt text on all images, keyboard-navigable nav and form.
- **SEO:** Meta title/description, Open Graph tags, semantic HTML headings.
- **Browser support:** Latest 2 versions of Chrome, Safari, Firefox, Edge.
- **Hosting:** Static/JAMstack friendly (e.g., Vercel/Netlify) given React skill set.

## 9. Suggested Technical Stack

Given Vishal's existing skills, the site itself doubles as a portfolio proof-point:
- **Frontend:** React.js + Tailwind CSS (matches resume skills directly)
- **Forms:** EmailJS or Formspree (no backend needed)
- **Hosting:** Vercel or Netlify (free tier, CI/CD from GitHub)
- **Analytics (optional):** Plausible or GA4 to track resume downloads/contact form submissions

## 10. Success Metrics

- Resume download count
- Contact form submission count
- Average session duration on Projects section
- Click-through rate to GitHub/LinkedIn

## 11. Open Questions

1. Should the site present **one unified identity** (Software Engineer + Data Analyst) or offer a **landing toggle** letting the visitor pick a track, which then re-orders/filters content?
2. Do we use real project screenshots for the "Recent Work" grid, or stylized illustrative thumbnails (as in the reference)?
3. Should certifications link out to verifiable credential URLs (e.g., Credly, AWS)?

## 12. Milestones (suggested)

| Phase | Deliverable |
|---|---|
| 1 | Wireframes + design system (colors/type from this PRD) |
| 2 | Static build of Home, About, Skills, Contact |
| 3 | Projects grid + Experience timeline |
| 4 | Contact form integration + resume downloads |
| 5 | QA, accessibility pass, deploy |

---
*Prepared from Vishal Sharma's Software Engineer and Data Analytics resumes, and design analysis of provided reference screenshots.*
