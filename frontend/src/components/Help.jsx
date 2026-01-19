import { IoMdClose } from "react-icons/io";

export default function Help({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="absolute left-1/2 top-50 z-10 w-[min(90vw,760px)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 px-6 py-4 text-slate-800 shadow-xl backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            How to play
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-900">
            Guess the God
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Try to guess the correct god in as few attemps as possible. This
            game contains <strong>Gods, Semi-Gods and Titans </strong> from the
            <strong> Greek and Nordic</strong> mythologies only.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Type a name and submit to check if it matches.</li>
            <li>Pay attention to feedback after each guess.</li>
            <li>Use as few attempts as possible to win.</li>
            <li>Red means wrong and green means right</li>
          </ul>
        </div>
        <button
          type="button"
          aria-label="Close help"
          onClick={onClose}
          className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <IoMdClose size={22} />
        </button>
      </div>
    </div>
  );
}
