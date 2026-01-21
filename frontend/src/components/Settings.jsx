import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Settings({ show, onClose, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!show) return null;

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="absolute left-1/2 top-50 z-10 w-[min(90vw,760px)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 px-6 py-4 text-slate-800 shadow-xl backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-lg font-bold  text-black">Settings</p>
          <div>
            <div className="mt-2 text-sm font-semibold leading-relaxed">
              <button
                className="rounded-md px-2 py-1 text-white font-semibold border-black shadow-lg transition-all duration-200 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(135deg, #ebbe6d 0%, #a68f4f 100%)",
                }}
                onClick={handleShowAnswer}
              >
                Show Answer
              </button>
              {showAnswer && (
                <p className="mt-2 text-sm font-normal leading-relaxed text-black">
                  The answer is: {answer.name}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close settings"
          onClick={() => {
            onClose();
            setShowAnswer(false);
          }}
          className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <IoMdClose size={22} />
        </button>
      </div>
    </div>
  );
}
