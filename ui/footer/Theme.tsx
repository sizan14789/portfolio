"use client";

import { useReducer } from "react";

const themeReducer = (state: string, button: string) => {
  if (state === button) return state;
  if (state === "dark") return "light";
  return "dark";
};

export default function Theme() {
  const [theme, themeDispatch] = useReducer(themeReducer, "dark");

  const handleThemeToggle = (button: string) => {
    if (button === theme) return;
    document.documentElement.classList.toggle("light");
    themeDispatch(button);
  };
  return (
    <div className="cursor-pointer flex rounded-4xl border border-(--border) relative h-6.5 md:h-7.5 text-xs md:text-sm text-(--primary) font-semibold gap-2 px-1 font-mono">
      <p
        className="w-8.5 md:w-11 rounded-l-4xl flex items-center justify-end"
        onClick={() => handleThemeToggle("light")}
      >
        Light
      </p>
      <p
        className="w-8.5 md:w-10 rounded-r-4xl flex items-center justify-center"
        onClick={() => handleThemeToggle("dark")}
      >
        Dark
      </p>
      <p
        className={`w-10.75 md:w-13.5 h-6.25 md:h-7.25 rounded-4xl absolute top-0 left-0 z-999 duration-250 scale-99 ease-in-out theme-toggle-glass ${theme === "dark" ? "translate-x-[calc(100%-2.25px)] md:translate-x-[calc(100%+4px)] md:w-12!" : ""}`}
      ></p>
    </div>
  );
}
