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

const ResidentialInstallation = () => {
  const { language, t } = useI18n();

  const features = [
    {
      icon: Sun,
      title: language === "en" ? "Custom Design" : "Diseño Personalizado",
      desc: language === "en" 
        ? "Tailored solar solutions for your home's unique requirements" 
        : "Soluciones solares personalizadas para los requerimientos únicos de tu hogar",
    },
    {
      icon: Zap,
      title: language === "en" ? "Expert Installation" : "Instalación Experta",
      desc: language === "en"
        ? "Professional installation by certified technicians with years of experience"
        : "Instalación profesional por técnicos certificados con años de experiencia",
    },
    {
      icon: Shield,
      title: language === "en" ? "Warranty & Support" : "Garantía y Soporte",
      desc: language === "en"
        ? "Comprehensive warranty and 24/7 customer support"
        : "Garantía integral y apoyo al cliente 24/7",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Energy Savings" : "Ahorro de Energía",
      desc: language === "en"
        ? "Reduce your energy bills and increase your home's value"
        : "Reduce tus facturas de energía e incrementa el valor de tu hogar",
    },
  ];

  const benefits = [
    language === "en" ? "Reduced electricity bills" : "Facturas de electricidad reducidas",
    language === "en" ? "Increased home value" : "Valor aumentado de la casa",
    language === "en" ? "Environmental protection" : "Protección del medio ambiente",
    language === "en" ? "Government incentives" : "Incentivos gubernamentales",
    language === "en" ? "Energy independence" : "Independencia energética",
    language === "en" ? "Low maintenance" : "Bajo mantenimiento",
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
              {language === "en" ? "Residential Solar Installation" : "Instalación Residencial de Energía Solar"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Transform your home into an energy-efficient powerhouse with our professional solar installation services"
                : "Transforma tu hogar en una central de energía eficiente con nuestros servicios profesionales de instalación solar"}
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
            {language === "en" ? "Why Choose Our Service?" : "¿Por Qué Elegirnos?"}
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
              { step: "1", title: language === "en" ? "Site Evaluation" : "Evaluación del Sitio", desc: language === "en" ? "We assess your home's solar potential" : "Evaluamos el potencial solar de tu hogar" },
              { step: "2", title: language === "en" ? "Design & Quote" : "Diseño y Presupuesto", desc: language === "en" ? "Create a custom plan and provide pricing" : "Creamos un plan personalizado y proporcionamos precios" },
              { step: "3", title: language === "en" ? "Installation" : "Instalación", desc: language === "en" ? "Professional installation by our expert team" : "Instalación profesional por nuestro equipo experto" },
              { step: "4", title: language === "en" ? "Monitoring" : "Monitoreo", desc: language === "en" ? "Set up monitoring and ongoing support" : "Configurar monitoreo y apoyo continuo" },
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
            {language === "en" ? "Key Benefits" : "Beneficios Clave"}
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

export default ResidentialInstallation;
