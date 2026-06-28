import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Mold Inspection Fort Worth | Moisture & Air Quality Review",
  description:
    "Professional mold testing in Fort Worth using InstaScope real-time analysis. Detect mold concerns, indoor air quality issues, HVAC contamination, moisture problems, and receive optional certified laboratory confirmation.",
  alternates: {
    canonical: "/hvac-moisture-review-fort-worth",
  },
};

export default function HVACMoistureReviewPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-emerald-400 mb-4">
            HVAC & Moisture Review
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
             HVAC Mold & Moisture Inspection in Fort Worth
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
  );
}