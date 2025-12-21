function PortfolioItem({ videoSrc, aspectRatio}) {

  return (
    <div
      className={`relative group ${aspectRatio ? "aspect-" + aspectRatio: "aspect-9/16"} cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-white/5 hover:scale-105 transition-all duration-300`}>
      <iframe
        className="w-full h-full "
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>

  );
}

export default PortfolioItem;
