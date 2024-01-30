
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

import './App.css'

function App() {

  return (

    <div>

      <div id='HOME'>

        <Navbar />

        <Home />

      </div>

      <div id='SKILLS'>
      
        <Skills />

      </div>

      <div id='PROJECTS'>
      
        <Projects />
        
      </div>

      <div id='CONTACT'>
      
        <Contact />
        
      </div>

      <Footer />

    </div>

  )
}

export default App
