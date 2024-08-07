import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import PatternOutlines11 from "../ui/svg/outlines/pattern-outlines-11";

const Values = ({ valuesTranslations }) => {
  return (
    <section className="flex px-[5%] py-12 md:py-16 lg:py-20 0 justify-center relative">
      {/* <PatternOutlines11 className="top-0 left-0 opacity-20" /> */}

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:items-start md:gap-x-12 lg:gap-x-20 relative">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 md:grid-cols-2">
            {valuesTranslations.map((value, index) => (
              <div key={index}>
                <div className="mb-3 md:mb-4 flex space-x-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="fill-orange"
                  >
                    <path d={value.svgPath}></path>
                  </svg>
                  <h1 className="text-AE-Text-xl font-bold md:text-AE-Text-H4 text-blue-navy dark:text-blue-yonder">
                    {value.title}
                  </h1>
                </div>
                <p className="pl-12 text-AE-Text-lg text-AEBlack-950 dark:text-AEBlack-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <CardContainer className="inter-var rounded-md relative flex flex-col items-start justify-start antialiased">
            <CardBody className="dark:bg-fra-black relative group/card w-full h-full backdrop-blur-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border flex flex-col justify-center items-center space-y-4 ">
              <CardItem
                translateZ="50"
                className="text-AEGold-500 text-5xl md:text-7xl font-semibold tracking-tighter"
              >
                <div className="sticky top-[64px] ">
                  <img
                    src="images/fishes-2.jpg"
                    className="w-full object-cover rounded-lg"
                    alt="School of fishes"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Values;
