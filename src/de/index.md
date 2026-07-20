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

<div style="background: rgb(6, 247, 218) no-repeat padding-box; min-height: 110px; max-width: 100%; padding-left: 40px; padding-top: 5px; padding-bottom: 5px;  margin-left: -48px; margin-top: -31px;">

# Wirkung der Innosuisse-Förderung<br>2023–2025
<p class="comment">Version 2.0, letzte Änderungen: 18. Juni 2026</p>
</div>
<br>

Innosuisse legt grosses Gewicht darauf die Wirksamkeit der Innovationsförderung transparent anhand folgender zwei Hauptfragen darzulegen:

* Welche Wirkungen erzielen die eingesetzten öffentlichen Mittel bei den Unternehmen, Start-ups und weiteren Organisationen?
* Wird der Wissens- und Technologietransfer zwischen Organisationen und der Forschung gestärkt und in welcher Form?

Die wichtigsten Ergebnisse aus dem Wirkungsmonitoring sind nachfolgend für die einzelnen Förderangebote kurz zusammengefasst. Im Hauptteil werden die Ergebnisse ausführlich dargestellt und kurz diskutiert.

## Förderung von Innovationsprojekten

### Innovationsprojekte mit Umsetzungspartner

Die nationalen Innovationsprojekte sind das wichtigste Förderinstrument von Innosuisse. Unternehmen und Organisationen aus der Wirtschaft und Gesellschaft kooperieren mit Forschungspartnern, um gemeinsam innovative Produkte, Dienstleistungen, Prozesse oder neue Geschäftsmodelle zu entwickeln.
<div class="claims-wrapper">
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
      <p>Eine unabhängige wissenschaftliche Studie der KOF Konjunkturforschungsstelle (ETH Zürich) liefert erstmals kausale Belege für die Wirksamkeit von Innovationsprojekten. Sie verglich geförderte Unternehmen mit möglichst ähnlichen Firmen, die keinen Förderung erhielten. Über einen Zeitraum von fünf Jahren schufen die geförderten Unternehmen durchschnittlich 18 % mehr Arbeitsplätze und wuchsen um 21 % schneller.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Vollzeitstellen</div>
        <div class="figure__value">+ 2.5</div>
      </div>
      <p>Nach Angaben der befragten Unternehmen lassen sich drei Jahre nach Projektabschluss durchschnittlich 2,5 zusätzliche Vollzeitstellen auf das geförderte Projekt zurückführen.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Wertschöpfungs-<br>multiplikator</div>
        <div class="figure__value">x4</div>
      </div>
      <p>EBP schätzt, dass jeder Schweizer Franken an Förderbeiträgen innerhalb von drei Jahren rund vier Franken an Wertschöpfung generiert.</p>
    </div>
    <a class="claim__link" href="/de/projekte-unternehmen-forschende">Zu den detaillierten Ergebnissen<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Innovationsscheck

Der Innovationsscheck bietet KMU und Start-ups eine niederschwellige Förderung. Ziel ist es, Machbarkeits- und Marktstudien sowie technologische Abklärungen durchzuführen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">KMU und Start-ups beginnen eine strukturierte Zusammenarbeit mit Forschungspartnern</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_connection", mode: "single", rank: "pct1" })}</div>
      <p>KMU arbeiten zum ersten Mal mit einem Forschungspartner einer Hochschule zusammen.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Die Ideen werden weiterverfolgt und teilweise in Folgeprojekte überführt</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct1" })}</div>
      <p>Unternehmen entwickeln ihre Innovationsidee nach Abschluss mit demselben Forschungspartner weiter.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct2" })}</div>
      <p>Einige beantragen oder planen konkret innerhalb eines Jahres ein vollwertiges Innosuisse Innovationsprojekt.</p>
    </div>
    <a class="claim__link" href="/de/projekte-unternehmen-forschende#innovationsscheck">Zu den detaillierten Ergebnissen<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Innovationsprojekte ohne Umsetzungspartner

Innovationsprojekte ohne Umsetzungspartner zielen darauf ab, wissenschaftliche Erkenntnisse zu risikoreichen Projekten mit hohem Innovationspotenzial in Richtung Anwendung zu entwickeln und erste Schritte in die Umsetzung zu unternehmen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Forschende machen Schritte in Richtung Umsetzung</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Projekte erzielen Ergebnisse, die zeigen, dass die angestrebte Innovation grundsätzlich umsetzbar ist.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Projekte erzielen Ergebnisse, die es ermöglichen, konkrete weitere Umsetzungsschritte vorzunehmen.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Innovationen werden in Zukunft in der Praxis umgesetzt.</h3>
            <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>Innovationen besitzen mit hoher bis sehr hoher Wahrscheinlichkeit längerfristiges Potenzial für eine Markteinführung.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Forschende arbeiten bereits mit potenziellen Umsetzungspartnern aus Wirtschaft und Praxis zusammen.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Forschende realisierten oder planen die Ausgründung eines Start-ups.</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende">Zu den detaillierten Ergebnissen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE Discovery

