"use client";
import { useState } from "react";
import { MapPin, Building, Mail, PhoneCall, Send } from "lucide-react";
// import Image from "next/image";
import WhatsAppButton from "@/app/components/WhatsAppButton"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
    <WhatsAppButton />

    <div className="relative ">
      {/* Blurred Banner Image */}
      <div  className="breadcrumb-section bg-cover bg-center text-white relative text-center py-20 h-150  opacity-70"
        style={{ backgroundImage: `url(/Images/contactUs.jpg)` }}
        >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-50">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with our team today.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-20 relative z-10 -mt-20">
        <div className="container mx-auto px-6">
          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="bg-white shadow-lg rounded-lg p-10">
              <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>

              <div className="flex items-start mb-6">
                <MapPin className="text-orange-500 w-8 h-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <strong>Address:</strong> RUSTAMPUR SAKET KHA SHREE DHAM; COLONY Aligarh
                </p>
              </div>

              {/* <div className="flex items-start mb-6">
                <Building className="text-orange-500 w-8 h-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <strong>Corp Office:</strong> RUSTAMPUR SAKET KHA SHREE DHAM; COLONY Aligarh
                </p>
              </div> */}

              <div className="flex items-start mb-6">
                <Mail className="text-orange-500 w-8 h-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <strong>Mail Us:</strong>{" "}
                  <a href="mailto:info@finetmtplus.com" className="text-blue-500 hover:underline">
                    info@finetmtplus.com
                  </a>
                </p>
              </div>

              <div className="flex items-start">
                <PhoneCall className="text-orange-500 w-8 h-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <strong>Phone:</strong> +91 8447490707
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-10">
              <h3 className="text-3xl font-semibold mb-8">Send a Message</h3>
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name ? "border-red-500 focus:ring-red-200" : "focus:ring-orange-500"
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? "border-red-500 focus:ring-red-200" : "focus:ring-orange-500"
                      }`}
                      placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-600 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.phone ? "border-red-500 focus:ring-red-200" : "focus:ring-orange-500"
                    }`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="mt-6">
                  <label className="block text-gray-600 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Subject"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-600 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message ? "border-red-500 focus:ring-red-200" : "focus:ring-orange-500"
                    }`}
                    placeholder="Your Message"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition w-full flex items-center justify-center ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactUs;