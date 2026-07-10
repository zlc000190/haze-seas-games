/**
 * Haze Seas Devil Fruits — sourced from the official Haze Studios Trello
 * and cross-verified against hazeseas.com/systems/devil-fruits
 * (snapshot 2026-07-05 ET).
 *
 * - 35 documented fruits (37 total incl. 2 unobtainable)
 * - Rarities: Common → Uncommon → Rare → Legendary → Mythical
 * - Types: Natural / Paramecia / Logia
 * - Spawn: every 60 min, despawn after 20 min
 * - VIP servers can spawn up to 5 fruits manually
 */

export type FruitRarity = "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical" | "TBD";
export type FruitType = "Natural" | "Paramecia" | "Logia";
export type FruitStatus = "Obtainable" | "Unobtainable";

export interface AwakeningChain {
  to: string;
  trainer?: string;
}

export interface HazeSeasFruit {
  slug: string;
  name: string;
  nameZh: string;
  rarity: FruitRarity;
  type: FruitType;
  status: FruitStatus;
  notes?: string;
  notesZh?: string;
  awakeningChain?: AwakeningChain[];
}

export const fruits: HazeSeasFruit[] = [
  // Common — Natural
  { slug: "vanish",      name: "Vanish",      nameZh: "隐身",     rarity: "Common",    type: "Natural",   status: "Obtainable" },
  { slug: "spin",        name: "Spin",        nameZh: "旋转",     rarity: "Common",    type: "Natural",   status: "Obtainable" },
  { slug: "spike",       name: "Spike",       nameZh: "尖刺",     rarity: "Common",    type: "Natural",   status: "Obtainable" },

  // Uncommon
  { slug: "bomb",        name: "Bomb",        nameZh: "炸弹",     rarity: "Uncommon",  type: "Natural",   status: "Obtainable" },
  { slug: "barrier",     name: "Barrier",     nameZh: "屏障",     rarity: "Uncommon",  type: "Paramecia", status: "Obtainable" },

  // Rare — Paramecia
  { slug: "paw",         name: "Paw",         nameZh: " Paw  Paw ",    rarity: "Rare",      type: "Paramecia", status: "Obtainable" },
  { slug: "string",      name: "String",      nameZh: "线线",     rarity: "Rare",      type: "Paramecia", status: "Obtainable" },
  { slug: "gravity",     name: "Gravity",     nameZh: "重力",     rarity: "Rare",      type: "Paramecia", status: "Obtainable" },

  // Rare — Logia
  { slug: "smoke",       name: "Smoke",       nameZh: "烟雾",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },
  { slug: "sand",        name: "Sand",        nameZh: "沙沙",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },
  { slug: "snow",        name: "Snow",        nameZh: "雪雪",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },
  { slug: "gas",         name: "Gas",         nameZh: "瓦斯",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },
  { slug: "flame",       name: "Flame",       nameZh: "火焰",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },
  { slug: "electricity", name: "Electricity", nameZh: "雷电",     rarity: "Rare",      type: "Logia",     status: "Obtainable" },

  // Legendary — Paramecia
  { slug: "tremor",      name: "Tremor",      nameZh: "震震",     rarity: "Legendary", type: "Paramecia", status: "Obtainable",
    notes: "Reworked 2026-06-28", notesZh: "2026-06-28 重做" },
  { slug: "operation",   name: "Operation",   nameZh: "手术",     rarity: "Legendary", type: "Paramecia", status: "Obtainable" },

  // Legendary — Logia
  { slug: "light",       name: "Light",       nameZh: "闪闪",     rarity: "Legendary", type: "Logia",     status: "Obtainable" },
  { slug: "ice",         name: "Ice",         nameZh: "冰冰",     rarity: "Legendary", type: "Logia",     status: "Obtainable" },
  { slug: "magma",       name: "Magma",       nameZh: "岩浆",     rarity: "Legendary", type: "Logia",     status: "Obtainable" },
  { slug: "darkness",    name: "Darkness",    nameZh: "暗暗",     rarity: "Legendary", type: "Logia",     status: "Obtainable" },

  // Mythical — Paramecia (TBD rarity still being balanced)
  { slug: "circus",      name: "Circus",      nameZh: " Circus  Circus",  rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "mammoth",     name: "Mammoth",     nameZh: "象象",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "buddha",      name: "Buddha",      nameZh: "佛佛",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "shadow",      name: "Shadow",      nameZh: "影子",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "love",        name: "Love",        nameZh: "甜甜",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "magnet",      name: "Magnet",      nameZh: "磁磁",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },
  { slug: "wolf",        name: "Wolf",        nameZh: "犬犬",     rarity: "TBD",       type: "Paramecia", status: "Obtainable" },

  // Mythical — Paramecia (with awakening chains)
  { slug: "phoenix",     name: "Phoenix",     nameZh: "鸟鸟",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable" },
  { slug: "soul",        name: "Soul",        nameZh: "魂魂",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable" },
  { slug: "leopard",     name: "Leopard",     nameZh: "豹豹",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable" },
  { slug: "venom",       name: "Venom",       nameZh: "毒毒",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable" },
  { slug: "gum",         name: "Gum",         nameZh: "橡胶",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable",
    notes: "Awakens to Gear 4 / Gear 5", notesZh: "可觉醒为 Gear 4 / Gear 5",
    awakeningChain: [
      { to: "Gum-Gear 4" },
      { to: "Gum-Gear 5", trainer: "Incurr" }
    ]
  },
  { slug: "dragon",      name: "Dragon",      nameZh: "龙龙",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable",
    notes: "Awakens to Full Form", notesZh: "可觉醒为完全形态",
    awakeningChain: [{ to: "Dragon-Full Form" }]
  },
  { slug: "dough",       name: "Dough",       nameZh: "糯糯",     rarity: "Mythical",  type: "Paramecia", status: "Obtainable" },
  // Sea 3 Update 1 (2026-07-04 ET) live
  { slug: "okuchi",      name: "Okuchi",      nameZh: "大口大口", rarity: "Mythical",  type: "Paramecia", status: "Obtainable",
    notes: "Mythical — released in Sea 3 Update 1; awakens to Full Form",
    notesZh: "神话级 — Sea 3 Update 1 实装,可觉醒为完全形态",
    awakeningChain: [{ to: "Okuchi — Full Form" }]
  },

  // Unobtainable (Sea 3, not yet droppable)
  { slug: "saturn",       name: "Saturn",       nameZh: "土星",     rarity: "Mythical", type: "Paramecia", status: "Unobtainable",
    notes: "Sea 3 — drops from Saturn boss (Egghead Island, top). Currently Unobtainable.",
    notesZh: "Sea 3 — Saturn boss 掉落(Egghead Island 顶部)。目前无法获得。"
  },
  { slug: "dragon-hybrid",name: "Dragon-Hybrid",nameZh: "龙人形态",rarity: "Mythical", type: "Paramecia", status: "Unobtainable",
    notes: "Dragon's Hybrid form. Drops from Dragon Hybrid boss (Land of Gods, center).",
    notesZh: "龙的龙人形态。Dragon Hybrid boss 掉落(Land of Gods 中心)。"
  }
];

export const fruitsSpawnRules = {
  spawnEveryMin: 60,
  despawnAfterMin: 20,
  vipMaxConcurrent: 5,
  rarityOrder: ["Common", "Uncommon", "Rare", "Legendary", "Mythical"] as const
};

export const fruitsSnapshot = {
  date: "2026-07-05",
  total: fruits.length,
  obtainable: fruits.filter(f => f.status === "Obtainable").length,
  unobtainable: fruits.filter(f => f.status === "Unobtainable").length,
  source: "Official Haze Studios Trello + hazeseas.com/systems/devil-fruits"
};