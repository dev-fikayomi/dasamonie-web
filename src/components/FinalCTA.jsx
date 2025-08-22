export default function FinalCTA() {
    return (
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-white p-6 md:p-10 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.15)] grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Your Next Transaction Could Be This Easy!
              </h3>
              <p className="mt-3 text-slate-600">
                With speed, security, and simplicity, you’re one tap away from better money moves.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700 transition"
                  onClick={(e) => e.preventDefault()}
                >
                  Get the App
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 transition"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more
                </a>
              </div>
            </div>
  
            {/* swap with your device shot */}
            <img
              src="/assets/cta-phone.png"
              alt="App cards"
              className="w-full max-w-sm mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    );
  }
  