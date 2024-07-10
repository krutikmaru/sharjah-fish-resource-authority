"use client";
import React, { useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import useDarkMode from "../../app/utils/hooks/useDarkMode";
import LocalSwitcher from "../global/locale-switcher";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function FloatingNavDemo({ navigationTranslations }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenuState = () => setIsMenuActive((prev) => !prev);

  const navItems = [
    {
      name: navigationTranslations.about,
      link: "/about",
    },
    {
      name: navigationTranslations.goals,
      link: "/goals",
    },
    {
      name: navigationTranslations.partnerships,
      link: "/partnerships",
    },
  ];

  return (
    <>
      <div className="w-full h-16 px-12 bg-AEBlack-50/20 dark:bg-AEBlack-950/20 backdrop-blur-md border-b-[1px] border-b-AEBlack-300 dark:border-b-AEBlack-800 fixed z-50 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="FRA Logo"
              height={32}
              width={32}
            />
          </Link>

          <button onClick={toggleMenuState}>
            {isMenuActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
                className="fill-AEBlack-900 dark:fill-AEBlack-300"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
                className="fill-AEBlack-900 dark:fill-AEBlack-300"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <ThemeToggle />
          <LocalSwitcher />
        </div>
      </div>
      <FloatingMenu
        isMenuActive={isMenuActive}
        toggleMenuState={toggleMenuState}
        navItems={navItems}
      />
    </>
  );
  return <FloatingNav navItems={navItems} />;
}

const ThemeToggle = () => {
  const [theme, setTheme] = useDarkMode();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
          className="fill-AEBlack-900 dark:fill-AEBlack-300"
        >
          <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
          className="fill-AEBlack-900 dark:fill-AEBlack-300"
        >
          <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
        </svg>
      )}
    </button>
  );
};

const FloatingMenu = ({ isMenuActive, toggleMenuState, navItems }) => {
  const locale = useLocale();

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const divVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    exit: {
      x: "-100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };
  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={toggleMenuState}
          className="w-full h-screen bg-AEBlack-50/20 dark:bg-AEBlack-950/20 backdrop-blur-md border-b-[1px] border-b-AEBlack-100 dark:border-b-AEBlack-800 fixed z-50 flex items-center justify-between"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={divVariants}
            className="w-[400px] h-[95%] ml-5 bg-AEBlack-50 shadow-2xl dark:bg-AEBlack-950 rounded-lg flex flex-col p-5"
          >
            <div className="w-full flex items-center justify-between">
              <button onClick={toggleMenuState}>
                <svg
                  onClick={toggleMenuState}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="fill-AEBlack-900 dark:fill-AEBlack-300"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
              <Link href={"/"}>
                <Image
                  src="/images/logo.png"
                  alt="FRA Logo"
                  height={40}
                  width={40}
                />
              </Link>
            </div>
            <div className="mt-10  h-full">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={`/${locale}` + navItem.link}
                  locale={"ar"}
                  className={
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-AEBlack-800 hover:text-orange dark:hover:text-orange transition-colors ease-in-out duration-300"
                  }
                >
                  {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                  <span className="text-xs sm:text-4xl font-semibold tracking-tight">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex justify-end mb-10 items-center space-x-4">
              <ThemeToggle />
              <LocalSwitcher />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
