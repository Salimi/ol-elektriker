import { Fragment, ReactNode, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { joinSentenceStart } from "@/lib/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqQuestion = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  questions: FaqQuestion[];
};

export type FaqPageProps = {
  eyebrow: string;
  title: string;
  ingress: string;
  heroImage: {
    src: string;
    alt: string;
  };
  categories: FaqCategory[];
  seoTitle: string;
  seoDescription: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  ctaMailto: string;
  relatedLink?: {
    text: string;
    to: string;
    suffix?: string;
  };
};

const HashLink = ({
  hash,
  children,
}: {
  hash: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <a
      href={`/#${hash}`}
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }}
      className="text-gold-accent hover:underline transition-colors duration-300"
    >
      {children}
    </a>
  );
};

const linkPattern =
  /(kontakta oss|våra eltjänster|eltjänster)/i;

const renderRichText = (text: string): ReactNode[] => {
  return text.split(/(\*\*[^*]+\*\*)/g).map((segment, i) => {
    const isBold = segment.startsWith("**") && segment.endsWith("**");
    const content = isBold ? segment.slice(2, -2) : segment;
    const inner = content.split(linkPattern).map((piece, j) => {
      if (/^kontakta oss$/i.test(piece)) {
        return (
          <HashLink key={j} hash="contact">
            {piece}
          </HashLink>
        );
      }
      if (/^(våra )?eltjänster$/i.test(piece)) {
        return (
          <HashLink key={j} hash="services">
            {piece}
          </HashLink>
        );
      }
      return <Fragment key={j}>{piece}</Fragment>;
    });
    return isBold ? (
      <strong key={i} className="text-foreground font-semibold">
        {inner}
      </strong>
    ) : (
      <Fragment key={i}>{inner}</Fragment>
    );
  });
};

const FaqPage = ({
  eyebrow,
  title,
  ingress,
  heroImage,
  categories,
  seoTitle,
  seoDescription,
  ctaTitle,
  ctaText,
  ctaButtonText,
  ctaMailto,
  relatedLink,
}: FaqPageProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";

    document.title = seoTitle;
    meta?.setAttribute("content", seoDescription);

    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: categories.flatMap((category) =>
        category.questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer.replace(/\*\*/g, ""),
          },
        }))
      ),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
      script.remove();
    };
  }, [categories, seoTitle, seoDescription]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-gold-accent text-sm md:text-base font-light tracking-[0.3em] uppercase">
                {eyebrow}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {ingress}
              </p>
            </div>
            <div className="rounded-tl-[4rem] md:rounded-tl-[6rem] rounded-br-[4rem] md:rounded-br-[6rem] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-16 md:py-20 ${
            categoryIndex % 2 === 1 ? "bg-charcoal" : "bg-background"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold-accent text-sm font-light tracking-[0.3em] uppercase mb-3">
              Kategori {categoryIndex + 1}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase leading-tight mb-8">
              {category.title}
            </h2>

            {category.image && (
              <div className="rounded-tl-[3rem] rounded-br-[3rem] rounded-2xl overflow-hidden shadow-2xl mb-10">
                <img
                  src={category.image.src}
                  alt={category.image.alt}
                  className="w-full object-cover aspect-[21/9]"
                />
              </div>
            )}

            <div className="bg-charcoal-light/60 backdrop-blur-sm border border-gold-accent/20 rounded-tl-[3rem] rounded-br-[3rem] rounded-2xl shadow-xl px-6 md:px-10 py-4 md:py-6">
              <Accordion type="single" collapsible>
                {category.questions.map((item, questionIndex) => (
                  <AccordionItem
                    key={item.question}
                    value={`q-${categoryIndex}-${questionIndex}`}
                    className="border-gold-accent/20"
                  >
                    <AccordionTrigger className="text-left text-foreground text-base md:text-lg hover:text-gold-accent hover:no-underline transition-colors duration-300">
                      {joinSentenceStart(item.question)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {renderRichText(joinSentenceStart(item.answer))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-light/60 backdrop-blur-sm border border-gold-accent/20 rounded-tl-[4rem] rounded-br-[4rem] rounded-2xl shadow-xl p-10 md:p-16 text-center space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase leading-tight">
              {ctaTitle}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {joinSentenceStart(ctaText)}
            </p>
            <div>
              <a
                href={ctaMailto}
                className="inline-flex items-center gap-3 bg-gold-accent text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gold-subtle transition-colors duration-300 group"
              >
                {ctaButtonText}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
            {relatedLink && (
              <p className="text-sm text-muted-foreground">
                <Link
                  to={relatedLink.to}
                  className="text-gold-accent hover:underline transition-colors duration-300"
                >
                  {relatedLink.text}
                </Link>
                {relatedLink.suffix && <> {relatedLink.suffix}</>}
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqPage;
