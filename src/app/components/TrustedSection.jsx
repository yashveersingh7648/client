"use client";
import React from "react";
import { FaFlag, FaUsers, FaIndustry, FaAward, FaSmile, FaHandshake } from "react-icons/fa";

const trustData = [
  {
    icon: <FaFlag className="text-orange-500 text-5xl mb-4" />,
    title: "Beginning of a Legacy",
    description: "Founded in 1960, TMT Plus pioneered high-quality electrical fittings, evolving into a trusted industry leader."
  },
  {
    icon: <FaUsers className="text-blue-500 text-5xl mb-4" />,
    title: "Our People",
    description: "Our skilled workforce drives innovation and quality, ensuring exceptional service and customer satisfaction."
  },
  {
    icon: <FaIndustry className="text-green-500 text-5xl mb-4" />,
    title: "Manufacturing",
    description: "State-of-the-art facilities and advanced technology ensure precision and top-notch product quality."
  },
  {
    icon: <FaAward className="text-yellow-500 text-5xl mb-4" />,
    title: "Certification",
    description: "Certified for excellence, reflecting our commitment to industry standards and superior quality."
  },
  {
    icon: <FaSmile className="text-purple-500 text-5xl mb-4" />,
    title: "Customer Satisfaction",
    description: "Prioritizing customer needs with reliable, high-quality products and exceptional support."
  },
  {
    icon: <FaHandshake className="text-red-500 text-5xl mb-4" />,
    title: "Partnership",
    description: "Strong collaborations with trusted suppliers and dealers, fostering growth and reliability."
  }
];

const TrustedSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6"> Fine Engineering Work – The Most Trusted</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Since 1960, TMT Plus has been a pioneer in the uPVC pipes and tanks industry. With a legacy of delivering 
              high-quality products, we continue to evolve with advanced manufacturing, certified quality, and a 
              customer-centric approach.
            </p>
            <a
              href="/History"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Icon Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
