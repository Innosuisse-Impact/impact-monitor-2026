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

<div style="background: rgb(6, 247, 218) no-repeat padding-box; height: 110px; width: 650px; padding-left: 40px; padding-top: 24px; padding-bottom: 30px;  margin-left: -48px; margin-top: -31px;">

# Wirkung der Innosuisse-Förderung<br>2023–2025
<p class="comment" style="margin-bottom: 30px">Version 2.0.1, letzte Änderungen: 17. November 2025</p>
</div>
<br>

<details open>
<summary>Projekt- und Programmförderung</summary>
<div class="claims-wrapper">

## Innovation Projects with Implementation Partners

National innovation projects are Innosuisse's most important funding instrument. Companies and organisations from the economy and society cooperate with research partners to jointly develop innovative products, services, processes or new business models.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Projekte decken das gesamte Spektrum der Innovation ab und führen zu neuen Produkten, Dienstleistungen und Prozessen.</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_radikal_inkr", mode: "opposite" })}</div>
      <p>Die geförderten Organisationen stufen ihre Projekte zu fast gleichen Teilen als <span class="text-neutral-a">eindeutig inkrementell</span> und <span class="text-neutral-b">eindeutig radikal</span> ein.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_project_goals", mode: "opposite" })}</div>
      <p>Sie erreichen ihre Projektziele <span class="text-positive">vollständig oder übertreffen</span> sie sogar, während nur ein kleiner Teil sie <span class="text-negative">nicht ausreichend</span> erreicht.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Die Ergebnisse erreichen den Markt.</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct2" })}</div>
      <p>Innovationen sind bei Projektabschluss auf dem Markt oder sollen innerhalb eines Jahres auf den Markt gebracht werden.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct1" })}</div>
      <p>Drei Jahre später sind die Innovationen bereits umgesetzt oder ihre Umsetzung ist innerhalb von zwei Jahren geplant.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Die wirtschaftlichen Auswirkungen sind eindeutig.</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Arbeitsplätze</div>
        <div class="figure__value">+ 18%</div>
        <div class="figure__title">Umsatz</div>
        <div class="figure__value">+ 21%</div>
      </div>
      <p>Eine unabhängige wissenschaftliche Studie der KOF Konjunkturforschungsstelle (ETH Zürich) liefert erstmals kausale Belege für die Wirksamkeit von Innovationsprojekten. Sie verglich geförderte Unternehmen mit ähnlichen Firmen, die keinen Förderbeitrag erhielten. Über einen Zeitraum von fünf Jahren schufen die geförderten Unternehmen durchschnittlich 18 % mehr Arbeitsplätze und wuchsen um 21 % schneller.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Vollzeitstellen</div>
        <div class="figure__value">+ 2.5</div>
      </div>
      <p>Die Wirkungsmessung von Innosuisse verbindet jedes abgeschlossene Projekt mit durchschnittlich 2,5 zusätzlichen Vollzeitstellen drei Jahre nach Abschluss.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Wertschöpfungs-<br>multiplikator</div>
        <div class="figure__value">x4</div>
      </div>
      <p>EBP schätzt, dass jeder Schweizer Franken an Förderbeiträgen innerhalb von drei Jahren rund vier Franken an Wertschöpfung generiert.</p>
    </div>
    <a class="claim__link" href="/de/projekte-unternehmen-forschende">Zu den detaillierten Ergebnissen und Darstellungen<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

## Innovationsscheck

