export default function StepsStrip() {
  const steps = [
    {
      img: "/Frame1.png",
      title: "Quick Sign-Up",
      text: "Create your account, verify, and you’re ready—no long forms.",
    },
    {
      img: "/Frame2.png",
      title: "Explore Services You Need",
      text: "From banking to currency exchange and POS, choose what fits you.",
    },
    {
      img: "/Frame3.png",
      title: "Watch Transactions Happen",
      text: "Real-time updates and insights help you stay in control.",
    },
  ];

  return (
    <section
      className="relative text-slate-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/processBG.png')` }} // keep or remove
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col gap-2 w-full max-w-full lg:max-w-[38rem] mx-auto">
          <h3 className="text-center text-3xl md:text-6xl font-bold">
            From Sign-Up to Success, in Minutes
          </h3>
          <p className="text-slate-400 text-xl lg:text-2xl text-center">
            We keep it easy: create your account, choose the service you need,
            and watch it happen in seconds whether it’s a top-up, a loan,
            currency exchange, or a POS payment.
          </p>
        </div>

        <ol className="mt-10 grid lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li
              key={s.title}
              className="relative rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full mt-10 h-[30rem] object-contain object-top mb-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                  {s.title}
                </p>
                <p className="mt-2 text-slate-200/90">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
