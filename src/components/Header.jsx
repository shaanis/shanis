import React from "react";
import {
  FiMenu, FiX, FiArrowRight, FiHome, FiBriefcase,
  FiUser, FiMessageSquare, FiStar, FiHelpCircle
} from "react-icons/fi";
import logo from "../assets/projects/ms-removebg-preview.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ openMenu, setOpenMenu }) => {
   const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
  { label: "Home", path: "/", icon: <FiHome /> },
  { label: "Projects", path: "/projects", icon: <FiBriefcase /> },
  { label: "Services", path: "/services", icon: <FiHelpCircle /> },
  { label: "Reviews", path: "/testimonials", icon: <FiStar /> },
  { label: "Contact", path: "/contact", icon: <FiMessageSquare /> },
  { label: "Blog", path: "/blog", icon: <FiUser /> },
];

  return (
    <>
{/* MOBILE  BOTTOM MENU */}
<div
  className={`fixed inset-0 z-[300] md:hidden transition-all duration-500 ${
    openMenu ? "visible" : "invisible"
  }`}
>
  <div
    onClick={() => setOpenMenu(false)}
    className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${
      openMenu ? "opacity-100" : "opacity-0"
    }`}
  />

  <div
    className={`absolute left-3 right-3 bottom-3 rounded-[32px]
    bg-[#080808]/95 border border-white/10 backdrop-blur-3xl
    shadow-[0_-30px_100px_rgba(0,0,0,0.75)]
    overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${openMenu ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 scale-95"}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f9731630,transparent_45%)] pointer-events-none" />

    <div className="relative p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
            <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          </div>

          <div>
            <h3 className="text-white font-bold leading-tight">Mohammed Shanis</h3>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.22em]">
              Full Stack Developer
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpenMenu(false)}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center active:scale-90 transition"
        >
          <FiX size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setOpenMenu(false);
              }}
              className={`relative overflow-hidden rounded-3xl p-4 min-h-[92px]
              border transition-all duration-300 text-left active:scale-[0.97]
              ${
                active
                  ? "bg-white text-black border-white shadow-[0_15px_40px_rgba(255,255,255,0.18)]"
                  : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 text-lg ${
                  active ? "bg-black text-white" : "bg-white/10 text-white/70"
                }`}
              >
                {item.icon}
              </div>

              <span className="block text-sm font-bold tracking-wide">
                {item.label}
              </span>

              <span
                className={`block text-[10px] mt-1 ${
                  active ? "text-black/50" : "text-white/35"
                }`}
              >
                Open page
              </span>

              {active && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-black" />
              )}
            </button>
          );
        })}
      </div>

      <a
        href="https://wa.me/917356379172"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-3xl
        bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black
        uppercase tracking-[0.18em] shadow-[0_18px_50px_rgba(249,115,22,0.35)]
        active:scale-[0.98] transition"
      >
        Chat on WhatsApp
        <FiArrowRight />
      </a>
    </div>
  </div>
</div>

      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.8),_0_0_60px_rgba(255,255,255,0.05)] rounded-3xl w-max max-w-[95vw]">
        <header className="flex items-center gap-1 md:gap-3 p-1.5 md:p-2 rounded-3xl bg-[#141414]/90 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6),_inset_0_1px_0_rgba(255,255,255,0.1)]">

          {/* LOGO */}
          <div className="pl-4 pr-2 hidden lg:flex items-center text-white/80">
            <img src={logo} width={40} alt="logo" className="rounded-lg bg-white/5 p-1" />
          </div>

          <div className="hidden lg:block w-[1px] h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1"></div>

          {/* NAV - Desktop */}
          <nav className="hidden md:flex items-center gap-1 px-1">
            {navItems.map((item) => (
              <button
                key={item.path}
               onClick={() => {
  navigate(item.path);
  setOpenMenu(false);
}}
                className={`px-4 py-2 rounded-2xl text-[10px] font-bold tracking-[0.15em] transition-all duration-500 uppercase ${location.pathname === item.path
                  ? "bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                  : "text-[#888888] hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Tab/Navbar Elements */}
          <div className="md:hidden flex items-center pl-4 pr-1 justify-between w-[120px] xs:w-[150px]">
            <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase truncate">SHANIS.</span>
            <button
              className="text-white bg-white/5 border border-white/10 p-2 rounded-xl active:scale-95 transition-transform"
              onClick={() => setOpenMenu(!openMenu)}
              aria-label="Toggle Menu"
            >
              {openMenu ? <FiX size={14} /> : <FiMenu size={14} />}
            </button>
          </div>

          <div className="md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1"></div>

          {/* CTA Button */}
          <div className="ml-1 md:ml-2">
            <a
              href="https://wa.me/917356379172"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-white text-black px-5 md:px-7 py-2.5 rounded-2xl text-[10px] font-extrabold tracking-[0.15em] transition-all duration-500 hover:scale-[1.03] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span className="relative z-10 whitespace-nowrap uppercase">Chat</span>
              <FiArrowRight className="relative z-10 text-sm opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

        </header>
      </div>
    </>
  );
};

export default Header;

