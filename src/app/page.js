import Carousel from "@/app/components/Carousel";
import AboutSection from "@/app/components/AboutSection"
// import SolutionsSection from "@/app/components/SolutionsSection"
import TrustedSection from "./components/TrustedSection";

import ProductsSection from "@/app/components/ProductsSection"
import KnowMoreSection from "@/app/components/KnowMoreSection"

import WhatsAppButton from "@/app/components/WhatsAppButton"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Carousel */}
      <div className="w-full relative pt-5">
        <Carousel />
      </div>

      {/* अन्य content */}
      <main className="container mx-auto px-4 py-8">
       <AboutSection />
       {/* <SolutionsSection/> */}
       <TrustedSection/>
       <ProductsSection/>
       <KnowMoreSection/>
<WhatsAppButton />
      </main>
    </div>
  );
}