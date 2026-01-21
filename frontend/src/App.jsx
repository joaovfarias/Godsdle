import backgroundImage from "./assets/background.webp";
import { useEffect, useState } from "react";
import GuessLayout from "./components/GuessLayout.jsx";
import Guess from "./components/Guess.jsx";
import LogoOptions from "./components/LogoOptions.jsx";
import SubmitInput from "./components/SubmitInput.jsx";
import Victory from "./components/Victory.jsx";
import "./index.css";

export default function App() {
  const [guesses, setGuesses] = useState(0);
  const [guess, setGuess] = useState("");
  const [gods, setGods] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [matches, setMatches] = useState([]);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/gods")
      .then((res) => res.json())
      .then((data) => setGods(data));
  }, []);

  useEffect(() => {
    if (gods.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * gods.length);
    setAnswer(gods[randomIndex]);

    console.log("Answer:", gods[randomIndex]);
  }, [gods]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="flex flex-col items-center">
          <LogoOptions answer={answer} />
          <SubmitInput
            setGuesses={setGuesses}
            guess={guess}
            setGuess={setGuess}
            data={gods}
            matches={matches}
            setMatches={setMatches}
            setVictory={setVictory}
            victory={victory}
            answer={answer}
          />
        </div>

        {guesses > 0 && (
          <GuessLayout>
            {matches
              .slice()
              .reverse()
              .map((guess) => (
                <Guess key={guess.id} guess={guess} answer={answer} />
              ))}
          </GuessLayout>
        )}

        {victory && <Victory answer={answer} />}
      </div>
    </>
  );
}
