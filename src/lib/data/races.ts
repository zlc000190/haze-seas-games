/**
 * Haze Seas Races — 7 races from Common to Mythical (snapshot 2026-07-01 ET)
 * All races have V2 upgrade (via Race Engineer NPC).
 */

export type RaceRarity = "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical";

export interface HazeSeasRace {
  slug: string;
  name: string;
  nameZh: string;
  rarity: RaceRarity;
  hasV2: boolean;
  notes: string;
  notesZh: string;
}

export const races: HazeSeasRace[] = [
  { slug: "human",       name: "Human",       nameZh: "人类",     rarity: "Common",    hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "skyborne",    name: "Skyborne",    nameZh: "天空族",   rarity: "Uncommon",  hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "fishborne",   name: "Fishborne",   nameZh: "鱼人族",   rarity: "Uncommon",  hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "beastborne",  name: "Beastborne",  nameZh: "兽族",     rarity: "Uncommon",  hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "demon",       name: "Demon",       nameZh: "恶魔族",   rarity: "Rare",      hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "dragonborne", name: "Dragonborne", nameZh: "龙族",     rarity: "Legendary", hasV2: true,  notes: "—",                                 notesZh: "—" },
  { slug: "d-clan",      name: "D.Clan",      nameZh: "D.Clan",   rarity: "Mythical",  hasV2: true,
    notes: "Grants conqueror power; tied to Conqueror Clashing.",
    notesZh: "获得霸王色霸气;与 Conqueror Clashing 机制绑定。" }
];

export const racesSnapshot = {
  date: "2026-07-01",
  total: races.length,
  source: "hazeseas.com/systems/races"
};