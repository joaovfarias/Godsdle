import Logo from "../assets/logo.png";
import Help from "./Help.jsx";
import { useState } from "react";
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

export default function LogoStats() {
  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClick = () => {
    setShowHelp((prev) => !prev);
  };

  return (
    <>
      <Help show={showHelp} onClose={() => setShowHelp(false)} />

      <img
        src={Logo}
        alt="Logo"
        className="w-100 mt-5 hover:scale-105 transition-transform duration-200 cursor-pointer"
      />
      <div className="flex flex-row items-center gap-15 mt-5">
        <div
          className="tooltip hover:scale-110 brightness-110 transition-transform duration-200 cursor-pointer"
          onClick={handleHelpClick}
        >
          <MdOutlineHelpOutline size={40} color="white" />
          <span className="tooltiptext">How to play</span>
        </div>
        <div className="tooltip hover:scale-110 transition-transform duration-200 cursor-pointer">
          <IoIosStats size={40} color="white" />
          <span className="tooltiptext">Stats</span>
        </div>
      </div>
    </>
  );
}
