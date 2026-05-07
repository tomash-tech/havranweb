import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, TrendingUp, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

function SEONovyJicin() {
  useEffect(() => {
    document.title = 'Lokální SEO Nový Jičín – HavranWeb';
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Lokální SEO optimalizace pro firmy v Novém Jičíně. Dostaňte svůj podnik do top 3 na Googlu. Cena od 5 000 Kč, jednorázově.');
   let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://havranweb.cz/lokality/seo-novy-jicin');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-green-600/20 to-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/lokality" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na lokality
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-5xl mb-6 shadow-xl shadow-green-500/10">
                  📈
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Lokální SEO v Novém Jičíně
                </h1>
                <p className="text-2xl text-green-200/80 font-medium tracking-wide">
                  Dostaňte svůj podnik na první místo na Googlu
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-green-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-green-500/30">
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                    SEO je optimalizace vašeho podniku pro vyhledávače jako Google. Znamená to, že když si někdo vyhledá váš obor v Novém Jičíně, zobrazíte se hned nahoře – před konkurencí.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    <strong>Proč je to důležité?</strong> Když si někdo vyhledá například kadeřnictví v Novém Jičíně, <span className="text-green-400 font-semibold">70–80 % lidí rozklikne</span> jeden ze 3 prvních zobrazených podniků. Pokud tam jste vy, zajistí vám to spoustu nových zákazníků.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-green-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-green-500/30">
                    Jak to funguje
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                    Nejde o reklamu – jde o to co se děje na vašich stránkách, vašem Google Business profilu a kde všude jsou vaše stránky zmíněny na internetu. Tohle vše nastavíme tak, aby vás Google zobrazil hned nahoře.
                  </p>
                  <div className="inline-block mt-2 px-5 py-3 border border-green-500/30 bg-green-500/10 rounded-xl">
                    <span className="text-green-400 font-medium">Cena:</span> Pokud už máte web ode mě tak <span className="text-white font-bold px-1">5 000 Kč</span>, pokud ne tak <span className="text-white font-bold px-1">8 000 Kč</span> – jednorázově.
                  </div>
                </div>
              </ScrollReveal>

              {/* Proč HavranWeb */}
              <ScrollReveal delay={200}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-green-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-green-500/30">
                    Proč HavranWeb?
                  </div>
                  <ul className="space-y-4 mt-2">
                    {[
                      "Jsem z Nového Jičína – znám místní konkurenci",
                      "Platíte jednorázově, žádné měsíční poplatky",
                      "Výsledky se začínají projevovat do 2–3 měsíců",
                      "Zahrnuje Google Business Profile optimalizaci",
                      "Zahrnuje zmínky a citace na důvěryhodných webech",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="lg:sticky lg:top-32 relative space-y-6">
              <div className="p-2 rounded-3xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent blur-2xl -z-10 rounded-full pointer-events-none" />
                <img src="/seo3.png" alt="SEO výsledky na Google mapách" className="w-full rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-500 border border-gray-700/50" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <TrendingUp className="w-5 h-5 text-green-400" />, value: "70–80 %", label: "lidí kliká na top 3" },
                  { icon: <MapPin className="w-5 h-5 text-green-400" />, value: "46 %", label: "hledání je lokálních" },
                  { icon: <Star className="w-5 h-5 text-green-400" />, value: "2–3 týd.", label: "první výsledky" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                    {stat.icon}
                    <p className="text-white font-bold text-lg mt-2">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

{/* Výsledky sekce */}
<section className="py-24 px-6 bg-gray-800/20">
  <div className="max-w-7xl mx-auto">
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Jak vypadají výsledky lokálního SEO?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          SEO není okamžitý výsledek jako reklama – je to dlouhodobá investice která se vyplácí. Tady je co můžete reálně očekávat.
        </p>
      </div>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          icon: "🌱",
          time: "2–3 týdny",
          title: "První výsledky",
          desc: "Google si začíná všímat změn na vašem webu a Google Business profilu. Začínáte se objevovat na 1-2 stránce.",
        },
        {
          icon: "📈",
          time: "Do 90 dnů",
          title: "Top 3 na Googlu",
          desc: "Pro většinu lokálních dotazů jako 'vaše služba Nový Jičín' se dostáváte do top 3 výsledků. Zákazníci vás začínají nacházet organicky.",
          highlight: true,
        },
        {
          icon: "🏆",
          time: "Dlouhodobě",
          title: "Stabilní pozice",
          desc: "Jednou získané pozice se v menším městě jako Nový Jičín udržují. Na rozdíl od reklamy která přestane fungovat jakmile přestanete platit, nebo velkoměst kde je stovka konkurentů a pravidelné postování je tam nutné. SEO zde pracuje za vás pořád.",
        },
      ].map((item, idx) => (
        <ScrollReveal key={idx} delay={idx * 100}>
          <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${
            item.highlight
              ? 'from-green-600/20 to-emerald-600/10 border-green-500/50 hover:border-green-400 hover:shadow-green-500/20'
              : 'from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-green-500/40 hover:shadow-green-500/10'
          }`}>
            <div className="text-4xl mb-3">{item.icon}</div>
            <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">{item.time}</p>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>
      
      {/* Ceny */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Přehled cen</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "SEO – náš web",
                price: "5 000 Kč",
                period: "jednorázově",
                desc: "Pokud už máte web od HavranWeb – obsahuje základní on-page SEO.",
                items: ["On-page SEO optimalizace", "Google Business Profile", "Lokální klíčová slova", "Zmínky a citace"],
                highlight: false,
              },
              {
                name: "SEO – cizí web",
                price: "8 000 Kč",
                period: "jednorázově",
                desc: "Máte web od jiného vývojáře? Upravíme ho pro lokální vyhledávání.",
                items: ["Audit stávajícího webu", "On-page SEO optimalizace", "Google Business Profile", "Zmínky a citace"],
                highlight: true,
              },
            ].map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`flex flex-col h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/10 border-green-500/50 hover:border-green-400 hover:shadow-green-500/20'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500'
                }`}>
                  {plan.highlight && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-300 bg-green-500/20 px-3 py-1 rounded-full w-fit mb-4">
                      Nejoblíbenější
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-3xl font-extrabold text-white mb-1">{plan.price}</p>
                  <p className="text-gray-500 text-sm mb-4">/ {plan.period}</p>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <ul className="space-y-2 flex-grow mb-6">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={14} className="text-green-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/cenik"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:scale-105'
                        : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                    }`}
                  >
                    Více informací <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="min-h-screen px-6 flex items-center py-24 bg-gray-800/20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Pojďme na to</h2>
            <p className="text-xl text-gray-300">
              Jsem z Nového Jičína a znám místní trh. Ozvěte se mi a zjistíme jak jste na tom s viditelností na Googlu – zdarma a nezávazně.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><strong>Email:</strong> tomashavran.pracovni@gmail.com</p>
              <p><strong>Telefon:</strong> +420 770 600 944</p>
              <p><strong>Lokalita:</strong> Nový Jičín a okolí</p>
            </div>
            <Link
              to="/cenik"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Zobrazit ceník <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SEONovyJicin;
