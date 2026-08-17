import React from "react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { INITIAL_SIGNUP_FORM } from "../constants/app";
import { signup } from "../services/api";
import SignupForm from "../components/signup/SignupForm";
import SignupSuccess from "../components/signup/SignupSuccess";

export default function Signup() {
  const [form, setForm] = useState(INITIAL_SIGNUP_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({ ...form, admission_year: Number(form.admission_year) });
      setForm(INITIAL_SIGNUP_FORM);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) return <SignupSuccess />;

  return (
    <main className="min-h-[75vh] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-ism-blue">
            <ArrowLeft size={16} /> Back home
          </Link>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-ism-blue">Alumni registration</p>
          <h1 className="mt-3 text-5xl font-black leading-tight tracking-[-0.03em] text-ism-ink">Make your place in the ISM family.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Tell us a little about yourself. Your application will be reviewed by an admin before your profile becomes part of the community.</p>
        </div>

        <SignupForm
          form={form}
          loading={loading}
          error={error}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
