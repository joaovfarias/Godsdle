import { useEffect, useRef } from "react";

export default function Victory({ answer }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll the victory section into view when it mounts
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  if (!answer) return null;

  return (
    <>
      {/* Victory section near the bottom: banner above card */}
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
              <div className="text-sm text-gray-600">Number of tries: 12</div>
            </div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg border-2 border-black px-4 py-3">
            <div className="">Next God in:</div>
            <div className="text-2xl font-bold">02:15:30</div>
          </div>
        </div>
      </div>

      {/* Bottom spacer to allow centering on scroll */}
      <div style={{ height: "50vh" }} />
    </>
  );
}
