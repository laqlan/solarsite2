import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/context";

const Navbar = () => {
  const { language, setLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "rgba(255, 255, 255, 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgb(231, 227, 218)", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgb(250, 168, 5), rgb(255, 207, 77))" }}>
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"></path>
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'rgb(34, 46, 57)' }}>
              Pure<span style={{ color: "rgb(250, 168, 5)" }}>Grid</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link to="/" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "rgb(67, 89, 112)" }}>
              {t("home")}
            </Link>
            <Link to="/services" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "rgb(67, 89, 112)" }}>
              {t("services")}
            </Link>
            <Link to="/projects" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "rgb(67, 89, 112)" }}>
              {t("projects")}
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "rgb(67, 89, 112)" }}>
              {t("about")}
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "rgb(67, 89, 112)" }}>
              {t("contact")}
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: "hsl(45 50% 96%)" }}>
              <button
                onClick={() => setLanguage("en")}
                className="px-2.5 py-1 rounded text-xs font-bold transition-all"
                style={{
                  backgroundColor: language === "en" ? "rgb(250, 168, 5)" : "transparent",
                  color: language === "en" ? "white" : "rgb(67, 89, 112)",
                }}
              >
                EN
              </button>
              <span style={{ color: "rgb(200, 200, 200)" }}>|</span>
              <button
                onClick={() => setLanguage("es")}
                className="px-2.5 py-1 rounded text-xs font-bold transition-all"
                style={{
                  backgroundColor: language === "es" ? "rgb(250, 168, 5)" : "transparent",
                  color: language === "es" ? "white" : "rgb(67, 89, 112)",
                }}
              >
                ES
              </button>
            </div>
            <a
              href="https://wa.me/306939426509"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{ backgroundColor: "#25D366", color: "white", whiteSpace: "nowrap" }}
            >
              <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.94l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.71-8.04c-.18-.09-1.08-.53-1.25-.59-.17-.07-.29-.11-.41.11-.12.22-.46.59-.56.71-.1.12-.21.13-.39.04-1.78-.89-2.79-1.28-3.68-2.79-.25-.43.25-.41.25-.41.65-1.06.73-1.7.48-2.04-.25-.35-.46-.45-.73-.47-.27-.02-.56 0-.85.01-.29.01-.76.29-1.14.55-1.58 1.14-1.26 3.32-.06 5.25 1.2 1.93 3.40 3.18 5.84 3.89.71.24 1.43.12 2.02-.3.37-.28.68-.76.76-1.29.06-.41-.13-.65-.33-.72z"/>
              </svg>
              WhatsApp
            </a>
            <Link to="/contact" className="btn-solar px-4 sm:px-5 py-2 rounded-lg text-sm font-bold shadow transition-transform hover:scale-105 whitespace-nowrap">
              {t("homepage.hero.cta1")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors flex-shrink-0"
            style={{ backgroundColor: mobileMenuOpen ? "hsl(40 96% 92%)" : "transparent" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}>
            <nav className="flex flex-col gap-2 px-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "rgb(67, 89, 112)" }}
              >
                {t("home")}
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "rgb(67, 89, 112)" }}
              >
                {t("services")}
              </Link>
              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "rgb(67, 89, 112)" }}
              >
                {t("projects")}
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "rgb(67, 89, 112)" }}
              >
                {t("about")}
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "rgb(67, 89, 112)" }}
              >
                {t("contact")}
              </Link>
            </nav>

            {/* Mobile Language & CTA */}
            <div className="border-t border-gray-200 mt-4 pt-4 px-2 space-y-3">
              <div className="flex items-center gap-2 justify-center w-full px-3 py-2 rounded-lg" style={{ backgroundColor: "hsl(45 50% 96%)" }}>
                <button
                  onClick={() => setLanguage("en")}
                  className="px-3 py-1 rounded text-xs font-bold transition-all"
                  style={{
                    backgroundColor: language === "en" ? "rgb(250, 168, 5)" : "transparent",
                    color: language === "en" ? "white" : "rgb(67, 89, 112)",
                  }}
                >
                  EN
                </button>
                <span style={{ color: "rgb(200, 200, 200)" }}>|</span>
                <button
                  onClick={() => setLanguage("es")}
                  className="px-3 py-1 rounded text-xs font-bold transition-all"
                  style={{
                    backgroundColor: language === "es" ? "rgb(250, 168, 5)" : "transparent",
                    color: language === "es" ? "white" : "rgb(67, 89, 112)",
                  }}
                >
                  ES
                </button>
              </div>
              <a
                href="https://wa.me/306939426509"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.94l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.71-8.04c-.18-.09-1.08-.53-1.25-.59-.17-.07-.29-.11-.41.11-.12.22-.46.59-.56.71-.1.12-.21.13-.39.04-1.78-.89-2.79-1.28-3.68-2.79-.25-.43.25-.41.25-.41.65-1.06.73-1.7.48-2.04-.25-.35-.46-.45-.73-.47-.27-.02-.56 0-.85.01-.29.01-.76.29-1.14.55-1.58 1.14-1.26 3.32-.06 5.25 1.2 1.93 3.40 3.18 5.84 3.89.71.24 1.43.12 2.02-.3.37-.28.68-.76.76-1.29.06-.41-.13-.65-.33-.72z"/>
                </svg>
                {t("whatsapp")}
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-solar w-full px-5 py-2 rounded-lg text-sm font-bold shadow transition-transform text-center block"
              >
                {t("homepage.hero.cta1")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
