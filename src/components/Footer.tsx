import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0f1e' }} className="border-t border-cyan-500/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Column 1 - Logo & Tagline */}
            <div className="md:col-span-1">
              <img
                src="/blue_hw.png"
                alt="HavranWeb logo"
                className="w-16 h-16 rounded-xl object-cover mb-4"
              />
              <h2 className="text-white font-bold text-lg mb-1">HavranWeb</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Moderní webové stránky na míru pro lokální podnikatele v Novém Jičíně a okolí.
              </p>
              {/* Social links */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a
                  href="https://www.instagram.com/havranweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn btn-instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.073-3.077.44-4.243 1.608C1.644 2.847 1.277 4.315 1.204 5.924 1.146 7.204 1.132 7.612 1.132 12c0 4.388.014 4.796.072 6.076.073 1.609.44 3.077 1.608 4.243 1.166 1.168 2.634 1.535 4.243 1.608 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.073 3.077-.44 4.243-1.608 1.168-1.166 1.535-2.634 1.608-4.243.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.609-.44-3.077-1.608-4.243C19.324 1.644 17.856 1.277 16.247 1.204 14.967 1.146 14.559 1.132 12 1.132zm0 5.838a5.03 5.03 0 1 0 0 10.06 5.03 5.03 0 0 0 0-10.06zm0 8.292a3.262 3.262 0 1 1 0-6.524 3.262 3.262 0 0 1 0 6.524zm5.23-8.491a1.175 1.175 0 1 1-2.35 0 1.175 1.175 0 0 1 2.35 0z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575590282039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn btn-facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block" />

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Služby</h3>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#22d3ee' }}></div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/service/websites" className="hover:text-cyan-400 transition">Web design</Link></li>
                <li><Link to="/service/seo" className="hover:text-cyan-400 transition">Lokální SEO</Link></li>
                <li><Link to="/service/eshops" className="hover:text-cyan-400 transition">E-shopy</Link></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Kontakt</h3>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#22d3ee' }}></div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>✉️</span>
                  <a href="mailto:tomashavran.pracovni@gmail.com" className="hover:text-cyan-400 transition">
                    tomashavran.pracovni@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>📞</span>
                  <a href="tel:+420770600944" className="hover:text-cyan-400 transition">
                    +420 770 600 944
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#22d3ee' }}>📍</span>
                  <span>Nový Jičín a okolí</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t py-4" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© 2026 HavranWeb. Všechna práva vyhrazena.</p>
            <div className="flex items-center gap-4">
              <Link to="/legal" className="hover:text-cyan-400 transition text-xs">Právní informace</Link>
              <Link to="/legal" className="hover:text-cyan-400 transition text-xs">Ochrana osobních údajů</Link>
            </div>
          </div>
        </div>
      </footer>
  );
}
