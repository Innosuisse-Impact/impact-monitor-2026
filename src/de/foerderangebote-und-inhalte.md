---
title: Überblick Förderangebote und Inhalte des Wirkungsmonitorings
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_fin_plot, n_subcluster} from "../functions.js"
```

# Förderangebote und Inhalte

Der gegenwärtige Stand des Wirkungsmonitorings ist so aufgebaut, dass in allen Förderangebotskategorien mindestens zum jeweils finanziell gewichtigsten Förderangebot Aussagen zur Wirksamkeit und zu ausgewählten Vergleichen gemacht werden können. Die gegenwärtigen Lücken (in aufgehellter Farbe) werden schrittweise geschlossen werden. 
 
## Förderung von Innovationsprojekten

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style="margin-bottom: 0;">Projekte von Unternehmen mit Forschenden</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen mit Forschenden",115,true, width)}
  <h5 style="margin-bottom: 0;">Projekte von Unternehmen</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen", 25, false, width)}
  <h5 style="margin-bottom: 0;">Projekte von Forschenden</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Forschenden", 70, false, width)}
</div>

## Beratung und Vernetzung

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style="margin-bottom: 0;">Wissen und Netzwerke</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Wissen und Netzwerke",55,false, width)}
  <h5 style="margin-bottom: 0;">Innovationsmanagement und Beratung</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Innovationsmanagement und Beratung",55, false, width)}
</div>

<p class="comment">Quelle: Cockpit/PowerBI Innosuisse (2025)
<br>* Für die markierten Instrumente werden in der Folge die Ergebnisse aus dem Wirkungsmonitoring erläutert. Das Förderangebot «Swiss Accelerator» (2023-2024) wird nicht aufgeführt (Fördervolumen 2023: 111.8 Mio. Fr.). Es war eine zeitlich beschränkte Ersatzmassnahme in Reaktion auf die Nichtassoziation an Horizon Europe.</p>

Der Grossteil der Förderung von Innosuisse fliesst in die nationalen und internationalen Innovationsprojekte. Die höchste Bedeutung kommt hier den Standard-Innovationsprojekten zwischen Unternehmen¹ und Forschenden zu, in welchen die Forschungsinstitutionen primär für die Entlohnung des Forschungspersonals entgolten werden. Die beteiligten Unternehmen und Organisationen tragen Ihrerseits mindestens 50% an die gesamten Projektkosten bei.

Flankierend dazu werden Unternehmen mittels Innovation Booster, Mentoring, Enterprise Europe Network (Partnersuche) und weiteren Veranstaltung in der Initiierung von Innovationsprojekten unterstützt. Start-ups können von Coaching-, Trainings- und Internationalisierungsangeboten profitieren. Hier werden die Ergebnisse des Wirkungsmonitoring der Innovation Booster und des Start-up Core Coaching präsentiert.

Bei den Innovationsprojekten von Forschenden ohne Umsetzungspartner können ebenfalls Ergebnisse präsentiert werden.

Die Aufnahme der internationalen Innovationsprojekte in das Wirkungsmonitoring ist für das Berichtsjahr 2025 vorgesehen.
Die Projekte, in welchen die Start-ups und KMUs direkt unterstützt werden (Start-up Innovationsprojekte und Swiss Accelerator) werden zu einem späteren Zeitpunkt in das Monitoring integriert, da die Projekte noch nicht abgeschlossen sind. Dies gilt in gleicher Form für die Projekte der Flagship Initiative.

<p class="comment">¹ In der Folge wird «Unternehmen» vielfach als Synonym für «Umsetzungspartner» verwendet. Das ist nicht ganz präzise, weil die Umsetzungspartner sowohl KMU, Grossunternehmen und Start-ups, wie auch Verwaltungen, Non-Profit-Organisationen und andere private oder öffentliche Institutionen umfassen können. Allerdings besteht die grosse Mehrheit der Umsetzungspartner aus Unternehmen (KMU, Grossunternehmen und Start-ups), darum erlauben wir uns diese Vereinfachung hier, um damit die Texte einfacher verständlich zu machen.<p>

## Themengebiete der Innovationsvorhaben 2023–2025
Die bewilligten Innovationsvorhaben lassen sich in fünf verschiedene Themengebiete gliedern, welche in der nachfolgenden Abbildung zusätzlich nach Förderangeboten dargestellt sind. Die Abbildung zeigt den prozentualen Anteil der Themengebiete an den bewilligten Innovationsvorhaben im Durchschnitt der Jahre 2023–2025. Die prozentualen Anteile nach Instrumenten unterscheiden sich zum Teil deutlich. 

- «<span class="text-cat-1">Engineering</span>» weist bei den Innovationsprojekten mit Umsetzungspartnern (37 %), den Innovationsschecks (32 %) und bei BRIDGE Proof of Concept (31 %) höhere und vergleichbare Anteile auf. 
- «<span class="text-cat-2">Life Sciences</span>» hingegen zeigen einen sehr hohen Anteil bei den Innovationsprojekten ohne Umsetzungspartner (66 %) und einen überdurchschnittlichen Anteil bei den Start-ups im Coaching (38 %). Bei BRIDGE Proof of Concept ist es der wichtigste Themenbereich (34 %).
- Die Unterschiede bei «<span class="text-cat-3">Energy & environment</span>» sind geringer und bewegen sich zwischen 9 % bei den Innovationsprojekten ohne Umsetzungspartner und 17 % bei den Innovationsprojekten mit Umsetzungspartnern. 
- Dem Bereich «<span class="text-cat-4">Information and communication technologies ICT</span>» kommt bei den Start-ups im Coaching das grösste Gewicht zu (30 %). 
- «<span class="text-cat-5">Social sciences & business management</span>» sind bei den Innovationsschecks (21 %) am stärksten vertreten, ansonsten sind die Anteile vergleichsweise klein.

<div>${(n_subcluster(width))}</div>
