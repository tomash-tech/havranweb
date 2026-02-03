import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

function WebsitesDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <nav className="sticky top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/blue_hw.png" alt="HavranWeb" className="h-10 w-auto" />
            <span className="text-xl font-bold">HavranWeb</span>
          </Link>
          <div className="hidden md:flex gap-12">
            <a href="/#sluzby" className="text-gray-300 hover:text-white transition-colors font-medium">Služby</a>
            <a href="/#proc" className="text-gray-300 hover:text-white transition-colors font-medium">Proč já</a>
            <a href="/#proces" className="text-gray-300 hover:text-white transition-colors font-medium">Proces</a>
            <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors font-medium">Kontakt</a>
          </div>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zpět
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="text-7xl mb-6">🌐</div>
              <h1 className="text-6xl font-bold mb-6">Webové stránky</h1>
              <p className="text-2xl text-gray-300 mb-8">Moderní webové stránky postavené na nejnovější technologiích</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 mb-16">
              <h2 className="text-3xl font-bold mb-6">O službě</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">Vytvářím webové stránky od jednoduchých prezentačních webů až po komplexní e-commerce řešení s rezervačními systémy, více jazykovou podporou a pokročilými funkcemi.</p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Cena</h3>
                <p className="text-lg text-gray-200">Cena se určuje podle složitosti projektu. Jednoduchý web od 15 000 Kč, komplexnější řešení dle dohody.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12">Co vám nabízím</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Responzivní design pro všechna zařízení",
                  "Optimalizace pro vyhledávače (SEO)",
                  "Bezpečné a rychlé načítání",
                  "Integrace s vašimi existujícími systémy",
                  "Administrační panel pro správu obsahu",
                  "Analitika a sledování návštěvnosti",
                  "Rezervační systémy a formuláře",
                  "Podpora více jazyků"
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold mb-8">Máte zájem?</h2>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Kontaktujte mě
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2026 HavranWeb. Všechna práva vyhrazena.</p>
        <p>tomashavran.pracovni@gmail.com</p>
        <p>+420 770 600 944</p>
        <p>Nový Jičín</p>
      </footer>
    </div>
  );
}

export default WebsitesDetail;
