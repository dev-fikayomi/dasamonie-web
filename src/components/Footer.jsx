import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0b2a45] text-white">
      {/* BG image layer — only visible on md+ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/footerImage.png')", // keep the file in /public
          backgroundPosition: "center -300px",
        }}
      />
      {/* Optional dark overlay for readability on top of the image (md+) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block bg-[#0b2a45]/70"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pt-12 md:pt-14 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + blurb */}
          <div>
            <div className="mb-4 flex items-center gap-3 text-lg font-bold">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <img
                  src="/logo.png"
                  alt="Dasamonie Logo"
                  className="h-8 w-8 object-contain"
                />
                Dasamonie
              </Link>
            </div>
            <p className="max-w-xs text-white/90">
              With Dasamonie, the speed, security, and simplicity you’ve been
              waiting for is already here. Take the first step now, your money
              will thank you.
            </p>

            <div className="mt-5 flex items-center gap-4 text-white/80">
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="YouTube">
                YouTube
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="mb-3 font-semibold">Products</p>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/products">Loan services</Link>
              </li>
              <li>
                <Link to="/products">VTU services</Link>
              </li>
              <li>
                <Link to="/products">Currency exchange</Link>
              </li>
              <li>
                <Link to="/products">Virtual cards</Link>
              </li>
              <li>
                <Link to="/products">POS Services</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-3 font-semibold">Company</p>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Help center
                </a>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 font-semibold">Legal</p>
            <ul className="space-y-2 text-white/90">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Acceptable use policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20" />

        <div className="flex flex-col items-start gap-2 py-4 text-xs md:flex-row md:items-center md:justify-between">
          <span>© {year} Dasamonie. All rights reserved.</span>
          <a
            href="mailto:contact@dasamonie.com"
            className="hover:underline break-all"
          >
            contact@dasamonie.com
          </a>
        </div>
      </div>
    </footer>
  );
}
