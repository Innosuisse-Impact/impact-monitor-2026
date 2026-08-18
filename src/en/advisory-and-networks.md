---
title: Advice and Networking
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { drawMiniPlot, draw_waffle, draw_bar, draw_results, ib_toipis, su_vza, su_vza_legend} from "../functions.js"
import { df_waffle } from "../data.js"
```

# Innovation Management and Advisory
## Start-up Coaching

<div style="display: flex;">
  <div>${drawMiniPlot("Start-up Coaching")}</div>
  <div>${drawMiniPlot("Start-up Coaching", false)}</div>
  <div>${drawMiniPlot("Core Coaching", false)}</div>
</div>

<p style="font-size: 10px; color: #828282;">The amount in millions of francs and the total number of coaching sessions relate to Start-up Coaching as a whole (Initial, Core and Scale-up Coaching). The last figure shows only the number of Core Coachings.</p>

Innosuisse's coaching is aimed at science-based start-ups with a high potential for innovation and growth and offers individually and thematically tailored support services that are customised to the respective start-up phases and specific needs.

Innosuisse's coaching services strengthen the agility and skills of the founding team – from consolidating the business idea and business models to financing and developing growth strategies in international markets. Start-ups benefit from a broad network of coaches (200+), who contribute both general start-up expertise and, in some cases, very specialised knowledge in areas such as financing, marketing, technologies or intellectual property rights. The three phases also ensure that each start-up receives targeted and comprehensive support at the same time.
- In the ****Initial Coaching**** (up to 12 months), founders are supported in validating their business idea and developing an initial promising business model. The Initial Coaching is mandatory to enter the Core Coaching.
- ****Core Coaching**** (up to 36 months) focuses on further developing the business model, preparing for market launch and developing strategies for gaining a foothold in the markets.
- ****Scale-up Coaching**** (up to 24 months) focuses on the longer-term positioning and scaling of start-ups in international markets. Start-ups also receive support in attracting investors and implementing their growth strategy. Scale-up Coaching is selective and aimed at high-potential start-ups with strong growth potential.
- ****International Start-up Camps and trade fairs****: Particular attention is paid to internationalisation. Start-ups in Core Coaching and Scale-up Coaching have the opportunity to participate in international camps that are offered in over ten dynamic start-up hotspots worldwide. In addition, the programme offers the opportunity to participate in leading international trade fairs. Both measures strengthen international networks, facilitate access to international markets and help to better exploit the potential for scaling up.

This breadth, the modular structure and the flexibility of the coaching distinguish it from the multitude of other offers in national and international comparison.

A high proportion of the start-ups coached are spin-offs from research, which strengthen the interface between the latest scientific results and the transfer of knowledge and technology to the market. Many of the start-ups in coaching thus pursue groundbreaking business ideas, technologies or business models.

Over the last ten years, start-ups have become increasingly important. The dynamic start-up ecosystem is a key strength of the Swiss innovation system. Through tailored and broad coaching services, this potential for implementation and scaling in the markets is being realised to create highly skilled jobs and new value creation potential in Switzerland.

Core Coaching at Innosuisse is the central phase in Start-up Coaching, in which a start-up builds its fundamental capabilities and structures for lasting success, expansion and growth. The following results relate to Core Coaching.

### Start-ups rate Core Coaching as helpful for their further development
Core Coaching covers a wide range of topics that are specifically tailored to the concerns of start-ups. The topics are ranked in descending order of their relevance to start-ups (see percentages in light grey). The chart shows the percentage of supported start-ups that rate Core Coaching as helpful or very helpful in the relevant topic areas.

The topic area of greatest importance for coaching, 'development of the business model' (93%), shows the second-highest proportion of start-ups that rate the support as helpful (81%). Support in acquiring capital, which is also highly relevant (90%), was perceived as helpful by two-thirds of start-ups (66%). Help with market entry was rated similarly (66%). The rating for support in scaling the business model was somewhat lower (58%), which probably indicates that many start-ups are not yet in the actual scaling phase when the coaching is completed.

<div>${draw_results("Start-up Core Coaching", true, 280, width)}</div>

### Start-ups' coaching expectations are being met
Three quarters of start-ups that received coaching confirmed that Core Coaching had made an important contribution in at least one relevant area (77%), with this being rated as 'supportive' or 'very supportive'. The proportion of start-ups whose expectations were largely met was similarly high at 86%.

For around half of the start-ups, the coaching made a significant contribution in at least three important start-up topics (55%). The proportion of start-ups for which expectations were fully met or even exceeded was similarly high (55%).

<div class="chart-pair">
    ${draw_waffle("scc_support", -85)}
    ${draw_waffle("scc_expection", -85)}
</div>

### Start-ups pursue radical and disruptive business ideas with an impact on international markets
Compared to innovation projects, start-ups generally pursue more radical innovations and business models. Only a few implement clearly incremental innovations and business models. The majority also aim to realise disruptive innovations and significantly change the market or even create new markets with their innovations. The proportion of start-ups that develop a world market first or a first for international markets is correspondingly high (82%).

<div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
    ${draw_waffle("scc_radikal_inkr", -70)}
    ${draw_waffle("scc_new_to_market", -70)}
</div>

### Start-ups succeed in entering the market – profitability takes more time
A decisive factor for the survival and growth of start-ups is to actually enter the market in order to scale the business model later. By the time the coaching was completed, around 72% of the young companies had launched their innovation on the market or planned to do so within a year. The next milestone is profitability, when the start-up begins to make a profit. This is already the case for about one in ten start-ups by the time the coaching programme is completed. Three years later, this applies to almost one in three start-ups.

<div class="chart-pair" style="--chart-pair-gap: var(--space-11)">
 ${draw_waffle("scc_market", -85)}
 ${draw_waffle("scc_profitable", -85)}
</div>

### Start-ups in the coaching programme successfully raise capital
For start-ups, fundraising is crucial to continuing their business idea and scaling it in the markets. Research and development and the market launch of an innovation require a high level of investment, which is why fundraising is a central topic in Innosuisse's coaching programme. By the end of the programme, 20% of the start-ups coached had each acquired more than CHF 5 million in new capital. For two-thirds of the start-ups, coaching [directly supported](#start-ups-rate-core-coaching-as-helpful-for-their-further-development) fundraising.

<div>${draw_waffle("scc_capital", -70)}</div>

### Three years after the coaching, start-ups have created over eleven full-time positions.
For start-ups, growth is a key indicator of success. Three years after completing the coaching programme, the start-ups have created an average of over eleven additional full-time positions. Around half of these are in Switzerland. It is particularly evident in start-ups in the 'Life Sciences' sector and those with high-risk innovations that market entry and sustainable growth often only occur later.

<div>
${su_vza(width)}
${su_vza_legend()}
</div>

### Coaching reflects and strengthens the diversity of the ecosystem
The share of female founders among start-ups that complete the coaching programme is 17%. Female members are represented in 36% of the start-up teams, and the trend is increasing. In addition, the start-up teams are highly international: 67% of start-ups have at least one founding member with foreign citizenship, and an average of 41% of the start-up teams are foreign members. This underlines the international character of the Swiss start-up scene.

In terms of topics, there is a strong focus in the start-up sector on the thematic area of Life Sciences, including Medtech and Healthcare (31%) and ICT (28%), see [support offers and content](support-offers-and-content). At the same time, the other technology and innovation areas are also widely and diversely represented. The following remarks also show that spin-offs from the research landscape and universities are of great importance. Internationality plays an important role in this.

The diversity of the start-ups funded makes a significant contribution to the economic and technological dynamics of the start-up ecosystem and to strengthening the Swiss economy as a whole.

<div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
    ${draw_waffle("scc_gender", -85)}
    ${draw_waffle("scc_foreign", -85)}
    </div>

### Many start-ups have their origins in research
Half of the start-ups that take advantage of Innosuisse's Core Coaching originate from a university or research institute. Around one in three start-ups is a spin-off that wants to exploit intellectual property from research work commercially and has contractually regulated this. Three out of four start-ups state that they have already protected their intellectual property with a patent or plan to do so in the near future.

<div class="chart-pair" style="--chart-pair-gap: var(--space-3)">
${draw_waffle("scc_start_spin", -70)}
${draw_waffle("scc_patent", -70)}
</div>

# Knowledge and Networks
## Innovation Booster
<div style="display: flex;">
  <div>${drawMiniPlot("Innovation Booster")}</div>
  <div>${drawMiniPlot("Innovation Booster", false)}</div>
  </div>
  <p class = "comment">In contrast to the other mini-charts, these charts show the amounts invested rather than the amounts approved, and the active rather than the approved Innovation Boosters.</p>

The Innovation Boosters funded by Innosuisse each focus on a specific innovation topic. They cover a wide range of topics, from artificial intelligence to tourism and food tech.

The Innovation Boosters develop new and radical innovation ideas and test them in an open, network-based innovation process with an open innovation culture. The partners of the funded networks come from research, business and society. The focus of the funding is on the early phase of idea generation and testing, using experimental methods such as design thinking and co-creation.

A key objective of the Innovation Boosters is to further develop successfully tested innovation ideas, including within the framework of funded innovation projects. This promotes science-based and sustainable innovations and provides implementation partners and the Swiss innovation system with concrete added value and competitive advantages.

### Innovation Boosters strengthen the innovation skills of the participants
The aim of the Innovation Boosters is to develop new and radical innovation ideas during the challenge phase, which are then tested for feasibility and potential in terms of demand and user orientation in a further phase of idea testing.

The vast majority of respondents (81%) confirm that their participation in an Innovation Booster has increased their ability and competence to develop and test radical ideas.

<div>${draw_waffle("ib_capabilities", -100, 0)}</div>

### Radical innovation ideas from the Innovation Boosters are pursued further, including with Innosuisse funding
Two-thirds of the innovation ideas that receive funding are pursued further after the funding period ends, often with new approaches and even more radical orientations. In 2022–24, the Innovation Boosters led to an average of 31 approved Innovation cheques and 25 approved innovation projects per year. With an Innovation cheque, the idea is examined in more detail with a research partner in terms of feasibility. In the case of innovation projects, the innovation ideas are pursued in a scientifically sound manner with the aim of implementing them in the long term.

<div style="display: flex; column-gap: 20px;">
<div> ${draw_waffle("ib_continued", -85)}</div>
<div>${ib_toipis(width)}</div>
</div>

<div class="card" style="max-width: 620px">

# Evaluation confirms the impact of the Innovation Boosters

The impact evaluation by Ecoplan ([2025](https://www.innosuisse.admin.ch/de/publication?id=TpGqSBI8N6Cl)) has shown that the Innovation Boosters strengthen long-term innovation partnerships, innovation know-how and the development of new ideas across a wide range of topics. Collaboration and user-centred problem analyses are their unique selling points. These will become even more important in the future.

## More radical ideas

Companies and organisations develop radical ideas that solve problems in new ways.
<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_radical", mode: "opposite" })}</div>
      <p>The proportion of organisations that rate their innovation ideas as <span class="text-neutral-b">clearly radical</span> is more than twice as high as those that rate them as <span class="text-neutral-a">clearly incremental</span>.
      </p>
    </div>
  </section>
</div>

## Expanded networks

Companies and organisations expand their networks beyond their existing environment.

<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_new_contacts", mode: "single", rank: "pct1" })}</div>
      <p>Organisations work with partners outside their existing contacts.
      </p>
    </div>
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_new_contacts", mode: "single", rank: "pct2" })}</div>
      <p>Organisations are able to make useful new contacts.
      </p>
    </div>
</section>
</div>

## Strengthened learning culture

Companies and organisations adopt new know-how on innovation methods and a culture of learning and accepting failure.

<div class="claims-wrapper">
 <section class="claim" style="margin-bottom: 0px">
    <div class="figure" style="align-items:center">
      <div class="figure__col">${draw_bar(df_waffle, { title: "ib_learning_effects", mode: "single", rank: "pct1" })}</div>
      <p>Organisations perceive rather high to very high long-term learning effects on innovation processes.
      </p>
    </div>
  </section>
</div>
</div>
