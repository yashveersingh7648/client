'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    title: "Conduit Pipes",
    image: "/Images/cundutpipes.jpg",
    description: "TMT Plus uPVC Conduit Pipes ensure safe cable routing, protecting against shocks, stress, and abrasions, offering durability for residential, industrial, and commercial applications.",
    link: "/conduit-pipes/",
    bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700"
  },
  {
    title: "Water Tanks",
    image: "/Images/watetank.jpeg",
    description: "TMT Plus offers durable PVC water tanks made from 100% virgin LLDPE, ensuring safe, fresh, and reliable water storage solutions.",
    link: "/water-tanks/",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700"
  },
  {
    title: "Metal Boxes & Accessories",
    image: "/Images/matelBoxes.png",
    description: "TMT Plus Metal Boxes & Accessories offer durable, certified solutions for residential and commercial electrical installations, ensuring safety and reliability.",
    link: "/metal-boxes-accessories/",
    bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700"
  },
  {
    title: "uPVC Pipes and Fittings",
    image: "/Images/PipeFitting.png",
    description: "TMT Plus cPVC Pipes offer superior durability and temperature resistance, ensuring reliable plumbing performance for hot water applications.",
    link: "/upvc-pipes-and-fittings/",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700"
  },
  {
    title: "uPVC casing & capping pipes",
    image: "/Images/casingcappingpipes.png",
    description: "TMT Plus uPVC Casing & Capping Pipes ensure durable, certified protection for electrical wiring in homes and commercial buildings, offering reliable performance.",
    link: "/upvc-pipes-and-fittings/",
    bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-semibold text-6xl">Product</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Products We Provide
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          TMT Plus is a premier manufacturer of high-quality polymer products in India. We prioritize using the finest raw materials while strictly adhering to safety and hygiene standards.
          </p>
        </div>

        {/* Swiper with RTL (Right-to-Left) sliding */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          dir="rtl"  // 👈 RTL sliding effect
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 ${product.bgColor}`}
              >
                <div className="relative h-64 bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href={product.link} className="hover:text-gray-200 transition-colors">
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mb-4">{product.description}</p>
                  <Link 
                    href="/Products"
                    className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSection;
