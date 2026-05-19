---
title: Wirkung der Innosuisse-Förderung
style: ../styles.css
toc: true
sidebar: true
---

```js
import { html } from "npm:htl";
import { draw_waffle, draw_bar } from "../functions.js"
import { df_waffle } from "../data.js"
```

<div style="background: transparent linear-gradient(284deg, rgb(6, 247, 218) 0%, #FCE300 100%) no-repeat padding-box; height: 110px; width: 650px; padding-left: 40px; padding-top: 24px; padding-bottom: 30px;  margin-left: -48px; margin-top: -31px;">

# Wirkung der Innosuisse-Förderung 2023–2025
<p class="comment" style="margin-bottom: 30px">Version 2.0.1, letzte Änderungen: 17. November 2025</p>
</div>
<br>

## Projekt- und Programmförderung

<div style="grid grid-cols-1; grid-auto-rows: auto; max-width: 600px;">
      <h3>Innovation Projects with Implementation Partners</h3>
      <p>National innovation projects are Innosuisse's most important funding instrument. Companies and organisations from the economy and society cooperate with research partners to jointly develop innovative products, services, processes or new business models.</p>
<section class="claim">
    <header class="claim__header">
      <h4 class="claim__title">Projekte decken das gesamte Spektrum der Innovation ab und führen zu neuen Produkten, Dienstleistungen und Prozessen.</h4>
      <span class="claim__level">Output</span>
    </header>
    <div class="claim__evidence claim__evidence--split">
      <div class="claim__evidence-chart">
          <p>${draw_bar(df_waffle, { title: "ip_radikal_inkr", mode: "opposite" })}</p>
      </div>
      <p>Die geförderten Organisationen stufen ihre Projekte zu fast gleichen Teilen als <span class="text-neutral-a">eindeutig inkrementell</span> und <span class="text-neutral-b">eindeutig radikal</span> ein.</p>
    <div class="claim__evidence-chart">
          <p>${draw_bar(df_waffle, { title: "ip_project_goals", mode: "opposite" })}</p>
      </div>
      <p>Sie erreichen ihre Projektziele <span class="text-positive">vollständig oder übertreffen</span> sie sogar, während nur ein kleiner Teil sie <span class="text-negative">nicht ausreichend</span> erreicht.</p>
      </div>
    <a class="claim__link" href="#">More on this <span class="claim__link-arrow">→</span></a>
  </section>
  <section class="claim">
    <header class="claim__header">
      <h4 class="claim__title">Die Ergebnisse erreichen den Markt.</h4>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="claim__evidence claim__evidence--split">
      <div class="claim__evidence-chart">
          <p>${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct2" })}</p>
      </div>
      <p>Innovationen sind bei Projektabschluss auf dem Markt oder sollen innerhalb eines Jahres auf den Markt gebracht werden.</p>
    <div class="claim__evidence-chart">
          <p>${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct1" })}</p>
      </div>
      <p>Drei Jahre später sind die Innovationen bereits umgesetzt oder ihre Umsetzung ist innerhalb von zwei Jahren geplant.</p>
      </div>
    <a class="claim__link" href="/projects-companies-researchers#innosuisse-enables-high-risk-and-interdisciplinary-projects">More on this <span class="claim__link-arrow">→</span></a>
  </section>
    <section class="claim">
        <header class="claim__header">
    <h4>Die wirtschaftlichen Auswirkungen sind eindeutig.</h4>
          <span class="claim__level">Impact</span>
    </header>
    <div class="evidence">
      <div class="figure">
        <div class="figure__value">+18%<br><br>+21%</div>
          <p>Eine unabhängige wissenschaftliche Studie der KOF Konjunkturforschungsstelle (ETH Zürich) liefert erstmals kausale Belege für die Wirksamkeit von Innovationsprojekten. Sie verglich geförderte Unternehmen mit ähnlichen Firmen, die keinen Förderbeitrag erhielten. Über einen Zeitraum von fünf Jahren schufen die geförderten Unternehmen durchschnittlich 18 % mehr Arbeitsplätze und wuchsen um 21 % schneller.</p>
      </div>
      <div class="figure">
        <div class="figure__value">+2.5 FTE</div>
        <p>Die Wirkungsmessung von Innosuisse verbindet jedes abgeschlossene Projekt mit durchschnittlich 2,5 zusätzlichen Vollzeitstellen drei Jahre nach Abschluss.</p>
      </div>
            <div class="figure">
        <div class="figure__value">x4</div>
        <p>EBP schätzt, dass jeder Schweizer Franken an Förderbeiträgen innerhalb von drei Jahren rund vier Franken an Wertschöpfung generiert.</p>
      </div>
      <a class="claim__link" href="#">More on this <span class="arrow">→</span></a>
    </div>
</div>

#### 
<div class="grid grid-cols-1" style="grid-auto-rows: auto; max-width: 600px;">
<div class="card">
  <h1>[Innovationsprojekte mit Umsetzungspartner](/de/projekte-unternehmen-forschende)</h1>
  <h2>Programm trägt dazu bei neuen Produkte, Dienstleistungen und Prozesse zu realisieren</h2>
  <p>56 % der geförderten Unternehmen erreichen ihre Ziele im Rahmen der Innovationsprojekte vollständig oder übertreffen diese sogar.</p>
  <hr>
  <h2>Die Projekte decken das gesamte Spektrum der Innovationen ab</h2>
  <p>25 % sind eindeutig inkrementell, während 27 % eindeutig radikal sind.</p>
  <hr>
  <h2>Die Ergebnisse erreichen den Markt.</h2>
    ${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct1" })} 
  ${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct2" })} 
  <hr>

</div>
</div>

<div class="card" style="max-width: 600px; --underline-color: #D3D3D3;">

### [Wirkungsergebnisse im direkten Vergleich](/de/vergleichende-ergebnisse)

Ausgewählte Ergebnisse des Monitorings, die standardisiert erhoben werden, erlauben Vergleiche über die Förderangeboten hinweg.

* **Zufriedenheit:** Die Zufriedenheit mit den Angeboten und der Umsetzung durch Innosuisse ist bei den Fördernehmerinnen und Fördernehmern durchweg hoch. Die Zustimmungswerte für zufrieden bis sehr zufrieden liegen in den verschiedenen Programmen meist über 80 %: Bei Innovation Boostern bei 89 %, bei Innovationsprojekten zwischen Forschungs- (91 %) und Umsetzungspartnern (80 %), bei Innovationschecks bei 86 % sowie bei Start-ups im Core Coaching bei 68 %. Die Quote der Unzufriedenen ist mit durchgängig 1 % bis 2 % sehr gering.
* **Inkrementelle und radikale Innovationen:** Innosuisse fördert sowohl radikale als auch inkrementelle Innovationen. Die jeweiligen Anteile unterscheiden sich je nach Förderangebot. Bei den Innovationsprojekten mit Umsetzungspartnern sind 25 % der Innovationen klar inkrementell und 24 % klar radikal. Bei den Start-ups im Coaching ist der Anteil radikaler Innovationen mit 50 % mehr als doppelt so hoch.

<a href ="/de/vergleichende-ergebnisse">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

</div>

<div class="card" style="max-width: 600px; --underline-color: #06F7DA;">

### [Projekte von Unternehmen mit Forschenden](/de/projekte-unternehmen-forschende)

#### [Innovationsprojekte mit Umsetzungspartner](/de/projekte-unternehmen-forschende)

Die nationalen Innovationsprojekte sind das wichtigste Förderinstrument von Innosuisse. Unternehmen und Organisationen aus der Wirtschaft und Gesellschaft kooperieren mit Forschungspartnern, um gemeinsam innovative Produkte, Dienstleistungen, Prozesse oder neue Geschäftsmodelle zu entwickeln.

* **Markteinführung:** Drei Jahre nach Abschluss der Förderung sind mehr als die Hälfte der geförderten Innovationen (57 %) entweder auf dem Markt eingeführt, im Unternehmen umgesetzt oder die Einführung ist in den nächsten zwei Jahren geplant.
* **Schaffung von Arbeitsplätzen:** Ein gefördertes Projekt führt im Durchschnitt der Jahre 2021–2023 zu 2.5 neuen und hochqualifizierten Arbeitsplätzen. Drei Jahre nach Abschluss der Förderung entstehen aus den Projekten rund 800 bis 900 Vollzeitstellen. Diese positive Wirkung der Förderung wird auch durch eine wissenschaftliche Studie der Konjunkturforschungsstelle der ETH Zürich bestätigt. Unternehmen, die von Innosuisse gefördert wurden, verzeichnen drei Jahre nach Abschluss eine um 18 % höhere Beschäftigung als vergleichbare, innovative Unternehmen ohne Innosuisse-Förderung.
* **Hebelwirkung der Förderung schafft Wertschöpfung:** Die Förderung führt über die neu geschaffenen Arbeitsplätze direkt zu zusätzlicher Wertschöpfung bei den geförderten Unternehmen: Jeder Förderfranken bringt der Wirtschaft direkt rund vier Wertschöpfungsfranken, gemessen drei Jahre nach der Förderung summiert für drei weitere Jahre.
* **Stärkung des Wissens- und Technologietransfers:** Der Wissens- und Technologietransfer (WTT) wirkt auch längerfristig: 45 % der Unternehmen arbeitet auch drei Jahre nach Projektabschluss weiter mit ihren Forschungspartnern zusammen. 13 % übernehmen zusätzlich Forschungspersonal, das am Projekt beteiligt war. Sie stärken damit ihre interne Wissens- und Innovationsbasis.

<a href ="/de/projekte-unternehmen-forschende">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

#### [Innovationsscheck](projekte-unternehmen-forschende#innovationsscheck)

Der Innovationsscheck bietet KMU und Start-ups eine niederschwellige Förderung. Ziel ist es, Machbarkeits- und Marktstudien sowie technologische Abklärungen durchzuführen.

* **Zusammenarbeit mit der Forschung:** Über die Hälfte der beteiligten Unternehmen können dank des Innovationsschecks neu an den Wissens- und Technologietransfer mit der Forschung herangeführt werden. 71 % der KMU arbeiten auch nach dem Abschluss noch mit ihrem Forschungspartner zusammen.
* **Erzielte Ergebnisse:** Die Zusammenarbeit mit den Forschungspartnern wird in vier von fünf Fällen erfolgreich geprüft. 61 % der Unternehmen haben ihre Innovationsidee erfolgreich getestet und weiterentwickelt und dieses Ziel vollständig erreicht. 29 % der Innovationschecks führen nachfolgend ein Innovationsprojekt durch oder planen dies in einem Jahr.

<a href ="/de/projekte-unternehmen-forschende#innovationsscheck">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

</div>

<div class="card" style="max-width: 600px;">

### [Projekte von Forschenden](/de/projekte-forschende)

#### [Innovationsprojekte ohne Umsetzungspartner](/de/projekte-forschende)

Innovationsprojekte ohne Umsetzungspartner zielen darauf ab, wissenschaftliche Erkenntnisse zu risikoreichen Projekten mit hohem Innovationspotenzial in Richtung Anwendung zu entwickeln und erste Schritte in die Umsetzung zu unternehmen.

* **Anwendungsorientierung:** 42 % der Projekte liefern schlüssige Ergebnisse für weitere Umsetzungsschritte und die Hälfte der Projekte besitzt mit hoher Wahrscheinlichkeit längerfristiges Potenzial für eine Markteinführung.
* **Zusammenarbeit mit Umsetzungspartnern:** In rund zwei Dritteln der Projekte wurde bereits mit potenziellen Umsetzungspartnern zusammengearbeitet. Start-ups und Spin-offs, die aus der Forschung hervorgehen, spielen eine wichtige Rolle im WTT. In 39 % der Projekte wurde eine solche Ausgründung bereits realisiert oder ist geplant.

<a href ="/de/projekte-forschende">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

#### [BRIDGE: Discovery](/de/projekte-forschende#bridge-discovery)

Das Förderangebot des Schweizerischen Nationalfonds (SNF) und Innosuisse zielt darauf ab, Forschungsresultate an der Schnittstelle zwischen Grundlagenforschung und angewandter Forschung zu wissenschaftlich exzellenten Projekten mit hohem Innovationspotenzial zu entwickeln und die Grundlagen für die Umsetzung zu schaffen.

* **Anwendungsorientierung**: Im Unterschied zu den Innovationsprojekten ohne Umsetzungspartner werden bei einer Mehrheit der Discovery-Projekte schlüssige Ergebnisse für die Umsetzung erzielt. Bei beiden Projektarten geht rund die Hälfte der Forschenden mit hoher Wahrscheinlichkeit davon aus, dass die Innovation auf dem Markt umgesetzt werden kann.
* **Zusammenarbeit mit Umsetzungspartnern**: 3 von 4 der Forschungsgruppen haben bereits mit einem potenziellen Umsetzungspartner zusammengearbeitet, aber nur jede fünfte will ein eigenes Spin-off gründen.

<a href ="/de/projekte-forschende#bridge-discovery">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

#### [BRIDGE: Proof of Concept](/de/projekte-forschende#bridge-proof-of-concept)

BRIDGE Proof of Concept bietet Forschenden ein Jahr Unterstützung, um Forschungsergebnisse anwendungsorientiert zur Marktreife zu führen und eine Karriere ausserhalb der Forschung und der Hochschulen vorzubereiten.

* **Gründung von Start-ups aus der Forschung:** Rund 70 % der unterstützten Forschenden gründen nach der Förderung ein Start-up oder ein Spin-off (Start-up mit formeller IP-Lizenzierung).

<a href ="/de/projekte-forschende#bridge-proof-of-concept">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

</div>

<div class="card" style="max-width: 600px;--underline-color: #FCE300;">

### [Starthilfe für Projekte und Vernetzung](/de/starthilfe-projekte-vernetzung)

#### [Innovation Booster](/de/starthilfe-projekte-vernetzung)

Bei den themenorientierten Innovation Booster werden neue und radikale Innovationsideen in einem offenen und netzwerkbasierten Innovationsprozess entwickelt. Der Fokus liegt in der frühen Phase der experimentellen Ideenfindung und dem Testen von Ideen. Erfolgsversprechende Innovationsideen sollen in Projekten weitergeführt werden.

* **Fähigkeiten und Kompetenzen der Teilnehmenden:** Die grosse Mehrheit der Befragten (81 %) bestätigt, dass sie aufgrund ihrer Teilnahme an einem Innovation Booster ihre Fähigkeiten und Kompetenz zum Entwickeln und Testen von radikalen Ideen erhöhen konnten.
* **Weiterführung der Innovationsideen:** Zwei von drei Innovationsideen werden weiterverfolgt, oft mit neuen Lösungsansätzen. Es entstehen daraus durchschnittlich 26 Innovationsprojekte bei Innosuisse pro Jahr.

<a href ="/de/starthilfe-projekte-vernetzung">→ Zu den detaillierten Ergebnissen und Darstellungen</a>

</div>

<div class="card" style="max-width: 600px; --underline-color: #FF8674;">

### [Begleitung von Start-ups](/de/begleitung-start-ups)

#### [Start-up Coaching](/de/begleitung-start-ups)

Das Coaching unterstützt Start-ups mit innovativen und wissenschaftsbasierten Geschäftsideen durch massgeschneiderte Begleitung in verschiedenen Gründungsphasen. Das Förderangebot gliedert sich in drei aufeinander abgestimmte Angebote – Initial, Core und Scale-up Coaching. Die Start-ups haben die Möglichkeit, an internationalen Camps und international bedeutenden Messen teilzunehmen. Die Ergebnisse des Wirkungsmonitorings betreffen das Start-up Core Coaching.

* **Unterstützung der Start-ups im Core Coaching:** Rund vier von fünf gecoachten Start-ups bestätigen, dass das Core Coaching in mindestens einem für das Start-up zentralen Themenbereich einen massgeblichen Beitrag geleistet hat zur Entwicklung des Start-ups (78 %). Der Anteil der Start-ups, deren Erwartungen an den gesamten Coachingprozess mehrheitlich erfüllt wurden, liegt mit 84 % noch etwas höher.
* **Kapitalakquisition:** Bis zum Abschluss des Core Coachings haben 21 % der Start-ups über 5 Millionen Franken an Kapital akquiriert. Zwei Drittel erhielten im Core Coaching direkte und hilfreiche Unterstützung bei der Kapitalbeschaffung.

<a href ="/de/begleitung-start-ups">→ Zu den detaillierten Ergebnissen und Darstellungen</a>
</div>

<hr style="max-width: 640px;">

</div>

## Das Wirkungsmonitoring von Innosuisse

Innosuisse legt grosses Gewicht darauf die Wirksamkeit der Innovationsförderung gegenüber den Stakeholdern, den politischen Entscheidungsträgern und der Öffentlichkeit transparent darzulegen.

Folgende zwei Fragen stehen im Vordergrund:

* Welche Wirkungen erzielen die eingesetzten öffentlichen Mittel bei den Fördernehmerinnen und Fördernehmer (Unternehmen, Organisationen und Start-ups)?
* Wird der Wissens- und Technologietransfer zwischen Unternehmen und der Forschung gestärkt und in welcher Form?

Der Bericht ist wie folgt strukturiert:

Die wichtigsten Ergebnisse aus dem Wirkungsmonitoring sind nachfolgend kurz zusammengefasst. Im Editorial ordnen wir diese aus Sicht der Innosuisse ein. In den methodischen Grundlagen wird die Einbettung, Konzeption und Auswertung des Wirkungsmonitorings erläutert.

Im Hauptteil werden die Ergebnisse ausführlich dargestellt und kurz diskutiert. Wir empfehlen direkt hier einzusteigen für die vertiefenden, graphisch illustrierten Abschnitte zu den Förderangeboten (siehe die Kapitel links unter Ergebnisse).

* Das Kapitel Förderangebote und Inhalte zeigt auf, wie breit das Monitoring die Instrumente von Innosuisse abdeckt. In den vergleichenden Ergebnissen werden die Förderangebote untereinander verglichen.
* Danach werden in einem Kapitel pro Förderangebot die Ergebnisse des Wirkungsmonitoring präsentiert und erläutert.

Der Monitor wird jährlich aktualisiert.
<br>

## Wichtige Ergebnisse auf einen Blick
