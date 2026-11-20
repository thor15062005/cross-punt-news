import Link from 'next/link';
import { getArticles } from '@/lib/content';

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="brand" aria-label="Cross Punt home">
            <img src="/brand/logo.svg" alt="Cross Punt logo" className="brand-mark" />
            <span className="brand-text">Cross Punt</span>
          </Link>
          <nav className="site-nav" aria-label="Hoofdnavigatie">
            <Link href="/">Home</Link>
            <Link href="/articles">Artikelen</Link>
            <Link href="/about">Over ons</Link>
            {process.env.NODE_ENV === 'development' && <Link href="/keystatic">Keystatic</Link>}
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <div className="container">
          <div className="page-intro">
            <p className="eyebrow">Artikelen</p>
            <h1>Een overzicht van de laatste verhalen</h1>
            <p>Van AI en mediatransformatie tot de rol van data in lokale journalistiek: hier staan onze vaste thema's centraal.</p>
          </div>

          <div className="grid grid-3">
            {articles.map((article) => (
              <article key={article.slug} className="article-card">
                <div className="article-card-image" style={{ backgroundImage: `url(${article.hero})` }} />
                <div className="article-card-body">
                  <div className="meta">
                    <span>{article.category}</span>
                    <span>{article.publishedAt}</span>
                    <span>{article.readTime} min</span>
                  </div>
                  <h3>
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Cross Punt</span>
          <span>De toekomst van nieuws, lokaal en duidelijk.</span>
        </div>
      </footer>
    </>
  );
}
