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
  const debouncedValue = useDebounce(guess, 100);

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
      {autoCompleteMatches.length > 0 &&
        guess.trim() &&
        debouncedValue === guess.trim() &&
        !matches.some((m) => m.name === guess) && (
          <div className="absolute bg-white border border-gray-300 mt-1 rounded-md w-120 max-h-60 overflow-y-auto z-10">
            {autoCompleteMatches.map((match) => (
              <div
                key={match.id}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={(e) => {
                  handleSubmitGuess(e, match);
                }}
              >
                {match.name}
              </div>
            ))}
          </div>
        )}
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
  );
}