Der Innovationsscheck bietet KMU und Start-ups eine niederschwellige Förderung. Ziel ist es, Machbarkeits- und Marktstudien sowie technologische Abklärungen durchzuführen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Zusammenarbeit mit der Forschung</h3>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_connection", mode: "single", rank: "pct1" })}
      </div>
      <p>Über die Hälfte der beteiligten Unternehmen können dank des Innovationsschecks neu an den Wissens- und Technologietransfer mit der Forschung herangeführt werden.</p>
    </div>
        <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct1" })}
      </div>
      <p>76 % der KMU arbeiten auch nach dem Abschluss noch mit ihrem Forschungspartner zusammen.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Erzielte Ergebnisse</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>Die Zusammenarbeit mit den Forschungspartnern wird in vier von fünf Fällen erfolgreich geprüft. 61 % der Unternehmen haben ihre Innovationsidee erfolgreich getestet und weiterentwickelt und dieses Ziel vollständig erreicht. 29 % der Innovationschecks führen nachfolgend ein Innovationsprojekt durch oder planen dies in einem Jahr.</p>
    </div>
    <a class="claim__link" href="/de/projekte-unternehmen-forschende#innovationsscheck">Zu den detaillierten Ergebnissen und Darstellungen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

## Innovationsprojekte ohne Umsetzungspartner

Innovationsprojekte ohne Umsetzungspartner zielen darauf ab, wissenschaftliche Erkenntnisse zu risikoreichen Projekten mit hohem Innovationspotenzial in Richtung Anwendung zu entwickeln und erste Schritte in die Umsetzung zu unternehmen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Anwendungsorientierung</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>42 % der Projekte liefern schlüssige Ergebnisse für weitere Umsetzungsschritte und die Hälfte der Projekte besitzt mit hoher Wahrscheinlichkeit längerfristiges Potenzial für eine Markteinführung.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Zusammenarbeit mit Umsetzungspartnern</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>In rund zwei Dritteln der Projekte wurde bereits mit potenziellen Umsetzungspartnern zusammengearbeitet. Start-ups und Spin-offs, die aus der Forschung hervorgehen, spielen eine wichtige Rolle im WTT. In 39 % der Projekte wurde eine solche Ausgründung bereits realisiert oder ist geplant.</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende">Zu den detaillierten Ergebnissen und Darstellungen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

## BRIDGE: Discovery

Das Förderangebot des Schweizerischen Nationalfonds (SNF) und Innosuisse zielt darauf ab, Forschungsresultate an der Schnittstelle zwischen Grundlagenforschung und angewandter Forschung zu wissenschaftlich exzellenten Projekten mit hohem Innovationspotenzial zu entwickeln und die Grundlagen für die Umsetzung zu schaffen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Anwendungsorientierung</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>Im Unterschied zu den Innovationsprojekten ohne Umsetzungspartner werden bei einer Mehrheit der Discovery-Projekte schlüssige Ergebnisse für die Umsetzung erzielt. Bei beiden Projektarten geht rund die Hälfte der Forschenden mit hoher Wahrscheinlichkeit davon aus, dass die Innovation auf dem Markt umgesetzt werden kann.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Zusammenarbeit mit Umsetzungspartnern</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>3 von 4 der Forschungsgruppen haben bereits mit einem potenziellen Umsetzungspartner zusammengearbeitet, aber nur jede fünfte will ein eigenes Spin-off gründen.</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende#bridge-discovery">Zu den detaillierten Ergebnissen und Darstellungen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

## BRIDGE: Proof of Concept

BRIDGE Proof of Concept bietet Forschenden ein Jahr Unterstützung, um Forschungsergebnisse anwendungsorientiert zur Marktreife zu führen und eine Karriere ausserhalb der Forschung und der Hochschulen vorzubereiten.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Gründung von Start-ups aus der Forschung</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      <p>Rund 70 % der unterstützten Forschenden gründen nach der Förderung ein Start-up oder ein Spin-off (Start-up mit formeller IP-Lizenzierung).</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende#bridge-proof-of-concept">Zu den detaillierten Ergebnissen und Darstellungen <span class="claim__link-arrow">→</span></a>
  </section>
</div>
</details>

<details open>
<summary>Beratung und Vernetzung</summary>
<div class="claims-wrapper">

## Innovation Booster

