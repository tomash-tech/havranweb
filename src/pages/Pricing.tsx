import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import Header from '../components/Header';

const webPlans = [
  {
    name: "Základní web",
    price: "4 000 – 6 000 Kč",
    desc: "Ideální pro živnostníky a malé firmy které potřebují rychle získat online přítomnost.",
    features: [
      "Úvod, služby, kontakt",
      "Google mapa",
      "Přizpůsobivý design",
      "Rychlé načítání",
      "Základní SEO optimalizace",
    ],
    cta: "Mám zájem",
    highlight: false,
  },
  {
    name: "Firemní web",
    price: "6 000 – 10 000 Kč",
    desc: "Pro firmy které potřebují více podstránek a pokročilejší funkce.",
    features: [
      "Více podstránek",
      "Propracovanější design",
      "Kontaktní formulář",
      "Napojení na Google tabulky",
      "Základní rezervační systém",
      "Základní SEO optimalizace",
    ],
    cta: "Mám zájem",
    highlight: true,
  },
  {
    name: "Web na míru",
    price: "10 000 Kč+",
    desc: "Komplexní projekty s pokročilými funkcemi a integracemi na míru.",
    features: [
      "Rezervační systém",
      "Podpora více jazyků",
      "Propojení s externími systémy",
      "Funkce na míru",
      "Pokročilé SEO",
    ],
    cta: "Mám zájem",
    highlight: false,
  },
];

const shopPlans = [
  {
    name: "Prodejní formulář",
    price: "~2 000 Kč",
    desc: "Jednoduchý prodejní formulář přes SimpleShop nebo podobnou platformu napojený na váš web.",
    features: [
      "Napojení na existující web",
      "Jednoduchá správa produktů",
      "Rychlé spuštění",
      "Ideální pro digitální produkty",
    ],
    cta: "Mám zájem",
    highlight: false,
  },
  {
    name: "E-shop jako podstránka",
    price: "3 000 – 5 000 Kč",
    desc: "Přidáme e-shopovou podstránku přímo na váš web s platební bránou a správou objednávek.",
    features: [
      "Integrováno do vašeho webu",
      "Platební brána",
      "Správa objednávek",
      "Přizpůsobivý design",
    ],
    cta: "Mám zájem",
    highlight: true,
  },
  {
    name: "E-shop na míru",
    price: "10 000 – 12 000 Kč",
    desc: "Samostatný e-shop na vlastní doméně s kompletním řešením pro váš online prodej.",
    features: [
      "Vlastní URL adresa",
      "Kompletní e-shop řešení",
      "Platební brána",
      "Správa produktů a objednávek",
      "Přizpůsobivý design na míru",
    ],
    cta: "Mám zájem",
    highlight: false,
  },
];

const seoPlans = [
  {
    name: "SEO – váš web",
    price: "5 000 Kč",
    period: "jednorázově",
    desc: "Pokud už máte web od nás – obsahuje základní on-page SEO optimalizaci.",
    features: [
      "On-page SEO optimalizace",
      "Google Business Profile",
      "Technická optimalizace",
      "Lokální klíčová slova",
      "Zmínky a citace",
    ],
    cta: "Mám zájem",
    highlight: false,
  },
  {
    name: "SEO – cizí web",
    price: "8 000 Kč",
    period: "jednorázově",
    desc: "Máte web od jiného vývojáře? Upravíme ho pro lokální vyhledávání. Cena nezahrnuje tvorbu nového webu.",
    features: [
      "Audit stávajícího webu",
      "On-page SEO optimalizace",
      "Google Business Profile",
      "Lokální klíčová slova",
      "Zmínky a citace",
    ],
    cta: "Mám zájem",
    highlight: true,
  },
  {
    name: "SEO pro velkoměsta",
    price: "Po domluvě",
    period: "měsíčně",
    desc: "Pro firmy ve velkých městech s vysokou konkurencí. Pravidelná péče o SEO pro dlouhodobé výsledky.",
    features: [
      "Vše ze základního SEO",
      "Pravidelné blog články",
      "Google Business příspěvky",
      "Měsíční reporty",
      "Průběžná optimalizace",
    ],
    cta: "Nezávazná poptávka",
    highlight: false,
  },
];

function PlanCard({ plan, accent }: { plan: any, accent: string }) {
  return (
    <div className={`flex flex-col h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl ${
      plan.highlight
        ? `bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/20`
        : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500'
    }`}>
      {plan.highlight && (
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full w-fit mb-4">
          Nejoblíbenější
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
      <div className="mb-2">
        <span className="text-3xl font-extrabold text-white">{plan.price}</span>
        {plan.period && <span className="text-gray-400 text-sm ml-2">/ {plan.period}</span>}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.desc}</p>
      <ul className="space-y-2 mb-8 flex-grow">
        {plan.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-cyan-500'}`} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="/#kontakt"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
          plan.highlight
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:scale-105'
            : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
        }`}
      >
        {plan.cta} <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/15 to-transparent blur-[100px] -z-10 rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Ceník</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Souhrn cen</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transparentní ceny bez skrytých poplatků. Hosting zdarma, doména ~200 Kč/rok.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Webové stránky */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Webové stránky</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-10" />
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {webPlans.map((plan, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <PlanCard plan={plan} accent="blue" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* E-shopy */}
        <section className="py-16 px-6 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">E-shopy</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-10" />
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {shopPlans.map((plan, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <PlanCard plan={plan} accent="cyan" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Lokální SEO</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-10" />
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {seoPlans.map((plan, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <PlanCard plan={plan} accent="green" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4">Nejste si jistí co potřebujete?</h2>
              <p className="text-gray-400 mb-8">Ozvěte se nám a společně zjistíme co by vašemu byznysu pomohlo nejvíc. Nezávazně a zdarma.</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Kontaktovat HavranWeb <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
