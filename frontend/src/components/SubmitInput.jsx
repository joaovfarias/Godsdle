import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce.jsx";
import config from "../config/env.js";

export default function SubmitInput({
  setGuesses,
  guess,
  setGuess,
  data,
  matches,
  setVictory,
  victory,
  answer,
  submitGuess,
}) {
  const [autoCompleteMatches, setAutoCompleteMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(guess, 50);
  const BACKEND_URL = config.BACKEND_URL;

  const handleSubmitGuess = (e, selectedMatch = null) => {
    e.preventDefault?.();

    if (autoCompleteMatches.length === 0 && !selectedMatch) {
      return;
    }

    const finalGuess = selectedMatch?.name || autoCompleteMatches[0].name;

    if (
      matches.some((m) => m.name.toLowerCase() === finalGuess.toLowerCase())
    ) {
      setGuess("");
      setAutoCompleteMatches([]);
      return;
    }

    setGuess("");
    setAutoCompleteMatches([]);
    setGuesses((prev) => prev + 1);

    const foundGod = data.find(
      (god) => god.name.toLowerCase() === finalGuess.toLowerCase(),
    );

    if (foundGod && foundGod.name.toLowerCase() === answer.name.toLowerCase()) {
      setTimeout(() => setVictory(true), 4000);
    }

    submitGuess(foundGod, answer);
  };

  useEffect(() => {
    if (!debouncedValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`${BACKEND_URL}/autocomplete?query=${debouncedValue}`)
      .then((res) => res.json())
      .then((data) => {
        data = data.filter(
          (god) => !matches.some((matchedGod) => matchedGod.name === god.name),
        );
        setAutoCompleteMatches(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching god data:", error);
        setLoading(false);
      });
  }, [debouncedValue, matches, BACKEND_URL]);

  return (
    <form
      className="mt-45"
      onSubmit={(e) => handleSubmitGuess(e)}
      aria-label="Submit your guess"
    >
      <input
        type="text"
        value={guess}
        aria-label="Guess the god"
        disabled={victory}
        onChange={(e) => {
          setGuess(e.target.value);
          setAutoCompleteMatches([]);
          setLoading(true);
        }}
        placeholder="Guess the god..."
        className="rounded-md border-2 p-2 w-120 bg-gray-100 focus:outline-none focus:ring-2"
        style={{ borderColor: "#ebbe6d", "--tw-ring-color": "#ebbe6d" }}
      />
      {autoCompleteMatches.length === 0 &&
        guess.trim() &&
        debouncedValue === guess.trim() &&
        !loading && (
          <div className="absolute bg-white border border-gray-300 mt-1 rounded-md w-120 p-2 z-10">
            No matches found
          </div>
        )}
      {autoCompleteMatches.length > 0 &&
        guess.trim() &&
        debouncedValue === guess.trim() &&
        !matches.some((m) => m.name === guess) && (
          <div className="absolute bg-white border border-gray-300 mt-1 rounded-md w-120 max-h-60 overflow-y-auto z-10">
            {autoCompleteMatches.map((match) => (
              <div
                className="flex flex-row items-center mb-4 mt-4 ml-3 hover:bg-gray-200 cursor-pointer"
                key={match.id}
                onClick={(e) => {
                  handleSubmitGuess(e, match);
                }}
              >
                <img
                  src={`${BACKEND_URL}/images/${match.image}`}
                  alt={match.name}
                  className="w-12 h-12 object-cover rounded-lg border-solid border-2 border-black inset-shadow shadow-inner shadow-black"
                />
                <div className="px-4 py-2">{match.name}</div>
              </div>
            ))}
          </div>
        )}
      <button
        type="submit"
        className="ml-2 rounded-md px-4 py-2 text-white font-semibold border-black shadow-lg transition-all duration-200 hover:brightness-110"
        style={{
          background: "linear-gradient(135deg, #ebbe6d 0%, #a68f4f 100%)",
        }}
        disabled={!guess.trim() || victory}
      >
        Submit
      </button>
    </form>
  );
}
