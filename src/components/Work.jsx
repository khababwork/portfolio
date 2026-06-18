import PortfolioItem from "./utils/PortfolioItem";

const Work = () => {
  return (
    <section id="work" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 flex items-center text-center justify-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Featured Work
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
              Specialized in high-end documentary editing, advanced motion design, and high-retention talking head content.
            </p>
          </div>
        </div>

        {/* 1. Documentary Edits Section */}
        <div className="mb-24">
          <div className="mb-8 mx-auto sm:mx-0 w-fit">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Documentary Edits</h2>
            <div className="h-1 w-full bg-primary rounded-full mt-2"></div>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/chjIRbrT3BI?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Documentary Project 1"
              ></iframe>
            </div>

            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/BFzmUGg9BnU?rel=0"
                className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin"
                title="Documentary Project 2"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 2. Motion Graphics Section */}
        <div className="mb-24">
          <div className="mb-8 mx-auto sm:mx-0 w-fit">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Motion Graphics & Design</h2>
            <div className="h-1 w-full bg-primary rounded-full mt-2"></div>
          </div>
          
          {/* Layout mixing 16:9 and 9:16 cleanly */}
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
            <div className="flex flex-col gap-6 w-full lg:w-2/3">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/e2lex2ymVWw?rel=0"
                  className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] transition-all duration-300 shadow-lg"
                  allowFullScreen
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin"
                  title="Long Form Motion Graphics"
                ></iframe>
              </div>
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/c8m49GeExGQ?rel=0"
                  className="w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:scale-[1.01] transition-all duration-300 shadow-lg"
                  allowFullScreen
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin"
                  title="16:9 Motion Graphics Short"
                ></iframe>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <PortfolioItem videoSrc="https://www.youtube.com/embed/nQx1rrC1yMI?rel=0" />
            </div>
          </div>
        </div>

        {/* 3. Talking Head Sections */}
        <div className="mb-12">
          <div className="mb-8 mx-auto sm:mx-0 w-fit">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Talking Head Shorts</h2>
            <div className="h-1 w-full bg-primary rounded-full mt-2"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 w-full">
            <PortfolioItem videoSrc="https://www.youtube.com/embed/YE3i_6IdBJA?rel=0" />
            <PortfolioItem videoSrc="https://www.youtube.com/embed/L8EPqXjf7hM?rel=0" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
