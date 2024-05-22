"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/home-1.jpg",
  "/images/home-2.jpg",
  "/images/home-3.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(0%)`;
    } else if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(-${
        (images.length - 1) * 100
      }%)`;
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = isTransitioning
        ? "transform 0.5s ease-in-out"
        : "none";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div
      className="absolute w-full overflow-hidden opacity-90 dark:opacity-30"
      style={{
        perspective: "1000px",
        transform: "",
      }}
      role="region"
      aria-label="Image Carousel"
    >
      <div
        className="absolute w-full h-7 dark:h-28 bg-gradient-to-t from-white to-transparent dark:from-black bottom-0 left-0 right-0 z-50"
        role="presentation"
      ></div>
      <div
        ref={carouselRef}
        className="flex"
        onTransitionEnd={handleTransitionEnd}
        role="list"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            prevSlide();
          } else if (e.key === "ArrowRight") {
            nextSlide();
          }
        }}
      >
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen relative"
            role="listitem"
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ heroTranslations }) => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <Carousel />
      <div className="relative z-10 text-center px-4 sm:px-20">
        <h1
          className="text-AE-Text-H3 sm:text-AE-Text-H2 md:text-AE-Text-H1 lg:text-AE-Text-Display font-bold text-AEBlack-50 tracking-tighter"
          tabIndex={-1}
        >
          {heroTranslations.title}
        </h1>
        <p
          className="max-w-2xl text-AE-Text-sm md:text-AE-Text-lg mt-4 text-AEBlack-100 mx-auto"
          tabIndex={-1}
        >
          {heroTranslations.description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
