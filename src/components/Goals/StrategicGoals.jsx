import Image from "next/image";
import React from "react";

function StrategicGoals({ strategicGoalsTranslations }) {
  return (
    <section className=" px-[5%] py-16 md:py-24 lg:py-28 flex justify-center items-center">
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-orange text-AE-Text-base">
              {strategicGoalsTranslations.subtitle}
            </p>
            <h2 className="text-AE-Text-H2 font-bold md:text-AE-Text-H1 lg:text-AE-Text-Display text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
              {strategicGoalsTranslations.title}
            </h2>
          </div>
          <p className="md:text-AE-Text-base text-AEBlack-800 dark:text-AEBlack-200">
            {strategicGoalsTranslations.description}
          </p>
        </div>
        <div className="w-full h-96  mb-12 md:mb-18 lg:mb-20 rounded-lg relative ">
          <Image
            src="/images/patterns-fill-color-5.jpg"
            alt="Goals Display Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {strategicGoalsTranslations.goals.map((goal) => {
            return (
              <div key={goal.title}>
                <div className="mb-5 md:mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="fill-orange"
                  >
                    <path d={goal.svgPath}></path>
                  </svg>
                </div>
                <h3 className="mb-5 text-AE-Text-2xl font-bold md:mb-6 md:text-AE-Text-3xl md:leading-[1.3] lg:text-AE-Text-H3 tracking-tighter text-blue-navy dark:text-blue-yonder">
                  {goal.title}
                </h3>
                <p className="text-AEBlack-900 dark:text-AEBlack-100">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StrategicGoals;
