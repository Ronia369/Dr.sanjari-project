"use client";
import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  // close on ESC and clicking outside
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-1 bg-blue-300/50 rounded-3xl text-black p-4 flex items-center justify-between mx-4 md:mx-12 z-40">
      <h1 className="text-lg md:text-2xl font-bold">مطب دکتر المیرا سنجری</h1>

      {/* desktop nav */}
      <nav className="hidden md:flex space-x-8 text-xl items-center">
        <a href="#home" className="hover:underline">خانه</a>
        <a href="#about" className="hover:underline">درباره من</a>
        <a href="#services" className="hover:underline">خدمات</a>
        <a href="#blog" className="hover:underline">مقالات</a>
        <a href="#appointment" className="hover:underline ml-3">نوبت‌گیری</a>
        <a href="#contact" className="hover:underline">تماس</a>
        <a href="#appointment"><button className="bg-pink-200 text-gray-800 px-4 py-2 rounded hover:bg-pink-300">نوبت‌گیری</button></a>
      </nav>

      {/* mobile hamburger button */}
      <div className="md:hidden flex items-center">
        <button
          ref={btnRef}
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((s) => !s)}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {/* simple animated hamburger */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path
                className={`transition-transform duration-300 ${open ? "transform rotate-45 translate-y-1.5" : ""}`}
                d="M4 7h16"
              />
              <path
                className={`transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                d="M4 12h16"
              />
              <path
                className={`transition-transform duration-300 ${open ? "transform -rotate-45 -translate-y-1.5" : ""}`}
                d="M4 17h16"
              />
            </g>
          </svg>
        </button>
      </div>

      {/* mobile panel (RTL) */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`fixed top-0 ${open ? "right-0" : "-right-full"} h-full w-11/12 max-w-xs bg-white/95 backdrop-blur-md shadow-2xl p-6 transition-right duration-300 md:hidden rtl`}
        style={{ transitionProperty: 'right' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">فهرست</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="بستن منو"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-right text-lg">
          <a href="#home" className="block py-2 hover:underline" onClick={() => setOpen(false)}>خانه</a>
          <a href="#about" className="block py-2 hover:underline" onClick={() => setOpen(false)}>درباره من</a>
          <a href="#services" className="block py-2 hover:underline" onClick={() => setOpen(false)}>خدمات</a>
          <a href="#blog" className="block py-2 hover:underline" onClick={() => setOpen(false)}>مقالات</a>
          <a href="#appointment" className="block py-2 hover:underline" onClick={() => setOpen(false)}>نوبت‌گیری</a>
          <a href="#contact" className="block py-2 hover:underline" onClick={() => setOpen(false)}>تماس</a>

          <a href="#appointment" className="mt-4">
            <button className="w-full bg-pink-200 text-gray-800 px-4 py-2 rounded hover:bg-pink-300">نوبت‌گیری</button>
          </a>
        </nav>

        {/* small footer in the panel */}
        <div className="mt-auto pt-6 text-sm text-gray-600">© {new Date().getFullYear()} مطب دکتر المیرا سنجری</div>
      </div>
    </header>
  );
}
export default Header;