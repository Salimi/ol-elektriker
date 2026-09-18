import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const {
    t
  } = useLanguage();
  return <footer className="bg-background border-t border-border py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-accent">
            {t("footer.tagline")}
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto"></div>

          <Link to="/faq" className="inline-block text-sm text-muted-foreground hover:text-gold-accent transition-colors duration-300">
            Vanliga frågor om el, solceller & laddboxar
          </Link>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground">
              {t("footer.copyright")}
            </p>
            <p className="text-xs text-muted-foreground/70">
              Org.nr: 559000-0000
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
