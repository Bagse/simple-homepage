import Toggle from "./Toggle";

function Head() {
  return (
    <header className="flex flex-row justify-between items-center">
      <img src="./alarado-icon-homepage.svg" alt="icon homepage" />

      <ul className="flex flex-row gap-8 text-base font-semibold text-[#66748A]">
        <li>
          <a href="#" className="text-black dark:text-white">
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
      </ul>

      <Toggle />
    </header>
  );
}

export default Head;
