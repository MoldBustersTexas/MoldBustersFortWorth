import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mold Testing Fort Worth | Real-Time Results & HVAC Inspection",
  description:
    "Professional mold testing in Fort Worth using InstaScope real-time screening, HVAC inspections, moisture investigations, and optional laboratory confirmation. Same-day appointments available.",
  keywords: [
    "mold testing fort worth",
    "mold inspection fort worth",
    "mold testing near me",
    "air quality testing fort worth",
    "indoor air quality testing",
    "HVAC mold inspection",
    "InstaScope mold testing",
    "moisture investigation",
  ],
  alternates: {
    canonical: "/mold-testing-fort-worth",
  },
  openGraph: {
    title: "Mold Testing Fort Worth | Mold Busters Fort Worth",
    description:
      "Professional mold testing and indoor air quality testing throughout Fort Worth using real-time InstaScope technology.",
    url: "https://www.moldbustersfortworth.com/mold-testing-fort-worth",
    siteName: "Mold Busters Fort Worth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.moldbustersfortworth.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mold Testing Fort Worth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mold Testing Fort Worth",
    description:
      "Professional mold testing, HVAC inspections and indoor air quality testing in Fort Worth.",
    images: ["https://www.moldbustersfortworth.com/logo.png"],
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does mold testing cost in Fort Worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing typically starts at $400 depending on the size of the property and whether laboratory confirmation is requested. We provide real-time InstaScope screening and optional laboratory identification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you inspect HVAC systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We inspect air handlers, supply and return plenums, condensate systems, moisture conditions, and HVAC components that may contribute to indoor air quality concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Can you tell if mold is behind a wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moisture readings, thermal imaging, HVAC observations, air sampling, and environmental conditions can often indicate hidden moisture or possible concealed mold growth requiring further investigation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whenever scheduling allows, we offer same-day or next-day appointments throughout Fort Worth and the surrounding DFW area.",
      },
    },
  ],
};

