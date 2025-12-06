const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary mb-6">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
            Crafting Viral <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Short-Form Content
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-10 text-balance">
            I turn raw footage into engaging stories. Specialized in YouTube
            Shorts, Instagram Reels and TikToks that hook viewers from the first
            second.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-1 active:scale-97">
              View Portfolio
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-1 duration-300 active:scale-97">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
