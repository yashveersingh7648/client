'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import WhatsAppButton from "@/app/components/WhatsAppButton"


export default function QualityPage() {
  return (
    <>
      <Head>
        <title>Quality Policy | TMT Plus</title>
        <meta name="description" content="Learn about TMT Plus's commitment to quality, manufacturing standards, and diverse product mix." />
      </Head>

      <main className="bg-gray-100 text-gray-800  ">
        {/* Breadcrumb Section */} 
        <section className="bg-cover bg-center text-white py-20 relative text-center h-100 top-25 mb-20" style={{ backgroundImage: `url(/Images/QuiltyPolocy.jpg)` }}>
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold pt-15 text-black">Quality Policy</h1>
            <nav className="flex justify-center mt-4">
              <a href="/" className="text-white-300 hover:text-orange-400 text-black">Home</a>
              <span className="mx-2">/</span>
              <span className=" text-black">Quality Policy</span>
            </nav>
          </div>
        </section>
        
        {/* Quality Standards Section */}
        <section className="py-20">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
           
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/StantMentant.jpg"
                alt="Quality Standards"
                width={470}
                height={459}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Standards Maintained</h2>
              <p className="leading-relaxed mb-4">
                TMT Plus stands apart by offering top-quality products that adhere to the benchmarks of the **Bureau of Indian Standards**. Our manufacturing plant is equipped with **state-of-the-art Twin Screw RPVC Plant** and laboratories, implementing strict testing and inspection.
              </p>
              <p>
                Our uPVC conduits, pipes, and fittings conform to **IS:9537 Part-3, IS:4985, and IS:13592** standards, and the facility is **ISO 9001-2015 certified**, making TMT Plus a trusted name in the North region.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing Plant Section */}
        <section className="bg-sky-800 py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Product Mix</h2>
              <p className="leading-relaxed mb-4 text-white">
                Our diverse product range includes **uPVC Pipes & Fittings** for **Electrical, Plumbing, and Agricultural** applications, along with **uPVC Casing & Capping**, bends, and plastic storage tanks.
              </p>
              {/* <a href="https://www.tmtplus.co.in/casing-capping/" target="_blank" className="text-blue-500 hover:text-blue-700 underline">Explore our product range →</a> */}
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/ProductMix.png"
                alt="Product Mix"
                width={471}
                height={401}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        
        </section>

        {/* Product Mix Section */}
        <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/ManufecterPlant.jpg"
                alt="Manufacturing Plant"
                width={1030}
                height={550}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Manufacturing Plant</h2>
              <p className="leading-relaxed">
                Located in **Ambala, Haryana**, our plant is equipped with **modern machinery** for producing best-in-class polymer products. We continuously upgrade our technology to maintain **premium quality** and follow **environment-friendly** government-approved techniques.
              </p>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      
    </>
  );
}