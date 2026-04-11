import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
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
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-8 px-3 py-1 -translate-y-1/2 bg-purple-500 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg shadow-purple-500/30">
                    O službě
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    Vytvářím moderní e-shopy propojené s vašimi webovými stránkami, ideální pro prodej digitálních produktů jako jsou e-booky, online kurzy, webináře, podcasty, aplikace atd.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150}>
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 md:p-10 rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-purple-400">⚡</span> Výhody
                </h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {[
                    "Katalog produktů s kategoriemi",
                    "Nákupní košík a checkout",
                    "Prodejní formulář přímo na webu",
                    "Produkt se automaticky odešle zákazníkovi",
                    "Automatické objednávkové oznámení",
                    "Sledování objednávek",
                    "Správa cen a slev",
                    "Peníze přijdou přímo k vám na účet"
                  ].map((feature, idx) => (
                    <div key={idx} className="group flex items-center gap-4 p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-purple-500/40 hover:bg-gray-800/80 transition-all">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
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