Das Förderangebot des Schweizerischen Nationalfonds (SNF) und Innosuisse zielt darauf ab, Forschungsresultate an der Schnittstelle zwischen Grundlagenforschung und angewandter Forschung zu wissenschaftlich exzellenten Projekten mit hohem Innovationspotenzial zu entwickeln und die Grundlagen für die Umsetzung zu schaffen.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Forschungsgruppen machen Schritte in Richtung Umsetzung</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Projekte erzielen Ergebnisse, die zeigen, dass die angestrebte Innovation grundsätzlich umsetzbar ist.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Projekte erzielen Ergebnisse, die es ermöglichen, konkrete weitere Umsetzungsschritte vorzunehmen.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Discovery-Projekte sind anwendungsorientiert und die Start-up-Gründung ist ein wichtiger Umsetzungspfad</h3>
            <span class="claim__level">Outcome</span>
    </header>
        <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>Projekt wird mit hoher bis sehr hoher Wahrscheinlichkeit auf dem Markt umgesetzt.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Forschungsgruppen arbeiten mit potenziellen Umsetzungspartnern aus Wirtschaft und Praxis zusammen.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Forschungsgruppen realisierten oder planen die Ausgründung eines Start-ups oder Spin-offs.</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende#bridge-discovery">Zu den detaillierten Ergebnissen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE Proof of Concept

BRIDGE Proof of Concept bietet Forschenden ein Jahr Unterstützung, um Forschungsergebnisse anwendungsorientiert zur Marktreife zu führen und eine Karriere ausserhalb der Forschung und der Hochschulen vorzubereiten.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Gründung von Start-ups aus der Forschung</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col"><div class="figure__value">69%</div></div>
      <p>Forschende gründen nach der Förderung ein Start-up oder ein Spin-off (Start-up mit formeller IP-Lizenzierung).</p>
    </div>
    <a class="claim__link" href="/de/projekte-forschende#bridge-proof-of-concept">Zu den detaillierten Ergebnissen <span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Beratung und Vernetzung

<div class="claims-wrapper">

### Innovation Booster

Bei den themenorientierten Innovation Booster werden neue und radikale Innovationsideen in einem offenen und netzwerkbasierten Innovationsprozess entwickelt. Der Fokus liegt in der frühen Phase der experimentellen Ideenfindung und dem Testen von Ideen. Erfolgsversprechende Innovationsideen sollen in Projekten weitergeführt werden.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Teilnehmende sträken ihre Fähigkeiten und Kompetenzen der Teilnehmenden</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_capabilities", mode: "single", rank: "pct1" })}</div>
      <p>Befragte bestätigen, dass sie aufgrund ihrer Teilnahme an einem Innovation Booster ihre Fähigkeiten und Kompetenz zum Entwickeln und Testen von radikalen Ideen erhöhen konnten.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Innovationsideen werden zur Umsetzung gebracht</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_continued", mode: "single", rank: "pct1" })}</div>
      <p>Innovationsideen werden weiterverfolgt, oft mit neuen Lösungsansätzen. Es entstehen daraus durchschnittlich 26 Innovationsprojekte bei Innosuisse pro Jahr.</p>
    </div>
    <a class="claim__link" href="/de/beratung-und-netzwerk">Zu den detaillierten Ergebnissen<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Start-up Coaching

Das Coaching unterstützt Start-ups mit innovativen und wissenschaftsbasierten Geschäftsideen durch massgeschneiderte Begleitung in verschiedenen Gründungsphasen. Das Förderangebot gliedert sich in drei aufeinander abgestimmte Angebote – Initial, Core und Scale-up Coaching. Die Start-ups haben die Möglichkeit, an internationalen Camps und international bedeutenden Messen teilzunehmen. Die nachfolgenden Ergebnisse beziehen sich auf das Start-up Core Coaching.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Das Core Coaching bringt den Start-up Mehrwert</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "scc_support", mode: "single", rank: "pct1" })}</div>
      <p>Start-ups bestätigen, dass das Core Coaching in mindestens einem für sie zentralen Themenbereich einen massgeblichen Beitrag geleistet hat. Der Anteil der Start-ups, deren Erwartungen an den gesamten Coachingprozess mehrheitlich erfüllt wurden, liegt noch etwas höher.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Start-ups im Coaching beschaffen erfolgreich Kapital</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct1" })}
      </div>
      <p>Start-ups haben bis zum Abschluss des Coachings erfolgreich Risikokapital akquiriert.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct2" })}
      </div>
      <p>Gewisse Start-ups haben in diesem Zeitraum bereits über 5 Millionen Franken an Kapital akquiriert. Zwei Drittel erhielten im Core Coaching massgebliche Unterstützung bei der Kapitalbeschaffung.</p>
    </div>
    <a class="claim__link" href="/de/beratung-und-netzwerk">Zu den detaillierten Ergebnissen<span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Berichtsstruktur
* Das Kapitel [Methodische Grundlagen](/de/methodische-grundlagen) erklärt die Einbettung und die Konzeption des Wirkungsmonitorings
* Das Kapitel [Förderangebote und Inhalte](/de/foerderangebote-und-inhalte) zeigt auf, wie breit das Monitoring die Instrumente von Innosuisse abdeckt. In den [vergleichenden Ergebnissen](/de/vergleichende-ergebnisse) werden die Förderangebote untereinander verglichen.
* Danach werden in einem Kapitel pro Förderangebot die Ergebnisse des Wirkungsmonitoring präsentiert und erläutert.
