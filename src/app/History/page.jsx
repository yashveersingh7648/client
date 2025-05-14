'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useTheme } from 'next-themes'; // Tailwind Dark Mode Support

import WhatsAppButton from "@/app/components/WhatsAppButton"


export default function HistoryPage() {
  const { theme } = useTheme();

  const historyContent = `
    <p >TMT Plus, a pioneer in uPVC pipes and tanks manufacturing, began its journey in 1960 by partnering with M/s Ambala Electric Wood Works, producing wooden electrical fittings. In 2002, the company launched Haryana Polymers, establishing a manufacturing plant with a capacity of 300 tonnes per annum for PVC pipes. By 2008, TMT Plus introduced innovative technologies, boosting production capacity to 1500 tonnes. Today, it stands as a leader in the polymer industry with an annual production capacity of 4000 tonnes, delivering high-quality, durable, and innovative piping solutions trusted by industries and households across the nation.</p>
  `;

  return (
    <>
      <WhatsAppButton />

      <Head>
        <title>Our History | TMT Plus</title>
        <meta name="description" content="Learn about our journey from 1960 to becoming a leader in uPVC pipes and tanks manufacturing" />
      </Head>

      <main className={theme === 'dark' ? 'bg-white text-black' : ''} >
        {/* Breadcrumb Section */}
        <section 
          className="breadcrumb-section bg-cover bg-center text-white relative text-center py-20 h-100 top-20 mb-10 "
          style={{ backgroundImage: `url(/Images/Histroy.png)`}}
        >
        </section>

        {/* History Content Section */}
        <section className="py-20">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/Elactric.jpg"  // Add the correct image path
                alt="PVC manufacturing plant"
                width={1171}
                height={550}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="prose max-w-lg mx-auto">
              <div dangerouslySetInnerHTML={{ __html: historyContent }} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
