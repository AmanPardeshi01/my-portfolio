import { useState, useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply theme class to html element
    if (darkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
