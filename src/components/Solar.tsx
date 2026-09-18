import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solar = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: "01",
      title: t("solar.step1.title"),
      description: t("solar.step1.desc")
    },
    {
      number: "02",
      title: t("solar.step2.title"),
      description: t("solar.step2.desc")
    },
    {
      number: "03",
      title: t("solar.step3.title"),
      description: t("solar.step3.desc")
    }
  ];

  return (
    <section id="solceller" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - asymmetric rounded corners */}
          <div className="rounded-tl-[4rem] md:rounded-tl-[6rem] rounded-br-[4rem] md:rounded-br-[6rem] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/uploads/solceller-fokus.jpg"
              alt="Solcellspaneler monterade på villatak"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
            />
          </div>

          {/* Text - centered on mobile, left-aligned on desktop */}
          <div className="space-y-8 text-center lg:text-left flex flex-col justify-center">
            <div>
              <p className="text-gold-accent text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">
                {t("solar.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase leading-tight">
                {t("solar.title")}
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("solar.pitch")}
            </p>

            {/* 3-step process - centered as a block on mobile, left-aligned rows */}
            <ol className="space-y-5 w-fit mx-auto lg:mx-0 text-left">
              {steps.map((step) => (
                <li key={step.number} className="flex items-start gap-4 lg:gap-5">
                  <span className="text-gold-accent font-light text-xl md:text-2xl leading-none pt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-foreground font-semibold uppercase tracking-wide text-sm md:text-base">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gold-accent text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gold-subtle transition-colors duration-300 group"
              >
                {t("solar.cta")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solar;
