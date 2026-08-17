import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} ism-family · IIT (ISM) Dhanbad alumni community</p>
        <p>Built for the first slice of the alumni portal.</p>
      </div>
    </footer>
  );
}
