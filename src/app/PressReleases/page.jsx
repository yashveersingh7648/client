"use client";
import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const pressReleases = [
  {
    title: "TMT Plus at ARCHEX: An Architecture Exhibition",
    date: "November 24, 2023",
    description: "TMT PLUS, a top uPVC manufacturer, is showcasing its latest innovations at ARCHEX – a premier event for Architecture, Interiors, and Construction Materials. Explore cutting-edge designs and sustainable building solutions. Join us to witness the future of construction excellence.",
    link: "https://www.tmtplus.co.in/press_release/tmt-plus-invites-you-to-archex-an-ultimate-exhibition-on-architecture/",
    image: "/Images/pipe.jpg", // New architecture image
  },
  {
    title: "TMT PLUS at INT-EXT Expo Ludhiana 2024",
    date: "January 20, 2024",
    description: "TMT PLUS, India’s leading polymer manufacturer, is excited to participate in INT-EXT Expo Ludhiana 2024. Discover premium Interiors, Exteriors, and Construction materials designed for modern architecture. Experience innovation in building solutions with our latest product range.",
    link: "https://www.tmtplus.co.in/press_release/exciting-news-tmt-plus-announces-participation-in-int-ext-expo-ludhiana-2024/",
    image: "/Images/Expo.jpg", // New expo image
  },
  {
    title: "TMT Plus Partners with Minds Media for Expo",
    date: "February 16, 2024",
    description: "TMT Plus collaborates with Minds Media for a grand Architectural Expo in Chandigarh. Explore advanced Construction Materials, Interiors, and Home Furnishing solutions. Experience the latest trends in building and décor at this premier event, redefining modern architecture.",
    link: "https://www.tmtplus.co.in/press_release/tmt-plus-partners-with-minds-media-to-bring-architectural-expo-in-chandigarh/",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac11d59d", // New partnership image
  },
  {
    title: "TMT Plus Launches cPVC Pipes for Plumbing",
    date: "May 6, 2024",
    description: "TMT Plus introduces high-performance cPVC pipes, offering superior plumbing solutions with enhanced durability, corrosion resistance, and reliability. Ideal for residential and commercial applications, these pipes ensure efficient water flow and long-lasting performance. Upgrade your plumbing systems with TMT Plus’ innovative cPVC range.",
    link: "https://www.tmtplus.co.in/press_release/tmt-plus-announces-launch-of-cpvc-pipes-for-better-plumbing-solutions/",
    image: "https://images.unsplash.com/photo-1581091226825-f60e04b60245", // New plumbing image
  },
];

const PressReleases = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <section
        className="custom_breadcrumb lazyload mt-10 w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.tmtplus.co.in/wp-content/uploads/2025/01/press-breadcrumb-1.jpg')" }}
      >
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-white pt-30">Press Release</h1>
          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://www.tmtplus.co.in" className="text-white">Home</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">Press Release</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Press Release Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">

          {/* Header Section */}
         

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <a href={release.link} target="_blank" rel="noopener noreferrer">
                  <img src={release.image} alt={release.title} className="w-full h-60 object-cover" />
                </a>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition">
                    <a href={release.link} className="hover:underline">{release.title}</a>
                  </h2>
                  <div className="flex items-center text-gray-500 mt-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{release.date}</span>
                  </div>
                  <p className="text-gray-600 mt-4">{release.description}</p>
                  <div className="mt-6">
                    <a
                      href={release.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                      Read More <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default PressReleases;
