import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;