// hooks/useDarkMode.ts
"use client";
import { useEffect, useState } from "react";

function useDarkMode(): [string, (theme: string) => void] {
  const [theme, setTheme] =
    useState <
    string >
    (() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light";
      }
      return "light";
    });

  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === "dark" ? "light" : "dark";
    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;
