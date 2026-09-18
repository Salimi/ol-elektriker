import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (hash: string) => {
    setIsOpen(false);
    const id = hash.replace("#", "");
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      // Clean URL: "/" for home, "/#section" for others - never stacked hashes
      window.history.replaceState(null, "", id === "home" ? "/" : `/${hash}`);
    };
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for the homepage to render before scrolling
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

  const navItems = [{
    name: t("nav.home"),
    hash: "#home"
  },
  // {
  //   name: t("nav.about"),
  //   hash: "#about"
  // },
  {
    name: t("nav.services"),
    hash: "#services"
  }, {
    name: t("nav.contact"),
    hash: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => goToSection("#home")}
              className="flex flex-col text-left leading-tight text-gold-accent hover:text-foreground transition-colors duration-300"
            >
              <span className="text-2xl font-light">OL <span className="font-semibold">Elektriker</span></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <div className="flex items-baseline space-x-4">
                {navItems.map(item => <button key={item.name} onClick={() => goToSection(item.hash)} className="text-foreground hover:text-gold-accent transition-colors duration-300 px-3 py-2 text-sm font-medium uppercase">
                    {item.name}
                  </button>)}
                <Link to="/faq" className="text-foreground hover:text-gold-accent transition-colors duration-300 px-3 py-2 text-sm font-medium uppercase">
                  {t("nav.faq")}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md">
            {navItems.map(item => <button key={item.name} onClick={() => goToSection(item.hash)} className="text-foreground hover:text-gold-accent block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 uppercase">
                {item.name}
              </button>)}
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-foreground hover:text-gold-accent block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 uppercase">
              {t("nav.faq")}
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navigation;
