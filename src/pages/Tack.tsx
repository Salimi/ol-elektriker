import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Tack = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t("thankyou.title") + " | OL Elektriker";

    // Keep this page out of search results — it exists only as a
    // conversion confirmation for quote requests
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, [t]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-xl space-y-8 py-24">
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-gold-accent" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground uppercase">
          {t("thankyou.title")}
        </h1>

        <div className="w-24 h-0.5 bg-gradient-to-r from-gold-accent to-gold-subtle mx-auto"></div>

        <p className="text-base md:text-lg text-muted-foreground whitespace-pre-line">
          {t("thankyou.text")}
        </p>

        <Link
          to="/"
          className="inline-block bg-gold-accent hover:bg-gold-subtle text-background font-semibold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
        >
          {t("thankyou.back")}
        </Link>
      </div>
    </div>
  );
};

export default Tack;
