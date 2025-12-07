import SkillCard from "./utils/SkillCard"
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
      { icon: Scissors, title: "Precision Editing", desc: "Frame-perfect cuts that maintain flow and maximize retention." },
      { icon: Zap, title: "Visual Effects", desc: "Eye-catching overlays and motion graphics that pop." },
      { icon: Layers, title: "Compositing", desc: "Seamless layering of assets for a professional broadcast look." },
      { icon: TrendingUp, title: "Trend Awareness", desc: "Deep understanding of current algorithms and viral formats." },
      { icon: Clock, title: "Quick Turnaround", desc: "Reliable delivery times without compromising on quality." },
      { icon: Play, title: "Sound Design", desc: "Immersive audio mixing that drives the emotion of the video." },
    ];
  
    return (
      <section id="skills" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Me?</h2>
            <p className="text-zinc-400">I bring more than just technical skills; I bring a strategic approach to content creation.</p>
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
  export default Skills