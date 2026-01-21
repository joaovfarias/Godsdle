import { useEffect, useRef, useState } from "react";

export default function Victory({ answer, todayGame }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [numberTries, setNumberTries] = useState(0);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const sectionRef = useRef(null);

  function getNextUtcMidnight() {
    const now = new Date();

    const nextMidnight = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0,
        0,
        0,
      ),
    );

    return nextMidnight;
  }

  function formatRemaining(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}`
    );
  }

  useEffect(() => {
    if (todayGame?.guesses) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNumberTries(todayGame.guesses.length);
    }
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [todayGame]);

  useEffect(() => {
    function updateTimer() {
      const now = new Date();
      const nextMidnight = getNextUtcMidnight();
      const diff = nextMidnight - now;

      setTimeLeft(formatRemaining(diff));
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!answer) return null;

  return (
    <>
      <div
        ref={sectionRef}
        className="flex flex-col items-center justify-center gap-4 mb-8 mt-150"
      >
        <div
          className="rounded-md px-6 py-3 text-white font-semibold border-2 border-black shadow-lg"
          style={{
            background: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
          }}
        >
          Victory! You've guessed the god correctly.
        </div>

        <div className="flex flex-col items-center gap-10 ">
          <div className="flex items-center  bg-white rounded-lg shadow-lg border-2 border-black px-4 py-3">
            <img
              src={`${BACKEND_URL}/images/${answer.image}`}
              alt={answer.name}
              className="w-22 h-22 object-cover rounded-md border-solid border-2 border-black inset-shadow shadow-inner shadow-black"
            />
            <div className="ml-4">
              <div className="text-lg">{answer.name}</div>
              <div className="text-sm text-gray-600">
                Number of tries: {numberTries}
              </div>
            </div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg border-2 border-black px-4 py-3">
            <div className="">Next God in:</div>
            <div className="text-2xl font-bold">{timeLeft}</div>
          </div>
        </div>
      </div>

      <div style={{ height: "50vh" }} />
    </>
  );
}
