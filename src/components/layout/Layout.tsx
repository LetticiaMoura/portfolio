import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return(
        <section>
            <Navbar />

            <div id="/">
                <Home />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="contact">
                <Contact />
            </div>

            <Footer />
        </section>
    )
}