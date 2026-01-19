import backgroundImage from "./assets/background.webp";
import Logo from "./assets/logo.png";
import Help from "./components/Help.jsx";
import { useEffect, useState } from "react";
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import GuessLayout from "./components/GuessLayout.jsx";
import Guess from "./components/Guess.jsx";
import "./index.css";

export default function App() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState(1);
  const [showHelp, setShowHelp] = useState(false);
  const [gods, setGods] = useState([]);

  const handleHelpClick = () => {
    setShowHelp((prev) => !prev);
  };

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    setGuess("");
    setGuesses((prev) => prev + 1);
    alert(`You guessed: ${guess}`);
    console.log(guesses);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/gods")
      .then((res) => res.json())
      .then((data) => setGods(data));
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Help show={showHelp} onClose={() => setShowHelp(false)} />
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-100 mt-5" />
          <div className="flex flex-row items-center gap-15 mt-5">
            <div className="tooltip" onClick={handleHelpClick}>
              <MdOutlineHelpOutline size={40} color="white" />
              <span className="tooltiptext">How to play</span>
            </div>
            <div className="tooltip">
              <IoIosStats size={40} color="white" />
              <span className="tooltiptext">Stats</span>
            </div>
          </div>

          <div className="mt-20">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Guess the god..."
              className="rounded-md border border-gray-700 p-2 w-120 bg-gray-100"
            />
            <button
              onClick={(e) => {
                handleSubmitGuess(e);
              }}
              className="ml-2 rounded-md bg-gray-500 px-4 py-2 text-white"
              disabled={!guess.trim()}
            >
              Submit
            </button>
          </div>
        </div>

        {guesses > 0 && (
          <GuessLayout>
            <Guess />
            <Guess />
          </GuessLayout>
        )}
      </div>
    </>
  );
}
