"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";
import PatternOutlines2 from "../ui/svg/outlines/pattern-outlines-2";
import PatternOutlines3 from "../ui/svg/outlines/pattern-outlines-3";

export default function VisionMission({ visionMissionTranslations }) {
  return (
    <div className="w-screen relative h-auto md:h-screen ">
      {/* <PatternOutlines2 className="bottom-0 right-0 opacity-70" />
      <PatternOutlines3 className="top-0 left-0 opacity-70" /> */}
      <div className="w-full h-full relative z-10 px-10 sm:px-0 flex flex-col md:flex-row items-center justify-center antialiased space-x-0 md:space-x-4 md:gap-8 space-y-4 md:space-y-0">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>
            {visionMissionTranslations.card1Title}
          </GlowingStarsTitle>
          <div className="flex justify-between items-end ">
            <GlowingStarsDescription>
              {visionMissionTranslations.card1Description}
            </GlowingStarsDescription>
          </div>
        </GlowingStarsBackgroundCard>
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>
            {visionMissionTranslations.card2Title}
          </GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              {visionMissionTranslations.card2Description}
            </GlowingStarsDescription>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
}
