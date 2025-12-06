import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
      </main>
    </div>
  );
}

export default App;