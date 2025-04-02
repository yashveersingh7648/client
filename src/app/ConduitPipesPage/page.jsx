
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

import WhatsAppButton from "@/app/components/WhatsAppButton"


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

  const Conduit = [
    {
      title: 'uPVC Conduit FRLS',
      description: 'Experience optimum heat insulation, top-tier safety standards, and a smooth finish with our premium, reusable solutions for lasting performance.',
      image: '/Images/CundutPipes.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: 'FR Conduit Pipes',
      description: 'Ensure optimum heat insulation, a flawless smooth finish, and the best safety standards with our durable, high-performance, and reusable solutions.',
      image: '/Images/02.png',
      link: '/fr-conduit-pipes/'
    },
    {
      title: 'Bends and Fittings',
      description: 'Experience weatherproof durability, a sturdy design, and shock-resistant performance with our premium, reusable solutions for long-lasting protection and reliability.',
      image: '/Images/Bandsfitting.png',
      link: '/bends-and-fittings/'
    },
    {
      title: 'Pvc Junction Box',
      description: 'Enjoy excellent insulation, a flawless smooth finish, and a durable design that’s easy to install, ensuring long-lasting performance and convenience.',
      image: '/Images/pvcJunction.png',
      link: '/pvc-junction-box/'
    }
  ];

  const Metal = [
    {
      title: 'Junction Box',
      description: 'Durable and robust, our 20-gauge modular boxes provide superior strength, precision engineering, and a sleek design for versatile, long-lasting installations.',
      image: '/Images/JunctionBox.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: 'Modular Boxes (19 Gauge)',
      description: 'Built for reliability, our sturdy designs are corrosion-proof, shock-resistant, and weatherproof, ensuring long-lasting durability in any environment.',
      image: '/Images/ModulerBox.png',
      link: '/fr-conduit-pipes/'
    },
    {
      title: 'Fan Boxes',
      description: 'Designed for convenience, our product is easy to attach, features a corrosion-proof finish, and provides complete protection against adverse weather conditions.',
      image: '/Images/slide6.png',
      link: '/bends-and-fittings/'
    },
    {
      title: 'Concealed Boxes',
      description: 'Our rust-proof finish, anti-wear designs, and shock-resistant construction ensure long-lasting durability, superior protection, and reliable performance in any environment.',
      image: '/Images/canecalBox.png',
      link: '/pvc-junction-box/'
    }
  ];



  const uPVC = [
    {
      title: 'uPVC Pipes Agri pipes',
      description: 'Perfect for both above-ground and underground installations, our solution withstands extreme weather conditions and features a smooth internal surface finish.',
      image: '/Images/PipeFitting.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: 'SWR Ring Fit Pipes & Fittings',
      description: 'Featuring a damage-resistant build, easy installation, and an all-weatherproof design, our solution ensures long-lasting durability and reliable performance anywhere.',
      image: '/Images/slide3.png',
      link: '/fr-conduit-pipes/'
    },
    {
      title: 'SWR Plain Fit Pipes & Fittings',
      description: 'With outstanding bonding and adhesion, our solution allows easy piping direction changes and dispensing, available in sizes from 63mm to 200mm.',
      image: '/Images/PlainFitPipes.png',
      link: '/bends-and-fittings/'
    },
 
  ];



  const Water = [
    {
      title: '3 Layer Water',
      description: 'TMT Plus 3-layer weatherproof water tanks feature a durable polymer build with a UV-resistant carbon-black layer for enhanced longevity and strength.',
      image: '/Images/3LearWater.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: '5 Layer Water',
      description: 'TMT Plus 5-layer Crown model water tank offers superior insulation, UV protection, and durability, keeping water cool in extreme climates efficiently.',
      image: '/Images/WaterTank5000ltr.png',
      link: '/fr-conduit-pipes/'
    },
  ];

  const Corrugated = [
    {
      title: 'Corrugated Pipes-1',
      description: 'Corrugated pipes provide flexible, durable cable protection, ensuring reliability. Their vibrant colors aid identification, enhancing organization in electrical and communication systems.',
      image: '/Images/CorrugatedPipes.png',
      link: '/upvc-conduit-frls/'
    },
    {
      title: 'Corrugated Pipes-2',
      description: 'TMT Plus leads with innovation, offering reliable, eco-friendly pipes that exceed standards, ensuring sustainability and quality for modern construction projects worldwide.',
      image: '/Images/slide4.png',
      link: '/fr-conduit-pipes/'
    },
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
    <>
    <WhatsAppButton />

    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Head>
        <title>Conduit Pipes | TMT Plus – Durable & Safe Electrical Wiring Solutions</title>
        <meta name="description" content=" Explore TMT Plus uPVC conduit pipes for secure, long-lasting electrical wiring. High-quality, durable, and designed for optimal safety and efficiency." />
      </Head>

      {/* Breadcrumb Section */}
      <section 
        className="relative py-16 bg-cover bg-center h-100  top-20 mb-20"
        style={{ backgroundImage: `url(/Images/ProductsExplore.jpg)` }}
      id='Products'>
        <div className="absolute inset-0  opacity-80 "></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <nav aria-label="breadcrumb" className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Comprehensive Product Range</h1>
            <ol className="flex justify-center space-x-2">
              <li className="flex items-center">
                <Link href="/" className="text-2xl text-black-500 hover:text-white transition">Home</Link>
                <span className="mx-2 text-white text-2xl">/</span>
              </li>
              <li className="text-white text-2xl" aria-current="page">Products</li>
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
                 <b>TMT Plus uPVC Conduit Pipes </b>are designed for efficient cable routing, offering protection against shocks, mechanical stress, and abrasions. Made from premium PVC resin, they ensure enhanced safety and long-term durability. Available in 20 mm to 50 mm sizes, they cater to residential, industrial, and commercial electrical systems.<br/>

 <b>TMT Plus cPVC Pipes & Fittings </b>are perfect for hot and cold water plumbing, offering excellent temperature resistance and leak-proof performance. These pipes are durable, making them ideal for homes and industrial applications.<br/>

 <b>MCB Boxes </b>ensure safe electrical distribution, preventing overloads and short circuits. Their robust build makes them reliable for both residential and industrial setups.<br/>

 <b>Water Tanks </b>by TMT Plus feature multi-layer UV protection, ensuring safe and long-lasting water storage. They withstand extreme weather, making them ideal for residential and commercial use.<br/>

 <b>Metal Boxes & Accessories </b>offer secure electrical junctions with weather resistance, perfect for outdoor and indoor installations.<br/>

 <b>Corrugated Pipes </b>provide flexible and durable protection for cables in underground and surface wiring.<br/>

<b>uPVC Casing & Capping Pipes </b>protect wires from dust and damage, offering long-lasting reliability in residential and commercial applications.<br/>

 TMT Plus products deliver safety, durability, and performance, making them the trusted choice for modern infrastructure. 
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
                        alt={product.title || "Products image"}

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
      <section className="py-12" id='Conduit'>
        <div className="container mx-auto px-4" >
          <h2 className="text-3xl font-bold text-center mb-8">Conduit Pipes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Conduit.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  {/* <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" id='Metal'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Metal Accessories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Metal.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title || "Metal Accessories image"}

                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  {/* <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 ps-60" id='uPVC'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 me-50">uPVC Pipes and Fittings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uPVC.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title || "uPVC Pipes and Fittings image"}

                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  {/* <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 ps-120 " id='Tanks'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 pe-130">Water Tanks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Water.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title || "Water Tanks image"}

                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  {/* <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-12 ps-120" id='Corrugated'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 pe-130">Corrugated Pipes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Corrugated.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title || "Corrugated Pipes image"}

                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  {/* <Link href={product.link} className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                    Learn More
                  </Link> */}
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
    </>
  );
};

export default ConduitPipesPage;