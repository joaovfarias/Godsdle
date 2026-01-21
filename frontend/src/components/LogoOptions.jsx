import Logo from "../assets/logonewnew.png";
import Help from "./Help.jsx";
import Stats from "./Stats.jsx";
import Settings from "./Settings.jsx";
import { useState } from "react";
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function LogoOptions({
  answer,
  showStats,
  onOpenStats,
  onCloseStats,
}) {
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleStatsClick = () => {
    onOpenStats?.();
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  return (
    <>
      <Help show={showHelp} onClose={() => setShowHelp(false)} />
      <Stats show={showStats} onClose={onCloseStats} />
      <Settings
        show={showSettings}
        onClose={() => setShowSettings(false)}
        answer={answer}
      />

      <img
        src={Logo}
        alt="Logo"
        className="w-100 mt-5 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform duration-200 cursor-pointer"
      />
      <div className="flex flex-row items-center gap-15 mt-5">
        <div
          className="tooltip hover:scale-110 brightness-110 transition-transform duration-200 cursor-pointer"
          onClick={handleHelpClick}
        >
          <MdOutlineHelpOutline
            size={40}
            color="white"
            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.6))" }}
          />
          <span className="tooltiptext">How to play</span>
        </div>
        <div
          className="tooltip hover:scale-110 transition-transform duration-200 cursor-pointer"
          onClick={handleStatsClick}
        >
          <IoIosStats
            size={40}
            color="white"
            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.6))" }}
          />
          <span className="tooltiptext">Stats</span>
        </div>
        <div
          className="tooltip hover:scale-110 transition-transform duration-200 cursor-pointer"
          onClick={handleSettingsClick}
        >
          <IoSettingsOutline
            size={40}
            color="white"
            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.6))" }}
          />
          <span className="tooltiptext">Settings</span>
        </div>
      </div>
    </>
  );
}
