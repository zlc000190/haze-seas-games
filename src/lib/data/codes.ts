/**
 * Haze Seas Codes data — sourced from the official Haze Studios Trello
 * (snapshot 2026-07-05/06 ET, mirrored from hazeseas.com/codes).
 * Source of truth: https://trello.com/c/HazeSeasOfficial
 */

export type CodeStatus = "active" | "pending" | "unverified";

export interface HazeSeasCode {
  code: string;
  reward: string;
  rewardZh: string;
  status: CodeStatus;          // active / pending / unverified
  source: "official" | "community";
  notes?: string;              // notes (zh)
  isNew?: boolean;
}

/**
 * Codes as of 2026-07-05/06 ET snapshot.
 * - `active`     = confirmed working, on official Trello
 * - `pending`    = on official Trello but reward not yet detailed
 * - `unverified` = community-reported, not on official Trello
 */
export const codes: HazeSeasCode[] = [
  {
    code: "OKUCHI",
    reward: "5 Race Spins",
    rewardZh: "5 次种族转盘",
    status: "active",
    source: "official",
    notes: "Released with Sea 3 Update 1 (Land of the Gods). 2026-07-04 ET.",
    isNew: true
  },
  {
    code: "HAZESEAS2026",
    reward: "10 Race Spins",
    rewardZh: "10 次种族转盘",
    status: "active",
    source: "official",
    isNew: true
  },
  {
    code: "RELEASE",
    reward: "1 hour 2x EXP",
    rewardZh: "1 小时双倍经验",
    status: "active",
    source: "official"
  },
  {
    code: "FREECASH",
    reward: "50,000 Cash",
    rewardZh: "50,000 金币",
    status: "active",
    source: "official"
  },
  {
    code: "FREEGEMS",
    reward: "50 Gems",
    rewardZh: "50 宝石",
    status: "active",
    source: "official"
  },
  {
    code: "SUBSCRIBETOHAZEYT",
    reward: "50,000 Cash",
    rewardZh: "50,000 金币",
    status: "active",
    source: "official",
    notes: "Official YouTube subscribe code."
  },
  {
    code: "Sub2Nikkolapz",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "Sub2BadiTubes",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "Sub2BrosSiam",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "Sub2BuilderboyTV",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "Sub2XenoTy",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "Sub2CaptainMaui",
    reward: "20 min 2x EXP",
    rewardZh: "20 分钟双倍经验",
    status: "active",
    source: "official",
    notes: "Creator code (in-game unit pending verification)."
  },
  {
    code: "PATCH",
    reward: "Pending — not yet detailed on Trello",
    rewardZh: "待定 — 官方 Trello 暂未公布奖励",
    status: "pending",
    source: "official",
    notes: "On official card, reward pending."
  },
  {
    code: "GROUPONLY",
    reward: "Race Spins",
    rewardZh: "种族转盘",
    status: "unverified",
    source: "community",
    notes: "Community-reported. Requires joining the Haze Studios Roblox group first."
  }
];

export const expiredCodes: { code: string; reward: string }[] = [
  { code: "HAZEPIECE23",        reward: "Race Spins + EXP Boost" },
  { code: "UPDATESARECOMING",   reward: "Race Spins + EXP Boost" },
  { code: "GOGOGAGA",           reward: "Race Spins, Gems, EXP Boost" },
  { code: "GEAR5TH",            reward: "Race Spins, Gems, Stat Refund" },
  { code: "250KLETSGO",         reward: "Race Spins, Gems, Stat Refund" },
  { code: "220KLIKES4CODE",     reward: "Race Spins, Gems, EXP Boost" },
  { code: "DRAGONUPDATE23",     reward: "Race Spins, Gems, Stat Refund" }
];

export const codesSnapshot = {
  date: "2026-07-06",
  et: true,
  source: "Trello (Haze Studios) + hazeseas.com cross-check",
  totalActive: codes.filter(c => c.status === "active").length,
  totalPending: codes.filter(c => c.status === "pending").length,
  totalUnverified: codes.filter(c => c.status === "unverified").length
};