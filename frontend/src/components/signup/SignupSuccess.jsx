import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupSuccess() {
  return (
    <main className="min-h-[75vh] px-5 py-16 lg:px-8">
      <div className="mx-auto flex max-w-2xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-emerald-200 bg-white p-8 text-center shadow-soft sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={34} />
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Application received</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-ism-ink">Welcome to the family.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Your profile has been submitted and is currently <strong>pending admin approval</strong>.
          </p>
          <Link to="/" className="mt-8 inline-flex rounded-xl bg-ism-blue px-6 py-3.5 font-bold text-white">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
