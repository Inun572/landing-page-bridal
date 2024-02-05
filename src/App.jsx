import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <main className="px-8 md:px-16">
        <About />
        <Gallery />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
