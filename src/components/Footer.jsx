import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import x from '../assets/x.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are committed to providing the best services to our customers.
              Our mission is to deliver high-quality products with exceptional
              support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: support@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 1234 Street, City, Country</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                aria-label="Twitter"
              >
             <img className="w-5 h-5 rounded-full" src={x}></img>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
