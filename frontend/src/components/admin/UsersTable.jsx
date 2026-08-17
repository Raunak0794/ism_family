import React from "react";
import { Check, X } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function UsersTable({ users, loading, actionId, onStatusChange }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="font-black text-ism-ink">Signup requests</h2>
      </div>

      {loading && users.length === 0 ? (
        <div className="p-12 text-center text-slate-500">Loading applications...</div>
      ) : users.length === 0 ? (
        <div className="p-12 text-center text-slate-500">No applications yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[1050px] w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-4">Alumni</th>
                <th className="px-5 py-4">Batch / Branch</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Profession</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className={user.status === "PENDING" ? "bg-amber-50/50" : ""}>
                  <td className="px-5 py-5 align-top">
                    <p className="font-extrabold text-ism-ink">{user.full_name}</p>
                    <p className="mt-1 text-xs text-slate-500">{user.id}</p>
                  </td>
                  <td className="px-5 py-5 align-top">
                    <p className="font-bold">{user.admission_year}</p>
                    <p className="mt-1 text-slate-500">{user.branch}</p>
                  </td>
                  <td className="px-5 py-5 align-top">
                    <p>{user.email}</p>
                    <p className="mt-1 text-slate-500">{user.phone_number}</p>
                  </td>
                  <td className="px-5 py-5 align-top text-slate-600">{user.current_city}</td>
                  <td className="px-5 py-5 align-top">
                    <p>{user.current_profession}</p>
                    {user.linkedin_url && (
                      <a href={user.linkedin_url} target="_blank" rel="noreferrer" className="mt-1 inline-block font-bold text-ism-blue hover:underline">LinkedIn ↗</a>
                    )}
                  </td>
                  <td className="px-5 py-5 align-top"><StatusBadge status={user.status} /></td>
                  <td className="px-5 py-5 align-top">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onStatusChange(user.id, "APPROVED")}
                        disabled={actionId === user.id || user.status === "APPROVED"}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-extrabold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Check size={14} /> Approve
                      </button>
                      <button
                        onClick={() => onStatusChange(user.id, "REJECTED")}
                        disabled={actionId === user.id || user.status === "REJECTED"}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-xs font-extrabold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <X size={14} /> Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
