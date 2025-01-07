import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

function Blog() {
  // Manage the theme state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on button click
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
      const duration = 5 * 1000; // 5 seconds
      const animationEnd = Date.now() + duration;
  
      const firework = () => {
        const particleCount = 50;
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2, // Slightly above the viewport
          },
        });
  
        if (Date.now() < animationEnd) {
          requestAnimationFrame(firework);
        }
      };
  
      firework();
    }, []);

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

      {/* Blog Section */}
      <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-800 to-gray-900'} text-gray-200 dark:text-gray-100 flex flex-col justify-center items-center my-2`}>
        <div className="max-w-4xl w-full">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            Blog
          </motion.h1>

          {/* Blog Introduction Section */}
          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
              <Typewriter
                words={['My Blog', 'Web Development Insights', 'Tech Articles']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="text-lg leading-8 mb-4 text-center">
              Welcome to my blog where I share insights about web development, coding tutorials, and the latest trends in the tech industry.
            </p>
            <p className="text-lg leading-8 text-center">
              Stay tuned for articles that will help you enhance your skills and stay up-to-date with the evolving world of web development.
            </p>
          </motion.div>

          {/* Blog Posts Section */}
          <motion.div
            className={`bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-6 transition duration-300 rounded-lg shadow-lg p-6 sm:p-8 mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-2xl mb-8 text-center text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
              <Typewriter
                words={['Latest Posts', 'Tech Tutorials', 'Coding Best Practices']}
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
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Building Responsive Websites with Tailwind CSS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Learn how to build fast, responsive, and modern websites using Tailwind CSS. This tutorial will guide you through the core concepts and utilities of Tailwind.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Introduction to React.js for Beginners</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  A beginner-friendly guide to understanding React.js, its core concepts, and how you can start building interactive web applications using React.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Why Node.js is a Game Changer for Back-End Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Explore the power of Node.js for back-end development and how it has revolutionized the way we build scalable and efficient server-side applications.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-500 rounded-sm text-center">Understanding MongoDB: A NoSQL Database</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Dive deep into MongoDB, one of the most popular NoSQL databases, and learn how it differs from traditional relational databases while offering flexible data modeling.
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
    </>
  );
}

export default Blog;
