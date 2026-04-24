import ScrollReveal from "../components/ScrollReveal";
import { Code2, Sparkles, Rocket, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <nav className="sticky top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/blue_hw.png" alt="HavranWeb" className="h-10 w-auto" />
            <span className="text-xl font-bold">HavranWeb</span>
          </Link>
          <div className="hidden md:flex gap-12">
            <a href="#sluzby" className="text-gray-300 hover:text-white transition-colors font-medium">Služby</a>
            <Link to="/service/websites" className="text-gray-300 hover:text-white transition-colors font-medium">Web design</Link>
            <Link to="/service/seo" className="text-gray-300 hover:text-white transition-colors font-medium">Lokální SEO</Link>
            <Link to="/service/eshops" className="text-gray-300 hover:text-white transition-colors font-medium">E-shopy</Link>
            <Link to="/legal" className="text-gray-300 hover:text-white transition-colors font-medium">Legální</Link>
           <Link to="/blog" className="text-gray-300 hover:text-white transition-colors font-medium">Blog</Link>
            <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors font-medium">Kontakt</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Web design v Novém Jičíně
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Vytvářím moderní webové stránky na míru pro lokální podnikatele.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 w-fit"
                >
                  Mám zájem
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#sluzby"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all border border-gray-700 w-fit"
                >
                  Služby
                </a>
              </div>
            </div>
            <div 
              className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)'
              }}
            >
              <iframe
                src="https://my.spline.design/3dglobe-ilZgUXNKvZsJki6lkUrp7g8I/"
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-[calc(100%+70px)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Tvorba webu, E-shopů a SEO</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Co vám mohu nabídnout
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'websites', icon: Sparkles, title: "Webové stránky", desc: "Od jednodušších po komplexnější weby, které obsahují rezervační systémy, podstránky, formuláře a mnoho více. Cena individuální." },
              { id: 'seo', icon: Code2, title: "Lokální SEO", desc: "Dostaňme váš podnik do top 3 na Google, když zákazník vyhledá Npř. Kadeřnictví Nový Jičín, váš podnik se mu zobrazí hned nahoře." },
              { id: 'eshops', icon: Rocket, title: "Eshopy", desc: "Jednoduché eshopy propojené s vašimi webovými stránkami, ideální pro prodej digitálních produktů (kurzy, e-booky atd)." },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  <Link
                    to={`/service/${item.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/50 hover:border-blue-500 rounded-lg font-semibold transition-all text-blue-300 hover:text-blue-200 w-fit"
                  >
                    Více informací
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proc" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Proč zvolit
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> mě</span>
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Rychlé spuštění", desc: "Projekt se spustí v blízkých dnech po vašem schválení finální podoby." },
                  { icon: Shield, title: "První návrh", desc: "Po prvním setkání vytvořím návrh webovek, který s vámi zkonzultuji, abych zajistil, že vytvořím web, který se vám bude líbit." },
                  { icon: Sparkles, title: "Moderní design", desc: "Všechny weby mají moderní desing konzultovaný s vámi." },
                  { icon: Clock, title: "Jsem student", desc: "Jakožto mladý student se orientuju v nejnovějších technologiích, které používám pro dosažení nejlepšího výsledku." },
                  { icon: CheckCircle, title: "SEO optimalizace", desc: "Vaše stránky budou připraveny, aby byly co nejvíce viditelné na google." },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 120}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal>
              <div 
                className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
                  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)'
                }}
              >
                <iframe
                  src="https://my.spline.design/ai-OtgZtBaKnNgOf0s9O870kAZD/"
                  frameBorder="0"
                  className="absolute top-0 left-0 w-full h-[calc(100%+70px)]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="proces" className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Jak to funguje</h2>
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
              { num: "4", title: "Spuštění", desc: "Web se spustí na vámi vybranou url adresu" },
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="relative">
                  {idx < 3 && (
                    <div className="absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 hidden md:block" />
                  )}
                  <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 cursor-default">
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

      <section id="kontakt" className="min-h-screen px-6 flex items-center">
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

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;
