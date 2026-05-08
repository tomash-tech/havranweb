import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Služby', href: '/#sluzby', external: true },
    { label: 'Web design', href: '/sluzby/webdesign' },
    { label: 'Lokální SEO', href: '/sluzby/seo' },
    { label: 'E-shopy', href: '/sluzby/eshopy' },
    { label: 'Ceník', href: '/cenik' },
    { label: 'Lokality', href: '/lokality' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Legální', href: '/legal' },
  ];

  return (
    <nav className="sticky top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/blue_hw.png" alt="HavranWeb" className="h-10 w-auto" />
          <span className="text-xl font-bold text-white">HavranWeb</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 flex-wrap">
          {links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/98 border-t border-gray-800 px-6 py-4">
          <div className="flex flex-col gap-1">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-3 border-b border-gray-800/50 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-3 border-b border-gray-800/50 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
