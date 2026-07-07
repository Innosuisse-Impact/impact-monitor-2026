// Data import
import { FileAttachment } from "observablehq:stdlib";
import { getLang } from "./lang.js";

const lang = getLang();

export const daten_controlling = await FileAttachment("data/daten_controlling.csv").csv({ typed: true });

const df_subcluster = await FileAttachment("data/daten_subcluster.csv").csv({ typed: true });

// instrument_n: instrument name in the current language (axis labels are
// wrapped by Plot via lineWidth, no manual line breaks needed)
export const df_subcluster_n = df_subcluster.map((d) => ({
  ...d,
  instrument_n: d[`instrument_${lang}`] ?? d.instrument_de
}));

export const df_waffle = await FileAttachment("data/daten_waffle.csv").csv({ typed: true });

// KOF DiD data with language-aware type labels
const kofTypeLabels = {
  de: { employment: "Beschäftigung", sales: "Umsatz" },
  en: { employment: "Employment", sales: "Sales" },
  fr: { employment: "Emploi", sales: "Ventes" }
};

export const kof_did = await FileAttachment("data/daten_kof_did.txt")
  .tsv()
  .then((data) =>
    data.map((d) => ({
      ...d,
      type_local: kofTypeLabels[lang][d.type] ?? d.type
    }))
  );

const df_ziel_erfolg = await FileAttachment("data/daten_zielerreichung.csv").csv({ typed: true });
export const df_ziel = df_ziel_erfolg.filter((d) => d.category === "Zielerreichung");

export const df_zufrieden = df_ziel_erfolg.filter((d) => d.category === "Zufriedenheit");

export const df_ergebnisse = await FileAttachment("data/daten_ergebnisse.csv").csv({ typed: true });

const innovationsart = await FileAttachment("data/daten_innovationsart.csv").csv({ typed: true });

// instrument_n / type_n: labels in the current language (axis labels are
// wrapped by Plot via lineWidth, no manual line breaks needed)
export const df_innovationsart = innovationsart.map((d) => ({
  ...d,
  instrument_n: d[`instrument_${lang}`] ?? d.instrument_de,
  [`type_${lang}_n`]: d[`type_${lang}`] ?? d.type_de
}));
