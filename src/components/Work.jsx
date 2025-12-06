import VideoShowcase from "./VideoShowcase"
import { 
  ExternalLink
} from 'lucide-react';

const Work = () => {
    return (
      <section id="work" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-zinc-400">A selection of my best edits across various niches.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors">
              View Youtube Channel <ExternalLink size={16} />
            </a>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            <VideoShowcase videoSrc="" title=""/>
            <VideoShowcase videoSrc="" title=""/>
            <VideoShowcase videoSrc="" title=""/>
            <VideoShowcase videoSrc="" title=""/>
          </div>
        </div>
      </section>
    );
  };
  
export default Work