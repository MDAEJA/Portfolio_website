import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
// bg-gradient-to-b from-gray-800 to-gray-900

function Hero() {
  return (
    <section className="relative bottom-1 bg-gradient-to-b from-gray-800 to-gray-900   text-white dark:bg-  h-screen flex items-center justify-center">
      <div className="text-center px-4 md:px-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <p className="text-2xl mb-8 text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
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

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://github.com/MDAEJA" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-200 dark:hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/md-aejaz-ahmed-a3523329a" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 dark:hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 dark:hover:text-blue-500">
            <FaTwitter />
          </a>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      <motion.div
  className="absolute bottom-4 w-screen bg-gray-800 dark:bg-gray-900 overflow-hidden px-4"
>
  <motion.p
    className="text-rose-400 dark:text-rose-600 text-center whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl p-2 sm:p-3"
    animate={{ x: ["100%", "-100%"] }} // Moves text from right to left
    transition={{
      repeat: Infinity, // Infinite loop
      duration: 10,     // Time to complete one full movement
      ease: "linear",   // Smooth and consistent speed
    }}
  >
    Welcome to My Portfolio! Explore projects, skills, and more. Let's collaborate to create something amazing!
  </motion.p>
</motion.div>




    </section>
  );
}

export default Hero;
