
import React from 'react';
import { 
  Mail, Phone, MapPin, LinkedinIcon, 
  TwitterIcon, GithubIcon, CheckCircle2
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-analytics-gray-50 to-transparent opacity-50" />
      </div>
      
      <div className="section-container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-fade-in">
            <div className="highlight-chip">
              Get in Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Let's Transform Your TV News Data Strategy
            </h2>
            
            <p className="mb-8">
              Ready to unlock deeper insights from your broadcast data? Our team of data scientists and media analysts are here to help you discover what your TV news data can really tell you.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Mail size={20} />,
                  title: "Email Us",
                  details: "info@datalens-analytics.com"
                },
                {
                  icon: <Phone size={20} />,
                  title: "Call Us",
                  details: "+1 (555) 234-5678"
                },
                {
                  icon: <MapPin size={20} />,
                  title: "Visit Us",
                  details: "1234 Analytics Ave, Media City, CA 90210"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-analytics-purple/10 flex items-center justify-center mr-4">
                    <span className="text-analytics-purple">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-analytics-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
                { icon: <TwitterIcon size={20} />, label: "Twitter" },
                { icon: <GithubIcon size={20} />, label: "GitHub" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-analytics-gray-100 flex items-center justify-center text-analytics-gray-600 hover:bg-analytics-purple hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="section-fade-in">
            <div className="glass-card p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-medium mb-6">Request a Consultation</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-analytics-gray-700">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full p-3 rounded-lg border border-analytics-gray-200 focus:outline-none focus:ring-1 focus:ring-analytics-purple"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-analytics-gray-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full p-3 rounded-lg border border-analytics-gray-200 focus:outline-none focus:ring-1 focus:ring-analytics-purple"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-analytics-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 rounded-lg border border-analytics-gray-200 focus:outline-none focus:ring-1 focus:ring-analytics-purple"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium text-analytics-gray-700">
                    Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    className="w-full p-3 rounded-lg border border-analytics-gray-200 focus:outline-none focus:ring-1 focus:ring-analytics-purple"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-analytics-gray-700">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-analytics-gray-200 focus:outline-none focus:ring-1 focus:ring-analytics-purple"
                    placeholder="Tell us about your TV news data challenges..."
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 text-analytics-purple focus:ring-analytics-purple"
                  />
                  <label htmlFor="consent" className="text-sm text-analytics-gray-600">
                    I agree to receive occasional insights and news about TV news analytics.
                  </label>
                </div>
                
                <button className="w-full py-3 bg-analytics-purple text-white font-medium rounded-lg shadow-md hover-rise">
                  Submit Request
                </button>
                
                <p className="text-xs text-analytics-gray-500 text-center mt-4">
                  Your data is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
