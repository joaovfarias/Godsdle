import backgroundImage from "./assets/background.webp";
import { useEffect, useState, useRef } from "react";
import { getStats, getTodayGame } from "./storage/storage.js";
import { saveTodayGame, saveStats } from "./storage/storage.js";
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
  const [todayGame, setTodayGame] = useState(null);
  const [stats, setStats] = useState(null);
  const [initialGuessCount, setInitialGuessCount] = useState(0);
  const hasInitialized = useRef(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${BACKEND_URL}/today`)
      .then((res) => res.json())
      .then((data) => {
        const currentStats = getStats();
        const prevGameRaw = localStorage.getItem("gosdle_today");
        const prevGame = prevGameRaw ? JSON.parse(prevGameRaw) : null;

        let loaded = prevGame;
        if (!prevGame || prevGame.date !== data.date) {
          loaded = getTodayGame(data.date);

          if (
            prevGame &&
            prevGame.date !== data.date &&
            !prevGame.won &&
            prevGame.guesses.length > 0
          ) {
            currentStats.currentStreak = 0;
            saveStats(currentStats);
          }
        }

        setTodayGame(loaded);
        setStats(currentStats);
        setAnswer(data.god);
      });
  }, [BACKEND_URL]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/gods`)
      .then((res) => res.json())
      .then((data) => {
        setGods(data);
      });
  }, [BACKEND_URL]);

  useEffect(() => {
    if (!todayGame) {
      return;
    }

    const currentGuesses = todayGame.guesses ?? [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(currentGuesses);
    setGuesses(currentGuesses.length);

    if (!hasInitialized.current) {
      setInitialGuessCount(currentGuesses.length);
      hasInitialized.current = true;
    }

    if (
      todayGame.won &&
      hasInitialized.current &&
      currentGuesses.length === initialGuessCount
    ) {
      setVictory(true);
    }
  }, [todayGame, initialGuessCount]);

  function submitGuess(guess, correctAnswer) {
    if (todayGame.won) {
      return;
    }

    const updateGame = {
      ...todayGame,
      guesses: [...todayGame.guesses, guess],
    };

    let updatedStats = stats;

    if (updateGame.guesses.length === 1) {
      updatedStats = {
        ...updatedStats,
        gamesPlayed: updatedStats.gamesPlayed + 1,
      };
    }

    if (guess.name.toLowerCase() === correctAnswer.name.toLowerCase()) {
      updateGame.won = true;
      const newCurrentStreak = updatedStats.currentStreak + 1;
      updatedStats = {
        ...updatedStats,
        gamesWon: updatedStats.gamesWon + 1,
        currentStreak: newCurrentStreak,
        maxStreak: Math.max(updatedStats.maxStreak, newCurrentStreak),
      };
    }

    if (updatedStats !== stats) {
      setStats(updatedStats);
      saveStats(updatedStats);
    }

    setTodayGame(updateGame);
    saveTodayGame(updateGame);
  }

  if (!todayGame || !stats) {
    return <div>Loading...</div>;
  }

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
            submitGuess={submitGuess}
          />
        </div>

        {guesses > 0 && (
          <GuessLayout>
            {matches
              .slice()
              .reverse()
              .map((guess, index) => {
                const originalIndex = matches.length - 1 - index;
                const shouldAnimate = originalIndex >= initialGuessCount;
                return (
                  <Guess
                    key={guess.id}
                    guess={guess}
                    answer={answer}
                    animate={shouldAnimate}
                  />
                );
              })}
          </GuessLayout>
        )}

        {victory && <Victory answer={answer} todayGame={todayGame} />}
      </div>
    </>
  );
}
