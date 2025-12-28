import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-20 px-6 min-h-screen bg-gradient-to-r from-red-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-[#FF0019] mb-6 playfair">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to donate blood? Fill out the form below and
            our team will reach out to you.
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0019]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0019]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0019]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF0019] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#FF0019]" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#FF0019]" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FF0019]" />
              <span>support@raktobondhu.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <FaFacebook
                size={25}
                className="text-[#FF0019] hover:text-red-700 cursor-pointer transition"
              />
              <FaTwitter
                size={25}
                className="text-[#FF0019] hover:text-red-700 cursor-pointer transition"
              />
              <FaLinkedin
                size={25}
                className="text-[#FF0019] hover:text-red-700 cursor-pointer transition"
              />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://i.ibb.co.com/RGN4HqT0/Chat-GPT-Image-Dec-28-2025-05-06-52-PM.png"
            alt="Blood donation"
            className="w-[80%] object-cover"
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-0 right-0 w-1/4 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle cx="250" cy="250" r="250" fill="#FF0019" />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
