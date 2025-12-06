import Navbar from "./components/Navbar"
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;