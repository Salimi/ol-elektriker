import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  const portfolioItems = [
    {
      image: "/uploads/nyproduktion.jpg",
      title: t("portfolio.item1.title"),
      description: t("portfolio.item1.desc")
    },
    {
      image: "/uploads/solceller.jpg",
      title: t("portfolio.item2.title"),
      description: t("portfolio.item2.desc")
    },
    {
      image: "/uploads/laddbox.jpg",
      title: t("portfolio.item3.title"),
      description: t("portfolio.item3.desc")
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gold-accent">{t("portfolio.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-charcoal-light hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gold-accent mb-2">200+</div>
              <div className="text-muted-foreground">{t("portfolio.stat1")} {t("portfolio.stat1.label")}</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gold-accent mb-2">50+</div>
              <div className="text-muted-foreground">{t("portfolio.stat2")} {t("portfolio.stat2.label")}</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gold-accent mb-2">300+</div>
              <div className="text-muted-foreground">{t("portfolio.stat3")} {t("portfolio.stat3.label")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
