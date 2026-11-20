import Link from 'next/link';

export default function AboutPage() {
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
        <div className="container about-layout">
          <section className="panel">
            <p className="eyebrow">Over Cross Punt</p>
            <h1>Een nieuwsblad voor de mensen die de verandering zien aankomen.</h1>
            <p>
              Cross Punt onderzoekt hoe technologie, media en stedelijke leefbaarheid samenkomen. We combineren scherpe analyse met duidelijke verhalen over de dagelijkse realiteit van nieuws, data en digitale innovatie.
            </p>
            <p>
              Onze opdracht is eenvoudig: mensen helpen om complexe veranderingen te begrijpen zonder het verhaal te verliezen in jargon of hype. We kiezen voor begrijpelijke context, juiste redactie en een open blik op de samenleving.
            </p>
          </section>

          <aside className="panel">
            <p className="eyebrow">Ons uitgangspunt</p>
            <ul>
              <li>Vertrouwen door heldere context.</li>
              <li>Journalistiek met aandacht voor lokale impact.</li>
              <li>Transparantie over bronnen en keuzes.</li>
              <li>Openheid over AI-ondersteuning in de redactie.</li>
            </ul>
          </aside>
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
