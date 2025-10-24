import React from "react";
import FeatureBlock6 from "../components/FeatureBlock6";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <div className="w-full">
      {/* === Hero + Form === */}
      <section className="relative overflow-hidden bg-[#e9f7ea] pt-16 md:pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-black/5">
              Contact us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Get in touch
              <br className="hidden md:block" /> with the team.
            </h1>
          </div>

          {/* Form Card */}
          <form
            onSubmit={onSubmit}
            className="mt-10 rounded-[1.5rem] bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/10"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Have a specific question or feedback? Fill out the form below,
                and we’ll get back to you promptly.
              </p>
            </div>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-800">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-800">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  required
                />
              </div>

              {/* Inquiry type */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-800">
                  Inquiry type
                </label>
                <select
                  className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>General question</option>
                  <option>Partnership</option>
                  <option>Press / Media</option>
                  <option>Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-800">
                  Your message
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter your message"
                  className="block w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  required
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6">
              <button
                type="submit"
                className="group relative inline-flex items-center"
                aria-label="Send message"
              >
                {/* Navy pill base */}
                <span
                  className="rounded-full bg-[#0b2a45] px-5 pr-12 py-2.5
               text-sm font-semibold text-white shadow
               ring-1 ring-black/10"
                >
                  Send
                </span>

                {/* Lime circle on the right */}
                <span
                  className="absolute right-1  grid h-7 w-7 place-items-center
               rounded-full bg-lime-400 text-slate-900
               shadow ring-1 ring-black/10
               transition-transform group-hover:translate-x-0.5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h12M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* === Full-width info strip (dark) === */}
      <section>
        <div className="  bg-[#05203E] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 md:py-10">
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left">
              <div>
                <div className="text-sm text-white/70">Founder’s name</div>
                <div className="mt-1 font-semibold">Dr Meshach Ayoola O.</div>
              </div>
              <div>
                <div className="text-sm text-white/70">Location</div>
                <div className="mt-1 font-semibold">Abuja, Nigeria</div>
              </div>
              <div>
                <div className="text-sm text-white/70">Contact</div>
                <a
                  href="mailto:Contact@dasamonie.com"
                  className="mt-1 font-semibold hover:underline"
                >
                  Contact@dasamonie.com
                </a>
              </div>
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
