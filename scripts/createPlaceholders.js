// scripts/createPlaceholders.js
import fs from 'fs';
import path from 'path';

const certsDir = path.resolve('public/assets/certs');
const assetsDir = path.resolve('public/assets');

fs.mkdirSync(certsDir, { recursive: true });

function makeSvg({ width, height, title, subtitle, badge, accent = '#3B82F6', icon = 'certificate' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1326" />
      <stop offset="100%" stop-color="#060913" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.8" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" rx="12" />
  <rect x="2" y="2" width="${width - 4}" height="${height - 4}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" rx="10" />
  
  <!-- Subtle decorative elements -->
  <circle cx="${width - 60}" cy="60" r="100" fill="${accent}" opacity="0.05" />
  <circle cx="60" cy="${height - 60}" r="80" fill="#8B5CF6" opacity="0.04" />
  
  <rect x="24" y="24" width="8" height="${height - 48}" fill="url(#glow)" rx="4" />
  
  <!-- Badge -->
  <rect x="52" y="32" width="160" height="26" rx="13" fill="rgba(59,130,246,0.15)" stroke="${accent}" stroke-opacity="0.3" />
  <text x="66" y="49" fill="#93C5FD" font-family="system-ui, sans-serif" font-size="11" font-weight="600" letter-spacing="0.5">${badge.toUpperCase()}</text>
  
  <!-- Main Title -->
  <text x="52" y="105" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="20" font-weight="700">${title}</text>
  <text x="52" y="132" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13" font-weight="500">${subtitle}</text>
  
  <!-- Footer Note -->
  <text x="52" y="${height - 35}" fill="#64748B" font-family="monospace" font-size="11">Recipient: Shaik Naseema • Verified Credential</text>
  <text x="${width - 190}" y="${height - 35}" fill="#3B82F6" font-family="system-ui, sans-serif" font-size="11">Click to view details ↗</text>
</svg>`;
}

const certs = [
  { file: 'deloitte-da.jpg', title: 'Deloitte Data Analytics Simulation', subtitle: 'Deloitte • May 2026', badge: 'Corporate Simulation' },
  { file: 'unified-mentor-intern.jpg', title: 'Data Analyst Internship Certificate', subtitle: 'Unified Mentor Pvt. Ltd. • September 2026', badge: 'Industry Internship' },
  { file: 'cisco-python.jpg', title: 'Python Essentials 1', subtitle: 'Cisco Networking Academy • May 2026', badge: 'Verified Cisco Credential' },
  { file: 'simplilearn-da.jpg', title: 'Data Analyst Course', subtitle: 'Simplilearn SkillUp • January 2026', badge: 'Foundational Analytics' },
  { file: 'nptel-spm.jpg', title: 'Software Project Management (Elite)', subtitle: 'NPTEL • October 2025', badge: 'Academic Elite Grade' },
  { file: 'cisco-networking.jpg', title: 'Networking Basics', subtitle: 'Cisco Networking Academy • December 2024', badge: 'Verified Cisco Credential' },
  { file: 'servicenow-data.jpg', title: 'ServiceNow Data Foundations', subtitle: 'ServiceNow • Data Integrity & CMDB', badge: 'Enterprise Platform' },
  { file: 'infosys-powerbi.jpg', title: 'Data Visualization with Power BI', subtitle: 'Infosys Springboard • Power BI & DAX', badge: 'Infosys Springboard' },
  { file: 'infosys-python.jpg', title: 'Basics of Python', subtitle: 'Infosys Springboard • Programming Fundamentals', badge: 'Infosys Springboard' },
];

for (const cert of certs) {
  const svg = makeSvg({
    width: 600,
    height: 380,
    title: cert.title,
    subtitle: cert.subtitle,
    badge: cert.badge,
    accent: '#3B82F6'
  });
  fs.writeFileSync(path.join(certsDir, cert.file), svg);
}

// Trophy SVG
const trophySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E162D" />
      <stop offset="100%" stop-color="#060913" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#trophyGrad)" rx="16" />
  <rect x="2" y="2" width="796" height="496" fill="none" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2" rx="14" />
  <circle cx="400" cy="210" r="130" fill="#F59E0B" opacity="0.08" />
  
  <text x="400" y="80" text-anchor="middle" fill="#F59E0B" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2">NATIONAL CHAMPION • FIRST PLACE</text>
  <text x="400" y="125" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="800">SkillUp Online Hackathon India 2026</text>
  <text x="400" y="160" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="16">In Collaboration with IBM SkillsBuild • IBM EGL, Bengaluru</text>
  
  <!-- Trophy representation -->
  <g transform="translate(360, 190) scale(1.6)">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 3.31 2.01 6.16 4.9 7.37.52.22.85.74.85 1.3V20h5v-1.33c0-.56.33-1.08.85-1.3C18.49 16.16 20.5 13.31 20.5 10c0-4.42-3.58-8-8.5-8z" fill="url(#gold)" />
    <path d="M7 21h10v3H7z" fill="#D97706" />
  </g>
  
  <text x="400" y="360" text-anchor="middle" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="20" font-weight="700">SANJEEVANI AI</text>
  <text x="400" y="390" text-anchor="middle" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="15">TEAM HEALTH EXPRESS • 1st Place National Trophy</text>
  <text x="400" y="440" text-anchor="middle" fill="#64748B" font-family="monospace" font-size="13">October 27, 2026 • IBM EGL, Bengaluru, India</text>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'hackathon-trophy.jpg'), trophySvg);

// Team SVG
const teamSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E162D" />
      <stop offset="100%" stop-color="#060913" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#teamGrad)" rx="16" />
  <rect x="2" y="2" width="796" height="496" fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-width="2" rx="14" />
  <circle cx="400" cy="230" r="140" fill="#3B82F6" opacity="0.06" />
  
  <text x="400" y="90" text-anchor="middle" fill="#60A5FA" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2">TEAM PRESENTATION &amp; CELEBRATION</text>
  <text x="400" y="135" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="800">Team Health Express at IBM Bengaluru</text>
  <text x="400" y="170" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="16">Presenting Sanjeevani AI at SkillUp Online Hackathon India 2026 Finals</text>
  
  <!-- Team illustration symbol -->
  <g transform="translate(340, 210) scale(1.8)">
    <circle cx="16" cy="12" r="6" fill="#3B82F6" />
    <circle cx="36" cy="10" r="7" fill="#8B5CF6" />
    <circle cx="56" cy="12" r="6" fill="#3B82F6" />
    <path d="M6 34c0-5.5 4.5-10 10-10h1c2.3 2 5.5 3.2 9 3.2s6.7-1.2 9-3.2h1c5.5 0 10 4.5 10 10" fill="none" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" />
  </g>
  
  <text x="400" y="380" text-anchor="middle" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Team Health Express</text>
  <text x="400" y="410" text-anchor="middle" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14">Outperformed 4,000+ Teams Across 500+ Engineering Colleges</text>
  <text x="400" y="450" text-anchor="middle" fill="#64748B" font-family="monospace" font-size="12">October 27, 2026 • IBM EGL, Bengaluru</text>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'hackathon-team.jpg'), teamSvg);

// Profile photo fallback
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="700" viewBox="0 0 600 700">
  <defs>
    <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141C38" />
      <stop offset="50%" stop-color="#0E162D" />
      <stop offset="100%" stop-color="#060913" />
    </linearGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="50%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#pGrad)" rx="24" />
  <rect x="2" y="2" width="596" height="696" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" rx="22" />
  
  <circle cx="300" cy="280" r="120" fill="url(#ringGrad)" opacity="0.15" />
  <circle cx="300" cy="280" r="90" fill="#1E293B" stroke="url(#ringGrad)" stroke-width="3" />
  
  <!-- Silhouette icon -->
  <circle cx="300" cy="250" r="40" fill="#94A3B8" />
  <path d="M230 340c0-38 31-70 70-70s70 32 70 70" fill="#64748B" />
  
  <text x="300" y="440" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Shaik Naseema</text>
  <text x="300" y="475" text-anchor="middle" fill="#60A5FA" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Aspiring Data Analyst</text>
  <text x="300" y="505" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="14">Prompt Engineering Enthusiast</text>
  
  <rect x="180" y="550" width="240" height="40" rx="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" />
  <text x="300" y="575" text-anchor="middle" fill="#93C5FD" font-family="monospace" font-size="13" font-weight="600">CGPA: 8.5 • B.Tech CSE</text>
  
  <text x="300" y="650" text-anchor="middle" fill="#64748B" font-family="system-ui, sans-serif" font-size="12">Drop your profile.jpg in public/assets/ to replace</text>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'profile.jpg'), profileSvg);

// Resume PDF placeholder (Simple valid text file / PDF structure)
const resumeContent = `%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj
4 0 obj << /Length 265 >> stream
BT
/F1 22 Tf
50 720 Td
(Shaik Naseema - Resume) Tj
/F1 12 Tf
0 -30 Td
(Aspiring Data Analyst | Prompt Engineering Enthusiast) Tj
0 -20 Td
(Email: naseema04122005@gmail.com | Phone: +91 9701975625 | CGPA: 8.5) Tj
0 -30 Td
(Please replace this placeholder with your official Shaik_Naseema_Resume.pdf in public/assets/) Tj
ET
endstream
endobj
5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000560 00000 n 
trailer << /Size 6 /Root 1 0 R >>
startxref
638
%%EOF`;
fs.writeFileSync(path.join(assetsDir, 'Shaik_Naseema_Resume.pdf'), resumeContent);

console.log('Successfully created all placeholder media assets!');
