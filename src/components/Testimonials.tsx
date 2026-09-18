import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Anna Lindberg",
      text: "OL Elektriker installerade solceller på vår villa. Proffsigt bemötande, tydlig offert och en installation som var klar på utsatt tid. Anläggningen producerar precis som utlovat.",
      rating: 5
    },
    {
      name: "Erik Johansson",
      text: "Snabb hjälp när vi fick strömavbrott i halva huset. Elektrikern hittade felet i elcentralen direkt och åtgärdade det samma dag. Tryggt att veta vem man ska ringa.",
      rating: 5
    },
    {
      name: "Maria Gustafsson",
      text: "Vi anlitade OL Elektriker för elinstallationen i vår nybyggda villa. Allt från dragning till smart styrning utfördes noggrant, och slutbesiktningen gick utan anmärkning.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("testimonials.title")} <span className="text-gold-accent">{t("testimonials.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-charcoal p-8 rounded-lg hover:bg-charcoal-light transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-foreground font-semibold">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold-accent/10 to-gold-subtle/10 p-8 rounded-lg border border-gold-accent/20">
            <h3 className="text-2xl font-bold text-gold-accent mb-4">
              {t("testimonials.cta.title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t("testimonials.cta.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
