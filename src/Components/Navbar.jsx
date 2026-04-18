import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "../store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, isLoggedIn, login } = useAuthStore();
  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-cyan-400 font-medium drop-shadow-[0_0_6px_#BBE0EF]"
        : "text-slate-300 hover:text-cyan-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/home" className="text-lg font-semibold tracking-wide text-white">
  🍽️ <span className="text-orange-400">Cravegram</span>
</NavLink>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/home" end className={navClass}>Home</NavLink>
          <NavLink to="/explore" className={navClass}>Explore</NavLink>
          {isLoggedIn && user?.role === "creator" && (
         <NavLink to="/creator" className={navClass}>
        Creators
        </NavLink>
        )}
          <NavLink to="/about" className={navClass}>About</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-slate-300 hover:text-white transition">
            Log Out
          </button>
          <button className="bg-orange-500 hover:bg-orange-400 text-black text-sm px-5 py-2 rounded-full font-medium shadow-md shadow-orange-500/10 transition">
            {user?.username}
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink
          to="/home"
          end
          className={navClass}
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/explore"
          className={navClass}
          onClick={() => setOpen(false)}
        >
          Explore
        </NavLink>

        {isLoggedIn && user?.role === "creator" && (
  <NavLink
    to="/creator"
    className={navClass}
    onClick={() => setOpen(false)}
  >
    Creator
  </NavLink>
)}

        <NavLink
          to="/about"
          className={navClass}
          onClick={() => setOpen(false)}
        >
          About
        </NavLink>

        <button className="text-white/70"
        onClick={handlelogout}
        >
        logout
        </button>

        <button className="bg-orange-500 text-black px-6 py-2 rounded-full font-medium">
          Get Started
        </button>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>
      </div>
    </nav>
  );
};

export default Navbar;