
import React, { useState, useEffect } from 'react';

interface AnimatedChartProps {
  className?: string;
}

const AnimatedChart: React.FC<AnimatedChartProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple visibility check
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const chartElement = document.getElementById('animated-chart');
    if (chartElement) {
      observer.observe(chartElement);
    }
    
    return () => {
      if (chartElement) {
        observer.unobserve(chartElement);
      }
    };
  }, []);
  
  return (
    <div 
      id="animated-chart"
      className={`w-full h-32 relative rounded-lg ${className}`}
    >
      <div className="absolute inset-0 flex items-end justify-between px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{
              height: isVisible ? `${Math.random() * 60 + 20}%` : '0%',
              opacity: isVisible ? 0.7 + (index / 30) : 0,
              transitionDelay: `${index * 50}ms`,
              backgroundColor: index % 3 === 0 
                ? 'rgba(10, 132, 255, 0.8)' 
                : index % 3 === 1 
                  ? 'rgba(94, 92, 230, 0.8)' 
                  : 'rgba(100, 210, 255, 0.8)'
            }}
          />
        ))}
      </div>
      
      {/* Animated line */}
      <div className="absolute top-1/2 w-full h-px bg-analytics-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-analytics-blue/30 w-[200%] animate-data-flow" />
      </div>
      
      {/* Data points */}
      {isVisible && Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`dot-${index}`}
          className="chart-dot bg-analytics-blue"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 70 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            opacity: 0.8,
            boxShadow: '0 0 10px rgba(10, 132, 255, 0.5)',
            transitionDelay: `${index * 200 + 300}ms`
          }}
        />
      ))}
      
      {/* Grid lines */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={`grid-${index}`}
          className="absolute w-full h-px bg-analytics-gray-200/50"
          style={{
            top: `${(index + 1) * 25}%`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            transitionDelay: `${index * 100}ms`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedChart;
