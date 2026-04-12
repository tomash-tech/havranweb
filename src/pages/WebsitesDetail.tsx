import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Wallet, Layout, Layers, Zap, Smartphone, Search, Globe, MessageSquare } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function WebsitesDetail() {
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
            <Link to="/service/seo" className="text-gray-300 hover:text-white transition-colors font-medium">Lokální SEO</Link>
            <Link to="/service/eshops" className="text-gray-300 hover:text-white transition-colors font-medium">E-shopy</Link>
            <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors font-medium">Kontakt</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/20 to-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Zpět na hlavní stránku
            </Link>
          </ScrollReveal>

          <div className="max-w-3xl">
            <div className="space-y-10">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-5xl mb-6 shadow-xl shadow-blue-500/10">
                  🌐
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Webové stránky
                </h1>
                <p className="text-2xl text-blue-200/80 font-medium tracking-wide">
                  Moderní webové stránky postavené na nejnovějších technologiích
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 backdrop-blur-md shadow-2xl hover:border-blue-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-8 px-4 py-1.5 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-8 mt-2">
                    Vytvářím webové stránky od jednoduchých prezentačních webů pro živnostníky, až po komplexní webové aplikace s rezervačními systémy a pokročilými funkcemi pro firmy.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-4 bg-gray-950/50 p-5 rounded-2xl border border-gray-800 shadow-inner group transition-all hover:border-blue-500/30">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Wallet className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Předpokládaná investice</p>
                      <p className="text-2xl font-bold text-white tracking-tight">
                        4 000 - 12 000 Kč
                        <span className="text-sm font-normal text-gray-500 ml-2">/ dle náročnosti</span>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700/50 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-blue-400">✨</span> Co vám nabízím
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: "Přizpůsobivý design", icon: <Layout className="w-5 h-5 text-blue-400" /> },
                      { text: "Napojení na Google tabulky", icon: <Layers className="w-5 h-5 text-blue-400" /> },
                      { text: "Extrémně rychlé načítání", icon: <Zap className="w-5 h-5 text-blue-400" /> },
                      { text: "Více podstránek", icon: <Layout className="w-5 h-5 text-blue-400" /> },
                      { text: "Google mapy na webu", icon: <Globe className="w-5 h-5 text-blue-400" /> },
                      { text: "Základní SEO optimalizace", icon: <Search className="w-5 h-5 text-blue-400" /> },
                      { text: "Rezervační systémy", icon: <Smartphone className="w-5 h-5 text-blue-400" /> },
                      { text: "Podpora více jazyků", icon: <MessageSquare className="w-5 h-5 text-blue-400" /> }
                    ].map((feature, idx) => (
                      <div key={idx} className="group flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
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

export default WebsitesDetail;
