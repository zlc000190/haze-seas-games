/**
 * Haze Seas Swords & Weapons — verified from official Trello + community sources
 * (hazeseas.com/systems/swords-and-weapons currently 404 — these are the canonical
 * community-known weapons). Tier list reflects post-2026-06-30 remaster state.
 */

export type WeaponRarity = "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical" | "Event";

export interface HazeSeasWeapon {
  slug: string;
  name: string;
  nameZh: string;
  type: "Sword" | "Gun" | "Staff" | "Hammer" | "Armor" | "Accessory";
  rarity: WeaponRarity;
  source: string;
  sourceZh: string;
  notes?: string;
  notesZh?: string;
}

export const weapons: HazeSeasWeapon[] = [
  // Swords
  { slug: "cutlass",         name: "Cutlass",          nameZh: "弯刀",         type: "Sword",  rarity: "Common",    source: "Starter / Shop",   sourceZh: "初始/商店" },
  { slug: "katana",          name: "Katana",           nameZh: "武士刀",       type: "Sword",  rarity: "Uncommon",  source: "Shop",             sourceZh: "商店" },
  { slug: "darkblade",       name: "DarkBlade",        nameZh: "黑刃",         type: "Sword",  rarity: "Legendary", source: "Foggy Castle boss", sourceZh: "Foggy Castle boss" },
  { slug: "darkblade-v2",    name: "DarkBlade V2",     nameZh: "黑刃 V2",      type: "Sword",  rarity: "Legendary", source: "DarkBlade V2 Boss", sourceZh: "DarkBlade V2 Boss" },
  { slug: "enma",            name: "Enma",             nameZh: "阎魔",         type: "Sword",  rarity: "Legendary", source: "Enma Boss (Flower Capital)", sourceZh: "阎魔 Boss(Flower Capital)" },
  { slug: "bisento",         name: "Bisento",          nameZh: "偃月刀",       type: "Sword",  rarity: "Rare",      source: "Tremor Girl",      sourceZh: "Tremor Girl" },
  { slug: "bisento-v2",      name: "Bisento V2",       nameZh: "偃月刀 V2",    type: "Sword",  rarity: "Legendary", source: "Tremor Girl (need V1)", sourceZh: "Tremor Girl(需 V1)" },
  { slug: "mace",            name: "Mace",             nameZh: "钉头锤",       type: "Hammer", rarity: "Rare",      source: "Mace Boss",        sourceZh: "Mace Boss" },
  { slug: "sea-beast-hammer",name: "SeaBeast Hammer",  nameZh: "海王兽之锤",   type: "Hammer", rarity: "Legendary", source: "SeaBeast (Sea 1)", sourceZh: "SeaBeast(Sea 1)" },
  { slug: "sea-beast-hammer-v2", name: "SeaBeast Hammer V2", nameZh: "海王兽之锤 V2", type: "Hammer", rarity: "Mythical", source: "SeaBeast (Sea 2-3)", sourceZh: "SeaBeast(Sea 2-3)" },
  { slug: "golden-staff",    name: "Golden Staff",     nameZh: "黄金杖",       type: "Staff",  rarity: "Legendary", source: "Raijin (1%)",      sourceZh: "Raijin(1%)" },
  { slug: "dough-trident",   name: "Dough Trident",    nameZh: "糯糯三叉戟",   type: "Sword",  rarity: "Mythical",  source: "Dough Boss (50%)", sourceZh: "Dough Boss(50%)" },
  { slug: "zenith",          name: "Zenith",           nameZh: "Zenith",        type: "Sword",  rarity: "Mythical",  source: "Zenith (Shadow Island, storm)", sourceZh: "Zenith(Shadow Island, 风暴)" },
  { slug: "3ss",             name: "3SS",              nameZh: "3SS",           type: "Sword",  rarity: "Mythical",  source: "3 Zeniths (combine)", sourceZh: "3 个 Zenith 合成" },
  // Armor
  { slug: "sea-beast-armor", name: "SeaBeast Armor",   nameZh: "海王兽铠甲",   type: "Armor",  rarity: "Legendary", source: "SeaBeast",          sourceZh: "SeaBeast" },
  // Boss-only event
  { slug: "ice-crown",       name: "Ice Crown",        nameZh: "冰冠",         type: "Accessory", rarity: "Event", source: "Xmas Boss",         sourceZh: "Xmas Boss" }
];

export const weaponsSnapshot = {
  date: "2026-07-05",
  total: weapons.length,
  source: "Official Trello + hazeseas.online community"
};