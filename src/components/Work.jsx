import PortfolioItem from "./utils/PortfolioItem";

const Work = () => {
  return (
    <section id="work" className="py-24 bg-zinc-950 select-none">
      <div className="container mx-auto px-6">
        
        {/* Main Header Component */}
        <div className="mb-24 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-3 tracking-tight">
            Selected <span className="font-semibold">Works</span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed">
            A curated showcase of high-end vertical content, custom motion design, and cinematic documentaries.
          </p>
        </div>

        {/* 1. SECTION: VERTICAL & SHORTS (NOW FIRST) */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              01 // Vertical Content & High-Retention Shorts
            </h3>
            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-3"></div>
          </div>
          
          {/* Grid optimized for 3 Vertical Shorts in one clean line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto w-full">
            <PortfolioItem videoSrc="https://www.youtube.com/embed/nQx1rrC1yMI?rel=0" />
            <PortfolioItem videoSrc="https://www.youtube.com/embed/YE3i_6IdBJA?rel=0" />
            <PortfolioItem videoSrc="https://www.youtube.com/embed/L8EPqXjf7hM?rel=0" />
          </div>
        </div>

        {/* 2. SECTION: MOTION GRAPHICS */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              02 // Advanced Motion Graphics & Design
            </h3>
            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-3"></div>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/e2lex2ymVWw?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Long Form Motion Graphics"
              ></iframe>
            </div>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/c8m49GeExGQ?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="16:9 Motion Graphics"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 3. SECTION: DOCUMENTARY EDITS */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              03 // Cinematic & Documentary Edits
            </h3>
            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-3"></div>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/chjIRbrT3BI?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Documentary Project 1"
              ></iframe>
            </div>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/BFzmUGg9BnU?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Documentary Project 2"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
