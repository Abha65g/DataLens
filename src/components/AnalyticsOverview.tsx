
import React, { useEffect, useRef } from 'react';
import AnimatedChart from './AnimatedChart';

const AnalyticsOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-analytics-gray-50"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="section-fade-in">
            <div className="highlight-chip">
              TV News Analytics
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Transform Broadcast Data into Strategic Insights
            </h2>
            
            <p className="mb-6">
              Modern TV news analysis requires sophisticated tools to extract meaningful patterns from vast amounts of unstructured data. Our approach combines the power of Python's data science libraries with the visualization capabilities of Power BI.
            </p>
            
            <div className="space-y-6 mt-8">
              {[
                {
                  title: "Content Analysis",
                  description: "Extract topics, sentiment, and key entities from news broadcasts automatically."
                },
                {
                  title: "Audience Insights",
                  description: "Correlate viewership patterns with content types, time slots, and demographic data."
                },
                {
                  title: "Competitive Intelligence",
                  description: "Compare coverage across networks to identify unique opportunities and positioning."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-analytics-purple/10 flex items-center justify-center mr-4">
                    <span className="text-analytics-purple font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-analytics-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="section-fade-in">
            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-analytics-blue/5 blur-xl" />
              <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-analytics-purple/5 blur-xl" />
              
              <h3 className="text-xl font-medium mb-4">News Content Distribution</h3>
              <p className="text-analytics-gray-500 text-sm mb-6">
                Analysis of content types across major networks, Q2 2023
              </p>
              
              <AnimatedChart className="mb-6" />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Hours Analyzed", value: "5,240+" },
                  { label: "Networks", value: "12" },
                  { label: "Topics Identified", value: "840" },
                  { label: "Accuracy Rate", value: "94.3%" }
                ].map((stat, index) => (
                  <div key={index} className="p-3 rounded-lg bg-analytics-gray-100/50">
                    <div className="text-lg md:text-xl font-medium text-analytics-gray-900">{stat.value}</div>
                    <div className="text-xs text-analytics-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsOverview;
