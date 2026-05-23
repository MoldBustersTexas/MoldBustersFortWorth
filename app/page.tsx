import React from "react";
import { Phone, ShieldCheck, Wind, Home, CheckCircle, MapPin, Star, CalendarDays, AlertTriangle } from "lucide-react";
function Button({ children, className = "", variant = "default", size = "default", ...props }: any) {
  const base = "inline-flex items-center justify-center px-4 py-2 font-medium transition";
  const styles =
    variant === "secondary"
      ? "bg-white text-slate-900 hover:bg-slate-100"
      : variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
      : "bg-slate-900 text-white hover:bg-slate-800";

  const sizing = size === "lg" ? "px-6 py-3" : "px-4 py-2";

  return (
    <button className={`${base} ${styles} ${sizing} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }: any) {
  return <div className={`bg-white border border-slate-200 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}
export default function MoldBustersFortWorthWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="Mold Busters Fort Worth Logo"
        className="w-16 h-16 object-contain"
      />
      <div>
        <div className="text-2xl font-bold tracking-tight">Mold Busters Fort Worth</div>
        <div className="text-sm text-slate-600">Indoor Air Quality • Mold Concerns • HVAC-Related Issues</div>
      </div>
    </div>

    <div className="hidden md:flex gap-6 text-sm font-medium">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#areas">Service Areas</a>
      <a href="#contact">Contact</a>
    </div>

    <Button className="rounded-2xl">
      <Phone className="w-4 h-4 mr-2" /> Call 214-802-4655
    </Button>
  </div>
</header>

     <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
  <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div>
      <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
        <ShieldCheck className="w-4 h-4" />
        Trusted local indoor air quality help
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Fort Worth Mold Removal & Indoor Air Quality Services
      </h1>

      <p className="text-lg text-slate-200 mb-8 leading-relaxed">
        We help homeowners identify moisture-related concerns, improve indoor air quality,
        perform InstaScope air quality screening, and address visible mold concerns with
        practical, professional service.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="tel:2148024655"
          className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 px-6 py-3 rounded-2xl text-base font-medium transition"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call for Help
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-2xl text-base font-medium transition"
        >
          <CalendarDays className="w-5 h-5 mr-2" />
          Request Appointment
        </a>
      </div>
    </div>
    {/* RIGHT SIDE */}
    <Card className="rounded-3xl shadow-2xl border-0 overflow-hidden">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">
          Common Reasons Customers Call Us
        </h2>

        <div className="space-y-4">
          {[
            "Musty odors or humidity concerns",
            "Visible mold around vents or walls",
            "HVAC air quality concerns",
            "Allergy-like symptoms indoors",
            "Real-time InstaScope air quality screening",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

  </div>
</section>

      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Built for homeowners who need straightforward help with indoor air quality, InstaScope testing, mold concerns, and moisture-related issues.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
         <a href="/mold-testing-fort-worth">
  <ServiceCard
    icon={<Wind />}
    title="Indoor Air Quality & InstaScope Testing"
    text="Air and surface sampling options, InstaScope real-time air quality screening, and third-party laboratory reporting with practical explanation of findings."
  />
</a>
          <ServiceCard icon={<Home />} title="Mold Removal & Air Quality Treatment" text="Mold-related cleaning, dry fog treatment options, odor reduction, and indoor air quality-focused services for homes and businesses throughout DFW." />
          <ServiceCard icon={<ShieldCheck />} title="HVAC & Moisture Review" text="General observations around humidity, condensation, air leaks, and HVAC-related contamination concerns." />
        </div>
      </section>

      <section id="process" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Simple Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1", "Listen", "We discuss your concerns, history, symptoms, odors, or visible issues."],
              ["2", "Inspect", "We perform a practical visual review and identify moisture or air quality concerns."],
              ["3", "Test or Treat", "When appropriate, we offer IAQ sampling, limited cleanup, or air quality treatment options."],
              ["4", "Recommend", "You receive clear next steps focused on moisture control, HVAC, cleaning, and prevention."]
            ].map(([num, title, text]) => (
              <Card key={num} className="rounded-3xl shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mb-4">{num}</div>
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why homeowners choose us</h2>
            <div className="space-y-4">
              {[
                "Local Fort Worth-area service",
                "Clear, plain-English explanations",
                "Practical moisture and HVAC guidance",
                "Air quality focused approach",
                "Professional documentation when testing is performed"
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="rounded-3xl bg-slate-900 text-white shadow-xl">
            <CardContent className="p-8">
              <AlertTriangle className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Moisture comes first</h3>
              <p className="text-slate-200">
                Mold concerns usually come back to moisture. Our recommendations focus on correcting water intrusion, humidity, HVAC condensation, and airflow issues so the problem does not keep returning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="areas" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Fort Worth & Surrounding Areas</h2>
          <p className="text-slate-600 mb-8">Fort Worth, Arlington, Keller, Southlake, Grapevine, Bedford, Hurst, Euless, Irving, Dallas, Denton, and nearby DFW communities.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Fort Worth','Arlington','Keller','Southlake','Grapevine','Bedford','Hurst','Euless','Irving','Dallas','Denton'].map(city => (
              <span key={city} className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
  <Card className="rounded-3xl shadow-xl overflow-hidden">
    <CardContent className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-4">
        Need help with mold or air quality concerns?
      </h2>

      <p className="text-slate-600 mb-6">
        Call today or request an appointment. We will help you understand the next practical step.
      </p>

      <div className="space-y-3 text-sm mb-8">
        <p><strong>Phone:</strong> 214-802-4655</p>
        <p><strong>Email:</strong> info@moldbustersfortworth.com</p>
        <p><strong>Service Area:</strong> Dallas-Fort Worth Metroplex</p>
      </div>

      <form
        action="https://formsubmit.co/Info@MoldBustersFortWorth.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-slate-300 rounded-xl px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3"
        />

        <textarea
          name="message"
          placeholder="How can we help?"
          rows={5}
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition"
        >
          Submit Request
        </button>
      </form>
    </CardContent>
  </Card>
</section>

      <footer className="bg-slate-950 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Mold Busters Fort Worth. All rights reserved.</p>
          <p>Indoor Air Quality • Mold Concerns • Moisture Guidance</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, text }: any) {
  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5">
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}
