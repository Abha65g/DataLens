
import React from 'react';
import { 
  BarChart, LineChart, MoveUpRight, PieChart, 
  BrainCircuit, FlaskConical, BarChart3, 
  BarChart4, AlertCircle, CheckCircle2
} from 'lucide-react';
import PythonIcon from './PythonIcon';
import PowerBIIcon from './PowerBIIcon';

const Features = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-analytics-gray-50 to-transparent opacity-50" />
      </div>
      
      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade-in">
          <div className="highlight-chip">
            Our Solutions
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Powerful Analytics Tools for Broadcast Media
          </h2>
          
          <p className="text-analytics-gray-600">
            Combine the flexibility of Python with the interactive dashboards of Power BI
            to transform TV news datasets into comprehensive insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Python-Powered Analysis",
              description: "Leverage advanced Python libraries like pandas, NLTK, and scikit-learn to process and analyze broadcast transcripts and metadata.",
              icon: <PythonIcon className="w-10 h-10 text-analytics-blue" />,
              delay: 0
            },
            {
              title: "Interactive Power BI Dashboards",
              description: "Transform complex data into intuitive visualizations that stakeholders can explore and interact with in real-time.",
              icon: <PowerBIIcon className="w-10 h-10 text-analytics-purple" />,
              delay: 100
            },
            {
              title: "Natural Language Processing",
              description: "Extract entities, sentiment, and topics from broadcast transcripts to quantify narrative trends across networks.",
              icon: <BrainCircuit size={32} className="text-analytics-teal" />,
              delay: 200
            },
            {
              title: "Viewership Pattern Analysis",
              description: "Correlate audience metrics with content analysis to identify what truly engages your target demographic.",
              icon: <LineChart size={32} className="text-analytics-blue" />,
              delay: 300
            },
            {
              title: "Competitive Intelligence",
              description: "Track how competitors cover key topics and identify gaps in the market for your content strategy.",
              icon: <BarChart size={32} className="text-analytics-purple" />,
              delay: 400
            },
            {
              title: "Automated Reporting",
              description: "Schedule periodic reports with the latest insights to keep stakeholders informed without manual effort.",
              icon: <FlaskConical size={32} className="text-analytics-teal" />,
              delay: 500
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-rise section-fade-in"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-analytics-gray-600 mb-4">{feature.description}</p>
              
              <a href="#contact" className="inline-flex items-center text-analytics-purple text-sm font-medium">
                Learn more <MoveUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="bg-analytics-gray-50 rounded-2xl p-8 md:p-12 section-fade-in">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="highlight-chip">
                Data Integration
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Seamlessly Connect with Your Existing Data Sources
              </h2>
              
              <p className="mb-6">
                Our analytics platform integrates with a wide range of broadcast media data sources, making it easy to consolidate insights across your organization.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <CheckCircle2 size={18} />, text: "Nielsen Ratings" },
                  { icon: <CheckCircle2 size={18} />, text: "Transcription Services" },
                  { icon: <CheckCircle2 size={18} />, text: "Social Media Metrics" },
                  { icon: <CheckCircle2 size={18} />, text: "Internal CMS Data" },
                  { icon: <CheckCircle2 size={18} />, text: "Ad Performance" },
                  { icon: <CheckCircle2 size={18} />, text: "Website Analytics" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-analytics-gray-700">
                    <span className="text-analytics-purple">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Data Source Connector</h4>
                  <AlertCircle size={18} className="text-analytics-purple" />
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Nielsen API", status: "Connected", color: "green" },
                    { name: "Transcription Service", status: "Connected", color: "green" },
                    { name: "Social Analytics", status: "Connected", color: "green" },
                    { name: "Ad Performance", status: "Pending", color: "orange" }
                  ].map((source, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-analytics-gray-100/70 rounded-lg">
                      <span className="font-medium text-sm">{source.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-${source.color === 'green' ? 'analytics-blue/10 text-analytics-blue' : 'yellow-500/10 text-yellow-600'}`}>
                        {source.status}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 py-2 bg-analytics-purple/10 text-analytics-purple font-medium rounded-lg text-sm">
                  Add New Data Source
                </button>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-analytics-purple/5 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
