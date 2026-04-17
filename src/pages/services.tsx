import { motion } from "framer-motion";
import { Sun, Battery, Car, Cpu, Leaf, Wrench, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

const Services = () => {
  const { t } = useI18n();

  const services = [
    {
      icon: Sun,
      id: "service-solar",
      titleKey: "servicesPage.detail1.title",
      descKey: "servicesPage.detail1.desc",
      benefitKeys: ["servicesPage.detail1.benefit1", "servicesPage.detail1.benefit2", "servicesPage.detail1.benefit3", "servicesPage.detail1.benefit4"],
      image: "/images/services/solar.png",
    },
    {
      icon: Battery,
      id: "service-battery",
      titleKey: "servicesPage.detail2.title",
      descKey: "servicesPage.detail2.desc",
      benefitKeys: ["servicesPage.detail2.benefit1", "servicesPage.detail2.benefit2", "servicesPage.detail2.benefit3", "servicesPage.detail2.benefit4"],
      image: "/images/services/battery.png",
    },
    {
      icon: Leaf,
      id: "service-group-consumption",
      titleKey: "servicesPage.detail5.title",
      descKey: "servicesPage.detail5.desc",
      benefitKeys: ["servicesPage.detail5.benefit1", "servicesPage.detail5.benefit2", "servicesPage.detail5.benefit3", "servicesPage.detail5.benefit4"],
      image: "/images/services/solar.png",
    },
    {
      icon: Cpu,
      id: "service-smart",
      titleKey: "servicesPage.detail4.title",
      descKey: "servicesPage.detail4.desc",
      benefitKeys: ["servicesPage.detail4.benefit1", "servicesPage.detail4.benefit2", "servicesPage.detail4.benefit3", "servicesPage.detail4.benefit4"],
      image: "/images/services/smart.png",
    },
    {
      icon: Car,
      id: "service-ev",
      titleKey: "servicesPage.detail3.title",
      descKey: "servicesPage.detail3.desc",
      benefitKeys: ["servicesPage.detail3.benefit1", "servicesPage.detail3.benefit2", "servicesPage.detail3.benefit3", "servicesPage.detail3.benefit4"],
      image: "/images/services/ev.png",
    },
    {
      icon: Wrench,
      id: "service-maintenance",
      titleKey: "servicesPage.detail6.title",
      descKey: "servicesPage.detail6.desc",
      benefitKeys: ["servicesPage.detail6.benefit1", "servicesPage.detail6.benefit2", "servicesPage.detail6.benefit3", "servicesPage.detail6.benefit4"],
      image: "/images/services/battery.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary-foreground mb-4 sm:mb-6">{t("servicesPage.hero.title")}</h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80 max-w-2xl">
              {t("servicesPage.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 sm:py-24 bg-background px-4">
        <div className="container mx-auto max-w-5xl space-y-16 sm:space-y-20">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center scroll-mt-16 ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className={!isEven ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl gradient-solar flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">{t(s.titleKey)}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">{t(s.descKey)}</p>
                  <ul className="space-y-3">
                    {s.benefitKeys.map((bKey, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground">
                        <Check className="h-5 w-5 text-solar flex-shrink-0" />
                        <span className="text-sm">{t(bKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden ${!isEven ? "md:order-1" : ""}`}>
                  <img src={s.image} alt={t(s.titleKey)} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 gradient-hero px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">{t("servicesPage.cta.title")}</h2>
          <p className="text-secondary-foreground/70 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">{t("servicesPage.cta.subtitle")}</p>
          <Link
            to="/contact"
            className="inline-block gradient-solar px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-primary-foreground hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            {t("servicesPage.cta.button")}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
