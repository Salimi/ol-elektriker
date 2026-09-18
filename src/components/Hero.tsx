import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
const Hero = () => {
  const {
    t
  } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="relative">
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/uploads/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center min-h-screen">
          {/* Left Side - Dramatic Typography */}
          <div className="space-y-4 text-center">
            {/* Massive Title - Mobile optimized */}
            <div className="space-y-4">
              <h1 className="text-[3.87rem] md:text-[4.84rem] lg:text-[5.8rem] xl:text-[8.6rem] font-bold text-white hover:text-gold-subtle tracking-tight leading-none transition-colors duration-300 uppercase">
                {t("hero.title")}
              </h1>
            </div>
            <div className="text-gold-subtle text-sm md:text-base lg:text-lg font-light tracking-wider uppercase mt-4">
              {t("hero.subtitle")}
            </div>
            <p className="max-w-2xl mx-auto text-white/80 text-sm md:text-base leading-relaxed px-2">
              {t("hero.intro")}
            </p>

            {/* Contact Icons - Elegant placement */}
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-6 mt-6">
                <a href="mailto:info@olelektriker.se" className="inline-flex items-center gap-2.5 bg-transparent border border-gold-subtle/60 text-gold-subtle px-7 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-gold-accent hover:text-white hover:border-gold-accent hover:scale-105 transition-all duration-300" aria-label="Send email">
                  <Mail size={16} strokeWidth={1.5} />
                  {t("hero.cta")}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Rotating circular text - decorative, desktop only */}
      <div className="hidden md:block absolute md:bottom-24 md:right-14 md:w-32 md:h-32 opacity-70 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "24s" }}>
          <defs>
            <path id="heroCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-gold-subtle uppercase" style={{ fontSize: "8px", letterSpacing: "2px" }} textLength="238" lengthAdjust="spacingAndGlyphs">
            <textPath href="#heroCirclePath">OL Elektriker · Stockholm · Elinstallation · </textPath>
          </text>
        </svg>
      </div>
    </section>
    {/* Scroll Indicator - long gold arrow, dips ~2cm into the next section when user scrolls down */}
    <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 z-10 transition-all duration-500 ${scrolled ? "-bottom-[75px]" : "bottom-0"}`}>
      <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-gold-subtle/50 to-gold-accent"></div>
      <ArrowDown size={16} strokeWidth={1.5} className="text-gold-accent -mt-px" />
    </div>
  </div>;
};
export default Hero;
