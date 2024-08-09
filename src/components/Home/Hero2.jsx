"use client";
import React, { useState, useEffect } from "react";

function Hero2() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden relative ">
      <div className="absolute bottom-0 left-0 w-full h-44 z-20 bg-gradient-to-b from-transparent to-white dark:to-[#181818]"></div>
      <div className="w-[40%] h-full"></div>
      <ImageSlider />
    </div>
  );
}

export default Hero2;

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  // List of images to be used in the divs
  const images = [
    "/images/general/1.jpg",
    "/images/general/2.jpg",
    "/images/general/3.jpg",
    "/images/general/4.jpg",
    "/images/general/5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);
  const getPositions = (index) => {
    const length = images.length;
    return {
      current: index === position ? "-right-28" : "-right-[150%]",
      next: index === (position + 1) % length ? "-right-28" : "-right-[150%]",
    };
  };
  return (
    <div className="w-[60%] h-full relative overflow-visible">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full h-[150vh] -top-28 absolute -rotate-6 transition-all duration-700 ease-in-out ${
            getPositions(index).current
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute bottom-0 -left-2 w-44 h-full z-20 bg-gradient-to-l from-transparent to-white dark:to-[#181818]"></div>
        </div>
      ))}
    </div>
  );
};
