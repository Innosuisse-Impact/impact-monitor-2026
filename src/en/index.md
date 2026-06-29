---
title: The impact of Innosuisse funding
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

# The impact of Innosuisse funding<br>2023–2025
<p class="comment">Version 2.0, last changes: 18 June 2026</p>
</div>
<br>

Innosuisse places great emphasis on transparently demonstrating the effectiveness of innovation promotion based on the following two questions:

* What impact do the public funds used have on companies, start-ups and other organisations?
* Is knowledge and technology transfer between organisations and research being strengthened, and in what way?

The most important results from the impact monitoring are briefly summarised below for each support offer. The results are presented in detail and briefly discussed in the main section.

## Innovation project funding

### Innovation projects with implementation partners

National innovation projects are Innosuisse's most important funding instrument. Companies and organisations from business and society cooperate with research partners to jointly develop innovative products, services, processes or new business models.
<div class="claims-wrapper">
  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Projects cover the full spectrum of innovation and lead to new products, services and processes.</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_radikal_inkr", mode: "opposite" })}</div>
      <p>Funded organisations classify their projects in almost equal shares as <span class="text-neutral-a">clearly incremental</span> and <span class="text-neutral-b">clearly radical</span>.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_project_goals", mode: "opposite" })}</div>
      <p>They achieve their project goals <span class="text-positive">fully or even exceed</span> them, while only a small share <span class="text-negative">fails to achieve them sufficiently</span>.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">The results reach the market.</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct2" })}</div>
      <p>Innovations are on the market at project completion or are expected to be launched within a year.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ip_time_to_market", mode: "single", rank: "pct1" })}</div>
      <p>Three years later, the innovations have already been implemented or their implementation is planned within two years.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">The economic impact is clear.</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Jobs</div>
        <div class="figure__value">+ 18%</div>
        <div class="figure__title">Sales</div>
        <div class="figure__value">+ 21%</div>
      </div>
      <p>An independent scientific study by the KOF Swiss Economic Institute (ETH Zurich) provides the first causal evidence for the effectiveness of innovation projects. It compared funded companies with similar firms that received no funding. Over a five-year period, funded companies created an average of 18% more jobs and grew 21% faster.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Full-time positions</div>
        <div class="figure__value">+ 2.5</div>
      </div>
      <p>Innosuisse's impact measurement associates each completed project with an average of 2.5 additional full-time positions three years after completion.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
        <div class="figure__title">Value added<br>multiplier</div>
        <div class="figure__value">x4</div>
      </div>
      <p>EBP estimates that each Swiss franc of funding generates around four francs of added value within three years.</p>
    </div>
    <a class="claim__link" href="/en/projects-companies-researchers">To the detailed results<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Innovation cheques

The innovation cheque offers SMEs and start-ups low-threshold funding. The aim is to carry out feasibility and market studies as well as technological clarifications.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">SMEs begin structured cooperation with research partners</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_connection", mode: "single", rank: "pct1" })}</div>
      <p>SMEs work with a research partner at a university or research institution for the first time.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">The results are useful and lead to the implementation of innovations</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct1" })}</div>
      <p>SMEs continue to develop their innovation idea after completion with the same research partner.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "is_ideas", mode: "single", rank: "pct2" })}</div>
      <p>Some apply for or concretely plan a full Innosuisse innovation project within a year.</p>
    </div>
    <a class="claim__link" href="/en/projects-companies-researchers#innovation-cheques">To the detailed results<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Innovation projects without implementation partner

Innovation projects without implementation partners aim to develop scientific findings from high-risk projects with high innovation potential towards application and to take first steps towards implementation.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Researchers take steps towards implementation</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Projects successfully test the feasibility of the innovation idea. Concrete implementation steps become possible.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Projects achieve conclusive results for implementation.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Innovations will be implemented in practice in the future.</h3>
            <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>Innovations have a high probability of longer-term potential for a market launch.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Researchers are already working with potential implementation partners.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ipr_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Researchers have founded or are planning to spin off a start-up.</p>
    </div>
    <a class="claim__link" href="/en/projects-researchers">To the detailed results <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE: Discovery

