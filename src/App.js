import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

AOS.init();

function App() {
  return (
    <div className="relative">
      {/* Fixed radial gradient background */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `radial-gradient(circle at bottom left,rgb(18, 54, 54) 20%,rgb(2, 26, 26) 80%)`,
        }}
      ></div>

      <div className="App text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Main Section */}
        <section className="min-h-screen flex items-center justify-center">
          <Main />
        </section>
      </div>
    </div>
  );
}

export default App;
