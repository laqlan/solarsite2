import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { language, setLanguage, t } = useI18n();

  return (
    <footer className="bg-muted border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'rgb(34, 46, 57)' }}>
              Pure<span style={{ color: "rgb(250, 168, 5)" }}>Grid</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#service-solar"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {language === "en" ? "Solar Panels" : "Paneles Solares"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-battery"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {language === "en" ? "Battery Storage" : "Almacenamiento"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-ev"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {language === "en" ? "EV Charging" : "Carga de VE"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-smart"
                  className="text-sm text-muted-foreground hover:text-solar transition-colors"
                >
                  {language === "en"
                    ? "Smart Energy"
                    : "Gestión Inteligente"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {language === "en" ? "Contact" : "Contacto"}
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Phone:" : "Teléfono:"}
                </p>
                <a
                  href="tel:+34925518492"
                  className="text-sm text-solar font-semibold hover:opacity-80"
                >
                  +34 925 518 492
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Email:" : "Email:"}
                </p>
                <a
                  href="mailto:info@soltech.es"
                  className="text-sm text-solar font-semibold hover:opacity-80"
                >
                  info@soltech.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-solar text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === "es"
                  ? "bg-solar text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            </div>
          </div>
          {/* Logo Section */}
          <div className="flex justify-center mt-8">
            <div className="relative w-24 h-24 rounded-full bg-solar flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo" className="h-20 w-20 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
