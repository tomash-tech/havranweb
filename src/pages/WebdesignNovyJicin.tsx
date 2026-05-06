import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Wallet, Layout, Layers, Zap, Smartphone, Search, Globe, MessageSquare } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

function WebdesignNovyJicin() {
  useEffect(() => {
    document.title = 'Tvorba webových stránek Nový Jičín – HavranWeb';
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Tvorba webových stránek na míru pro podnikatele v Novém Jičíně. Přizpůsobivý design, rychlé načítání, základní SEO. Ceny od 4 000 Kč, hosting zdarma.');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/20 to-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-5xl mb-6 shadow-xl shadow-blue-500/10">
                  🌐
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Tvorba webových stránek v Novém Jičíně
                </h1>
                <p className="text-2xl text-blue-200/80 font-medium tracking-wide">
                  Moderní weby na míru pro lokální podnikatele
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 backdrop-blur-md shadow-2xl hover:border-blue-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-8 px-4 py-1.5 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-8 mt-2">
                    Jsem webový vývojář z Nového Jičína. Vytvářím weby pro živnostníky a firmy v Novém Jičíně a okolí – od jednoduchých prezentačních webů až po komplexní weby s rezervačními systémy a pokročilými funkcemi.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                    Každý web je navržený na míru podle vašich potřeb. Žádné šablony, žádné kompromisy – jen přesně to co váš byznys potřebuje.
                  </p>

                  <div className="mt-6 flex items-center gap-4 bg-gray-950/50 p-5 rounded-2xl border border-gray-800 shadow-inner group transition-all hover:border-blue-500/30">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Wallet className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Předpokládaná investice</p>
                      <p className="text-2xl font-bold text-white tracking-tight">
                        4 000 – 12 000 Kč
                        <span className="text-sm font-normal text-gray-500 ml-2">/ dle náročnosti</span>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Proč HavranWeb */}
              <ScrollReveal delay={150}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 backdrop-blur-md shadow-2xl">
                  <div className="absolute top-0 left-8 px-4 py-1.5 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-blue-500/30">
                    Proč HavranWeb?
                  </div>
                  <ul className="space-y-4 mt-2">
                    {[
                      "Jsem z Nového Jičína – scházíme se osobně",
                      "Hosting zdarma, doména ~200 Kč/rok",
                      "Platíte jednorázově, žádné měsíční poplatky",
                      "Drobné úpravy webu zdarma",
                      "Rychlé spuštění – landing page do 2 týdnů",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="lg:sticky lg:top-32 relative">
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700/50 shadow-xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-blue-400">✨</span> Co vám nabízím
                </h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {[
                    { text: "Přizpůsobivý design", icon: <Layout className="w-5 h-5 text-blue-400" /> },
                    { text: "Napojení na Google tabulky", icon: <Layers className="w-5 h-5 text-blue-400" /> },
                    { text: "Extrémně rychlé načítání", icon: <Zap className="w-5 h-5 text-blue-400" /> },
                    { text: "Více podstránek", icon: <Layout className="w-5 h-5 text-blue-400" /> },
                    { text: "Google mapy na webu", icon: <Globe className="w-5 h-5 text-blue-400" /> },
                    { text: "Základní SEO optimalizace", icon: <Search className="w-5 h-5 text-blue-400" /> },
                    { text: "Rezervační systémy", icon: <Smartphone className="w-5 h-5 text-blue-400" /> },
                    { text: "Podpora více jazyků", icon: <MessageSquare className="w-5 h-5 text-blue-400" /> },
                  ].map((feature, idx) => (
                    <div key={idx} className="group flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-x-1 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                        {feature.icon || <CheckCircle className="w-5 h-5 text-blue-400" />}
                      </div>
                      <span className="text-gray-200 text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cenové přehled */}
      <section className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Přehled cen</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transparentní ceny bez skrytých poplatků. Hosting zdarma.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Základní web",
                price: "4 000 – 6 000 Kč",
                desc: "Jednoduchý web pro živnostníka nebo malou firmu.",
                items: ["Úvod, služby, kontakt", "Google mapa", "Přizpůsobivý design", "Rychlé načítání"],
                highlight: false,
              },
              {
                name: "Firemní web",
                price: "6 000 – 10 000 Kč",
                desc: "Web s více podstránkami a pokročilejšími funkcemi.",
                items: ["Více podstránek", "Kontaktní formulář", "Napojení na Google tabulky", "Základní rezervační systém"],
                highlight: true,
              },
              {
                name: "Web na míru",
                price: "10 000 Kč+",
                desc: "Komplexní projekty s funkcemi a integracemi na míru.",
                items: ["Rezervační systém", "Více jazyků", "Propojení s externími systémy", "Funkce na míru"],
                highlight: false,
              },
            ].map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`flex flex-col h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/20'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500'
                }`}>
                  {plan.highlight && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full w-fit mb-4">
                      Nejoblíbenější
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-3xl font-extrabold text-white mb-2">{plan.price}</p>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <ul className="space-y-2 flex-grow mb-6">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={14} className="text-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/cenik"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:scale-105'
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

      {/* Jak to funguje */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Jak to funguje</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Jednoduchý proces od prvního setkání do spuštění
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Setkání", desc: "Diskutujeme o vašich cílech a představě projektu" },
              { num: "2", title: "Návrh", desc: "Vytvořím a ukážu vám návrh podle informací ze setkání" },
              { num: "3", title: "Vývoj", desc: "Dokončím web podle schváleného návrhu" },
              { num: "4", title: "Spuštění", desc: "Web se spustí na vámi vybranou URL adresu" },
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="relative">
                  {idx < 3 && (
                    <div className="absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 hidden md:block" />
                  )}
                  <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 cursor-default h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 font-bold text-gray-950 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
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
            <h2 className="text-5xl font-bold">Pojďme se pobavit</h2>
            <p className="text-xl text-gray-300">
              Ozvěte se mi – jsem z Nového Jičína a rád se s vámi setkám osobně. Společně vytvoříme web který vám přinese zákazníky.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><strong>Email:</strong> tomashavran.pracovni@gmail.com</p>
              <p><strong>Telefon:</strong> +420 770 600 944</p>
              <p><strong>Lokalita:</strong> Nový Jičín a okolí</p>
            </div>
            <Link
              to="/cenik"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
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

export default WebdesignNovyJicin;
