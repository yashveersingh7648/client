import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WhatsAppButton from "../components/WhatsAppButton"

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
        image:'/Images/CorrugatedPipes.PNG'
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
      image: '/Images/pvcJunction.PNG',
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
      image: '/Images/slide3.PNG',
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
      image: '/Images/CorrugatedPipes.PNG',
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
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <Helmet>
          <title>Conduit Pipes | TMT Plus – Durable & Safe Electrical Wiring Solutions</title>
          <meta name="description" content="Explore TMT Plus uPVC conduit pipes for secure, long-lasting electrical wiring. High-quality, durable, and designed for optimal safety and efficiency." />
        </Helmet>

        {/* Breadcrumb Section */}
        <section className="breadcrumb-section">
          <div className="breadcrumb-overlay"></div>
          <div className="breadcrumb-content">
            <nav aria-label="breadcrumb">
              <h1>Explore Our Comprehensive Product Range</h1>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                  <span>/</span>
                </li>
                <li aria-current="page">Products</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="product-overview">
          <div className="overview-container">
            <div className="overview-text">
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
            </div>
            
            {/* Image Slideshow */}
            <div className="image-slideshow">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="swiper-container"
              >
                {products1.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="image-container2">
                      <img
                        src={product.image}
                        alt={product.title || "Products image"}
                        fill
                        className="image-content"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <section className="product-section" id="Conduit">
          <h2>Conduit Pipes
              <span className="decorative-line1"></span>

          </h2>
          <div className="product-grid">
            {Conduit.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="product-details2">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


  <section className="product-section" id='Metal'>
          <h2>Metal Accessories
              <span className="decorative-line1"></span>

          </h2>
          <div className="product-grid">
            {Metal.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="product-details2">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


<section className="product-section" id='uPVC'>
          <h2>uPVC Pipes and Fittings
              <span className="decorative-line1"></span>

          </h2>
          <div className="product-grid1">
            {uPVC.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="product-details2">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


<section className="product-section" id='Tanks'>
          <h2>Water Tanks
              <span className="decorative-line1"></span>

          </h2>
          <div className="product-grid2">
            {Water.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="product-details2">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
     

<section className="product-section" id='Corrugated'>
          <h2>Corrugated Pipes
              <span className="decorative-line1"></span>

          </h2>
          <div className="product-grid2">
            {Corrugated.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title || "Conduit image"}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="product-details2">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
     
      
      










        {/* ... other product sections with same structure ... */}

        {/* Features Section */}
        <section className="features-section">
          <h2>Features
              <span className="decorative-line1"></span>

          </h2>
          <div className="features-container">
            <div className="features-column">
              <ul>
                {featuresLeft.map((feature, index) => (
                  <li key={index} className="feature-card1">
                    <h3>{feature.title}</h3>
                    <p>{feature.content}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="features-column">
              <ul>
                {featuresRight.map((feature, index) => (
                  <li key={index} className="feature-card1">
                    <h3>{feature.title}</h3>
                    <p>{feature.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </>
  );
};

export default ConduitPipesPage;