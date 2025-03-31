import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
const products = [
    {
        id: 1,
        name: "FR Conduit Pipes",
        image: "/Images/02.png",  // Add the correct image path
        description: "TMT Plus FR Conduit Pipes ensure safe and organized electrical installations by offering structured pathways for wiring. Made from flame-retardant PVC resin, they resist fire and magnetic attraction, ensuring smooth current flow. Ideal for industrial, commercial, and residential applications, they provide superior protection and reliability in diverse environments.",
        price: "₹120",
     link: "/ConduitPipesPage#Fittings"
    },
    {
        id: 2,
        name: "uPVC Conduit FRLS",
        image: "/Images/CundutPipes.PNG",  // Add the correct image path
        description: "TMT Plus uPVC Conduit FRLS Pipes ensure safe and reliable electrical wiring with fire-retardant and low-smoke properties. They prevent flame spread and minimize smoke emission, offering protection in fire situations. Ideal for buildings and industrial setups, they enhance safety, providing a secure and efficient electrical system with reduced fire hazards.",
        price: "₹180"
    },
    {
        id: 3,
        name: " Bends and Fittings",
        image: "/Images/Bandsfitting.png",  // Placeholder for additional product
        description: "TMT Plus Bends and Fittings safeguard electrical cables from weather, damage, and rodents, ensuring smooth power transmission. Designed for corners and obstacles, they feature 3D and 5D bends for easy wire placement with smoother curves. Available in 45° and 90° angles, they ensure secure and efficient electrical installations. ",
        price: "₹90"
    },
    {
        id: 4,
        name: "Pvc Junction Box",
        image: "/Images/pvcJunction.png",  // Placeholder for additional product
        description: "TMT Plus PVC Junction Boxes provide a safe and organized solution for electrical connections, protecting wires from moisture, dust, and accidental damage. Made from durable PVC, they ensure long-lasting performance in residential, commercial, and industrial setups. Easy to install, they offer reliable protection and efficient cable management.",
        price: "₹60"
    },
    {
        id: 5,
        name: "cPVC Pipes & Fittings",
        image: "/Images/PipeFitting.png",  // Placeholder for additional product
        description: "TMT Plus cPVC Pipes and Fittings are designed for hot water applications, offering superior temperature resistance and durability. Manufactured as per IS 15778 and ASTM D 2846 standards, they ensure reliable plumbing performance. Available in SDR 11, SDR 13.5, SCH 40, and SCH 80 variants, ranging from 20mm to 50mm",
        price: "₹60"
    }, {
        id: 6,
        name: "3 Layer Water Tanks",
        image: "/Images/3LearWater.png",  // Placeholder for additional product
        description: "TMT Plus 3-layer weatherproof water tanks feature triple-layer polymer construction for superior impact strength and durability. The carbon-black middle layer blocks harmful UV rays, extending the tank’s lifespan. Ideal for residential and commercial use, the Deluxe Model ensures safe, long-lasting water storage with enhanced protection against environmental damage. ",
        price: "₹60"
    },

    {
        id: 7,
        name: "4 Layer Water Tanks",
        image: "/Images/watetank.jpeg",  // Placeholder for additional product
        description: "TMT Plus 4-layer water tanks offer extra insulation and durability, featuring a carbon-black UV-protecting layer that maintains water temperature even in 45°C+ heat. Ideal for residential and industrial use, the Vintage Model ensures long-lasting performance, safeguarding water quality from UV damage and extreme weather conditions. ",
        price: "₹60"
    },
    {
        id: 8,
        name: " uPVC casing & capping pipes",
        image: "/Images/casingcappingpipes.png",  // Placeholder for additional product
        description: "TMT Plus uPVC Casing & Capping Pipes ensure safety and durability in electrical systems for homes and commercial buildings. Designed to protect wires, they offer strong, reliable performance with world-class certifications. Available in sizes 20×12, 25×16, 30×15, 32×16, 38×19, and 50×20, they meet customized requirements with superior quality.  ",
        price: "₹60"
    },
    {
        id: 9,
        name: "Junction Box",
        image: "/Images/JunctionBox.png",  // Placeholder for additional product
        description: "TMT Plus Metal Junction Boxes protect electrical wires and components from damage, ensuring safe and reliable connections. Made from durable metal or PVC, they come in various sizes and shapes to suit different applications. Ideal for electricians and professionals, they enhance the safety and efficiency of electrical installations. ",
        price: "₹60"
    },
    {
        id: 10,
        name: "Modular Boxes (19 Gauge)",
        image: "/Images/ModulerBox.png",  // Placeholder for additional product
        description: "TMT Plus Weatherproof Modular Electric Boxes made from 1.0/1.2 mm thick CRC sheets offer superior protection against dirt, dust, and harsh weather. Their 19-gauge precision design ensures durability and adaptability, making them ideal for construction sites, warehouses, and outdoor storage. These robust, customizable boxes safeguard valuable assets in any environment.  ",
        price: "₹60"
    },
    {
        id: 11,
        name: "Fan Boxes",
        image: "/Images/FanBox.png",  // Placeholder for additional product
        description: "TMT Plus Electrical Fan Boxes offer durability, reliability, and high performance for commercial and residential applications. Their modular design ensures easy installation and maintenance, with flexibility for adding or removing accessories. Designed for optimal airflow and ventilation, they provide weather protection and enhance energy efficiency, reducing electricity costs.  ",
        price: "₹60"
    },
    {
        id: 12,
        name: "Concealed Boxes",
        image: "/Images/canecalBox.png",  // Placeholder for additional product
        description: "TMT Plus Concealed Boxes offer reliable protection for electrical wiring in residential and commercial projects. Made from high-quality PVC and metal, they enhance aesthetics by hiding wires, creating a streamlined appearance. Easy to install with pre-drilled holes, they protect against moisture, dust, and contaminants, ensuring long-lasting durability. ",
        price: "₹60"
    },
    {
        id: 13,
        name: "Corrugated Pipes",
        image: "/Images/CorrugatedPipes.png",  // Placeholder for additional product
        description: "TMT Plus Corrugated Pipes offer flexible, durable, and eco-friendly solutions for electrical and communication networks, including optic fibre installations. Their vibrant color range allows for easy identification and organization. Designed for reliable performance, they provide protection against moisture and abrasion, making them ideal for construction and industrial applications.  ",
        price: "₹60"
    },
    {
        id: 14,
        name: "SWR Ring Fit Pipes & Fittings",
        image: "/Images/SWRPipes.png",  // Placeholder for additional product
        description: "TMT Plus uPVC SWR Pipes & Fittings provide durable, leak-proof drainage solutions for residential, industrial, and commercial spaces. Corrosion and chemical-resistant, they ensure smooth wastewater flow with minimal maintenance. Their anti-blockage and bacteria-free design offers long-lasting performance, making them a cost-effective choice for modern drainage systems. ",
        price: "₹60"
    },
    {
        id: 15,
        name: "Concealed Boxes",
        image: "/Images/canecalBox.png",  // Placeholder for additional product
        description: "TMT Plus Concealed Boxes offer reliable protection for electrical wiring in residential and commercial projects. Made from high-quality PVC and metal, they enhance aesthetics by hiding wires, creating a streamlined appearance. Easy to install with pre-drilled holes, they protect against moisture, dust, and contaminants, ensuring long-lasting durability. ",
        price: "₹60"
    }
];
const sliderImages = [
    "/Images/slide1.png",
    "/Images/slide2.png",
    "/Images/slide3.png",
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
    return (
        <>        <section 
        className="breadcrumb-section bg-cover bg-center text-white relative text-center py-20 h-150 mt-5"
        style={{ backgroundImage: `url(https://www.tmtplus.co.in/wp-content/uploads/2025/01/history-breadcrumb1.jpg)` }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold pt-50 ">Our Products</h1>
          <nav className="flex justify-center ">
            <a href="#" className="text-white-300 hover:text-orange-400">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white-400">Our History</span>
          </nav>
        </div>
      </section>

        <div className="p-10 bg-gray-100 min-h-screen pt-30 text-black ">
            <h1 className="text-3xl font-bold mb-6 text-center pb-10"> Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition duration-300 ">
                        <img src={product.image} alt={product.name} className="w-full h-104 object-cover rounded-t-lg" />
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600 mt-2 text-Black">{product.description}</p>
                            {/* <p className="text-lg font-bold mt-2">{product.price}</p> */}
                            {/* <Button className="mt-4 w-full flex justify-center items-center gap-2">
                                <FaShoppingCart /> Add to Cart
                            </Button> */}
                  {/* Unique Anchor Link */}
                  {/* <Link 
                                    href={product.link} 
                                    className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    Learn More
                                </Link> */}
                                <Link href={product.link || "#"} 
                                   className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                                >      Learn More</Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
         {/* Responsive Image Slider Section */}
         <div className="w-full overflow-hidden bg-gray-100 py-10 mt-10">
                <div className="flex gap-8 animate-scroll">
                    {sliderImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slider ${index}`}
                            className="rounded-lg shadow-md transition-transform duration-300 ease-in-out 
                            w-[100px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[125px] lg:w-[200px] lg:h-[150px]"
                        />
                    ))}
                </div>
            </div>

            {/* Tailwind Animation */}
            <style>
                {`
                .animate-scroll {
                    display: flex;
                    animation: scroll 30s linear infinite;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                `}
            </style>
        </>

    );
};

export default PVCProducts;
