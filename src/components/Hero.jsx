
import { Link } from "react-router-dom";

function Dot({ small = false }) {
  return (
    <span
      className={`inline-block rounded-full bg-emerald-600 ${small ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
        }`}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-no-repeat bg-cover bg-center
        min-h-[520px] md:min-h-[640px]
      "
      style={{ backgroundImage: "url('/heroBackground.png')" }}
    >
      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/70 to-white/10 md:from-white/70 md:via-white/40 md:to-white/0" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full  text-sm px-3 py-1">
            <img
              src="/Frame 1000009119.svg"
              alt="App preview"
              className=" "
            />
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold font-nunito text-2xl font-bold">
            Complete Financial <br /> Freedom, Right in <br /> Your Pocket.
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl font-nunito text-2xl font-bold">
            From airtime top-ups to currency exchange, loans, and POS
            transactions—everything in one secure, friendly app you can trust.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center px-6 py-2 mt-3 font-medium font-nunito text-2xl font-bold text-white transition rounded-[600px]"
            style={{
              background: "#031E3C",
              boxShadow: "0 0 16px 0 rgba(255, 255, 255, 0.25) inset",
            }}
          >
            Download App
          </Link>


          <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-nunito text-2xl font-bold">
            <li className="flex items-center gap-2"><img
              src="/Frame 1000009725.svg"
              alt="App preview"
              className=" "
            /> Instant VTU Recharge</li>
            <li className="flex items-center gap-2"><img
              src="/Frame 1000009724.svg"
              alt="App preview"
              className=" "
            /> Flexible Loans</li>

          </ul>
          <ul className="mt-6 grid grid-cols-3 sm:grid-cols-3 gap-2 text-sm font-nunito text-2xl font-bold">
            <li className="flex items-center gap-2"><img
              src="/FrameIcon.svg"
              alt="App preview"
              className=" "
            /> Fast Currency Exchange</li>
            <li className="flex items-center gap-2"><img
              src="/FrameIcon2.svg"
              alt="App preview"
              className=" "
            /> POS Services</li>

          </ul>
        </div>

        {/* RIGHT SIDE - APP PREVIEW IMAGE */}
        <div className="relative">
          <img
            src="/heroImg.png"
            alt="App preview"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
}
