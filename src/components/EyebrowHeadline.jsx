function Dot({ small = false }) {
  return (
    <span
      className={`inline-block rounded-full bg-emerald-600 ${
        small ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
      }`}
    />
  );
}

export default function EyebrowHeadline() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-1 text-center text-4xl md:text-6xl max-w-[45rem] mx-auto px-4 font-nunito font-bold">
        <p className="">Financial Freedom,</p>
        <div className="flex flex-row items-center flex-wrap justify-center gap-2 w-full">
          <div className="flex flex-row items-center gap-2">
            <span>From Dawn</span>
            <img
              src="/Frame 1000009732.svg"
              alt="sunrise icon"
              className="h-12"
            />
          </div>

          <div className="flex flex-row items-center gap-2">
            <span>to Dusk</span>
            <img
              src="/Frame 1000009733.svg"
              alt="sunset icon"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
