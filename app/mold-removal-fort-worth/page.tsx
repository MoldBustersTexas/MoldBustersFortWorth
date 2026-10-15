import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, CheckCircle, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Mold Removal Fort Worth, TX | Mold Busters",
description:
  "Mold removal in Fort Worth, TX. Qualified mold treatments, HVAC contamination cleaning, mold inspections, and indoor air quality services. Call 214-802-4655.",
alternates: { canonical: "/mold-removal-fort-worth" },
  openGraph: {
    title: "Mold Removal Fort Worth | Mold Busters Fort Worth",
    description: "Qualified mold treatments, HVAC contamination cleaning, mold inspections, and indoor air quality services in Fort Worth, TX.",
    url: "https://www.moldbustersfortworth.com/mold-removal-fort-worth",
    siteName: "Mold Busters Fort Worth",
    type: "website",
  },
};
const concerns = [
  "Visible mold growth on walls, ceilings, or trim",
  "Persistent musty odors in your home or business",
  "Mold or microbial contamination inside HVAC systems",
  "Water damage, leaks, or recurring moisture problems",
  "Mold concerns after flooding or plumbing repairs",
  "Poor indoor air quality or recurring humidity issues",
  "Mold returning after previous cleaning or treatment",
];

const steps = [
  { title: "Understand the concern", body: "We discuss the history of leaks, odors, visible growth and HVAC performance, then review accessible conditions relevant to the concern." },
  { title: "Define an appropriate scope", body: "We identify whether the affected area is within our limited small-area cleaning services or should be referred to a Texas-licensed mold professional." },
  { title: "Address affected materials and conditions", body: "Depending on the project, services may include controlled cleaning, HEPA vacuuming, removal of limited affected materials and HVAC-related cleaning. Moisture sources must be addressed." },
  { title: "Consider supplemental air quality treatment", body: "Where appropriate, pressurized microbial treatment may supplement physical cleaning. It is not a substitute for removing damaged materials or fixing moisture problems." },
  { title: "Review the results", body: "We discuss completed work and recommendations. Optional follow-up screening or laboratory sampling may be available; no single test guarantees future conditions." },
];

const faqs = [
  { q: "Do you remove mold in Fort Worth?", a: "We offer limited mold-related cleaning and removal services for qualifying small affected areas, alongside HVAC cleaning and indoor air quality treatment. Projects beyond our scope are referred to appropriately licensed professionals." },
  { q: "Does dry fogging replace physical mold removal?", a: "No. Pressurized microbial treatment may supplement appropriate cleaning but does not replace removal of damaged materials or correction of the underlying moisture source." },
  { q: "Can you help with mold concerns inside HVAC equipment?", a: "We can review accessible HVAC components and offer cleaning or related services when appropriate. Drainage, air leakage, humidity and other contributing conditions may also need attention." },
  { q: "Do I need an inspection before treatment?", a: "An initial review helps determine the affected area, possible moisture sources and whether the requested work is within our service scope. We offer InstaScope screening and optional laboratory identification samples when appropriate." },
  { q: "How much does mold-related cleaning cost?", a: "Pricing depends on the affected materials, accessibility, cleaning requirements and related moisture or HVAC work. Contact us for a project-specific estimate." },
  { q: "Are you a Texas-licensed mold remediation contractor?", a: "No. We do not represent ourselves as a Texas-licensed Mold Remediation Contractor or Mold Assessment Consultant. Our mold-related work is limited to qualifying areas below 25 contiguous square feet of visible growth, subject to applicable Texas requirements. Larger or regulated projects require appropriately licensed professionals." },
];

