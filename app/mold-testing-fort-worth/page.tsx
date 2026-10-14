import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mold Testing Fort Worth, TX | InstaScope & HVAC Inspections",
  description:
    "Mold testing and indoor air quality inspections in Fort Worth. Whole-home InstaScope screening starts at $399, with HVAC inspection included and optional lab samples.",
  alternates: { canonical: "/mold-testing-fort-worth" },
  openGraph: {
    title: "Mold Testing in Fort Worth | Mold Busters Fort Worth",
    description:
      "Explore whole-home InstaScope screening, HVAC inspections, moisture observations and optional laboratory samples in Fort Worth.",
    url: "https://www.moldbustersfortworth.com/mold-testing-fort-worth",
    siteName: "Mold Busters Fort Worth",
    type: "website",
    locale: "en_US",
  },
};

const pricing = [
  { size: "Up to 2,000 sq. ft.", price: "$399" },
  { size: "2,001–3,500 sq. ft.", price: "$549" },
  { size: "3,501–5,000 sq. ft.", price: "$699" },
  { size: "Over 5,000 sq. ft.", price: "Custom quote" },
];

const steps = [
  {
    title: "Discuss your concerns",
    description:
      "We start with the rooms, odors, leaks, humidity issues or HVAC conditions that prompted your call.",
  },
  {
    title: "Review relevant conditions",
    description:
      "We examine accessible areas for moisture-related conditions and include an inspection of one HVAC air handler.",
  },
  {
    title: "Perform InstaScope screening",
    description:
      "Whole-home packages include unlimited InstaScope samples to screen airborne particles in the areas being evaluated.",
  },
  {
    title: "Explain findings and options",
    description:
      "We discuss observations and, when appropriate, options for third-party laboratory identification of collected samples.",
  },
];

const faqs = [
  {
    question: "How much does mold testing cost in Fort Worth?",
    answer:
      "Whole-home InstaScope screening starts at $399 for homes up to 2,000 square feet, $549 for 2,001–3,500 square feet, and $699 for 3,501–5,000 square feet. Larger homes receive a custom quote. A separate $399 isolated inspection option is also available.",
  },
  {
    question: "What is included in a whole-home InstaScope inspection?",
    answer:
      "Whole-home packages include unlimited InstaScope samples and inspection of one HVAC air handler. Each additional air handler inspection is $75. Optional laboratory identification samples are $50 each.",
  },
  {
    question: "What is included in an isolated inspection?",
    answer:
      "Our $399 isolated inspection includes three physical samples and inspection of one HVAC air handler. Additional samples are $50 each and additional HVAC air handler inspections are $75 each.",
  },
  {
    question: "Does InstaScope identify mold species?",
    answer:
      "InstaScope provides real-time particle screening; it is not a substitute for laboratory species identification. When identification is needed, we can collect samples for analysis by a third-party laboratory.",
  },
  {
    question: "Can an inspection confirm mold behind a wall?",
    answer:
      "Moisture observations and other findings may indicate areas that warrant further investigation, but non-invasive screening alone cannot confirm concealed mold growth behind a wall.",
  },
  {
    question: "Do you offer same-day appointments?",
    answer:
      "Same-day or next-day appointments may be available depending on scheduling. Contact us to confirm availability.",
  },
];

