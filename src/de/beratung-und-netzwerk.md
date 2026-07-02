---
title: Beratung und Vernetzung
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { drawMiniPlot, draw_waffle, draw_bar, draw_results, ib_toipis, su_vza, su_vza_legend} from "../functions.js"
import { df_waffle } from "../data.js"
```

# Wissen und Netzwerke
## Innovation Booster
<div style="display: flex;">
  <div>${drawMiniPlot("Innovation Booster")}</div>
  <div>${drawMiniPlot("Innovation Booster", false)}</div>
  </div>
  <p class = "comment">Im Unterschied zu den anderen Mini-Graphiken, werden hier nicht die bewilligten, sondern die investierten Beträge bzw. die aktiven Innovation Booster dargestellt.</p>

Die von Innosuisse geförderten Innovation Booster fokussieren jeweils auf ein bestimmtes Innovationsthema. Sie sind thematisch breit aufgestellt, von der künstlichen Intelligenz über Tourismus bis hin zu Foodtech.

Die Innovation Booster entwickeln neue und radikale Innovationsideen und prüfen diese in einem offenen, netzwerkbasierten Innovationsprozess mit einer offenen Innovationskultur. Die Partner der geförderten Netzwerke kommen aus dem Forschungsumfeld, der Wirtschaft und der Gesellschaft. Der Fokus der Förderung liegt in der frühen Phase der Ideenfindung und -prüfung, wobei experimentelle Methoden wie «Design Thinking» und «Co-Creation» zum Einsatz kommen. 

Die Weiterentwicklung von erfolgreich getesteten Innovationsideen, auch im Rahmen von geförderten Innovationsprojekten ist ein zentrales Wirkungsziel der Innovation Booster. Damit werden wissenschaftsbasierte und nachhaltige Innovationen gefördert und den Umsetzungspartnern und dem Innovationsystem Schweiz konkreter Mehrwert und Wettbewerbsvorteile verschafft.

### Innovation Booster stärken die Innovationskompetenzen der Teilnehmenden
Die Innovation Booster haben zum Ziel in der Challenge-Phase neue und auch radikale Innovationsideen zu entwickeln, um diese in einer weiteren Phase der Ideenprüfung auf Machbarkeit und Potenziale hinsichtlich Nachfrage und Nutzerorientierung zu testen.

Die grosse Mehrheit der Befragten (81 %) bestätigt, dass sie aufgrund ihrer Teilnahme an einem Innovation Booster ihre Fähigkeiten und Kompetenz zum Entwickeln und Testen von radikalen Ideen erhöhen konnten.

<div>${draw_waffle("ib_capabilities", -115, 0)}</div>

### Radikale Innovationsideen aus den Innovation Booster werden weitergeführt, auch bei der Innosuisse-Förderung
Zwei Drittel der geförderten Innovationsideen werden nach Abschluss der Förderung weiterverfolgt, oft mit neuen Lösungsansätzen und auch radikalerer Ausrichtung. Die Innovation Booster haben 2022–24 durchschnittlich zu 31 bewilligten Innovationschecks und 25 bewilligten Innovationsprojekten pro Jahr geführt. Mit einem Innovationsscheck wird die Idee nochmals vertieft mit einem Forschungspartner hinsichtlich Machbarkeit geprüft, bei den Innovationsprojekten werden die Innovationsideen, wissenschaftlich verankert, weiterverfolgt um sie langfristig in die Umsetzung zu führen.
<div style="display: flex; column-gap: 20px;">
<div> ${draw_waffle("ib_continued", -100)}</div>
<div>${ib_toipis()}</div></div>

<div class="card" style="max-width: 620px">
  
# Evaluation belegt Wirkung der Innovation Booster

Die Wirkungsevaluation von Ecoplan ([2025](https://www.innosuisse.admin.ch/de/publication?id=TpGqSBI8N6Cl)) hat aufgezeigt, dass die Innovation Booster langfristige Innovationspartnerschaften, das Innovations-Knowhow und die Entwicklung neuer Ideen in vielfältigen Themenbereichen stärken. Die Zusammenarbeit und die nutzerorientierten Problemanalysen sind ihre Alleinstellungmerkmale. Diese werden künftig noch mehr Bedeutung erhalten.

## Radikalere Ideen

Die Unternehmen und Organisationen entwickeln radikale Ideen, die Probleme auf neuartige Weise lösen.
<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_radical", mode: "opposite" })}</div>
      <p>Der Anteil der Organisationen, die ihre Innovationsideen als <span class="text-neutral-b">eindeutig radikal</span> einschätzen, ist mehr als doppelt so hoch wie jener, der sie als <span class="text-neutral-a">eindeutig inkrementell</span> bewertet.
      </p>
    </div>
  </section>
</div>
<!-- <div>${draw_waffle("ib_radical", -50)}</div> -->

## Vergrösserte Netzwerke

Die Unternehmen und Organisationen erweitern ihr Netzwerk über ihr bestehendes Umfeld hinaus.

<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_new_contacts", mode: "single", mode: "single", rank: "pct1" })}</div>
      <p>Organisationen arbeiten mit Partnern ausserhalb der bestehenden Kontakte zusammen.
      </p>
    </div>
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_new_contacts", mode: "single", mode: "single", rank: "pct2" })}</div>
      <p>Organisation können nützliche neue Konkakte knüpfen.
      </p>
    </div>
</section>
</div>
<!-- <div>${draw_waffle("ib_new_contacts", -85)}</div> -->

## Gestärkte Lernkultur

Die Unternehmen und Organisationen übernehmen neues Know-how zu Innovationsmethoden und eine Kultur des Lernens und Fehlermachens.

<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_learning_effects", mode: "single", mode: "single", rank: "pct1" })}</div>
      <p>Organisationen nehmen eher bis sehr hohe längerfristige Lerneffekte zu Innovationsprozessen wahr.
      </p>
    </div>
  </section>
</div>
</div>

# Innovationsmanagement und Beratung
## Start-up Coaching

<div style="display: flex;">
  <div>${drawMiniPlot("Start-up Coaching")}</div>
  <div>${drawMiniPlot("Start-up Coaching", false)}</div>
  <div>${drawMiniPlot("Core Coaching", false)}</div>
</div>

<p style="font-size: 10px; color: #828282;">Der Betrag in Mio. Fr. und das Total der Coaching beziehen sich auf das Start-up Coaching insgesamt (Initial, Core und Scale-up Coaching). Bei der letzten Abbildung werden nur die Anzahl Core Coachings abgebildet.</p>

Das Coaching der Innosuisse richtet sich an wissenschaftsbasierte Start-ups mit hohem Innovations- und Wachstumspotenzial und bietet individuell und thematisch abgestimmte Unterstützungsangebote, die auf die jeweiligen Gründungsphasen und den spezifischen Bedarf massgeschneidert sind.

Die Coachingangebote von Innosuisse stärken die Agilität und die Kompetenzen des Gründungsteams – von der Festigung der Geschäftsidee und Businessmodellen über die Finanzierung bis hin zur Entwicklung von Wachstumsstrategien auf internationalen Märkten. Die Start-ups profitieren dabei von einem breiten Netzwerk an Coaches (200+), die sowohl allgemeine Start-up-Expertisen als auch zum Teil sehr spezialisiertes Wissen in Bereichen wie Finanzierung, Marketing, Technologien oder eigentumsrechtlichen Fragen einbringen. Die drei Phasen stellen zudem sicher, dass jedes Start-up zugleich gezielt und umfassend unterstützt wird.

- Im ****Initial Coaching**** (bis zu 12 Monate) werden Gründerinnen und Gründer dabei unterstützt, ihre Geschäftsidee zu validieren und ein erstes erfolgsversprechendes Geschäftsmodell zu entwickeln. Das Initial Coaching ist obligatorisch um in das Core Coaching einzutreten.
- Im ****Core Coaching**** (bis zu 36 Monate) liegt der Fokus auf der Weiterentwicklung des Geschäftsmodells, der Vorbereitung auf die Markteinführung und der Entwicklung von Strategien, um auf den Märkten Fuss zu fassen.
- Im ****Scale-up Coaching**** (bis zu 24 Monate) liegt der Schwerpunkt auf der längerfristigen Positionierung und Skalierung von Start-ups auf internationalen Märkten. Start-ups erhalten auch Unterstützung bei der Beschaffung von Investoren und der Umsetzung ihrer Wachstumsstrategie. Das Scale-up Coaching ist selektiv und richtet sich an «High-Potential Start-up» mit hohem Wachstumspotenzial.
- ****Internationale Start-up Camps und Messen****: Ein besonderes Augenmerk liegt auf der Internationalisierung. Start-ups im Core Coaching und Scale-up Coaching haben die Möglichkeit, an internationalen Camps teilzunehmen, die weltweit in über zehn dynamischen «Start-up Hotspots» angeboten werden. Darüber hinaus bietet das Programm auch die Chance, an internationalen Leitmessen teilzunehmen. Beide Massnahmen stärken die internationalen Netzwerke, erleichtern den Zugang zu internationalen Märkten und helfen, das Potenzial zur Skalierung besser auszuschöpfen.

Diese Breite, der modulare Aufbau sowie die Flexibilität des Coachings unterscheidet dieses von der Vielzahl anderer Angebote im nationalen und internationalen Vergleich.

Ein hoher Anteil der gecoachten Start-ups sind Ausgründungen aus der Forschung (Spin-offs), die die Schnittstelle zwischen neuesten wissenschaftlichen Ergebnissen und dem Wissens- und Technologietransfer in den Markt stärken. Viele der Start-ups im Coaching verfolgen somit bahnbrechende Geschäftsideen, Technologien oder Geschäftsmodelle.

In den letzten zehn Jahren haben Start-ups zunehmend an Bedeutung gewonnen. Das dynamische Start-up-Ökosystem stellt eine zentrale Stärke des «Innovationssystems Schweiz» dar. Durch die massgeschneiderten und breiten Coachingleistungen, wird dieses Potenzial zur Umsetzung und Skalierung auf den Märkten geführt, um hochqualifizierte Arbeitsplätze und neue Wertschöpfungspotenziale in der Schweiz zu schaffen.

Das Core Coaching bei Innosuisse ist die zentrale Phase im Start-up Coaching, in der ein Start-up seine grundlegenden Fähigkeiten und Strukturen für nachhaltigen Erfolg, Expansion und Wachstum aufbaut. Die nachfolgenden Ergebnisse beziehen sich auf das Core-Coaching.

### Start-ups beurteilen das Core Coaching als hilfreich für Ihre Weiterentwicklung
Das Core Coaching deckt ein breites Spektrum an Themen ab, die gezielt auf die spezifischen Anliegen der Start-ups ausgerichtet sind. In der untenstehenden Abbildung sind die Themenbereiche absteigend nach der Relevanz für die Start-ups sortiert (Prozentangaben in hellgrau). Die Darstellung zeigt, welche Anteile der unterstützten Start-ups das Core Coaching in den relevanten Themenfeldern als hilfreich oder sehr hilfreich einschätzen.

Der für das Coaching wichtigste Themenbereich, «Entwicklung des Geschäftsmodells» (93 %), zeigt den zweithöchsten Anteil an Start-ups, die die Unterstützung als hilfreich beurteilen (81 %). Die Unterstützung bei der Kapitalakquisition, die ebenfalls eine hohe Relevanz hat (90 %), wurde von zwei Dritteln der Start-ups (66 %) als hilfreich empfunden. Die Hilfe beim Markteintritt wurde ähnlich bewertet (66 %). Etwas niedriger fiel die Bewertung der Unterstützung bei der Skalierung des Geschäftsmodells aus (58 %), was vermutlich darauf hinweist, dass sich viele Start-ups beim Coachingabschluss noch nicht in der Phase der Skalierung befinden.

<div>${draw_results("Start-up Core Coaching", true, 225, width)}</div>

### Erwartungen der Start-ups an das Coaching werden erfüllt
Drei Viertel der gecoachten Start-ups bestätigen, dass das Core Coaching in mindestens einem relevanten Bereich einen unterstützenden oder sehr unterstützenden Beitrag geleistet hat (77 %). Der Anteil der Start-ups, deren Erwartungen mehrheitlich erfüllt wurden, liegt mit 86 % ähnlich hoch.

Für rund die Hälfte der Start-ups hat das Coaching in mindestens drei wichtigen Gründungsthemen einen wesentlichen Beitrag geleistet (55 %) bzw. wurden die Erwartungen vollständig erfüllt oder sogar noch übertroffen wurden (55 %).

<div class="chart-pair">
    ${draw_waffle("scc_support", -100)}
    ${draw_waffle("scc_expection", -100)}
</div>

### Start-ups verfolgen radikale und disruptive Geschäftsideen mit Wirkungen auf internationalen Märkten
Im Vergleich zu Innovationsprojekten verfolgen die Start-ups in der Regel deutlich mehr radikale Innovationen und Geschäftsmodelle. Nur wenige setzen klar inkrementelle Innovationen und Geschäftsmodelle um. Drei von fünf Start-ups zielen zudem darauf ab, mit disruptive Innovationen den Markt erheblich zu verändern oder sogar neue Märkte zu schaffen. Entsprechend hoch ist der Anteil der Start-ups, die eine Weltmarktneuheit oder eine Neuheit für internationale Märkte entwickeln (82 %).

<div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
    ${draw_waffle("scc_radikal_inkr", -85)}
    ${draw_waffle("scc_new_to_market", -85)}
</div>

### Start-ups schaffen Markteintritt – Profitabilität braucht mehr Zeit
Ein entscheidender Faktor für das Überleben und das Wachstum der Start-ups ist der konkrete Markteintritt, um später das Geschäftsmodell weiter zu skalieren. Bis zum Abschluss des Coachings konnten rund 72 % der Jungunternehmen ihre Innovation auf dem Markt lancieren oder planen es innerhalb eines Jahres. Der nächste Meilenstein ist die Profitabilität, wenn das Start-up beginnt, Gewinne zu erzielen. Bei etwa jedem zehnten Start-up ist dies bereits zum Abschluss des Coachings der Fall. Drei Jahre später ist es bereits fast jedes dritte Start-up.

<div class="chart-pair" style="--chart-pair-gap: var(--space-11)">
 ${draw_waffle("scc_market", -85)}
 ${draw_waffle("scc_profitable", -85)}
</div>

### Start-ups im Coaching beschaffen erfolgreich Kapital
Für Start-ups ist die Kapitalbeschaffung eine entscheidende Voraussetzung, um ihre Geschäftsidee weiterzuführen und die Skalierung auf den Märkten voranzutreiben. Forschung und Entwicklung sowie die Markteinführung einer Innovation erfordern hohe Investitionen, weshalb die Kapitalakquise ein zentrales Thema im Coaching-Programm von Innosuisse darstellt. Bis zum Abschluss des Programms haben 20 % der gecoachten Start-ups jeweils mehr als 5 Millionen Franken an neuem Kapital akquiriert. Bei zwei Dritteln der Start-ups hat das Coaching die Kapitalbeschaffung [direkt unterstützt](/de/beratung-und-netzwerk#start-ups-beurteilen-das-core-coaching-als-hilfreich-fuer-ihre-weiterentwicklung).

<div>${draw_waffle("scc_capital", -70)}</div>

### Drei Jahre nach dem Coaching werden bei den Start-ups über elf Vollzeitstellen geschaffen
Für Start-ups ist das Wachstum ein zentraler Indikator für den Erfolg. Drei Jahre nach dem Abschluss des Coaching-Programms haben die Start-ups im Durchschnitt über elf zusätzliche Vollzeitstellen geschaffen. Rund die Hälfte davon in der Schweiz. Besonders bei Start-ups im Bereich «Life Sciences» und solchen mit hochriskanten Innovationen zeigt sich, dass der Markteintritt und ein tragendes Wachstum häufig erst später einsetzen.
<div>
${su_vza()}
${su_vza_legend()}
</div>

### Coaching widerspiegelt und stärkt die Vielfalt des Ökosystems
Der Anteil von weiblichen Gründerinnen bei den Start-ups mit Coachingabschluss liegt bei 17 %. In 36 % der Gründungsteams sind weibliche Mitglieder vertreten, Tendenz zunehmend. Zudem weisen die Gründungsteams eine hohe Internationalität auf: Zwei Drittel der Start-ups haben mindestens ein Gründungsmitglied mit ausländischem Bürgerrecht und insgesamt sind durchschnittlich 41 % der Gründungsteams ausländische Mitglieder. Dies unterstreicht den internationalen Charakter der Schweizer Start-up-Szene.

Thematisch liegt im Start-up Bereich ein starker Fokus auf dem Themenbereich «Life Sciences», inklusive Medtech und Healthcare (31 %) und ICT (28 %), siehe [Förderangebote und Inhalte](/de/foerderangebote-und-inhalte#themengebiete-der-innovationsvorhaben-2023-2025). Gleichzeitig sind auch die übrigen Technologie- und Innovationsbereiche vielfältig und breit vertreten. Die nachfolgenden Ausführungen zeigen zudem, dass den Spin-offs und direkten Ausgründungen aus der Forschungslandschaft und den Hochschulen eine hohe Bedeutung zukommt. Die Internationalität spielt dabei eine wesentliche Rolle. 

Diese Diversität der geförderten Start-ups trägt wesentlich zur wirtschaftlichen und technologischen Dynamik des Start-up-Ökosystems und der Stärkung in der schweizerischen Volkswirtschaft bei.
<div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
    ${draw_waffle("scc_gender", -100)}
    ${draw_waffle("scc_foreign", -100)}
    </div>

### Viele Start-ups haben ihren Ursprung in der Forschung
Die Hälfte der Start-ups, die das Core Coaching von Innosuisse in Anspruch nehmen, haben ihren Ursprung an einer Hochschule oder einem Forschungsinstitut. Rund jedes dritte Start-up ist ein Spin-off, das geistiges Eigentum aus der Forschungsarbeit wirtschaftlich nutzen möchte und dies vertraglich geregelt hat. Drei von vier Start-ups geben an, dass sie ihr geistiges Eigentum bereits mit einem Patent geschützt haben oder dies in naher Zukunft planen.
  <div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
    ${draw_waffle("scc_start_spin", -70)}
    ${draw_waffle("scc_patent", -70)}
</div>
