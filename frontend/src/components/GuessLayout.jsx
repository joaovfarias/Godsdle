export default function GuessLayout({ children }) {
  return (
    <div className="flex flex-col items-center gap-5 mt-5 justify-center">
      <div className="flex flex-row items-center gap-10 justify-center text-yellow-950 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Name</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Pantheon</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Gender</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Domain</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Animal</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Mortal</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Type</p>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-center w-20">
          <p className="font-bold mb-2">Home</p>
          <hr className="w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
