"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export default function FloatingNavDemo({ navigationTranslations }) {
  const navItems = [
    {
      name: navigationTranslations.about,
      link: "/about",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: navigationTranslations.goals,
      link: "/goals",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: navigationTranslations.partnerships,
      link: "/partnerships",
      // icon: (
      //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
