import { useState } from "react";

export default function SubmitInput({ setGuesses, guesses }) {
  const [guess, setGuess] = useState("");

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    setGuess("");
    setGuesses((prev) => prev + 1);
    alert(`You guessed: ${guess}`);
    console.log(guesses);
  };

  return (
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
  );
}