export default function MoldTestingFortWorthPage() {
  return (
    <>
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Mold Busters Fort Worth logo" className="w-16 h-16 object-contain" />
            <div>
              <div className="text-2xl font-bold text-white">Mold Busters Fort Worth</div>
              <div className="text-sm text-zinc-400">Indoor Air Quality • Mold Concerns • HVAC Issues</div>
            </div>
          </Link>
        </div>
      </header>

      <main className="bg-white text-zinc-900">
        <section className="px-6 py-20 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-wide text-green-400 mb-4">Fort Worth Mold Testing & Indoor Air Quality</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mold Testing in Fort Worth, TX</h1>
            <p className="text-xl max-w-3xl text-zinc-300 leading-8 mb-8">
              Understand your indoor environment with whole-home InstaScope particle screening,
              HVAC inspection, moisture observations, and optional laboratory identification samples.
              Clear findings, practical next steps, and transparent inspection pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-4 rounded-xl">
                Request an Inspection Online
              </Link>
              <a href="tel:2148024655" className="inline-block border border-zinc-400 hover:bg-zinc-800 text-white font-bold px-7 py-4 rounded-xl">
                Call 214-802-4655
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16" aria-labelledby="pricing-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="pricing-heading" className="text-3xl font-bold mb-4">Whole-Home InstaScope Inspection Pricing</h2>
            <p className="text-lg text-zinc-700 mb-8 max-w-3xl">
              Every whole-home package includes unlimited InstaScope samples and one HVAC air handler inspection.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pricing.map((tier) => (
                <div key={tier.size} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                  <p className="text-zinc-600 mb-3">{tier.size}</p>
                  <p className="text-3xl font-bold text-green-800">{tier.price}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-700 mt-6">
              Additional HVAC air handler inspections: <strong>$75 each</strong>. Optional laboratory identification samples:
              <strong> $50 each</strong>.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-3">Isolated Mold Inspection — $399</h3>
              <p className="text-lg leading-8">
                For a specific area of concern, our isolated inspection includes three physical samples and one HVAC air handler inspection.
                Additional physical samples are $50 each; additional HVAC air handler inspections are $75 each.
              </p>
            </div>
            <Link href="/#contact" className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl">
              Request Your Inspection
            </Link>
          </div>
        </section>

        <section className="px-6 py-16 bg-zinc-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">More Than Basic Mold Testing</h2>
              <p className="text-lg leading-8 mb-5">
                Musty odors, recurring humidity, past leaks, and HVAC contamination concerns can have several possible causes.
                We look at the conditions surrounding your concern—not just one isolated reading.
              </p>
              <p className="text-lg leading-8 mb-5">
                InstaScope offers real-time screening of airborne particles, including mold-like particles.
                Screening results do not independently establish mold species, viability, or a medical risk level.
              </p>
              <p className="text-lg leading-8">
                When more specific identification is appropriate, optional spore trap or surface samples can be submitted
                to an independent laboratory for analysis.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <h3 className="text-2xl font-bold mb-6">What We Review</h3>
              <ul className="space-y-3 text-lg list-disc pl-5">
                <li>Real-time InstaScope airborne particle screening</li>
                <li>Accessible moisture-related conditions</li>
                <li>HVAC air handler and relevant airflow concerns</li>
                <li>Visible spotting and musty odor concerns</li>
                <li>Humidity and condensation observations</li>
                <li>Optional laboratory identification samples</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">What Happens During Your Inspection?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-zinc-200 p-7">
                  <p className="text-green-700 font-bold mb-2">Step {index + 1}</p>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-700 leading-7">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">When Should You Schedule Mold or Air Quality Testing?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Persistent musty or unusual odors",
                "Recent water leaks or moisture intrusion",
                "Recurring condensation or high humidity",
                "HVAC contamination concerns",
                "Visible spotting or suspected growth",
                "Questions about indoor airborne particles",
              ].map((item) => (
                <div key={item} className="bg-white rounded-xl p-6 border border-zinc-200 text-lg font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Local Mold and HVAC Concerns in Fort Worth</h2>
            <p className="text-lg leading-8 mb-5 max-w-4xl">
              In Fort Worth homes and businesses, moisture intrusion, condensate drainage issues,
              unsealed HVAC connections, and humidity problems can all warrant closer examination.
              Our approach connects air screening with observations of the building and its HVAC system.
            </p>
            <p className="text-lg leading-8 max-w-4xl">
              We serve Fort Worth and surrounding areas of the Dallas–Fort Worth region. If you're unsure whether
              your property is within our service area, contact us with your address before scheduling.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl border border-zinc-200 p-6">
                  <h3 className="font-semibold text-xl mb-2">{faq.question}</h3>
                  <p className="text-zinc-700 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Related Indoor Air Quality Services</h2>
            <p className="text-zinc-600 text-center mb-10">Explore related services for moisture, HVAC and indoor air quality concerns.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/indoor-air-quality-testing-fort-worth", title: "Indoor Air Quality Testing", text: "Understand airborne particle concerns and available screening options." },
                { href: "/hvac-moisture-review-fort-worth", title: "HVAC & Moisture Review", text: "Explore HVAC, condensation, drainage and humidity-related conditions." },
                { href: "/mold-removal-fort-worth", title: "Mold Concerns & Treatment Options", text: "Learn about source correction, cleaning and air quality-focused treatment options." },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-green-600 transition">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-zinc-600 mb-4">{service.text}</p>
                  <span className="text-green-700 font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule Mold Testing in Fort Worth</h2>
            <p className="text-xl mb-8">Choose whole-home InstaScope screening or an isolated inspection for a specific concern.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="inline-block bg-white text-green-800 font-bold px-8 py-4 rounded-xl">Request an Inspection Online</Link>
              <a href="tel:2148024655" className="inline-block border border-white text-white font-bold px-8 py-4 rounded-xl">Call 214-802-4655</a>
            </div>
            <p className="text-sm text-green-100 mt-8 max-w-3xl mx-auto">
              Services described here are informational screening and inspection offerings, not a Texas-licensed mold assessment or a mold remediation protocol.
              Screening results reflect conditions at the time of inspection and do not guarantee the absence of concealed growth.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
