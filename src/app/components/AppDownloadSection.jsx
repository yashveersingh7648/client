"use client";
import Image from "next/image";
import { Apple, Play, QrCode, Download } from "lucide-react";

const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Join our Network with <span className="text-orange-400">Saathi Samridhhi App</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          
          {/* App Download Links */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-6">App Available On</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              {/* App Store */}
              <a
                href="https://apps.apple.com/dk/app/saathi-samridhhi-by-tmt-plus/id6476380564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white text-blue-600 rounded-lg hover:bg-blue-700 hover:text-white transition"
              >
                <Apple className="w-8 h-8" />
                <span className="text-lg font-medium">App Store</span>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.basiq.tmtplus&hl=en_IN&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white text-green-600 rounded-lg hover:bg-green-700 hover:text-white transition"
              >
                <Play className="w-8 h-8" />
                <span className="text-lg font-medium">Google Play</span>
              </a>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Scan QR Code to Download App</h3>
            <div className="relative w-40 h-40 mx-auto bg-white p-3 rounded-lg shadow-lg">
              <Image
                src="/wp-content/uploads/2025/01/scan.jpg"
                alt="QR Code"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
          >
            <Download className="w-6 h-6" />
            Download E-Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
