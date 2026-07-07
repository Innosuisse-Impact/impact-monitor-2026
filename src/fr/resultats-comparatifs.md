---
title: Résultats comparatifs
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_result, draw_innoart, draw_dn, draw_result_zf_legend} from "../functions.js"
import { df_zufrieden } from "../data.js"
```

# Résultats comparatifs des offres d'encouragement

## La satisfaction est élevée pour toutes les offres d'encouragement d'Innosuisse examinées
Les bénéficiaires de l'encouragement d'Innosuisse sont <span class="text-positive">satisfaits, voire très satisfaits</span>, de l'encouragement de l'innovation et de sa mise en œuvre. La part des instruments présentés ici est supérieure à 80 %, et pour le Start-up Core Coaching, elle dépasse les deux tiers. Seule une très faible proportion (≤ 5 %) n'est <span class="text-negative">clairement pas satisfaite</span> des instruments d'Innosuisse.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px;">
  ${draw_result_zf_legend()}
${draw_result(df_zufrieden,"Innovationsprojekte mit Umsetzungspartner", false, 35, width)}
${draw_result(df_zufrieden,"Innovationsscheck", false, 0, width)}
${draw_result(df_zufrieden,"Innovationsprojekte ohne Umsetzungspartner", false, 0, width)}
${draw_result(df_zufrieden,"BRIDGE Discovery", false, 0, width)}
${draw_result(df_zufrieden,"Innovation Booster", false, 0, width)}
${draw_result(df_zufrieden,"Start-up Core Coaching", false, 0, width)}
</div>

## Innosuisse encourage les innovations tant incrémentales que radicales

Parmi les projets d'innovation avec partenaires chargés de la mise en valeur et les chèques d'innovation, environ un quart des projets innovants poursuivent clairement des innovations incrémentales. Dans ce cas, l'objectif principal est de développer ou d'optimiser ce qui existe déjà (produits, services, processus, modèles commerciaux, etc.).

Les <span class="text-neutral-b">innovations radicales</span> (23 %) sont encouragées dans le cadre de la promotion de projets dans la même mesure que les <span class="text-neutral-a">innovations incrémentales</span>. Contrairement aux innovations incrémentales, les innovations radicales visent des innovations et des changements fondamentaux grâce à des idées et des technologies nouvelles, révolutionnaires ou radicales. Elles représentent au moins un quart des projets et des idées d'innovation pour tous les instruments, à l'exception des chèques d'innovation. Parmi les start-up accompagnées et les chercheurs des projets Discovery, environ la moitié ont pour ambition d'introduire des innovations radicales dans leur modèle d'entreprise, seule une minorité poursuivant clairement des innovations incrémentales.

<div>${draw_innoart("inkr_radikal", Math.min(width, 640), 250)}</div>
<p class="comment">
Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (1) innovations très incrémentales, (2) innovations incrémentales ou (5) innovations radicales, (6) innovations très radicales.
</p> 

## Les innovations peuvent avoir une forte influence sur les marchés

Les <span class="text-neutral-a">innovations disruptives</span> sont à distinguer de ces dernières.  Ici, ce n'est pas le degré de nouveauté technologique qui est au premier plan, mais l'impact révolutionnaire sur les marchés. Elles sont disruptives lorsqu'elles créent des marchés entièrement nouveaux avec de nouvelles règles du jeu et de nouveaux groupes cibles ou lorsqu'elles influencent fortement les marchés existants, par exemple par des innovations qui sont nouvelles pour les marchés à l'échelle internationale ou mondiale. Tant les innovations radicales qu'incrémentales peuvent être disruptives.

Parmi les projets d'innovation avec des partenaires chargés de la mise en valeur et les chèques d'innovation, environ un tiers des entreprises ont le potentiel de transformer le marché de manière disruptive. Parmi les start-up du programme Core Coaching, environ deux tiers des start-up poursuivent même des innovations disruptives avec le modèle commercial de l'entreprise fondée.

<div>${draw_innoart("disruptiv", Math.min(width, 380), 180)}</div>
<p class="comment">
Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (5) innovations de rupture, (6) innovations fortement disruptives.
</p>

## Innosuisse encourage la diversité de l'innovation
Le graphique suivant illustre également la diversité des formes d'innovation soutenues. Il arrive souvent que plusieurs innovations soient poursuivies simultanément, par exemple lorsqu'une innovation de produit est combinée à une innovation de modèle d'entreprise ou de processus.

<span class="text-cat-2">Les innovations de produits</span> constituent de loin la catégorie la plus importante. Les parts des <span class="text-cat-4">innovations de processus</span> et <span class="text-cat-3">en matière de services</span> se situent entre 23 % et 35 %. Les <span class="text-cat-1">innovations de modèles d'entreprise</span> sont les plus importantes pour les start-up par rapport aux autres instruments (17 %). Elles sont souvent associées à des aspects de la transformation numérique. Innosuisse encourage également les <span class="text-cat-5">innovations sociales</span>. Cependant, leur part est relativement faible.

La diversité des innovations est également le reflet du fait qu'Innosuisse encourage l'innovation basée sur la science de manière « bottom-up » et sans restriction thématique.

<div>
${draw_innoart("type_1", Math.min(width, 640), 180)}
${draw_innoart("type_2", Math.min(width, 482), 180)}
</div>

## La transformation numérique est un aspect central de l'encouragement de l'innovation
La numérisation vise à la fois les technologies numériques d'avenir (blockchain, robotique, informatique quantique, intelligence artificielle, etc.) et le développement de modèles d'entreprise numériques (logiciels/plateformes/infrastructure en tant que service, mégadonnées, etc.). Ces deux aspects sont d'une grande importance pour l'économie suisse. Les opportunités économiques et la concurrence en matière d'innovation sont extrêmement élevées dans ce domaine.

Environ la moitié des projets d'innovation soutenus par Innosuisse contribuent de manière significative à la transformation numérique de l'économie, grâce aux technologies numériques et/ou aux modèles d'entreprise numériques. L'application de nouvelles technologies numériques est plus importante que la mise en œuvre d'un modèle d'entreprise numérique. Pour les start-up en coaching, l'importance de la numérisation est encore plus significative.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("digital", "Innovationsprojekte mit Umsetzungspartner", true, 20, width)}
  ${draw_dn("digital", "Innovationsscheck", false, -8, width)}
  ${draw_dn("digital", "Innovationsprojekte ohne Umsetzungspartner", false, -8, width)}
  ${draw_dn("digital", "BRIDGE Discovery", false, -8, width)}
  ${draw_dn("digital", "Start-up Core Coaching", false, -8, width)}
</div>
<p class="comment">Question posée : le projet encouragé par Innosuisse repose-t-il sur de nouvelles technologies numériques ou sur de nouveaux modèles commerciaux numériques ? Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (5) fortement, (6) très fortement.</p>

## L'innovation a un rôle clé à jouer dans le développement de solutions durables
Les instruments d'encouragement permettent aux entreprises et aux organisations de tester à un stade précoce des approches et des technologies innovantes pour développer des solutions durables et de les mettre en œuvre, que ce soit au niveau national ou mondial. Innosuisse apporte ainsi une contribution essentielle et tournée vers l'avenir pour relever les défis mondiaux tels que l'efficacité énergétique et l'utilisation efficace des ressources, le changement climatique ou les questions sociales. L'encouragement de l'innovation est un moteur de la transformation vers une économie et une société durable.

Plus de la moitié des projets d'innovation soutenus montrent, lorsqu'ils sont mis en œuvre concrètement, qu'ils ont le potentiel de contribuer au développement durable, soit au développement durable environnemental, soit au développement durable social, soit aux deux. Pour les start-up en coaching, les proportions sont légèrement plus élevées.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("nachhaltig", "Innovationsprojekte mit Umsetzungspartner", true, 20, width)}
  ${draw_dn("nachhaltig", "Innovationsscheck", false, -8, width)}
  ${draw_dn("nachhaltig", "Innovationsprojekte ohne Umsetzungspartner", false, -8, width)}
  ${draw_dn("nachhaltig", "BRIDGE Discovery", false, -8, width)}
  ${draw_dn("nachhaltig", "Start-up Core Coaching", false, -8, width)}
</div>

<p class="comment">Question posée : le projet ou l'idée de projet encouragé par Innosuisse peut-il contribuer à la durabilité écologique et/ou sociale ? Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (4) contribution plutôt élevée, (5) contribution élevée, (6) contribution très élevée.</p>
