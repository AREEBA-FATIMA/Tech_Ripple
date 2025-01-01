"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "areeba_fatima", // Service ID
        "areeba-fatima", // Template ID
        formData, // Data to send
        "2-ffOv2-Xbt1BVHtX" // Public key
      )
      .then(
        () => { // Removed 'response'
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>

        <div className="lg:flex lg:space-x-40 mb-12">
          {/* Left Section: Contact Details */}
          <div className="flex-1 text-center lg:text-left mb-20 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-4">
              Feel free to reach out to us for any inquiries or feedback. We would love to hear from you.
            </p>
            <h3 className="text-xl font-semibold mb-2">Contact Info:</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <a href="mailto:support@techripple.com" className="hover:underline">
                  support@techripple.com
                </a>
              </li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Location: 123 Tech Street, Innovation City</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=..."
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex-1 max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 text-white rounded-md focus:outline-none bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 rounded-md focus:outline-none bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 mt-2 text-white rounded-md focus:outline-none bg-gray-700"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
