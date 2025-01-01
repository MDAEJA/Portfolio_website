import React from 'react'

function Resume() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">MD AEJAZ AHMED</h1>
            <p className="text-lg text-gray-600">Full Stack Developer | MERN Stack Enthusiast</p>
            <p className="text-sm text-gray-500 mt-2">
              <a href="mailto:mdaejazahmed0123@gmail.com" className="text-blue-600">mdaejazahmed0123@gmail.com</a>
              <span className="mx-2">|</span>
              <a href="tel:+917338060372" className="text-blue-600">+91-7338060372</a>
            </p>
          </div>
          <hr />

          {/* Certifications & Internships Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">Certifications | Internships</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Geekster Coding Bootcamp - Solved 200+ DSA questions</li>
              <li>Worked on projects like Netflix Teaser Streaming System</li>
              <li>Implemented CRUD (Create, Read, Update, Delete) features</li>
              <li>Collaborated with cross-functional teams to enhance system functionality</li>
              <li>Integrated Material-UI to ensure consistent design patterns and reduce development time by 50%</li>
              <li>Optimized database queries for better performance</li>
            </ul>
            <hr />
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
              <div>
                <p><span className="font-semibold text-gray-800">Languages:</span> Java, JavaScript, HTML, CSS, SQL</p>
                <p><span className="font-semibold text-gray-800">Frameworks:</span> ReactJS, Redux, Node.js, Express.js, Tailwind</p>
              </div>
              <div>
                <p><span className="font-semibold text-gray-800">Tools:</span> Git, GitHub, Docker, Postman</p>
                <p><span className="font-semibold text-gray-800">Databases:</span> MongoDB, MySQL</p>
              </div>
            </div>
            <hr />
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">Projects</h2>
            <div className="space-y-8">
              {/* Project 1 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 underline">SocialPedia Application</h3>
                <ul className="text-gray-600 ">
                  <li className='p-2'> Developed a modern and interactive Social Media Platform to connect users, share content, and foster engagement. Built with React.js, Node.js, and MongoDB, SocialPedia offers a seamless and scalable solution with advanced features for secure and user-friendly interaction.Utilised React.js, Node.js, and MongoDB for a high-performance, scalable solution, hosted on Vercel.</li>
                  <li className='p-2'><span className="font-semibold underline">Key Features:</span> Integrated JWT for secure login and user management.Users can create posts, like, comment, and share content in real-time.Add friends, view their activity, and engage effortlessly.Designed with Material-UI (MUI) for a clean, modern look and optimal performance.Toggle between light and dark themes for a personalized experience.Notifications for likes, comments, and friend requests ensure users stay updated.
                  </li>
                  <li className='p-2'><span className="font-semibold underline">Tech Stack:</span> React.js, Material-UI, Node.js, Express.js, MongoDB, JWT, GitHub</li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                  <a href="https://github.com/MDAEJA/SocialPedia_Frontend_Appliction.git" className="text-blue-600">GitHub Repo</a>
                  <a href="https://social-pedia-frontend-appliction.vercel.app/" className="text-blue-600">Live Demo</a>
                </div>
              </div>
              <hr />
              {/* Project 2 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 underline">Netflix Teaser Streaming System</h3>
                <ul className="text-gray-600 ">
                  <li className='p-2'> Developed a dynamic web application for streaming movie trailers with a user experience similar to Netflix. The platformfeatures an intuitive interface for discovering and watching trailers, using the MVC architecture for readable/Modular code.</li>
                  <li className='p-2'><span className="font-semibold underline">Key Features:</span> Implemented secure authentication with JWT, robust search and filter functionalities, and a dynamic “See More” button for trailer discovery.Used MongoDB for efficient data management and deployed the application on Netlify.
                  </li>
                  <li className='p-2'><span className="font-semibold underline">Tech Stack:</span> React.js, Material-UI, Node.js, Express.js, MongoDB, JWT, GitHub</li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                  <a href="https://github.com/MDAEJA/Netflix_App" className="text-blue-600">GitHub Repo</a>
                  <a href="https://dazzling-sprinkles-6a38c5.netlify.app/" className="text-blue-600">Live Demo</a>
                </div>
              </div>
              <hr />
              {/* Project 3 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 underline">Hospital Management System</h3>
                <ul className="text-gray-600 ">
                  <li className='p-2'> Developed a comprehensive Hospital Management System to streamline patient and doctor management, appointment scheduling, and more. Utilised React.js, Node.js, and MongoDB for a high-performance, scalable solution, hosted on Netlify.</li>
                  <li className='p-2'><span className="font-semibold underline">Key Features:</span>:Implemented JWT for secure authentication and authorization. Developed patient and doctor management features, including registration and appointment scheduling. Used MongoDB for efficient data handling and deployed the application on Netlify for scalability.
                  </li>
                  <li className='p-2'><span className="font-semibold underline">Tech Stack:</span> React.js, Material-UI, Node.js, Express.js, MongoDB, JWT, GitHub</li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                  <a href="https://github.com/MDAEJA/Backend_Hospital_Management" className="text-blue-600">GitHub Repo</a>
                  <a href="https://tiny-marigold-4848b3.netlify.app/" className="text-blue-600">Live Demo</a>
                </div>
              </div>
            </div>
            <hr />
          </section>

          {/* Education Section */}
          <section className="mb-6 md:mb-8">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 underline">
    Education
  </h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-gray-600 text-sm md:text-base">
      <thead>
        <tr>
          <th className="border-b py-2 px-4 text-left">Degree</th>
          <th className="border-b py-2 px-4 text-left">Institution</th>
          <th className="border-b py-2 px-4 text-left">CGPA</th>
          <th className="border-b py-2 px-4 text-left">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b py-2 px-4">B.E.</td>
          <td className="border-b py-2 px-4">VTU</td>
          <td className="border-b py-2 px-4">7.4</td>
          <td className="border-b py-2 px-4">2021</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


          {/* Download Resume Button */}
          <div className="flex justify-center mt-6">
            <a
              href='/Aejaz_Ahmed_Resume.pdf'  // Replace with actual path
              download="MD_Aejaz_Ahmed_Resume.pdf"
              className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
