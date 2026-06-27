import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animations
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-background min-h-screen text-white font-inter selection:bg-primary selection:text-white">
      <CustomCursor />
      <ScrollProgressBar />
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <FeaturedProjects />
          <Experience />
          <Education />
          <Certifications />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
