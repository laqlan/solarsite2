import { motion } from "framer-motion";
import { Award, Users, Shield, Sun } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

const About = () => {
  const { t } = useI18n();

  const team = [
    { name: t("aboutPage.team.member1"), role: t("aboutPage.team.role1"), initials: "CM" },
    { name: t("aboutPage.team.member2"), role: t("aboutPage.team.role2"), initials: "SW" },
    { name: t("aboutPage.team.member3"), role: t("aboutPage.team.role3"), initials: "MT" },
    { name: t("aboutPage.team.member4"), role: t("aboutPage.team.role4"), initials: "LC" },
  ];

  const certs = [
    t("aboutPage.certs.cert1"),
    t("aboutPage.certs.cert2"),
    t("aboutPage.certs.cert3"),
    t("aboutPage.certs.cert4"),
  ];

  const stats = [
    { icon: Sun, label: t("aboutPage.stats.stat1"), desc: t("aboutPage.stats.stat1Desc") },
    { icon: Users, label: t("aboutPage.stats.stat2"), desc: t("aboutPage.stats.stat2Desc") },
    { icon: Shield, label: t("aboutPage.stats.stat3"), desc: t("aboutPage.stats.stat3Desc") },
    { icon: Award, label: t("aboutPage.stats.stat4"), desc: t("aboutPage.stats.stat4Desc") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary-foreground mb-4 sm:mb-6">{t("aboutPage.hero.title")}</h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80 max-w-2xl">
              {t("aboutPage.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-24 bg-background px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">{t("aboutPage.story.title")}</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>{t("aboutPage.story.p1")}</p>
                <p>{t("aboutPage.story.p2")}</p>
                <p>{t("aboutPage.story.p3")}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-muted rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                  <s.icon className="h-6 sm:h-8 w-6 sm:w-8 text-solar mx-auto mb-2 sm:mb-3" />
                  <p className="text-lg sm:text-2xl font-bold text-foreground">{s.label}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-24 bg-muted px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">{t("aboutPage.team.title")}</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">{t("aboutPage.team.subtitle")}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center hover:border-solar/40 transition-colors"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full gradient-solar flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary-foreground font-bold text-lg sm:text-xl">
                  {t.initials}
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">{t.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 sm:py-16 bg-background border-t border-border px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {certs.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-4 sm:h-5 w-4 sm:w-5 text-solar flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
