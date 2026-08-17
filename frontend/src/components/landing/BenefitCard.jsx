import React from "react";
export default function BenefitCard({ icon: Icon, title, text }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ism-blue/10 text-ism-blue transition group-hover:bg-ism-blue group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mt-6 text-xl font-extrabold text-ism-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
