const SkillCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/50 group hover:bg-white/10">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon size={24} className="group-hover:scale-120 transition-transform duration-300"/>
    </div>
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
  </div>
);
export default SkillCard;
