import React from 'react';
import { FaLightbulb, FaGlobeAmericas, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WhatsAppButton from "../components/WhatsAppButton";

// Reusable Card Component
const ValueCard = ({ icon, title, description, colorClass }) => (
  <div className={`value-card ${colorClass}`}>
    <div className="card-content">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <div className="card-description">{description}</div>
    </div>
  </div>
);
 
// Reusable Section Title Component
const SectionTitle = ({ title, subtitle, className = "" }) => (
  <div className={`section-title ${className}`}>
    <h2 className="title-text">{title}
              <span className="decorative-line1"></span>

    </h2>
    {subtitle && <p className="subtitle-text">{subtitle}</p>}
  </div>
);

// Reusable Image Component
const OptimizedImage = ({ src, alt, className = "" }) => (
  <div className={`optimized-image ${className}`}>
    <img
      src={src}
      alt={alt}
      className="image-content"
      loading="lazy"
    />
  </div>
);

const CompanyValues = () => {
  return (
    <>
      <WhatsAppButton />
    
      <div className="breadcrumb-section1" style={{ backgroundImage: "url('/Images/abouts.jpg')" }}>
</div>


      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="images-grid">
              <div className="image-container">
                <img
                  src="/Images/Tmt1.jpg"
                  alt="TMT Plus manufacturing facility"
                  className="about-image"
                />
              </div>
              <div className="image-container mt-offset">
                <img
                  src="/Images/Tmt2.jpeg"
                  alt="TMT Plus quality products"
                  className="about-image"
                />
              </div>
            </div>
            
            <div className="about-text">
              <span className="about-heading">About </span>
              <h2 className="company-name">
                Fine Engineering Work India Pvt Ltd.
              <span className="decorative-line"></span>

              </h2>
              <p className="company-description">
                Fine Engineering Work is a trusted distributor of high-quality polymer products under the renowned brand TMT Plus. Based in Aligarh, we are committed to delivering durable and efficient solutions to our customers. Since our establishment, we have focused on providing top-notch products at competitive prices, ensuring customer satisfaction through reliability and excellence.
                With a strong reputation built over the years, Fine Engineering Work takes pride in offering innovative solutions that meet industry standards. Our dedication to quality, efficiency, and customer trust has made us a preferred choice in the market. As we continue to grow, we remain committed to excellence and innovation in every product we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="cards-grid">
            <ValueCard
              icon={<FaLightbulb className="vision-icon" />}
              title="Our Vision"
              description={
                <div className="vision-points">
                  <p>"To deliver high-quality, affordable, and easy-to-install products, enhancing everyday convenience and safety for society."</p>
                  <p>"To lead in Electrical & Sanitary Piping solutions by offering superior quality, innovation, and exceptional service."</p>
                  <p>"To foster growth for all stakeholders – Customers, Partners, Shareholders, Employees, and Society through trust and excellence."</p>
                </div>
              }
            />

            <ValueCard
              icon={<FaGlobeAmericas className="mission-icon" />}
              title="Our Mission"
              description="We strive to achieve ₹600 crores in revenue by 2027, expanding our presence to 300+ districts across India, delivering innovative, high-quality polymer solutions with reliability, durability, and nationwide impact."
              colorClass="white-card"
            />
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="future-plans-section">
        <div className="container">
          <SectionTitle
            title="Future Plans"
            subtitle="TMT Plus envisions a future where affordable, best-in-class polymer products are accessible to all through continuous innovation and process advancement."
          />
          
          <div className="plans-grid">
            <div className="plan-item">
              <FaChartLine className="plan-icon market-icon" />
              <h3 className="plan-title">Market Expansion

              </h3>
              <p className="plan-description">300+ districts coverage by 2027 with enhanced distribution networks</p>
            </div>
            <div className="plan-item">
              <FaLightbulb className="plan-icon innovation-icon" />
              <h3 className="plan-title">Product Innovation</h3>
              <p className="plan-description">15+ new product lines in development for emerging market needs</p>
            </div>
            <div className="plan-item">
              <FaUsers className="plan-icon community-icon" />
              <h3 className="plan-title">Community Impact</h3>
              <p className="plan-description">Transform 1M+ lives through accessible infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h3 className="philosophy-title">Business Philosophy
              <span className="decorative-line2"></span>

              </h3>
              <p className="philosophy-description">
                At TMT Plus, our business philosophy revolves around customer satisfaction, competitive pricing, and unwavering commitment to quality and safety. We believe in delivering exceptional products that meet industry standards while ensuring reliability and durability. Our dealers and suppliers are integral to our success, and we prioritize fostering strong, mutually beneficial relationships. By offering consistent value, support, and benefits, we ensure their growth alongside ours. With a focus on continuous improvement and customer-centric innovation, TMT Plus strives to be a trusted name in the industry, delivering excellence through premium-quality polymer solutions and outstanding service across India.
              </p>
              <div className="trusted-by">
                <FaHandshake className="handshake-icon" />
                <p className="trusted-text">Trusted by 500+ dealers nationwide</p>
              </div>
            </div>

            <div className="philosophy-images">
              <OptimizedImage 
                src="/Images/Pvc.jpg" 
                alt="PVC junction box manufacturing facility" 
                className="philosophy-image tall-image"
              />
              <OptimizedImage 
                src="/Images/Production.jpg" 
                alt="uPVC pipes production line" 
                className="philosophy-image"
              />
              <OptimizedImage 
                src="/Images/banner.jpeg" 
                alt="TMT Plus satisfied customers" 
                className="philosophy-image wide-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served Section */}
      <section className="markets-section">
        <div className="container">
          <SectionTitle
            title="Markets We Serve"
            subtitle="With strong presence in Northern India, we're rapidly expanding our national footprint"
          />
          
          <div className="markets-grid">
            {['Punjab', 'Haryana', 'Himachal Pradesh', 'Uttar Pradesh', 
              'Rajasthan', 'Uttarakhand', 'Jammu & Kashmir', 'National Expansion'].map((state) => (
              <div key={state} className="market-item">
                <h3 className="market-name">{state}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyValues;