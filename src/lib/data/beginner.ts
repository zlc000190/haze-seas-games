/**
 * Haze Seas Beginner Guide — 7 real steps from hazeseas.com/guides/beginner
 * (snapshot 2026-07-01 ET).
 */

export interface BeginnerStep {
  step: number;
  title: string;
  titleZh: string;
  detail: string;
  detailZh: string;
  checklist: string[];
  checklistZh: string[];
}

export const beginnerSteps: BeginnerStep[] = [
  {
    step: 1,
    title: "Pick your device",
    titleZh: "选择设备",
    detail: "Haze Seas runs on PC, Xbox, Mobile, and PlayStation. PC gives the most controls; Mobile works but aim for a stable connection.",
    detailZh: "Haze Seas 支持 PC、Xbox、Mobile、PlayStation。PC 操控最完整;Mobile 也可玩但需要稳定网络。",
    checklist: ["PC = best controls", "Mobile = stable connection", "Console supported"],
    checklistZh: ["PC 操控最佳", "Mobile 需要稳定网络", "主机支持"]
  },
  {
    step: 2,
    title: "Learn the controls",
    titleZh: "学习操作",
    detail: "Open the in-game Game Info to review keybinds. Practice movement, dashing (Flash Step once unlocked), and combat.",
    detailZh: "打开游戏内 Game Info 查看按键绑定。练习移动、冲刺(解锁后的 Flash Step)、战斗。",
    checklist: ["Open Game Info menu", "Practice movement", "Practice dashing"],
    checklistZh: ["打开 Game Info 菜单", "练习移动", "练习冲刺"]
  },
  {
    step: 3,
    title: "Read the in-game Game Info",
    titleZh: "阅读游戏内 Game Info",
    detail: "The Game Info card covers spawn rules, mastery, and systems — the same source this wiki draws from.",
    detailZh: "Game Info 卡片包含刷新规则、Mastery、系统说明——本站内容同源。",
    checklist: ["Spawn rules", "Mastery system", "Core mechanics"],
    checklistZh: ["刷新规则", "Mastery 系统", "核心机制"]
  },
  {
    step: 4,
    title: "Redeem your first codes",
    titleZh: "兑换首批兑换码",
    detail: "Use the Treasure Chest menu to redeem active codes for free Cash and Race Spins. See the codes page for the current list and snapshot date.",
    detailZh: "使用宝箱菜单兑换当前兑换码,获取免费金币和种族转盘。完整列表见 codes 页。",
    checklist: ["Open Menu", "Tap Treasure Chest icon", "Redeem all active codes"],
    checklistZh: ["打开 Menu", "点击宝箱图标", "兑换所有 active 兑换码"]
  },
  {
    step: 5,
    title: "Choose your first build",
    titleZh: "选择首套 build",
    detail: "Pick one Devil Fruit and one weapon/style to focus mastery on. Logia fruits (Magma, Ice, Light) are forgiving for new players.",
    detailZh: "选 1 个恶魔果实 + 1 个武器/战斗风格,集中练 Mastery。Logia 系列(Magma、Ice、Light)对新玩家最友好。",
    checklist: ["1 Devil Fruit", "1 weapon or style", "Logia (Magma/Ice/Light) for new players"],
    checklistZh: ["1 个恶魔果实", "1 个武器或战斗风格", "新玩家选 Logia(Magma/Ice/Light)"]
  },
  {
    step: 6,
    title: "Track fruit spawns",
    titleZh: "追踪果实刷新",
    detail: "Fruits spawn every 60 minutes and despawn after 20. The Fruit Notifier gamepass helps; on VIP servers you can spawn fruits (up to 5).",
    detailZh: "果实每 60 分钟刷新,20 分钟后消失。Fruit Notifier gamepass 可提醒;VIP 服务器可手动刷新(最多 5 个)。",
    checklist: ["Spawn: every 60 min", "Despawn: 20 min", "Fruit Notifier gamepass", "VIP server: spawn up to 5"],
    checklistZh: ["每 60 分钟刷新", "20 分钟后消失", "Fruit Notifier gamepass", "VIP 服务器最多刷新 5 个"]
  },
  {
    step: 7,
    title: "Join the community",
    titleZh: "加入社区",
    detail: "Join the official Haze Studios Discord and Roblox group for codes, status, and Sea 3 updates (Land of the Gods is live now).",
    detailZh: "加入官方 Haze Studios Discord 和 Roblox 群,获取最新兑换码、状态、Sea 3 更新(Land of the Gods 已实装)。",
    checklist: ["Join Haze Studios Discord", "Join Haze Studios Roblox group", "Follow Trello for Sea 3 updates"],
    checklistZh: ["加入 Haze Studios Discord", "加入 Haze Studios Roblox 群", "关注 Trello 获取 Sea 3 更新"]
  }
];

export const beginnerNextSteps = {
  title: "Next steps",
  titleZh: "下一步",
  links: [
    { name: "Devil Fruits", href: "/systems/devil-fruits", zh: "恶魔果实" },
    { name: "Leveling Guide", href: "/guides/leveling", zh: "练级指南" },
    { name: "Tier List", href: "/tier-list", zh: "Tier 排行" }
  ]
};