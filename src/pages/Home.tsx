import ScrollReveal from "../components/ScrollReveal";
import { Code2, Sparkles, Rocket, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import ContactForm from '../components/ContactForm';
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
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
              <iframe
                src="https://my.spline.design/3dglobe-ilZgUXNKvZsJki6lkUrp7g8I/"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="py-24 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Co vám mohu nabídnout</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Řešení pro všechny vaše digitální potřeby
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
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                <iframe
                  src="https://my.spline.design/ai-OtgZtBaKnNgOf0s9O870kAZD/"
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full"
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
      <footer style={{ backgroundColor: '#0a0f1e' }} className="border-t border-cyan-500/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Column 1 - Logo & Tagline */}
            <div className="md:col-span-1">
              <img
                src="/blue_hw.png"
                alt="HavranWeb logo"
                className="w-16 h-16 rounded-xl object-cover mb-4"
              />
              <h2 className="text-white font-bold text-lg mb-1">HavranWeb</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Moderní webové stránky na míru pro lokální podnikatele v Novém Jičíně a okolí.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/havranweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition"
                  style={{ backgroundColor: '#131929' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.073-3.077.44-4.243 1.608C1.644 2.847 1.277 4.315 1.204 5.924 1.146 7.204 1.132 7.612 1.132 12c0 4.388.014 4.796.072 6.076.073 1.609.44 3.077 1.608 4.243 1.166 1.168 2.634 1.535 4.243 1.608 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.073 3.077-.44 4.243-1.608 1.168-1.166 1.535-2.634 1.608-4.243.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.609-.44-3.077-1.608-4.243C19.324 1.644 17.856 1.277 16.247 1.204 14.967 1.146 14.559 1.132 12 1.132zm0 5.838a5.03 5.03 0 1 0 0 10.06 5.03 5.03 0 0 0 0-10.06zm0 8.292a3.262 3.262 0 1 1 0-6.524 3.262 3.262 0 0 1 0 6.524zm5.23-8.491a1.175 1.175 0 1 1-2.35 0 1.175 1.175 0 0 1 2.35 0z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575590282039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition"
                  style={{ backgroundColor: '#131929' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                  </svg>
                </a>
                
                  
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block" />

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Služby</h3>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#22d3ee' }}></div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/service/websites" className="hover:text-cyan-400 transition">Web design</Link></li>
                <li><Link to="/service/seo" className="hover:text-cyan-400 transition">Lokální SEO</Link></li>
                <li><Link to="/service/eshops" className="hover:text-cyan-400 transition">E-shopy</Link></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Kontakt</h3>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#22d3ee' }}></div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>✉️</span>
                  <a href="mailto:tomashavran.pracovni@gmail.com" className="hover:text-cyan-400 transition">
                    tomashavran.pracovni@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>📞</span>
                  <a href="tel:+420770600944" className="hover:text-cyan-400 transition">
                    +420 770 600 944
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>📍</span>
                  <span>Nový Jičín a okolí</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t py-4" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© 2026 HavranWeb. Všechna práva vyhrazena.</p>
            <div className="flex items-center gap-4">
              <Link to="/legal" className="hover:text-cyan-400 transition text-xs">Právní informace</Link>
              <Link to="/legal" className="hover:text-cyan-400 transition text-xs">Ochrana osobních údajů</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;