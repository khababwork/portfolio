import PortfolioItem from "./utils/PortfolioItem";

const Work = () => {
  return (
    <section id="work" className="py-24 bg-zinc-950 select-none">
      <div className="container mx-auto px-6">

        {/* Main Header */}
        <div className="mb-24 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-3 tracking-tight">
            Selected <span className="font-semibold">Work</span>
          </h2>

          <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed">
            Short-form content, motion design, and story-driven video crafted
            to make brands and creators stand out.
          </p>
        </div>

        {/* 01. SHORT-FORM CONTENT */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              01 // Short-Form Content
            </h3>

            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Engaging edits for TikTok, Reels, and Shorts with clean pacing,
              strong visual rhythm, and audience-focused storytelling.
            </p>

            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            <PortfolioItem videoSrc="https://www.youtube.com/embed/nQx1rrC1yMI?rel=0" />

            <PortfolioItem videoSrc="https://www.youtube.com/embed/L8EPqXjf7hM?rel=0" />
          </div>
        </div>

        {/* 02. MOTION & TALKING HEAD */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              02 // Motion & Talking-Head Video
            </h3>

            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Clean, polished video built with motion graphics, visual
              storytelling, and precise editing to keep ideas clear and engaging.
            </p>

            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-4"></div>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full">

            {/* Motion Graphics */}
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/e2lex2ymVWw?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Motion Graphics Project"
              ></iframe>
            </div>

            {/* Talking Head */}
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/d3WDkRPVzFI?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] hover:border-white/10 transition-all duration-300 shadow-xl"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Talking Head Video"
              ></iframe>
            </div>

          </div>
        </div>

        {/* 03. DOCUMENTARY & STORY-DRIVEN VIDEO */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              03 // Documentary & Story-Driven Video
            </h3>

            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Narrative-focused edits combining pacing, sound, visuals, and
              cinematic structure to turn raw footage into compelling stories.
            </p>

            <div className="h-[1px] w-12 bg-primary/50 mx-auto mt-4"></div>
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
