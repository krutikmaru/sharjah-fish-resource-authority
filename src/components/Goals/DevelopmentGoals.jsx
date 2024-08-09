import React from "react";
import { CardBody, CardContainer } from "../ui/3d-card";
import { Meteors } from "../../components/ui/meteors";
// import PatternOutlines11 from "../ui/svg/outlines/pattern-outlines-11";

function DevelopmentGoals({ developmentGoalsTranslations }) {
  return (
    <section className="relative px-[5%] py-16 flex justify-center items-center">
      {/* <PatternOutlines11 className="-bottom-64 left-1/2 -translate-x-1/2 opacity-50" /> */}
      <div className="container ">
        <div className="mx-auto mb-12 w-full max-w-4xl text-left md:text-center md:mb-18 lg:mb-20 ">
          <p className="mb-3 font-semibold md:mb-4 text-orange text-AE-Text-base">
            {developmentGoalsTranslations.subtitle}
          </p>
          <h2 className="text-AE-Text-H4 mb-4 font-bold md:text-AE-Text-H3 lg:text-AE-Text-H2 text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
            {developmentGoalsTranslations.title}
          </h2>
          <p className="text-AE-Text-base md:max-w-xl mx-auto text-AEBlack-800 dark:text-AEBlack-200">
            {developmentGoalsTranslations.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-28 ">
          {developmentGoalsTranslations.goals.map((developmentGoal) => {
            return (
              <CardContainer key={developmentGoal.number} className="w-full ">
                <CardBody className=" relative group/card  h-full flex flex-col justify-center items-center">
                  <MeteorCard
                    numeric={developmentGoal.numeric}
                    title={developmentGoal.title}
                    description={developmentGoal.description}
                  />
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MeteorCard({ numeric, title, description }) {
  return (
    <div className=" w-full  mx-auto  relative max-w-xs flex justify-center items-center">
      <div className="absolute inset-0  h-full w-full bg-gradient-to-r from-light-blue to-blue-yonder transform scale-[0.80] rounded-full blur-2xl" />
      <div className="relative min-h-[200px] shadow-xl bg-blue-yonder border-2 border-orange w-full  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-start items-start">
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4  border-AEBlack-100 p-2 text-AE-Text-2xl font-semibold">
          {numeric}
        </div>

        <h1 className="font-bold text-AE-Text-xl text-AEBlack-100 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-AE-Text-sm text-AEBlack-100 relative z-50">
          {description}
        </p>

        <Meteors number={20} />
      </div>
    </div>
  );
}

export default DevelopmentGoals;
