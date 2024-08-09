import React from "react";
import { Meteors } from "../../../components/ui/meteors";
import { CardBody, CardContainer } from "../../../components/ui/3d-card";
import { useTranslations } from "next-intl";
import PatternOutlines11 from "../../../components/ui/svg/outlines/pattern-outlines-11";
import PatternOutlines2 from "../../../components/ui/svg/outlines/pattern-outlines-2";
import PatternOutlines3 from "../../../components/ui/svg/outlines/pattern-outlines-3";

function Partnerships() {
  const partnerships = useTranslations("Partnerships");

  const partners = [
    {
      key: "1",
      number: "1",
      collaboration: partnerships("Partner1.Title"),
      entities: partnerships("Partner1.Description"),
    },
    {
      key: "2",
      number: "2",
      collaboration: partnerships("Partner2.Title"),
      entities: partnerships("Partner2.Description"),
    },
    {
      key: "3",
      number: "3",
      collaboration: partnerships("Partner3.Title"),
      entities: partnerships("Partner3.Description"),
    },
    {
      key: "4",
      number: "4",
      collaboration: partnerships("Partner4.Title"),
      entities: partnerships("Partner4.Description"),
    },
    {
      key: "5",
      number: "5",
      collaboration: partnerships("Partner5.Title"),
      entities: partnerships("Partner5.Description"),
    },
    {
      key: "6",
      number: "6",
      collaboration: partnerships("Partner6.Title"),
      entities: partnerships("Partner6.Description"),
    },
    {
      key: "7",
      number: "7",
      collaboration: partnerships("Partner7.Title"),
      entities: partnerships("Partner7.Description"),
    },
    {
      key: "8",
      number: "8",
      collaboration: partnerships("Partner8.Title"),
      entities: partnerships("Partner8.Description"),
    },
    {
      key: "9",
      number: "9",
      collaboration: partnerships("Partner9.Title"),
      entities: partnerships("Partner9.Description"),
    },
    {
      key: "10",
      number: "10",
      collaboration: partnerships("Partner10.Title"),
      entities: partnerships("Partner10.Description"),
    },
    {
      key: "11",
      number: "11",
      collaboration: partnerships("Partner11.Title"),
      entities: partnerships("Partner11.Description"),
    },
    {
      key: "12",
      number: "12",
      collaboration: partnerships("Partner12.Title"),
      entities: partnerships("Partner12.Description"),
    },
    {
      key: "13",
      number: "13",
      collaboration: partnerships("Partner13.Title"),
      entities: partnerships("Partner13.Description"),
    },
    {
      key: "14",
      number: "14",
      collaboration: partnerships("Partner14.Title"),
      entities: partnerships("Partner14.Description"),
    },
  ];

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-28  py-28">
      {/* <PatternOutlines3 className="top-20 left-0 opacity-70" />
      <PatternOutlines2 className="top-20 right-0 opacity-70" />
      <PatternOutlines11 className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <PatternOutlines3 className="-bottom-20 left-0 opacity-70" />
      <PatternOutlines2 className="-bottom-20 right-0 opacity-70" /> */}
      {partners.map((partner) => {
        return (
          <CardContainer
            key={partner.number}
            className="w-full h-full min-h-[200px] "
          >
            <CardBody className=" relative group/card h-full flex flex-col justify-center items-center">
              <MeteorCard
                number={partner.number}
                collaboration={partner.collaboration}
                entities={partner.entities}
              />
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
}

function MeteorCard({ number, collaboration, entities }) {
  return (
    <div className=" w-full h-full mx-auto  relative max-w-xs flex justify-center items-center">
      <div className="absolute inset-0  h-full w-full bg-gradient-to-r from-light-blue to-blue-yonder transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-blue-yonder border-2 border-orange w-full  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 border-AEBlack-100 p-2 text-AE-Text-2xl font-semibold">
          {number}
        </div>

        <h1 className="font-bold text-AE-Text-xl text-AEBlack-50 relative z-50">
          {collaboration}
        </h1>

        <p className="font-normal text-AE-Text-sm text-AEBlack-100 relative z-50">
          {entities}
        </p>

        <Meteors number={20} />
      </div>
    </div>
  );
}

export default Partnerships;
