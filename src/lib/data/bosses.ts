/**
 * Haze Seas Super Bosses — all 17 bosses from hazeseas.com/bosses
 * (snapshot 2026-07-05 ET).
 *
 * Sea 3 bosses (Saturn, Dragon Hybrid, Red Emperor, Ghostship, Cthulhu)
 * are still unreleased as of the snapshot date.
 */

export type BossSea = "Sea 1" | "Sea 2" | "Sea 3" | "—";
export type BossStatus = "Released" | "Unreleased";

export interface Boss {
  slug: string;
  name: string;
  sea: BossSea;
  status: BossStatus;
  location: string;
  locationZh: string;
  spawn: string;
  spawnZh: string;
  drops: string;
  dropsZh: string;
}

export const bosses: Boss[] = [
  // Sea 1
  {
    slug: "dual-swordsman", name: "Dual Swordsman", sea: "Sea 1", status: "Released",
    location: "Logue City", locationZh: "Logue City",
    spawn: "Every 60 min; deal 20% HP for rewards", spawnZh: "每 60 分钟;造成 20% HP 可获奖励",
    drops: "Book 50%, Green Bandana 50%, $5k, 10 gems, 500 Bounty",
    dropsZh: "Book 50%、Green Bandana 50%、$5k、10 gems、500 Bounty"
  },
  {
    slug: "mace-boss", name: "Mace Boss", sea: "Sea 1", status: "Released",
    location: "Cave behind Marine Base Town", locationZh: "Marine Base Town 后山洞",
    spawn: "Unlock gate with Lava Key, drop Lava Ore in cauldron; deal 20% HP", spawnZh: "用 Lava Key 开锁,往大锅投 Lava Ore;造成 20% HP",
    drops: "Mace 100%, Coded Mask 100%, $5k, 15 gems, 700 Bounty",
    dropsZh: "Mace 100%、Coded Mask 100%、$5k、15 gems、700 Bounty"
  },
  {
    slug: "tremor-girl", name: "Tremor Girl", sea: "Sea 1", status: "Released",
    location: "—", locationZh: "—",
    spawn: "Unlock with TremorBeard Key (Ice Admiral drop, Marine HQ); deal 20% HP",
    spawnZh: "用 TremorBeard Key 解锁(Ice Admiral 掉落,Marine HQ);造成 20% HP",
    drops: "Bisento V2 50% (need V1), White Orb 25%, $15k, 20 gems, 1000 Bounty",
    dropsZh: "Bisento V2 50%(需 V1)、White Orb 25%、$15k、20 gems、1000 Bounty"
  },
  {
    slug: "fire-fist", name: "Fire Fist", sea: "Sea 1", status: "Released",
    location: "Tall Woods", locationZh: "Tall Woods",
    spawn: "Match (Warden, Impel Jail 5%) → light campfire → place 4 Pearls in Totems; deal 20% HP",
    spawnZh: "匹配(Warden,Impel Jail 5%)→ 点燃营火 → 4 颗 Pearl 放入 Totem;造成 20% HP",
    drops: "Flame Fruit 1%, Pearl Necklace 100%, $20k, 25 gems, 1400 Bounty",
    dropsZh: "Flame Fruit 1%、Pearl Necklace 100%、$20k、25 gems、1400 Bounty"
  },
  {
    slug: "seabeast", name: "SeaBeast", sea: "Sea 1", status: "Released",
    location: "Rocky pillars (Sea 1) / any water (Sea 2-3)", locationZh: "Sea 1 礁石柱 / Sea 2-3 任意水域",
    spawn: "Sea 1 every 30m–2h; Sea 2-3 every 20m–1h",
    spawnZh: "Sea 1 每 30 分-2 小时;Sea 2-3 每 20 分-1 小时",
    drops: "Sea 1: SeaBeast Core, SB Hammer 50%; Sea 2-3: SeaBeast Heart 25%, SB Hammer V2 3.5%",
    dropsZh: "Sea 1: SeaBeast Core、SB Hammer 50%;Sea 2-3: SeaBeast Heart 25%、SB Hammer V2 3.5%"
  },

  // Sea 2
  {
    slug: "enma-boss", name: "Enma Boss", sea: "Sea 2", status: "Released",
    location: "Flower Capital mansion", locationZh: "Flower Capital 大厦",
    spawn: "Every 1h", spawnZh: "每 1 小时",
    drops: "Enma 10%, 2500 Bounty", dropsZh: "Enma 10%、2500 Bounty"
  },
  {
    slug: "dragon-boss", name: "Dragon Boss", sea: "Sea 2", status: "Released",
    location: "Top of Dragon Island", locationZh: "Dragon Island 顶端",
    spawn: "Use Dragon Orb (0.5% Mace V2 Boss drop)",
    spawnZh: "使用 Dragon Orb(Mace V2 Boss 0.5% 掉落)",
    drops: "Drums of Liberation 100% (if using Gum), Dragon Horns 10%, 3500 Bounty",
    dropsZh: "Drums of Liberation 100%(使用 Gum 时)、Dragon Horns 10%、3500 Bounty"
  },
  {
    slug: "dough-boss", name: "Dough Boss", sea: "Sea 2", status: "Released",
    location: "Mirror World", locationZh: "Mirror World",
    spawn: "Mirror fragment (1% Big Mom) → Syn → 10 doughnuts → 50 Gems to Spex; 2h CD",
    spawnZh: "Mirror fragment(Big Mom 1%)→ Syn → 10 甜甜圈 → 给 Spex 50 Gems;2 小时 CD",
    drops: "Dough Scarf 10%, Dough Trident 50%, 5000 Bounty, 25 gems",
    dropsZh: "Dough Scarf 10%、Dough Trident 50%、5000 Bounty、25 gems"
  },
  {
    slug: "darkblade-v2-boss", name: "DarkBlade V2 Boss", sea: "Sea 2", status: "Released",
    location: "Foggy Castle", locationZh: "Foggy Castle",
    spawn: "DarkBlade Upgrader quest (own DarkBlade); 2h CD",
    spawnZh: "DarkBlade Upgrader 任务(需拥有 DarkBlade);2 小时 CD",
    drops: "DarkBlade V2", dropsZh: "DarkBlade V2"
  },
  {
    slug: "zenith", name: "Zenith", sea: "Sea 2", status: "Released",
    location: "Shadow Island cave", locationZh: "Shadow Island 洞穴",
    spawn: "During storm (every 2h 35m)", spawnZh: "风暴期间(每 2 小时 35 分)",
    drops: "Zenith 100% (for 3SS); required for Race V2 quest",
    dropsZh: "Zenith 100%(用于 3SS);Race V2 任务必需"
  },
  {
    slug: "raijin", name: "Raijin", sea: "Sea 2", status: "Released",
    location: "Sky Islands", locationZh: "Sky Islands",
    spawn: "—", spawnZh: "—",
    drops: "Golden Staff 1%, Thunder Drums 1% (via Thunder God)",
    dropsZh: "Golden Staff 1%、Thunder Drums 1%(经 Thunder God)"
  },
  {
    slug: "xmas-boss", name: "Xmas Boss", sea: "—", status: "Released",
    location: "Winter Island", locationZh: "Winter Island",
    spawn: "Via Snow Orb", spawnZh: "通过 Snow Orb",
    drops: "Ice Crown 20%", dropsZh: "Ice Crown 20%"
  },

  // Sea 3 — all unreleased
  {
    slug: "saturn", name: "Saturn", sea: "Sea 3", status: "Unreleased",
    location: "Egghead Island (top)", locationZh: "Egghead Island(顶部)",
    spawn: "Pirate raid every 1h 15m; defend 3 waves × 10 NPC Lv 5000",
    spawnZh: "每 1 小时 15 分海盗突袭;守住 3 波 × 10 NPC Lv 5000",
    drops: "Saturn's Ring 100%, Gravity Gauntlet 15%, Blade Fragment 10%",
    dropsZh: "Saturn's Ring 100%、Gravity Gauntlet 15%、Blade Fragment 10%"
  },
  {
    slug: "dragon-hybrid", name: "Dragon Hybrid", sea: "Sea 3", status: "Unreleased",
    location: "Land of Gods (center)", locationZh: "Land of Gods(中心)",
    spawn: "Trumpet from random chest (every 2h) or 0.1% any Sea 3 NPC",
    spawnZh: "随机宝箱出 Trumpet(每 2 小时)或任意 Sea 3 NPC 0.1%",
    drops: "Dragon Heart 100%, Blade Fragment 10%",
    dropsZh: "Dragon Heart 100%、Blade Fragment 10%"
  },
  {
    slug: "red-emperor", name: "Red Emperor", sea: "Sea 3", status: "Unreleased",
    location: "Throne Room", locationZh: "Throne Room",
    spawn: "Every 4h (−10m per superboss killed worldwide, max −2h)",
    spawnZh: "每 4 小时(每全球击杀 1 个 superboss -10 分钟,最多 -2 小时)",
    drops: "Gryphon 2.5%, Emperor Cape 5%, Blade Fragment ×2",
    dropsZh: "Gryphon 2.5%、Emperor Cape 5%、Blade Fragment ×2"
  },
  {
    slug: "ghostship", name: "Ghostship", sea: "Sea 3", status: "Unreleased",
    location: "Sea 3 (during storm)", locationZh: "Sea 3(风暴期间)",
    spawn: "Green ghost altar during storm; sacrifice 20 pts of fruits",
    spawnZh: "风暴期间绿色幽灵祭坛;献祭 20 pts 果实",
    drops: "Phantom Lantern 100%, Blade Fragment 10%, Ghastly Haki 10% (chest)",
    dropsZh: "Phantom Lantern 100%、Blade Fragment 10%、Ghastly Haki 10%(宝箱)"
  },
  {
    slug: "cthulhu", name: "Cthulhu", sea: "Sea 3", status: "Unreleased",
    location: "Sea whirlpool (during storm)", locationZh: "海洋漩涡(风暴期间)",
    spawn: "Prismatic Shard (5 mythical materials → Doran the Forge) fed to whirlpool; no despawn",
    spawnZh: "Prismatic Shard(5 个神话材料 → Doran the Forge)投入漩涡;不消失",
    drops: "Abyssal Eye 100%, Abyssal Haki 10%, 5 levels/250 gems/500k$",
    dropsZh: "Abyssal Eye 100%、Abyssal Haki 10%、5 级/250 gems/50 万 $"
  }
];

export const bossesSnapshot = {
  date: "2026-07-05",
  total: bosses.length,
  released: bosses.filter(b => b.status === "Released").length,
  unreleased: bosses.filter(b => b.status === "Unreleased").length,
  sea3Released: false,
  source: "hazeseas.com/bosses"
};