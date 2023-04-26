import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <SocialLinks />
      
    </>
  )
}

export default App
