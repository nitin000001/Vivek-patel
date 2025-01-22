import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const opts = {
    height: "100%", // Full height of the container
    width: "100%",  // Full width of the container
    playerVars: {
      autoplay: 1, // Automatically play the video
      loop: 1, // Loop the video
      mute: 1, // Mute the video
      controls: 0, // Hide YouTube controls
      showinfo: 0, // Hide video information
      modestbranding: 1, // Minimal YouTube branding
      rel: 0, // Prevent showing related videos at the end
      playlist: "D3qHYGO-W-c", // Required for looping the same video
    },
  };

  return <YouTube videoId="D3qHYGO-W-c" opts={opts} className="video-player" />;
};

export default VideoPlayer;
