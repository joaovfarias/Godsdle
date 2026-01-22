import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { getStats } from "../storage/storage.js";

export default function Stats({ show, onClose }) {
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
  });

  useEffect(() => {
    const currentStats = getStats();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStats(currentStats);
  }, []);

  if (!show) return null;

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Statistics"
      className="absolute left-1/2 top-50 z-10 w-[min(90vw,760px)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 px-6 py-4 text-slate-800 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-lg font-bold  text-black">Statistics</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed">
            Games played:{" "}
            <span className="font-normal">{stats.gamesPlayed}</span>
            <br />
            Win percentage:{" "}
            <span className="font-normal">
              {stats.gamesPlayed > 0
                ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
                : 0}
              %
            </span>
            <br />
            Current streak:{" "}
            <span className="font-normal">{stats.currentStreak}</span>
            <br />
            Max streak: <span className="font-normal">{stats.maxStreak}</span>
          </p>
        </div>
        <button
          type="button"
          aria-label="Close statistics"
          onClick={onClose}
          className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <IoMdClose size={22} />
        </button>
      </div>
    </section>
  );
}
