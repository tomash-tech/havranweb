import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

const cities = [
  {
    name: "Nový Jičín",
    desc: "Hlavní oblast působení HavranWeb. Tvorba webů, e-shopů a lokální SEO pro podnikatele v Novém Jičíně.",
    services: [
      { label: "Webdesign Nový Jičín", url: "/lokality/tvorba-webovych-stranek-novy-jicin" },
      { label: "SEO Nový Jičín", url: "/lokality/seo-novy-jicin" },
      { label: "E-shop Nový Jičín", url: "/lokality/tvorba-eshopu-novy-jicin" },
    ],
    highlight: true,
  },
];

export default function Lokality() {
  useEffect(() => {
    document.title = 'Lokality – HavranWeb | Webdesign a SEO v okolí Nového Jičína';
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Tvorba webových stránek a lokální SEO pro podnikatele v Novém Jičíně a okolí. Vyberte své město a zjistěte více.');
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://havranweb.cz/lokality');
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-600/15 to-transparent blur-[100px] -z-10 rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Lokality</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Kde působíme</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pomáháme podnikatelům v Novém Jičíně a okolí získat zákazníky online. Vyberte své město a zjistěte více.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Cities */}
        <section className="py-16 px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Města</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-10" />
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {cities.map((city, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className={`flex flex-col h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                    city.highlight
                      ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/20'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500'
                  }`}>
                    {city.highlight && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full w-fit mb-4">
                        Hlavní oblast
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin size={20} className="text-blue-400 shrink-0" />
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{city.desc}</p>
                    <ul className="space-y-3">
                      {city.services.map((service, i) => (
                        <li key={i}>
                          <Link
                            to={service.url}
                            className={`inline-flex items-center justify-between w-full gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                              city.highlight
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:scale-105'
                                : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                            }`}
                          >
                            {service.label} <ArrowRight size={15} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}

              {/* Placeholder – další města brzy */}
              <ScrollReveal delay={100}>
                <div className="flex flex-col items-center justify-center h-full rounded-2xl border border-dashed border-gray-700 p-8 text-center min-h-[200px]">
                  <MapPin size={32} className="text-gray-600 mb-3" />
                  <p className="text-gray-500 font-medium">Další města brzy</p>
                  <p className="text-gray-600 text-sm mt-1">Kopřivnice, Příbor, Fulnek...</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
