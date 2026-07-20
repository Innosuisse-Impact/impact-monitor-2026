---
title: Projets de chercheurs
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { drawMiniPlot, draw_waffle, draw_results} from "../functions.js"
```

# Projets de chercheurs

## Projets d'innovation sans partenaire chargé de la mise en valeur
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner", false)}</div>
</div>

Les projets d'innovation sans partenaire chargé de la mise en valeur visent à transformer les découvertes scientifiques en solutions pratiques. Ils permettent aux chercheurs de développer des projets à haut risque et à fort potentiel d'innovation en vue de leur application et de faire les premiers pas vers leur mise en œuvre. La condition préalable à l'encouragement est un bénéfice potentiel clair pour l'économie ou la société ainsi que des possibilités de mise en œuvre pour une application ultérieure.

Les projets d'innovation sans partenaire chargé de la mise en valeur soutiennent ainsi des projets de recherche et d'innovation axés sur l'application et visent, à long terme, une mise en œuvre dans l'économie et la société.

### Des étapes réussies vers la mise en œuvre
Quatre projets d'innovation sur cinq ont testé leur faisabilité avec succès. La moitié des projets ont abouti à des résultats probants pour la prochaine étape de mise en œuvre et/ou ont de fortes chances d'introduire l'innovation sur le marché.

<div>${draw_results("Innovationsprojekte ohne Umsetzungspartner", false, 450, width)}</div>

### L'output scientifique est plus élevé que pour les projets avec des partenaires chargés de la mise en valeur
Les résultats scientifiques publiés sont des formes importantes de transfert de savoir et de technologie (TST). Ils servent à diffuser les résultats du projet dans la recherche et l'application et renforcent le TST. Les thèses sont une indication de la nouveauté et de la qualité de la recherche et du risque associé à la recherche de solutions (technologiques) pour la mise en œuvre. 

Par rapport aux projets d'innovation avec partenaire chargé de la mise en valeur, la part des résultats scientifiques publiés dans des revues spécialisées et la part des thèses de doctorat sont, comme on pouvait s'y attendre, nettement plus élevées. La part des projets interdisciplinaires est similaire, la part des projets transdisciplinaires est légèrement inférieure, car moins d'acteurs sont impliqués.
  <div class="chart-pair">
${draw_waffle("ipr_peer_review",-100)}
${draw_waffle("ipr_inter_trans",-100)}
</div>

### Les projets d'innovation sans partenaire chargé de la mise en valeur sont axés sur la recherche et la mise en œuvre.
Dans trois sur cinq projets, une collaboration avec des partenaires potentiels pour la mise en œuvre a déjà été engagée. Outre le transfert de savoir et de technologie vers des entreprises établies, les start-up et les spin-off issues de la recherche jouent un rôle important dans le TST. Dans 45 % des projets, un tel essaimage a déjà été réalisé ou est prévu.
<div>${draw_waffle("ipr_imppartner", -85)}</div>

### L'atteinte des objectifs est élevée dans le domaine de la recherche, mais plus faible dans le domaine de l'application et de la mise en œuvre.
Les objectifs de recherche sont entièrement atteints, voire dépassés, dans les deux tiers des projets financés. L'atteinte des objectifs en matière d'application est nettement plus faible. Cela peut indiquer des risques élevés pour la mise sur le marché, ou peut-être que davantage de temps et de ressources sont nécessaires pour développer des solutions, ou encore que les porteurs de projets soient moins expérimentés pour mener un développement technologique ou une solution plus loin dans la mise en œuvre sur le marché.
<div class="chart-pair">
${draw_waffle("ipr_research_goals",-100,15)}
${draw_waffle("ipr_impl_goals",-100,10)}
</div>

## BRIDGE Discovery
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Discovery")}</div>
  <div>${drawMiniPlot("BRIDGE Discovery", false)}</div>
</div>

BRIDGE est le programme de financement commun d'Innosuisse et du Fonds national suisse (FNS). Il associe la recherche fondamentale et la recherche appliquée à la mise en œuvre. BRIDGE Discovery vise à identifier le potentiel d’innovation des résultats de recherche, à le développer de manière ciblée, puis à le transposer en applications concrètes. Cet instrument permet à des chercheurs expérimentés de mettre en œuvre des projets d’excellence scientifique dotés d’une vision claire d’une application future, et de développer les fondements scientifiques de produits, de services ou de solutions sociétales innovants. Pour bénéficier d’un encouragement, les projets doivent présenter une stratégie de mise en œuvre convaincante ainsi qu’un fort potentiel économique ou sociétal.

BRIDGE Discovery soutient ainsi des projets situés à l’interface entre la recherche fondamentale et la recherche appliquée et vise, à long terme, la concrétisation de l’innovation dans l’économie ou la société. BRIDGE Discovery comble ainsi une lacune importante entre la recherche axée sur l'application et sa mise en œuvre concrète. L'encouragement crée les bases pour les étapes ultérieures de transfert et de mise en œuvre, dont la réalisation n'intervient souvent qu'après la fin du projet.

### Résultats obtenus en matière de mise en œuvre
Par rapport aux projets d'innovation sans partenaire de mise en œuvre, la proportion de projets dont la faisabilité a été testée, qui ont abouti à des résultats concluants en vue de la mise en œuvre ou pour lesquels les chercheurs estiment que l'innovation sera commercialisée est supérieure d'environ 10 points de pourcentage.
<div>${draw_results("BRIDGE Discovery", false, 450, width)}</div>

### Production scientifique très élevée
Dans la grande majorité des cas, BRIDGE Discovery permet également de mener et de publier d’excellentes recherches. La proportion est encore nettement plus élevée pour les projets « Discovery » que pour les projets d’innovation sans partenaire de mise en œuvre. La proportion de projets interdisciplinaires et transdisciplinaires est similaire à celle observée dans les projets d’innovation sans partenaire de mise en œuvre.
<div class="chart-pair">
${draw_waffle("bd_peer_review",-100)}
${draw_waffle("bd_inter_trans",-100)}
</div>

### Les projets BRIDGE Discovery sont axés sur la pratique
Les projets BRIDGE Discovery misent eux aussi en premier lieu sur la coopération avec des partenaires de mise en œuvre (76 %) et, en second lieu, sur la création d’une spin-off (53 %). Ces chiffres sont légèrement supérieurs à ceux des projets d’innovation sans partenaires de mise en œuvre (58 % de coopération contre 45 % de spin-off). Selon les projets, différentes voies de mise en œuvre passent par la coopération avec des partenaires existants, une création d'entreprise ou la concession de licences sur les résultats de recherche.
<div>${draw_waffle("bd_imppartner", -85)}</div>

### L’atteinte des objectifs est élevée
Contrairement aux projets d’innovation sans partenaire de mise en œuvre, la plupart des projets Discovery atteignent pleinement, voire dépassent, non seulement leurs objectifs de recherche, mais aussi leurs objectifs orientés vers l’application.
<div class="chart-pair">
${draw_waffle("bd_research_goals",-100, 17)}
${draw_waffle("bd_impl_goals",-100,8)}
</div>

## BRIDGE Proof of Concept
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Proof of Concept")}</div>
  <div>${drawMiniPlot("BRIDGE Proof of Concept", false)}</div>
  </div>
  
BRIDGE Proof of Concept s'adresse aux jeunes chercheurs qui travaillent à l'interface entre la recherche fondamentale et l'innovation basée sur la science. Le programme offre un soutien d'un an pour développer les résultats de la recherche en vue d'une application pratique, dans le but de les commercialiser et de préparer une carrière en dehors du monde universitaire.

### BRIDGE Proof of Concept mène à la création de start-up et de spin-off
BRIDGE Proof of Concept montre son efficacité à travers la part des soutiens qui aboutissent à une création d'entreprise. Plus de deux chercheurs sur trois ayant bénéficié d'un soutien créent par la suite une start-up ou un spin-off (start-up avec octroi de licence de propriété intellectuelle formelle). Ce chiffre est presque deux fois plus élevé que pour les projets d'innovation sans partenaire chargé de la mise en valeur. Il convient toutefois de noter que l'enquête est différente. Pour les projets d'innovation sans partenaire chargé de la mise en valeur, l'enquête a lieu à la fin du projet, tandis que pour BRIDGE Proof of Concept, une recherche distincte a été réalisée, qui est très actuelle (2025) et couvre donc une période plus longue.
  
${draw_waffle("br_spinoffs", -115)}
