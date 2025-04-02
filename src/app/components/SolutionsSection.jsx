"use client";
import { useState, useEffect } from "react";
import { FaSeedling, FaHospital, FaBuilding } from "react-icons/fa";

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      icon: <FaSeedling className="text-green-500 text-5xl" />,
      title: "Agriculture",
      description:  (
        <>
           Fine Engineering Work offers <br />
          top-quality agricultural water pipes and fittings in North India, <br />
          ensuring a leak-proof and uninterrupted water supply for your farms.
        </>
      ),
    //   link: "https://www.tmtplus.co.in/projects/agriculture/",
    },
    {
      icon: <FaHospital className="text-blue-500 text-5xl" />,
      title: "Hospitality",
      description: (
        <>
           Fine Engineering Work provides <br />
          best-quality 7-layer water tanks in Punjab, <br />
          ideal for safe and reliable water storage in hospitals.
        </>
      ),
    //   link: "https://www.tmtplus.co.in/projects/hospitality/",
    },
    {
      icon: <FaBuilding className="text-orange-500 text-5xl" />,
      title: "Real Estate",
      description:  (
        <>
          Fine Engineering Work is a leading manufacturer of <br />
          best-quality uPVC electrical conduit pipes and fittings in North India, <br />
          widely used in residential and commercial spaces <br />
          for carrying electric wires.
        </>
      ),
    //   link: "https://www.tmtplus.co.in/projects/real-estate/",
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className=" text-blue-500 font-semibold text-6xl pb-5">Projects</h4>
          <h2 className="text-4xl font-bold">Solutions and Projects</h2>
          <p className="text-gray-600 mt-4">High-quality products for industrial, commercial, and corporate clients.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white p-10 shadow-lg rounded-lg text-center transition-transform duration-500 ease-in-out">
            <div className="flex justify-center mb-6">
              {projects[currentIndex].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{projects[currentIndex].title}</h3>
            <p className="text-gray-600 mb-6">{projects[currentIndex].description}</p>
            {/* <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
            >
              Read More
            </a> */}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
