import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 h-[12rem] mt-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Edutech. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-blue-400 transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
