import type { CampsiteConfig } from "../types";

const IMG = "/campsites/inselcamp";

const inselcamp: CampsiteConfig = {
  name: "Inselcamping Unterach",
  shortName: "Inselcamp",
  slug: "inselcamp",
  ort: "Unterach am Attersee",
  region: "Oberösterreich",
  brandKind: "Camping am Attersee",
  see: "Attersee",
  regionLong: "Salzkammergut · Attersee · Oberösterreich",

  heroVariant: "center",

  claim: "Dein Sommer auf der Halbinsel am Attersee",
  claimEmphasis: "auf der Halbinsel",
  intro:
    "Direkt am Südufer des Attersees, eingebettet zwischen Schafberg und Höllengebirge, liegt unsere großzügige, parkähnliche Anlage — mittendurch fließt die Seeache, und bis ins Ortszentrum von Unterach sind es nur wenige Gehminuten.",

  logo: { src: `${IMG}/logo-b4b3b7037b.png`, alt: "Inselcamping Unterach Logo" },

  statement: {
    text: "Seit 1952 fließt die Seeache mitten durch den Platz — und macht aus einem Stück Attersee-Ufer eine kleine Insel.",
    emphasis: "eine kleine Insel",
  },

  pillars: [
    {
      title: "Mitten am Attersee",
      text: "Eigene Badewiese mit Holzliegen, Badesteg und Umkleidekabinen — das glasklare Attersee-Wasser ist nur wenige Schritte entfernt.",
      image: { src: `${IMG}/gallery-6448b7cc5f.webp`, alt: "Badewiese mit Badesteg am Attersee, Inselcamping Unterach" },
    },
    {
      title: "Park unter alten Bäumen",
      text: "Parkähnliche Anlage ohne enge Parzellen — viel Grün, Schatten und Bergblick auf Schafberg und Höllengebirge.",
      image: { src: `${IMG}/gallery-53033d34b8.webp`, alt: "Wiesenstellplätze unter Bäumen mit Bergblick am Inselcamping Unterach" },
    },
    {
      title: "Die Seeache als Insel",
      text: "Die Seeache fließt mitten durch den Platz — heute eine Halbinsel mit eigenem Fischwasser und kleiner Holzbrücke.",
      image: { src: `${IMG}/gallery-291c0c91cb.webp`, alt: "Holzbrücke über die Seeache am Inselcamping Unterach" },
    },
  ],

  usps: ["Direkt am Attersee", "Eigenes Fischwasser", "Familiär seit 1952", "Hunde willkommen", "GRATIS WLAN am Platz"],

  trust: {
    heading: "Seit 1952 in Familienhand",
    headingEmphasis: "Familienhand",
    intro:
      "Drei Generationen führen den Platz mit derselben Idee wie zu Beginn: viel Grün, kurze Wege zum Wasser und ehrliche Ruhe — ein Ort für Familien und alle, die Erholung am See suchen.",
  },

  awards: [],

  saison: { von: "Termine", bis: "auf Anfrage" },

  hero: {
    aerial: { src: `${IMG}/gallery-ebc38745de.webp`, alt: "Inselcamping Unterach: Wiese, Attersee und Höllengebirge" },
  },

  camping: {
    heading: "Alles, was dein Campingtag braucht",
    intro:
      "Vom ebenen Wiesenplatz bis zum Badesteg: 100 Touristenstellplätze, gepflegte Sanitärgebäude und kurze Wege zu Wasser, Kiosk und Rezeption.",
    features: [
      {
        title: "100 Stellplätze ohne Parzellen",
        text: "100 Touristenstellplätze auf ebener Wiese ohne enge Parzellierung — nur die begehrten Seeplätze sind fix eingeteilt.",
        image: { src: `${IMG}/gallery-9a758909d5.webp`, alt: "Wiesenstellplätze am Inselcamping Unterach" },
      },
      {
        title: "Zwei Sanitärgebäude",
        text: "Zwei gepflegte Sanitärhäuser mit Einzelwaschkabinen, Föhn und Babywickeltisch — sauber und nah an jedem Stellplatz.",
        image: { src: `${IMG}/gallery-b38996fc39.webp`, alt: "Sanitärgebäude mit Einzelwaschkabinen am Inselcamping Unterach" },
      },
      {
        title: "Warme Duschen & Waschraum",
        text: "Moderne Duschen, dazu Waschmaschine, Wäschetrockner und ein eigener Waschraum für die Handwäsche mit Wäscheschleuder.",
        image: { src: `${IMG}/gallery-1eb2b81cae.webp`, alt: "Moderne Duschen im Sanitärgebäude des Inselcamping Unterach" },
      },
      {
        title: "Dein Hund campt mit",
        text: "Vierbeiner sind willkommen und dürfen in der Seeache schwimmen und plantschen — nur Badewiese und Spielecke bleiben hundefrei.",
        image: { src: `${IMG}/gallery-8cccb263ed.webp`, alt: "Hund in der Seeache am Inselcamping Unterach" },
      },
      {
        title: "Eigenes Fischwasser",
        text: "Die Seeache mitten durch den Platz ist dein eigenes Fischwasser — Forelle, Laube, Näsling und Aal gehen hier an die Angel.",
        image: { src: `${IMG}/gallery-8c002e3298.webp`, alt: "Forellen im glasklaren Wasser der Seeache am Inselcamping Unterach" },
      },
      {
        title: "Seekajaks zu mieten",
        text: "Direkt am Platz kannst du Seekajaks ausleihen und vom Ufer aus zu einer Runde über den ruhigen Attersee starten.",
        image: { src: `${IMG}/gallery-0124762f06.webp`, alt: "Zwei Paddler im Seekajak auf dem türkisen Attersee bei Unterach" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Freizeit am Attersee",
    intro:
      "Wandern, Fischen, Paddeln oder einfach den Sternenhimmel anschauen — rund um Unterach liegt das ganze Salzkammergut vor dir.",
    items: [
      {
        title: "Wandern zum Egelsee",
        text: "Familienwanderung zum stillen Egelsee, Themenweg Klimt am Attersee und Gipfeltouren bis auf den Schafberg.",
        image: { src: `${IMG}/gallery-403c58f057.webp`, alt: "Der stille Egelsee bei Unterach am Attersee" },
      },
      {
        title: "Fischen in der Seeache",
        text: "Petri Heil ab 1. Mai: eigenes Fischwasser direkt am Platz, der Attersee gibt schon ab 1. April Fische frei.",
        image: { src: `${IMG}/gallery-3fae4f95a0.webp`, alt: "Angler mit Hecht an der Seeache am Inselcamping Unterach" },
      },
      {
        title: "Seekajak am Attersee",
        text: "Mühelos über die glatte Wasserfläche gleiten und einsame Buchten erkunden — Kurse und Touren in der Region buchbar.",
        image: { src: `${IMG}/gallery-cdbf17d4f5.webp`, alt: "Seekajaktour auf dem Wasser bei Unterach am Attersee" },
      },
      {
        title: "Sternenpark Salzkammergut",
        text: "Der erste zertifizierte Sternenpark Österreichs liegt direkt vor der Tür — abends wird der Himmel über dem Attersee zur Bühne.",
        image: { src: `${IMG}/gallery-7322ed70b2.webp`, alt: "Sternenhimmel über dem Attersee im Sternenpark Salzkammergut" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Attersee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn (Abfahrt Seewalchen oder Mondsee) am Seeufer entlang nach Unterach — der Platz liegt nahe dem Ortszentrum.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Vöcklamarkt oder Attnang-Puchheim, weiter mit dem Regionalbus an den Attersee; eine Abholung organisieren wir auf Anfrage.",
      },
      {
        title: "Flughäfen",
        text: "Salzburg ist rund 50 Minuten, Linz etwa eine Stunde entfernt — beide bequem über die A1 erreichbar.",
      },
    ],
  },

  galerie: {
    heading: "Bilder vom Inselcamp",
    headingEmphasis: "Inselcamp",
    intro: "Wasser, Wiese und ein Hauch Nostalgie — ein paar Eindrücke vom Platz und aus der Region rund um Unterach.",
    tag: "Attersee · Salzkammergut",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-291a99663a.webp`, alt: "Blick auf den türkisen Attersee bei Unterach" },
      { src: `${IMG}/gallery-63ce807b7c.webp`, alt: "Unterach am Attersee in alten Zeiten, vom See aus gesehen" },
      { src: `${IMG}/gallery-d210e5ed58.webp`, alt: "Hund auf der Wiese am Inselcamping Unterach" },
      { src: `${IMG}/gallery-1c5386d589.webp`, alt: "Sommertag an der Seeache am Inselcamping Unterach" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Wasser",
    headingEmphasis: "am Wasser",
    intro: "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit am Inselcamp.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise pro Nacht für 2 Personen inkl. Strom, zzgl. Ortstaxe — auf der Website sind keine Preise angegeben, bitte bestätige sie mit uns. Hinweis: Die Saison 2026 bleibt geschlossen — Informationen zur Wiedereröffnung unter inselcamp.at.",
    highlight: {
      title: "Eigenes Fischwasser",
      text: "Angeln ab 1. Mai direkt in der Seeache — die nötigen Infos gibt es an der Rezeption.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 9 },
      { id: "seeplatz", label: "Seeplatz", perNight: 42, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 27, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    tel: "+43 7665 8311",
    telHref: "tel:+4376658311",
    mail: "camping@inselcamp.at",
    facebook: "https://www.facebook.com/inselcamping.unterach",
    adresse: "Elisabethallee 3 · 4866 Unterach am Attersee · Österreich",
    coords: { lat: 47.801789, lng: 13.482741 },
  },

  story: {
    kicker: "Seit 1952",
    heading: "Drei Generationen am Attersee",
    intro:
      "Was als Idee mit einem einzigen Zelt begann, ist heute ein Stück Familiengeschichte am Südufer des Attersees.",
    chapters: [
      {
        no: "01",
        kicker: "1952",
        title: "Eine Idee mit einem Zelt",
        text: "Marianne und Josef Henkel stellten auf ihrem Grund am Attersee ein kleines Zelt auf, um vorbeifahrende Gäste aufmerksam zu machen — der erste Meilenstein für Inselcamping.",
        image: { src: `${IMG}/gallery-e9cc79f1cd.webp`, alt: "Historische Aufnahme: Zelte an der Seeache am Inselcamping Unterach" },
      },
      {
        no: "02",
        kicker: "1978",
        title: "Vom Bach zur Halbinsel",
        text: "Tochter Luise Meindl baute den Platz aus: Strom auf dem ganzen Gelände, zwei Sanitärgebäude, Rezeption und Kiosk. Bis 1984 floss ein Bach zur Insel — seither ist es eine Halbinsel.",
        image: { src: `${IMG}/gallery-f551325011.webp`, alt: "Historische Aufnahme: Wohnwagen und Familie am Inselcamping Unterach" },
      },
      {
        no: "03",
        kicker: "Heute",
        title: "Die dritte Generation",
        text: "Marie-Luise Sperr führt den Platz im Sinne der Großeltern und der Mutter weiter — und mit Marie-Christin steht die vierte Generation bereits in den Startlöchern.",
        image: { src: `${IMG}/gallery-bce588d14b.webp`, alt: "Historische Aufnahme vom Campingleben am Inselcamping Unterach" },
      },
    ],
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Geschichte", href: "#story" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default inselcamp;
