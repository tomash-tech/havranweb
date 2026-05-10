import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Wallet, Package, ShoppingCart, FileText, Send, Bell, Activity, Tag, CircleDollarSign } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

const steps = [
  {
    num: 1,
    title: "Setkání",
    desc: "Diskutujeme o vašich cílech a představách.",
  },
  {
    num: 2,
    title: "Tvorba",
    desc: "Sestroijím e-shop a prodejní formulář.",
  },
  {
    num: 3,
    title: "Propojení",
    desc: "Přidáme to k vám na web.",
  },
  {
    num: 4,
    title: "Spuštění",
    desc: "lidé si budou moct kupovat vaše digitální produkty na vašem e-shopu.",
    last: true,
  },
];

function EshopsDetail() {
useEffect(() => {
  document.title = 'Tvorba e-shopů – HavranWeb';
document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Tvorba e-shopů. Od jednoduchého prodejního formuláře až po e-shop na míru pod vlastní doménou. Od 2 000 Kč.');
let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://havranweb.cz/sluzby/eshopy');
}, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      
     <Header />

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-purple-600/20 to-pink-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na hlavní stránku
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Levý sloupec ── */}
            <div className="flex flex-col space-y-10">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-5xl mb-6 shadow-xl shadow-purple-500/10">
                  🛒
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  E-shopy
                </h1>
                <p className="text-2xl text-purple-200/80 font-medium tracking-wide">
                  Vlastní online obchod pro prodej vašich produktů
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 backdrop-blur-md shadow-2xl hover:border-purple-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-8 px-4 py-1.5 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-purple-500/30 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-8 mt-2">
                    Vytvářím moderní e-shopy propojené s vašimi webovými stránkami, ideální pro prodej digitálních produktů jako jsou e-booky, online kurzy, webináře, podcasty, či aplikace.
                  </p>
                  <div className="mt-6 flex items-center gap-4 bg-gray-950/50 p-5 rounded-2xl border border-gray-800 shadow-inner group transition-all hover:border-purple-500/30">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Wallet className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Počáteční investice</p>
                      <p className="text-2xl font-bold text-white tracking-tight">
                        Od 2 000 Kč
                        <span className="text-sm font-normal text-gray-500 ml-2">/ individuální obcenění</span>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700/50 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-purple-400">⚡</span> Výhody
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: "Katalog produktů", icon: <Package className="w-5 h-5 text-purple-400" /> },
                      { text: "Nákupní košík (checkout)", icon: <ShoppingCart className="w-5 h-5 text-purple-400" /> },
                      { text: "Prodejní formulář", icon: <FileText className="w-5 h-5 text-purple-400" /> },
                      { text: "Automatické odesílání", icon: <Send className="w-5 h-5 text-purple-400" /> },
                      { text: "Notifikace o objednávce", icon: <Bell className="w-5 h-5 text-purple-400" /> },
                      { text: "Sledování objednávek", icon: <Activity className="w-5 h-5 text-purple-400" /> },
                      { text: "Správa cen a slev", icon: <Tag className="w-5 h-5 text-purple-400" /> },
                      { text: "Peníze rovnou na účet", icon: <CircleDollarSign className="w-5 h-5 text-purple-400" /> }
                    ].map((feature, idx) => (
                      <div key={idx} className="group flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                          {feature.icon || <CheckCircle className="w-5 h-5 text-purple-400" />}
                        </div>
                        <span className="text-gray-200 text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          {/* ── Pravý sloupec — kartičkový stepper ── */}
<ScrollReveal delay={200}>
  <div className="lg:sticky lg:top-32 flex flex-col gap-3 pt-4">
    {steps.map((step) => (
      <div key={step.num} className="flex gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/20 flex-shrink-0">
            {step.num}
          </div>
          {!step.last && (
            <div className="w-px flex-1 mt-2 bg-gradient-to-b from-purple-500/40 to-pink-500/10 min-h-[1.5rem]" />
          )}
        </div>
        <div className={`group flex-1 p-5 rounded-2xl bg-gray-900/60 border border-gray-700/50 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all duration-300 ${!step.last ? 'mb-1' : ''}`}>
          <p className="text-white font-bold text-base mb-1 group-hover:text-purple-300 transition-colors duration-300">
            {step.title}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>
</ScrollReveal>

          </div>
        </div>
      </section>

{/* Relevantní články - přidej PŘED sekci s kontaktem */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Relevantní články</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: 'plati-se-web-jednorazove-nebo-mesicne', title: 'Platí se web jednorázově nebo měsíčně?', desc: 'Spousta lidí neví jak funguje platba za web. U nás je to jednoduché – platíte jednou a hosting máte zdarma.', category: 'Tvorba webů' },
              { slug: 'jak-dlouho-trva-tvorba-webu', title: 'Jak dlouho trvá tvorba webu?', desc: 'Jednoduchá landing page může být hotová za dva týdny. Složitější web s rezervačními systémy může trvat několik měsíců.', category: 'Tvorba webů' },
              { slug: 'proc-podnikatele-v-novem-jicine-potrebuji-web', title: 'Proč podnikatelé potřebují vlastní web', desc: 'Facebook nestačí. Vlastní web je základ online přítomnosti každé firmy – a přináší výhody které sociální sítě nikdy nenabídnou.', category: 'Tvorba webů' },
            ].map((post, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10 h-full"
                >
                  <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full w-fit mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                    {post.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    Číst článek <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kde nabízíme - přidej ZA relevantní články, PŘED kontakt */}
      <section className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Kde tuto službu nabízíme</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Link
                to="/lokality/tvorba-eshopu-novy-jicin"
                className="group flex flex-col bg-gradient-to-br from-purple-600/20 to-pink-600/10 p-8 rounded-2xl border border-purple-500/50 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <span className="text-3xl mb-4">📍</span>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  Nový Jičín
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  Hlavní oblast působení. Osobní setkání, rychlé spuštění.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Více informací <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-gray-700 text-center min-h-[200px]">
                <span className="text-3xl mb-3">🗺️</span>
                <p className="text-gray-500 font-medium">Další města brzy</p>
                <p className="text-gray-600 text-sm mt-1">Kopřivnice, Příbor, Fulnek...</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col justify-center p-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <span className="text-3xl mb-4">🌐</span>
                <h3 className="text-xl font-bold text-white mb-2">Celá ČR – online</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pracujeme i vzdáleně pro klienty z celé České republiky přes video hovor a email.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="min-h-screen px-6 flex items-center py-24">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Kontakt</h2>
            <p className="text-xl text-gray-300">
              Ozvěte se mi a společně vytvoříme web, který vám přinese klienty.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><strong>Email:</strong> tomashavran.pracovni@gmail.com</p>
              <p><strong>Telefon:</strong> +420 770 600 944</p>
              <p><strong>Lokalita:</strong> Nový Jičín a okolí</p>
            </div>
            <Link
              to="/legal"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all border border-gray-700 mt-4"
            >
              Právní informace
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

export default EshopsDetail;
