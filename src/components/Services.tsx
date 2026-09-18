import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t("services.service.title"),
      description: t("services.service.desc"),
      image: "/uploads/service.jpg"
    },
    {
      title: t("services.production.title"),
      description: t("services.production.desc"),
      image: "/uploads/nyproduktion.jpg"
    },
    {
      title: t("services.rot.title"),
      description: t("services.rot.desc"),
      image: "/uploads/rot.jpg"
    },
    {
      title: t("services.solar.title"),
      description: t("services.solar.desc"),
      image: "/uploads/solceller.jpg"
    },
    {
      title: t("services.charging.title"),
      description: t("services.charging.desc"),
      image: "/uploads/laddbox.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase">
            <span className="text-gold-accent hover:text-foreground transition-colors duration-300 uppercase">{t("services.title")}</span>
          </h2>
          <div className="bg-charcoal p-6 md:p-8 rounded-tl-[3rem] rounded-br-[3rem] rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gold-accent hover:text-foreground transition-colors duration-300 mb-4 uppercase">
              {t("services.location")}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Cards - wider container on desktop (~15% larger) */}
      <div className="max-w-6xl lg:max-w-[1325px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-charcoal rounded-tl-[3rem] rounded-br-[3rem] rounded-2xl overflow-hidden"
            >
              <div className="h-60 lg:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
