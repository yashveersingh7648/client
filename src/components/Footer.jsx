import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaPinterest, 
  FaReddit 
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Address */}
          <div className="footer-section">
            <h5 className="footer-section-title">
              <FaMapMarkerAlt className="footer-icon" /> Our Address
            </h5>
            <p className="footer-text">
              <a
                href="https://goo.gl/maps/2UNLhxa6ihBXrttcA"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <strong>Address:</strong> RUSTAMPUR SAKET KHA SHREE DHAM; COLONY Aligarh
              </a>
            </p>
          </div>

          {/* Mailbox */}
          <div className="footer-section">
            <h5 className="footer-section-title">
              <FaEnvelope className="footer-icon" /> Our Mailbox
            </h5>
            <p className="footer-text">
              <a href="mailto:info@finetmtplus.com" className="footer-link">
                info@finetmtplus.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="footer-section">
            <h5 className="footer-section-title">
              <FaPhoneAlt className="footer-icon" /> Our Phone
            </h5>
            <p className="footer-text">
              <a href="tel:+918447490707" className="footer-link">
                +91 8447490707
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Navigation */}
        <div className="footer-nav">
          {[
            { label: "Home", link: "/", icon: <FaMapMarkerAlt /> },
            { label: "Quality Policy", link: "/QualityPolicy", icon: <FaEnvelope /> },
            { label: "Become a Dealer", link: "/Dealership", icon: <FaMapMarkerAlt /> },
            { label: "FAQ", link: "/FAQItem", icon: <FaEnvelope /> },
            { label: "Contact Us", link: "/ContactUs", icon: <FaPhoneAlt /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="footer-nav-link"
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Social Media */}
        <div className="footer-social">
          {[
            { icon: <FaFacebookF />, link: "https://www.facebook.com/tmtplusindia" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCOhXK1QRKPJEBKnAXfTz0XQ" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/tmt-polymers-india-private-limited/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/tmt_plus/" },
            { icon: <FaTwitter />, link: "https://twitter.com/tmt_plus" },
            { icon: <FaPinterest />, link: "https://in.pinterest.com/tmtplus/" },
            { icon: <FaReddit />, link: "https://www.reddit.com/user/tmtplus/" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;