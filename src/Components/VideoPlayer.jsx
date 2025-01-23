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
      <video
        className="hidden sm:block w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2818567/2818567-sd_640_360_24fps.mp4"
        autoPlay
        loop
        muted
        controls={false}
      />
    </div>
  );
};

export default VideoPlayer;
