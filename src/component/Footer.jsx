import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300">
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 dark:hover:text-teal-400 transition duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 dark:hover:text-blue-500 transition duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-aejaz-ahmed-a3523329a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 dark:hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/MDAEJA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 dark:hover:text-gray-500 transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm mt-4">
            Designed and Developed by <span className="font-semibold text-teal-200 dark:text-teal-400 hover:underline">Md AEJAZ AHMED</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
