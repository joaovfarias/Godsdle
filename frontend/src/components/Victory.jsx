import { useEffect, useRef, useState } from "react";
import config from "../config/env.js";
import { IoStatsChart } from "react-icons/io5";

export default function Victory({ answer, todayGame, onShowStats }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [numberTries, setNumberTries] = useState(0);

  const BACKEND_URL = config.BACKEND_URL;
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
      <style>{`
        .victory-text-glow {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .victory-text-glow::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 14px;
          background: linear-gradient(120deg, #f8e7a1, #ffd166, #a68f4f, #f8e7a1);
          background-size: 200% 200%;
          animation: victoryTextGlow 5s linear infinite;
          filter: blur(8px);
          opacity: 1;
          z-index: 0;
        }

        .victory-text-glow span {
          position: relative;
          z-index: 1;
        }

        @keyframes victoryTextGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div
        ref={sectionRef}
        className="flex flex-col items-center justify-center gap-4 mb-8 mt-150"
      >
        <div
          className="victory-text-glow rounded-md px-6 py-3 text-white font-semibold border-2 border-black shadow-lg"
          style={{
            background: "linear-gradient(135deg, #ebbe6d 0%, #a68f4f 100%)",
          }}
        >
          <span>Victory! You've guessed the god correctly.</span>
        </div>

        <div className="flex flex-col items-center gap-10 ">
          <div className="flex items-center  bg-white rounded-lg shadow-lg border-2 border-black px-4 py-3">
            <img
              src={`${BACKEND_URL}/images/${answer.image}`}
              alt={answer.name}
              className="w-25 h-25 object-cover rounded-md border-solid border-2 border-black inset-shadow shadow-inner shadow-black"
            />
            <div className="ml-4 text-center">
              <div className="text-lg">{answer.name}</div>
              <div className="text-sm text-gray-600">
                Number of tries: {numberTries}
              </div>
              <div className="mt-2">Check your Stats:</div>
              <div
                className="flex justify-center"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  onShowStats?.();
                }}
              >
                <IoStatsChart
                  className="text-4xl mt-2 hover:scale-110 cursor-pointer transition-transform"
                  size={30}
                />
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
