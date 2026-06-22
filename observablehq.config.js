// See https://observablehq.com/framework/config for documentation.

// Base path for GitHub Pages deployment.
// Set to the repository name, e.g. "/impact-monitor-2025".
// Use "" for root-domain or custom-domain deployments.
const base = "/impact-monitor-2025";

// Page equivalence map: maps each page slug to all three language variants.
// Used by the language switcher to navigate to the same conceptual page.
const pageSlugMap = [
  { de: "/de/index",                          en: "/en/index",                                         fr: "/fr/index" },
  { de: "/de/methodische-grundlagen",         en: "/en/methodology",                                   fr: "/fr/bases-methodologiques" },
  { de: "/de/foerderangebote-und-inhalte",    en: "/en/support-offers-and-content",                    fr: "/fr/offres-dencouragement-et-contenus" },
  { de: "/de/vergleichende-ergebnisse",       en: "/en/comparative-results",                           fr: "/fr/resultats-comparatifs" },
  { de: "/de/projekte-unternehmen-forschende",en: "/en/projects-companies-researchers",                fr: "/fr/projets-entreprises-chercheurs" },
  { de: "/de/projekte-forschende",            en: "/en/projects-researchers",                          fr: "/fr/projets-chercheurs" },
  { de: "/de/beratung-und-netzwerk",           en: "/en/advisory-and-networks",                         fr: "/fr/conseil-et-reseaux" },
  { de: "/de/editorial",                      en: "/en/editorial",                                     fr: "/fr/editorial" }
];

function getLang(path) {
  return path.startsWith("/de/") ? "de" : path.startsWith("/fr/") ? "fr" : "en";
}

function getPageLinks(path) {
  const basePath = path.split("#")[0];
  const match = pageSlugMap.find(m => Object.values(m).includes(basePath));
  const links = match ?? { de: "/de/", en: "/en/", fr: "/fr/" };
  return { de: links.de, en: links.en, fr: links.fr };
}

