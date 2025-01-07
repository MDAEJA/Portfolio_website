import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Contact() {
  // Manage the theme state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on button click
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Store theme preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Header />

      {/* Contact Section */}
      <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-800 to-gray-900'} text-gray-200 dark:text-gray-100 flex flex-col justify-center items-center my-2`}>
        <div className="max-w-4xl w-full">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            Contact Us
          </motion.h1>

          {/* Introduction Section */}
          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
              <Typewriter
                words={['We are here to help!', 'Get in touch with us.', 'Have questions? Ask away!']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="text-lg leading-8 mb-4 text-center">
              If you have any questions or want to get in touch, feel free to drop us a message. We would love to hear from you!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r  from-teal-500 to-blue-500 text-white rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400 border-2 border-red-500 border-solid"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Contact CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* <p className="text-lg">We will get back to you as soon as possible!</p> */}
             <motion.p
                className="w-screen text-rose-400 dark:text-rose-600 text-center whitespace-nowrap text-base sm:text-lg md:text-xl p-3"
                animate={{ x: ["100%", "-100%"] }} // Moves text from right to left
                transition={{
                  repeat: Infinity, // Infinite loop
                  duration: 10,     // Time to complete one full movement
                  ease: "linear",   // Smooth and consistent speed
                }}
              >
                Welcome to My Portfolio!,We will get back to you as soon as possible!
              </motion.p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
