import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Wind,
  ShieldCheck,
  Home,
  Droplets,
  Thermometer,
  Search,
  CheckCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Indoor Air Quality Testing Fort Worth | InstaScope",
  description:
    "Professional indoor air quality testing in Fort Worth using real-time InstaScope screening, HVAC observations, moisture evaluation, and optional laboratory testing.",
  alternates: {
    canonical: "/indoor-air-quality-testing-fort-worth",
  },
  openGraph: {
    title: "Indoor Air Quality Testing Fort Worth | Mold Busters",
    description:
      "Real-time InstaScope screening, HVAC observations, moisture evaluation, and optional laboratory testing throughout Fort Worth and DFW.",
    url: "https://www.moldbustersfortworth.com/indoor-air-quality-testing-fort-worth",
    siteName: "Mold Busters Fort Worth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.moldbustersfortworth.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Indoor Air Quality Testing in Fort Worth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor Air Quality Testing Fort Worth",
    description:
      "Real-time InstaScope screening, HVAC observations, moisture evaluation, and optional laboratory testing in Fort Worth.",
    images: ["https://www.moldbustersfortworth.com/logo.png"],
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is indoor air quality testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indoor air quality testing evaluates environmental conditions inside a home or business. Depending on the inspection, this may include real-time air quality screening, moisture observations, HVAC evaluation, and optional laboratory sampling.",
      },
    },
    {
      "@type": "Question",
      name: "Can poor indoor air quality make a home smell musty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Persistent musty odors are commonly associated with moisture, microbial growth, HVAC issues, poor ventilation, or damp building materials.",
      },
    },
    {
      "@type": "Question",
      name: "Does InstaScope replace laboratory testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. InstaScope provides real-time screening that helps identify abnormal airborne conditions. Laboratory analysis is still appropriate when confirmation or additional identification is needed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inspection time varies depending on the size of the property and the concerns being investigated.",
      },
    },
    {
      "@type": "Question",
      name: "Do you inspect HVAC systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HVAC systems are an important part of indoor air quality. We evaluate airflow, drainage, humidity, air leakage, and conditions that may affect indoor air quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can you investigate moisture problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Moisture observations are a key part of many indoor air quality investigations because elevated moisture often contributes to indoor environmental concerns.",
      },
    },
  ],
};
export default function IndoorAirQualityPage() {
  return (
<>
<Script
  id="indoor-air-quality-faq-schema"
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

      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 px-5 py-2 text-emerald-300 font-medium mb-8">
              <Wind className="w-5 h-5" />
              Indoor Air Quality Specialists
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
  Indoor Air Quality Testing in Fort Worth
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10">
              Professional indoor air quality evaluations using real-time
              screening technology, moisture investigations, HVAC observations,
              and laboratory testing when appropriate.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="tel:2148024655"
                className="rounded-full bg-emerald-500 hover:bg-emerald-600 px-8 py-4 font-semibold transition"
              >
                <Phone className="inline mr-2 w-5 h-5" />
                Call 214-802-4655
              </a>

              <Link
                href="/mold-testing-fort-worth"
                className="rounded-full border border-white/30 px-8 py-4 hover:bg-white/10 transition"
              >
                Mold Testing
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-8">
              What Is Indoor Air Quality?
            </h2>

            <p className="text-xl leading-9 text-slate-700 mb-8">

              Indoor air quality (IAQ) refers to the condition of the air inside
              your home or business. It can be influenced by moisture,
              ventilation, HVAC performance, airborne particles, dust, pollen,
              water damage, biological contaminants, building materials, and
              everyday household activities.

            </p>

            <p className="text-xl leading-9 text-slate-700">

              Poor indoor air quality doesn't always mean visible mold is
              present. Elevated humidity, condensation, inadequate ventilation,
              HVAC issues, and hidden moisture problems can all contribute to
              unhealthy indoor environments.

            </p>

          </div>

        </div>

      </section>

      {/* WHY IT MATTERS */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              Why Indoor Air Quality Matters
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">

              The air inside your home may contain significantly more airborne
              contaminants than outdoor air. Understanding the source is the
              first step toward improving your indoor environment.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Feature
              icon={<Wind />}
              title="Cleaner Air"
              text="Evaluate airborne particle trends and identify unusual indoor conditions."
            />

            <Feature
              icon={<Droplets />}
              title="Moisture Control"
              text="Locate moisture conditions that contribute to poor indoor air quality."
            />

            <Feature
              icon={<ShieldCheck />}
              title="Healthier Home"
              text="Understand environmental factors that may be affecting your comfort."
            />

          </div>

        </div>

      </section>

      {/* SYMPTOMS */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Signs Your Indoor Air Quality May Be Poor
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Musty odors",
              "High indoor humidity",
              "Condensation on vents",
              "Visible mold growth",
              "Water damage history",
              "Allergy-like symptoms indoors",
              "Dust accumulation",
              "HVAC odors",
              "Frequent respiratory irritation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 p-6 flex items-center gap-4"
              >
                <CheckCircle className="text-emerald-500 w-6 h-6" />
                <span className="text-lg">{item}</span>
              </div>
            ))}

          </div>

        </div>

      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-4">
              Real-Time IAQ Screening
            </p>

            <h2 className="text-4xl font-bold mb-6">
              What Is an InstaScope Inspection?
            </h2>

            <p className="text-xl text-slate-700 leading-9">
              Unlike traditional laboratory-only testing that captures a single air
              sample at one point in time, an InstaScope inspection continuously
              analyzes indoor air conditions in real time while we move through the
              home, evaluate HVAC operation, and investigate suspect areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Airborne Particle Activity",
                text: "We monitor airborne particle changes room-by-room to identify unusual indoor air quality patterns.",
              },
              {
                title: "Moisture-Related Concerns",
                text: "We look for humidity, condensation, leaks, and moisture conditions that may contribute to microbial growth.",
              },
              {
                title: "HVAC Performance",
                text: "We evaluate how the HVAC system may influence air quality through return leaks, dirty coils, plenums, ducts, and airflow issues.",
              },
              {
                title: "Building Airflow",
                text: "We review pressure imbalance, attic air leakage, garage infiltration, ventilation concerns, and other airflow-related issues.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-6">
              What InstaScope Can Help Identify
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              InstaScope helps screen for airborne abnormalities and environmental
              patterns that may require additional investigation or laboratory
              confirmation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Biological Particle Trends", "Mold-like particles, pollen, and bioaerosol-related activity."],
              ["Fine Particulates", "PM1, PM2.5, PM10, dust, smoke, and construction-related particles."],
              ["IAQ Conditions", "VOC trends, CO₂, relative humidity, temperature, and ventilation changes."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-slate-600 leading-8">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* INSTA VS TRADITIONAL */}

<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-3">
        Why We Use InstaScope
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Why Real-Time Air Quality Screening Is Different
      </h2>

      <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-9">
        Traditional laboratory sampling and InstaScope screening serve different
        purposes. We often use them together because each provides valuable
        information during an indoor air quality investigation.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200">

      <table className="w-full">

        <thead className="bg-slate-900 text-white">

          <tr>

            <th className="text-left p-6 text-xl">
              Traditional Laboratory Testing
            </th>

            <th className="text-left p-6 text-xl bg-emerald-600">
              InstaScope Screening
            </th>

          </tr>

        </thead>

        <tbody>

          {[
            [
              "Snapshot collected during one sampling period.",
              "Continuously evaluates conditions while the inspection is taking place."
            ],

            [
              "Laboratory results typically available later.",
              "Provides immediate screening information during the visit."
            ],

            [
              "Identifies organisms through laboratory analysis when samples are submitted.",
              "Helps locate abnormal particle activity and guides the inspection process."
            ],

            [
              "Limited to individual sample locations.",
              "Allows room-to-room comparisons throughout the property."
            ],

            [
              "Excellent for confirming sample results.",
              "Excellent for locating where additional investigation may be beneficial."
            ],

          ].map(([left,right])=>(
            <tr
              key={left}
              className="border-t border-slate-200"
            >

              <td className="p-6 align-top">
                {left}
              </td>

              <td className="p-6 bg-emerald-50 align-top">
                {right}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

    <div className="mt-14 bg-emerald-50 rounded-3xl p-10 border border-emerald-200">

      <h3 className="text-3xl font-bold mb-6">
        The Best Results Often Come From Using Both
      </h3>

      <p className="text-lg leading-9 text-slate-700">

        Real-time screening allows us to observe changing conditions while the
        inspection is taking place. When confirmation of a specific organism is
        appropriate, third-party laboratory analysis can provide additional
        information. Together, these approaches provide a more complete picture
        of the indoor environment than relying on either method alone.

      </p>

    </div>

  </div>
</section>

{/* OUR PROCESS */}

<section className="bg-slate-50 py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-6">
        Our Indoor Air Quality Inspection Process
      </h2>

      <p className="text-xl text-slate-600">
        Every inspection follows a systematic building-science approach.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {[
        "Discuss your concerns and building history",
        "Perform a detailed visual inspection",
        "Evaluate moisture conditions",
        "Review HVAC system operation",
        "Perform InstaScope real-time screening",
        "Compare room-to-room conditions",
        "Collect laboratory samples when appropriate",
        "Provide recommendations and next steps"
      ].map((step,index)=>(
        <div
          key={step}
          className="flex gap-6 rounded-3xl bg-white p-8 shadow-sm"
        >

          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
            {index+1}
          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-2">
              Step {index+1}
            </h3>

            <p className="text-slate-600 leading-8">
              {step}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* HVAC & MOISTURE */}

<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
    <div>
      <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-3">
        HVAC & Moisture Expertise
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Indoor Air Quality Problems Often Start With Moisture or HVAC Issues
      </h2>

      <p className="text-lg text-slate-700 leading-9 mb-6">
        Many indoor air quality concerns are not caused by one isolated issue.
        They often involve a combination of moisture, humidity, airflow,
        filtration, duct leakage, negative pressure, and HVAC system conditions.
      </p>

      <p className="text-lg text-slate-700 leading-9">
        Mold Busters Fort Worth focuses on identifying the conditions that may
        be contributing to poor air quality instead of only treating symptoms.
      </p>
    </div>

    <div className="grid gap-6">
      {[
        "High indoor humidity",
        "Condensation on vents or windows",
        "Air leaks around ductwork or plenums",
        "Dirty evaporator coils or air handlers",
        "Negative pressure conditions",
        "Improper condensate drainage",
      ].map((item) => (
        <div key={item} className="rounded-2xl border border-slate-200 p-5 flex gap-3 items-center">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <span className="font-medium">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* EQUIPMENT */}

<section className="bg-slate-50 py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6">
        Tools We May Use During an IAQ Inspection
      </h2>

      <p className="text-xl text-slate-600 max-w-4xl mx-auto">
        Our inspections may combine real-time screening, moisture observations,
        HVAC review, and laboratory sampling when needed.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        ["InstaScope", "Real-time indoor air quality screening and room-to-room comparison."],
        ["Moisture Meter", "Checks building materials for elevated moisture conditions."],
        ["Thermal Imaging", "Helps identify temperature differences associated with possible moisture or insulation issues."],
        ["Air & Surface Samples", "Optional third-party laboratory samples for identification when needed."],
      ].map(([title, text]) => (
        <div key={title} className="bg-white rounded-3xl p-8 shadow-sm h-full">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-slate-600 leading-8">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* COMMON ISSUES */}

<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6">
        Common Indoor Air Quality Issues We Find
      </h2>

      <p className="text-xl text-slate-600 max-w-4xl mx-auto">
        Every property is different, but these are some of the most common
        problems we find during indoor air quality and moisture-related inspections.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        ["HVAC contamination", "Dust, moisture, dirty coils, supply plenum concerns, and airflow issues may affect indoor air quality."],
        ["Hidden moisture", "Water intrusion, condensation, plumbing leaks, and elevated humidity can create conditions for microbial growth."],
        ["Poor ventilation", "Insufficient ventilation and pressure imbalances can trap contaminants and increase indoor discomfort."],
        ["Musty odors", "Odors often come from moisture, microbial activity, HVAC issues, or contaminated building materials."],
        ["Particle spikes", "Dust, smoke, construction debris, outdoor air infiltration, and HVAC operation can affect readings."],
        ["Condensation problems", "Sweating vents, wet insulation, and cold surfaces can indicate humidity or airflow concerns."],
      ].map(([title, text]) => (
        <div key={title} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-slate-600 leading-8">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* FAQ */}

<section className="bg-slate-900 text-white py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-16">

      <p className="uppercase tracking-widest text-emerald-400 font-semibold mb-3">
        Frequently Asked Questions
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Indoor Air Quality Questions
      </h2>

      <p className="text-xl text-slate-300">
        Answers to common questions homeowners ask before scheduling an
        indoor air quality inspection.
      </p>

    </div>

    <div className="space-y-8">

      {[
        [
          "What is indoor air quality testing?",
          "Indoor air quality testing evaluates environmental conditions inside a home or business. Depending on the inspection, this may include real-time air quality screening, moisture observations, HVAC evaluation, airborne particle trends, and laboratory sampling when appropriate."
        ],

        [
          "Can poor indoor air quality make a home smell musty?",
          "Yes. Persistent musty odors are commonly associated with moisture, microbial growth, HVAC issues, poor ventilation, or damp building materials."
        ],

        [
          "Does InstaScope replace laboratory testing?",
          "No. InstaScope provides real-time screening that helps identify abnormal airborne conditions. Laboratory analysis is still appropriate when confirmation of specific organisms is needed."
        ],

        [
          "How long does an inspection take?",
          "Inspection time varies depending on the size of the property and the concerns being investigated."
        ],

        [
          "Do you inspect HVAC systems?",
          "Yes. HVAC systems are an important part of indoor air quality. We evaluate airflow, drainage, humidity, air leakage, and conditions that may affect indoor air quality."
        ],

        [
          "Can you investigate moisture problems?",
          "Yes. Moisture observations are a key part of many indoor air quality investigations because elevated moisture often contributes to indoor environmental concerns."
        ],

      ].map(([question,answer])=>(
        <div
          key={question}
          className="rounded-3xl bg-slate-800 p-8"
        >

          <h3 className="text-2xl font-bold mb-4">
            {question}
          </h3>

          <p className="text-slate-300 leading-8">
            {answer}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

{/* SERVICE AREAS */}

<section className="py-24 px-6 bg-white">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-6">
        Proudly Serving Fort Worth & Surrounding Communities
      </h2>

      <p className="text-xl text-slate-600">
        Indoor air quality testing throughout the Dallas–Fort Worth Metroplex.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {[
        "Fort Worth",
        "Arlington",
        "North Richland Hills",
        "Keller",
        "Southlake",
        "Colleyville",
        "Bedford",
        "Hurst",
        "Euless",
        "Grapevine",
        "Benbrook",
        "Weatherford",
        "Burleson",
        "Aledo",
        "Mansfield",
        "Dallas",
      ].map((city)=>(
        <div
          key={city}
          className="rounded-2xl border border-slate-200 py-4 text-center font-semibold"
        >
          {city}
        </div>
      ))}

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
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          Mold Testing
        </h3>

        <p className="text-zinc-600">
          Professional mold inspections using real-time InstaScope analysis
          with optional laboratory confirmation.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

      <Link
        href="/hvac-moisture-review-fort-worth"
        className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">
          HVAC & Moisture Review
        </h3>

        <p className="text-zinc-600">
          Identify humidity, negative pressure, airflow issues,
          condensation, and HVAC-related indoor air quality concerns.
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
          Learn about source correction, cleaning, dry fog treatment,
          and long-term indoor air quality improvements.
        </p>

        <p className="mt-4 text-green-700 font-semibold">
          Learn More →
        </p>
      </Link>

    </div>

  </div>
</section>
{/* FINAL CTA */}

<section className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-24 px-6">

  <div className="max-w-5xl mx-auto text-center text-white">

    <h2 className="text-5xl font-bold mb-8">
      Schedule Your Indoor Air Quality Inspection Today
    </h2>

    <p className="text-2xl leading-10 mb-12 opacity-95">

      Whether you're experiencing musty odors, elevated humidity,
      allergy symptoms, HVAC concerns, or simply want a better
      understanding of your home's indoor environment,
      Mold Busters Fort Worth is here to help.

    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <a
        href="tel:2148024655"
        className="bg-white text-emerald-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition"
      >
        Call 214-802-4655
      </a>

      <Link
        href="/contact"
        className="border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-700 transition"
      >
        Request an Inspection
      </Link>

    </div>

  </div>

</section>
   </main>
</>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg h-full">

      <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-600 leading-8">
        {text}
      </p>

    </div>
  );
}