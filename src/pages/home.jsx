import React, { useEffect, useRef } from "react";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      console.log("Video can play");
      video.play();
    };

    const handleError = (e) => {
      console.error("Error loading video", e);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <video
        ref={videoRef}
        src="/Reel_provisorio.MOV"
        className="object-fit-none"
        autoPlay
        loop
        muted
        type="video/quicktime"
        style={{
          maxWidth: "100%", // Ensures the video doesn't exceed the width of its container
          height: "auto", // Maintains the video aspect ratio
          display: "block"
        }}
      ></video>
    </div>
  );
};

export default Home;
