import PortfolioItem from "./utils/PortfolioItem";
import { ExternalLink } from "lucide-react";

const Work = () => {
  return (
    <section id="work" className="py-15 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center text-center justify-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Featured Work
            </h2>
            <p className="text-zinc-400">
              A selection of my best edits across various niches.
            </p>
          </div>
        </div>
        {/* Short Videos */}
        <div className="mb-12">
          <div className="mb-10 mx-auto sm:mx-0 w-fit">
            <h2 className="text-3xl font-bold">Short-Form Videos</h2>
            <div className="h-1 w-full  bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-wrap items-center justify-evenly w-full gap-6">
            <PortfolioItem videoSrc="https://www.youtube.com/embed/CNOGNQDriYE?rel=0x" />
            <PortfolioItem videoSrc="https://www.youtube.com/embed/L8EPqXjf7hM?rel=0x" />
            <PortfolioItem videoSrc="https://www.youtube.com/embed/nAYteMhFheI?rel=0x" />
          </div>
        </div>
        {/* 16/9 videos */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-20">
        {/* Long Videos */}
        <div >
          <div className="mb-6 mx-auto sm:mx-0 w-fit">
            <h2 className="text-3xl font-bold">Long-Form Videos</h2>
            <div className="h-1 w-full  bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-wrap items-center relative h-96 justify-start w-full gap-6">
            <iframe
              src="https://www.youtube.com/embed/BFzmUGg9BnU?rel=0"
              className="-top-5 left-0 w-[90%] h-[80%] relative cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-white/5 hover:scale-105 transition-all duration-300"
              allowFullScreen
              allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *;"
              referrerPolicy="strict-origin"></iframe>
          </div>
        </div>
        {/* Motion Graphics */}
        <div >
          <div className="mb-6 mx-auto sm:mx-0 w-fit">
            <h2 className="text-3xl font-bold">Motion Graphics</h2>
            <div className="h-1 w-full  bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-wrap items-center relative h-96 justify-start w-full gap-6">
            <iframe
              src="https://www.youtube.com/embed/c8m49GeExGQ?rel=0"
              className="-top-5 left-0 w-[90%] h-[80%] relative cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-white/5 hover:scale-105 transition-all duration-300"
              allowFullScreen
              allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *;"
              referrerPolicy="strict-origin"></iframe>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
