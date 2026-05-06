import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

export default function Contact() {
 useEffect(() => {
  document.title = 'Kontakt – HavranWeb';
document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Kontaktujte HavranWeb – tvorba webů a SEO v Novém Jičíně. Email, telefon nebo kontaktní formulář.');
 }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        <Header />

        <section className="min-h-screen px-6 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Kontakt</h1>
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
    </>
  );
}
