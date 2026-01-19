import backgroundImage from "./assets/background.webp";
import { useEffect, useState } from "react";
import GuessLayout from "./components/GuessLayout.jsx";
import Guess from "./components/Guess.jsx";
import LogoStats from "./components/LogoStats.jsx";
import SubmitInput from "./components/SubmitInput.jsx";
import "./index.css";

export default function App() {
  const [guesses, setGuesses] = useState(1);
  const [gods, setGods] = useState([]);

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
        }}
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col items-center">
          <LogoStats />
          <SubmitInput setGuesses={setGuesses} guesses={guesses} />
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
