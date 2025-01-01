import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function About() {
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

      {/* About Section */}
      <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-800 to-gray-900'} text-gray-200 dark:text-gray-100 flex flex-col justify-center items-center my-2`}>
        <div className="max-w-4xl w-full">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
         <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
                      <Typewriter
                        words={['I am a Web Developer', 'I build amazing websites', 'Let\'s work together!']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </p>
            <p className="text-lg leading-8 mb-4 text-center">
              Hi, I'm MD AEJAZ AHMED, a passionate web developer with extensive experience in creating dynamic, responsive, and user-centric websites.
            </p>
            <p className="text-lg leading-8 text-center">
              With a strong background in both front-end and back-end development, I thrive on turning ideas into seamless, scalable applications.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* <h2 className="text-2xl font-semibold text-center mb-4">Skills & Technologies</h2> */}
            <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
                      <Typewriter
                        words={['Skills', 'Technology', 'Let\'s work together!']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold">React</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Node.js</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">MongoDB</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Tailwind CSS</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Express</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">JavaScript</h3>
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {/* <h2 className="text-2xl font-semibold text-center mb-4">Highlighted Projects</h2> */}
            <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
                      <Typewriter
                        words={['Highlighted Projects', 'I build amazing Projects', 'Let\'s work together!']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Social Pedia Web</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  A social media platform built with React and Node.js that allows users to connect, share content, and interact with others.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Netflix Clone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  A Netflix clone built with React and Node.js, featuring a streaming service interface with user authentication and video playback.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* Dark Mode Toggle */}
      {/* <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-teal-500 text-white focus:outline-none"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </>
  );
}

export default About;
