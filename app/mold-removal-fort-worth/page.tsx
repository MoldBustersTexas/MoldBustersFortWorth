import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, CheckCircle, Home } from "lucide-react";
export const metadata: Metadata = {
  title: "Mold Removal Fort Worth | Air Quality Treatment & Dry Fog Services",
  description:
    "Professional mold removal guidance, indoor air quality treatment, dry fog services, moisture investigations, HVAC inspections, and InstaScope real-time analysis throughout Fort Worth.",

  keywords: [
    "mold removal fort worth",
    "mold remediation fort worth",
    "air quality treatment",
    "dry fog mold treatment",
    "indoor air quality",
    "mold cleanup fort worth",
    "HVAC mold removal",
    "Pure Maintenance",
    "mold odor removal",
  ],

  alternates: {
    canonical: "/mold-removal-fort-worth",
  },

  openGraph: {
    title: "Mold Removal Fort Worth | Mold Busters Fort Worth",
    description:
      "Professional mold removal guidance, indoor air quality treatment, dry fog services, moisture investigations, and HVAC evaluations throughout Fort Worth.",
    url: "https://www.moldbustersfortworth.com/mold-removal-fort-worth",
    siteName: "Mold Busters Fort Worth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.moldbustersfortworth.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mold Removal Fort Worth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mold Removal Fort Worth",
    description:
      "Professional mold removal, indoor air quality treatment, and dry fog services in Fort Worth.",
    images: ["https://www.moldbustersfortworth.com/logo.png"],
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
      <section className="px-6 py-16 bg-slate-50">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl font-bold">
        Mold Removal and Air Quality Treatment Questions
      </h2>
    </div>

    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          What is included in mold removal?
        </h3>
        <p className="text-zinc-600 leading-7">
          The scope depends on the affected materials and moisture source.
          Services may include source correction, removal or cleaning of
          affected materials, HEPA filtration, HVAC-related cleaning, and
          indoor air quality treatment.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Does dry fogging replace physical mold removal?
        </h3>
        <p className="text-zinc-600 leading-7">
          No. Dry fog treatment does not replace removal of damaged or
          contaminated materials. It is used as part of a broader cleaning and
          indoor air quality process after source correction and physical
          cleaning when appropriate.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Do you inspect the HVAC system during mold-related work?
        </h3>
        <p className="text-zinc-600 leading-7">
          Yes. Accessible air handlers, plenums, ducts, boots, drainage
          components, humidity conditions, and air leakage may be reviewed when
          they could contribute to indoor air quality concerns.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          How do you know whether treatment worked?
        </h3>
        <p className="text-zinc-600 leading-7">
          Verification may include visual review, moisture confirmation,
          real-time InstaScope screening, and optional third-party laboratory
          sampling when appropriate.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Do you provide services throughout the DFW area?
        </h3>
        <p className="text-zinc-600 leading-7">
          Yes. Mold Busters Fort Worth serves Fort Worth and surrounding
          Dallas–Fort Worth communities, subject to scheduling and project
          scope.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="px-6 py-16 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-3">
        Related Indoor Air Quality Services
      </h2>

      <p className="text-zinc-600 max-w-3xl mx-auto">
        Explore additional services that help identify mold, moisture, HVAC,
        and indoor environmental concerns throughout your property.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <Link
        href="/mold-testing-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Mold Testing
        </h3>

        <p className="text-zinc-600">
          Professional mold inspections using real-time InstaScope screening
          with optional laboratory confirmation.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

      <Link
        href="/indoor-air-quality-testing-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Indoor Air Quality Testing
        </h3>

        <p className="text-zinc-600">
          Real-time air quality screening, HVAC observations, moisture review,
          and optional laboratory sampling.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

      <Link
        href="/hvac-moisture-review-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          HVAC & Moisture Review
        </h3>

        <p className="text-zinc-600">
          Review humidity, condensation, drainage, pressure, airflow, and
          HVAC-related indoor air quality concerns.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>
    </div>
  </div>
</section>
<section className="bg-emerald-600 text-white px-6 py-16 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">
      Schedule Mold Removal & Air Quality Services
    </h2>

    <p className="text-lg mb-8">
      Call today to discuss mold-related cleaning, moisture concerns,
      HVAC conditions, and indoor air quality treatment options.
    </p>

    <a
      href="tel:2148024655"
      className="inline-block bg-white text-emerald-700 font-semibold px-8 py-4 rounded-xl"
    >
      Call 214-802-4655
    </a>
  </div>
</section>
   </main>
</>
);
}