import React from "react";
export default function Alert({ children, type = "error" }) {
  const styles =
    type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-red-200 bg-red-50 text-red-700";

  return (
    <div className={`rounded-2xl border p-4 text-sm font-semibold ${styles}`}>
      {children}
    </div>
  );
}
