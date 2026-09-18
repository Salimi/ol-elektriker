import FaqPage, { FaqCategory } from "@/components/FaqPage";

const faqCategories: FaqCategory[] = [
  {
    title: "Service & felsökning",
    questions: [
      {
        question: "1. Vilken typ av elservice utför ni?",
        answer:
          "Vi utför felsökning och reparation av elfel i bostäder och allmänna utrymmen — allt från strömavbrott, utlösande jordfelsbrytare och trasiga uttag till fel på belysning, spisar och elcentraler. Vi kommer hem till dig, lokaliserar felet med mätinstrument och åtgärdar det på ett säkert sätt. **Kontakta oss** så bokar vi ett servicebesök.",
      },
      {
        question: "2. Jordfelsbrytaren löser ut hela tiden — vad beror det på?",
        answer:
          "En jordfelsbrytare som löser ut är nästan alltid ett tecken på ett jordfel någonstans i installationen — vanliga syndare är utomhusbelysning, värmekablar, spisar, tvättmaskiner och fuktiga kopplingsdoser. Felet kan vara farligt och ska inte ignoreras: jordfelsbrytaren gör precis det den ska, nämligen skydda dig. En behörig elektriker kan mäta sig fram till vilken grupp eller apparat som orsakar felet och åtgärda det. **Kontakta oss** om din jordfelsbrytare löser återkommande.",
      },
      {
        question: "3. Kan jag byta uttag och strömbrytare själv?",
        answer:
          "Nej — i Sverige är det bara behöriga elektriker som får byta fast monterade uttag, strömbrytare och dimrar. Som privatperson får du utföra en mycket begränsad uppsättning arbeten, till exempel byta en stickpropp eller skarvsladd, men arbeten i den fasta installationen kräver behörighet enligt elsäkerhetslagen. Att göra jobbet själv kan dessutom innebära att försäkringen inte gäller vid en brand. Anlita alltid en auktoriserad elinstallatör — det kostar mindre än man tror och är alltid säkert.",
      },
      {
        question: "4. Vad gör jag vid strömavbrott?",
        answer:
          "Kontrollera först om det är du eller nätägaren som har felet: är hela området mörkt är det troligen ett nätavbrott — anmäl det till din nätägare. Är det bara ditt hem som saknar ström, titta i elcentralen: har en säkring eller jordfelsbrytare löst ut? Försök återställa den en gång. Löser den direkt igen finns ett fel i installationen och du ska inte fortsätta försöka — då är det dags att ringa en elektriker. Känn dig aldrig osäker: **kontakta oss** så hjälper vi dig att felsöka.",
      },
    ],
  },
  {
    title: "Nyproduktion & ROT",
    image: {
      src: "/uploads/nyproduktion.jpg",
      alt: "Nybyggd villa med komplett elinstallation",
    },
    questions: [
      {
        question: "5. Gör ni elinstallationer i nybyggda hus?",
        answer:
          "Ja — nyproduktion är en av våra kärntjänster. Vi utför kompletta elinstallationer inom Fiskarhedenvillan och för privata husbyggare, främst villor samt bostadshus. Vi tar ansvar för hela elentreprenaden: från inkoppling och elcentral till dragning, uttag, belysning, smart styrning och slutbesiktning. **Kontakta oss** gärna redan på planeringsstadiet — tidiga beslut om el gör bygget både enklare och billigare.",
      },
      {
        question: "6. Vad ingår i en komplett elinstallation för en villa?",
        answer:
          "En komplett installation omfattar normalt mätarskåp och servis, elcentral med säkringar och jordfelsbrytare, fast ledningsdragning till alla rum, uttag, strömbrytare och dimrar, belysningspunkter inom- och utomhus, samt förberedelser för till exempel laddbox, solceller och smart hem-styrning. Vi anpassar upplägget efter husets planlösning och dina önskemål, och dokumenterar allt inför slutbesiktningen.",
      },
      {
        question: "7. Vad räknas som ROT-arbete inom el?",
        answer:
          "ROT-arbeten är renoverings- och tillbyggnadsinstallationer i bostäder och lokaler — allt från att byta elcentral och dra om gamla ledningar till att installera nya uttag, belysning och laddbox i samband med en renovering. Små som stora projekt är välkomna. Arbetskostnaden för elarbeten i din bostad är normalt skattereduktionsberättigad via ROT-avdraget, och vi hjälper dig med underlaget till Skatteverket. Läs mer om våra eltjänster.",
      },
      {
        question: "8. Måste man byta elcentral när man renoverar?",
        answer:
          "Inte alltid — men ofta är det klokt. Äldre centraler med porslinssäkringar saknar ofta jordfelsbrytare på alla grupper och har begränsad kapacitet för dagens förbrukare (induktionshäll, laddbox, värmepump). Vid större renoveringar eller tillbyggnader krävs dessutom ofta fler grupper än den gamla centralen rymmer. Vi gör alltid en genomgång av din befintliga central och rekommenderar bara byte när det verkligen behövs — med fast pris i förväg.",
      },
    ],
  },
  {
    title: "Solceller",
    image: {
      src: "/uploads/solceller.jpg",
      alt: "Solcellspaneler på villatak",
    },
    questions: [
      {
        question: "9. Vad ingår i era solcellsinstallationer?",
        answer:
          "Vi levererar kompletta solcellsanläggningar: paneler, växelriktare, montagesystem, all elanslutning samt driftsättning och anmälan till nätägaren. Installationen anpassas efter ditt tak, din elförbrukning och din budget, och lämnas alltid med **minst 2 års garanti**. Vi hjälper dig även med kalkyl över produktion och återbetalningstid. **Kontakta oss** för en kostnadsfri konsultation.",
      },
      {
        question: "10. Lönar sig solceller i Sverige?",
        answer:
          "För de flesta villor — ja. En rätt dimensionerad anläggning täcker ofta en stor del av hushållets årsförbrukning, och överskottselen säljer du tillbaka till elnätet. Lönsamheten beror på din förbrukning, takets läge och rådande elpriser, men återbetalningstider på 8–15 år är vanliga för en anläggning som håller 25–30 år. Dessutom finns skattereduktion för grön teknik som sänker investeringskostnaden direkt på fakturan. Vi räknar på just ditt hus innan du bestämmer dig.",
      },
      {
        question: "11. Behövs bygglov för solceller?",
        answer:
          "I de flesta fall inte — solcellspaneler som följer takets vinkel är normalt bygglovsbefriade. Undantag finns för byggnader inom områden med riksintresse eller kulturhistoriskt värde, samt om panelerna reser sig över takplanet. Vi kontrollerar alltid vad som gäller för din fastighet och hjälper till med eventuell anmälan eller ansökan, så att du slipper pappersarbetet.",
      },
      {
        question: "12. Vad händer med solelen när jag inte använder den?",
        answer:
          "När anläggningen producerar mer än du förbrukar matas överskottet automatiskt ut på elnätet och säljs till ditt elhandelsbolag — du får ersättning per såld kilowattimme plus skattereduktion för den el du matar in. Vill du lagra energin istället kan anläggningen kompletteras med ett batteri. Vi förklarar alternativen och hjälper dig välja upplägg utifrån din förbrukningsprofil.",
      },
    ],
  },
  {
    title: "Laddboxar",
    image: {
      src: "/uploads/laddbox.jpg",
      alt: "Laddbox för elbil monterad på garagevägg",
    },
    questions: [
      {
        question: "13. Vad kostar en laddboxinstallation?",
        answer:
          "Priset beror på laddboxens effekt, avståndet till elcentralen och eventuella förberedelser i installationen. För en normal villainstallation ligger totalkostnaden ofta mellan 12 000 och 20 000 kronor inklusive box och installation — och med skattereduktionen för grön teknik (50 % på arbete och material) halveras i princip kostnaden. Vi lämnar alltid fast pris efter en kort genomgång, och alla installationer lämnas med garanti. **Kontakta oss** för offert.",
      },
      {
        question: "14. Vilken laddbox ska jag välja?",
        answer:
          "För de flesta elbilar räcker en laddbox på 11 kW — det laddar en normal batteripack över natten. Viktigare än maxeffekten är smarta funktioner: lastbalansering som skyddar huvudsäkringen, schemaläggning mot billiga nattimmar och app-styrning. Har du solceller kan vissa boxar dessutom ladda på solelsöverskott. Vi hjälper dig välja en box som passar din bil, din elcentral och dina vanor — och som klarar morgondagens behov.",
      },
      {
        question: "15. Kan bostadsrättsföreningen installera laddboxar?",
        answer:
          "Ja — vi installerar laddlösningar för bostadsrättsföreningar och företag, från enstaka platser till kompletta laddsystem med lastbalansering och debitering per användare. Nyckeln är en genomtänkt infrastruktur: rätt förberedelse i elcentralen gör det enkelt att bygga ut fler platser allt eftersom behovet växer. Vi hjälper föreningen hela vägen, från förstudie och stämmobeslut till färdig anläggning.",
      },
    ],
  },
  {
    title: "Priser, garanti & säkerhet",
    questions: [
      {
        question: "16. Är ni auktoriserade elinstallatörer?",
        answer:
          "Ja — OL Elektriker är auktoriserad elinstallatör och alla arbeten utförs av behöriga elektriker enligt Elsäkerhetsverkets föreskrifter och branschreglerna för elinstallationsarbete. Det innebär att installationerna är försäkringsgiltiga, dokumenterade och utförda med rätt material. Anlita aldrig obehörig hjälp med elen: felaktigt utförda elarbeten är en av de vanligaste orsakerna till bostadsbränder.",
      },
      {
        question: "17. Lämnar ni garanti på arbetet?",
        answer:
          "Ja. Vi lämnar garanti på alla våra installationer — på solcellsanläggningar och laddboxinstallationer lämnas minst 2 års garanti, därutöver gäller tillverkarnas materialgarantier (solcellspaneler har ofta 25 års produktgaranti). Skulle något inte fungera som det ska återkommer vi och åtgärdar det. Tryggheten i ett garantierat arbete är en stor del av det du betalar för när du anlitar en auktoriserad installatör.",
      },
      {
        question: "18. Får jag ROT-avdrag eller skattereduktion för grön teknik?",
        answer:
          "I många fall, ja. Elarbeten i din bostad — till exempel renovering av elinstallationen eller installation av laddbox — är normalt berättigade till **ROT-avdrag** (30 % på arbetskostnaden). Installation av solceller, laddbox och energilager omfattas dessutom av **skattereduktionen för grön teknik** (50 % på arbete och material för laddbox, 20 % för solceller). Vi drar avdraget direkt på fakturan och sköter ansökan till Skatteverket — du behöver inte göra något.",
      },
      {
        question: "19. Hur snabbt kan ni komma?",
        answer:
          "Vid akuta elfel prioriterar vi alltid snabb återkoppling — hör av dig så berättar vi direkt när närmaste lediga tid finns. För planerade arbeten som nyproduktion, solceller och större ROT-projekt bokar vi in efter en kostnadsfri genomgång och offert. Vi håller det vi lovar: fast pris, tydlig tidplan och elektriker som kommer när vi sagt. **Skicka en förfrågan så återkommer vi inom 1–2 arbetsdagar.**",
      },
      {
        question: "20. Varför ska jag välja OL Elektriker?",
        answer:
          "Tre skäl: **behörighet, helhet och garanti.** Behörighet — alla arbeten utförs av auktoriserade elektriker enligt elsäkerhetsreglerna, vilket gör installationen säker och försäkringsgiltig. Helhet — vi tar hand om hela kedjan, från felsökning och service till nyproduktion, solceller och laddboxar, så du har en enda kontakt för allt som rör el. Garanti — våra solcells- och laddboxinstallationer lämnas med minst 2 års garanti, och vi står bakom varje installation vi gör. **Kontakta oss — vi återkommer inom 1–2 arbetsdagar.**",
      },
    ],
  },
];

const FAQ = () => (
  <FaqPage
    eyebrow="Vanliga frågor"
    title="Elguide — svar på de vanligaste frågorna om el, solceller och laddboxar"
    ingress="Allt om service och felsökning, nyproduktion, ROT-arbeten, solceller och laddboxinstallationer — plus svar om priser, garanti och skattereduktion. Samlat i en guide från våra elektriker."
    heroImage={{
      src: "/uploads/faq-hero.jpg",
      alt: "Elektriker som arbetar i en elcentral",
    }}
    categories={faqCategories}
    seoTitle="Elguide: Vanliga frågor om el, solceller & laddboxar | OL Elektriker"
    seoDescription="Svar på vanliga frågor om elservice, felsökning, nyproduktion, ROT-arbeten, solceller och laddboxinstallationer — samt priser, garanti och skattereduktion. OL Elektriker i Stockholm."
    ctaTitle="Hittade du inte svaret?"
    ctaText="Vi hjälper privatpersoner och företag i Stockholm och närområdet."
    ctaButtonText="Skicka förfrågan"
    ctaMailto="mailto:info@olelektriker.se?subject=Fråga om elarbete"
  />
);

export default FAQ;
