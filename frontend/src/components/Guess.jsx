export default function Guess({ guess, answer }) {
  const prefix =
    "flex flex-row items-center justify-center w-25 h-25 rounded-lg text-center border border-gray-700 inset-shadow shadow-inner shadow-black break-words overflow-hidden hover:brightness-125 transition-all duration-100";
  const boxColors = {
    correct: prefix + " bg-green-500 ",
    incorrect: prefix + " bg-red-500 ",
    partial: prefix + " bg-yellow-500 ",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
          className={"flip-card relative group"}
          style={{ animationDelay: "0s" }}
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
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "0.5s" }}
        >
          <p>{guess.pantheon}</p>
        </div>
        <div
          className={
            (guess.gender === answer.gender
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "1s" }}
        >
          <p>{guess.gender}</p>
        </div>
        <div
          className={
            (guess.domain === answer.domain
              ? boxColors.correct
              : guess.domain
                    .split(" ")
                    .some((emoji) => answer.domain.includes(emoji))
                ? boxColors.partial
                : boxColors.incorrect) + " flip-card text-2xl"
          }
          style={{ animationDelay: "1.5s" }}
        >
          <p>{guess.domain}</p>
        </div>
        <div
          className={
            (guess.animal === answer.animal
              ? boxColors.correct
              : guess.animal
                    .split(" ")
                    .some((emoji) => answer.animal.includes(emoji))
                ? boxColors.partial
                : boxColors.incorrect) + " flip-card text-2xl"
          }
          style={{ animationDelay: "2s" }}
        >
          <p>{guess.animal}</p>
        </div>
        <div
          className={
            (guess.mortal === answer.mortal
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "2.5s" }}
        >
          <p>{guess.mortal ? "Yes" : "No"}</p>
        </div>
        <div
          className={
            (guess.type === answer.type
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "3s" }}
        >
          <p>{guess.type}</p>
        </div>
        <div
          className={
            (guess.home === answer.home
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "3.5s" }}
        >
          <p>{guess.home}</p>
        </div>
      </div>
    </>
  );
}
