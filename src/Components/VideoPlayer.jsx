import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-full">
      {/* 9:16 video for small devices */}
      <video
        className="block sm:hidden w-full h-full object-cover"
        src="/9 16.mp4"
        autoPlay
        loop
        muted
        controls={false}
      />

      {/* Vivek intro video for larger devices */}
      <div className="relative w-full pb-[56.25%] hidden sm:block">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/D3qHYGO-W-c?autoplay=1&loop=1&mute=1&playlist=D3qHYGO-W-c&controls=0&showinfo=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
