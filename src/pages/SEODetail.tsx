import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';

function SEODetail() {
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
              <div className="text-7xl mb-6">📈</div>
              <h1 className="text-6xl font-bold mb-6">Lokální SEO</h1>
              <p className="text-2xl text-gray-300 mb-8">Zvyšte vaši viditelnost v lokálních vyhledávačích</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 mb-16">
              <h2 className="text-3xl font-bold mb-6">O službě</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">SEO je optimalizace vašeho podniku pro vyhledávače jako Google, to znamená že když si někdo vyhledá váš obor ve vašem městě, zobrazíte se hned nahoře (viz foto dole), Proč je to důležité? když si někdo vyhledá npř. kadeřnictví v Novém Jičíně, 70% lidí rozklikne jeden ze 3 prvních zobrazených podniků, takže pokud tam jste vy tak vám to zajistí, že váš podnik najde spoustu nových zákazníků.</p>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <img src="/seo.png" alt="SEO výsledky" className="w-full rounded-2xl mb-16 border border-gray-700" />
          </ScrollReveal>


 <ScrollReveal delay={150}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 mb-16">
              <h2 className="text-3xl font-bold mb-6">Jak to funguje</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">Spoustu lidí si myslí že tohle funguje stejně jako reklamy, to ovšem není pravda, jde spíše o to co se děje na vašich webových stránkách, vašem Google buisness profilu (to je to co se zobrazí když si vás někdo vyhledá), a kde všude jsou vaše stránky zmíněny, tohle vše nastavím tak aby když to potom Google čte tak vás dá hned na začátek!              Pokud máte web ode mě Cena: 5000kč, pokud ne tak 8000kč. </p>

             
            </div>
          </ScrollReveal>
         
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
          </div>

          <div className="w-full">
            <ContactForm />
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

export default SEODetail;
