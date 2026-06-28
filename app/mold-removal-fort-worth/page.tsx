import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, CheckCircle, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Mold Remediation Fort Worth | Mold Removal & Indoor Air Quality",
  description:
    "Professional mold remediation in Fort Worth using moisture investigations, HVAC inspections, HEPA filtration, and advanced treatment methods to restore healthy indoor air quality.",
  alternates: {
    canonical: "/mold-removal-fort-worth",
  },
};

export default function MoldRemovalFortWorthPage() {
  return (
    <>
  <header className="bg-black border-b border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <Link href="/" className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Mold Busters Fort Worth Logo"
          className="w-16 h-16 object-contain"
        />

        <div>
          <div className="text-2xl font-bold text-white">
            Mold Busters Fort Worth
          </div>

          <div className="text-sm text-zinc-400">
            Indoor Air Quality • Mold Concerns • HVAC Issues
          </div>
        </div>
      </Link>
    </div>
  </header>
    <main className="bg-white text-slate-900 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted Mold Removal & Indoor Air Quality Services
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Mold Removal & Air Quality Treatment in Fort Worth
            </h1>

            <p className="text-lg text-slate-200 leading-relaxed mb-8">
              Mold Busters Fort Worth provides practical mold-related cleaning,
              indoor air quality services, moisture observations, odor
              reduction, and Pure Maintenance dry fog treatment services
              throughout Fort Worth and surrounding DFW communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2148024655"
                className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 px-6 py-3 rounded-2xl text-white font-medium transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Help
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-2xl font-medium transition"
              >
                Request Appointment
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-900">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
              <Home className="w-6 h-6" />
            </div>

            <h2 className="text-2xl font-bold mb-6">
              Common Reasons Customers Call Us
            </h2>

            <div className="space-y-4">
              {[
                "Musty odors or humidity concerns",
                "Visible mold around vents or walls",
                "HVAC air quality concerns",
                "Allergy-like symptoms indoors",
                "Moisture-related indoor air quality issues",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pure Maintenance Dry Fog Treatment
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              What sets Mold Busters Fort Worth apart is our use of the Pure
              Maintenance two-step dry fog treatment system designed to help
              improve indoor air quality throughout homes and businesses.
            </p>

            <p className="text-slate-700 leading-relaxed">
              We focus on practical indoor air quality solutions related to
              moisture, HVAC concerns, odors, and environmental abnormalities
              while helping customers better understand contributing conditions.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Services May Include
            </h3>

            <div className="space-y-4">
              {[
                "Indoor air quality screening",
                "InstaScope real-time analysis",
                "Air and surface sampling",
                "Dry fog treatment options",
                "HVAC moisture observations",
                "Odor reduction services",
                "Third-party laboratory reporting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Fort Worth & Surrounding Areas
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Mold Busters Fort Worth proudly serves homeowners and businesses
            throughout Fort Worth, Arlington, Keller, Southlake, Grapevine,
            Bedford, Hurst, Euless, Irving, Dallas, Denton, and nearby DFW
            communities.
          </p>
        </div>
      </section>
   </main>
</>
);
}