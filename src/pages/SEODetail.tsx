import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

function SEODetail() {
useEffect(() => {
  document.title = 'Lokální SEO Nový Jičín – HavranWeb';
document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Lokální SEO optimalizace pro firmy a podniky. Dostaňte svůj podnik do top 3 na Googlu. Cena od 5 000 Kč.');
 let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://havranweb.cz/sluzby/seo');
}, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
    <Header />

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-green-600/20 to-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na hlavní stránku
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-5xl mb-6 shadow-xl shadow-green-500/10">
                  📈
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Lokální SEO
                </h1>
                <p className="text-2xl text-green-200/80 font-medium tracking-wide">
                  Zvyšte vaši viditelnost v lokálních vyhledávačích
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-green-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-green-500/30">
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                    SEO je optimalizace vašeho podniku pro vyhledávače jako Google. Znamená to, že když si někdo vyhledá váš obor ve vašem městě, zobrazíte se hned nahoře.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    <strong>Proč je to důležité?</strong> Když si někdo vyhledá např. kadeřnictví v Novém Jičíně, <span className="text-green-400 font-semibold">70% lidí rozklikne</span> jeden ze 3 prvních zobrazených podniků. Pokud tam jste vy, zajistí vám to spoustu nových zákazníků.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-green-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-green-500/30">
                    Jak to funguje
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                    Spousta lidí si myslí, že tohle funguje stejně jako reklamy, to ovšem není pravda. Jde spíše o to, co se děje na vašich webových stránkách, vašem Google business profilu a kde všude jsou vaše stránky zmíněny. Tohle vše nastavím tak, aby vás Google dal hned na začátek!
                  </p>
                  <div className="inline-block mt-2 px-5 py-3 border border-green-500/30 bg-green-500/10 rounded-xl">
                    <span className="text-green-400 font-medium">Cena:</span> Pokud už máte web ode mě tak <span className="text-white font-bold px-1">5 000 Kč</span>, pokud ne tak <span className="text-white font-bold px-1">8 000 Kč</span>.
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="lg:sticky lg:top-32 relative">
              <div className="p-2 rounded-3xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent blur-2xl -z-10 rounded-full pointer-events-none" />
                <img src="/seo3.png" alt="SEO výsledky na Google mapách" className="w-full rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-500 border border-gray-700/50" />
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
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: 'jak-dlouho-trva-nez-se-seo-projevi', title: 'Jak dlouho trvá než se SEO projeví?', desc: 'SEO není okamžitá reklama – ale výsledky přichází rychleji než si myslíte. Reálné časové odhady z praxe.', category: 'SEO' },
              { slug: 'proc-podniky-v-novem-jicine-ztraceji-zakazniky', title: 'Proč podniky v Novém Jičíně ztrácí zákazníky', desc: 'Bez viditelnosti na Googlu pravděpodobně přicházíte o zákazníky každý měsíc, aniž byste o tom věděli.', category: 'SEO' },
              { slug: 'co-je-lokalni-seo', title: 'Lokální SEO: Jak se dostat na první místo na Googlu', desc: 'Lokální SEO je nejsilnější nástroj pro malé firmy. Zjistěte, jak funguje a co musíte udělat.', category: 'SEO' },
            ].map((post, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all hover:shadow-2xl hover:shadow-green-500/10 h-full"
                >
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full w-fit mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                    {post.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
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
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Link
                to="/lokality/seo-novy-jicin"
                className="group flex flex-col bg-gradient-to-br from-green-600/20 to-emerald-600/10 p-8 rounded-2xl border border-green-500/50 hover:border-green-400 transition-all hover:shadow-2xl hover:shadow-green-500/20"
              >
                <span className="text-3xl mb-4">📍</span>
                <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors mb-2">
                  Nový Jičín
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  Hlavní oblast působení. Osobní setkání, rychlé výsledky.
                </p>
                <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
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

export default SEODetail;
