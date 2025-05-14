// import { Card, CardContent } from "../components/card";
// // import { Button } from "@/components/ui/button";
// // import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import WhatsAppButton from "../components/WhatsAppButton"


// const products = [
//     {
//         id: "id1",
//         name: "FR Conduit Pipes",
//         image: "/Images/02.png",  // Add the correct image path
//         description: "TMT Plus FR Conduit Pipes ensure safe wiring with flame-retardant PVC, resisting fire and magnetic interference. Ideal for industrial, commercial, and residential use, they offer durability, protection, and seamless electrical performance in any environment.",
//         price: "₹120",
//      link: "/ConduitPipesPage#Conduit"
//     },
//     {
//         id: "id2",
//         name: "uPVC Conduit FRLS",
//         image: "/Images/CundutPipes.png",  // Add the correct image path
//         description: "TMT Plus uPVC Conduit FRLS Pipes ensure safe wiring with fire-retardant, low-smoke properties, minimizing risks. Designed for buildings and industries, they prevent flame spread, reduce smoke emissions, and enhance electrical safety in fire situations.",
//         price: "₹180",
//      link: "/ConduitPipesPage#Conduit"

//     },
//     {
//         id: "id3",
//         name: " Bends and Fittings",
//         image: "/Images/Bandsfitting.png",  // Placeholder for additional product
//         description: "TMT Plus Bends and Fittings protect electrical cables from damage, weather, and rodents, ensuring smooth power flow. With 3D and 5D bends in 45° and 90° angles, they enable secure, efficient installations.",
//         price: "₹90",
//      link: "/ConduitPipesPage#Conduit"

//     },
//     {
//         id: "id4",
//         name: "Pvc Junction Box",
//         image: "/Images/pvcJunction.png",  // Placeholder for additional product
//         description: "TMT Plus PVC Junction Boxes offer secure, organized electrical connections, shielding wires from dust, moisture, and damage. Made from durable PVC, they ensure long-lasting performance, easy installation, and efficient cable management in all settings.",
//         price: "₹60",
//      link: "/ConduitPipesPage#Conduit"

//     },
//     {
//         id: "id5",
//         name: "cPVC Pipes & Fittings",
//         image: "/Images/PipeFitting.png",  // Placeholder for additional product
//         description: "TMT Plus cPVC Pipes and Fittings provide durable, heat-resistant plumbing for hot water systems. Compliant with IS 15778 and ASTM D 2846, they come in SDR 11, SDR 13.5, SCH 40, and SCH 80 variants. ",
//         price: "₹60",
//      link: "/ConduitPipesPage#uPVC"

//     }, {
//         id: "id6",
//         name: "3 Layer Water Tanks",
//         image: "/Images/3LearWater.png",  // Placeholder for additional product
//         description: "TMT Plus 3-layer water tanks offer superior durability with impact-resistant polymer layers. A UV-blocking carbon-black middle layer prevents sun damage, ensuring long-lasting, safe water storage for residential and commercial applications.  ",
//         price: "₹60",
//      link: "/ConduitPipesPage#Tanks"

//     },

//     {
//         id: "id7",
//         name: "4 Layer Water Tanks",
//         image: "/Images/watetank.jpeg",  // Placeholder for additional product
//         description: "TMT Plus 4-layer water tanks provide superior insulation and durability with a UV-resistant carbon-black layer. Designed for extreme temperatures, the Vintage Model ensures safe, long-lasting water storage for homes and industries.",
//         price: "₹60",
//      link: "/ConduitPipesPage#Tanks"

//     },
//     {
//         id: "id8",
//         name: " uPVC casing & capping pipes",
//         image: "/Images/casingcappingpipes.png",  // Placeholder for additional product
//         description: "TMT Plus uPVC Casing & Capping Pipes provide robust wire protection in residential and commercial spaces. With world-class certifications, they ensure durability, safety, and a secure electrical setup in various size options  ",
//         price: "₹60",
//      link: "/ConduitPipesPage#Products"

//     },
//     {
//         id: "id9",
//         name: "Junction Box",
//         image: "/Images/JunctionBox.png",  // Placeholder for additional product
//         description: "TMT Plus Metal Junction Boxes provide strong, fire-resistant protection for electrical connections. Available in multiple sizes and shapes, they ensure durability, safety, and easy installation, making them ideal for residential, commercial, and industrial use.",
//         price: "₹60",
//      link: "/ConduitPipesPage#Metal"

//     },
//     {
//         id: "id10",
//         name: "Modular Boxes (19 Gauge)",
//         image: "/Images/ModulerBox.png",  // Placeholder for additional product
//         description: "TMT Plus Weatherproof Modular Electric Boxes, crafted from 1.0/1.2 mm CRC sheets, provide exceptional durability against dust, moisture, and extreme weather. Their 19-gauge structure ensures secure installations, ideal for industrial, commercial, and outdoor applications. ",
//         price: "₹60",
//      link: "/ConduitPipesPage#Metal"

