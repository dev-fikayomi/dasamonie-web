// src/components/Header.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

/* Reusable nav item */
const NavItem = ({ to, children, onClick, className = "" }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      [
        "px-3 py-2 rounded-xl transition hover:bg-slate-100",
        isActive ? "text-emerald-700 font-semibold" : "text-slate-700",
        className,
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

/* Full-screen mobile menu via portal to <body> */
function MobileMenu({ open, onClose, children }) {
  const portalNode = useMemo(() => {
    const el = document.createElement("div");
    el.id = "mobile-menu-portal";
    return el;
  }, []);

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      try {
        document.body.removeChild(portalNode);
      } catch {}
    };
  }, [portalNode]);

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 md:hidden bg-black/40 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
          "z-[10000000]", // very high to beat any hero z-index
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Full-screen sheet */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={[
          "fixed inset-0 md:hidden bg-white",
          // robust viewport height across mobile browsers
          "h-[100svh] min-h-[100svh] max-h-[100dvh] w-screen",
          "flex flex-col shadow-2xl ring-1 ring-black/10",
          "transition-transform duration-300",
          open ? "translate-y-0" : "translate-y-full",
          "z-[10000001]",
          // safe-area padding for notches
          "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
          "overscroll-contain",
        ].join(" ")}
      >
        {children}
      </aside>
    </>,
    portalNode
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => setOpen(false), [location]);

  // Close on Esc
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Lock page scroll while menu is open (use <html> to cover iOS)
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    if (open) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      root.style.overflow = prevHtmlOverflow || "";
      body.style.overflow = prevBodyOverflow || "";
      body.style.touchAction = "";
    }
    return () => {
      root.style.overflow = prevHtmlOverflow || "";
      body.style.overflow = prevBodyOverflow || "";
      body.style.touchAction = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Dasamonie Logo" className="h-8 w-8 object-contain" />
          Dasamonie
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/blog">Blog</NavItem>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/download"
          className="hidden md:inline-flex items-center rounded-[600px] px-6 py-2 font-medium text-white transition"
          style={{ background: "#031E3C", boxShadow: "0 0 16px 0 rgba(255,255,255,.25) inset" }}
        >
          Download App
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)}>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-white">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="Dasamonie Logo" className="h-7 w-7 object-contain" />
            Dasamonie
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-2 bg-white divide-y divide-slate-100">
          {[
            ["Products", "/products"],
            ["Services", "/services"],
            ["Pricing", "/pricing"],
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Blog", "/blog"],
          ].map(([label, href]) => (
            <NavItem
              key={href}
              to={href}
              className="block text-lg px-4 py-4"
              onClick={() => setOpen(false)}
            >
              {label}
            </NavItem>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-slate-200 p-4 bg-white">
          <Link
            to="/download"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center rounded-[600px] bg-[#031E3C] px-5 py-3 font-medium text-white shadow-sm"
          >
            Download App
          </Link>
        </div>
      </MobileMenu>
    </header>
  );
}
