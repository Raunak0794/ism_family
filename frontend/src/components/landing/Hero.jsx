import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { IIT_ISM_LOGO_URL } from "../../constants/app";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ism-blue text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ism-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-100">
            <Sparkles size={14} className="text-ism-gold" />
            Exclusive alumni community
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            The ISM family,
            <span className="block text-ism-gold">wherever life takes you.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            A private community built exclusively for IIT (ISM) Dhanbad alumni —
            connecting careers, chapters, support and friendships beyond campus.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ism-gold px-6 py-3.5 font-extrabold text-ism-blue transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Join the family <ArrowRight size={18} />
            </Link>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore benefits
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-7 text-ism-ink">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">ISM identity</p>
                <h2 className="mt-2 text-3xl font-black">Beyond the campus.</h2>
              </div>
              <img src={IIT_ISM_LOGO_URL} alt="" className="h-16 w-16 object-contain" />
            </div>

            <div className="mt-8 space-y-3">
              {["Career connections", "Local chapters", "Community support"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ism-blue text-sm font-black text-white">
                    0{index + 1}
                  </div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
