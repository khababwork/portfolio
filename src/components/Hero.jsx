const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden bg-zinc-950 select-none"
    >
      {/* Background soft primary glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Refined Badge with your signature color */}
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-8">
            Available for Hire
          </span>
          
          {/* Your Bold Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance max-w-5xl mx-auto leading-[1.15]">
            Crafting Engaging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Video Content
            </span>
          </h1>
          
          {/* Balanced Description */}
          <p className="mx-auto max-w-2xl text-base font-light text-zinc-400 mb-12 text-balance leading-relaxed">
            I turn raw footage into clear, high-retention stories designed to capture, hold, and scale audience attention.
          </p>
          
          {/* Action Buttons with original vibrant feel */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#work"
              className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95"
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
