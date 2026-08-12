---
title: Overview of support offers and content of the impact monitoring
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_fin_plot, n_subcluster} from "../functions.js"
```

# Overview of support offers and content

The current status of the impact monitoring is structured in such a way that at least for the financially most significant support offer in each category of funding offers, statements can be made on the effectiveness and selected comparisons. The current gaps (in light colour) will be closed step by step.
 
## Funding of Innovation Projects

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Projects by companies with researchers</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen mit Forschenden",115,true, width)}
  <h5 style= "margin-bottom: 0;">Projects by companies</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen", 25, false, width)}
  <h5 style= "margin-bottom: 0;">Projects by researchers</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Forschenden", 70, false, width)}
</div>

## Advisory and Networking

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Knowledge and Network</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Wissen und Netzwerke",55,false, width)}
  <h5 style= "margin-bottom: 0;">Innovation Management and Advisory</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Innovationsmanagement und Beratung",55, false, width)}
</div>

<p class="comment">Source: Cockpit/PowerBI Innosuisse (2025)
<br>* The results of the impact monitoring for the highlighted instruments are presented subsequently. The 'Swiss Accelerator' funding programme is not listed (approved funding per year, ⌀ 2023–25: CHF 57.4 million). It was a temporary replacement measure (2023–24) in response to the non-association with Horizon Europe.</p>.

The majority of Innosuisse funding goes to national and international innovation projects. The greatest importance is attached here to standard innovation projects between companies¹ and researchers, in which the research institutions are primarily compensated for the remuneration of research staff. The participating companies and organisations, for their part, contribute 40–60% of the total project costs.

In addition, companies are supported in initiating innovation projects by means of Innovation Boosters, mentoring, the Enterprise Europe Network (partner search), and other events. Start-ups can benefit from coaching, training and internationalisation offers. The results of the impact monitoring of the Innovation Boosters and Start-up Core Coaching are presented here.

Results can also be presented for innovation projects by researchers without implementation partners.

The inclusion of international innovation projects in the impact monitoring is planned for the 2025 reporting year. The projects in which start-ups and SMEs are directly supported (Start-up innovation projects and Swiss Accelerator) will be integrated into the monitoring at a later date, as none of the projects have yet been completed. This applies equally to the Flagship Initiative projects.

<p class="comment">¹ In the following, 'company' is often used as a synonym for 'implementation partner'. This is not entirely precise because the implementation partners can include companies as well as administrations, non-profit organisations and other private or public institutions. However, the vast majority of implementation partners are companies (SMEs, large companies and start-ups), which is why we are taking the liberty of simplifying here in order to make the texts easier to understand.<p>

## Thematic areas of the innovation projects 2023–2025
The approved innovation projects can be categorised into five different thematic areas, which are also shown in the chart below, broken down by support offers. The chart shows the percentage share of funding allocated to each thematic area within the approved innovation projects / coachings, averaged over the years 2023–2025. The percentage shares by instrument differ, sometimes significantly.

- <span class="text-cat-1">Engineering</span> has a higher and comparable share in Innovation projects with implementation partners (37%), Innovation cheques (32%) and in BRIDGE Proof of Concept (31%).
- <span class="text-cat-2">Life Sciences</span>, on the other hand, accounts for a very high proportion of innovation projects without implementation partners (66%) and an above-average proportion of start-ups in coaching (38%). It is the most important subject area in BRIDGE Proof of Concept (34%).
- The differences for '<span class="text-cat-3">Energy & environment</span>' are smaller, ranging between 9% for innovation projects without implementation partner and 17% for innovation projects with implementation partner.
- <span class="text-cat-4">Information and communication technologies ICT</span> is the most important area for start-ups in coaching (30%).
- <span class="text-cat-5">Social sciences & business management'</span> is most strongly represented in innovation cheques (21%); otherwise, the proportions are comparatively smaller.

<div>${n_subcluster(width)}</div>