The support offer from the Swiss National Science Foundation (SNSF) and Innosuisse aims to develop research results at the interface between basic and applied research into scientifically excellent projects with high innovation potential, and to lay the foundations for implementation.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Research groups take steps towards implementation</h3>
            <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct1" })}</div>
      <p>Projects have tested the feasibility.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_proj_stand", mode: "single", rank: "pct2" })}</div>
      <p>Projects provide conclusive results that enable concrete implementation steps.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Discovery projects are also application-oriented, but the start-up path plays a secondary role</h3>
            <span class="claim__level">Outcome</span>
    </header>
        <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_umsetzung", mode: "single", rank: "pct1" })}</div>
      <p>The project is likely or very likely to be implemented on the market.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct1" })}</div>
      <p>Research groups work with potential implementation partners.</p>
    </div>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "bd_imppartner", mode: "single", rank: "pct2" })}</div>
      <p>Research groups have founded or are planning to spin off a start-up or spin-off.</p>
    </div>
    <a class="claim__link" href="/en/projects-researchers#bridge-discovery">To the detailed results <span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### BRIDGE: Proof of Concept

BRIDGE Proof of Concept gives researchers a year of support to develop research results into marketable applications and to prepare a career outside research and universities.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Founding start-ups from research</h3>
      <span class="claim__level">Impact</span>
    </header>
    <div class="figure">
      <div class="figure__col"><div class="figure__value">69%</div></div>
      <p>Researchers found a start-up or spin-off (start-up with formal IP licensing) after the funding.</p>
    </div>
    <a class="claim__link" href="/en/projects-researchers#bridge-proof-of-concept">To the detailed results <span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Advisory services and networking

<div class="claims-wrapper">

### Innovation Booster

In the topic-oriented Innovation Boosters, new and radical innovation ideas are developed in an open, network-based innovation process. The focus is on the early phase of experimental idea generation and testing. Promising innovation ideas are to be pursued further in projects.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Skills and competencies of participants are enhanced</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_capabilities", mode: "single", rank: "pct1" })}</div>
      <p>Respondents confirm that their participation in an Innovation Booster has increased their ability to develop and test radical ideas.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Innovation ideas are brought to implementation</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_continued", mode: "single", rank: "pct1" })}</div>
      <p>Innovation ideas are pursued further, often with new approaches. This results in an average of 26 innovation projects at Innosuisse per year.</p>
    </div>
    <a class="claim__link" href="/en/advisory-and-networks">To the detailed results<span class="claim__link-arrow">→</span></a>
  </section>
</div>

<div class="claims-wrapper">

### Start-up Coaching

The coaching supports start-ups with innovative and science-based business ideas through tailored support in various founding phases. The support offer is divided into three coordinated offers – Initial, Core and Scale-up Coaching. Start-ups have the opportunity to participate in international camps and internationally important trade fairs. The results of the impact monitoring relate to Start-up Core Coaching.

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Core Coaching creates added value for start-ups</h3>
      <span class="claim__level">Output</span>
    </header>
    <div class="figure">
      <div class="figure__col">${draw_bar(df_waffle, { title: "scc_support", mode: "single", rank: "pct1" })}</div>
      <p>Start-ups confirm that Core Coaching has made a significant contribution in at least one key area for them. The share of start-ups whose expectations of the overall coaching process were mostly met is even slightly higher.</p>
    </div>
  </section>

  <section class="claim">
    <header class="claim__header">
      <h3 class="claim__title">Start-ups in coaching successfully raise capital</h3>
      <span class="claim__level">Outcome</span>
    </header>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct1" })}
      </div>
      <p>Start-ups have successfully acquired risk capital by the time they complete the coaching.</p>
    </div>
    <div class="figure">
      <div class="figure__col">
      ${draw_bar(df_waffle, { title: "scc_capital", mode: "single", rank: "pct2" })}
      </div>
      <p>Some start-ups have already raised over 5 million francs in capital during this period. Two thirds received significant support with fundraising during Core Coaching.</p>
    </div>
    <a class="claim__link" href="/en/advisory-and-networks">To the detailed results<span class="claim__link-arrow">→</span></a>
  </section>
</div>

## Report structure
* The chapter [Methodology](/en/methodology) explains the embedding and conception of the impact monitoring.
* The chapter [Support Offers and Content](/en/support-offers-and-content) shows how broadly the monitoring covers Innosuisse's instruments. The [Comparative Results](/en/comparative-results) compare the support offers with each other.
* After that, the results of the impact monitoring are presented and explained in a chapter for each support offer.
