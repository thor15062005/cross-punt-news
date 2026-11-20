import Link from 'next/link';
import type { Metadata } from 'next';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import { getArticles, getArticleBySlug } from '@/lib/content';

export async function generateStaticParams() {
  return (await getArticles()).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artikel niet gevonden'
    };
  }

  return {
    title: `${article.title} | Cross Punt`,
    description: article.excerpt
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="page-shell">
        <div className="container">
          <h1>Artikel niet gevonden</h1>
          <Link href="/articles" className="primary-action">Terug naar artikelen</Link>
        </div>
      </main>
    );
  }

  const { node } = await article.content();

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

      <main className="article-page">
        <article className="container article-content">
          <div className="article-header">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <div className="meta">
              <span>{article.author}</span>
              <span>{article.publishedAt}</span>
              <span>{article.readTime} min</span>
            </div>
          </div>

          <div className="article-hero" style={{ backgroundImage: `url(${article.hero})` }} />

          {Markdoc.renderers.react(Markdoc.transform(node), React)}
        </article>
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
