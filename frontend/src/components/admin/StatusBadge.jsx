import React from "react";
import { Clock3 } from "lucide-react";

const statusStyles = {
  PENDING: "bg-amber-50 text-amber-700 border-amber-200",
  APPROVED: "bg-emerald-50 text-emerald-700 border-emerald-200",
  REJECTED: "bg-red-50 text-red-700 border-red-200",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black ${statusStyles[status]}`}>
      {status === "PENDING" && <Clock3 size={13} />}
      {status}
    </span>
  );
}
