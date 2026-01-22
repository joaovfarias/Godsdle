export default function GuessLayout({ children }) {
  return (
    <section
      className="flex flex-col items-center gap-5 mt-10 justify-center"
      aria-label="Guess results"
    >
      <header
        className="flex flex-row items-center gap-10 justify-center text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] backdrop-blur-[2px] px-8 py-4 rounded-lg"
        aria-label="Guess legend"
      >
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">God</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Name of the deity
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Pantheon</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Greek or Nordic
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Gender</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Male or Female
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Domain</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Area of influence or responsibility
              <br />
              (War, Love, Sea etc.)
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Symbol</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Primary symbol or animal associated
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Personality</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Calm, Aggressive, Stoic etc...
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Type</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              God, Demigod or Titan
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <div className="group relative cursor-default">
            <p className="font-bold mb-2">Realm</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Primary place of residence
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </header>

      <section
        className="flex flex-col items-center justify-center"
        aria-label="Guess attempts"
      >
        {children}
      </section>
    </section>
  );
}
