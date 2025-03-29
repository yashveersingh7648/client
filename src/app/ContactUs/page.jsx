"use client";
import { useState } from "react";
import { MapPin, Building, Mail, PhoneCall, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form handling logic (API call) here
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-lg text-orange-500 font-semibold">Get In Touch</h4>
          <h2 className="text-5xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4 text-lg">
            In case of any queries, share your details below. One of our team members will get back to you shortly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-10">
            <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>

            <div className="flex items-center mb-6">
              <MapPin className="text-orange-500 w-8 h-8 mr-4" />
              <p className="text-lg text-gray-700">
                <strong>Factory:</strong> G T Road, Near New Vegetable Market, Ambala
              </p>
            </div>

            <div className="flex items-center mb-6">
              <Building className="text-orange-500 w-8 h-8 mr-4" />
              <p className="text-lg text-gray-700">
                <strong>Corp Office:</strong> 669, 1st Floor, Sector -82, JLPL, Mohali 140308
              </p>
            </div>

            <div className="flex items-center mb-6">
              <Mail className="text-orange-500 w-8 h-8 mr-4" />
              <p className="text-lg text-gray-700">
                <strong>Mail Us:</strong>{" "}
                <a href="mailto:info@tmtplus.co.in" className="text-blue-500 hover:underline">
                  info@tmtplus.co.in
                </a>
              </p>
            </div>

            <div className="flex items-center">
              <PhoneCall className="text-orange-500 w-8 h-8 mr-4" />
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong> +91 8607999555, +91 9053912349
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-10">
            <h3 className="text-3xl font-semibold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-600">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-600">Subject</label>
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
                <label className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Message"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition w-full flex items-center justify-center"
                >
                  <Send className="mr-2" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
