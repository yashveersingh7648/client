// // components/AboutSection.tsx


// const AboutSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//               {/* Content */}
//           <div className="w-full lg:w-1/2">
//             <div className="max-w-lg mx-auto lg:mx-0">
//               <span className="text-blue-600 font-semibold text-6xl">About </span>
//               <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
//               Fine Engineering Work India Pvt Ltd.
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//               Fine Engineering Work is a trusted distributor of high-quality polymer products under the renowned brand TMT Plus. Based in Aligarh, we are committed to delivering durable and efficient solutions to our customers. Since our establishment, we have focused on providing top-notch products at competitive prices, ensuring customer satisfaction through reliability and excellence.
// With a strong reputation built over the years, Fine Engineering Work takes pride in offering innovative solutions that meet industry standards. Our dedication to quality, efficiency, and customer trust has made us a preferred choice in the market. As we continue to grow, we remain committed to excellence and innovation in every product we deliver.

//               </p>
//               <Link 
//                 href="/AboutTMTPlus" 
//                 className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//           {/* Images Grid */}
//           <div className="w-full lg:w-1/2">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
//                 <Image
//                   src="/Images/Tmt1.jpg"
//                   alt="TMT Plus manufacturing facility"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//               <div className="relative h-96 rounded-xl overflow-hidden shadow-lg mt-8">
//                 <Image
//                   src="/Images/Tmt2.jpeg"
//                   alt="TMT Plus quality products"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </div>
//           </div>

        
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




// components/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Tmt1 from '/Images/Tmt1.jpg';
import Tmt2 from '/Images/Tmt2.jpeg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Content */}
          <div className="about-text">
            <span className="about-heading">About </span>
            <h2 className="company-name">
              Fine Engineering Work India Pvt Ltd.
              <span className="decorative-line"></span>

            </h2>
            <p className="company-description">
              Fine Engineering Work is a trusted distributor of high-quality polymer products under the renowned brand TMT Plus. Based in Aligarh, we are committed to delivering durable and efficient solutions to our customers. Since our establishment, we have focused on providing top-notch products at competitive prices, ensuring customer satisfaction through reliability and excellence. <br /><br />
              With a strong reputation built over the years, Fine Engineering Work takes pride in offering innovative solutions that meet industry standards. Our dedication to quality, efficiency, and customer trust has made us a preferred choice in the market. As we continue to grow, we remain committed to excellence and innovation in every product we deliver.
            </p>
            <Link
              to="/AboutUs"
              className="learn-more-button"
            >
              Learn More
            </Link>
          </div>

          {/* Images Grid */}
          <div className="images-grid">
            <div className="image-container">
              <img
                src={Tmt1}
                alt="TMT Plus manufacturing facility"
                className="about-image"
              />
            </div>
            <div className="image-container">
              <img
                src={Tmt2}
                alt="TMT Plus quality products"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// chat