Bei den themenorientierten Innovation Booster werden neue und radikale Innovationsideen in einem offenen und netzwerkbasierten Innovationsprozess entwickelt. Der Fokus liegt in der frühen Phase der experimentellen Ideenfindung und dem Testen von Ideen. Erfolgsversprechende Innovationsideen sollen in Projekten weitergeführt werden.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Fähigkeiten und Kompetenzen der Teilnehmenden</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      Die grosse Mehrheit der Befragten (81 %) bestätigt, dass sie aufgrund ihrer Teilnahme an einem Innovation Booster ihre Fähigkeiten und Kompetenz zum Entwickeln und Testen von radikalen Ideen erhöhen konnten.
      </div>
          <header class="claim__header">
      <h3 class="claim__title">Weiterführung der Innovationsideen</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      Zwei von drei Innovationsideen werden weiterverfolgt, oft mit neuen Lösungsansätzen. Es entstehen daraus durchschnittlich 26 Innovationsprojekte bei Innosuisse pro Jahr.
      </div>
<a class="claim__link" href="/de/starthilfe-projekte-vernetzung">Zu den detaillierten Ergebnissen und Darstellungen</a>
  </section>

## Start-up Coaching

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Unterstützung der Start-ups im Core Coaching</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      Rund vier von fünf gecoachten Start-ups bestätigen, dass das Core Coaching in mindestens einem für das Start-up zentralen Themenbereich einen massgeblichen Beitrag geleistet hat zur Entwicklung des Start-ups (78 %). Der Anteil der Start-ups, deren Erwartungen an den gesamten Coachingprozess mehrheitlich erfüllt wurden, liegt mit 84 % noch etwas höher.
      </div>
          <header class="claim__header">
      <h3 class="claim__title">Kapitalakquisition</h3>
    </header>
    <div class="figure">
      <div class="figure__col"></div>
      Bis zum Abschluss des Core Coachings haben 21 % der Start-ups über 5 Millionen Franken an Kapital akquiriert. Zwei Drittel erhielten im Core Coaching direkte und hilfreiche Unterstützung bei der Kapitalbeschaffung.
      </div>
<a class="claim__link" href="/de/begleitung-start-ups">Zu den detaillierten Ergebnissen und Darstellungen</a>
</section>
</div>
</details>

# Das Wirkungsmonitoring von Innosuisse

Innosuisse legt grosses Gewicht darauf die Wirksamkeit der Innovationsförderung gegenüber den Stakeholdern, den politischen Entscheidungsträgern und der Öffentlichkeit transparent darzulegen.

Folgende zwei Fragen stehen im Vordergrund:

* Welche Wirkungen erzielen die eingesetzten öffentlichen Mittel bei den Fördernehmerinnen und Fördernehmer (Unternehmen, Organisationen und Start-ups)?
* Wird der Wissens- und Technologietransfer zwischen Unternehmen und der Forschung gestärkt und in welcher Form?

Der Bericht ist wie folgt strukturiert:

Die wichtigsten Ergebnisse aus dem Wirkungsmonitoring sind nachfolgend kurz zusammengefasst. Im Editorial ordnen wir diese aus Sicht der Innosuisse ein. In den methodischen Grundlagen wird die Einbettung, Konzeption und Auswertung des Wirkungsmonitorings erläutert.

Im Hauptteil werden die Ergebnisse ausführlich dargestellt und kurz diskutiert. Wir empfehlen direkt hier einzusteigen für die vertiefenden, graphisch illustrierten Abschnitte zu den Förderangeboten (siehe die Kapitel links unter Ergebnisse).

* Das Kapitel Förderangebote und Inhalte zeigt auf, wie breit das Monitoring die Instrumente von Innosuisse abdeckt. In den vergleichenden Ergebnissen werden die Förderangebote untereinander verglichen.
* Danach werden in einem Kapitel pro Förderangebot die Ergebnisse des Wirkungsmonitoring präsentiert und erläutert.