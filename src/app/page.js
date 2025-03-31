import Carousel from "@/app/components/Carousel";
import AboutSection from "@/app/components/AboutSection"
// import SolutionsSection from "@/app/components/SolutionsSection"
import TrustedSection from "./components/TrustedSection";

import ProductsSection from "@/app/components/ProductsSection"
import AppDownloadSection from "@/app/components/AppDownloadSection"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Carousel */}
      <div className="w-full relative mt-5">
        <Carousel />
      </div>

      {/* अन्य content */}
      <main className="container mx-auto px-4 py-8">
       <AboutSection />
       {/* <SolutionsSection/> */}
       <TrustedSection/>
       <ProductsSection/>
       <AppDownloadSection/>

      </main>
    </div>
  );
}