//     },
//     {
//         id: "id11",
//         name: "Fan Boxes",
//         image: "/Images/FanBox.png",  // Placeholder for additional product
//         description: "TMT Plus Electrical Fan Boxes ensure sturdy support, optimal airflow, and long-lasting performance. Their modular design allows easy installation, accessory customization, and weather protection, making them ideal for energy-efficient residential and commercial ventilation systems.  ",
//         price: "₹60",
//      link: "/ConduitPipesPage#Metal"

//     },
//     {
//         id: "id12",
//         name: "Concealed Boxes",
//         image: "/Images/canecalBox.png",  // Placeholder for additional product
//         description: "TMT Plus Concealed Boxes provide secure, hidden wiring solutions for modern electrical systems. Crafted from premium PVC and metal, they enhance aesthetics, resist moisture and dust, and ensure durability. Ideal for residential and commercial installations.",
//         price: "₹60",
//      link: "/ConduitPipesPage#Metal"

//     },
//     {
//         id: "id13",
//         name: "Corrugated Pipes",
//         image: "/Images/CorrugatedPipes.png",  // Placeholder for additional product
//         description: "TMT Plus Corrugated Pipes ensure flexibility, durability, and eco-friendliness for electrical and telecom applications. Their color-coded design aids organization, while moisture and abrasion resistance make them ideal for optic fiber, construction, and industrial projects.",
//         price: "₹60",
//      link: "/ConduitPipesPage#Corrugated"

//     },
//     {
//         id: "id14",
//         name: "SWR Ring Fit Pipes & Fittings",
//         image: "/Images/SWRPipes.png",  // Placeholder for additional product
//         description: "TMT Plus uPVC SWR Pipes & Fittings offer leak-proof, durable drainage for homes, industries, and commercial spaces. Their chemical-resistant, anti-blockage design ensures smooth wastewater flow, bacteria-free performance, and low-maintenance, cost-effective drainage solutions. ",
//         price: "₹60",
//      link: "/ConduitPipesPage#uPVC"

//     },
    
// ];
// const sliderImages = [
//     "/Images/slide1.png",
//     "/Images/slide2.png",
//     "/Images/slide3.png",
//     "/Images/slide4.png",
//     "/Images/slide5.png",

//     "/Images/slide6.png",
//     "/Images/slide7.png",
//     "/Images/slide8.png",
//     "/Images/slide9.png",
//     "/Images/slide10.png",

    
//     "/Images/slide11.png",
//     "/Images/slide12.png",
//     "/Images/slide13.png",
//     "/Images/slide14.png",
//     "/Images/slide15.png",

    
//     "/Images/slide16.png",
//     "/Images/slide17.png",
//     "/Images/slide18.png",
//     "/Images/slide19.png",
//     "/Images/slide20.png",

    
//     "/Images/slide21.png",
//     "/Images/slide22.png",
//     "/Images/slide23.png",
//     "/Images/slide24.png",
//     "/Images/slide25.png",
// ];
// const PVCProducts = () => {
//     return (
//         <>    
//       <WhatsAppButton />
        
//             <section 
//         className="breadcrumb-section bg-cover opacity-90 bg-center text-white relative text-center py-20 h-120 "
//         style={{ backgroundImage: `url(/Images/ProductBanner.png)` }}
//       >
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold pt-20 text-black">Our Products</h1>
//           <nav className="flex justify-center ">
//             <a href="/" className="text-black hover:text-orange-400 ">Home</a>
//             <span className="mx-2">/</span>
//             <span className="text-black">Our History</span>
//           </nav>
//         </div>
//       </section>

//         <div className="p-10 bg-gray-100 min-h-screen pt-30 text-black ">
//             <h1 className="text-3xl font-bold mb-6 text-center pb-10"> Products</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {products.map((product) => (
//                    <Card 
//                    key={product.id} 
//                    id={product.id}  // Add ID to card
//                    className="hover:shadow-lg transition duration-300"
//                  >
//                         <img src={product.image} alt={product.name} className="w-full h-104 object-cover rounded-t-lg" />
//                         <CardContent className="p-4">
//                             <h2 className="text-xl font-semibold">{product.name}</h2>
//                             <p className="text-gray-600 mt-2 text-Black">{product.description}</p>
//                             {/* <p className="text-lg font-bold mt-2">{product.price}</p> */}
//                             {/* <Button className="mt-4 w-full flex justify-center items-center gap-2">
//                                 <FaShoppingCart /> Add to Cart
//                             </Button> */}
//                   {/* Unique Anchor Link */}
//                   {/* <Link 
//                                     href={product.link} 
//                                     className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//                                 >
//                                     Learn More
//                                 </Link> */}
//                                 <Link href={product.link || "#"} 
//                                    className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//                                 >      Learn More</Link>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
        
