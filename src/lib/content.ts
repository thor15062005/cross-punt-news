export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: number;
  hero: string;
  content: Array<{ heading: string; body: string[] }>;
};

export const articles: Article[] = [
  {
    slug: 'de-robotten-van-het-nieuws',
    title: 'De robotten van het nieuws',
    excerpt: 'Een kijkje in de nieuwe redactieruimte waar AI assistenten de eerste rondes van onderzoek en samenvatting overnemen.',
    author: 'Naomi Veldhuis',
    category: 'Analyse',
    publishedAt: '2026-11-06',
    readTime: 6,
    hero: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'De redactieruimte is veranderd',
        body: [
          'De grote mediahouses hebben de afgelopen maanden een nieuwe routine opgebouwd: AI helpt met onderzoeksjargon, het verzamelen van bronnen en eerste concepten. Op de werkvloer is het resultaat niet meteen een bedreiging voor journalisten, maar wel een verschuiving in verantwoordelijkheid.',
          'Het voordeel is duidelijk: het werk gaat sneller, de eerste notities zijn niet langer handmatig opgebouwd en overzichten komen veel eerder beschikbaar. Dat schept ruimte voor meer context, meer factchecking en meer diepgang in de verhalen die echt laten zien waar een samenleving over praat.'
        ]
      },
      {
        heading: 'Meer snelheid, meer controle',
        body: [
          'De uitdaging is dat AI geen bronkritische intuïtie heeft. Het kan een verhaal sneller opbouwen, maar het kan ook overtuigend klinkende onjuiste samenvattingen produceren. Daarom blijft de druk op de redacteuren liggen: beoordelen, corrigeren en plaatsen in de juiste context.',
          'Dat maakt de rol van de journalist niet kleiner. Juist in het tijdperk van geautomatiseerde content wordt de menselijke filter belangrijker. Mensen moeten blijven bepalen wat relevant is, wat verifieerbaar is en wat niet meer voor publicatie geschikt is.'
        ]
      }
    ]
  },
  {
    slug: 'het-circulair-aanbod-van-het-beeld',
    title: 'Het circulaire aanbod van het beeld',
    excerpt: 'Onderzoekers en bedrijven zoeken manieren om lokale media-economieën te versterken zonder volledig afhankelijk te worden van grote platforms.',
    author: 'Jules Driessen',
    category: 'Onderzoek',
    publishedAt: '2026-11-04',
    readTime: 5,
    hero: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'De platformafhankelijkheid is te groot',
        body: [
          'Veel lokale mediabedrijven lijken te wachten op de volgende grote distributiecampagne, terwijl de echte vraag is hoe zij hun eigen publiek over meerdere kanalen kunnen benaderen. De nieuwe strategie is niet een totaal nieuwe app, maar een sterker samenstel van eigen site, mail, video en communitykanalen.',
          'Creëren in plaats van alleen publiceren is een terugkerend thema. Als een organisatie zelf zeggenschap heeft over de data en de relatie met de lezer, is de kans op duurzame groei veel groter.'
        ]
      },
      {
        heading: 'Een lokale economie van vertrouwen',
        body: [
          'Het opvallendste in de laatste ontwikkelingen is dat mensen niet alleen op zoek zijn naar nieuws, maar naar context. Ze willen weten wie er achter het verhaal staat, waarom een onderwerp nu relevant is en wat de invloed daarvan op hun dagelijkse leven is.',
          'Daarom laten de succesvolle mediaorganisaties hun verhalen terugkoppelen naar een vaste reeks waarden: onderscheid, openbaarmaking en transparantie. Die combinatie is de basis voor een circulaire media-economie die niet meer alleen via advertenties draait.'
        ]
      }
    ]
  },
  {
    slug: 'waarom-het-onderzoek-van-de-stad-nu-gaat',
    title: 'Waarom het onderzoek van de stad nu gaat',
    excerpt: 'Stadsredacties krijgen meer ruimte om lokale signalen te volgen en om op basis van publieke data te laten zien waar knelpunten ontstaan.',
    author: 'Lars Krommen',
    category: 'Nieuws',
    publishedAt: '2026-11-02',
    readTime: 4,
    hero: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Data als startpunt, notitie als verhaal',
        body: [
          'Open databestanden en gemeentelijke dashboards worden vaker gebruikt als aanleiding voor lokaal nieuws. Daarbij is het cruciaal dat een journalist niet alleen cijfers noemt, maar ook de mensen achter de cijfers zichtbaar maakt.',
          'In steden waar de infrastructuur onder druk staat, is die combinatie nieuwsonderzoek en mensenverhaal vaak veel effectiever dan een enkel feitenrapport. Het uitwerken van een contextueel verhaal geeft de lezer iets om mee te nemen.'
        ]
      },
      {
        heading: 'Een nieuwe standaard voor lokale journalistiek',
        body: [
          'Landelijke media kiezen vaak voor het grote verhaal. Maar de meeste veranderingen gebeuren dichtbij. De steden die de komende jaren het sterkst presteren, zijn waarschijnlijk diegene die lokale signalen sneller omzetten in heldere, stevig onderbouwde verhalen.',
          'Daarin zit de kwaliteit van de nieuwe journalistiek: kleine, relevante signalen omzetten in context voor mensen die dagelijks met dezelfde vraag leven.'
        ]
      }
    ]
  }
];

export const featuredArticles = articles.slice(0, 3);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
