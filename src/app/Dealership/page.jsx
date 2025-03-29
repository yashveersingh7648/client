import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, faStar, faLayerGroup, faBullhorn, 
  faChalkboardTeacher, faChartLine, faTags, faHandshake 
} from '@fortawesome/free-solid-svg-icons';

const DealerBenefits = () => {
  const benefits = [
    {
      icon: faShieldAlt,
      title: "Reputation precedes brand",
      description: "TMT Plus has a history dating back to the 1960’s, and over the past six decades, we have built a strong reputation for manufacturing high-quality products.",
    },
    {
      icon: faStar,
      title: "Quality Products",
      description: "TMT Plus has a credible body of experience in producing high-quality uPVC pipes and tanks.",
    },
    {
      icon: faLayerGroup,
      title: "Product Range",
      description: "TMT Plus offers a diverse range of uPVC pipes and tanks, allowing you to cater to a broad spectrum of customer needs.",
    },
    {
      icon: faBullhorn,
      title: "Marketing and Branding Support",
      description: "We provide marketing and branding support to our dealers, including promotional materials and advertising assistance.",
    },
    {
      icon: faChalkboardTeacher,
      title: "Training and Technical Support",
      description: "Dealerships receive training and technical support to help dealers better understand the products.",
    },
    {
      icon: faChartLine,
      title: "Growth Opportunities",
      description: "As a dealer for TMT Plus, you can tap into a growing industry and potentially expand your business.",
    },
    {
      icon: faTags,
      title: "Competitive Pricing",
      description: "TMT Plus offers competitive pricing and favorable terms to its dealers.",
    },
    {
      icon: faHandshake,
      title: "Potential for long-term partnership",
      description: "A successful dealership with TMT Plus can lead to a long-term and mutually beneficial partnership.",
    },
  ];

  return (
    <>    
   <section 
  className="custom_breadcrumb lazyload mt-10 w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://www.tmtplus.co.in/wp-content/uploads/2025/01/dealer-breadcrumb-1.jpg')" }}
>
  <div className="container mx-auto text-center py-20 ">
    <h1 className="text-4xl font-bold text-white pt-30">Get Ready 5X Growth in Your PVC Business</h1>
    <nav aria-label="breadcrumb" className="mt-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="https://www.tmtplus.co.in" className="text-white">Home</a>
        </li>
        <li className="breadcrumb-item text-white " aria-current="page">Get Ready 5X Growth in Your PVC Business</li>
      </ol>
    </nav>
  </div>
</section>

    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Benefits of Dealership with TMT Plus</h2>
        <p className="text-lg mb-10 text-gray-700">Partnering with TMT Plus offers numerous advantages. Discover the benefits below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-3 hover:shadow-xl"
            >
              <FontAwesomeIcon icon={benefit.icon} className="text-blue-500 text-5xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default DealerBenefits;
