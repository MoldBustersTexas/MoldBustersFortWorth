export const metadata = {
  title: "Mold Testing Fort Worth | Indoor Air Quality Testing",
  description:
    "Mold Busters Fort Worth provides mold testing and complete indoor air quality testing using InstaScope real-time analysis, moisture observations, HVAC checks, and optional lab identification samples.",
};

export default function MoldTestingFortWorthPage() {
  return (
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
  );
}
