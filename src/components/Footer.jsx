import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import x from "../assets/x.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Discover a world where talent meets opportunity. Our freelance
              marketplace connects skilled professionals with clients seeking
              quality work and creative solutions. Empowering freelancers to
              grow, earn, and shine globally.
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
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-500 transition">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition">
                    Advertisement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
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
            <div className="join mt-4">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered bg-gray-500 join-item"
              />
              <button className="btn btn-primary join-item">Search Now</button>
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
