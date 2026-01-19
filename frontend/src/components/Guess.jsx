export default function Guess() {
  const prefix =
    "flex flex-row items-center justify-center w-18 h-18 rounded-lg text-center border border-gray-700";
  const boxColors = {
    correct: prefix + " bg-green-500 ",
    incorrect: prefix + " bg-red-500 ",
    first: prefix + " bg-gray-300 ",
  };

  return (
    <div className="flex flex-row items-center gap-5 mt-2 mb-6 justify-center">
      <div className={boxColors.first}>
        <p>Zeus</p>
      </div>
      <div className={boxColors.correct}>
        <p>Greek</p>
      </div>
      <div className={boxColors.incorrect}>
        <p>Male</p>
      </div>
      <div className={boxColors.incorrect}>
        <p>Sky, Thunder</p>
      </div>
      <div className={boxColors.correct}>
        <p>Tall</p>
      </div>
      <div className={boxColors.correct}>
        <p>No</p>
      </div>
      <div className={boxColors.incorrect}>
        <p>God</p>
      </div>
      <div className={boxColors.incorrect}>
        <p>Mount Olympus</p>
      </div>
    </div>
  );
}
