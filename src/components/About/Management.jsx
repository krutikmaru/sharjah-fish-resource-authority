"use client";

import Image from "next/image";
import PatternOutlines2 from "../ui/svg/outlines/pattern-outlines-2";
import PatternOutlines3 from "../ui/svg/outlines/pattern-outlines-3";

function Management({ managmentTranslations }) {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-[5%] pt-16 md:pt-24 lg:pt-28 flex justify-center items-center">
      {/* <PatternOutlines3 className="top-20 left-0 opacity-50 dark:opacity-20" />
      <PatternOutlines2 className="bottom-0 right-0 opacity-50 dark:opacity-30" /> */}
      <div className="container z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-blue-navy dark:text-blue-yonder text-AE-Text-base">
              {managmentTranslations.subtitle}
            </p>
            <h2 className="text-AE-Text-H3 mb-4 font-bold md:text-AE-Text-H2 lg:text-AE-Text-H1 text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
              {managmentTranslations.title}
            </h2>
            <p className="md:text-AE-Text-base text-AEBlack-800 dark:text-AEBlack-200">
              {managmentTranslations.description}
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <button
                onClick={handleScroll}
                className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-6 py-3 rounded-md  transition-colors ease-in-out"
              >
                {managmentTranslations.actionButtonText}
              </button>
            </div>
          </div>
          <div className="w-full h-96 bg-AEBlack-100 dark:bg-AEBlack-900 mb-12 md:mb-18 lg:mb-20 rounded-lg relative">
            <Image
              src="/images/about/Ali-Ahmed-Ali-Abu-Ghazeen.png"
              alt="Goals Display Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Management;
