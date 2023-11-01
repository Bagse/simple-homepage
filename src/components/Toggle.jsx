import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import {BsSunFill} from 'react-icons/bs'

function Toggle() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const changeDarkMode = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <button
      className='flex items-center justify-center w-12 h-7 p-1 rounded-full transition-colors bg-[#223344] duration-200 shadow-md'
      onClick={changeDarkMode}
    >
      {theme ? (
        <div className="flex gap-1 items-center">
          <FaMoon className="text-black bg-white rounded-full p-1" size={20} />
          <BsSunFill className="text-white" size={14} />
        </div>
      ) : (
        <div className="flex gap-1 items-center">
          <FaMoon className="text-white" size={14} />
          <BsSunFill className="text-black bg-white rounded-full p-1" size={20} />
        </div>
      )}
    </button>
  );
}

export default Toggle;
