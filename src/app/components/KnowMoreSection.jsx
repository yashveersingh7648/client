import React from "react";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";

const KnowMoreSection = ({
  title = "Know More About Us",
  description = "TMT Plus, a leading name in polymer solutions, is known for its superior quality, durability, and innovation. Trusted nationwide, we deliver excellence in every product. Explore more about us below!",
  contactLink = "/ContactUs",
  // brochureLink = "https://www.tmtplus.co.in/download-brochure/",
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <div className="flex justify-center gap-6">
            <a
              href={contactLink}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaEnvelope /> Contact Us
            </a>
            {/* <a
              href={brochureLink}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <FaFileDownload /> E-Brochure
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;
