import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './component/Header'
import Home from './page/Home'
import About from './page/About'
import Blog from './page/Blog'
import Contact from './page/Contact'
import Projects from './page/Projects'
import Resume from './page/Resume'

function App() {
 
  return (
   <>
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/resume' element={<Resume/>}/>
   </Routes>

   </BrowserRouter>
   </>
  )
}

export default App
