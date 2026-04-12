import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Wallet, Package, ShoppingCart, FileText, Send, Bell, Activity, Tag, CircleDollarSign } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function EshopsDetail() {
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
            <Link to="/service/websites" className="text-gray-300 hover:text-white transition-colors font-medium">Web design</Link>
            <Link to="/service/seo" className="text-gray-300 hover:text-white transition-colors font-medium">Lokální SEO</Link>
            <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors font-medium">Kontakt</a>
          </div>
        </div>
      </nav>

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
            <div className="space-y-10">
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
                        Od 8 000 Kč
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

            <ScrollReveal delay={200} className="lg:sticky lg:top-32 relative">
              <div className="p-2 rounded-3xl bg-gray-800/30 border border-gray-700 backdrop-blur-sm shadow-2xl relative h-[500px] md:h-[600px] lg:h-[750px] group transition-all duration-700 hover:border-purple-500/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/5 blur-2xl -z-10 rounded-full pointer-events-none group-hover:from-purple-500/30 transition-all duration-700" />
                <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-700/30 bg-gray-900/50 relative">
                  <iframe
                    src="https://my.spline.design/ai-OtgZtBaKnNgOf0s9O870kAZD/"
                    frameBorder="0"
                    className="absolute top-0 left-0 w-full h-[calc(100%+70px)] object-cover"
                    title="Interactive 3D representation"
                  />
                  {/* Subtle overlay to soften iframe edges */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(3,7,18,0.5)] rounded-2xl" />
                </div>
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
