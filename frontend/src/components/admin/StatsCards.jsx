import React from "react";
export default function StatsCards({ stats }) {
  const cards = [
    ["Total", stats.total, "bg-white"],
    ["Pending", stats.pending, "bg-amber-50"],
    ["Approved", stats.approved, "bg-emerald-50"],
    ["Rejected", stats.rejected, "bg-red-50"],
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(([label, value, bg]) => (
        <div key={label} className={`rounded-2xl border border-slate-200 ${bg} p-5`}>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black text-ism-ink">{value}</p>
        </div>
      ))}
    </div>
  );
}
