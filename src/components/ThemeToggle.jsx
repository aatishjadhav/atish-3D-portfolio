import React from "react";
import { Sun, Moon } from "lucide-react";
import useDarkMode from "../components/useDarkMode";

const ThemeToggle = () => {
  const [dark, toggle] = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
