
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

function App() {

  return (

    <div className='scroll-smooth'>

      <div id='HOME'>

        <Navbar />
        
        <div className="bg-transparent h-px pg-1 bg-orange-light"/>

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
