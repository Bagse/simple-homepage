import { useState } from "react";
import Toggle from "./Toggle";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function Head() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src="./alarado-icon-homepage.png"
            alt="icon homepage"
            className="w-10"
          />
          <span className="text-black dark:text-white text-xl font-bold">
            Alarado
          </span>
        </div>

        <div className="sm:hidden lg:hidden relative z-50">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimesCircle
                size={25}
                onClick={closeMenu}
                />
              )
             : (
              <FaBars size={25} className="dark:text-white" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "fixed inset-0 left-auto bg-white z-50 w-[240px]" : "hidden"
          } sm:flex`}
        >
          <ul className="flex flex-col sm:flex-row lg:flex-row gap-8 text-xl md:text-base font-semibold items-center place-content-center h-96 sm:h-0 md:h-0 text-[#66748A]">
            <li onClick={closeMenu}>
              <a
                href="#"
                className="text-black dark:text-black sm:dark:text-white md:dark:text-white"
              >
                About us
              </a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Resource</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <div className="block md:hidden">
              <Toggle />
            </div>
          </ul>

          {/* Close button inside the mobile menu */}
          <div className="absolute top-4 right-2 sm:hidden">
            <FaTimesCircle
              size={25}
              onClick={closeMenu}
            />
          </div>
        </div>

        <div className="hidden md:block">
          <Toggle />
        </div>
      </nav>
    </header>
  );
}

export default Head;
