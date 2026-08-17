import React from "react";
import { LockKeyhole } from "lucide-react";
import Alert from "../common/Alert";

export default function AdminLogin({ secret, setSecret, loading, error, onSubmit }) {
  return (
    <main className="min-h-[75vh] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ism-blue text-white">
            <LockKeyhole size={22} />
          </div>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-ism-blue">Restricted area</p>
          <h1 className="mt-2 text-3xl font-black text-ism-ink">Admin Panel</h1>
          <p className="mt-3 leading-7 text-slate-600">Enter the admin secret to review alumni signup requests.</p>

          {error && <div className="mt-6"><Alert>{error}</Alert></div>}

          <form onSubmit={onSubmit} className="mt-7">
            <label className="text-sm font-bold text-slate-700">
              Admin password
              <input
                type="password"
                value={secret}
                onChange={(event) => setSecret(event.target.value)}
                placeholder="Enter admin secret"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-ism-blue focus:bg-white focus:ring-4 focus:ring-ism-blue/10"
              />
            </label>
            <button disabled={loading} className="mt-5 w-full rounded-xl bg-ism-blue px-5 py-3.5 font-extrabold text-white disabled:opacity-60">
              {loading ? "Checking..." : "Open dashboard"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
