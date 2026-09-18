import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground hover:text-gold-subtle transition-colors duration-300 mb-8 uppercase">
            {t("about.title")} <span className="text-gold-accent hover:text-foreground transition-colors duration-300 uppercase font-bold tracking-tight">{t("about.highlight")}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Picture Section */}
          <div className="flex-shrink-0">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full bg-charcoal rounded-lg p-2">
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-charcoal-light shadow-lg transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 cursor-default">
                  <img
                    src="/uploads/about.jpg"
                    alt="Elektriker från OL Elektriker vid arbete"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
            <p>
              {t("about.text1")}
            </p>

            <p>
              {t("about.text2")}
            </p>

            <p>
              {t("about.text3a")}
            </p>

            <p>
              {t("about.text3b")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
