import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const htmlProjects = [
    {
      name: "SocialPidia App",
      gitHub: "https://github.com/MDAEJA/SocialPedia_Frontend_Appliction.git",
      projectUrl: "https://social-pedia-frontend-appliction.vercel.app/",
      skills: "React, Redux Toolkit, Tailwind CSS, Node.js, MongoDB",
      description: "A full-stack social media app with features like posts, likes, comments, and user profiles. Includes dark mode  design.",
    },
    {
      name: "Netflix Clone",
      gitHub: "https://github.com/MDAEJA/Netflix_App.git",
      projectUrl: "https://dazzling-sprinkles-6a38c5.netlify.app/?authuser=0",
      skills: "React, MERN Stack, Material-UI, Firebase",
      description: "A Netflix-like application to stream trailers with an interactive UI, search functionality, and a responsive layout.",
    },
    {
      name: "Hospital Management System",
      gitHub: "https://github.com/MDAEJA/Hospital_Management_Full_stack_project.git?authuser=0",
      projectUrl: "https://tiny-marigold-4848b3.netlify.app/",
      skills: "React, Node.js, Express, MongoDB, Tailwind CSS",
      description: "A comprehensive hospital management system to manage doctors, patients, and appointments with secure authentication.",
    },
    {
      name: "Frontend Mini Challenges",
      gitHub: "https://github.com/MDAEJA/Assigment_react_mini-project.git",
      projectUrl: "https://stalwart-dieffenbachia-63da4f.netlify.app/?authuser=0",
      skills: "Javascript ,ReactJs,CSS",
      description: "Practicing these questions helps you improve your time management skills, allowing you to efficiently allocate time to different parts of the problem-solving process.",
    },
    {
      name: "Pokedex",
      gitHub: "https://github.com/MDAEJA/Assigment_pokemon_App.git",
      projectUrl: "https://scintillating-pie-1d59d6.netlify.app/",
      skills: "Javascript ,ReactJs,CSS",
      description: "A Netflix-like application to stream trailers with an interactive UI, search functionality, and a responsive layout.",
    },
    {
      name: "Employee Details",
      gitHub: "https://github.com/MDAEJA/Hospital_Management_Full_stack_project.git?authuser=0",
      projectUrl: "https://peppy-choux-4dcc76.netlify.app/",
      skills: "React, Node.js, Express, MongoDB, Tailwind CSS",
      description: "CRUD operations (Create, Read, Update, Delete) are fundamental to managing data in any application, and they can be efficiently implemented using the MERN stack (MongoDB, Express, React, Node.js). Here's a breakdown of how each operation works in the MERN stack:" 
    },
    {
      name: "Google Drive",
      gitHub: "https://github.com/MDAEJA/Assigment_react_google_drive.git",
      projectUrl: "https://classy-douhua-412b07.netlify.app/",
      skills: "Javascript,ReactJs,Firebase",
      description: "Google Drive Clone: A cloud storage application built using React and Firebase, enabling secure file upload, organization, and real-time access with a user-friendly interface.",
    },
    {
      name: "Password Generator Tool",
      gitHub: "https://github.com/MDAEJA/Assigment_react_password_generator.git",
      projectUrl: "https://mdaeja.github.io/Assigment_react_password_generator/",
      skills: "Javascript,ReactJs,Css",
      description: "Password Generator: A React-based tool to create secure, customizable passwords with real-time strength indicators and a user-friendly interface.",
    },
    {
      name: "My Budget Planner",
      gitHub: "https://github.com/MDAEJA/Assigment_react_budget_project.git",
      projectUrl: "https://resilient-sprinkles-989aa4.netlify.app/",
      skills: "Javascript,ReactJs,Css",
      description: " creating a Budget Planner Website using ReactJS and the Context API. Managing personal finances is crucial, and this website will provide users with a user-friendly platform to set their budgets, track expenses, and monitor their spending. By leveraging the Context API in React, we'll efficiently manage state across different components, making the budget planning process intuitive and efficient.",
    },
    {
      name: "Add To Card ",
      gitHub: "https://github.com/MDAEJA/Assigment-react_add_item_by_reducer.git",
      projectUrl: "https://frolicking-dolphin-b39096.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "Add to Cart: A seamless React-based feature for managing product selections with real-time updates and an intuitive user experience.",
    },
    {
      name: "Text Editor ",
      gitHub: "https://github.com/MDAEJA/Assigment_react_text_utils.git",
      projectUrl: "https://monumental-sawine-498c4b.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "In this project, You will embark on the journey of creating a robust Text Editor Website using ReactJS and state management with useReducer. A text editor is a versatile tool used for writing, formatting, and editing text content. By building a text editor with useReducer, we can efficiently manage complex state changes and implement various features that enhance the user's editing experience.",
    },
    {
      name: "Geeksfood ",
      gitHub: "https://github.com/MDAEJA/Assigment_react_router_project.git",
      projectUrl: "https://rad-horse-7ef88d.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: " we are now taking a step further by implementing dynamic routing to enhance the user experience. With dynamic routing, when a user clicks on any food card, they will be redirected to a new page that displays the recipe and ingredients of that specific food item. Additionally, we will combine all existing pages for a more streamlined user interface.",
    },
    {
      name: "Text Translate",
      gitHub: "https://github.com/MDAEJA/Assigment_react_text_translate.git",
      projectUrl: "https://clever-monstera-33f58b.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "The Universal Language Translator is an innovative and user-friendly web application designed to seamlessly translate text from one language to another. This project employs an API-based approach to provide accurate and efficient language translation services.",
    },
    {
      name: "AI Image Generator",
      gitHub: "https://github.com/MDAEJA/Assigment_react_image_generator.git",
      projectUrl: "https://silver-cannoli-fc05fc.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "Develop an AI-powered image generation application using ReactJS that integrates with the Hugging Face API. The application should allow users to generate images based on specific text input, providing an interactive and visually engaging experience.",
    },
    {
      name: "Quiz App",
      gitHub: "https://github.com/MDAEJA/Assigment_react_quiz_app.git",
      projectUrl: "https://quiz-app-jet-two.vercel.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "-Build a Quiz App that retrieves quiz questions from the OpenDB API using the fetch function.Implement a countdown timer of 5 seconds for each question.Provide four answer options for each question.Display the final score to the user at the end of the quiz.",
    },
    {
      name: "Progess Bar",
      gitHub: "https://github.com/MDAEJA/Assigment_react_progress_bar.git",
      projectUrl: "https://animated-bavarois-84406d.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "Develop a Progress Bar user interface component using ReactJS.",
    },
    {
      name: "Groocery Budget",
      gitHub: "https://github.com/MDAEJA/Assigment-react_grocery.git",
      projectUrl: "https://resplendent-dodol-2c4e5f.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: " LocalTasker is a lightweight and efficient ToDo application designed to assist users in managing their tasks seamlessly. This application not only allows users to create, mark as completed, and delete tasks but also utilizes local storage to persistently store tasks, ensuring data persistence between sessions",
    },
    {
      name: "Shopping Cart",
      gitHub: "https://github.com/MDAEJA/Assigment_react_shopping_cart.git",
      projectUrl: "https://mdaeja.github.io/Assigment_react_shopping_cart/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "The E-commerce Cart Management System is a web application designed to simulate a shopping cart experience. It allows users to add products to their cart, adjust quantities, view the total cost, and perform essential actions such as clearing the entire cart or removing specific products.",
    },
    {
      name: "Lorem Generator",
      gitHub: "https://github.com/MDAEJA/Assigment_react_lorem_project.git",
      projectUrl: "https://scintillating-figolla-6205c6.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "The Lorem Generator is a web-based application designed to generate placeholder text, often known as Lorem Ipsum,for various design and content purposes. This tool allows users to specify the number of paragraphs they need and, with a simple click of a button, instantly generates the desired amount of lorem text.",
    },
    {
      name: "Static Color-movie picker",
      gitHub: "https://github.com/MDAEJA/Assigment_react_props_clr_movies.git",
      projectUrl: "https://usingprops.netlify.app/",
      skills: "Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description:"In this project, we will build a dynamic ReactJS web page that utilizes JSON data to store and pass information to various components. JSON (JavaScript Object Notation) is a lightweight data interchange format that allows us to organize and manage structured data efficiently. In this step, you will create JSON data that includes image URLs, movie names, release years, durations in minutes, genres, and movie descriptions .By using JSON, you can centralize our data and seamlessly pass it to different components within our React application by using Props.",
    },
    {
      name: "Static Family wellness",
      gitHub: "https://github.com/MDAEJA/Assigment_react_family_wellness.git",
      projectUrl: "https://65e9e1eaf1ae542b6643287d--famikywellness.netlify.app/",
      skills:"Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css", 
      description: "In this project, You will create a dynamic web page using ReactJS, divided into three crucial components: Header, Body Section, and Footer Section. We'll utilize JSX (JavaScript XML) to define the structure of these components and follow best practices by using Create React App for project setup.",
    },
    {
      name: "Learn Web Developer",
      gitHub: "https://github.com/MDAEJA/Assigment_React_project_1.git",
      projectUrl: "https://mdaeja.github.io/Assigment_React_project_1/",
      skills:"Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
       description:"In this project, You will  create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.",
    },
    {
      name: "Learn Web Developer",
      gitHub: "https://github.com/MDAEJA/Assigment_React_project_1.git",
      projectUrl: "https://mdaeja.github.io/Assigment_React_project_1/",
      skills:"Javascript,ReactsJS:- A JavaScript library for building interactive and dynamic user interfaces.,Css",
      description: "In this project, You will  create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.",
    },
    {
      name: "Mct",
      gitHub: "https://github.com/MDAEJA/Assigment_MCT-4_TEAM_02.git",
      projectUrl: "https://mdaeja.github.io/Assigment_MCT-4_TEAM_02/",
      skills:"Html,css Javascript ",
      description: "In this project, You will  create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.",
    },
    {
      name: "Age Calculator",
      gitHub: "https://github.com/MDAEJA/Assigment_MCT-4_TEAM_02.git",
      projectUrl: "https://mdaeja.github.io/Assigment_calculate_Age_repo/",
      skills:"Html,css Javascript" ,
      description: "In this project, You will  create a straightforward web page using Javascript with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.",
    },
    {
      name: "Emoji Application",
      gitHub: "https://github.com/MDAEJA/Assigment_Emoji_repo.git",
      projectUrl: "https://mdaeja.github.io/Assigment_Emoji_repo/",
      skills:"Html,css Javascript" ,
      description: "In this project, You will  create a straightforward web page using Html Css and Javascript Upon loading the window, fetch and display all the emoji data from an external source (e.g., emoji.js file).",
    },
    {
      name: "Leader Board Application",
      gitHub: "https://github.com/MDAEJA/Assigment_Emoji_repo.git",
      projectUrl: "https://mdaeja.github.io/Assigment_leaderBoard_repo/",
      skills:"Html,css Javascript" ,
      description: "In this project, You will  create a straightforward web page using Html Css and Javascript, You need to create a counter app that increases the count by 1 when pressing the + button, decreases the count by 1 when pressing the - button, and resets the count value to 0 by pressing the reset button",
    },
    {
      name: "Geekster Pok Application",
      gitHub: "https://github.com/MDAEJA/Assigment_geeks_pokemon_repo.git",
      projectUrl: "https://mdaeja.github.io/Assigment_geeks_pokemon_repo/",
      skills:"Html,css Javascript" ,
      description: "In this project, You will  create a straightforward web page using Html Css and Javascript, You have to create a 'GeeksterPok' project that displays a list of Pokémon. There will be a 'Type' button with choices like grass, fire, etc. When you click the 'Filter by Type' button, it will show Pokémon of the selected type. Clicking the 'Reset' button will reset and display all Pokémon.",
    },

  
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-10 min-h-screen">
      

        <div className="container mx-auto px-4 overflow-hidden">
           <motion.p
              className="text-rose-400 w-screen dark:text-rose-600 text-center whitespace-nowrap text-base sm:text-lg md:text-xl p-2 my-5"
              animate={{ x: ["100%", "-100%"] }} // Moves text from right to left
              transition={{
                repeat: Infinity, // Infinite loop
                duration: 10,     // Time to complete one full movement
                ease: "linear",   // Smooth and consistent speed
              }}
            >
              "Welcome to My Portfolio! Explore my SocialPidia App, Netflix Clone, and Hospital Management System projects. Let's collaborate and create impactful solutions together!"
            </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {htmlProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-400 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <p className="text-sm text-gray-300 mb-4">
                    <span className="font-medium text-teal-300">Skills:</span> {project.skills}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-100 hover:text-teal-400 flex items-center space-x-1"
                    >
                      <FaGithub className="text-xl" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-50 hover:text-blue-400 flex items-center space-x-1"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
