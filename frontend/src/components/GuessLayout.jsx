export default function GuessLayout({ children }) {
  return (
    <div className="flex flex-col items-center gap-5 mt-5 justify-center">
      <div className="flex flex-row items-center gap-3 justify-center">
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Name</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Pantheon</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Gender</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Domain</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Height</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Mortal</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Type</p>
          <hr className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Home</p>
          <hr className="w-20" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
