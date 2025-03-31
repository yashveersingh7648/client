// "use client"
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const ConduitPipesPage = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   const nextImage = () => {
//     setActiveImage((prev) => (prev + 1) % images.length);
//   };
//   const prevImage = () => {
//     setActiveImage((prev) => (prev - 1 + images.length) % images.length);
//   };
  
//   const images = [
//     "/Images/ConduitPipes1.png",
//     "/Images/ConduitPipes2.png",
//     "/Images/ConduitPipes3.png",
//     "/Images/ConduitPipes4.png",
//   ];
  

  
//   const products = [
//     {
//       title: 'uPVC Conduit FRLS',
//       description: 'Optimum Heat Insulation | Best Safety Standards | Smooth Finish',
//       image: '/wp-content/uploads/2022/06/conduit-pipes-1.png',
//       link: '/upvc-conduit-frls/'
//     },
//     {
//       title: 'FR Conduit Pipes',
//       description: 'Optimum Heat Insulation | Smooth Finish | Best Safety Standards',
//       image: '/wp-content/uploads/2022/06/conduit-pipes-2.png',
//       link: '/fr-conduit-pipes/'
//     },
//     {
//       title: 'Bends and Fittings',
//       description: 'Weather Proof | Sturdy Design Shock Resistant',
//       image: '/wp-content/uploads/2022/06/conduit-pipes-3.png',
//       link: '/bends-and-fittings/'
//     },
//     {
//       title: 'Pvc Junction Box',
//       description: 'Excellent Insulation | Smooth Finish Durable & Easy to Install',
//       image: '/wp-content/uploads/2022/06/conduit-pipes-4.png',
//       link: '/pvc-junction-box/'
//     }
//   ];

//   const featuresLeft = [
//     {
//       title: 'Corrosion-resistant',
//       content: 'uPVC conduit pipes do not react with water and air as compared to metal, making them immune to corrosion and ensuring long-lasting performance.'
//     },
//     {
//       title: 'Rigid and Flexible Options',
//       content: 'Rigid pipes are sturdy and durable, known for their resistance to blows. Flexible variants provide adaptability for future changes.'
//     },
//     {
//       title: 'Shock-proof protection',
//       content: 'Conduits prevent contact between electrical wires and flammable material, providing a safe path for current to flow.'
//     },
//     {
//       title: 'Fire Resistance',
//       content: 'The presence of chlorine acts as a natural flame retardant, giving it the property to act as a barrier to catching fire.'
//     },
//     {
//       title: 'High Impact Strength',
//       content: 'Exhibits resistance to chemical presence, working under a wide range of pressure, significantly improving its sturdiness.'
//     }
//   ];

//   const featuresRight = [
//     {
//       title: 'Excellent Elasticity & Flexibility',
//       content: 'Provides materials that can expand, bend, and be modified across rooms, helping in future modifications.'
//     },
//     {
//       title: 'Versatility',
//       content: 'Wide range of applications from electrical wiring to telecommunications with minimal energy loss.'
//     },
//     {
//       title: 'Smooth Interior',
//       content: 'Minimises friction, allowing for easy wire installation and maintenance with enhanced durability.'
//     },
//     {
//       title: 'Environmental Considerations',
//       content: 'Lower carbon footprint than counterparts and can be recycled multiple times without losing features.'
//     },
//     {
//       title: 'Lightweight',
//       content: 'Easy to hold, carry, and transport in bulk, enabling hassle-free installation and reinstallation.'
//     }
//   ];

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
//       <Head>
//         <title>Conduit Pipes | TMT Plus</title>
//         <meta name="description" content="High-quality uPVC Conduit Pipes for safe and durable electrical wiring solutions" />
//       </Head>

//       {/* Breadcrumb Section */}
//       <section 
//         className="relative py-20 bg-cover bg-center h-120 mt-5"
//         style={{ backgroundImage: `url(https://www.tmtplus.co.in/wp-content/uploads/2025/02/breadcrumb-product3.jpg)` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <nav aria-label="breadcrumb" className="text-center pt-30">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">  Explore Our Comprehensive Product Range</h1>
//             <ol className="flex justify-center space-x-2">
//               <li className="flex items-center">
//                 <Link href="/" className="text-blue-300 hover:text-white transition">Home</Link>
//                 <span className="mx-2 text-white">/</span>
//               </li>
//               <li className="text-white" aria-current="page">Products</li>
//             </ol>
//           </nav>
//         </div>
//       </section>

//       {/* Product Overview Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-8">
//             <div className="lg:w-1/2">
//               <div className="prose dark:prose-invert max-w-none">
//                 <p>
//                 <b>TMT Plus uPVC Conduit Pipes </b>are designed for efficient cable routing, offering protection against shocks, mechanical stress, and abrasions. Made from premium PVC resin, they ensure enhanced safety and long-term durability. Available in 20 mm to 50 mm sizes, they cater to residential, industrial, and commercial electrical systems.<br/>

// <b>TMT Plus cPVC Pipes & Fittings </b>are perfect for hot and cold water plumbing, offering excellent temperature resistance and leak-proof performance. These pipes are durable, making them ideal for homes and industrial applications.<br/>

// <b>MCB Boxes </b>ensure safe electrical distribution, preventing overloads and short circuits. Their robust build makes them reliable for both residential and industrial setups.<br/>

// <b>Water Tanks </b>by TMT Plus feature multi-layer UV protection, ensuring safe and long-lasting water storage. They withstand extreme weather, making them ideal for residential and commercial use.<br/>

// <b>Metal Boxes & Accessories </b>offer secure electrical junctions with weather resistance, perfect for outdoor and indoor installations.<br/>

// <b>Corrugated Pipes </b>provide flexible and durable protection for cables in underground and surface wiring.<br/>

// <b>uPVC Casing & Capping Pipes </b>protect wires from dust and damage, offering long-lasting reliability in residential and commercial applications.<br/>

// TMT Plus products deliver safety, durability, and performance, making them the trusted choice for modern infrastructure. </p>
//               </div>
//             </div>
            
//          {/* Swiper with RTL (Right-to-Left) sliding */}
//          <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={1}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000 }}
//           navigation
//           pagination={{ clickable: true }}
//           dir="rtl"  // 👈 RTL sliding effect
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 1 },
//             1024: { slidesPerView: 1 }
//           }}
//           className="pb-1"
//         >
//           {products.map((product, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-300 ${product.bgColor}`}
//               >
//                 <div className="relative h-64 bg-white">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 300px) 100vw, 20vw"
//                   />
//                 </div>
//                 <div className="p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-3">
//                     <Link href={product.link} className="hover:text-gray-200 transition-colors">
//                       {product.title}
//                     </Link>
//                   </h3>
//                   <p className="mb-4">{product.description}</p>
//                   <Link 
//                     href="/Products"
//                     className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
//                   >
//                     Learn More
//                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//           </div>
//         </div>
//       </section>

