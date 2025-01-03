import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievements";
import Footer from "./Footer";
import Certifications from "./Certifications";
// import Contact from "./Contact";

const Main = () => (
  <main id="main">
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Achievements />
    <Education />
    {/* <Contact /> */}
    <hr />
    <Footer />
  </main>
);

export default Main;
