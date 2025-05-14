"use client";
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WhatsAppButton from "@/app/components/WhatsAppButton"


import { 
  faShieldAlt, faStar, faLayerGroup, faBullhorn, 
  faChalkboardTeacher, faChartLine, faTags, faHandshake,
  faMedal, faLightbulb, faTrophy
} from '@fortawesome/free-solid-svg-icons';

// Reusable Section Title Component
const SectionTitle = ({ title, subtitle, className = "" }) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// Reusable Card Component
const FeatureCard = ({ icon, title, description, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full ${className}`}>
    <div className="flex flex-col items-center text-center h-full">
      <div className="bg-blue-100 p-4 rounded-full mb-4">
        <FontAwesomeIcon icon={icon} className="text-blue-600 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </div>
);

// Reusable Breadcrumb Component
const Breadcrumb = ({ title, items }) => (
  <div className="text-center h-150 py-20 bg-cover bg-center pt-30 " style={{ backgroundImage: "url('Images/Delership.jpg')" }}>
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-40">{title}</h1>
      <nav className="flex justify-center">
        <ol className="flex items-center space-x-2 text-white">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {item.link ? (
                <a href={item.link} className="hover:text-blue-200">{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

// What Sets Us Apart Section
const USP = () => {
  const features = [
    {
      icon: faMedal,
      title: "Commitment",
      description: "To excellence which reflects in each batch of each product that comes out of our facility."
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "We continuously improve our productivity and incorporate technological advancements at every production stage."
    },
    {
      icon: faTrophy,
      title: "Industry Leadership",
      description: "We've consistently set and exceeded quality standards while adapting to market demands to keep customers satisfied."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Sets Us Apart" 
          subtitle="Discover the unique advantages that make TMT Plus the preferred choice" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Presence Section
const Presence = () => {
  const statesLeft = [
    "Jammu and Kashmir",
    "Uttarakhand",
    "Rajasthan",
    "Punjab",
    "Chandigarh",
    "Delhi"
   
  ];

  const statesRight = [
    "Himachal Pradesh",
    "Uttar Pradesh",
    "Jharkhand",
    "Bihar",
    "Haryana",
   
  ];

  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Presence</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          TMT Plus products are available across these states, with plans to expand nationwide
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
        {/* Left States List */}
        <div className="lg:w-1/4 w-full">
          <ul className="space-y-3">
            {statesLeft.map((state, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {state}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Map Container with controlled dimensions */}
        <div className="lg:w-2/4 w-full flex justify-center">
          <div className="relative w-full max-w-[500px] h-[550px]"> 
            <Image
              src="/Images/map.png"
              alt="India Map showing TMT Plus presence"
              fill
              className="object-contain rounded-lg shadow-md"
              quality={100}
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            />
          </div>
        </div>
        
        {/* Right States List */}
        <div className="lg:w-1/4 w-full">
          <ul className="space-y-3">
            {statesRight.map((state, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {state}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

// Dealer Benefits Component
const DealerBenefits = () => {
  const benefits = [
    {
      icon: faShieldAlt,
      title: "Reputation precedes brand",
      description: "TMT Plus has a history dating back to the 1960's, with six decades of manufacturing high-quality products.",
    },
    {
      icon: faStar,
      title: "Quality Products",
      description: "Credible experience in producing high-quality uPVC pipes and tanks.",
    },
    {
      icon: faLayerGroup,
      title: "Product Range",
      description: "Diverse range of uPVC products to cater to all customer needs.",
    },
    {
      icon: faBullhorn,
      title: "Marketing Support",
      description: "Promotional materials and advertising assistance provided.",
    },
    {
      icon: faChalkboardTeacher,
      title: "Training Support",
      description: "Technical training to help dealers understand our products better.",
    },
    {
      icon: faChartLine,
      title: "Growth Opportunities",
      description: "Tap into a growing industry and expand your business.",
    },
    {
      icon: faTags,
      title: "Competitive Pricing",
      description: "Favorable pricing and terms for our dealers.",
    },
    {
      icon: faHandshake,
      title: "Long-term Partnership",
      description: "Build a mutually beneficial, lasting relationship.",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Use industry-grade PVC solutions that meet the highest standards, ensuring durability and customer satisfaction."
        items={[
          { label: "Home", link: "/" },
          { label: "Dealership Benefits", link: "/ContactUs" }
        ]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of Dealership with TMT Plus" 
            subtitle="Partnering with TMT Plus offers numerous advantages for your business growth" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>
      
      <USP />
      <Presence />
      <WhatsAppButton />

    </>
  );
};

export default DealerBenefits;