//       {/* Purpose and Customization Section */}
//       {/* <section className="py-16 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Purpose and Importance of Conduit Pipes</h2>
//               <div className="prose dark:prose-invert max-w-none">
//                 <p>Conduits are installed in indoor or outdoor settings and are used to protect homes and official buildings from electrical fires. They also keep the aesthetics, even as some say enhance it, of the buildings intact.</p>
//                 <p>
//                   Conduits are also used to route electrical wiring in residential and commercial buildings. TMT Plus{' '}
//                   <Link href="/top-10-factors-to-consider-when-buying-upvc-conduit-pipes/" className="text-blue-600 dark:text-blue-400 hover:underline">
//                     uPVC Conduit Pipes
//                   </Link> are good conductors of electricity and don't allow the current to flow through the pipe, but carry the current safely across the building.
//                 </p>
//                 <p>Conduit pipes help in expanding the use of electrical wiring and also when there's a need to rewire the supply in the building.</p>
//               </div>
//             </div>
            
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Customisation Options</h2>
//               <div className="prose dark:prose-invert max-w-none">
//                 <p>If you're looking for stock fittings or custom conduit ones, TMT Plus has a diverse range to provide you with the best. Our team is committed to providing customers with easy-to-install and safe conduit wires which specify all the standardisations required for the building.</p>
//                 <p>Available in Black, White and Gray, the rigid electrical conduit pipes are used in Light Mechanical Stress (LMS), Medium Mechanical Stress (MMS) and Heavy Mechanical Stress (HMS), supporting a wide range of applications and uses.</p>
//                 <p>The size range of 19 mm to 63 mm, including the widely used 25 mm PVC conduit, ensures compatibility with various electrical setups.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Fittings Products Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12" id='Fittings'>Fittings</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product, index) => (
//               <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
//                 <div className="relative h-48">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-contain p-4"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
//                   <Link href={product.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <ul className="space-y-4">
//                 {featuresLeft.map((feature, index) => (
//                   <li key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
//                     <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300">{feature.content}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <ul className="space-y-4">
//                 {featuresRight.map((feature, index) => (
//                   <li key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
//                     <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300">{feature.content}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//         aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//       >
//         {darkMode ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// };

// export default ConduitPipesPage;


