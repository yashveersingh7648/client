



// import  { useState, useEffect } from "react";
// import { FaEnvelope, FaPhone, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   // Dark mode state
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   // Mobile menu state
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   // Dropdown states
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Initialize dark mode
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "enabled") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     document.documentElement.classList.toggle("dark", newMode);
//     localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
//   };

//   // Handle dropdown toggle
//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   // Close all dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
//         setIsMobileMenuOpen(false);
//       }
//       if (!event.target.closest('.dropdown-container')) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobileMenuOpen]);

//   // Menu items data with proper links
//   const menuItems = {
//     about: {
//       label: "About",
//       items: [
//         { name: "About TMT Plus", link: "/AboutUs" },
//         { name: "Our History", link: "/history" },
//         { name: "Quality Policy", link: "/QualityPolicy" },
//       ],
//     },
//     products: {
//       label: "Products",
//       items: [
//       { name: "Conduit Pipes", link: "/Products#id1" },
//         { name: "Water Tanks", link: "/Products#id6" },
//         { name: "Casing & Capping", link: "/Products#id8" },
//         { name: "Corrugated Pipes", link: "/Products#id12" },
//         { name: "Metal Boxes & Accessories", link: "/Products#id9" },
//       ],
//     },
//   };

//   return (
//     <div className="navbar-container">
//       {/* Top Bar Section - Hidden on mobile */}
//       <div className={`top-bar ${isDarkMode ? "dark" : ""}`}>
//         <div className={`top-bar-inner ${isDarkMode ? "dark" : ""}`}>
//           {/* <div className="container"> */}
//             <div className="top-bar-content">
//               {/* Contact Info */}
//               <div className="contact-info">
//                 <a href="mailto:contact@tmtplus.com" className="contact-link">
//                   <FaEnvelope />
//                   <span>info@finetmtplus.com</span>
//                 </a>
//                 <a href="tel:+918447490707" className="contact-link">
//                   <FaPhone />
//                   <span>+91 8447490707</span>
//                 </a>
//               </div>

//               {/* Social Links and CTA */}
//               <div className="social-cta">
//                 <div className="social-links">
//                   <a href="https://facebook.com/tmtplus" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
//                     <FaFacebook />
//                   </a>
//                   <a href="https://youtube.com/tmtplus" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
//                     <FaYoutube />
//                   </a>
//                   <a href="https://linkedin.com/company/tmtplus" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
//                     <FaLinkedin />
//                   </a>
//                   <a href="https://instagram.com/tmtplus" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
//                     <FaInstagram />
//                   </a>
//                 </div>
//                 <button
//                   onClick={toggleDarkMode}
//                   className="dark-mode-toggle"
//                   aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//                 >
//                   {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
//                 </button>
//                 <Link to="/ContactUs" className="quote-button">
//                   Get a Quote
//                 </Link>
//               </div>
//             </div>
//           </div>
//         {/* </div> */}
//       </div>

//       {/* Main Header Section */}
//       <header className={`main-header ${isDarkMode ? "dark" : ""}`}>
//         <div className="container">
//           <div className="header-content">
//             {/* Logo */}
//             <Link to="/" className="logo">
//               <img
//                 src="/Images/logo.png"
//                 alt="TMT Plus Logo"
//                 className="logo-image"
//               />
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="desktop-nav">
//               <Link to="/" className="nav-link">Home</Link>

//               {/* About Dropdown */}
//               <div className="dropdown-container">
//                 <button
//                   onClick={() => toggleDropdown("about")}
//                   className="dropdown-button"
//                   aria-expanded={activeDropdown === "about"}
//                 >
//                   <span>About</span>
//                   <FaChevronDown className={`dropdown-icon ${activeDropdown === "about" ? "open" : ""}`} />
//                 </button>
//                 <div
//                   className={`dropdown-menu ${activeDropdown === "about" ? "open" : ""} ${isDarkMode ? "dark" : ""}`}
//                 >
//                   {menuItems.about.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.link}
//                       className="dropdown-item"
//                       onClick={() => setActiveDropdown(null)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Products Dropdown */}
//               <div className="dropdown-container">
//                 <button
//                   onClick={() => toggleDropdown("products")}
//                   className="dropdown-button"
//                   aria-expanded={activeDropdown === "products"}
//                 >
//                   <span>Products</span>
//                   <FaChevronDown className={`dropdown-icon ${activeDropdown === "products" ? "open" : ""}`} />
//                 </button>
//                 <div
//                   className={`dropdown-menu ${activeDropdown === "products" ? "open" : ""} ${isDarkMode ? "dark" : ""}`}
//                 >
//                   {menuItems.products.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.link}
//                       className="dropdown-item"
//                       onClick={() => setActiveDropdown(null)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Other Links */}
//               <Link to="/Dealership" className="nav-link">Become A Dealer</Link>
//               <Link to="/ContactUs" className="nav-link">Contact Us</Link>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="mobile-menu-button"
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu mobile-menu-container">
//           <div className="mobile-menu-content">
//             {/* Mobile About Dropdown */}
//             <div className="mobile-dropdown-section">
//               <button
//                 onClick={() => toggleDropdown("mobileAbout")}
//                 className="mobile-dropdown-button"
//                 aria-expanded={activeDropdown === "mobileAbout"}
//               >
//                 <span>About</span>
//                 <FaChevronRight className={`mobile-dropdown-icon ${activeDropdown === "mobileAbout" ? "open" : ""}`} />
//               </button>
//               {activeDropdown === "mobileAbout" && (
//                 <div className="mobile-dropdown-items">
//                   {menuItems.about.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.link}
//                       className="mobile-dropdown-item"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setActiveDropdown(null);
//                       }}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Products Dropdown */}
//             <div className="mobile-dropdown-section">
//               <button
//                 onClick={() => toggleDropdown("mobileProducts")}
//                 className="mobile-dropdown-button"
//                 aria-expanded={activeDropdown === "mobileProducts"}
//               >
//                 <span>Products</span>
//                 <FaChevronRight className={`mobile-dropdown-icon ${activeDropdown === "mobileProducts" ? "open" : ""}`} />
//               </button>
//               {activeDropdown === "mobileProducts" && (
//                 <div className="mobile-dropdown-items">
//                   {menuItems.products.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.link}
//                       className="mobile-dropdown-item"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setActiveDropdown(null);
//                       }}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Other Mobile Links */}
//             <Link to="/Dealership" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
//               Become A Dealer
//             </Link>
//             <Link to="/ContactUs" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
//               Contact Us
//             </Link>
            
