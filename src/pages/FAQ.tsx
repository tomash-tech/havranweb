import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "Tvorba webu",
    questions: [
      {
        q: "Kolik stojí webové stránky?",
        a: "Cena se pohybuje od 4 000 do 12 000 Kč podle náročnosti projektu. Jednoduchý web pro živnostníka vychází od 4 000 Kč, firemní web s více podstránkami a funkcemi od 6 000 Kč, komplexní projekty s rezervačními systémy a integracemi od 10 000 Kč. Podrobný přehled najdete na stránce Ceník."
      },
      {
        q: "Jak dlouho trvá tvorba webu?",
        a: "Záleží na složitosti projektu. Jednoduchá landing page může být hotová do dvou týdnů. Standardní firemní web trvá 3–6 týdnů. Složitější projekty s rezervačními systémy a integracemi se mohou protáhnout na několik měsíců. Velkou roli hraje také rychlost zpětné vazby z vaší strany a dodání podkladů jako jsou texty a fotografie."
      },
      {
        q: "Platí se web jednorázově nebo měsíčně?",
        a: "Za tvorbu webu platíte jednorázově. Žádné měsíční poplatky ani předplatné. Hosting zajišťujeme zdarma. Jediný opakující se náklad je doména – přibližně 200 Kč ročně."
      },
      {
        q: "Co potřebuji připravit před tvorbou webu?",
        a: "Čím více podkladů připravíte dopředu, tím rychleji web dokončíme. Ideálně si připravte texty o vašich službách, fotografie (logo, provozovna, produkty) a inspiraci – weby které se vám líbí. Pokud nemáte fotky, můžeme použít kvalitní stock fotografie."
      },
      {
        q: "Co všechno web obsahuje?",
        a: "Každý web obsahuje přizpůsobivý design pro mobil i počítač, extrémně rychlé načítání a základní SEO optimalizaci. Podle potřeby přidáváme kontaktní formuláře, Google mapy, napojení na Google tabulky, rezervační systémy, podporu více jazyků a další funkce na míru."
      },
    ]
  },
  {
    category: "E-shopy",
    questions: [
      {
        q: "Jaký je rozdíl mezi webem a e-shopem?",
        a: "Web slouží primárně k prezentaci vašich služeb nebo produktů a získávání kontaktů. E-shop umožňuje přímý online prodej s platební bránou a správou objednávek. Nabízíme tři úrovně – jednoduchý prodejní formulář (~2 000 Kč), e-shop jako podstránku vašeho webu (3 000–5 000 Kč) nebo samostatný e-shop na vlastní doméně (10 000–12 000 Kč)."
      },
    ]
  },
  {
    category: "Lokální SEO",
    questions: [
      {
        q: "Co je lokální SEO a proč ho potřebuji?",
        a: "Lokální SEO je soubor technik které pomáhají vaší firmě zobrazit se ve výsledcích Googlu v konkrétní lokalitě. Když někdo hledá například 'kadeřnictví Nový Jičín', lokální SEO zajistí že se zobrazíte v top 3 výsledcích. 70–80 % lidí nekliká dál než na první tři výsledky – pokud tam nejste vy, jsou tam vaši konkurenti."
      },
      {
        q: "Kolik stojí SEO?",
        a: "Pro menší města nabízíme jednorázové SEO – 5 000 Kč pokud máte web od nás, 8 000 Kč pokud máte web od jiného vývojáře. Pro velká města s vyšší konkurencí nabízíme měsíční péči o SEO včetně pravidelných blog článků a Google Business příspěvků – cena po domluvě."
      },
      {
        q: "Jak dlouho trvá než se SEO projeví?",
        a: "SEO není okamžitý výsledek jako reklama – jde o delší věc. První výsledky se obvykle začínají projevovat po 2–3 týdnech. Plný efekt lokálního SEO se typicky projeví po 3 měsících."
      },
      {
        q: "Potřebuji SEO pokud už mám web?",
        a: "Záleží na tom jak je váš web optimalizovaný. Spousta webů má špatnou strukturu, chybějící meta tagy nebo není napojena na Google Business Profile. Pokud vás zákazníci na Googlu nenacházejí, SEO vám pomůže. Zdarma se podíváme na vaši situaci a řekneme vám na rovinu jestli by vám SEO pomohlo."
      },
    ]
  },
  {
    category: "Obecné",
    questions: [
      {
        q: "Pracujete jen v Novém Jičíně nebo i jinde?",
        a: "Primárně působíme v Novém Jičíně a okolí – Kopřivnice, Příbor, Fulnek a Moravskoslezský kraj. Pracujeme ale i vzdáleně pro klienty z celé České republiky."
      },
      {
        q: "Scházíme se osobně nebo vše probíhá online?",
        a: "Obojí je možné. Pro klienty z Nového Jičína a okolí preferujeme osobní setkání – je jednodušší probrat představy o webu tváří v tvář. Pro vzdálené klienty vše řešíme online přes video hovor nebo email."
      },
      {
        q: "Proč nestačí jen Facebook nebo Instagram?",
        a: "Sociální sítě jsou skvělé pro komunikaci se stávajícími zákazníky, ale mají zásadní omezení. Algoritmy rozhodují kdo váš obsah uvidí, zákazníci kteří hledají službu na Googlu na Facebook neidou a firma bez webu působí méně důvěryhodně. Vlastní web je váš majetek – nikdo vám ho nemůže vzít ani omezit."
      },
    ]
  },
];

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${open ? 'border-blue-500/40 bg-blue-500/5' : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-6">
        <h3 className="font-semibold text-white text-left">{question}</h3>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-blue-400' : ''}`}
        />
      </div>
      {open && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-gray-700/50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
useEffect(() => {
  document.title = 'Časté otázky – HavranWeb';
 document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Odpovědi na nejčastější otázky o tvorbě webů, e-shopů a lokálním SEO.');
}, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/15 to-transparent blur-[100px] -z-10 rounded-full pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">FAQ</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Časté otázky</h1>
              <p className="text-xl text-gray-300">
                Odpovědi na nejčastější otázky o tvorbě webů, e-shopů a lokálním SEO.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="max-w-3xl mx-auto px-6 pb-32 space-y-16">
          {faqs.map((section, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{section.category}</h2>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6" />
                <div className="space-y-3">
                  {section.questions.map((item, i) => (
                    <FaqItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}
