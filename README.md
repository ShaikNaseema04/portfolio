# Shaik Naseema — Aspiring Data Analyst & AI Enthusiast Portfolio

A modern, production-grade personal portfolio web application built for **Shaik Naseema** — Computer Science & Engineering undergraduate (B.Tech 2023–2027, **CGPA: 8.5**), passionate about **Data Analytics**, **Business Intelligence**, and **Prompt Engineering**. 

National Champion (**1st Place Winner**) at the **SkillUp Online Hackathon India 2026** (in collaboration with IBM SkillsBuild) held at IBM EGL, Bengaluru, competing against 4,000+ teams and 13,000+ participants nationwide.

---

## ⚡ Key Highlights & Features

- **Obsidian Dark Aesthetic:** Designed with a SaaS/AI dark interface (`#060913`, `#0D1326`), ambient backdrops, glassmorphism, and restrained electric-blue to violet accents.
- **National Hackathon Spotlight:** Dedicated victory banner featuring interactive image lightboxes for the trophy ceremony and Team Health Express team photos.
- **9 Verified Technical Certifications:** Interactive credential showcase with live previews, modal inspections, and direct PDF downloads (Deloitte, Cisco, Infosys, NPTEL Elite, Simplilearn, ServiceNow, Unified Mentor).
- **Interactive Project Showcase:** Category-based filtering (All, Analytics, AI & ML, Full-Stack) featuring live demo links and verified GitHub source repositories.
- **One-Click Verified Resume Download:** Instant download of `Shaik_Naseema_Resume.pdf` with automated SPA `HEAD` pre-check and toast notifications.
- **Live Contact Form & Privacy Guard:** Integrated with **Web3Forms** for instant direct inbox delivery (`naseema04122005@gmail.com`) with validation, confetti celebration, and complete removal of personal phone numbers for spam protection.
- **Fluid Micro-Interactions:** Smooth page transitions, card hover glows, and section scroll-spy powered by Framer Motion.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/) (Custom Obsidian Palette) |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/) + Custom High-Res SVGs |
| **Form Handling** | [Web3Forms API](https://web3forms.com/) |
| **Celebrations** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Typography** | Plus Jakarta Sans & JetBrains Mono |

---

## 🚀 Featured Projects

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **Sanjeevani AI** | Intelligent Healthcare Platform featuring multilingual conversational triage and healthcare navigation. *1st Place National Hackathon Winner (Team Health Express)*. | Next.js, FastAPI, LangChain, Groq, Mistral-7B | [Live Demo](https://pavanstarkin-tech.github.io/healthyxpress_medha/) • [Source Code](https://github.com/pavanstarkin-tech/healthyxpress_medha) |
| **MetricMind** | Enterprise business intelligence & dataset analytics dashboard. Built as part of an industry internship at Axlero Solutions. | React, TypeScript, Tailwind CSS, Recharts | [Live Demo](https://metric-mind-6ndd.vercel.app) • [Source Code](https://github.com/ShaikNaseema04/MetricMind) |
| **Mentivo** | Interactive full-stack quiz and learning platform with question banks, timers, and real-time score analytics. | React, Node.js, Express, MongoDB, Tailwind | [Live Demo](https://mentivo.vercel.app/) • [Source Code](https://github.com/ShaikNaseema04/mentivo) |
| **Cloud Bus Pass System** | Digital transport pass management system streamlining online commuter applications and verification. | Python, Streamlit, SQLite, Pandas | [Live Demo](https://cloudbuspasssystem-mxjapwcmbbgb9ehexs4svw.streamlit.app/) • [Source Code](https://github.com/ShaikNaseema04/cloud_bus_pass_system) |
| **Customer Churn Analysis** | End-to-end predictive analytics pipeline identifying key customer attrition indicators and business risk segments. | Python, Pandas, Scikit-learn, Power BI, Seaborn | [Source Code](https://github.com/ShaikNaseema04) |
| **E-Commerce Sales Analytics** | Retail transaction BI dashboard uncovering sales trends, regional KPIs, and product performance. | Power BI, DAX, Excel, SQL | [Source Code](https://github.com/ShaikNaseema04) |

---

## 📁 Repository Structure

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg                  # Official portrait photo
│   │   ├── Shaik_Naseema_Resume.pdf     # Downloadable Resume PDF
│   │   ├── hackathon-team.jpg           # Team Health Express photo
│   │   └── hackathon-trophy.jpg         # National Trophy photo
│   ├── certificates/                    # All 9 verified certification PDFs
│   │   ├── deloitte.pdf
│   │   ├── unified-mentor.pdf
│   │   ├── python-essentials.pdf
│   │   ├── data-analyst-simplilearn.pdf
│   │   ├── nptel.pdf
│   │   ├── networking-basics.pdf
│   │   ├── servicenow.pdf
│   │   ├── power-bi-infosys.pdf
│   │   └── python-infosys.pdf
│   └── images/
│       ├── hackathon-team.png
│       └── hackathon-trophy.png
├── src/
│   ├── components/
│   │   ├── About.jsx                    # Bio & academic credentials
│   │   ├── Achievement.jsx              # National Hackathon spotlight
│   │   ├── CertificateModal.jsx         # Fullscreen certificate lightbox
│   │   ├── Certifications.jsx           # 9-card credentials section
│   │   ├── Contact.jsx                  # Live Web3Forms contact & socials
│   │   ├── Education.jsx                # Academic background & scores
│   │   ├── Experience.jsx               # Work history & internship timeline
│   │   ├── Footer.jsx                   # Bottom navigation & copyright
│   │   ├── Hero.jsx                     # Headline, portrait card & CTAs
│   │   ├── ImageLightbox.jsx            # Hackathon photo zoom viewer
│   │   ├── Navbar.jsx                   # Sticky glassmorphic navigation
│   │   ├── Projects.jsx                 # Filterable showcase with demos
│   │   ├── Skills.jsx                   # Bento grid of technical skills
│   │   └── SocialIcons.jsx              # Custom GitHub & LinkedIn SVG icons
│   ├── data/
│   │   └── portfolioData.js             # Single source of truth portfolio data
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/ShaikNaseema04/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your browser.

### 4. Build for production
```bash
npm run build
```
The compiled, production-ready static assets will be created in the `dist/` directory.

---

## 📬 Contact & Connect

- **Name:** Shaik Naseema
- **Email:** [naseema04122005@gmail.com](mailto:naseema04122005@gmail.com)
- **LinkedIn:** [linkedin.com/in/naseema-shaik-536694342](https://www.linkedin.com/in/naseema-shaik-536694342/)
- **GitHub:** [github.com/ShaikNaseema04](https://github.com/ShaikNaseema04)
- **Location:** Andhra Pradesh, India
