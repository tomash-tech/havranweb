import { Link } from 'react-router-dom';
import { blogPosts, formatDate } from '../lib/blogPosts';
import { Clock, ArrowRight, Tag, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>
      {/* SEO meta - ideálně přidej přes react-helmet nebo přímo v index.html */}
      <title>Blog – HavranWeb | Tvorba webů, e-shopů a SEO</title>

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            <ArrowLeft size={15} /> Zpět na hlavní stránku
          </Link>
        </div>

        {/* Header */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            <span className="inline-block text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              HavranWeb Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tipy a znalosti<br />
              <span className="text-blue-400">pro váš byznys online</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              Píšeme o tvorbě webů, e-shopů a lokálním SEO. Prakticky, bez zbytečných keců.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-blue-400 text-xs font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                    <Tag size={11} />
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock size={13} />
                    {post.readTime} min čtení
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-5">
                  {post.description}
                </p>

                <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Číst článek <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
