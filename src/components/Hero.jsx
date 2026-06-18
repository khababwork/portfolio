const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden bg-zinc-950 select-none"
    >
      {/* Background soft glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Refined Badge */}
          <span className="inline-block rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 mb-8">
            Available for Global Hire
          </span>
          
          {/* Cinematic Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-8 text-balance max-w-5xl mx-auto leading-[1.15]">
            Crafting High-Retention <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Visual Narratives
            </span>
          </h1>
          
          {/* Elegant Subtitle */}
          <p className="mx-auto max-w-xl text-sm md:text-base font-light text-zinc-400 mb-12 text-balance leading-relaxed">
            Transforming raw concepts into premium post-production assets designed to capture, hold, and scale audience attention.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#work"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-0.5 active:scale-95 shadow-lg"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
