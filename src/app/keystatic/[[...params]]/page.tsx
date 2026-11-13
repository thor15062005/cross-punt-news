import Link from 'next/link';

export default function KeystaticPage() {
  return (
    <main className="page-shell">
      <div className="container panel" style={{ maxWidth: 900 }}>
        <p className="eyebrow">Keystatic</p>
        <h1>Content studio</h1>
        <p>
          Deze omgeving is ingericht voor het beheren van artikelen in de repo. In lokale ontwikkeling wordt Keystatic met lokale opslag gebruikt, terwijl de productie-omgeving GitHub-authenticatie kan gebruiken.
        </p>
        <p>
          De content staat in <code>content/articles</code> en kan hier worden uitgebreid, bewerkt en gepubliceerd via de standaard Keystatic workflow.
        </p>
        <Link href="/articles" className="primary-action">Bekijk artikelen</Link>
      </div>
    </main>
  );
}
