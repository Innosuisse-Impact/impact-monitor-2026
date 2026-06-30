---
title: L'impact de l'encouragement d'Innosuisse
style: ../styles.css
toc: true
sidebar: true
---

```js
import { html } from "npm:htl";
import { draw_waffle, draw_bar } from "../functions.js"
import { df_waffle } from "../data.js"
```

<div style="background: rgb(6, 247, 218) no-repeat padding-box; min-height: 110px; max-width: 100%; padding-left: 40px; padding-top: 5px; padding-bottom: 5px;  margin-left: -48px; margin-top: -31px;">

# L'impact de l'encouragement d'Innosuisse 2023–2025
<p class="comment">Version 2.0, dernières modifications : 18 juin 2026</p>
</div>
<br>

Innosuisse accorde une grande importance à la présentation transparente de l'efficacité de l'encouragement de l'innovation en répondant aux deux questions suivantes :

* Quels sont les effets des fonds publics utilisés sur les entreprises, start-up et autres organisations ?
* Le transfert de savoir et de technologie entre les organisations et la recherche est-il renforcé et sous quelle forme ?

Les principaux résultats du suivi de l'impact sont brièvement résumés ci-dessous par offre d'encouragement. Dans la partie principale, les résultats sont présentés en détail et brièvement discutés.

## Financement des projets d'innovation

### Projets d'innovation avec partenaire chargé de la mise en valeur

Les projets d'innovation nationaux sont le principal instrument d'encouragement d'Innosuisse. Des entreprises et des organisations issues de l'économie et de la société coopèrent avec des partenaires de recherche afin de développer ensemble des produits, des services, des processus ou des modèles commerciaux innovants.
<div class="claims-wrapper">
  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les projets couvrent tout le spectre de l'innovation et aboutissent à de nouveaux produits, services et processus.</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_radikal_inkr", mode: "opposite" })}</div>
      <p>Les organisations bénéficiaires classent leurs projets en parts presque égales comme <span class="text-neutral-a">clairement incrémentaux</span> et <span class="text-neutral-b">clairement radicaux</span>.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_project_goals", mode: "opposite" })}</div>
      <p>Elles atteignent <span class="text-positive">pleinement ou dépassent même</span> leurs objectifs de projet, tandis qu'une faible part seulement ne les atteint <span class="text-negative">pas suffisamment</span>.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les résultats atteignent le marché.</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct2" })}</div>
      <p>Les innovations sont sur le marché à la fin du projet ou devraient l'être dans un délai d'un an.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct1" })}</div>
      <p>Trois ans plus tard, les innovations sont déjà mises en œuvre ou leur mise en œuvre est prévue dans les deux prochaines années.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les effets économiques sont manifestes.</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Emplois</div>
        <div class="figure__value">+ 18%</div>
        <div class="figure__title">Ventes</div>
        <div class="figure__value">+ 21%</div>
      </div>
      <p>Une étude scientifique indépendante du Centre de recherches conjoncturelles KOF (ETH Zurich) fournit pour la première fois des preuves causales de l'efficacité des projets d'innovation. Elle a comparé des entreprises soutenues avec des entreprises similaires n'ayant reçu aucune subvention. Sur une période de cinq ans, les entreprises soutenues ont créé en moyenne 18 % d'emplois supplémentaires et ont connu une croissance 21 % plus rapide.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Postes à plein temps</div>
        <div class="figure__value">+ 2.5</div>
      </div>
      <p>Le suivi de l'impact d'Innosuisse associe chaque projet achevé à 2,5 postes à plein temps supplémentaires en moyenne trois ans après l'achèvement.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Multiplicateur de<br>valeur ajoutée</div>
        <div class="figure__value">x4</div>
      </div>
      <p>EBP estime que chaque franc suisse de subvention génère environ quatre francs de valeur ajoutée dans les trois ans.</p>
    </div>
    <a class="claim__link" href="/fr/projets-entreprises-chercheurs">Vers les résultats détaillés<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Chèque d'innovation

Le chèque d'innovation offre aux PME et aux start-up un soutien à bas seuil. L'objectif est de réaliser des études de faisabilité et de marché ainsi que des études technologiques.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les PME entament une coopération structurée avec des partenaires de recherche</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_connection", mode: "single", rank: "pct1" })}</div>
      <p>Les PME travaillent pour la première fois avec un partenaire de recherche d'une haute école.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les résultats sont utiles et conduisent à la mise en œuvre d'innovations</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct1" })}</div>
      <p>Les PME poursuivent le développement de leur idée d'innovation après la fin du projet avec le même partenaire de recherche.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct2" })}</div>
      <p>Certaines déposent ou planifient concrètement un projet d'innovation Innosuisse complet dans un délai d'un an.</p>
    </div>
    <a class="claim__link" href="/fr/projets-entreprises-chercheurs#cheque-dinnovation">Vers les résultats détaillés<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Projets d'innovation sans partenaire chargé de la mise en valeur

