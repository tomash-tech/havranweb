import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

function Legal() {
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
            <Link to="/service/eshops" className="text-gray-300 hover:text-white transition-colors font-medium">E-shopy</Link>
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
            <div className="mb-16">
              <h1 className="text-6xl font-bold mb-6">Právní informace</h1>
              <p className="text-xl text-gray-300">Zde najdete všechny právní dokumenty a informace</p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-6">Nejde o podnikatelskou činost</h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>Vždy s vámi uzavřu DPP (Dohoda o provedení práce), což je legální dokument, který potvrzuje, že mě “najímáte” na například tvorbu webových stránek, nebo jinou službu, se kterou vám pomohu. 
</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-6">Co obsahuje DPP?</h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
<p>
Vaše Jméno a příjmení, IČO a Sídlo.

Mé Jméno a příjmení, Datum narození a Adresa bydliště.

Poté obsah a rozsah práce: Jakou práci pro vás vykonám a jak dlouho bude trvat.

Odměna: píše se kolik, kdy a jak mi za dokončení práce zaplatíte.

Poté už jen váš podpis, můj Podpis, podpis mého zákoného zástupce a datum </p>
                </div>
              </div>
            </ScrollReveal>

<ScrollReveal delay={150}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-6">Nezletilost</h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
<p>
Můžu toto dělat i když mi ještě nebylo 18 let? Ano. Jelikož jak už víte, tak se to řeší přes DPP, což znamená, že mě najímáte na provedení práce, to je v ČR legální od 14ti let (s podpisem zákonného zástupce).</p>
                </div>
              </div>
            </ScrollReveal>

            
            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-6">Kontaktní údaje</h2>
                <div className="text-gray-300 space-y-2">
                  <p><strong>Mé jméno:</strong> Tomáš Havran</p>
                  <p><strong>Email:</strong> tomashavran.pracovni@gmail.com</p>
                  <p><strong>Telefon:</strong> +420 770 600 944</p>                  
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2026 HavranWeb. Všechna práva vyhrazena.</p>
        <p>tomashavran.pracovni@gmail.com</p>
        <p>+420 770 600 944</p>
        <p>Nový Jičín</p>
        <p>Web design</p>
        <p>Lokální SEO</p>
        <p>E-shopy</p>
      </footer>
    </div>
  );
}

export default Legal;
