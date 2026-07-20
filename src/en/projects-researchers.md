---
title: Projects by researchers
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { drawMiniPlot, draw_waffle, draw_results} from "../functions.js"
```

# Projects by researchers
## Innovation projects without implementation partner
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner", false)}</div>
</div>

The aim of innovation projects without implementation partners is to transfer scientific findings into practical solutions. They enable researchers to develop high-risk projects with a high potential for innovation towards application and to take the first steps towards implementation. A prerequisite for funding is a clear potential benefit for the economy or society as well as the potential for implementation for a later application.

Innovation projects without implementation partners thus promote application-oriented research and innovation projects and aim for commercial implementation in business and society in the longer term.

### Successful steps towards implementation
Around four out of five innovation projects have successfully tested their feasibility. One in two funded projects delivers conclusive results for further implementation steps and/or is highly likely to bring the innovation to market.

<div>${draw_results("Innovationsprojekte ohne Umsetzungspartner", false, 450, width)}</div>

### Scientific output is higher than in projects with implementation partners
Published scientific results are an important form of knowledge and technology transfer (KTT). They serve to disseminate project results in research and application and strengthen KTT. The dissertations are an indication of the novelty and quality of the research and the associated risk of finding a (technological) solution for implementation. 

As expected, the share of results published in scientific journals and the share of dissertations is significantly higher for innovation projects without implementation partners. The share of interdisciplinary projects is similarly high, and the share of transdisciplinary projects is slightly lower because fewer actors are involved.

<div class="chart-pair">
${draw_waffle("ipr_peer_review",-70)}
${draw_waffle("ipr_inter_trans",-70)}
</div>

### Innovation projects without implementation partners are research- and implementation-oriented.
In three out of five projects , cooperation with potential implementation partners was already underway. In addition to the transfer of knowledge and technology to established companies, start-ups and spin-offs emerging from research play an important role in KTT. In 45% of the projects, such a spin-off has already been founded or is planned.

<div>${draw_waffle("ipr_imppartner", -70)}</div>

### Achievement of objectives is high in research, but lower for application- and implementation-oriented objectives.
The research objectives are fully achieved or even exceeded in two-thirds of the funded projects. The achievement of objectives in terms of application orientation is significantly lower. This may be an indication of high risks for market launch, or possibly more time and resources are needed to develop solutions, or the project partners are less experienced in taking a technological development or solution further towards market implementation.

<div class="chart-pair">
${draw_waffle("ipr_research_goals",-70,5)}
${draw_waffle("ipr_impl_goals",-70,5)}
</div>

## BRIDGE Discovery
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Discovery")}</div>
  <div>${drawMiniPlot("BRIDGE Discovery", false)}</div>
</div>

BRIDGE is the joint funding programme of Innosuisse and the Swiss National Science Foundation (SNSF) and combines basic and application-oriented research with implementation. BRIDGE Discovery aims to identify the innovative potential of research results, develop it further in a targeted way, and translate it into applications. The programme enables experienced researchers to implement scientifically excellent projects with a clear vision of future application and to develop the scientific foundations for innovative products, services or societal solutions. Funding is conditional upon a convincing implementation strategy and high economic or societal potential.

BRIDGE Discovery thus funds projects at the interface between basic research and applied research and aims, in the longer term, to realise the innovation in business or society. BRIDGE Discovery thus closes an important gap between application-oriented research and concrete implementation. The funding lays the foundations for later transfer and implementation steps, which are often only realised after the project has been completed.

### Results achieved for implementation
Compared with innovation projects without implementation partners, the proportion of projects that have assessed feasibility, achieved conclusive results for implementation, or where the researchers expect the innovation to be brought to market is around 10 percentage points higher.
<div>${draw_results("BRIDGE Discovery", false, 450, width)}</div>

### Very high scientific output
In the vast majority of cases, BRIDGE Discovery also involves excellent research being conducted and published. The proportion is once again significantly higher for Discovery projects than for innovation projects without implementation partners. The proportion of inter- and transdisciplinary projects is similarly high to that of innovation projects without implementation partners.
<div class="chart-pair">
${draw_waffle("bd_peer_review",-100)}
${draw_waffle("bd_inter_trans",-100)}
</div>

### BRIDGE Discovery projects are practice-oriented
BRIDGE Discovery projects, too, focus primarily on collaboration with implementation partners (76%) and, secondarily, on establishing a spin-off (53%). This is slightly higher than for innovation projects without implementation partners (58% collaboration vs. 45% spin-off). Depending on the project, different implementation paths lead via collaboration with existing partners, a spin-off, or the licensing of research results.
<div>${draw_waffle("bd_imppartner", -85)}</div>

### The achievement of objectives is high
Unlike innovation projects without implementation partners, most Discovery projects not only fully achieve but also exceed both their research- and application-oriented targets.
<div class="chart-pair">
${draw_waffle("bd_research_goals",-100)}
${draw_waffle("bd_impl_goals",-100)}
</div>

## BRIDGE Proof of Concept
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Proof of Concept")}</div>
  <div>${drawMiniPlot("BRIDGE Proof of Concept", false)}</div>
  </div>
  
BRIDGE Proof of Concept is aimed at young researchers working at the interface between basic research and science-based innovation. The programme offers one year of support to further develop research results in an application-oriented way, with the aim of bringing them to market maturity and preparing the researchers for a career outside academia.

### BRIDGE Proof of Concept leads to start-ups and spin-offs
The impact of BRIDGE Proof of Concept is reflected in the proportion of funding that leads to new companies. More than two out of three researchers supported go on to found a start-up or spin-off (start-up with formal IP licensing). This is almost double the rate for innovation projects without implementation partners. However, it should be noted that the survey is different. For innovation projects without implementation partners, the survey is conducted at the end of the project. For BRIDGE Proof of Concept, a separate research was conducted that is very up to date (2025) and thus covers a longer period of time.
  
${draw_waffle("br_spinoffs", -100)}