Les projets d'innovation sans partenaire chargé de la mise en valeur visent à développer des connaissances scientifiques pour des projets à haut risque et à fort potentiel d'innovation en vue d'une application pratique et à faire les premiers pas vers la mise en œuvre.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les chercheurs font des pas vers la mise en œuvre</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Les projets testent avec succès la faisabilité de l'idée d'innovation. Des étapes concrètes de mise en œuvre deviennent possibles.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Les projets fournissent des résultats concluants pour la mise en œuvre.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les innovations seront mises en pratique à l'avenir.</h3>
            <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>Les innovations ont de fortes chances de présenter un potentiel à long terme pour une commercialisation.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Les chercheurs travaillent déjà avec des partenaires chargés de la mise en valeur potentiels.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Des chercheurs ont créé ou envisagent de créer une start-up.</p>
    </div>
    <a class="claim__link" href="/fr/projets-chercheurs">Vers les résultats détaillés <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE: Discovery

L'offre d'encouragement du Fonds national suisse (FNS) et d'Innosuisse vise à développer des résultats de recherche à l'interface entre la recherche fondamentale et la recherche appliquée pour en faire des projets scientifiquement excellents à fort potentiel d'innovation, et à créer les bases pour leur mise en œuvre.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les groupes de recherche font des pas vers la mise en œuvre</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Les projets ont testé la faisabilité.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Les projets fournissent des résultats concluants permettant d'entreprendre des étapes concrètes de mise en œuvre.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les projets Discovery sont également orientés vers l'application, mais la voie start-up joue un rôle secondaire</h3>
            <span class="claim__level">Outcome</span>
    </header>
        <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>Le projet sera très probablement commercialisé.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Les groupes de recherche travaillent avec des partenaires chargés de la mise en valeur potentiels.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Les groupes de recherche ont réalisé ou envisagent la création d'une start-up ou d'un spin-off.</p>
    </div>
    <a class="claim__link" href="/fr/projets-chercheurs#bridge-discovery">Vers les résultats détaillés <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE: Proof of Concept

BRIDGE Proof of Concept offre aux chercheurs un an de soutien pour mener les résultats de recherche vers la maturité commerciale en les orientant vers des applications pratiques et pour préparer une carrière en dehors de la recherche et des hautes écoles.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Création de start-up issues de la recherche</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col"><div class="figure__value">69%</div></div>
      <p>Des chercheurs créent une start-up ou un spin-off (start-up avec licence de propriété intellectuelle formelle) après avoir bénéficié de l'encouragement.</p>
    </div>
    <a class="claim__link" href="/fr/projets-chercheurs#bridge-proof-of-concept">Vers les résultats détaillés <span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Conseil et mise en réseau

<div class="claims-wrapper">

### Innovation Booster

Dans le cadre des Innovation Booster thématiques, des idées d'innovation nouvelles et radicales sont développées dans un processus d'innovation ouvert et basé sur le travail en réseau. L'accent est mis sur la phase initiale de la recherche expérimentale d'idées et du test des idées. Les idées d'innovation prometteuses doivent être poursuivies dans le cadre de projets.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les aptitudes et compétences des participants sont renforcées</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_capabilities", mode: "single", rank: "pct1" })}</div>
      <p>Les personnes interrogées confirment que leur participation à un Innovation Booster leur a permis d'améliorer leurs capacités et leurs compétences en matière de développement et de test d'idées radicales.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les idées d'innovation sont mises en œuvre</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_continued", mode: "single", rank: "pct1" })}</div>
      <p>Les idées d'innovation sont poursuivies, souvent avec de nouvelles approches. Cela se traduit par une moyenne de 26 projets d'innovation par an chez Innosuisse.</p>
    </div>
    <a class="claim__link" href="/fr/conseil-et-reseaux">Vers les résultats détaillés<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Start-up Coaching

Le coaching soutient les start-up ayant des idées commerciales innovantes et basées sur la science grâce à un accompagnement personnalisé dans différentes phases de création. L'offre d'encouragement se divise en trois offres coordonnées – Initial, Core et Scale-up Coaching. Les start-up ont la possibilité de participer à des camps internationaux et à des salons internationaux importants. Les résultats du suivi de l'impact concernent le Start-up Core Coaching.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Le Core Coaching apporte une valeur ajoutée aux start-up</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "scc_support", mode: "single", rank: "pct1" })}</div>
      <p>Les start-up confirment que le Core Coaching a apporté une contribution significative dans au moins un domaine thématique central pour elles. La part des start-up dont les attentes ont été majoritairement satisfaites tout au long du processus de coaching est encore légèrement plus élevée.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Les start-up en coaching lèvent avec succès des capitaux</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct1" })}
      </div>
      <p>Les start-up ont réussi à acquérir du capital-risque avant la fin du coaching.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct2" })}
      </div>
      <p>Certaines start-up ont déjà levé plus de 5 millions de francs au cours de cette période. Les deux tiers ont bénéficié d'un soutien significatif pour la levée de fonds dans le cadre du Core Coaching.</p>
    </div>
    <a class="claim__link" href="/fr/conseil-et-reseaux">Vers les résultats détaillés<span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Structure du rapport
* Le chapitre [Bases méthodologiques](/fr/bases-methodologiques) explique l'intégration et la conception du suivi de l'impact.
* Le chapitre [Offres d'encouragement et contenus](/fr/offres-dencouragement-et-contenus) montre dans quelle mesure le monitoring couvre les instruments d'Innosuisse. Les [résultats comparatifs](/fr/resultats-comparatifs) permettent de comparer les offres d'encouragement entre elles.
* Ensuite, les résultats du suivi de l'impact sont présentés et expliqués dans un chapitre par offre d'encouragement.
