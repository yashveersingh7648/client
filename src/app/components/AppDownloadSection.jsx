"use client";
import Image from "next/image";
import { Apple, Play, Download } from "lucide-react";

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-500 text-white">
      <div className="container mx-auto px-6">
        {/* Heading with improved styling */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join our Network with <span className="text-yellow-300">Saathi Samridhhi App</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform your business with our powerful dealer network app. Get real-time updates, orders, and growth opportunities.
          </p>
        </div>

        {/* Content with better layout */}
        <div className="flex flex-col items-center">
          {/* App Download Links with enhanced design */}
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">Download the App Now</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* App Store - Improved Card */}
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-white/30">
                <a
                  href="https://apps.apple.com/dk/app/saathi-samridhhi-by-tmt-plus/id6476380564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4"
                >
                  <div className="bg-black p-3 rounded-full">
                    <Apple className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-blue-100 text-sm">Download on the</p>
                    <p className="text-xl font-bold">App Store</p>
                  </div>
                </a>
              </div>

              {/* Google Play - Improved Card */}
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-white/30">
                <a
                  href="https://play.google.com/store/apps/details?id=com.basiq.tmtplus&hl=en_IN&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4"
                >
                  <div className="bg-black p-3 rounded-full">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-blue-100 text-sm">Get it on</p>
                    <p className="text-xl font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section with better prominence */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Want to learn more about our program?</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              <Download className="w-6 h-6" />
              Download E-Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;