//          {/* Responsive Image Slider Section */}
//          <div className="w-full overflow-hidden bg-gray-100 py-10 mt-10">
//                 <div className="flex gap-8 animate-scroll">
//                     {sliderImages.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`Slider ${index}`}
//                             className="rounded-lg shadow-md transition-transform duration-300 ease-in-out 
//                             w-[100px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[125px] lg:w-[200px] lg:h-[150px]"
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* Tailwind Animation */}
//             <style>
//                 {`
//                 .animate-scroll {
//                     display: flex;
//                     animation: scroll 30s linear infinite;
//                 }

//                 @keyframes scroll {
//                     0% {
//                         transform: translateX(100%);
//                     }
//                     100% {
//                         transform: translateX(-100%);
//                     }
//                 }
//                 `}
//             </style>
//         </>

//     );
// };

// export default PVCProducts;



import WhatsAppButton from "../components/WhatsAppButton";
import { Link,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const products = [
     {
        id: "id1",
        name: "FR Conduit Pipes",
        image: "/Images/02.png",  // Add the correct image path
        description: "TMT Plus FR Conduit Pipes ensure safe wiring with flame-retardant PVC, resisting fire and magnetic interference. Ideal for industrial, commercial, and residential use, they offer durability, protection, and seamless electrical performance in any environment.",
        price: "₹120",
     link: "/ConduitPipesPage#Conduit"
    },
    {
        id: "id2",
        name: "uPVC Conduit FRLS",
        image: "/Images/CundutPipes.png",  // Add the correct image path
        description: "TMT Plus uPVC Conduit FRLS Pipes ensure safe wiring with fire-retardant, low-smoke properties, minimizing risks. Designed for buildings and industries, they prevent flame spread, reduce smoke emissions, and enhance electrical safety in fire situations.",
        price: "₹180",
     link: "/ConduitPipesPage#Conduit"

    },
    {
        id: "id3",
        name: " Bends and Fittings",
        image: "/Images/Bandsfitting.png",  // Placeholder for additional product
        description: "TMT Plus Bends and Fittings protect electrical cables from damage, weather, and rodents, ensuring smooth power flow. With 3D and 5D bends in 45° and 90° angles, they enable secure, efficient installations.",
        price: "₹90",
     link: "/ConduitPipesPage#Conduit"

    },
    {
        id: "id4",
        name: "Pvc Junction Box",
        image: "/Images/pvcJunction.PNG",  // Placeholder for additional product
        description: "TMT Plus PVC Junction Boxes offer secure, organized electrical connections, shielding wires from dust, moisture, and damage. Made from durable PVC, they ensure long-lasting performance, easy installation, and efficient cable management in all settings.",
        price: "₹60",
     link: "/ConduitPipesPage#Conduit"

    },
    {
        id: "id5",
        name: "cPVC Pipes & Fittings",
        image: "/Images/PipeFitting.png",  // Placeholder for additional product
        description: "TMT Plus cPVC Pipes and Fittings provide durable, heat-resistant plumbing for hot water systems. Compliant with IS 15778 and ASTM D 2846, they come in SDR 11, SDR 13.5, SCH 40, and SCH 80 variants. ",
        price: "₹60",
     link: "/ConduitPipesPage#uPVC"

    }, {
        id: "id6",
        name: "3 Layer Water Tanks",
        image: "/Images/3LearWater.png",  // Placeholder for additional product
        description: "TMT Plus 3-layer water tanks offer superior durability with impact-resistant polymer layers. A UV-blocking carbon-black middle layer prevents sun damage, ensuring long-lasting, safe water storage for residential and commercial applications.  ",
        price: "₹60",
     link: "/ConduitPipesPage#Tanks"

    },

    {
        id: "id7",
        name: "4 Layer Water Tanks",
        image: "/Images/watetank.jpeg",  // Placeholder for additional product
        description: "TMT Plus 4-layer water tanks provide superior insulation and durability with a UV-resistant carbon-black layer. Designed for extreme temperatures, the Vintage Model ensures safe, long-lasting water storage for homes and industries.",
        price: "₹60",
     link: "/ConduitPipesPage#Tanks"

    },
    {
        id: "id8",
        name: " uPVC casing & capping pipes",
        image: "/Images/casingcappingpipes.png",  // Placeholder for additional product
        description: "TMT Plus uPVC Casing & Capping Pipes provide robust wire protection in residential and commercial spaces. With world-class certifications, they ensure durability, safety, and a secure electrical setup in various size options  ",
        price: "₹60",
     link: "/ConduitPipesPage#Products"

    },
    {
        id: "id9",
        name: "Junction Box",
        image: "/Images/JunctionBox.png",  // Placeholder for additional product
        description: "TMT Plus Metal Junction Boxes provide strong, fire-resistant protection for electrical connections. Available in multiple sizes and shapes, they ensure durability, safety, and easy installation, making them ideal for residential, commercial, and industrial use.",
        price: "₹60",
     link: "/ConduitPipesPage#Metal"

    }, 
    {
        id: "id10",
        name: "Modular Boxes (19 Gauge)",
        image: "/Images/ModulerBox.png",  // Placeholder for additional product
        description: "TMT Plus Weatherproof Modular Electric Boxes, crafted from 1.0/1.2 mm CRC sheets, provide exceptional durability against dust, moisture, and extreme weather. Their 19-gauge structure ensures secure installations, ideal for industrial, commercial, and outdoor applications. ",
        price: "₹60",
     link: "/ConduitPipesPage#Metal"

    },
    {
        id: "id11",
        name: "Fan Boxes",
        image: "/Images/FanBox.png",  // Placeholder for additional product
        description: "TMT Plus Electrical Fan Boxes ensure sturdy support, optimal airflow, and long-lasting performance. Their modular design allows easy installation, accessory customization, and weather protection, making them ideal for energy-efficient residential and commercial ventilation systems.  ",
        price: "₹60",
     link: "/ConduitPipesPage#Metal"

    },
    {
        id: "id12",
        name: "Concealed Boxes",
        image: "/Images/canecalBox.png",  // Placeholder for additional product
        description: "TMT Plus Concealed Boxes provide secure, hidden wiring solutions for modern electrical systems. Crafted from premium PVC and metal, they enhance aesthetics, resist moisture and dust, and ensure durability. Ideal for residential and commercial installations.",
        price: "₹60",
     link: "/ConduitPipesPage#Metal"

    },
    {
        id: "id13",
        name: "Corrugated Pipes",
        image: "/Images/CorrugatedPipes.PNG",  // Placeholder for additional product
        description: "TMT Plus Corrugated Pipes ensure flexibility, durability, and eco-friendliness for electrical and telecom applications. Their color-coded design aids organization, while moisture and abrasion resistance make them ideal for optic fiber, construction, and industrial projects.",
        price: "₹60",
     link: "/ConduitPipesPage#Corrugated"

    },
    {
        id: "id14",
        name: "SWR Ring Fit Pipes & Fittings",
        image: "/Images/SWRPipes.PNG",  // Placeholder for additional product
        description: "TMT Plus uPVC SWR Pipes & Fittings offer leak-proof, durable drainage for homes, industries, and commercial spaces. Their chemical-resistant, anti-blockage design ensures smooth wastewater flow, bacteria-free performance, and low-maintenance, cost-effective drainage solutions. ",
        price: "₹60",
     link: "/ConduitPipesPage#uPVC"

    },
];

const sliderImages = [
        "/Images/slide1.png",
    "/Images/slide2.png",
    "/Images/slide3.PNG",
    "/Images/slide4.png",
    "/Images/slide5.png",

    "/Images/slide6.png",
    "/Images/slide7.png",
    "/Images/slide8.png",
    "/Images/slide9.png",
    "/Images/slide10.png",

    
    "/Images/slide11.png",
    "/Images/slide12.png",
    "/Images/slide13.png",
    "/Images/slide14.png",
    "/Images/slide15.png",

    
    "/Images/slide16.png",
    "/Images/slide17.png",
    "/Images/slide18.png",
    "/Images/slide19.png",
    "/Images/slide20.png",

    
    "/Images/slide21.png",
    "/Images/slide22.png",
    "/Images/slide23.png",
    "/Images/slide24.png",
    "/Images/slide25.png",
];

const PVCProducts = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the element when hash changes
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                // Add slight delay to ensure DOM is fully loaded
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // Scroll to top if no hash
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <WhatsAppButton />
            
            <section 
                className="breadcrumb-section"
                style={{ backgroundImage: `url(/Images/ProductBanner.png)` }}
            >
                {/* <div className="breadcrumb-container">
                    <h1 className="breadcrumb-title">Our Products</h1>
                    <nav className="breadcrumb-nav">
                        <Link to="/" className="breadcrumb-link">Home</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">Our Products</span>
                    </nav>
                </div> */}
            </section>

            <div className="products-container">
                <h1 className="products-title">Products
              <span className="decorative-line1"></span>

                </h1>
                <div className="products-grid">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            id={product.id}  // This is crucial for the anchor links
                            className="product-card"
                        >
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="product-image" 
                            />
                            <div className="product-content">
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-description1">{product.description}</p>
                                <Link 
                                    to={product.link || "#"} 
                                    className="product-link"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Responsive Image Slider Section */}
            <div className="image-slider-container">
                <div className="image-slider">
                    {sliderImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slider ${index}`}
                            className="slider-image"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PVCProducts;