export default function MoldTestingFortWorthPage() {
  return (
  <>
  <Script
  id="mold-testing-faq-schema"
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

    <main className="bg-white text-zinc-900">
      <section className="px-6 py-20 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-green-400 mb-4">
            Fort Worth Mold Testing & Indoor Air Quality
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mold Testing in Fort Worth, TX
          </h1>
          <p className="text-xl max-w-3xl text-zinc-300 leading-8">
            We help Fort Worth homeowners and businesses understand what may be
            affecting their indoor air quality through advanced InstaScope
            real-time analysis, moisture observations, HVAC evaluations, and
            optional laboratory identification samples.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              More Than Basic Mold Testing
            </h2>
            <p className="text-lg leading-8 mb-5">
              Mold concerns are often connected to larger indoor air quality
              issues. Musty odors, allergy-like symptoms, humidity problems,
              HVAC contamination, water intrusion, and poor ventilation can all
              affect the indoor environment.
            </p>
            <p className="text-lg leading-8 mb-5">
              Our primary testing method uses InstaScope technology to provide
              same-day insight into airborne particulates and environmental
              abnormalities, including mold-like particulates, pollen, bacteria
              indicators, VOCs, CO2, temperature, and humidity conditions.
            </p>
            <p className="text-lg leading-8">
              When identification is needed, we can collect spore trap or
              surface samples and submit them to a third-party laboratory for
              analysis.
            </p>
          </div>

          <div className="bg-zinc-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">What We Check</h3>
            <ul className="space-y-3 text-lg">
              <li>• Real-time InstaScope air analysis</li>
              <li>• Mold-like particulate abnormalities</li>
              <li>• VOC, CO2, humidity, and temperature conditions</li>
              <li>• HVAC air quality concerns</li>
              <li>• Moisture-related conditions</li>
              <li>• Musty odor concerns</li>
              <li>• Optional spore trap air samples</li>
              <li>• Optional surface identification samples</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            When Should You Schedule Mold or Air Quality Testing?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Musty or unusual odors",
              "Allergy-like symptoms indoors",
              "Recent water leaks or moisture issues",
              "HVAC contamination concerns",
              "Visible spotting or suspected growth",
              "Buying, selling, or renting a property",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Fort Worth Indoor Air Quality Testing
          </h2>
          <p className="text-lg leading-8 mb-5">
            Our goal is to provide practical information without scare tactics.
            We focus on helping you understand what is happening in the indoor
            environment and what conditions may be contributing to air quality
            concerns.
          </p>
          <p className="text-lg leading-8">
            Mold Busters Fort Worth serves homeowners, tenants, landlords,
            property managers, and businesses throughout Fort Worth and the
            surrounding DFW area.
          </p>
        </div>
      </section>
<section className="px-6 py-16 bg-slate-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-xl mb-2">
          How much does mold testing cost in Fort Worth?
        </h3>
        <p>
  Pricing typically starts at <strong>$400</strong> depending on the size
  of the property and whether laboratory confirmation is requested. We
  provide real-time InstaScope screening and optional laboratory
  identification.
</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-xl mb-2">
          Do you inspect HVAC systems?
        </h3>
        <p>
          Yes. We inspect air handlers, supply and return plenums, condensate
          systems, moisture conditions, and other HVAC components that may
          contribute to indoor air quality concerns.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-xl mb-2">
          Can you tell if mold is behind a wall?
        </h3>
        <p>
          Moisture readings, thermal imaging, HVAC observations, air sampling,
          and environmental conditions can often indicate hidden moisture or
          possible concealed mold growth that may require further investigation.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-xl mb-2">
          Do you offer same-day appointments?
        </h3>
        <p>
          Whenever scheduling allows, we offer same-day or next-day
          appointments throughout Fort Worth and the surrounding DFW area.
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
        Explore additional services that may help identify moisture, HVAC, and
        indoor air quality concerns throughout your property.
</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <Link
        href="/indoor-air-quality-testing-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-green-600 hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Indoor Air Quality Testing
        </h3>
        <p className="text-zinc-600">
          Real-time InstaScope screening, air and surface sampling options, and
          practical explanations of indoor air quality findings.
        </p>
        <div className="mt-4">
  <span className="text-green-700 font-semibold">
    Learn More →
  </span>

  <p className="text-sm text-zinc-500 mt-2">
    Air quality testing, airborne mold sampling, and InstaScope analysis.
  </p>
</div>
      </Link>

      <Link
        href="/hvac-moisture-review-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-green-600 hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          HVAC & Moisture Review
        </h3>
        <p className="text-zinc-600">
          Review humidity, condensation, drainage, pressure, and HVAC-related
          conditions that may affect indoor air quality.
        </p>
        <div className="mt-4">
  <span className="text-green-700 font-semibold">
    Learn More →
  </span>
  <p className="text-sm text-zinc-500 mt-2">
    Moisture investigations, HVAC inspections, pressure diagnostics, and humidity reviews.
  </p>
</div>
      </Link>

      <Link
        href="/mold-removal-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-green-600 hover:-translate-y-1 duration-300 transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Mold Removal & Air Quality Treatment
        </h3>
        <p className="text-zinc-600">
          Learn about cleaning, source correction, dry fog treatment options,
          and air quality-focused services.
        </p>
        <div className="mt-4">
  <span className="text-green-700 font-semibold">
    Learn More →
  </span>
  <p className="text-sm text-zinc-500 mt-2">
    Dry fog treatment, microbial reduction, and indoor air quality improvement.
  </p>
</div>
      </Link>
    </div>
  </div>
</section>
      <section className="px-6 py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Schedule Mold Testing in Fort Worth
          </h2>
          <p className="text-xl mb-8">
            Get same-day insight with InstaScope air quality testing and
            optional lab identification samples.
          </p>
          <a
            href="tel:214-802-4655"
            className="inline-block bg-white text-green-800 font-bold px-8 py-4 rounded-xl"
          >
            Call Mold Busters Fort Worth
          </a>
        </div>
      </section>
</main>
</>  );
}
