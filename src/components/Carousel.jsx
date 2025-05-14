// // components/Carousel.js
// "use client"; // Client Component के लिए आवश्यक

// import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Carousel = () => {
//   // Bootstrap JavaScript को इनिशियलाइज़ करने के लिए
//   useEffect(() => {
//     typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min') : null;
//   }, []);

//   const carouselItems = [
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2025/01/banner.jpeg",
//       alt: "Top water tank manufacturers in India"
//     },
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2024/07/tmt-web-banner-mcb-boxes.jpg",
//       alt: "Top water tank manufacturers in India"
//     },
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2024/05/banner-new-one.jpg",
//       alt: "Top water tank manufacturers in India"
//     },
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2023/09/website-banner-min.jpg",
//       alt: "Top water tank manufacturers in India",
//       active: true
//     },
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2023/09/con-pipe-web-banner.jpg",
//       alt: "Top water tank manufacturers in India"
//     },
//     {
//       src: "https://www.tmtplus.co.in/wp-content/uploads/2023/09/pipe-campagin-ad-web-banner.jpg",
//       alt: "Top water tank manufacturers in India"
//     }
//   ];

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         {carouselItems.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={index === 3 ? "active" : ""}
//             aria-current={index === 3 ? "true" : "false"}
//           ></button>
//         ))}
//       </div>

//       {/* Carousel Items */}
//       <div className="carousel-inner">
//         {carouselItems.map((item, index) => (
//           <div key={index} className={`carousel-item ${item.active ? 'active' : ''}`}>
//             <img 
//               src={item.src} 
//               className="d-block w-100" 
//               alt={item.alt}
//               // Next.js Image component का उपयोग करने के लिए
//               // width={1200} 
//               // height={400}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;



// import { useState, useEffect } from 'react';


// const ImageCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // अपनी images को public folder में रखें
//   const slides = [
//     {
//       id: 1,
//       image: '/Images/Home.jpg', // public folder में image
//       alt: 'Premium Products',
//       title: 'High Quality Materials',
//       description: 'Experience durability and excellence'
//     },
//     {
//       id: 2,
//       image: '/Images/HomeBanner2.jpg',
//       alt: 'Innovative Designs',
//       title: 'Modern Solutions',
//       description: 'Cutting-edge technology for your needs'
//     },
//     {
//       id: 3,
//       image: '/Images/HomeBanner3.jpg',
//       alt: 'Special Offers',
//       title: 'Exclusive Deals',
//       description: 'Limited time offers available now'
//     }
//   ];

//   // Auto-rotate slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Manual navigation
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const goToNext = () => {
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrev = () => {
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="w-full relative h-[40vh] md:h-[60vh] overflow-hidden bg-gray-100 top-25 mb-20">
//       {/* Slides container */}
//       <div 
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="w-full flex-shrink-0 relative">
//             {/* Next.js Optimized Image */}
//             <Image
//               src={slide.image}
//               alt={slide.alt}
//               fill
//               sizes="80vw"
//               className="object-cover"
//               priority={slide.id === 1}
//             />
            
//             {/* Text overlay */}
//             <div className="relative inset-0 bg-black/30 flex items-center justify-center h-[60vh] md:h-[80vh] ">
//               <div className="text-center px-4 max-w-4xl mx-auto text-white">
//                 <h2 className="text-3xl md:text-5xl font-bold mb-2">
//                   {slide.title}
//                 </h2>
//                 <p className="text-lg md:text-xl mb-8">
//                   {slide.description}
//                 </p>
//                 {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-md md:text-lg font-semibold transition-colors">
//                   View Products
//                 </button> */}
//                 <Link 
//                 href="/Products" 
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-md md:text-lg font-semibold transition-colors">
//                 View Products
//               </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Navigation arrows */}
//       <button 
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
//         aria-label="Previous slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
      
//       <button 
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
//         aria-label="Next slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;





// ch
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/Images/Home.jpg',
      alt: 'Premium Products',
      title: 'High Quality Materials',
      description: 'Experience durability and excellence',
    },
    {
      id: 2,
      image: '/Images/HomeBanner2.jpg',
      alt: 'Innovative Designs',
      title: 'Modern Solutions',
      description: 'Cutting-edge technology for your needs',
    },
    {
      id: 3,
      image: '/Images/HomeBanner3.jpg',
      alt: 'Special Offers',
      title: 'Exclusive Deals',
      description: 'Limited time offers available now',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img
              src={slide.image}
              alt={slide.alt}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2 className="carousel-title">{slide.title}</h2>
                <p className="carousel-description">{slide.description}</p>
                <Link
                  to="/Products"
                  className="carousel-button"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="carousel-arrow prev"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="carousel-arrow next"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;