export default {
  base,
  title: "Impact monitor",

  // Two-level navigation: top-level sections are content groups (or single pages),
  // all at the same level regardless of language. Non-active language items are
  // hidden by CSS in head({path}) using href-based selectors.
  pages: [
    // === DEUTSCH ===
    { name: "Zusammenfassung", path: "/de/index", pager: "de" },
    { name: "Förderangebote und Inhalte",                  path: "/de/foerderangebote-und-inhalte" },
    { name: "Vergleichende Ergebnisse",                    path: "/de/vergleichende-ergebnisse" },
    { name: "Methodische Grundlagen",                      path: "/de/methodische-grundlagen", pager: "de" },
    { name: "Förderung von Innovationsprojekten", pager: "de", pages: [
      { name: "Innovationsprojekte mit Umsetzungspartner",   path: "/de/projekte-unternehmen-forschende" },
      { name: "Innovationsscheck",                           path: "/de/projekte-unternehmen-forschende#innovationsscheck" },
      { name: "Innovationsprojekte ohne Umsetzungspartner",  path: "/de/projekte-forschende" },
      { name: "BRIDGE: Discovery",                           path: "/de/projekte-forschende#bridge-discovery" },
      { name: "BRIDGE: Proof of Concept",                    path: "/de/projekte-forschende#bridge-proof-of-concept" }
    ]},
    { name: "Beratung und Vernetzung", pager: "de", pages: [
      { name: "Innovation Booster",     path: "/de/beratung-und-netzwerk" },
      { name: "Start-up Core Coaching", path: "/de/beratung-und-netzwerk#innovationsmanagement-und-beratung" }
    ]},

    // === ENGLISH ===
    { name: "Summary",               path: "/en/index",                     pager: "en" },
    { name: "Support offers and content",  path: "/en/support-offers-and-content" },
    { name: "Comparative results",         path: "/en/comparative-results" },
    { name: "Methodology",                path: "/en/methodology",               pager: "en" },
    { name: "Funding of Innovation Projects", pager: "en", pages: [
      { name: "Innovation projects with implementation partners",   path: "/en/projects-companies-researchers" },
      { name: "Innovation cheques",                                path: "/en/projects-companies-researchers#innovation-cheques" },
      { name: "Innovation projects without implementation partner", path: "/en/projects-researchers" },
      { name: "BRIDGE: Discovery",                                  path: "/en/projects-researchers#bridge-discovery" },
      { name: "BRIDGE: Proof of Concept",                           path: "/en/projects-researchers#bridge-proof-of-concept" }
    ]},
    { name: "Advice and Networking", pager: "en", pages: [
      { name: "Innovation Booster",     path: "/en/advisory-and-networks" },
      { name: "Start-up Core Coaching", path: "/en/advisory-and-networks#innovation-management-and-advisory" }
    ]},

    // === FRANÇAIS ===
    { name: "Résumé",                    path: "/fr/index",                         pager: "fr" },
    { name: "Offres d'encouragement et contenus", path: "/fr/offres-dencouragement-et-contenus" },
    { name: "Résultats comparatifs",              path: "/fr/resultats-comparatifs" },
    { name: "Bases méthodologiques",           path: "/fr/bases-methodologiques",         pager: "fr" },
    { name: "Encouragement des projets d'innovation", pager: "fr", pages: [
      { name: "Projets d'innovation avec partenaire", path: "/fr/projets-entreprises-chercheurs" },
      { name: "Chèque innovation",                    path: "/fr/projets-entreprises-chercheurs#cheque-d-innovation" },
      { name: "Projets d'innovation sans partenaire", path: "/fr/projets-chercheurs" },
      { name: "BRIDGE: Discovery",                    path: "/fr/projets-chercheurs#bridge-discovery" },
      { name: "BRIDGE: Proof of Concept",             path: "/fr/projets-chercheurs#bridge-proof-of-concept" }
    ]},
    { name: "Conseil et mise en réseau", pager: "fr", pages: [
      { name: "Innovation Booster",     path: "/fr/conseil-et-reseaux" },
      { name: "Start-up Core Coaching", path: "/fr/conseil-et-reseaux#gestion-de-linnovation-et-conseil" }
    ]}
  ],

  head({path}) {
    const lang = getLang(path);
    const hide = ["de", "en", "fr"]
  .filter(l => l !== lang)
  .flatMap(l => [
    `#observablehq-sidebar li:has(a[href*="/${l}/"])`,
    `#observablehq-sidebar ol:has(a[href*="/${l}/"])`,
    `#observablehq-sidebar details:has(a[href*="/${l}/"])`,
    `#observablehq-sidebar section:has(a[href*="/${l}/"])`
  ])
  .join(",") + "{display:none}";
    return `<link rel="icon" href="/images/swiss-logo-flag.svg" type="image/svg+xml">`
         + `<script>document.documentElement.lang="${lang}";</script>`
         + `<style>${hide}</style>`;
  },

  header({path}) {
    const lang = getLang(path);
    const links = getPageLinks(path);
    const agencyName = lang === "de"
      ? "Schweizerische Agentur für Innovationsförderung"
      : lang === "fr"
      ? "Agence suisse pour l'encouragement de l'innovation"
      : "Swiss Innovation Agency";

    const deSty = lang === "de" ? " font-weight:bold; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; text-decoration-color: var(--color-accent);" : "";
    const enSty = lang === "en" ? " font-weight:bold; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; text-decoration-color: var(--color-accent);" : "";
    const frSty = lang === "fr" ? " font-weight:bold; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; text-decoration-color: var(--color-accent);" : "";

    return `<div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; padding:0 1rem; height:100%; gap:1rem; width:100%;">
  <a href="https://www.innosuisse.admin.ch" class="logo" id="header-logo-container" aria-label="Open Homepage" style="display:flex; align-items:center; gap:0.5rem; text-decoration:none; color:inherit; flex-shrink:0;">
    <img src="/images/swiss-logo.svg" class="logo_flag" style="height:40px;" alt="Swiss cross logo">
    <span style="font-size:0.8rem; line-height:1.25; color:#000000;">Innosuisse<br>${agencyName}</span>
  </a>
  <nav style="display:flex; gap:0.25rem; font-size:0.85rem; flex-shrink:0; margin-left:auto;">
    <a href="${links.de}" style="padding:3px 8px; text-decoration:none; color:#333333;${deSty}">DE</a>
        <a href="${links.fr}" style="padding:3px 8px; text-decoration:none; color:#333333;${frSty}">FR</a>
    <a href="${links.en}" style="padding:3px 8px; text-decoration:none; color:#333333;${enSty}">EN</a>
  </nav>
</div>`;
  },

  footer({path}) {
    const lang = getLang(path);
    const title = lang === "de" ? "Wirkungsmonitor" : lang === "fr" ? "Moniteur d'impact" : "Impact monitor";
    return `${title} — Built with <a href="https://observablehq.com/framework">Observable Framework</a>`;
  },

  root: "src"
};
