import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <div>
              
    
        <h1 className="text-3xl  underline">
          Hello world!
        </h1>
      </div>
      
    </>
  )
}

export default App
