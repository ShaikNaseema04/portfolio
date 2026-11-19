import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievement from './components/Achievement';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Achievement />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