//             {/* Mobile Contact Info */}
//             <div className="mobile-contact-info">
//               <a href="mailto:contact@tmtplus.com" className="mobile-contact-link">
//                 <FaEnvelope />
//                 <span>info@finetmtplus.com</span>
//               </a>
//               <a href="tel:+918447490707" className="mobile-contact-link">
//                 <FaPhone />
//                 <span>+91 8447490707</span>
//               </a>
//             </div>

//             {/* Mobile Social Links */}
//             <div className="mobile-social-links">
//               <a href="https://facebook.com/tmtplus" target="_blank" rel="noopener noreferrer" className="mobile-social-icon facebook">
//                 <FaFacebook />
//               </a>
//               <a href="https://youtube.com/tmtplus" target="_blank" rel="noopener noreferrer" className="mobile-social-icon youtube">
//                 <FaYoutube />
//               </a>
//               <a href="https://linkedin.com/company/tmtplus" target="_blank" rel="noopener noreferrer" className="mobile-social-icon linkedin">
//                 <FaLinkedin />
//               </a>
//               <a href="https://instagram.com/tmtplus" target="_blank" rel="noopener noreferrer" className="mobile-social-icon instagram">
//                 <FaInstagram />
//               </a>
//             </div>

//             {/* Mobile Dark Mode Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="mobile-dark-mode-toggle"
//               aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//             >
//               {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
//               <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
//             </button>

//             {/* Mobile Get Quote Button */}
//             <Link 
//               to="/contact-us" 
//               className="mobile-quote-button"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Get a Quote
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaAngleDown, FaHandshake, FaBoxOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '/Images/logo.png'; // Replace with your logo path

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const [industriesDropdown, setIndustriesDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/"><img src={logo} alt="Logo" /></Link>

        <nav className="desktop-nav">
          <Link to="/"><FaHome /> Home</Link>
          {/* <Link to="/about"><FaInfoCircle /> About</Link> */}
  <div className="dropdown-container"
               onMouseEnter={() => setAboutDropdown(true)}
               onMouseLeave={() => setAboutDropdown(false)}>
            <button><FaInfoCircle /> About <FaAngleDown /></button>
            {aboutDropdown && (
              <div className="dropdown-menu">
                <Link to="/AboutUs">About TMT Plus</Link>
                <Link to="/history">Our History</Link>
                <Link to="/QualityPolicy">Quality Policy</Link>
              </div>
            )}
          </div>
            
          <div className="dropdown-container"
               onMouseEnter={() => setServicesDropdown(true)}
               onMouseLeave={() => setServicesDropdown(false)}>
            <button><FaBoxOpen /> Products <FaAngleDown /></button>
            {servicesDropdown && (
              <div className="dropdown-menu">
                <Link to="/Products#id1">Conduit Pipes</Link>
                <Link to="/Products#id6">Water Tanks</Link>
                <Link to="/Products#id8">Casing & Capping</Link>
                 <Link to="/Products#id12">Corrugated Pipes</Link>
                <Link to="/Products#id9">Metal Boxes & Accessories</Link>
              </div>
            )}
          </div>
 
          <Link to="/Dealership"><FaHandshake /> Become A Dealer</Link>

          <Link to="/ContactUs"><FaEnvelope /> Contact Us</Link>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMobileMenu}><FaHome /> Home</Link>

          <div className="mobile-dropdown">
            <button onClick={() => setAboutDropdown(!aboutDropdown)}>
              <FaInfoCircle /> About <FaAngleDown />
            </button>
            {aboutDropdown && (
              <div>
                <Link to="/AboutUs" onClick={toggleMobileMenu}>About TMT Plus</Link>
                <Link to="/history" onClick={toggleMobileMenu}>Our History</Link>
                <Link to="/QualityPolicy" onClick={toggleMobileMenu}>Quality Policy</Link>
              </div>
            )}
          </div>

  
          <div className="mobile-dropdown">
            <button onClick={() => setIndustriesDropdown(!industriesDropdown)}>
             <FaBoxOpen /> Products <FaAngleDown />
            </button>
            {industriesDropdown && (
              <div>
                <Link to="/Products#id1" onClick={toggleMobileMenu}>Conduit Pipes</Link>
                <Link to="/Products#id6" onClick={toggleMobileMenu}>Water Tanks</Link>
                <Link to="/Products#id8" onClick={toggleMobileMenu}>Casing & Capping</Link>
                 <Link to="/Products#id12" onClick={toggleMobileMenu}>Corrugated Pipes</Link>
                <Link to="/Products#id9" onClick={toggleMobileMenu}>Metal Boxes & Accessories</Link>
              </div>
            )}
          </div>
          <Link to="/Dealership" onClick={toggleMobileMenu}><FaHandshake /> Become A Dealer</Link>
          <Link to="/ContactUs" onClick={toggleMobileMenu}><FaEnvelope /> Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
