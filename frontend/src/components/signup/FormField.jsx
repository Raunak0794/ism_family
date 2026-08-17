import React from "react";
export default function FormField({
  name,
  label,
  placeholder,
  type,
  required,
  value,
  onChange,
}) {
  return (
    <label className={name === "current_profession" ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type={type}
        required={required}
        min={type === "number" ? 1926 : undefined}
        max={type === "number" ? new Date().getFullYear() : undefined}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-ism-blue focus:bg-white focus:ring-4 focus:ring-ism-blue/10"
      />
    </label>
  );
}
