import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';

function App() {
  return (
    <div className="w-screen px-16">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
