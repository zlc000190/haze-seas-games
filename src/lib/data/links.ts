/**
 * Haze Seas official channel links — verified from hazeseas.com/links
 * (snapshot 2026-07-02 ET). ONLY trust these.
 */

export interface OfficialLink {
  name: string;
  url: string;
  description: string;
  descriptionZh: string;
  emoji: string;
}

export const officialLinks: OfficialLink[] = [
  {
    name: "Roblox",
    url: "https://www.roblox.com/games/6918802270",
    description: "Play Haze Seas on Roblox (Place ID 6918802270). PC, Xbox, Mobile, and PlayStation.",
    descriptionZh: "在 Roblox 玩 Haze Seas(Place ID 6918802270)。支持 PC、Xbox、Mobile、PlayStation。",
    emoji: "🎮"
  },
  {
    name: "Discord",
    url: "https://discord.gg/haze-seas",
    description: "Official Haze Seas Discord — first place new codes and updates drop.",
    descriptionZh: "官方 Haze Seas Discord — 新兑换码和更新首发地。",
    emoji: "💬"
  },
  {
    name: "Trello",
    url: "https://trello.com/b/haze-seas-official-trello",
    description: "Roadmap, fruit/boss/island data, and the official Codes card.",
    descriptionZh: "路线图、果实/Boss/岛屿数据,官方 Codes 卡片。",
    emoji: "📋"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@RealHazeStudios",
    description: "Trailers, rework showcases, and update videos from Haze Studios.",
    descriptionZh: "Haze Studios 官方预告、重做展示、更新视频。",
    emoji: "📺"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/RealHazeStudios",
    description: "@RealHazeStudios — announcements and code drops.",
    descriptionZh: "@RealHazeStudios — 公告和兑换码首发。",
    emoji: "🐦"
  },
  {
    name: "Roblox Group",
    url: "https://www.roblox.com/groups/haze-studios",
    description: "Haze Studios Roblox group — join to unlock group-gated rewards (e.g. the GROUPONLY code).",
    descriptionZh: "Haze Studios Roblox 群 — 加入解锁群专属奖励(如 GROUPONLY 兑换码)。",
    emoji: "👥"
  }
];

export const developerInfo = {
  name: "Haze Studios",
  tag: "[HS]",
  remakeName: "HAZE PIECE",
  remakeReleasedDate: "2026-06-30"
};