import React from "react";
import {
  FiMenu, FiX, FiArrowRight, FiHome, FiBriefcase,
  FiUser, FiMessageSquare, FiStar, FiHelpCircle
} from "react-icons/fi";
import logo from "../assets/projects/ms-removebg-preview.png";

const Header = ({ activeSection, onNavClick, openMenu, setOpenMenu }) => {
  const navItems = [
    { label: "Home", id: "home", icon: <FiHome size={22} /> },
    { label: "Work", id: "projects", icon: <FiBriefcase size={22} /> },
    { label: "About", id: "about", icon: <FiUser size={22} /> },
    { label: "Reviews", id: "testimonials", icon: <FiStar size={22} /> },
    { label: "FAQ", id: "faq", icon: <FiHelpCircle size={22} /> },
    { label: "Contact", id: "contact", icon: <FiMessageSquare size={22} /> },
  ];

  return (
    <>
      {/* MOBILE DRAWER SIDEBAR */}
      <div
        className={`fixed inset-0 z-[300] md:hidden transition-all duration-500 overflow-hidden ${openMenu ? "visible" : "invisible"
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${openMenu ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setOpenMenu(false)}
        />

        {/* Sidebar Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#0a0a0a] border-r border-white/5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${openMenu ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Profile Section */}
          <div className="p-8 border-b border-white/5 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 p-0.5 mb-4">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-xl font-bold text-white overflow-hidden">
                <img src={logo} alt="M" className="w-10 h-10 object-contain opacity-80" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Mohammed Shanis</h3>
            <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Full Stack Developer</p>
          </div>

          {/* Navigation Items */}
          <nav className="px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setOpenMenu(false);
                }}
                className={`w-full flex items-center gap-5 px-4 py-4 rounded-2xl transition-all duration-300 ${activeSection === item.id
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className={`${activeSection === item.id ? "text-white" : "text-white/30"}`}>
                  {item.icon}
                </span>
                <span className="text-base font-medium tracking-wide translate-y-[1px]">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>


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
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-2 rounded-2xl text-[10px] font-bold tracking-[0.15em] transition-all duration-500 uppercase ${activeSection === item.id
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

