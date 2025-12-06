import { useState, useRef } from "react";
function VideoShowcase({ videoSrc, title, aspectRatio }) {
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  return (
    <div
      className={`relative ${
        aspectRatio ? "aspect-" + aspectRatio : "aspect-9/14"
      } group cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-white/5`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}>
      <video ref={videoRef} className="w-full h-full" controls={showControls}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute w-full top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default VideoShowcase;
