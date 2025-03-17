
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import PythonIcon from './PythonIcon';
import PowerBIIcon from './PowerBIIcon';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrollPosition * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-analytics-blue/5 rounded-full blur-3xl parallax" />
        <div className="absolute top-1/2 -left-10 w-80 h-80 bg-analytics-purple/5 rounded-full blur-3xl parallax" />
        
        {/* Animated data points */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="absolute data-point parallax"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              opacity: 0.1 + (Math.random() * 0.3),
              animation: `pulse ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
        
        {/* Data connection lines */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`line-${index}`}
            className="data-line parallax"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 40 + 10}%`,
              width: `${Math.random() * 200 + 50}px`,
              transform: `rotate(${Math.random() * 180}deg)`,
              opacity: 0.05 + (Math.random() * 0.1)
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="highlight-chip inline-flex space-x-2">
            <span>TV News Data Analysis</span>
          </div>
          
          <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Unlock Insights from Broadcast Media with
            <span className="relative ml-2 text-analytics-purple">Advanced Analytics</span>
          </h1>
          
          <p className="text-lg md:text-xl text-analytics-gray-600 mb-8 max-w-3xl mx-auto">
            Transform complex TV news datasets into actionable intelligence using Python and Power BI. Discover patterns, trends, and audience insights that drive strategic decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3 bg-analytics-purple text-white font-medium rounded-lg shadow-lg hover-rise">
              Explore Solutions
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-analytics-gray-900 font-medium rounded-lg border border-analytics-gray-200 shadow-sm hover-rise">
              View Case Studies
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 md:space-x-12 mt-8 md:mt-12">
            <div className="flex flex-col items-center">
              <PythonIcon className="w-8 h-8 md:w-10 md:h-10 text-analytics-blue mb-2" />
              <span className="text-sm text-analytics-gray-600">Python Analytics</span>
            </div>
            <div className="h-10 w-px bg-analytics-gray-200"></div>
            <div className="flex flex-col items-center">
              <PowerBIIcon className="w-8 h-8 md:w-10 md:h-10 text-analytics-purple mb-2" />
              <span className="text-sm text-analytics-gray-600">Power BI Dashboards</span>
            </div>
            <div className="h-10 w-px bg-analytics-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-analytics-blue/10 rounded-full mb-2">
                <span className="text-analytics-blue font-medium">TV</span>
              </div>
              <span className="text-sm text-analytics-gray-600">Broadcast Data</span>
            </div>
          </div>
        </div>
        
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-analytics-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
