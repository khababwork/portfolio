import SkillCard from "./utils/SkillCard"
import { 
  Film, 
  Sparkles, 
  Layers, 
  Volume2, 
  MousePointerClick, 
  Compass, 
} from 'lucide-react';

const Skills = () => {
    const skills = [
      { 
        icon: Film, 
        title: "Narrative Pacing", 
        desc: "Structuring long-form documentaries with a flawless flow, seamless b-roll integration, and compelling storytelling." 
      },
      { 
        icon: Sparkles, 
        title: "Advanced Motion Design", 
        desc: "Creating custom, dynamic motion graphics from scratch to elevate production value and explain complex ideas." 
      },
      { 
        icon: MousePointerClick, 
        title: "Retention Engineering", 
        desc: "Designing high-engagement talking head videos optimized with smooth visual hooks and precise pacing to maintain attention." 
      },
      { 
        icon: Volume2, 
        title: "Cinematic Sound Design", 
        desc: "Multi-layered audio mixing, sound effects (SFX) placement, and level matching to drive the emotional weight of the edit." 
      },
      { 
        icon: Layers, 
        title: "Asset Integration", 
        desc: "Expertly preserving complex layers and visual structures between design environments and animation timelines." 
      },
      { 
        icon: Compass, 
        title: "Strategic Execution", 
        desc: "Aligning editorial decisions with your brand identity and audience data, ensuring every project serves a clear purpose." 
      },
    ];
  
    return (
      <section id="skills" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Me?</h2>
            <p className="text-zinc-400">I bridge the gap between complex post-production workflows and powerful visual storytelling.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Skills;
