import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce.jsx";

export default function SubmitInput({
  setGuesses,
  guess,
  setGuess,
  data,
  matches,
  setMatches,
}) {
  const [autoCompleteMatches, setAutoCompleteMatches] = useState([]);
  const debouncedValue = useDebounce(guess, 50);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmitGuess = (e, selectedMatch = null) => {
    if (autoCompleteMatches.length === 0 && !selectedMatch) {
      return;
    }

    e.preventDefault();

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
    if (foundGod) {
      setMatches((prev) => [...prev, foundGod]);
    }
  };

  useEffect(() => {
    if (!debouncedValue) {
      return;
    }

    fetch(`http://localhost:8000/autocomplete?query=${debouncedValue}`)
      .then((res) => res.json())
      .then((data) => {
        data = data.filter(
          (god) => !matches.some((matchedGod) => matchedGod.name === god.name),
        );
        setAutoCompleteMatches(data);
      })
      .catch((error) => {
        console.error("Error fetching god data:", error);
      });
  }, [debouncedValue, matches]);

  return (
    <div className="mt-20">
      <input
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
          setAutoCompleteMatches([]);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmitGuess(e);
          }
        }}
        placeholder="Guess the god..."
        className="rounded-md border border-gray-700 p-2 w-120 bg-gray-100"
      />
      {autoCompleteMatches.length === 0 &&
        guess.trim() &&
        debouncedValue === guess.trim() && (
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
        onClick={(e) => {
          handleSubmitGuess(e);
        }}
        className="ml-2 rounded-md bg-gray-500 px-4 py-2 text-white border-black inset-shadow shadow-inner shadow-black hover:bg-gray-600"
        disabled={!guess.trim()}
      >
        Submit
      </button>
    </div>
  );
}
