import React from "react";
import { LoaderCircle } from "lucide-react";
import { SIGNUP_FIELDS } from "../../constants/app";
import Alert from "../common/Alert";
import FormField from "./FormField";

export default function SignupForm({ form, loading, error, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-9">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-ism-ink">Profile details</h2>
        <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>
      </div>

      {error && <div className="mb-6"><Alert>{error}</Alert></div>}

      <div className="grid gap-5 sm:grid-cols-2">
        {SIGNUP_FIELDS.map(([name, label, placeholder, type, required]) => (
          <FormField
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            required={required}
            value={form[name]}
            onChange={onChange}
          />
        ))}
      </div>

      <button
        disabled={loading}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ism-blue px-6 py-4 font-extrabold text-white transition hover:bg-ism-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <><LoaderCircle size={18} className="animate-spin" /> Submitting...</>
        ) : (
          "Submit for approval"
        )}
      </button>
    </form>
  );
}
