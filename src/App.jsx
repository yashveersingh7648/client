import React, { lazy, Suspense } from "react";
import './App.css';
import { Helmet } from 'react-helmet';
import { Routes, Route } from "react-router-dom";

// Lazy Load Components
const Navbar = lazy(() => import("./components/Navbar"));

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));



const AboutSection = lazy(() => import("./components/AboutSection"));
const Carousel = lazy(() => import("./components/Carousel"));
const Footer = lazy(() => import("./components/Footer"));
const KnowMoreSection = lazy(() => import("./components/KnowMoreSection"));
const ProductsSection = lazy(() => import("./components/ProductsSection"));
const SolutionsSection = lazy(() => import("./components/SolutionsSection"));
const TrustedSection = lazy(() => import("./components/TrustedSection"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const Card = lazy(() => import("./components/card"));
const Button = lazy(() => import("./components/button"));

const NotFound = lazy(() => import("./pages/NotFound"));


const ConduitPipesPage = lazy(() => import("./pages/ConduitPipesPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Dealership = lazy(() => import("./pages/Dealership"));
const FAQItem = lazy(() => import("./pages/FAQItem"));
const History = lazy(() => import("./pages/History"));
const PressReleases = lazy(() => import("./pages/PressReleases"));
const Products = lazy(() => import("./pages/Products"));
const QualityPolicy = lazy(() => import("./pages/QualityPolicy"));

const App = () => {
  return (
    <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
      {/* Wrap everything inside Suspense */}

      <Helmet>
        <title>TMT PLUS</title>
        <meta name="description" content="IT solutions and cybersecurity services" />
      </Helmet>

      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route path="/AboutSection" element={<AboutSection />} /> 
        <Route path="/Carousel" element={<Carousel />} /> 
        <Route path="/Footer" element={<Footer />} /> 
        <Route path="/KnowMoreSection" element={<KnowMoreSection />} /> 
        <Route path="/ProductsSection" element={<ProductsSection />} /> 
        <Route path="/SolutionsSection" element={<SolutionsSection />} /> 
        <Route path="/TrustedSection" element={<TrustedSection />} /> 
        <Route path="/WhatsAppButton" element={<WhatsAppButton />} /> 
        <Route path="/card" element={<Card />} /> 
        <Route path="/Button" element={<Button />} /> 
        
        


              <Route path="/ConduitPipesPage" element={<ConduitPipesPage />} /> 
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/Dealership" element={<Dealership  />} /> 
        <Route path="/FAQItem" element={< FAQItem />} /> 
        <Route path="/History" element={<History />} /> 
        <Route path="/PressReleases" element={<PressReleases />} /> 
        <Route path="/Products" element={<Products />} /> 
        <Route path="/QualityPolicy" element={<QualityPolicy />} /> 


 <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Suspense>
  );
};

export default App;
