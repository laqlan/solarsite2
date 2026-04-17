import { useState } from "react";
import Navbar from "../components/navbar";
import { useI18n } from "@/i18n/context";

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CheckIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

const Contact = () => {
  const { t, language } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(45 30% 97%)", color: "hsl(210 25% 18%)", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: "linear-gradient(160deg, hsl(205 78% 94%) 0%, hsl(45 80% 96%) 55%, hsl(44 100% 90%) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6" style={{ color: "hsl(210 25% 14%)" }}>
              {t("contactPage.hero.title")}{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(34 90% 42%), hsl(40 96% 52%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>contacto</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "hsl(210 20% 40%)" }}>
              {t("contactPage.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24" style={{ backgroundColor: "hsl(45 30% 97%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl p-8 md:p-10 space-y-6" style={{ backgroundColor: "white", boxShadow: "0 4px 24px hsl(210 25% 18% / 0.08)" }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(210 20% 38%)" }}>{t("contactPage.form.fullName")}</label>
                  <input 
                    required 
                    value={form.name} 
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{ backgroundColor: "hsl(45 50% 98%)", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                    placeholder={t("contactPage.form.fullNamePlaceholder")} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(210 20% 38%)" }}>{t("contactPage.form.email")}</label>
                  <input 
                    required 
                    type="email" 
                    value={form.email} 
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{ backgroundColor: "hsl(45 50% 98%)", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                    placeholder={t("contactPage.form.emailPlaceholder")} 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(210 20% 38%)" }}>{t("contactPage.form.phone")}</label>
                  <input 
                    value={form.phone} 
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{ backgroundColor: "hsl(45 50% 98%)", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                    placeholder={t("contactPage.form.phonePlaceholder")} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(210 20% 38%)" }}>{t("contactPage.form.service")}</label>
                  <select 
                    value={form.service} 
                    onChange={(e) => update("service", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all appearance-none"
                    style={{ backgroundColor: "hsl(45 50% 98%)", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}>
                    <option value="">{t("contactPage.form.servicePlaceholder")}</option>
                    <option value="paneles">{t("contactPage.form.servicePanels")}</option>
                    <option value="bateria">{t("contactPage.form.serviceBattery")}</option>
                    <option value="autoconsumo">{t("contactPage.form.serviceAutoconsumo")}</option>
                    <option value="mantenimiento">{t("contactPage.form.serviceMaintenance")}</option>
                    <option value="otro">{t("contactPage.form.serviceOther")}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(210 20% 38%)" }}>{t("contactPage.form.message")}</label>
                <textarea 
                  required 
                  rows={5} 
                  value={form.message} 
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                  style={{ backgroundColor: "hsl(45 50% 98%)", border: "1.5px solid hsl(45 20% 86%)", color: "hsl(210 25% 18%)" }}
                  onFocus={(e) => e.target.style.borderColor = "hsl(40 96% 50%)"}
                  onBlur={(e) => e.target.style.borderColor = "hsl(45 20% 86%)"}
                  placeholder={t("contactPage.form.messagePlaceholder")}
                />
              </div>
              
              <button type="submit" className="btn-solar w-full py-4 rounded-xl text-sm font-bold shadow-lg transition-transform hover:scale-[1.02]">
                {t("contactPage.form.submit")}
              </button>
            </form>

            {/* Sidebar */}
            <div className="space-y-6">
              {[
                { 
                  icon: PhoneIcon, 
                  title: t("contactPage.contactInfo.phone"), 
                  text: t("contactPage.contactInfo.phoneNumber"), 
                  sub: t("contactPage.contactInfo.phoneNote"),
                  hasWhatsapp: true 
                },
                { 
                  icon: MailIcon, 
                  title: t("contactPage.contactInfo.email"), 
                  text: t("contactPage.contactInfo.emailAddress"), 
                  sub: language === "es" ? "Respondemos en 24h" : "We respond within 24h" 
                },
                { 
                  icon: MapPinIcon, 
                  title: t("contactPage.contactInfo.address"), 
                  text: t("contactPage.contactInfo.addressValue"), 
                  sub: language === "es" ? "Con cita previa" : "By appointment" 
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "white", boxShadow: "0 4px 24px hsl(210 25% 18% / 0.08)" }}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(40 96% 92%)", color: "hsl(34 90% 38%)" }}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: "hsl(210 25% 18%)" }}>{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium" style={{ color: "hsl(40 96% 44%)" }}>{item.text}</p>
                        {item.hasWhatsapp && (
                          <a href="https://wa.me/34925518492" className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition-all" style={{ backgroundColor: "#25D366", color: "white" }}>
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.94l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.71-8.04c-.18-.09-1.08-.53-1.25-.59-.17-.07-.29-.11-.41.11-.12.22-.46.59-.56.71-.1.12-.21.13-.39.04-1.78-.89-2.79-1.28-3.68-2.79-.25-.43.25-.41.25-.41.65-1.06.73-1.7.48-2.04-.25-.35-.46-.45-.73-.47-.27-.02-.56 0-.85.01-.29.01-.76.29-1.14.55-1.58 1.14-1.26 3.32-.06 5.25 1.2 1.93 3.40 3.18 5.84 3.89.71.24 1.43.12 2.02-.3.37-.28.68-.76.76-1.29.06-.41-.13-.65-.33-.72z"/>
                            </svg>
                            WhatsApp
                          </a>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: "hsl(210 15% 58%)" }}>{item.sub}</p>
                    </div>
                  </div>
                </div>
              ))}

              {submitted && (
                <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "hsl(145 40% 90%)" }}>
                  <div className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "white" }}>
                    <CheckIcon className="h-8 w-8" style={{ color: "hsl(145 55% 38%)" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "hsl(145 55% 32%)" }}>
                    {t("contactPage.form.success")}
                  </h3>
                  <p className="text-sm" style={{ color: "hsl(145 55% 38%)" }}>
                    {language === "es" ? "Un asesor te contactará en las próximas 24 horas." : "An advisor will contact you within the next 24 hours."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "hsl(210 25% 14%)", color: "hsl(210 15% 70%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center border-t pt-6" style={{ borderColor: "hsl(210 20% 22%)" }}>
            <span>© 2025 SolTech Solar S.L. – Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
