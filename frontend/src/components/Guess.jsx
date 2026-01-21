export default function Guess({ guess, answer, animate = true }) {
  const prefix =
    "flex flex-row items-center justify-center w-25 h-25 rounded-lg text-center text-white border border-gray-700 inset-shadow shadow-inner shadow-black break-words overflow-hidden hover:brightness-125 transition-all duration-100";
  const boxColors = {
    correct: prefix + " bg-green-500 ",
    incorrect: prefix + " bg-red-500 ",
    partial: prefix + " bg-yellow-500 ",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  if (!answer) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes flipCardHorizontal {
          0% {
            transform: rotateY(-90deg);
            opacity: 0;
          }
          40% {
            opacity: 0.3;
          }
          60% {
            opacity: 0.8;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
        
        .flip-card {
          animation: flipCardHorizontal 0.5s ease-in-out forwards;
          opacity: 0;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
      <div className="flex flex-row items-center gap-5 mb-2 justify-center">
        <div
          className={animate ? "flip-card relative group" : "relative group"}
          style={animate ? { animationDelay: "0s" } : {}}
        >
          <img
            src={`${BACKEND_URL}/images/${guess.image}`}
            alt={guess.name}
            title={guess.name}
            className="w-25 h-25 object-cover rounded-lg border-solid border-2 border-black inset-shadow shadow-inner shadow-black"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200">
            <p className="text-white font-semibold text-center px-2">
              {guess.name}
            </p>
          </div>
        </div>
        <div
          className={
            (guess.pantheon === answer.pantheon
              ? boxColors.correct
              : boxColors.incorrect) + (animate ? " flip-card" : "")
          }
          style={animate ? { animationDelay: "0.5s" } : {}}
        >
          <p>{guess.pantheon}</p>
        </div>
        <div
          className={
            (guess.gender === answer.gender
              ? boxColors.correct
              : boxColors.incorrect) + (animate ? " flip-card" : "")
          }
          style={animate ? { animationDelay: "1s" } : {}}
        >
          <p>{guess.gender}</p>
        </div>
        <div
          className={
            (guess.domain?.trim() === answer.domain?.trim()
              ? boxColors.correct
              : guess.domain?.trim() &&
                  answer.domain?.trim() &&
                  guess.domain
                    .trim()
                    .split(" ")
                    .some((emoji) =>
                      answer.domain?.trim().includes(emoji.trim()),
                    )
                ? boxColors.partial
                : boxColors.incorrect) +
            (animate ? " flip-card" : "") +
            " text-2xl"
          }
          style={animate ? { animationDelay: "1.5s" } : {}}
        >
          <p>{guess.domain}</p>
        </div>
        <div
          className={
            (guess.symbol?.trim() === answer.symbol?.trim()
              ? boxColors.correct
              : guess.symbol?.trim() &&
                  answer.symbol?.trim() &&
                  guess.symbol
                    .trim()
                    .split(" ")
                    .some((emoji) =>
                      answer.symbol?.trim().includes(emoji.trim()),
                    )
                ? boxColors.partial
                : boxColors.incorrect) +
            (animate ? " flip-card" : "") +
            " text-2xl"
          }
          style={animate ? { animationDelay: "2s" } : {}}
        >
          <p>{guess.symbol}</p>
        </div>
        <div
          className={
            (guess.personality?.trim() === answer.personality?.trim()
              ? boxColors.correct
              : guess.personality?.trim() &&
                  answer.personality?.trim() &&
                  guess.personality
                    .trim()
                    .split(", ")
                    .some((trait) =>
                      answer.personality
                        ?.trim()
                        .split(", ")
                        .includes(trait.trim()),
                    )
                ? boxColors.partial
                : boxColors.incorrect) + (animate ? " flip-card" : "")
          }
          style={animate ? { animationDelay: "2.5s" } : {}}
        >
          <p className="text-xs">{guess.personality}</p>
        </div>
        <div
          className={
            (guess.type === answer.type
              ? boxColors.correct
              : boxColors.incorrect) + (animate ? " flip-card" : "")
          }
          style={animate ? { animationDelay: "3s" } : {}}
        >
          <p>{guess.type}</p>
        </div>
        <div
          className={
            (guess.realm === answer.realm
              ? boxColors.correct
              : boxColors.incorrect) + (animate ? " flip-card" : "")
          }
          style={animate ? { animationDelay: "3.5s" } : {}}
        >
          <p className="text-sm">{guess.realm}</p>
        </div>
      </div>
    </>
  );
}
