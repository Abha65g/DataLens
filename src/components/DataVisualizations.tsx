
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedChart from './AnimatedChart';

const DataVisualizations = () => {
  const [activeTab, setActiveTab] = useState("network-comparison");
  
  return (
    <section id="case-studies" className="py-20 md:py-32 bg-analytics-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-analytics-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-10 w-80 h-80 bg-analytics-purple/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade-in">
          <div className="highlight-chip">
            Visualization Samples
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Transforming TV News Data into Actionable Insights
          </h2>
          
          <p className="text-analytics-gray-600">
            Explore interactive samples of our Power BI dashboards powered by Python data processing
          </p>
        </div>
        
        <div className="section-fade-in">
          <Tabs defaultValue="network-comparison" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-10">
              <TabsTrigger 
                value="network-comparison"
                className="data-[state=active]:text-analytics-purple data-[state=active]:bg-analytics-purple/10"
                onClick={() => setActiveTab("network-comparison")}
              >
                Network Comparison
              </TabsTrigger>
              <TabsTrigger 
                value="topic-analysis"
                className="data-[state=active]:text-analytics-purple data-[state=active]:bg-analytics-purple/10"
                onClick={() => setActiveTab("topic-analysis")}
              >
                Topic Analysis
              </TabsTrigger>
              <TabsTrigger 
                value="audience-metrics"
                className="data-[state=active]:text-analytics-purple data-[state=active]:bg-analytics-purple/10"
                onClick={() => setActiveTab("audience-metrics")}
              >
                Audience Metrics
              </TabsTrigger>
            </TabsList>
            
            <div className="glass-card p-6 md:p-10 backdrop-blur-sm shadow-lg">
              <TabsContent value="network-comparison" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-2">Network Coverage Comparison</h3>
                    <p className="text-analytics-gray-600 mb-6">
                      Analysis of how different networks cover the same news stories, highlighting differences in airtime allocation, sentiment, and framing.
                    </p>
                    
                    <div className="relative h-80 border border-analytics-gray-200 rounded-lg bg-white p-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-lg">
                          <AnimatedChart className="h-60" />
                          
                          <div className="flex justify-between mt-6 text-xs text-analytics-gray-500">
                            <span>Network A</span>
                            <span>Network B</span>
                            <span>Network C</span>
                            <span>Network D</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Key Findings</h3>
                    <p className="text-analytics-gray-600 mb-4">
                      Insights generated from comparing coverage across major networks
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Network A dedicates 38% more airtime to economic stories",
                        "Network B uses more positive sentiment language on healthcare topics",
                        "Network C features 2.5× more expert interviews on climate stories",
                        "Network D shows consistent negative framing on international affairs"
                      ].map((finding, index) => (
                        <div key={index} className="p-3 rounded-lg bg-analytics-gray-100">
                          <div className="flex">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-analytics-purple/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-analytics-purple text-xs font-medium">{index + 1}</span>
                            </div>
                            <p className="text-sm text-analytics-gray-700">{finding}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="topic-analysis" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-2">Topic Extraction & Analysis</h3>
                    <p className="text-analytics-gray-600 mb-6">
                      NLP-powered topic modeling extracts key themes from broadcast transcripts, tracking how topics evolve over time.
                    </p>
                    
                    <div className="relative h-80 border border-analytics-gray-200 rounded-lg bg-white p-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-lg">
                          <AnimatedChart className="h-60" />
                          
                          <div className="flex justify-between mt-6 text-xs text-analytics-gray-500">
                            <span>Politics</span>
                            <span>Economy</span>
                            <span>Health</span>
                            <span>Environment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Topic Insights</h3>
                    <p className="text-analytics-gray-600 mb-4">
                      Key patterns extracted from transcript analysis
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Political topics receive 47% of prime-time coverage",
                        "Healthcare stories show 28% growth in coverage since last quarter",
                        "Environmental topics correlate with higher viewer engagement metrics",
                        "Economic stories get more detailed analysis segments but less overall time"
                      ].map((finding, index) => (
                        <div key={index} className="p-3 rounded-lg bg-analytics-gray-100">
                          <div className="flex">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-analytics-blue/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-analytics-blue text-xs font-medium">{index + 1}</span>
                            </div>
                            <p className="text-sm text-analytics-gray-700">{finding}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="audience-metrics" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-2">Audience Response & Engagement</h3>
                    <p className="text-analytics-gray-600 mb-6">
                      Correlate viewership data with content analysis to understand what drives audience engagement.
                    </p>
                    
                    <div className="relative h-80 border border-analytics-gray-200 rounded-lg bg-white p-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-lg">
                          <AnimatedChart className="h-60" />
                          
                          <div className="flex justify-between mt-6 text-xs text-analytics-gray-500">
                            <span>Demographics</span>
                            <span>Viewership</span>
                            <span>Retention</span>
                            <span>Engagement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Audience Insights</h3>
                    <p className="text-analytics-gray-600 mb-4">
                      Key patterns in viewer behavior and preferences
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "18-34 demographic shows 42% higher engagement with data-driven segments",
                        "Interview segments have 23% longer viewer retention than monologues",
                        "Visual data presentations correlate with 37% higher social media shares",
                        "Stories with local impact drive 3× higher viewer response rates"
                      ].map((finding, index) => (
                        <div key={index} className="p-3 rounded-lg bg-analytics-gray-100">
                          <div className="flex">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-analytics-teal/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-analytics-teal text-xs font-medium">{index + 1}</span>
                            </div>
                            <p className="text-sm text-analytics-gray-700">{finding}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;
