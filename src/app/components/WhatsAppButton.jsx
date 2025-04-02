"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918882171554"; 
    const message = "Hello, I am interested in your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2, rotate: 360 }} // Hover par zoom aur rotate
      whileTap={{ scale: 0.9 }} // Click par chhota hoga
      className="fixed bottom-4 right-4 z-50 cursor-pointer mb-20 "
    >
      <Image src="/Images/Newwhatshap.png" width={64} height={64} alt="WhatsApp" />
    </motion.div>
  );
};

export default WhatsAppButton;
