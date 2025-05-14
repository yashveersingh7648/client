import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const handleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = {
    about: {
      label: "About",
      items: [
        "About TMT Plus",
        "Our Management",
        "Our History",
        "Certification",
        "Quality Policy",
        "Our Clients",
      ],
    },
    products: {
      label: "Products",
      categories: [
        {
          title: "Conduit Pipes",
          image: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a",
        },
        {
          title: "Water Tanks",
          image: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
        },
        {
          title: "Metal Boxes & Accessories",
          image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801",
        },
        {
          title: "uPVC Pipes and Fittings",
          image: "https://images.unsplash.com/photo-1542013936693-884638332954",
        },
      ],
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopNav = () => (
  
    <nav className="hidden md:flex items-center space-x-8">
      <div className="relative group">
        <button
          className="flex items-center space-x-1 hover:text-blue-600"
          onClick={() => handleDropdown("about")}
          aria-expanded={dropdowns.about}
        >
          <span>About</span>
          <FaChevronDown className="w-4 h-4" />
        </button>
        <div
          className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 ${
            dropdowns.about ? "block" : "hidden"
          }`}
        >
          {menuItems.about.items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="relative group">
        <button
          className="flex items-center space-x-1 hover:text-blue-600"
          onClick={() => handleDropdown("products")}
          aria-expanded={dropdowns.products}
        >
          <span>Products</span>
          <FaChevronDown className="w-4 h-4" />
        </button>
        <div
          className={`absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-md p-4 ${
            dropdowns.products ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-2 gap-4">
            {menuItems.products.categories.map((category, index) => (
              <div key={index} className="group/item">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover transform group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#" className="hover:text-blue-600">
        Gallery
      </a>
      <a href="/Dealership" className="hover:text-blue-600">
        Become A Dealer
      </a>
      <a href="/ContactUs" className="hover:text-blue-600">
        Contact Us
      </a>
      <a href="/PressReleases" className="hover:text-blue-600">
        Press Release
      </a>
    </nav>
  );

  const MobileNav = () => (
    <div
      className={`fixed inset-0 bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <button
            onClick={() => handleDropdown("mobileAbout")}
            className="flex items-center justify-between w-full py-2"
          >
            <span>About</span>
            <FaChevronRight
              className={`w-4 h-4 transform transition-transform ${
                dropdowns.mobileAbout ? "rotate-90" : ""
              }`}
            />
          </button>
          <div
            className={`pl-4 space-y-2 ${dropdowns.mobileAbout ? "block" : "hidden"}`}
          >
            {menuItems.about.items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => handleDropdown("mobileProducts")}
            className="flex items-center justify-between w-full py-2"
          >
            <span>Products</span>
            <FaChevronRight
              className={`w-4 h-4 transform transition-transform ${
                dropdowns.mobileProducts ? "rotate-90" : ""
              }`}
            />
          </button>
          <div
            className={`pl-4 space-y-4 ${
              dropdowns.mobileProducts ? "block" : "hidden"
            }`}
          >
            {menuItems.products.categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>

        <a href="#" className="block py-2 hover:text-blue-600">
          Gallery
        </a>
        <a href="/Dealership" className="block py-2 hover:text-blue-600">
          Become A Dealer
        </a>
        <a href="/ContactUs" className="block py-2 hover:text-blue-600">
          Contact Us
        </a>
        <a href="/PressReleases" className="block py-2 hover:text-blue-600">
          Press Release
        </a>
      </div>
    </div>
  );

  return (
    <>   
    
     <header className="bg-white shadow-md fixed w-full top-16 z-50 mb-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/Images/logo.png"
                alt="TMT Plus Logo"
                className="h-20 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Images/logo.png";
                }}
              />
            </a>
          </div>

          <DesktopNav />

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Open menu"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileNav />
    </header>
    </>

  );
};

export default Header;
