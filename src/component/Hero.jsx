import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

function Hero() {
  // Trigger fireworks
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

  return (
    <>
    <section className="relative bottom-0 bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center px-4 md:px-0">
        {/* Profile Picture */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png" // Replace with the actual path of your image
          alt="Profile"
          className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-teal-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <p className="text-2xl mb-8 text-red-600 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-50">
          <Typewriter
            words={[
              "I am a Web Developer",
              "I build amazing websites",
              "Let's work together!",
            ]}
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
          <a
            href="https://github.com/MDAEJA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-aejaz-ahmed-a3523329a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400"
          >
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
    
    </section>

    {/* About Me Section */}
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 w-full  bg-gray-900">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            I am a passionate web developer with experience in building full-stack applications using modern technologies like React, Node.js, and MongoDB. I love to create engaging user experiences and solve complex problems. Let's collaborate to bring your ideas to life!
          </p>
        </div>
      </section>

       {/* Skills Section */}
       <section className="py-12 sm:py-16 bg-gray-800 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <i className="fab fa-react text-6xl sm:text-7xl text-blue-500"></i>
              <p className="text-white mt-2">React</p>
            </div>
            <div className="text-center">
              <i className="fab fa-node-js text-6xl sm:text-7xl text-green-500"></i>
              <p className="text-white mt-2">Node.js</p>
            </div>
            <div className="text-center">
              <i className="fab fa-js-square text-6xl sm:text-7xl text-yellow-400"></i>
              <p className="text-white mt-2">JavaScript</p>
            </div>
            <div className="text-center">
              <i className="fab fa-html5 text-6xl sm:text-7xl text-orange-500"></i>
              <p className="text-white mt-2">HTML5</p>
            </div>
            <div className="text-center">
              <i className="fab fa-css3-alt text-6xl sm:text-7xl text-blue-600"></i>
              <p className="text-white mt-2">CSS3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 w-full bg-gray-900">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-4">
            Have a project in mind? I'd love to hear from you! Feel free to reach out, and let's discuss how we can collaborate.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
    
  );
}

export default Hero;
