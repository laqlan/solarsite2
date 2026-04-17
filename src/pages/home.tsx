import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useI18n } from "@/i18n/context";

/* ── tiny icon helpers (inline SVGs so no extra deps needed) ── */
type IconProps = { className?: string; style?: React.CSSProperties };
const SunIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);
const LeafIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);
const BoltIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const ShieldIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const ChartIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const CheckIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);
const PhoneIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const StarIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const MapPinIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ArrowRightIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Home() {
  const { t, language } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Data arrays using i18n
  const STATS = t("homeContent.stats");
  const SERVICES = [
    {
      icon: <SunIcon className="h-7 w-7" />,
      title: t("homeContent.services.0.title"),
      desc: t("homeContent.services.0.desc"),
      color: "text-amber-500",
      bg: "bg-amber-50",
      link: "/services#service-solar",
    },
    {
      icon: <BoltIcon className="h-7 w-7" />,
      title: t("homeContent.services.1.title"),
      desc: t("homeContent.services.1.desc"),
      color: "text-sky-600",
      bg: "bg-sky-50",
      link: "/services#service-battery",
    },
    {
      icon: <LeafIcon className="h-7 w-7" />,
      title: t("homeContent.services.2.title"),
      desc: t("homeContent.services.2.desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      link: "/services#service-group-consumption",
    },
    {
      icon: <ChartIcon className="h-7 w-7" />,
      title: t("homeContent.services.3.title"),
      desc: t("homeContent.services.3.desc"),
      color: "text-amber-600",
      bg: "bg-amber-50",
      link: "/services#service-smart",
    },
    {
      icon: <ShieldIcon className="h-7 w-7" />,
      title: t("homeContent.services.4.title"),
      desc: t("homeContent.services.4.desc"),
      color: "text-sky-600",
      bg: "bg-sky-50",
      link: "/services#service-maintenance",
    },
    {
      icon: <PhoneIcon className="h-7 w-7" />,
      title: t("homeContent.services.5.title"),
      desc: t("homeContent.services.5.desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      link: "/services#service-maintenance",
    },
  ];
  
  const STEPS = t("homeContent.steps");
  const TESTIMONIALS = t("homeContent.testimonials");
  
  const PLANS = [
    {
      name: language === "es" ? "Hogar Básico" : "Home Starter",
      price: "4.990",
      kwp: "3 kWp",
      panels: language === "es" ? "6 paneles" : "6 panels",
      features: language === "es" 
        ? ["Instalación incluida", "Tramitación de licencias", "Garantía 10 años", "App de monitorización", "Soporte por email"]
        : ["Installation included", "License processing", "10-year warranty", "Monitoring app", "Email support"],
      highlight: false,
    },
    {
      name: language === "es" ? "Hogar Plus" : "Home Plus",
      price: "7.490",
      kwp: "6 kWp",
      panels: language === "es" ? "10 paneles + batería" : "10 panels + battery",
      features: language === "es"
        ? ["Todo lo anterior", "Batería 5 kWh incluida", "Garantía 15 años", "Tramitación de subvenciones", "Soporte prioritario 24/7"]
        : ["All of the above", "5 kWh battery included", "15-year warranty", "Subsidy processing", "24/7 priority support"],
      highlight: true,
    },
    {
      name: language === "es" ? "Empresa" : "Business",
      price: language === "es" ? "A medida" : "Custom",
      kwp: "+10 kWp",
      panels: language === "es" ? "Instalación industrial" : "Industrial installation",
      features: language === "es"
        ? ["Estudio energético completo", "Financiación flexible", "Mantenimiento anual", "Monitorización avanzada", "Gestor de cuenta dedicado"]
        : ["Complete energy study", "Flexible financing", "Annual maintenance", "Advanced monitoring", "Dedicated account manager"],
      highlight: false,
    },
  ];

  const LOGOS = ["Endesa Solar", "Iberdrola X", "SunPower", "LG Energy", "Victron", "SMA Solar", "Fronius", "Enphase"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(45 30% 97%)", color: "hsl(210 25% 18%)", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden hero-section" style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a1a1a",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        WebkitBackgroundSize: "cover"
      }}>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Decorative sun circles */}
        <div className="absolute top-[-80px] right-[-80px] h-[480px] w-[480px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(40 96% 60%), transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", color: "hsl(34 90% 35%)", border: "1px solid hsl(40 96% 80%)" }}>
                <SunIcon className="h-4 w-4" />
                {t("homepage.hero.badge")}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}>
                {t("homepage.hero.title")}{" "}
                <span style={{
                  background: "linear-gradient(135deg, hsl(34 90% 42%), hsl(40 96% 52%), hsl(44 100% 60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {t("homepage.hero.titleHighlight")}
                </span>{" "}
                {t("homepage.hero.titleEnd")}
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                {t("homepage.hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-solar px-8 py-3.5 rounded-xl text-base font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                  {t("homepage.hero.cta1")}
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/34925518492" className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:opacity-80 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#25D366", color: "white" }}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.94l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.71-8.04c-.18-.09-1.08-.53-1.25-.59-.17-.07-.29-.11-.41.11-.12.22-.46.59-.56.71-.1.12-.21.13-.39.04-1.78-.89-2.79-1.28-3.68-2.79-.25-.43.25-.41.25-.41.65-1.06.73-1.7.48-2.04-.25-.35-.46-.45-.73-.47-.27-.02-.56 0-.85.01-.29.01-.76.29-1.14.55-1.58 1.14-1.26 3.32-.06 5.25 1.2 1.93 3.40 3.18 5.84 3.89.71.24 1.43.12 2.02-.3.37-.28.68-.76.76-1.29.06-.41-.13-.65-.33-.72z"/>
                  </svg>
                  {t("nav.whatsapp")}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: <ShieldIcon className="h-4 w-4" />, label: t("homepage.hero.trustWarranty") },
                  { icon: <CheckIcon className="h-4 w-4" />, label: t("homepage.hero.trustCertified") },
                  { icon: <LeafIcon className="h-4 w-4" />, label: t("homepage.hero.trustClean") },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                    <span style={{ color: "hsl(145 55% 40%)" }}>{b.icon}</span>
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual – solar panel illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main card */}
                <div className="rounded-3xl p-8 shadow-2xl"
                  style={{ backgroundColor: "white", width: "360px", boxShadow: "0 24px 60px hsl(40 60% 50% / 0.18), 0 4px 16px hsl(210 25% 18% / 0.08)" }}>
                  {/* Fake solar panel grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="h-16 rounded-lg relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg, hsl(220 40% 22%), hsl(215 35% 30%))", border: "1px solid hsl(220 30% 35%)" }}>
                        {/* Panel cell lines */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-px opacity-30">
                          {Array.from({ length: 6 }).map((_, j) => (
                            <div key={j} style={{ backgroundColor: "hsl(200 40% 60%)", borderRadius: "1px" }} />
                          ))}
                        </div>
                        {/* Sheen */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 opacity-20 rounded-t-lg"
                          style={{ background: "linear-gradient(180deg, hsl(44 100% 80%), transparent)" }} />
                      </div>
                    ))}
                  </div>
                  {/* Live stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "hsl(45 50% 96%)" }}>
                      <span className="text-sm font-medium" style={{ color: "hsl(210 20% 40%)" }}>{t("homepage.hero.productionLabel")}</span>
                      <span className="text-sm font-bold" style={{ color: "hsl(40 96% 42%)" }}>{t("homepage.hero.productionValue")} ☀️</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "hsl(145 40% 95%)" }}>
                      <span className="text-sm font-medium" style={{ color: "hsl(210 20% 40%)" }}>{t("homepage.hero.savingsLabel")}</span>
                      <span className="text-sm font-bold" style={{ color: "hsl(145 55% 38%)" }}>{t("homepage.hero.savingsValue")} 🌿</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "hsl(205 60% 95%)" }}>
                      <span className="text-sm font-medium" style={{ color: "hsl(210 20% 40%)" }}>{t("homepage.hero.co2Label")}</span>
                      <span className="text-sm font-bold" style={{ color: "hsl(205 60% 38%)" }}>{t("homepage.hero.co2Value")} 🌍</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-6 px-4 py-2.5 rounded-2xl shadow-lg font-bold text-sm"
                  style={{ backgroundColor: "hsl(40 96% 50%)", color: "hsl(210 25% 12%)", boxShadow: "0 6px 20px hsl(40 96% 50% / 0.4)" }}>
                  ⚡ {t("homepage.hero.noInterest")}
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl shadow-lg font-bold text-sm"
                  style={{ backgroundColor: "hsl(205 78% 50%)", color: "white", boxShadow: "0 6px 20px hsl(205 78% 50% / 0.35)" }}>
                  🏷️ {t("homepage.hero.subsidies")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section style={{ backgroundColor: "white", borderBottom: "1px solid hsl(45 20% 90%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: "linear-gradient(135deg, hsl(34 90% 42%), hsl(40 96% 52%))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {s.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "hsl(210 15% 52%)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS MARQUEE ── */}
      <section style={{ backgroundColor: "hsl(45 30% 97%)", borderBottom: "1px solid hsl(45 20% 90%)", padding: "20px 0", overflow: "hidden" }}>
        <div className="max-w-7xl mx-auto px-4 mb-3">
          <p className="text-center text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(210 15% 60%)" }}>
            {language === "es" ? "Trabajamos con las mejores marcas" : "We work with the best brands"}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="mx-8 px-6 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap"
                style={{ backgroundColor: "white", color: "hsl(210 20% 50%)", border: "1px solid hsl(45 20% 88%)", boxShadow: "0 1px 4px hsl(210 25% 18% / 0.06)" }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, hsl(45 30% 97%) 0%, hsl(205 40% 97%) 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "hsl(40 96% 92%)", color: "hsl(34 90% 35%)" }}>
              {t("homeContent.ourServices")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
              {language === "es" ? "Todo lo que necesitas para pasarte al solar" : "Everything you need to go solar"}
            </h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: "hsl(210 20% 42%)" }}>
              {language === "es" ? "Ofrecemos soluciones completas de energía solar para particulares, comunidades y empresas en toda España." : "We offer complete solar energy solutions for individuals, communities and businesses across Spain."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 transition-all duration-300 no-underline"
                style={{ backgroundColor: "white", border: "1px solid hsl(45 20% 90%)", boxShadow: "0 2px 12px hsl(210 25% 18% / 0.06)" }}>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${s.bg} ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 16%)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 48%)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, hsl(210 60% 28%) 0%, hsl(205 65% 38%) 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "hsl(40 96% 50% / 0.25)", color: "hsl(44 100% 75%)" }}>
              {t("homeContent.process")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {language === "es" ? "De cero a solar en 4 pasos" : "From zero to solar in 4 steps"}
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "hsl(205 50% 80%)" }}>
              {language === "es" ? "Hacemos que el proceso sea sencillo, transparente y sin sorpresas." : "We make the process simple, transparent and hassle-free."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(90deg, hsl(44 100% 65% / 0.6), transparent)" }} />
                )}
                <div className="relative z-10 rounded-2xl p-6"
                  style={{ backgroundColor: "hsl(205 60% 35% / 0.5)", border: "1px solid hsl(205 60% 55% / 0.3)", backdropFilter: "blur(8px)" }}>
                  <div className="text-4xl font-black mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "linear-gradient(135deg, hsl(44 100% 65%), hsl(40 96% 52%))",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(205 40% 75%)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" className="inline-block btn-solar px-10 py-4 rounded-xl text-base font-bold shadow-xl transition-transform hover:scale-105 no-underline">
              {language === "es" ? "Empezar ahora – es gratis" : "Get started – it's free"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "hsl(145 40% 92%)", color: "hsl(145 55% 32%)" }}>
              {t("homeContent.testimonialSection")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
              {language === "es" ? "Lo que dicen nuestros clientes" : "What our customers say"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl p-6"
                style={{ backgroundColor: "hsl(45 30% 98%)", border: "1px solid hsl(45 20% 90%)", boxShadow: "0 2px 12px hsl(210 25% 18% / 0.06)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" style={{ color: "hsl(40 96% 50%)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(210 20% 38%)" }}>"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, hsl(40 96% 50%), hsl(205 78% 50%))" }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: "hsl(210 25% 18%)" }}>{t.name}</div>
                      <div className="text-xs flex items-center gap-1" style={{ color: "hsl(210 15% 55%)" }}>
                        <MapPinIcon className="h-3 w-3" />{t.location}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-lg text-xs font-bold"
                    style={{ backgroundColor: "hsl(145 40% 92%)", color: "hsl(145 55% 32%)" }}>
                    {t.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, hsl(45 30% 97%) 0%, hsl(205 40% 97%) 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "hsl(205 60% 92%)", color: "hsl(205 60% 32%)" }}>
              {language === "es" ? "Precios" : "Pricing"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
              {language === "es" ? "Elige tu plan solar" : "Choose your solar plan"}
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "hsl(210 20% 42%)" }}>
              {language === "es" ? "Precios transparentes, sin letra pequeña. Financiación hasta 84 meses sin intereses." : "Transparent pricing, no hidden fees. Financing available for up to 84 months interest-free."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-7 relative ${plan.highlight ? "shadow-2xl scale-[1.03]" : ""}`}
                style={plan.highlight
                  ? { backgroundColor: "white", border: "2px solid hsl(40 96% 50%)", boxShadow: "0 16px 40px hsl(40 96% 50% / 0.2)" }
                  : { backgroundColor: "white", border: "1px solid hsl(45 20% 90%)", boxShadow: "0 2px 12px hsl(210 25% 18% / 0.06)" }}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, hsl(40 96% 50%), hsl(44 100% 62%))", color: "hsl(210 25% 12%)" }}>
                    ⭐ {language === "es" ? "Más popular" : "Most popular"}
                  </div>
                )}
                <div className="mb-1 text-xs font-bold tracking-widest uppercase" style={{ color: "hsl(210 15% 55%)" }}>
                  {plan.kwp}
                </div>
                <h3 className="text-xl font-extrabold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
                  {plan.name}
                </h3>
                <div className="text-xs mb-4" style={{ color: "hsl(210 15% 58%)" }}>{plan.panels}</div>
                <div className="mb-6">
                  {plan.price === (language === "es" ? "A medida" : "Custom") ? (
                    <span className="text-3xl font-extrabold" style={{ color: "hsl(205 60% 38%)" }}>{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold" style={{ color: "hsl(210 25% 14%)" }}>€{plan.price}</span>
                      <span className="text-sm ml-1" style={{ color: "hsl(210 15% 55%)" }}>{language === "es" ? "precio final" : "final price"}</span>
                    </>
                  )}
                </div>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(210 20% 38%)" }}>
                      <CheckIcon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(145 55% 40%)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 inline-block text-center no-underline ${plan.highlight ? "btn-solar" : ""}`}
                  style={!plan.highlight ? {
                    backgroundColor: "hsl(205 60% 92%)",
                    color: "hsl(205 60% 30%)",
                    border: "1.5px solid hsl(205 60% 78%)"
                  } : {}}>
                  {plan.price === (language === "es" ? "A medida" : "Custom") ? (language === "es" ? "Solicitar estudio" : "Request study") : (language === "es" ? "Contratar ahora" : "Get started now")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg, hsl(40 96% 50%) 0%, hsl(44 100% 60%) 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <SunIcon className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(210 25% 12%)", opacity: 0.7 }} />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 10%)" }}>
            {language === "es" ? "España tiene 300 días de sol al año. ¿Los estás aprovechando?" : "Spain gets 300 sunny days a year. Are you taking advantage of them?"}
          </h2>
          <p className="text-base mb-8" style={{ color: "hsl(30 60% 25%)" }}>
            {language === "es" ? "Únete a miles de familias y empresas españolas que ya generan su propia energía limpia y ahorran mes a mes." : "Join thousands of Spanish families and businesses already generating their own clean energy and saving every month."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 rounded-xl text-base font-bold shadow-lg transition-transform hover:scale-105 inline-block"
              style={{ backgroundColor: "hsl(210 25% 12%)", color: "hsl(44 100% 65%)" }}>
              {language === "es" ? "Solicitar visita gratuita" : "Request free visit"}
            </Link>
            <Link to="/projects" className="px-10 py-4 rounded-xl text-base font-bold border-2 transition-all hover:opacity-80 inline-block"
              style={{ borderColor: "hsl(210 25% 12%)", color: "hsl(210 25% 12%)", backgroundColor: "transparent" }}>
              {language === "es" ? "Ver instalaciones reales" : "View real installations"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{ backgroundColor: "hsl(40 96% 92%)", color: "hsl(34 90% 35%)" }}>
                {t("contactPage.hero.title")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
                {language === "es" ? "Pide tu presupuesto gratuito hoy" : "Get your free quote today"}
              </h2>
              <p className="text-base mb-6" style={{ color: "hsl(210 20% 42%)" }}>
                {language === "es" ? "Rellena el formulario y un asesor solar experto te contactará en menos de 24 horas para analizar tu caso sin compromiso." : "Fill out the form and a solar expert will contact you within 24 hours to analyze your case with no obligation."}
              </p>
              <div className="space-y-4">
                {[
                  { icon: <PhoneIcon className="h-5 w-5" />, label: language === "es" ? "Teléfono gratuito" : "Free phone", value: "900 000 000" },
                  { icon: <MapPinIcon className="h-5 w-5" />, label: language === "es" ? "Oficinas" : "Offices", value: language === "es" ? "Madrid · Barcelona · Sevilla · Valencia" : "Madrid · Barcelona · Seville · Valencia" },
                  { icon: <CheckIcon className="h-5 w-5" />, label: language === "es" ? "Horario" : "Hours", value: language === "es" ? "Lunes–Viernes 9:00–19:00 · Sáb 10:00–14:00" : "Mon–Fri 9:00–19:00 · Sat 10:00–14:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "hsl(40 96% 92%)", color: "hsl(34 90% 38%)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "hsl(210 15% 55%)" }}>{item.label}</div>
                      <div className="text-sm font-medium" style={{ color: "hsl(210 25% 20%)" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8"
              style={{ backgroundColor: "hsl(45 30% 97%)", border: "1px solid hsl(45 20% 90%)", boxShadow: "0 4px 24px hsl(210 25% 18% / 0.08)" }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "hsl(145 40% 90%)" }}>
                    <CheckIcon className="h-8 w-8" style={{ color: "hsl(145 55% 38%)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(210 25% 14%)" }}>
                    {language === "es" ? "¡Solicitud recibida!" : "Request received!"}
                  </h3>
                  <p className="text-sm" style={{ color: "hsl(210 20% 45%)" }}>
                    {language === "es" ? "Un asesor te contactará en las próximas 24 horas. ¡Gracias por confiar en SolTech!" : "An advisor will contact you within the next 24 hours. Thank you for trusting SolTech!"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "hsl(210 20% 38%)" }}>
                          {field === "name" ? (language === "es" ? "Nombre completo" : "Full name") : (language === "es" ? "Correo electrónico" : "Email")}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          required
                          placeholder={field === "name" ? (language === "es" ? "Tu nombre" : "Your name") : "tu@email.com"}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{ backgroundColor: "white", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                          onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                          onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(["phone", "city"] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "hsl(210 20% 38%)" }}>
                          {field === "phone" ? (language === "es" ? "Teléfono" : "Phone") : (language === "es" ? "Ciudad" : "City")}
                        </label>
                        <input
                          type={field === "phone" ? "tel" : "text"}
                          placeholder={field === "phone" ? "+34 6XX XXX XXX" : (language === "es" ? "Madrid, Sevilla…" : "Madrid, Seville…")}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{ backgroundColor: "white", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                          onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                          onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "hsl(210 20% 38%)" }}>
                      {language === "es" ? "¿Alguna pregunta o comentario?" : "Any questions or comments?"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={language === "es" ? "Cuéntanos más sobre tu proyecto..." : "Tell us more about your project..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ backgroundColor: "white", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                      onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                      onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                    />
                  </div>
                  <button type="submit" className="btn-solar w-full py-3.5 rounded-xl text-sm font-bold shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                    {t("homepage.hero.cta1")}
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                  <p className="text-center text-xs" style={{ color: "hsl(210 15% 58%)" }}>
                    {language === "es" ? "Sin compromiso. Sin spam. 100% gratuito." : "No commitment. No spam. 100% free."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "hsl(210 25% 14%)", color: "hsl(210 15% 70%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgb(250, 168, 5), rgb(255, 207, 77))" }}>
                  <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Pure<span style={{ color: "rgb(250, 168, 5)" }}>Grid</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                {t("footer.description")}
              </p>
              <div className="flex gap-3">
                {["f", "in", "ig", "yt"].map((s) => (
                  <div key={s} className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "hsl(210 20% 22%)", color: "hsl(44 100% 65%)" }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {[
              { 
                title: language === "es" ? "Servicios" : "Services", 
                links: language === "es" 
                  ? [{ text: "Instalación residencial", href: "/residential-installation" }, { text: "Instalación empresarial", href: "#" }, { text: "Baterías", href: "/services#service-battery" }, { text: "Autoconsumo", href: "/services#service-group-consumption" }, { text: "Mantenimiento", href: "/services#service-maintenance" }]
                  : [{ text: "Residential installation", href: "/residential-installation" }, { text: "Business installation", href: "#" }, { text: "Batteries", href: "/services#service-battery" }, { text: "Self-consumption", href: "/services#service-group-consumption" }, { text: "Maintenance", href: "/services#service-maintenance" }]
              },
              { title: language === "es" ? "Empresa" : "Company", links: language === "es" ? [{ text: "Sobre nosotros", href: "/about" }, { text: "Proyectos", href: "/projects" }, { text: "Blog solar", href: "#" }, { text: "Empleo", href: "#" }, { text: "Prensa", href: "#" }] : [{ text: "About us", href: "/about" }, { text: "Projects", href: "/projects" }, { text: "Solar blog", href: "#" }, { text: "Careers", href: "#" }, { text: "Press", href: "#" }] },
              { title: language === "es" ? "Legal" : "Legal", links: language === "es" ? [{ text: "Aviso legal", href: "#" }, { text: "Privacidad", href: "#" }, { text: "Cookies", href: "#" }, { text: "Términos y condiciones", href: "#" }] : [{ text: "Legal notice", href: "#" }, { text: "Privacy", href: "#" }, { text: "Cookies", href: "#" }, { text: "Terms & conditions", href: "#" }] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold mb-4 text-white">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link to={link.href} className="text-sm hover:text-white transition-colors">{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: "hsl(210 20% 22%)" }}>
            <span>{t("footer.copyright")}</span>
            <div className="flex items-center gap-1.5">
              <LeafIcon className="h-3.5 w-3.5" style={{ color: "hsl(145 55% 50%)" }} />
              <span>{language === "es" ? "Empresa comprometida con el medio ambiente" : "Company committed to environmental sustainability"}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
