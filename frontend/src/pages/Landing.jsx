import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Home,
  MessageCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/landing/Hero";
import BenefitCard from "../components/landing/BenefitCard";

const benefits = [
  { icon: BriefcaseBusiness, title: "Job Board", text: "Discover roles, referrals and opportunities shared by the ISM network." },
  { icon: Building2, title: "Chapter-wise Connect", text: "Find alumni chapters by city and build meaningful local connections." },
  { icon: HeartPulse, title: "Emergency / Blood Bank Priority", text: "Create a trusted alumni-first support network when it matters most." },
  { icon: Home, title: "Flatmate & Matrimonial Matching", text: "Connect with verified community members around life and living needs." },
  { icon: Users, title: "NGO Volunteering", text: "Turn the alumni network into action through volunteering and social impact." },
  { icon: MessageCircle, title: "Community Discussions", text: "Exchange knowledge, recommendations, stories and ideas with fellow alumni." },
];

export default function Landing() {
  return (
    <main>
      <Hero />

      <section id="benefits" className="bg-ism-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ism-blue">Built around alumni life</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ism-ink sm:text-5xl">More than a directory.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A focused first slice of a community platform designed around practical ways alumni can help, learn and grow together.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}
          </div>

          <div className="mt-14 rounded-[2rem] bg-ism-blue p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ism-gold">Ready to reconnect?</p>
              <h3 className="mt-2 text-3xl font-black">Your ISM family is waiting.</h3>
            </div>
            <Link to="/signup" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-ism-blue lg:mt-0">
              Create my profile <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
