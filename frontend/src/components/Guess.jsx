export default function Guess() {
  const boxColors = {
    correct:
      "flex flex-row items-center justify-center w-18 h-18 bg-green-500 rounded-lg text-center",
    incorrect:
      "flex flex-row items-center justify-center w-18 h-18 bg-red-500 rounded-lg text-center",
    first:
      "flex flex-row items-center justify-center w-18 h-18 bg-gray-300 rounded-lg text-center",
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