"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ConduitPipesPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const products1 = [
    {
      image: '/Images/02.png',
    },
    {
      image: '/Images/PipeFitting.png',
    },
    {
      image: '/Images/3LearWater.png',
    },
    {
      image: '/Images/casingcappingpipes.png',
    }, 
    {
        image: '/Images/slide10.png',
      },
      {
        image:'/Images/CorrugatedPipes.png'
      }
  ];

  const products = [
    {
      title: 'uPVC Conduit FRLS',
      description: 'Optimum Heat Insulation | Best Safety Standards | Smooth Finish',
      image: '/Images/0.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: 'FR Conduit Pipes',
      description: 'Optimum Heat Insulation | Smooth Finish | Best Safety Standards',
      image: '/Images/PipeFittin.png',
      link: '/fr-conduit-pipes/'
    },
    {
      title: 'Bends and Fittings',
      description: 'Weather Proof | Sturdy Design Shock Resistant',
      image: '/Images/ConduitPipes3.png',
      link: '/bends-and-fittings/'
    },
    {
      title: 'Pvc Junction Box',
      description: 'Excellent Insulation | Smooth Finish Durable & Easy to Install',
      image: '/Images/ConduitPipes4.png',
      link: '/pvc-junction-box/'
    }
  ];

  const featuresLeft = [
    {
        title: 'Corrosion-resistant',
        content: 'uPVC conduit pipes do not react with water and air as compared to metal, making them immune to corrosion and ensuring long-lasting performance.'
      },
      {
        title: 'Rigid and Flexible Options',
        content: 'Rigid pipes are sturdy and durable, known for their resistance to blows. Flexible variants provide adaptability for future changes.'
      },
      {
        title: 'Shock-proof protection',
        content: 'Conduits prevent contact between electrical wires and flammable material, providing a safe path for current to flow.'
      },
      {
        title: 'Fire Resistance',
        content: 'The presence of chlorine acts as a natural flame retardant, giving it the property to act as a barrier to catching fire.'
      },
      {
        title: 'High Impact Strength',
        content: 'Exhibits resistance to chemical presence, working under a wide range of pressure, significantly improving its sturdiness.'
      }
  ];

  const featuresRight = [
    {
        title: 'Excellent Elasticity & Flexibility',
        content: 'Provides materials that can expand, bend, and be modified across rooms, helping in future modifications.'
      },
      {
        title: 'Versatility',
        content: 'Wide range of applications from electrical wiring to telecommunications with minimal energy loss.'
      },
      {
        title: 'Smooth Interior',
        content: 'Minimises friction, allowing for easy wire installation and maintenance with enhanced durability.'
      },
      {
        title: 'Environmental Considerations',
        content: 'Lower carbon footprint than counterparts and can be recycled multiple times without losing features.'
      },
      {
        title: 'Lightweight',
        content: 'Easy to hold, carry, and transport in bulk, enabling hassle-free installation and reinstallation.'
      }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Head>
        <title>Conduit Pipes | TMT Plus</title>
        <meta name="description" content="High-quality uPVC Conduit Pipes for safe and durable electrical wiring solutions" />
      </Head>

      {/* Breadcrumb Section */}
      <section 
        className="relative py-16 bg-cover bg-center h-150 mt-5"
        style={{ backgroundImage: `url(/Images/ProductBanner.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <nav aria-label="breadcrumb" className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Comprehensive Product Range</h1>
            <ol className="flex justify-center space-x-2">
              <li className="flex items-center">
                <Link href="/" className="text-blue-300 hover:text-white transition">Home</Link>
                <span className="mx-2 text-white">/</span>
              </li>
              <li className="text-white" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                <p>
                 <b>TMT Plus uPVC Conduit Pipes </b>are designed for efficient cable routing, offering protection against shocks, mechanical stress, and abrasions. Made from premium PVC resin, they ensure enhanced safety and long-term durability. Available in 20 mm to 50 mm sizes, they cater to residential, industrial, and commercial electrical systems.<br/>

 <b>TMT Plus cPVC Pipes & Fittings </b>are perfect for hot and cold water plumbing, offering excellent temperature resistance and leak-proof performance. These pipes are durable, making them ideal for homes and industrial applications.<br/>

 <b>MCB Boxes </b>ensure safe electrical distribution, preventing overloads and short circuits. Their robust build makes them reliable for both residential and industrial setups.<br/>

 <b>Water Tanks </b>by TMT Plus feature multi-layer UV protection, ensuring safe and long-lasting water storage. They withstand extreme weather, making them ideal for residential and commercial use.<br/>

 <b>Metal Boxes & Accessories </b>offer secure electrical junctions with weather resistance, perfect for outdoor and indoor installations.<br/>

 <b>Corrugated Pipes </b>provide flexible and durable protection for cables in underground and surface wiring.<br/>

<b>uPVC Casing & Capping Pipes </b>protect wires from dust and damage, offering long-lasting reliability in residential and commercial applications.<br/>

 TMT Plus products deliver safety, durability, and performance, making them the trusted choice for modern infrastructure. </p>
                </p>
                {/* ... rest of your product description */}
              </div>
            </div>
            
            {/* Compact Image Slideshow */}
            <div className="lg:w-1/2 w-full max-w-md mx-auto">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="h-80 w-full rounded-lg shadow-lg"
              >
                {products1.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-64 w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Fittings Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fittings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-3">
                {featuresLeft.map((feature, index) => (
                  <li key={index} className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.content}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {featuresRight.map((feature, index) => (
                  <li key={index} className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ConduitPipesPage;