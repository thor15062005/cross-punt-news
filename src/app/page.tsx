import Link from 'next/link';
import { featuredArticles } from '@/lib/content';

export default function HomePage() {
  const [lead, ...rest] = featuredArticles;

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
            <Link href="/keystatic">Keystatic</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-shell">
            <div>
              <p className="eyebrow">Media, technologie & urban life</p>
              <h1 className="display">Nieuws dat waarde toevoegt.</h1>
              <p className="lede">
                Cross Punt volgt de veranderingen in onze digitale samenleving: van AI en nieuwsproductie tot de lokale economie van vertrouwen.
              </p>
              <Link href="/articles" className="primary-action">Bekijk alle artikelen</Link>
            </div>
            <div className="hero-visual" aria-label="Nieuwsbeeld" />
          </div>
        </section>

        <section className="page-shell">
          <div className="container">
            <div className="section-header">
              <h2>Featured</h2>
              <Link href="/articles">Alle verhalen</Link>
            </div>

            <div className="grid grid-3">
              {rest.map((article) => (
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
        </section>

        <section className="page-shell">
          <div className="container">
            <div className="section-header">
              <h2>Vandaag bij Cross Punt</h2>
            </div>

            <div className="article-card">
              <div className="article-card-image" style={{ backgroundImage: `url(${lead.hero})` }} />
              <div className="article-card-body">
                <div className="meta">
                  <span>{lead.category}</span>
                  <span>{lead.publishedAt}</span>
                  <span>{lead.readTime} min</span>
                </div>
                <h3>
                  <Link href={`/articles/${lead.slug}`}>{lead.title}</Link>
                </h3>
                <p>{lead.excerpt}</p>
              </div>
            </div>
          </div>
        </section>
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
