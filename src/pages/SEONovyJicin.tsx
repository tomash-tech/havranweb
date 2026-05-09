import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
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

      {/* 1. Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-green-600/20 to-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/lokality" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na lokality
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={50}>
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
        </div>
      </section>

      {/* 2. Jste z Nového Jičína? */}
      <section className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jste z Nového Jičína?<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Tohle je pro vás.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl">
              Jako místní vývojář znám konkurenci v Novém Jičíně. Vím jaké firmy jsou ve vašem oboru viditelné na Googlu a kde je prostor dostat se před ně.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
              SEO není reklama – je to dlouhodobá investice. Správně nastavené lokální SEO přivádí zákazníky pořád, bez dalších nákladů. A v menším městě jako Nový Jičín se výsledky dostaví rychleji než ve velkých městech.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Znám místní trh a konkurenci",
                "Výsledky do 2–3 týdnů, top 3 do 90 dní",
                "Platíte jednorázově, žádné měsíční poplatky",
                "Zahrnuje Google Business Profile optimalizaci",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Zjistit jak jste na tom <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Co zahrnuje SEO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-2 text-center">Co zahrnuje lokální SEO</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-10 mx-auto" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "On-page SEO optimalizace",
              "Google Business Profile",
              "Lokální klíčová slova",
              "Zmínky a citace",
              "Technická optimalizace webu",
              "Správná struktura H1/H2 tagů",
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={100}>
            <div className="flex justify-center mt-8">
              <Link
                to="/sluzby/seo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 text-white text-sm"
              >
                Více info o lokálním SEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Cenový přehled */}
      <section className="py-24 px-6 bg-gray-800/20">
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

      {/* 5. Kontakt */}
      <section className="px-6 flex items-center py-24">
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
