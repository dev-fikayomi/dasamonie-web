
import React from "react";
import FeatureBlock6 from "../components/FeatureBlock6.jsx";


export default function About() {
  return (
    <div className="w-full">
      {/* ============== Hero ============== */}
      <section
        className="relative z-0 overflow-hidden bg-[#e9f7ea]"
        style={{ backgroundImage: "url('/heroBackground.png')" }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid items-center gap-10 pb-20 md:grid-cols-2">
            
            <div data-aos="fade-right">
              <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-black/5">
                Who we are
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-slate-900 md:text-5xl">
                Empowering Everyday Finance
                <br className="hidden md:block" /> for Everyone.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">
                At Dasamonie, we believe financial services should be simple,
                inclusive, and within everyone’s reach. We’re building an all-in-one
                platform that brings together VTU services, currency exchange, quick
                loans, and POS solutions—so individuals and businesses can do more,
                faster, and securely.
              </p>

             
            </div>


            <div
              className="relative flex items-center justify-center md:justify-end"
              data-aos="fade-left"
            >
              <img
                src="/AfricaMap.png"
                alt="Africa map"
                className="h-auto max-w-none
                     w-[420px] md:w-[520px] lg:w-[560px] xl:w-[620px]
                     drop-shadow-[0_12px_30px_rgba(0,0,0,0.15)] pb-20"
              />
            </div>
          </div>
        </div>


        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#e9f7ea] to-transparent" />
      </section>

      {/* ============== Overlap image (50/50 across the seam) ============== */}

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]
                    -mt-[150px] sm:-mt-[180px] md:-mt-[190px] lg:-mt-[200px]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] ring-1 ring-black/10 shadow-2xl">
              <img
                src="/AboutHero.png"
                alt="Happy customers using our services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============== Purpose ============== */}
      <section
        className="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-36 lg:pt-40 lg:px-8"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl  shadow-2xl">
          <img
                src="/DasaIcon.png"
                alt="DasaIcon"
                className="h-full w-full object-cover"
              />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Our purpose is to democratize access to banking, VTU, and global
            payments for 60M+ unbanked Nigerians.
          </h2>

          <p className="mt-5 text-lg leading-7 text-slate-700">
            Financial inclusion isn’t just about access to money—it’s about enabling
            people to participate fully in the economy. By breaking down the barriers
            of traditional banking, we’re creating tools that are simple,
            transparent, and tailored to everyday needs—from rural traders to young
            professionals in growing cities. Through secure technology and strong
            partnerships, we’re building a financial ecosystem where every Nigerian
            can send, receive, and manage money with confidence.
          </p>
        </div>
      </section>

     {/* ============== Big CTA Banner ============== */}

<section >

  <div
    className="
      relative w-screen mx-[calc(49%-50vw)]   
      rounded-t-[2rem] rounded-b-none         
      bg-gradient-to-b from-[#0b2a45] via-[#0a2740] to-[#091f34]
      text-white shadow-[0_30px_60px_rgba(2,6,23,.35)] 
    "
  >
    {/* content padding */}
    <div className="px-6 md:px-12 py-12 md:py-16 text-center">
      <p className="mx-auto max-w-4xl text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
        Empowering{" "}
        <span className="relative -rotate-6 inline-flex align-middle">
          <span
            className="inline-flex items-center justify-center rounded-2xl
                       px-4 md:px-5 py-1.5 md:py-2
                       bg-gradient-to-b from-lime-200 via-lime-300 to-lime-400
                       text-slate-900 ring-1 ring-black/10
                       shadow-[0_10px_24px_rgba(0,0,0,.25)]"
          >
            <span className="font-extrabold">10M+</span>
          </span>
        </span>{" "}
        users in Africa with a unified financial platform by 2026.
      </p>

      <div className="mt-6">
        <a
          href="/download"
          className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-50"
        >
          Get the app
        </a>
      </div>
    </div>
  </div>
</section>



      <FeatureBlock6
        title="Your Next Transaction Could Be This Easy!"
        desc="With speed, security, and simplicity, you’re one tap away from better money moves."
        img="/assets/feature-fx.png"
      />
    </div>
  );
}