export default function MoldRemovalFortWorthPage() {
  return (
    <>
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Mold Busters Fort Worth logo" className="w-16 h-16 object-contain" />
            <div>
              <div className="text-2xl font-bold text-white">Mold Busters Fort Worth</div>
              <div className="text-sm text-zinc-400">Indoor Air Quality • Mold Concerns • HVAC Issues</div>
            </div>
          </Link>
        </div>
      </header>

      <main className="bg-white text-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white px-6 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Focused Mold Cleaning & Indoor Air Quality Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Mold Removal & Qualified Mold Treatments in Fort Worth, TX</h1>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Concerned about mold, musty odors, or HVAC contamination in your home?
Mold Busters Fort Worth provides comprehensive mold inspections,
qualified mold treatments, HVAC contamination cleaning, and
indoor air quality services.
We identify potential moisture sources, address qualifying affected areas,
and help you improve your indoor environment. Call 214-802-4655
to schedule an inspection.
              </p>
              <p className="text-slate-300 mb-8">We focus on qualifying small affected areas and indoor air quality services—not large-scale, regulated mold remediation projects.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:2148024655" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-2xl text-white font-semibold transition"><Phone className="w-5 h-5 mr-2" /> Call 214-802-4655</a>
                <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-2xl font-semibold transition">Schedule a Mold Inspection</Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-900">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6"><Home className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold mb-6">When Customers Contact Us</h2>
              <div className="space-y-4">{concerns.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /><span>{item}</span></div>)}</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mold-Related Cleaning & Air Quality Services</h2>
            <p className="text-slate-600 max-w-3xl mb-10 leading-7">The right approach depends on the materials involved, extent of visible growth and moisture conditions. We do not treat every mold concern as a fogging job.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Small-Area Mold Cleaning", body: "Cleaning or limited removal of affected materials for qualifying small areas, with attention to the source of moisture." },
                { title: "HEPA Cleaning", body: "Detailed HEPA vacuuming and appropriate surface cleaning as part of a defined project scope." },
                { title: "HVAC Contamination Services", body: "Cleaning and evaluation of accessible air handlers, plenums and related components when contamination or moisture is a concern." },
                { title: "Pressurized Microbial Treatment", body: "Pure Maintenance treatment options that may supplement physical cleaning and source correction where appropriate." },
                { title: "Moisture & Humidity Review", body: "Observations of drainage, condensation, leaks, air leakage and other conditions that may contribute to recurring problems." },
                { title: "Air Quality Screening", body: "InstaScope real-time screening and optional laboratory samples to help characterize conditions; screening does not identify mold species." },
              ].map((service) => <div key={service.title} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm"><h3 className="text-xl font-bold mb-3">{service.title}</h3><p className="text-slate-600 leading-7">{service.body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect From Our Process</h2>
            <p className="text-slate-600 max-w-3xl mb-10">Our approach emphasizes practical source correction, suitable cleaning and clear communication about the scope of work.</p>
            <div className="grid md:grid-cols-2 gap-6">{steps.map((step, index) => <div key={step.title} className="rounded-2xl border border-slate-200 p-7"><div className="text-emerald-700 font-bold mb-3">STEP {index + 1}</div><h3 className="text-xl font-bold mb-3">{step.title}</h3><p className="text-slate-600 leading-7">{step.body}</p></div>)}</div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-5">Why Moisture Correction Matters</h2>
              <p className="text-slate-700 leading-8 mb-5">Visible growth can return when leaks, condensation, poor drainage or high humidity remain unresolved. A durable solution considers both affected materials and the conditions that allowed the problem to develop.</p>
              <p className="text-slate-700 leading-8">Depending on the property, we may recommend plumbing, roofing, HVAC or building-envelope repairs by the appropriate trade professional.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Important Scope Information</h3>
              <p className="text-slate-700 leading-7 mb-4">AirEnsured LLC, doing business as Mold Busters Fort Worth, is not a Texas-licensed Mold Remediation Contractor or Mold Assessment Consultant.</p>
              <p className="text-slate-700 leading-7">Our mold-related services are limited to qualifying work involving less than 25 contiguous square feet of visible mold growth, subject to applicable law. We do not issue state mold remediation protocols. If your project requires regulated assessment or remediation, we recommend an appropriately licensed professional.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mold Removal and Treatment FAQs</h2>
            <div className="space-y-5">{faqs.map((faq) => <div key={faq.q} className="rounded-xl bg-slate-50 border border-slate-200 p-6"><h3 className="text-xl font-semibold mb-3">{faq.q}</h3><p className="text-slate-700 leading-7">{faq.a}</p></div>)}</div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Serving Fort Worth and Nearby Communities</h2>
            <p className="text-slate-700 leading-8 mb-8">We work with homeowners, property managers and businesses in Fort Worth and nearby communities including Arlington, Keller, Southlake, Grapevine, Bedford, Hurst, Euless and other parts of the Dallas–Fort Worth area, subject to scheduling and project scope.</p>
            <h3 className="text-2xl font-bold mb-6">Explore Related Services</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
               { href: "/mold-testing-fort-worth", title: "Mold Inspection & Testing in Fort Worth", body: "Schedule a mold inspection with InstaScope screening, HVAC evaluations, and optional laboratory mold identification samples." },
                { href: "/indoor-air-quality-testing-fort-worth", title: "Indoor Air Quality Testing in Fort Worth", body: "Explore whole-home InstaScope inspections, airborne particulate screening, HVAC evaluations, and indoor air quality concerns." },
                { href: "/hvac-moisture-review-fort-worth", title: "HVAC Moisture & Contamination Inspections in Fort Worth", body: "Identify HVAC moisture concerns, drainage problems, air leakage, condensation, and potential microbial contamination in accessible HVAC components." },
              ].map((item) => <Link key={item.href} href={item.href} className="block rounded-xl bg-white border border-slate-200 p-6 hover:border-emerald-600 hover:shadow-md transition"><h4 className="text-xl font-bold mb-3">{item.title}</h4><p className="text-slate-600 mb-4">{item.body}</p><span className="text-emerald-700 font-semibold">Learn More →</span></Link>)}
            </div>
          </div>
        </section>

        <section className="bg-emerald-700 text-white px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Discuss Your Mold or Air Quality Concern</h2>
            <p className="text-lg mb-8">Tell us what you're seeing and where the concern is located. We'll help determine whether your project fits our services and discuss the next step.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2148024655" className="inline-block bg-white text-emerald-800 font-semibold px-8 py-4 rounded-xl">Call 214-802-4655</a>
              <Link href="/#contact" className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-xl"> Schedule a Mold Inspection</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
