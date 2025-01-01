import React, { useState ,useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('theme') === 'dark';
        if (darkMode) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
        }
      }, []);

      const[menu,setMenu] = useState(false);

      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      };
  return (
    <>
     <header className={` ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-teal-500 to-blue-500' }  fixed w-screen dark:bg-gray-900 text-white  p-2 rounded-lg font-serif top-0 z-10 pe-5 mb-5`}>
    
      <div className="container  mx-auto  flex justify-between items-center">
        
        <h1 className={`text-xl font-bold font-serif hover:text-white hover:underline ${isDarkMode ? 'text-white' : 'text-blue-800'} hover:bg-blue-300 p-2 rounded-md cursor-pointer`}>My Portfolio</h1>
        
        <nav className="hidden md:flex space-x-6">
            <Link to={'/'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Home</span>  </Link>
            <Link to={'/about'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>About</span>  </Link>
            <Link to={'/projects'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Projects</span>  </Link>
            <Link to={'/blog'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Blog</span>  </Link>
            <Link to={'/contact'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Contact</span>  </Link>
            <Link to={'/resume'}> <span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Resume</span>  </Link>

        </nav>
        <div className="flex items-center space-x-4">

        <button
            onClick={toggleDarkMode}
            className={`focus:outline-none  p-2 rounded-md text-white`}
          >
            <img
              src={isDarkMode ? "https://cdn-icons-png.flaticon.com/128/9068/9068785.png" : "https://cdn-icons-png.flaticon.com/128/12301/12301351.png"}
              alt={isDarkMode ? "Light Mode" : "Dark Mode"}
              className={`w-8 h-8 text-white`}
            />
          </button>

         

          <div className="md:hidden">
            <button
              type="button"
              className="focus:outline-none text-white"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
                {
                    menu ?  <FiMenu  className='w-8 h-8'  onClick={()=>{setMenu(false)}}/> : <FiX   className='w-8 h-8' onClick={()=>{setMenu(true)}}/>
                }
                
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden id="mobile-menu ${menu ? 'hidden' : 'block'}`}>
        <nav className="flex flex-col justify-start space-y-4 mt-4">
            <Link to={'/'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Home</span></li>  </Link>
            <Link to={'/about'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>About</span></li>  </Link>
            <Link to={'/projects'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Projects</span></li>  </Link>
            <Link to={'/blog'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Blog</span></li>  </Link>
            <Link to={'/contact'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Contact</span></li>  </Link>
            <Link to={'/resume'}> <li><span className={`hover:underline hover:p-2 hover:rounded-md hover:bg-red-600`}>Resume</span></li>  </Link>
       
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;
