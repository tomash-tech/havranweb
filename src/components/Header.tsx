import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="sticky top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/blue_hw.png" alt="HavranWeb" className="h-10 w-auto" />
          <span className="text-xl font-bold">HavranWeb</span>
        </Link>
        <div className="hidden md:flex gap-12">
          <a href="/#sluzby" className="text-gray-300 hover:text-white transition-colors font-medium">Služby</a>
          <Link to="/sluzby/webdesign" className="text-gray-300 hover:text-white transition-colors font-medium">Web design</Link>
          <Link to="/sluzby/seo" className="text-gray-300 hover:text-white transition-colors font-medium">Lokální SEO</Link>
          <Link to="/sluzby/eshopy" className="text-gray-300 hover:text-white transition-colors font-medium">E-shopy</Link>
          <Link to="/legal" className="text-gray-300 hover:text-white transition-colors font-medium">Legální</Link>
          <Link to="/blog" className="text-gray-300 hover:text-white transition-colors font-medium">Blog</Link>
          <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors font-medium">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
