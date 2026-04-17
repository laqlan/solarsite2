import { motion } from "framer-motion";
import { Sun, Check, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

/* ── tiny icon helpers (inline SVGs so no extra deps needed) ── */
type IconProps = { className?: string; style?: React.CSSProperties };
const SunIcon = ({ className = "", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const BusinessInstallation = () => {
  const { language, t } = useI18n();

  const features = [
    {
      icon: Sun,
      title: language === "en" ? "Scalable Solutions" : "Soluciones Escalables",
      desc: language === "en" 
        ? "From small shops to large industrial facilities, we scale to your needs" 
        : "Desde pequeñas tiendas hasta grandes instalaciones industriales, nos adaptamos",
    },
    {
      icon: Zap,
      title: language === "en" ? "Professional Installation" : "Instalación Profesional",
      desc: language === "en"
        ? "Minimal downtime with expert coordination and planning"
        : "Mínimo tiempo de inactividad con coordinación y planificación experta",
    },
    {
      icon: Shield,
      title: language === "en" ? "Guarantee & Compliance" : "Garantía y Cumplimiento",
      desc: language === "en"
        ? "Full compliance with regulations and comprehensive warranty"
        : "Cumplimiento total de regulaciones y garantía integral",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "ROI in 3-5 Years" : "ROI en 3-5 Años",
      desc: language === "en"
        ? "Significant reduction in energy costs with measurable returns"
        : "Reducción significativa de costos energéticos con retorno medible",
    },
  ];

  const benefits = [
    language === "en" ? "Reduced operating costs" : "Costos operativos reducidos",
    language === "en" ? "Improved corporate image" : "Imagen corporativa mejorada",
    language === "en" ? "Energy independence" : "Independencia energética",
    language === "en" ? "Tax incentives available" : "Incentivos fiscales disponibles",
    language === "en" ? "Long-term savings" : "Ahorros a largo plazo",
    language === "en" ? "Maintenance support included" : "Soporte de mantenimiento incluido",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {language === "en" ? "Business Solar Installation" : "Instalación Empresarial de Energía Solar"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Reduce your operational costs and boost your bottom line with our commercial solar solutions"
                : "Reduce tus costos operativos y mejora tus ganancias con nuestras soluciones comerciales de energía solar"}
            </p>
            <Link
              to="/contact"
              className="btn-solar px-8 py-3 rounded-lg text-white font-bold inline-block hover:scale-105 transition-transform"
            >
              {t("homepage.hero.cta1")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900">
            {language === "en" ? "Why Solar for Your Business?" : "¿Por Qué Solar para tu Negocio?"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-solar transition-colors"
                >
                  <Icon className="h-8 w-8 text-solar mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900">
            {language === "en" ? "Our Installation Process" : "Nuestro Proceso de Instalación"}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: language === "en" ? "Energy Audit" : "Auditoría Energética", desc: language === "en" ? "Analyze your business energy consumption" : "Analizamos el consumo energético de tu negocio" },
              { step: "2", title: language === "en" ? "Custom Design" : "Diseño Personalizado", desc: language === "en" ? "Create ROI-focused solution for your business" : "Creamos soluciones enfocadas en ROI" },
              { step: "3", title: language === "en" ? "Professional Installation" : "Instalación Profesional", desc: language === "en" ? "Coordinated installation with minimal disruption" : "Instalación coordinada sin interrupciones" },
              { step: "4", title: language === "en" ? "Monitoring & Support" : "Monitoreo y Soporte", desc: language === "en" ? "Ongoing performance tracking and support" : "Seguimiento de rendimiento y soporte continuo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-solar text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900">
            {language === "en" ? "Business Benefits" : "Beneficios Empresariales"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <Check className="h-6 w-6 text-solar flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
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

      <Footer />
    </div>
  );
};

export default BusinessInstallation;
