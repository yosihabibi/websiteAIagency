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
                  <img src="/assets/brandsweworkwith/AVnKwCSktDRff026ULzA6dX8Q.avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/0XeSdNZIgDsTk11W1Z3PEIiouI.avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/oTnvqelXJFdwFxF60W3MUeCe9E4.avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/Fv5SrErzWoWUtxTYIMKJ3wyPICI.avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/nNtdrOrSXU7nLwItMeGWGQYXINE.avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/0XeSdNZIgDsTk11W1Z3PEIiouI (1).avif" alt="Brand Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/bolt.png" alt="Bolt Logo" />
                </div>
                <div className="slide">
                  <img src="/assets/brandsweworkwith/n8n.webp" alt="n8n Logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;