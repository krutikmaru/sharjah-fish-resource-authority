"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

export default function VisionMission({ visionMissionTranslations }) {
  return (
    <div className="w-screen py-16 px-10 sm:px-0 flex flex-col md:flex-row items-center justify-center antialiased space-x-0 md:space-x-4 md:gap-8 space-y-4 md:space-y-0">
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
  );
}
