import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

type Category = "all" | "residential" | "commercial";

const projects = [
  { title: "Modern Villa", location: "Costa del Sol", size: "8.5 kW", savings: "78%", panels: 18, category: "residential" as const, image: "/images/projects/project-1.png" },
  { title: "Countryside Finca", location: "Andalucía", size: "12 kW", savings: "85%", panels: 26, category: "residential" as const, image: "/images/projects/project-2.png" },
  { title: "Beachfront Apartment", location: "Valencia", size: "4.5 kW", savings: "65%", panels: 10, category: "residential" as const, image: "/images/projects/project-3.png" },
  { title: "Office Complex", location: "Madrid", size: "45 kW", savings: "72%", panels: 96, category: "commercial" as const, image: "/images/projects/project-4.png" },
  { title: "Restaurant Chain", location: "Barcelona", size: "22 kW", savings: "68%", panels: 48, category: "commercial" as const, image: "/images/projects/project-5.png" },
  { title: "Townhouse", location: "Marbella", size: "6 kW", savings: "74%", panels: 13, category: "residential" as const, image: "/images/projects/project-6.png" },
  { title: "Warehouse", location: "Málaga", size: "60 kW", savings: "80%", panels: 130, category: "commercial" as const, image: "/images/projects/project-7.png" },
  { title: "Penthouse", location: "Alicante", size: "5.4 kW", savings: "70%", panels: 12, category: "residential" as const, image: "/images/projects/project-8.png" },
];

const Projects = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Category>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters: { label: string; value: Category }[] = [
    { label: t("projectsPage.filters.all"), value: "all" },
    { label: t("projectsPage.filters.residential"), value: "residential" },
    { label: t("projectsPage.filters.commercial"), value: "commercial" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary-foreground mb-4 sm:mb-6">{t("projectsPage.hero.title")}</h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80 max-w-2xl">
              {t("projectsPage.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 sm:py-24 bg-background px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  filter === f.value
                    ? "gradient-solar text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-solar/40 hover:shadow-lg hover:shadow-solar/5 transition-all group"
              >
                <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mb-4">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" /> {p.location}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted rounded-lg p-2 text-center">
                      <p className="text-xs sm:text-sm font-bold text-foreground">{p.size}</p>
                      <p className="text-[10px] text-muted-foreground">{t("projectsPage.labels.system")}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-2 text-center">
                      <p className="text-xs sm:text-sm font-bold text-solar">{p.savings}</p>
                      <p className="text-[10px] text-muted-foreground">{t("projectsPage.labels.savings")}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-2 text-center">
                      <p className="text-xs sm:text-sm font-bold text-foreground">{p.panels}</p>
                      <p className="text-[10px] text-muted-foreground">{t("projectsPage.labels.panels")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
