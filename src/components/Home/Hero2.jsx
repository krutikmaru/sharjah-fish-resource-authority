"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Hero2() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden relative ">
      <div className="absolute bottom-0 left-0 w-full h-44 z-20 bg-gradient-to-b from-transparent to-white dark:to-[#181818]" />
      <div className="w-[35%] h-full flex justify-center flex-col space-y-4 items-center px-10">
        <div className="w-40 md:w-60 h-40 md:h-60 relative overflow-visible">
          <Image
            src="/images/logo.png"
            className="absolute object-cover top-0 left-0"
            fill
            alt="Logo"
          />
        </div>
        <h1 className="text-fra-black dark:text-white font-semibold tracking-tighter text-3xl md:text-5xl text-center">
          Sharjah Fish Resource Authority
        </h1>
      </div>
      <ImageSlider />
    </div>
  );
}

export default Hero2;

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

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
    <div className="w-[65%] h-full relative overflow-visible">
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
