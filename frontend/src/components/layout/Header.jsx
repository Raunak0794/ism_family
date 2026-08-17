import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { IIT_ISM_LOGO_URL } from "../../constants/app";

const navClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? "text-ism-blue" : "text-slate-600 hover:text-ism-blue"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/IIt-logo.png"
            alt="IIT (ISM) Dhanbad logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <p className="text-lg font-black tracking-tight text-ism-blue">ism-family</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              IIT (ISM) Dhanbad
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/signup" className={navClass}>Join Now</NavLink>
          <NavLink to="/admin" className={navClass}>Admin</NavLink>
        </nav>

        <Link
          to="/signup"
          className="inline-flex items-center gap-2 rounded-full bg-ism-blue px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ism-ink"
        >
          Join Now <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
