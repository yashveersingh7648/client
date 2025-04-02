"use client";
import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { FaLightbulb, FaGlobeAmericas, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

import WhatsAppButton from "@/app/components/WhatsAppButton"


// Reusable Card Component

const ValueCard = ({ icon, title, description, colorClass }) => (
  <div className={`p-8 rounded-xl shadow-lg transition-all hover:shadow-xl ${colorClass}`}>
    <div className="flex flex-col items-center text-center h-full">
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-lg">{description}</div>
    </div>
  </div>
);

// Reusable Section Title Component
const SectionTitle = ({ title, subtitle, className = "" }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

// Reusable Image Component
const OptimizedImage = ({ src, alt, className = "" }) => (
  <div className={`relative rounded-xl overflow-hidden shadow-md ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
);

const CompanyValues = () => {
  return (
    <>
        <WhatsAppButton />
    
    <div  className="breadcrumb-section bg-cover bg-center text-white relative text-center py-20 h-100  opacity-70 top-30 mb-20"
style={{ backgroundImage: `url(/Images/about.jpg)` }}
>
</div>

     <section className="py-16 bg-gray-50 pt-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* Images Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Images/Tmt1.jpg"
                  alt="TMT Plus manufacturing facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/Images/Tmt2.jpeg"
                  alt="TMT Plus quality products"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
              {/* Content */}
          <div className="w-full lg:w-1/2 ms-5">
            <div className="max-w-lg mx-auto lg:mx-0">
              <span className="text-blue-600 font-semibold text-6xl">About </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Fine Engineering Work India Pvt Ltd.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
              Fine Engineering Work is a trusted distributor of high-quality polymer products under the renowned brand TMT Plus. Based in Aligarh, we are committed to delivering durable and efficient solutions to our customers. Since our establishment, we have focused on providing top-notch products at competitive prices, ensuring customer satisfaction through reliability and excellence.
With a strong reputation built over the years, Fine Engineering Work takes pride in offering innovative solutions that meet industry standards. Our dedication to quality, efficiency, and customer trust has made us a preferred choice in the market. As we continue to grow, we remain committed to excellence and innovation in every product we deliver.

              </p>
              {/* <Link 
                href="/about-us" 
                className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link> */}
            </div>
          </div>
        

        
        </div>
      </div>
    </section>
      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ValueCard
              icon={<FaLightbulb className="text-yellow-500" />}
              title="Our Vision"
              description={
                <div className="space-y-3">
      <p>"To deliver high-quality, affordable, and easy-to-install products, enhancing everyday convenience and safety for society."</p>
      <p>"To lead in Electrical & Sanitary Piping solutions by offering superior quality, innovation, and exceptional service."</p>
      <p>"To foster growth for all stakeholders – Customers, Partners, Shareholders, Employees, and Society through trust and excellence."</p>
    </div>
            }
             
            />

            <ValueCard
              icon={<FaGlobeAmericas className="text-red-500" />}
              title="Our Mission"
              description="We strive to achieve ₹600 crores in revenue by 2027, expanding our presence to 300+ districts across India, delivering innovative, high-quality polymer solutions with reliability, durability, and nationwide impact."
              colorClass="bg-white"
            />
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Future Plans"
            subtitle="TMT Plus envisions a future where affordable, best-in-class polymer products are accessible to all through continuous innovation and process advancement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Expansion</h3>
              <p>300+ districts coverage by 2027 with enhanced distribution networks</p>
            </div>
            <div className="text-center">
              <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product Innovation</h3>
              <p>15+ new product lines in development for emerging market needs</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p>Transform 1M+ lives through accessible infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3">
              <div className="mb-10 lg:mb-0">
                <h3 className="text-3xl font-bold mb-5 text-center lg:text-left">Business Philosophy</h3>
                <p className="text-lg mb-6">
                At TMT Plus, our business philosophy revolves around customer satisfaction, competitive pricing, and unwavering commitment to quality and safety. We believe in delivering exceptional products that meet industry standards while ensuring reliability and durability. Our dealers and suppliers are integral to our success, and we prioritize fostering strong, mutually beneficial relationships. By offering consistent value, support, and benefits, we ensure their growth alongside ours. With a focus on continuous improvement and customer-centric innovation, TMT Plus strives to be a trusted name in the industry, delivering excellence through premium-quality polymer solutions and outstanding service across India.
                </p>
                <div className="flex items-center space-x-4">
                  <FaHandshake className="text-3xl text-blue-600" />
                  <p className="font-medium">Trusted by 500+ dealers nationwide</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptimizedImage 
                src="/Images/Pvc.jpg" 
                alt="PVC junction box manufacturing facility" 
                className="h-full min-h-[250px]"
              />
              <OptimizedImage 
                src="/Images/Production.jpg" 
                
                alt="uPVC pipes production line" 
                className="h-130 min-h-[230px]"
              />
              <OptimizedImage 
                src="/Images/banner.jpeg" 
                alt="TMT Plus satisfied customers" 
                className="md:col-span-2 h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Markets We Serve"
            subtitle="With strong presence in Northern India, we're rapidly expanding our national footprint"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {['Punjab', 'Haryana', 'Himachal Pradesh', 'Uttar Pradesh', 
              'Rajasthan', 'Uttarakhand', 'Jammu & Kashmir', 'National Expansion'].map((state) => (
              <div key={state} className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold">{state}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyValues;