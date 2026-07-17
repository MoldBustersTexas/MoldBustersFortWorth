import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Moisture Review Fort Worth | Air Quality & Moisture Inspection",
  description:
    "Professional HVAC moisture inspections in Fort Worth. We evaluate humidity, condensation, air leakage, pressure imbalances, drainage issues, and indoor air quality concerns using real-time diagnostics.",
  keywords: [
    "HVAC moisture inspection fort worth",
    "HVAC inspection fort worth",
    "HVAC humidity problems",
    "air quality inspection",
    "negative pressure testing",
    "condensation inspection",
    "HVAC air leaks",
    "return plenum inspection",
    "supply plenum inspection",
    "moisture investigation",
    "HVAC diagnostics",
    "indoor humidity evaluation",
  ],
  alternates: {
    canonical: "/hvac-moisture-review-fort-worth",
  },
  openGraph: {
    title: "HVAC Moisture Review Fort Worth | Mold Busters",
    description:
      "Professional HVAC moisture and indoor air quality evaluations throughout Fort Worth using real-time diagnostics.",
    url: "https://www.moldbustersfortworth.com/hvac-moisture-review-fort-worth",
    siteName: "Mold Busters Fort Worth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.moldbustersfortworth.com/logo.png",
        width: 1200,
        height: 630,
        alt: "HVAC Moisture Review Fort Worth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Moisture Review Fort Worth",
    description:
      "HVAC moisture, humidity, condensation, and indoor air quality inspections in Fort Worth.",
    images: ["https://www.moldbustersfortworth.com/logo.png"],
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes high indoor humidity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High indoor humidity may be caused by oversized equipment, blower speed settings, duct leakage, negative pressure, inadequate ventilation, moisture intrusion, or insufficient dehumidification.",
      },
    },
    {
      "@type": "Question",
      name: "Can HVAC problems create mold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excess moisture, poor drainage, air leaks, and elevated humidity around HVAC systems can create conditions that support microbial growth if not corrected.",
      },
    },
    {
      "@type": "Question",
      name: "Do you inspect ductwork and plenums?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Accessible supply ducts, return ducts, plenums, boots, condensate drains, and air handlers are reviewed for conditions that may impact indoor air quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can negative pressure affect my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Negative pressure can draw humid or contaminated air from attics, garages, crawlspaces, and wall cavities into the living space.",
      },
    },
    {
      "@type": "Question",
      name: "Do you perform moisture investigations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We evaluate humidity, condensation, drainage, airflow, pressure relationships, and building conditions to identify potential moisture sources.",
      },
    },
  ],
};
export default function HVACMoistureReviewPage() {
  return (
    <>
    <Script
  id="hvac-moisture-faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
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

      <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-emerald-400 mb-4">
            HVAC & Moisture Review
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
             HVAC Moisture & Indoor Air Quality Inspection in Fort Worth
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Identify hidden mold, moisture intrusion, air leaks, negative pressure,
            condensation problems, duct contamination, and HVAC performance issues
            before they affect your indoor air quality and comfort.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              HVAC System Evaluation
            </h2>

            <ul className="space-y-4 text-lg">
              <li>• Airflow observations</li>
              <li>• Return and supply inspections</li>
              <li>• Duct leakage observations</li>
              <li>• Plenum condition review</li>
              <li>• Coil and cabinet observations</li>
              <li>• Pressure imbalance concerns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Moisture Investigation
            </h2>

            <ul className="space-y-4 text-lg">
              <li>• Humidity measurements</li>
              <li>• Condensation concerns</li>
              <li>• Thermal imaging observations</li>
              <li>• Moisture meter readings</li>
              <li>• Drainage concerns</li>
              <li>• Building envelope observations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Common Problems We Find
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              Negative pressure systems
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Condensate drainage issues
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Missing trap vents
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Elevated indoor humidity
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Air leakage around plenums
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Wet insulation
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Flex ducts on attic floors
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Supply boot contamination
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tools We Use
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Our evaluations may include InstaScope air quality screening,
            moisture meters, thermal imaging, airflow measurements, and
            pressure diagnostics to help identify conditions affecting
            indoor air quality and building performance.
          </p>
        </div>
      </section>
<section className="px-6 py-16 bg-slate-50">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-3">
        Frequently Asked Questions
      </h2>

      <p className="text-zinc-600 max-w-3xl mx-auto">
        Answers to common questions about HVAC moisture investigations,
        humidity problems, airflow, and indoor air quality.
      </p>
    </div>

    <div className="space-y-6">

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          What causes high indoor humidity?
        </h3>

        <p className="text-zinc-600">
          High indoor humidity may be caused by oversized equipment,
          blower speed settings, duct leakage, negative pressure,
          inadequate ventilation, moisture intrusion, or insufficient
          dehumidification.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Can HVAC problems create mold?
        </h3>

        <p className="text-zinc-600">
          Excess moisture, poor drainage, air leaks, and elevated humidity
          around HVAC systems can create conditions that support microbial
          growth if not corrected.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Do you inspect ductwork and plenums?
        </h3>

        <p className="text-zinc-600">
          Yes. Accessible supply ducts, return ducts, plenums, boots,
          condensate drains, and air handlers are reviewed for conditions
          that may impact indoor air quality.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Can negative pressure affect my home?
        </h3>

        <p className="text-zinc-600">
          Yes. Negative pressure can draw humid or contaminated air from
          attics, garages, crawlspaces, and wall cavities into the living
          space.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-2">
          Do you perform moisture investigations?
        </h3>

        <p className="text-zinc-600">
          Yes. We evaluate humidity, condensation, drainage, airflow,
          pressure relationships, and building conditions to identify
          potential moisture sources.
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
        Explore additional services that help identify mold, moisture, HVAC
        issues, and indoor environmental concerns.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <Link
        href="/mold-testing-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Mold Testing
        </h3>

        <p className="text-zinc-600">
          Real-time InstaScope testing combined with optional laboratory
          identification for mold investigations.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

      <Link
        href="/indoor-air-quality-testing-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Indoor Air Quality Testing
        </h3>

        <p className="text-zinc-600">
          Evaluate airborne particles, humidity, VOCs, allergens, and
          environmental conditions affecting comfort.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

      <Link
        href="/mold-removal-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Mold Removal & Air Quality Treatment
        </h3>

        <p className="text-zinc-600">
          Learn about cleaning, source correction, dry fog treatment, and
          long-term indoor air quality improvements.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

    </div>

  </div>
</section>
      <section className="bg-slate-950 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Schedule an HVAC & Moisture Review
          </h2>

          <p className="text-slate-300 mb-8">
            Get practical answers regarding humidity, airflow,
            condensation, drainage, and HVAC-related concerns.
          </p>

          <a
            href="tel:2148024655"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full"
          >
            Call 214-802-4655
          </a>
        </div>
      </section>
    </main>
</>
  );
}