/**
 * Haze Seas Awakenings — Gum, Dragon, Okuchi chains (snapshot 2026-07-01 ET).
 */

export interface AwakeningTrainer {
  name: string;
  unlocks: string;
}

export interface AwakeningChain {
  slug: string;
  fruitSlug: string;
  fruitName: string;
  fruitNameZh: string;
  steps: { stage: string; stageZh: string; trainer?: string }[];
  notes?: string;
  notesZh?: string;
}

export const awakeningTrainers: AwakeningTrainer[] = [
  { name: "Yoka",   unlocks: "Gear 2" },
  { name: "Incurr", unlocks: "Gear 5" },
  { name: "Carol",  unlocks: "Electro awakening (fighting style)" }
];

export const awakeningChains: AwakeningChain[] = [
  {
    slug: "gum",
    fruitSlug: "gum",
    fruitName: "Gum",
    fruitNameZh: "橡胶",
    steps: [
      { stage: "Gum",          stageZh: "橡胶",        trainer: "Yoka" },
      { stage: "Gum-Gear 4",   stageZh: "橡胶 Gear 4" },
      { stage: "Gum-Gear 5",   stageZh: "橡胶 Gear 5", trainer: "Incurr" }
    ],
    notes: "Dragon-Hybrid is listed on the Trello but is Unobtainable in the current build — do not treat it as an active awakening.",
    notesZh: "Dragon-Hybrid 在 Trello 列出但当前版本无法获得 — 不要当作可用觉醒。"
  },
  {
    slug: "dragon",
    fruitSlug: "dragon",
    fruitName: "Dragon",
    fruitNameZh: "龙龙",
    steps: [
      { stage: "Dragon",                stageZh: "龙龙" },
      { stage: "Dragon-Full Form",      stageZh: "龙龙完全形态" }
    ]
  },
  {
    slug: "okuchi",
    fruitSlug: "okuchi",
    fruitName: "Okuchi",
    fruitNameZh: "大口大口",
    steps: [
      { stage: "Okuchi",                stageZh: "大口大口" },
      { stage: "Okuchi — Full Form",    stageZh: "大口大口完全形态", trainer: "Sage of Combat (Sea 3)" }
    ],
    notes: "Released with Sea 3 Update 1 (2026-07-04 ET).",
    notesZh: "随 Sea 3 Update 1(2026-07-04 ET)上线。"
  }
];

export const awakeningsSnapshot = {
  date: "2026-07-01",
  totalChains: awakeningChains.length,
  source: "hazeseas.com/systems/awakenings"
};