import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPost, blogPosts, formatDate } from '../lib/blogPosts';
import { Clock, ArrowLeft, Tag, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

// Jednoduchý Markdown renderer (bez externí knihovny)
function renderMarkdown(content: string): string {
  return content
    .trim()
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">$1</a>')
    // Lists
    .replace(/^- (.+)$/gm, '<li class="flex gap-2 items-start"><span class="text-blue-400 mt-1.5 shrink-0">•</span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>')
    // Paragraphs (prázdný řádek = nový odstavec)
    .split(/\n\n+/)
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<ul')) return block;
      if (block.trim() === '') return '';
      return `<p class="text-gray-300 leading-relaxed">${block.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n');
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');

  if (!post) return <Navigate to="/blog" replace />;

  // Najdi další článek
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || blogPosts[0];

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Back button */}
        <div className="max-w-3xl mx-auto px-6 pt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            <ArrowLeft size={15} /> Zpět na blog
          </Link>
        </div>

        {/* Article header */}
        <article className="max-w-3xl mx-auto px-6 pt-10 pb-20">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
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

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {post.description}
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent" />
          </header>

          {/* Article content */}
          <div
            className="prose-custom space-y-4"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Potřebujete web nebo SEO?
            </h3>
            <p className="text-gray-400 mb-6">
              Ozvěte se nám – rádi vám poradíme co by vašemu byznysu pomohlo nejvíc.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              Kontaktovat HavranWeb <ArrowRight size={16} />
            </Link>
          </div>

          {/* Next article */}
          {nextPost && nextPost.slug !== slug && (
            <div className="mt-12">
              <p className="text-gray-500 text-sm mb-3 uppercase tracking-widest">Další článek</p>
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-between bg-white/5 hover:bg-white/8 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <span className="text-blue-400 text-xs">{nextPost.category}</span>
                  <h4 className="text-white font-semibold mt-1 group-hover:text-blue-300 transition-colors">
                    {nextPost.title}
                  </h4>
                </div>
                <ArrowRight size={20} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
