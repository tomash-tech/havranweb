import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Wallet } from 'lucide-react';
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
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://havranweb.cz/lokality/tvorba-webovych-stranek-novy-jicin');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <Header />

      {/* 1. Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/20 to-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/lokality" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na lokality
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={50}>
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
        </div>
      </section>

      {/* 2. Jste z Nového Jičína? */}
      <section className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jste z Nového Jičína?<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tohle je pro vás.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl">
              Jako místní vývojář znám specifika podnikání v Novém Jičíně. Vím jaká konkurence v jednotlivých oborech existuje, jak zákazníci v regionu hledají služby a co funguje.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Scházíme se osobně – v kavárně, u vás nebo u mě. Probereme vaše představy, ukážu vám návrhy přímo na místě a společně dotáhneme web do finální podoby.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Osobní setkání v Novém Jičíně",
                "Znám místní trh a konkurenci",
                "Rychlá komunikace a odezva",
                "Podpora i po spuštění webu",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Domluvme se na setkání <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Co nabízím */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-2">Co vám nabízím</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Přizpůsobivý design pro mobil i počítač",
              "Napojení na Google tabulky",
              "Extrémně rychlé načítání",
              "Více podstránek",
              "Google mapy na webu",
              "Základní SEO optimalizace",
              "Rezervační systémy",
              "Podpora více jazyků",
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cenový přehled */}
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
                name: "Komplexní web na míru",
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

      {/* 5. Kontakt */}
      <section className="px-6 flex items-center py-24">
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
