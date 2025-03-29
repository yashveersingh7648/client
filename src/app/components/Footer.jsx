import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter, FaPinterest, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Address */}
          <div>
            <h5 className="text-xl font-semibold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Our Address
            </h5>
            <p className="mb-2">
              <a
                href="https://goo.gl/maps/2UNLhxa6ihBXrttcA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <strong>Factory:</strong> G T Road, Near New Vegetable Market, Ambala
              </a>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/e2E7K5cZBAp6aZLMA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <strong>Corp Off:</strong> 669, 1st Floor, Sector -82, JLPL, Mohali 140308
              </a>
            </p>
          </div>

          {/* Mailbox */}
          <div>
            <h5 className="text-xl font-semibold mb-4 flex items-center">
              <FaEnvelope className="mr-2" /> Our Mailbox
            </h5>
            <p>
              <a href="mailto:info@tmtplus.co.in" className="hover:text-blue-400 transition">
                info@tmtplus.co.in
              </a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <h5 className="text-xl font-semibold mb-4 flex items-center">
              <FaPhoneAlt className="mr-2" /> Our Phone
            </h5>
            <p>
              <a href="tel:+918607999555" className="hover:text-blue-400 transition">
                +91 8607999555
              </a>
              <span className="mx-2">|</span>
              <a href="tel:+919053912349" className="hover:text-blue-400 transition">
                +91 9053912349
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Navigation */}
        <div className="flex justify-center flex-wrap gap-6">
          {[
            { label: "Home", link: "https://www.tmtplus.co.in/", icon: <FaMapMarkerAlt /> },
            { label: "Quality Policy", link: "https://www.tmtplus.co.in/quality-policy/", icon: <FaEnvelope /> },
            { label: "Gallery", link: "https://www.tmtplus.co.in/gallery/", icon: <FaPhoneAlt /> },
            { label: "Become a Dealer", link: "https://www.tmtplus.co.in/become-a-dealer/", icon: <FaMapMarkerAlt /> },
            { label: "FAQ", link: "https://www.tmtplus.co.in/frequently-asked-questions/", icon: <FaEnvelope /> },
            { label: "Career", link: "https://www.tmtplus.co.in/career/", icon: <FaPhoneAlt /> },
            { label: "Our Clients", link: "https://www.tmtplus.co.in/our-clients/", icon: <FaMapMarkerAlt /> },
            { label: "Blog", link: "https://www.tmtplus.co.in/blog/", icon: <FaEnvelope /> },
            { label: "Contact Us", link: "https://www.tmtplus.co.in/contact-us/", icon: <FaPhoneAlt /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-2 text-sm hover:text-blue-400 transition"
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Social Media */}
        <div className="flex justify-center gap-4">
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
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>
            Copyright 2025 TMT PLUS. All Rights Reserved | 
            <a href="/privacy-policy/" className="text-blue-400 mx-1">Privacy Policy</a> | 
            <a href="/terms-and-conditions/" className="text-blue-400 mx-1">Terms & Conditions</a> | 
            <a href="/disclaimer/" className="text-blue-400 mx-1">Disclaimer</a> | 
            Developed & Maintained by 
            <a
              href="https://www.mantrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-1"
            >
              MANTRIN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
