

// import { motion } from "framer-motion";
// // import Image from "next/image";
// import whatsappIcon from "/Images/Newwhatshap.png"
// const WhatsAppButton = () => {
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "918882171554"; // Country code ke saath without + or 0
//     const message = "Hello, I am interested in your services!";
//     const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//   <motion.a
//       href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="whatsapp-button"
//     >
//       <img
//         src={whatsappIcon}
//         alt="WhatsApp"
//         className="whatsapp-icon"
//       />
//     </motion.a>
//   );
// };

// export default WhatsAppButton;


// ch
// import { motion } from "framer-motion";
// import whatsappIcon from "/Images/Newwhatshap.png";

// const WhatsAppButton = () => {
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "918882171554"; // Country code ke saath without + or 0
//     const message = "Hello, I am interested in your services!";
//     const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <motion.a
//       href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="whatsapp-button"
//       onClick={handleWhatsAppClick}
//     >
//       <img
//         src={whatsappIcon}
//         alt="WhatsApp"
//         className="whatsapp-icon"
//       />
//     </motion.a>
//   );
// };

// export default WhatsAppButton;




import React from 'react';
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 8447490707";
    const message = "Hello, I am interested in your services!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.a 
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-button"
    >
      <img
        src="/Images/Newwhatshap.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </motion.a>
  );
};

export default WhatsAppButton;