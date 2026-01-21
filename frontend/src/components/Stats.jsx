import { IoMdClose } from "react-icons/io";

export default function Stats({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="absolute left-1/2 top-50 z-10 w-[min(90vw,760px)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 px-6 py-4 text-slate-800 shadow-xl backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-lg font-bold  text-black">Statistics</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed">
            Games played: <span className="font-normal">1234</span>
            <br />
            Win percentage: <span className="font-normal">56%</span>
            <br />
            Current streak: <span className="font-normal">5</span>
            <br />
            Max streak: <span className="font-normal">12</span>
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
    </div>
  );
}
