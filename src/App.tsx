import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#071022] to-[#0A1535] text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">myoprocess</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">Wall of success</a>
            <a href="#" className="hover:text-gray-300 transition-colors">How we work</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Case studies</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Pricing</a>
            <a href="#" className="hover:text-gray-300 transition-colors">FAQs</a>
          </div>
          <button className="btn-glow bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-2 rounded-full">
            Book more meetings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-24">
        {/* CTA Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-block border-2 border-indigo-500 rounded-full px-6 py-2 text-sm bg-black/30 backdrop-blur-sm">
            Automate your lead acquisition
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-glow">
            We build hands-off
            <br />
            growth systems for
            <br />
            B2B leaders.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
            We've Helped Our Clients Unlock Over $10,000,000 In Potential Deals, Freeing
            Them From The Hassle Of Referrals, Expensive SDRs, Amateur Agencies, And
            Worries About The Declining Economy.
          </p>

          <div className="flex justify-center">
            <button className="btn-glow bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg">
              Book more meetings
            </button>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">In 2024</h2>
        <p className="text-xl md:text-2xl text-gray-400">We generated our clients:</p>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            BRANDS COLLABORATIONS
          </div>
          <h2 className="text-4xl font-bold text-glow mb-12">Brands we work with</h2>
        </div>
        <div className="slider">
          <div className="slide-track">
            {/* Duplicate logos for seamless loop */}
            {[...Array(2)].map((_, index) => (
              <div key={`group-${index}`} className="flex">
                <div className="slide">
                  <img src="/assets/brandsweworkwith/vapi.png" alt="Vapi Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/salesforce.png" alt="Salesforce Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/monday.png" alt="Monday Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/hubspot.png" alt="Hubspot Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/gong.png" alt="Gong Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/salesforce.png" alt="Salesforce Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/bolt.png" alt="Bolt Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/n8n.png" alt="n8n Logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why most lead gen agencies suck Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-glow">
              Why most lead gen agencies suck
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              99% of agencies rely on broad targeting, targeting by "persona" or "spray and pray". But the 
              problem is today:
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Buyers are overwhelmed with cold sales emails. Their inboxes are flooded with irrelevant 
              junk.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The idea is simple, yet most don't implement it: <span className="font-semibold text-white">target prospects based on the specific 
              business pains you can solve, rather than just their job title and company.</span>
            </p>
          </div>
          
          {/* Comparison Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - What 99% of SDRs/lead gen agencies do */}
            <div className="bg-[#0A1535]/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 text-center">
                What 99% of SDRs/lead gen agencies do
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 border-b border-gray-700 pb-6">
                Let's target all CFOs at manufacturing companies with 1000+ employees.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-500">✕</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Generic Outreach:</span> Messaging is too broad and fails to resonate with prospect's unique pain points.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-500">✕</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Missed Opportunities:</span> You might overlook potential clients who need your help but don't fit the usual criteria.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-500">✕</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Wasted Resources:</span> Time and effort are spent on leads that aren't interested, leading to you losing money and time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-500">✕</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Advertising Cost Spiral:</span> When generic cold emails fail to convert, companies panic-pivot to paid ads, and spend way too much cash on pricey PPC campaigns and inflated CPAs - a budget-draining cycle that rarely solves the core prospecting problem.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-500">✕</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Opportunity Cost Creep:</span> While your team wastes billable hours chasing unqualified prospects, your competitors are closing deals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - The "myoProcessWay" */}
            <div className="bg-[#0A1535]/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 text-center">
                The "myoProcessWay"
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 border-b border-gray-700 pb-6">
                Let's target companies struggling with cash flow management or looking to automate their financial reporting processes.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Personalized Messaging:</span> We speak directly to the issues your prospects face, making them more relevant and timely.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Better Conversion Rates:</span> Prospects are more likely to buy from you when they see you providing solutions to their problems (simple math).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">No time wasted on prospection:</span> We target leads that really need your services, making your outreach more effective.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Build Trust:</span> Showing you understand their challenges and can solve their problem helps build trust and get them on retainers aka long-term relationships for your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-lg"><span className="font-semibold text-white">Faster Revenue Generation:</span> By targeting only the most relevant prospects, the myoProcess Method shortens the sales cycle, helping you close deals quicker and get cash flowing faster, accelerating revenue growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
