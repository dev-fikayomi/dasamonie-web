import React from "react";
import { Link } from "react-router-dom";
import FeatureBlock6 from "../components/FeatureBlock6";

const POSTS = [
  {
    id: 1,
    title: "The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game",
    excerpt:
      "Discover how VTU makes airtime and data recharges faster, easier, and more reliable—no more queues or scratch cards.",
    date: "17 July, 2025",
    readTime: "3 min read",
    image: "/Blog1.png", 
    slug: "/blog/vtu-changing-the-game",
  },
  {
    id: 2,
    title: "How to Pick the Right POS for Your Small Business",
    excerpt:
      "From fees to reliability—here’s a simple guide to choosing a POS that actually works for you.",
    date: "17 July, 2025",
    readTime: "3 min read",
    image: "/Blog2.png",
    slug: "/blog/right-pos-small-business",
  },
  {
    id: 3,
    title: "Cross-Border Payments: What Nigerians Need to Know",
    excerpt:
      "Send and receive across borders without stress. We break down fees, speed, and compliance.",
    date: "17 July, 2025",
    readTime: "4 min read",
    image: "/Blog2.png",
    slug: "/blog/cross-border-payments",
  },
  {
    id: 4,
    title: "Virtual Cards 101: Safer Online Payments",
    excerpt:
      "Protect your main card, set limits, and shop online with confidence using virtual cards.",
    date: "17 July, 2025",
    readTime: "2 min read",
    image: "/Blog2.png",
    slug: "/blog/virtual-cards-101",
  },
  {
    id: 5,
    title: "Micro-Loans for Everyday Needs: What to Check",
    excerpt:
      "Before you tap ‘apply’, here are the terms and signals to review so you borrow smart.",
    date: "17 July, 2025",
    readTime: "3 min read",
    image: "/Blog2.png",
    slug: "/blog/micro-loans-everyday",
  },
  {
    id: 6,
    title: "Currency Swap Myths—Busted",
    excerpt:
      "We debunk the most common misconceptions so you can exchange at fair, transparent rates.",
    date: "17 July, 2025",
    readTime: "3 min read",
    image: "/Blog2.png",
    slug: "/blog/currency-swap-myths",
  },
];

export default function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <div >
      {/* ====== Full-width dark hero ====== */}
      <section className="relative">
        <div className=" mx-[calc(50%-50vw)] bg-[#0b2a45] text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14 md:py-20 text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/20">
              Blog
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Insights to Power
              <br className="hidden md:block" />
              Your Money Journey
            </h1>
          </div>
        </div>
      </section>

      {/* ====== Featured card overlapping the hero ====== */}
      <section className="relative -mt-10 md:-mt-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <article className="grid items-stretch gap-6 rounded-[1.5rem] bg-white p-4 md:p-5 shadow-xl ring-1 ring-black/10 md:grid-cols-[minmax(280px,40%)_1fr]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-1">
              <div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
                    {featured.date}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700 ring-1 ring-slate-200">
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="mt-3 text-xl md:text-2xl font-bold text-slate-900">
                  {featured.title}
                </h2>
                <p className="mt-2 text-slate-600">{featured.excerpt}</p>
              </div>

              <div className="mt-5">
                <Link
                  to={featured.slug}
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
                >
                  Read article
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ====== Grid of posts ====== */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-[1.25rem] bg-white shadow ring-1 ring-black/10"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2 p-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
                    {p.date}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700 ring-1 ring-slate-200">
                    {p.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3">
                  {p.excerpt}
                </p>

                <div className="pt-3">
                  <Link
                    to={p.slug}
                    className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
                  >
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
