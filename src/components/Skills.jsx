import SkillCard from "./utils/SkillCard";
import { 
  Play, 
  Scissors, 
  Zap, 
  Layers, 
  Clock, 
  TrendingUp, 
} from 'lucide-react';

const Skills = () => {
    const skills = [
      { icon: Scissors, title: "Narrative Pacing", desc: "Structuring video layers with a flawless flow, seamless b-roll integration, and compelling storytelling." },
      { icon: Zap, title: "Advanced Motion Design", desc: "Creating custom, dynamic motion graphics from scratch to elevate production value and explain complex ideas." },
      { icon: Layers, title: "Retention Engineering", desc: "Designing high-engagement shorts optimized with smooth visual hooks and precise pacing to maintain attention." },
      { icon: TrendingUp, title: "Cinematic Sound Design", desc: "Multi-layered audio mixing, sound effects (SFX) placement, and level matching to drive emotional weight." },
      { icon: Clock, title: "Asset Integration", desc: "Expertly preserving complex layers and visual structures between design environments and animation timelines." },
      { icon: Play, title: "Strategic Execution", desc: "Aligning editorial decisions with your brand identity and audience data, ensuring every project serves a purpose." },
    ];
  
    return (
      <section id="skills" className="py-28 bg-zinc-950 border-t border-white/[0.02]">
        <div className="container mx-auto px-6">
          
          {/* Minimalist Centered Header */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-3 mb-4 tracking-tight">
              Why Work <span className="font-semibold">With Me?</span>
            </h2>
            <div className="h-[1px] w-12 bg-white/20 mx-auto mb-4"></div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              I bridge the gap between complex post-production workflows and powerful visual storytelling.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-zinc-900/20 border border-white/[0.03] hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300 group shadow-sm"
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
