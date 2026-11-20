import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProblemsSolutions } from './components/ProblemsSolutions';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Active section tracking for navbar
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'problems', 'work', 'process', 'tech', 'why-us', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactModal = (servicePrefill?: string) => {
    if (servicePrefill) {
      setPrefilledService(servicePrefill);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-white selection:bg-lime selection:text-black relative bg-noise">
      {/* Custom Tactile Cursor (Desktop only) */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenContactModal={handleOpenContactModal}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenContactModal={() => handleOpenContactModal()}
          onExploreWork={handleExploreWork}
        />

        {/* 2. About Us Section */}
        <About
          onStartProject={() => handleOpenContactModal('Full-Cycle Digital Transformation')}
        />

        {/* 3. Services Section */}
        <Services
          onSelectServiceForInquiry={(serviceTitle) => handleOpenContactModal(serviceTitle)}
        />

        {/* 4. Business Problems We Solve */}
        <ProblemsSolutions
          onResolveProblem={(problemTitle) => handleOpenContactModal(`Resolve: ${problemTitle}`)}
        />

        {/* 5. Our Work / Portfolio */}
        <Portfolio
          onStartProject={(projectContext) => handleOpenContactModal(projectContext)}
        />

        {/* 6. Our 6-Step Process */}
        <Process />

        {/* 7. Technology Stack */}
        <TechStack />

        {/* 8. Why Choose Us */}
        <WhyChooseUs
          onStartProject={() => handleOpenContactModal()}
        />

        {/* 9. Contact / Start A Project */}
        <Contact
          prefillService={prefilledService}
          onClearPrefill={() => setPrefilledService(undefined)}
        />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default App;
