/**
 * Haze Seas Updates — patch & content timeline
 * Source: hazeseas.com/updates (snapshot 2026-07-05 ET).
 * All dates US Eastern Time (ET).
 */

export type UpdateKind = "major" | "minor" | "patch";

export interface HazeSeasUpdate {
  date: string;          // ISO date
  kind: UpdateKind;
  title: string;
  titleZh: string;
  body: string;
  bodyZh: string;
  highlights: string[];
  highlightsZh: string[];
}

export const updates: HazeSeasUpdate[] = [
  {
    date: "2026-07-04",
    kind: "major",
    title: "Sea 3 Update 1: Land of the Gods + Okuchi Now Live",
    titleZh: "Sea 3 Update 1: Land of the Gods + Okuchi 上线",
    body: "Haze Seas' first major update opens Sea 3 with the Land of the Gods island and the Mythical Okuchi Devil Fruit. The Sage of Combat trainer upgrades fighting styles in Land of the Gods; more Sea 3 islands and bosses arrive in later updates.",
    bodyZh: "Haze Seas 首个重大更新,Sea 3 开放 Land of the Gods 岛屿与 Mythical Okuchi 恶魔果实。Sage of Combat 训练师在 Land of the Gods 升级战斗风格;更多 Sea 3 岛屿和 Boss 后续更新陆续登场。",
    highlights: [
      "New sea region: Sea 3 opens with Land of the Gods",
      "New Mythical Devil Fruit: Okuchi (with Full Form awakening)",
      "New Skill Trainer: Sage of Combat in Land of the Gods",
      "New codes: OKUCHI, PATCH"
    ],
    highlightsZh: [
      "新海域:Sea 3 开放 Land of the Gods",
      "新 Mythical 恶魔果实:Okuchi(可觉醒为 Full Form)",
      "新技能训练师:Sage of Combat(Land of the Gods)",
      "新兑换码:OKUCHI、PATCH"
    ]
  },
  {
    date: "2026-07-01",
    kind: "major",
    title: "Sea 3 + Okuchi Announced for July 4",
    titleZh: "Sea 3 + Okuchi 公告(7 月 4 日)",
    body: "Haze Studios confirmed the next major content drop: Sea 3 would open with the Land of the Gods and the Okuchi Devil Fruit, scheduled for 2026-07-04 03:00 ET per the Roblox event card. It went live on schedule (see Update 1).",
    bodyZh: "Haze Studios 确认下一次重大内容更新:Sea 3 开放 Land of the Gods 和 Okuchi 恶魔果实,按 Roblox 活动卡计划 2026-07-04 03:00 ET 上线。已如期上线(见 Update 1)。",
    highlights: [
      "New sea: Land of the Gods (Sea 3 first region)",
      "New Devil Fruit: Okuchi (now live as of Update 1)",
      "Launched 2026-07-04 ET (see Update 1)"
    ],
    highlightsZh: [
      "新海域:Land of the Gods(Sea 3 首发区域)",
      "新恶魔果实:Okuchi(已于 Update 1 实装)",
      "2026-07-04 ET 上线(见 Update 1)"
    ]
  },
  {
    date: "2026-06-30",
    kind: "major",
    title: "Haze Seas Remaster Released",
    titleZh: "Haze Seas 重制版上线",
    body: "The full Haze Seas remaster went live, replacing the legacy HAZE PIECE build. Sea 1 (18 islands) and Sea 2 (14 islands) are playable now; Sea 3 follows (Upcoming).",
    bodyZh: "Haze Seas 完整重制版上线,取代旧 HAZE PIECE 版本。Sea 1(18 岛)和 Sea 2(14 岛)现已可玩;Sea 3 即将开放。",
    highlights: [
      "Remaster release (formerly HAZE PIECE)",
      "Sea 1 + Sea 2 fully playable",
      "34 Devil Fruits available across both seas"
    ],
    highlightsZh: [
      "重制版上线(原名 HAZE PIECE)",
      "Sea 1 + Sea 2 完全可玩",
      "两片海域共 34 个恶魔果实"
    ]
  },
  {
    date: "2026-06-28",
    kind: "minor",
    title: "Tremor Fruit Rework",
    titleZh: "Tremor 果实重做",
    body: "The Tremor (Gura) Devil Fruit received a full moveset rework ahead of release, rebalancing its PvE and PvP kit. Full showcase is on the official YouTube channel.",
    bodyZh: "Tremor(Gura)恶魔果实在上线前完成整套技能重做,平衡 PvE 与 PvP。完整演示见官方 YouTube 频道。",
    highlights: [
      "Tremor moveset reworked",
      "PvE / PvP rebalance pass",
      "Official showcase video published"
    ],
    highlightsZh: [
      "Tremor 技能组重做",
      "PvE / PvP 平衡调整",
      "官方演示视频已发布"
    ]
  }
];

export const updatesSnapshot = {
  date: "2026-07-05",
  total: updates.length,
  source: "hazeseas.com/updates + official Roblox event card"
};