
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnalyticsOverview from '@/components/AnalyticsOverview';
import Features from '@/components/Features';
import DataVisualizations from '@/components/DataVisualizations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach(el => observer.observe(el));
    
    // Clean up
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Update document title
    document.title = "DataLens | TV News Data Analytics";
  }, []);
  
  return (
    <div className="smooth-scroll">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AnalyticsOverview />
        <Features />
        <DataVisualizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
