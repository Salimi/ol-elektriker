import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  language: 'sv';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, string> = {
  // Navigation
  'nav.home': 'Hem',
  'nav.about': 'Om Oss',
  'nav.services': 'Tjänster',
  'nav.contact': 'Kontakt',
  'nav.faq': 'Vanliga frågor',

  // Hero
  'hero.title': 'OL Elektriker',
  'hero.subtitle': 'Auktoriserad elinstallatör i Stockholm',
  'hero.intro': 'Din elektriker för hem, nybyggnation och solenergi. Vi hjälper dig med allt från service och felsökning till kompletta installationer.',
  'hero.cta': 'Kontakta Oss',

  // About
  'about.title': 'Om',
  'about.highlight': 'OL Elektriker',
  'about.text1': 'Vi på OL Elektriker hjälper dig med alla typer av elarbeten i Stockholm och närområdet. Som auktoriserad elinstallatör tar vi hand om allt från små servicejobb till kompletta installationer i bostäder, lokaler och allmänna utrymmen — alltid enligt gällande elsäkerhetsregler och med dokumenterat arbete. Hos oss får du en personlig kontakt och ett resultat att känna dig trygg med.',
  'about.text2': 'Vi arbetar med service och felsökning, kompletta elinstallationer i nyproduktion för Fiskarhedenvillan och privata husbyggare, ROT-arbeten, solcellsanläggningar och laddboxinstallationer. Oavsett om det gäller ett litet elfel eller en hel villainstallation får du samma noggrannhet och samma tydliga kommunikation.',
  'about.text3a': 'Det som driver oss är trygga, säkra och energismarta installationer som håller över tid. Hos oss får du ett fast pris, en tydlig tidplan och ett arbete som utförs av behöriga elektriker — med garanti på både arbete och material.',
  'about.text3b': 'Vi ser fram emot att hjälpa dig med ditt nästa elprojekt!',
  'about.years': 'År av',
  'about.experience': 'Erfarenhet',
  'about.clients': 'Nöjda',
  'about.happy': 'Kunder',
  'about.tagline': 'Säkra installationer med garanti',

  // Services
  'services.title': 'Tjänster',
  'services.subtitle': 'Vi utför elarbeten i hela Stockholm och närområdet — för privatpersoner, företag och byggare. Alla arbeten utförs av behöriga elektriker enligt branschens säkerhetsregler.',
  'services.service.title': 'Service',
  'services.service.desc': 'Felsökning och reparation av elfel i bostäder och allmänna utrymmen. Vi hittar felet snabbt och åtgärdar det säkert.',
  'services.production.title': 'Nyproduktion',
  'services.production.desc': 'Kompletta elinstallationer inom Fiskarhedenvillan och för privata husbyggare — främst villor samt bostadshus.',
  'services.rot.title': 'ROT-arbeten',
  'services.rot.desc': 'Små som stora renoverings- och tillbyggnadsinstallationer inom bostäder och lokaler — med ROT-avdrag där det är möjligt.',
  'services.solar.title': 'Solceller',
  'services.solar.desc': 'Komplett solcellsinstallation med växelriktare och minst 2 års garanti. Vi hjälper dig från kalkyl till driftsatt anläggning.',
  'services.charging.title': 'Laddboxinstallationer',
  'services.charging.desc': 'Installationer av laddboxar med garanti — för villa, bostadsrättsförening och företag.',
  'services.location': 'Baserade i Stockholm',
  'services.partnership': 'SAMARBETE',

  // Solar section (featured service)
  'solar.eyebrow': 'Solceller',
  'solar.title': 'Komplett solcellsinstallation',
  'solar.pitch': 'Producera din egen el och sänk dina energikostnader. Vi installerar kompletta solcellsanläggningar med växelriktare för villor och bostadshus — anpassade efter ditt tak, din förbrukning och din budget. Alla installationer lämnas med minst 2 års garanti.',
  'solar.step1.title': 'Konsultation',
  'solar.step1.desc': 'Vi gör en kostnadsfri genomgång av ditt tak och din elförbrukning och tar fram en kalkyl.',
  'solar.step2.title': 'Installation',
  'solar.step2.desc': 'Behöriga elektriker monterar paneler, växelriktare och elanslutning — snyggt och säkert.',
  'solar.step3.title': 'Garanti & driftsättning',
  'solar.step3.desc': 'Vi driftsätter anläggningen, går igenom uppföljningen och lämnar minst 2 års garanti.',
  'solar.cta': 'Begär offert',

  // Band section
  'band.statement': 'El för hem, nybyggnation och solenergi. Från ett uttag till en hel anläggning.',
  'band.cta': 'Kontakta oss',

  // Portfolio
  'portfolio.title': 'Projekt',
  'portfolio.subtitle': 'Ett urval av installationer vi genomfört — från villor och bostadshus till solceller och laddboxar.',
  'portfolio.item1.title': 'Nyproduktion villa',
  'portfolio.item1.desc': 'Komplett elinstallation i nybyggd villa',
  'portfolio.item2.title': 'Solcellsanläggning',
  'portfolio.item2.desc': 'Takmonterade solceller med växelriktare',
  'portfolio.item3.title': 'Laddboxinstallation',
  'portfolio.item3.desc': 'Laddbox för elbil med garanti',
  'portfolio.stat1': 'Genomförda',
  'portfolio.stat1.label': 'Projekt',
  'portfolio.stat2': 'Installerade',
  'portfolio.stat2.label': 'Solcellsanläggningar',
  'portfolio.stat3': 'Nöjda',
  'portfolio.stat3.label': 'Kunder',

  // Testimonials
  'testimonials.title': 'Kund',
  'testimonials.highlight': 'Omdömen',
  'testimonials.subtitle': 'Hör vad våra kunder säger om arbetet vi utfört — från servicebesök till kompletta installationer.',
  'testimonials.cta.title': 'Redo att sätta igång?',
  'testimonials.cta.desc': 'Hör av dig för en kostnadsfri offert — vi återkommer snabbt med ett konkret förslag.',

  // Contact
  'contact.title': 'Kontakta',
  'contact.highlight': 'Oss',
  'contact.subtitle': 'Hör av dig så diskuterar vi ditt nästa elprojekt.',
  'contact.form.name': 'Namn',
  'contact.form.email': 'E-post',
  'contact.form.subject': 'Ämne',
  'contact.form.message': 'Meddelande',
  'contact.form.submit': 'Skicka Meddelande',
  'contact.form.company': 'Företag',
  'contact.form.sending': 'Skickar…',
  'contact.form.success': 'Tack för ditt meddelande, vi återkommer så snart vi kan.',
  'contact.form.error': 'Något gick fel, försök igen eller mejla info@olelektriker.se direkt.',
  'contact.info.email': 'E-post',
  'contact.info.phone': 'Telefon',
  'contact.info.location': 'Plats:',
  'contact.info.social': 'Sociala Medier',
  'contact.whatsapp.message': 'Hej, jag är intresserad av en konsultation. Mvh',
  'contact.info.website': 'Webbplats',
  'contact.social.title': 'Följ Vårt Arbete',
  'contact.social.desc': 'Håll dig uppdaterad med våra senaste projekt.',
  'contact.location.value': 'Stockholm och närområdet',

  // Footer
  'footer.tagline': 'Auktoriserad elinstallatör | Stockholm och närområdet',
  'footer.copyright': '© 2026 OL Elektriker. Alla rättigheter förbehållna.',

  // Thank you page
  'thankyou.title': 'Tack för din förfrågan!',
  'thankyou.text': 'Vi har tagit emot ditt meddelande och återkommer så snart vi kan.',
  'thankyou.back': 'Tillbaka till startsidan'
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'sv', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
