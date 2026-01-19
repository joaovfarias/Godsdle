export default function Guess({ guess, answer }) {
  const prefix =
    "flex flex-row items-center justify-center w-25 h-25 rounded-lg text-center border border-gray-700 inset-shadow shadow-inner shadow-black break-words overflow-hidden p-2";
  const boxColors = {
    correct: prefix + " bg-green-500 ",
    incorrect: prefix + " bg-red-500 ",
    partial: prefix + " bg-yellow-500 ",
    first: prefix + " bg-yellow-100 ",
  };

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
          animation: flipCardHorizontal 1s ease-in-out forwards;
          opacity: 0;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
      <div className="flex flex-row items-center gap-5 mt-2 mb-2 justify-center">
        <div
          className={boxColors.first + " flip-card"}
          style={{ animationDelay: "0s" }}
        >
          <p>{guess.name}</p>
        </div>
        <div
          className={
            (guess.pantheon === answer.pantheon
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "1s" }}
        >
          <p>{guess.pantheon}</p>
        </div>
        <div
          className={
            (guess.gender === answer.gender
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "2s" }}
        >
          <p>{guess.gender}</p>
        </div>
        <div
          className={
            (answer.domain.includes(guess.domain)
              ? guess.domain === answer.domain
                ? boxColors.correct
                : boxColors.partial
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "3s" }}
        >
          <p>{guess.domain}</p>
        </div>
        <div
          className={
            (answer.animal.includes(guess.animal)
              ? guess.animal === answer.animal
                ? boxColors.correct
                : boxColors.partial
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "4s" }}
        >
          <p>{guess.animal}</p>
        </div>
        <div
          className={
            (guess.mortal === answer.mortal
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "5s" }}
        >
          <p>{guess.mortal ? "Yes" : "No"}</p>
        </div>
        <div
          className={
            (guess.type === answer.type
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "6s" }}
        >
          <p>{guess.type}</p>
        </div>
        <div
          className={
            (guess.home === answer.home
              ? boxColors.correct
              : boxColors.incorrect) + " flip-card"
          }
          style={{ animationDelay: "7s" }}
        >
          <p>{guess.home}</p>
        </div>
      </div>
    </>
  );
}
