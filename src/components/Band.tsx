import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Band = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden rounded-[3rem] md:rounded-[5rem]">
      <img
        src="/uploads/band.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          {t("band.statement")}
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 border border-gold-subtle text-gold-subtle px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gold-accent hover:text-white hover:border-gold-accent transition-colors duration-300 group"
        >
          {t("band.cta")}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Band;
