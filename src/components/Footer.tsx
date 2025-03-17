
import React from 'react';
import PythonIcon from './PythonIcon';
import PowerBIIcon from './PowerBIIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-analytics-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8 rounded-lg bg-white/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-analytics-purple to-analytics-blue opacity-20" />
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-medium text-xl text-white">DataLens</span>
            </div>
            
            <p className="text-analytics-gray-300 mb-6 max-w-md">
              Transforming TV news data into actionable intelligence through advanced Python analytics and Power BI visualizations.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-analytics-gray-400 text-sm">Powered by:</span>
              <PythonIcon className="w-6 h-6 text-analytics-gray-300" />
              <PowerBIIcon className="w-6 h-6 text-analytics-gray-300" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                "Content Analysis",
                "Audience Insights",
                "Competitive Intelligence",
                "Ad Performance",
                "Custom Dashboards"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-analytics-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Case Studies",
                "Testimonials",
                "Blog",
                "Contact"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-analytics-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-analytics-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-analytics-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DataLens Analytics. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy"
            ].map((item, i) => (
              <a key={i} href="#" className="text-analytics-gray-400 hover:text-white text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
