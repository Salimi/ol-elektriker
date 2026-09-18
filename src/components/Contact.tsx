import { Phone, MapPin, Mail, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Phone: at least 10 digits (formatting characters allowed)
    const phoneInput = form.querySelector<HTMLInputElement>("#contact-phone");
    const phoneDigits = String(data.get("phone") || "").replace(/\D/g, "");
    if (phoneInput) {
      if (phoneDigits.length < 10) {
        phoneInput.setCustomValidity(t("contact.form.phoneInvalid"));
        form.reportValidity();
        return;
      }
      phoneInput.setCustomValidity("");
    }

    // Honeypot: bots that fill the invisible field are silently dropped
    if (data.get("_honey")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@olelektriker.se", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          _subject: "Meddelande från olelektriker.se",
          _template: "table",
          _captcha: "false"
        })
      });
      if (!res.ok) throw new Error("Request failed");
      navigate("/tack");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = "w-full bg-white/70 border border-gold-accent/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold-accent focus:outline-none transition-colors duration-300";
  const labelClasses = "block text-sm font-semibold uppercase tracking-wider text-gold-subtle mb-2";

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground hover:text-gold-subtle transition-colors duration-300 mb-6 uppercase">
            {t("contact.title")} <span className="text-gold-accent hover:text-foreground transition-colors duration-300 uppercase">{t("contact.highlight")}</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto whitespace-pre-line">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-light/60 backdrop-blur-sm p-8 md:p-12 rounded-tl-[3rem] rounded-br-[3rem] rounded-2xl border border-gold-accent/20 shadow-xl max-w-2xl mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className={labelClasses}>{t("contact.form.name")}</label>
                  <input id="contact-name" name="name" type="text" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>{t("contact.form.email")}</label>
                  <input id="contact-email" name="email" type="email" required className={inputClasses} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClasses}>{t("contact.form.phone")}</label>
                <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={inputClasses} onInput={(e) => e.currentTarget.setCustomValidity("")} />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClasses}>{t("contact.form.message")}</label>
                <textarea id="contact-message" name="message" required rows={5} className={`${inputClasses} resize-y`}></textarea>
              </div>
              {/* Honeypot - invisible to humans, catches bots */}
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-3 bg-gold-accent text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gold-subtle hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100"
                >
                  <Send size={18} />
                  {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
                </button>
                {status === "success" && (
                  <p className="text-gold-accent mt-4">{t("contact.form.success")}</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-4">{t("contact.form.error")}</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:info@olelektriker.se"
                aria-label="Skicka e-post"
                className="group flex items-center gap-4 bg-white/60 border border-gold-accent/20 rounded-2xl p-5 hover:border-gold-accent/60 hover:bg-charcoal-light transition-all duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 shrink-0 bg-gold-accent/10 border border-gold-accent/30 rounded-full text-gold-accent group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("contact.info.email")}</span>
                  <span className="block text-foreground font-medium group-hover:text-gold-subtle transition-colors duration-300">info@olelektriker.se</span>
                </span>
              </a>
              <a
                href="tel:+46701234567"
                aria-label="Ring oss"
                className="group flex items-center gap-4 bg-white/60 border border-gold-accent/20 rounded-2xl p-5 hover:border-gold-accent/60 hover:bg-charcoal-light transition-all duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 shrink-0 bg-gold-accent/10 border border-gold-accent/30 rounded-full text-gold-accent group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("contact.info.phone")}</span>
                  <span className="block text-foreground font-medium group-hover:text-gold-subtle transition-colors duration-300">070-123 45 67</span>
                </span>
              </a>
            </div>

            {/* Map - greater Stockholm area, no exact address */}
            <div className="rounded-tl-[2rem] rounded-br-[2rem] rounded-xl overflow-hidden border border-gold-accent/20 mt-10">
              <iframe
                title="Karta över Stockholm"
                src="https://maps.google.com/maps?ll=59.3293,18.0686&z=11&output=embed"
                className="w-full h-64 md:h-72 border-0 pointer-events-none"
                loading="lazy"
                tabIndex={-1}
              ></iframe>
            </div>
            <div className="flex items-center justify-center space-x-2 pt-6">
              <MapPin className="w-5 h-5 text-gold-accent" />
              <p className="text-foreground font-medium">{t("contact.location.value")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
