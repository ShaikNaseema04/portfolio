# Shaik Naseema — Personal Portfolio Web Application

A modern, production-ready personal portfolio web application built for **Shaik Naseema** (Aspiring Data Analyst & Prompt Engineering Enthusiast). Designed with a SaaS/AI aesthetic (inspired by Linear, Raycast, and Vercel) featuring a deep obsidian-navy dark theme, glassmorphic card containers, and restrained electric-blue to violet accents.

---

## ⚡ Tech Stack & Architecture

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS with custom deep-navy/slate color tokens
- **Animations:** Framer Motion (subtle scroll reveals, smooth hover transitions, modal dialogs)
- **Icons:** Lucide React + custom SVGs for brand fidelity
- **Typography:** Plus Jakarta Sans & JetBrains Mono (loaded via Google Fonts)
- **Email Delivery:** Web3Forms API integration
- **Confetti Effects:** Canvas-Confetti

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg                      # Portrait photo
│   │   ├── Shaik_Naseema_Resume.pdf         # Downloadable Resume PDF
│   │   ├── hackathon-trophy.jpg             # National Trophy ceremony photo
│   │   ├── hackathon-team.jpg               # Team Health Express photo
│   │   └── certs/
│   │       ├── deloitte-da.jpg              # Deloitte Data Analytics simulation
│   │       ├── unified-mentor-intern.jpg    # Unified Mentor Internship certificate
│   │       ├── cisco-python.jpg             # Cisco Python Essentials 1
│   │       ├── simplilearn-da.jpg           # Simplilearn Data Analyst
│   │       ├── nptel-spm.jpg                # NPTEL Software Project Management (Elite)
│   │       ├── cisco-networking.jpg         # Cisco Networking Basics
│   │       ├── servicenow-data.jpg          # ServiceNow Data Foundations
│   │       ├── infosys-powerbi.jpg          # Infosys Power BI Data Visualization
│   │       └── infosys-python.jpg           # Infosys Python Basics
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                       # Sticky glassmorphic navigation
│   │   ├── Hero.jsx                         # Hero headline, CTAs, portrait frame
│   │   ├── Achievement.jsx                  # National Hackathon spotlight banner
│   │   ├── ImageLightbox.jsx                # Lightbox for hackathon gallery
│   │   ├── About.jsx                        # Bio, location, CGPA metadata pills
│   │   ├── Skills.jsx                       # Bento grid skills (NO percentage bars)
│   │   ├── Projects.jsx                     # Filterable project case studies
│   │   ├── Experience.jsx                   # Vertical timeline of internships
│   │   ├── Certifications.jsx               # 9-card interactive grid
│   │   ├── CertificateModal.jsx             # Full-screen certificate lightbox modal
│   │   ├── Education.jsx                    # Academic qualifications & CGPA: 8.5
│   │   ├── Contact.jsx                      # Contact cards & Web3Forms integration
│   │   ├── Footer.jsx                       # Quick links, copyright, back-to-top
│   │   └── SocialIcons.jsx                  # High-res GitHub & LinkedIn SVG icons
│   ├── data/
│   │   └── portfolioData.js                 # Centralized portfolio data
│   ├── App.jsx                              # Root app assembler
│   ├── index.css                            # Tailwind directives & custom utilities
│   └── main.jsx                             # React DOM entrypoint
├── index.html                               # SEO metadata & OpenGraph tags
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

### 4. Create Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 📸 Dropping in Real Media Assets

The application already includes styled, functional vector placeholder assets in `public/assets/`. When you are ready to use your actual photos and certificates, simply copy your files into the designated paths below. **The file names must match exactly:**

### 1. Profile Portrait Photo
- **File path:** `public/assets/profile.jpg`
- **Recommended size:** 800×1000px (4:5 or 3:4 portrait aspect ratio)

### 2. Resume PDF
- **File path:** `public/assets/Shaik_Naseema_Resume.pdf`
- Clicking **Download Resume** on the Hero section or Navbar directly downloads this file.

### 3. National Hackathon Photos
- **Trophy ceremony photo:** `public/assets/hackathon-trophy.jpg`
- **Team celebration photo:** `public/assets/hackathon-team.jpg`

### 4. Certificates (All 9 Files in `public/assets/certs/`)
| Certificate | File Path |
| :--- | :--- |
| Deloitte Data Analytics Job Simulation | `public/assets/certs/deloitte-da.jpg` |
| Unified Mentor Internship Certificate | `public/assets/certs/unified-mentor-intern.jpg` |
| Cisco Python Essentials 1 | `public/assets/certs/cisco-python.jpg` |
| Simplilearn Data Analyst Course | `public/assets/certs/simplilearn-da.jpg` |
| NPTEL Software Project Management (Elite) | `public/assets/certs/nptel-spm.jpg` |
| Cisco Networking Basics | `public/assets/certs/cisco-networking.jpg` |
| ServiceNow Data Foundations | `public/assets/certs/servicenow-data.jpg` |
| Infosys Springboard Power BI Visualization | `public/assets/certs/infosys-powerbi.jpg` |
| Infosys Springboard Basics of Python | `public/assets/certs/infosys-python.jpg` |

> **Note:** If an image is missing or cannot load, each card automatically displays a graceful fallback card with an "Upload Pending" placeholder UI.

---

## ✉️ Web3Forms Email Integration Setup

The contact form is pre-configured to deliver messages directly to your email inbox via [Web3Forms](https://web3forms.com/).

1. Visit [https://web3forms.com/](https://web3forms.com/) and enter your email (`naseema04122005@gmail.com`).
2. Copy your free Access Key sent to your inbox.
3. Open `src/components/Contact.jsx`.
4. Locate the configuration constant at line 20:
   ```javascript
   export const YOUR_WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```
5. Replace `"YOUR_WEB3FORMS_ACCESS_KEY"` with your key:
   ```javascript
   export const YOUR_WEB3FORMS_ACCESS_KEY = "a1b2c3d4-e5f6-7890-abcd-1234567890ef";
   ```
*(While the key is in demo mode, the form will simulate a successful send with celebration confetti and provide instructions.)*

---

## 🌐 Deploying to Vercel via GitHub

### Step 1: Initialize Git Repository
In the project root directory, run:
```bash
git init
git add .
git commit -m "feat: initial commit of Shaik Naseema portfolio"
```

### Step 2: Push to GitHub
Create a new public repository on your GitHub account (`https://github.com/ShaikNaseema04/portfolio`) and run:
```bash
git branch -M main
git remote add origin https://github.com/ShaikNaseema04/portfolio.git
git push -u origin main
```

### Step 3: Connect to Vercel
1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `portfolio` repository from the list.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your portfolio will be live worldwide on a fast CDN within 60 seconds!

---

## 🛡️ Strict Integrity & Attribution Compliance

- **Sanjeevani AI:** Explicitly attributed as a **Team Project (Team Health Express)** with national 1st place recognition.
- **MetricMind:** Explicitly attributed as **Internship-related work at Axlero Solutions**.
- **SkillUp Online Hackathon India 2026:** Formally presented as a **Team Achievement (Team Health Express)** with exact event scale statistics (13,000+ registrations, 4,000+ teams, 500+ colleges).
- **Academic Standing:** Accurately states **CGPA: 8.5** and status as an **Aspiring Data Analyst (2023–2027 B.Tech Graduate)**.
- **Zero Hallucinated Skill Percentages:** Skills are categorized with functional proficiency tags without arbitrary progress bars.
