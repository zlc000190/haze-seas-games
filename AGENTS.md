# AGENTS.md - Haze Seas Games Project Hub

> This is the project hub for the Haze Seas Games website.
> Any agent picking up this project should read this file first.

## Project Overview

**Domain**: hazeseas.com (or local dev at localhost:3456)
**Path**: `/Users/zhanglongchao/programPJ/hazeseas`
**Framework**: Next.js 16 + next-intl (i18n: en/zh) + Tailwind CSS
**Theme**: Pirate / One Piece inspired (配色: #0b1220 #111a2e #f5b94d #3aa9ff)

## Business Model

Haze Seas 是 Roblox 上的海盗动作 RPG（by Haze Studios），拥有 245M+ 访问量。
我们的网站是 **fan-made wiki + 攻略 + 小游戏平台**，通过 SEO 获取 "haze seas" 搜索流量。

### 目标关键词（按搜索量排序）
1. haze seas codes (最高搜索量)
2. haze seas tier list
3. haze seas devil fruits
4. haze seas beginner guide
5. haze seas games（差异化长尾）
6. haze seas islands
7. haze seas bosses

### 竞品
- hazeseas.com (SERP #3, fan wiki, 英文)
- hazeseas.online (SERP #7, fan wiki, 英文)
- Rock Paper Shotgun (SERP #6, codes page)
- GamesRadar (codes page)

### 我们的差异化
1. ✅ 小游戏 + 攻略组合（竞品都没有小游戏）
2. ✅ 中英文双语（竞品只有英文）
3. ✅ 小游戏增加页面停留时间（SEO 信号）

## Project Status (as of 2026-07-09)

### ✅ 已完成

| # | 模块 | 文件 | 说明 |
|---|------|------|------|
| 1 | 首页游戏平台 | `src/themes/default/blocks/game-platform.tsx` | 8个自研 HTML 小游戏，侧边栏切换，键盘快捷键 1-8，全屏支持 |
| 2 | 游戏数据 | `src/lib/games.ts` | 8个游戏元数据 (slug, title, url, gradient, tag, category, rating) |
| 3 | 自研小游戏 | `public/games/*.html` (8个) | devil-fruit-hunter, ocean-maze, fruit-battle, treasure-hunt, parkour-challenge, memory-cards, shooting-range, puzzle-master |
| 4 | 英文翻译 | `src/config/locale/messages/en/landing.json` | 首页翻译 |
| 5 | 中文翻译 | `src/config/locale/messages/zh/landing.json` + `zh/common.json` | 中文首页翻译 |
| 6 | 样式 | `src/config/style/global.css` + `theme.css` | 游戏平台样式 + 动画 |
| 7 | SEO | `src/app/[locale]/(landing)/page.tsx` | generateMetadata |

### ⏳ 进行中（子代理执行中）

| # | 模块 | 说明 |
|---|------|------|
| 8 | /codes 兑换码页面 | 子代理创建中: codes-page.tsx + 翻译文件 + 路由 |

### ❌ 待完成（按优先级排序）

#### P0 — 本周完成（搜索流量核心）
- [ ] **替换首屏游戏**: 用 GameMonetize 可嵌入游戏替换自研小游戏作为首屏
  - Sea Kings (海盗海战) → 主推
  - Fruit Merger (水果合并) → 辅助
  - Stickman Bros In Fruit Island 2 (果实岛冒险) → 辅助
  - 保留自研小游戏作为"更多游戏"区块
- [ ] **/codes 页面验证**: 确认子代理创建的 codes 页面正常工作
- [ ] **首页改造**: 从纯小游戏改为"攻略导航 + 游戏"
  - 顶部: Hero 区 + 最新更新
  - 中部: 快速入口卡片 (Codes / Tier List / Beginner Guide / Games)
  - 下部: 游戏区域（嵌入 GameMonetize 游戏）

#### P1 — 下周完成
- [ ] **/tier-list 页面**: 35个果实 S/A/B/C 分级表格 + 觉醒链路图
- [ ] **/guides/beginner 页面**: 7步新手攻略 (checklist 格式)
- [ ] **/fruits 页面**: 35个果实数据库 (稀有度/类型/spawn规则/觉醒链)
- [ ] **/links 页面**: 官方链接 (Roblox/Discord/Trello/YouTube/X)

#### P2 — 持续迭代
- [ ] **/updates 页面**: 版本时间线
- [ ] **/islands 页面**: Sea 1-3 岛屿攻略
- [ ] **/bosses 页面**: 17个 Super Boss 掉落表
- [ ] **/systems/awakenings 页面**: 觉醒系统
- [ ] **中文版同步**: 所有页面 /zh/ 对应版本
- [ ] **Sitemap**: 自动生成 sitemap.xml
- [ ] **结构化数据**: FAQ Schema / HowTo Schema / Article Schema
- [ ] **内链策略**: codes → tier-list → fruits → guides

## Tech Stack

```
Next.js 16          # App Router, Turbopack
next-intl          # i18n (en/zh)
Tailwind CSS       # 样式
next/font/google   # Inter + Bebas Neue + JetBrains Mono
```

## File Structure

```
src/
├── app/[locale]/
│   ├── (landing)/
│   │   ├── layout.tsx          # Landing 布局
│   │   ├── page.tsx            # 首页 (GamePlatform)
│   │   ├── codes/page.tsx      # ⏳ 兑换码页 (子代理创建中)
│   │   ├── tier-list/          # ❌ 待建
│   │   ├── guides/beginner/    # ❌ 待建
│   │   ├── fruits/             # ❌ 待建
│   │   ├── links/              # ❌ 待建
│   │   └── [...slug]/          # 旧动态路由
│   └── layout.tsx              # 根布局
├── config/
│   ├── locale/
│   │   ├── index.ts            # locale 配置
│   │   └── messages/
│   │       ├── en/
│   │       │   ├── common.json
│   │       │   ├── landing.json
│   │       │   └── codes.json  # ⏳ 子代理创建中
│   │       └── zh/
│   │           ├── common.json
│   │           ├── landing.json
│   │           └── codes.json  # ⏳ 子代理创建中
│   └── style/
│       ├── global.css          # 全局样式 + 动画
│       └── theme.css           # 主题变量
├── lib/
│   └── games.ts                # 游戏数据
└── themes/default/blocks/
    ├── game-platform.tsx       # 首页游戏平台组件
    └── codes-page.tsx          # ⏳ 兑换码组件 (子代理创建中)
public/
└── games/                      # 8个自研 HTML 小游戏
    ├── devil-fruit-hunter.html
    ├── ocean-maze.html
    ├── fruit-battle.html
    ├── treasure-hunt.html
    ├── parkour-challenge.html
    ├── memory-cards.html
    ├── shooting-range.html
    └── puzzle-master.html
```

## GameMonetize 可嵌入游戏清单

以下游戏可通过 iframe 嵌入，无需下载，直接在域名内运行：

| 游戏 | iframe URL | 主题匹配度 | 说明 |
|------|-----------|-----------|------|
| Sea Kings | `https://html5.gamemonetize.co/azd2160bf0hum6z3y5miuyxym0yjnqxw/` | ★★★★★ | 海盗海战，指挥海盗船击沉敌舰，完美匹配 Haze Seas |
| Fruit Merger | `https://html5.gamemonetize.co/y1z2j6chycgz55jmcxkxhznshlf17dl6/` | ★★★★ | 水果合并益智，果实主题接近恶魔果实 |
| Stickman Bros In Fruit Island 2 | `https://html5.gamemonetize.co/7xq1ndi04moqr45f9g9zwjqosib0rkhy/` | ★★★★ | 果实岛冒险，双人收集水果 |

### 嵌入方式
```html
<iframe src="https://html5.gamemonetize.co/azd2160bf0hum6z3y5miuyxym0yjnqxw/"
        width="100%" height="100%"
        frameborder="0"
        allowfullscreen
        scrolling="no">
</iframe>
```

### SEO 价值（哥飞理论）
> 用户在你的域名下玩游戏，停留时间、页面交互都有了——Google 能检测到这些信号，
> 这比一万次跳转都有用。

- 嵌入游戏在域名内运行 → Google 检测到用户停留信号
- 搭配攻略内容 → 高质量内容 + 高停留时间 = SEO 排名提升

## How to Run

```bash
cd /Users/zhanglongchao/programPJ/hazeseas
npx next dev -p 3456
```

访问:
- EN: http://localhost:3456
- ZH: http://localhost:3456/zh
- Codes (EN): http://localhost:3456/codes
- Codes (ZH): http://localhost:3456/zh/codes

## Known Issues (项目原有)

- `LazyImage`, `SignUser` 导出缺失 (ShipAny 模板问题)
- `framer-motion`, `better-auth` 依赖缺失
- `react-icons` 部分模块缺失
- `next/font/google` 构建时需网络访问 Google Fonts
- 以上都不影响新页面运行

## Data Sources

| 数据 | 来源 |
|------|------|
| 兑换码 | Rock Paper Shotgun + hazeseas.com + 官方 Discord |
| 果实数据 | 官方 Trello (trello.com/haze-seas-official-trello) |
| 游戏统计 | Roblox 游戏页 (roblox.com/games/6918802270) |
| 更新日志 | 官方 YouTube + X (@Haze_Seas) |
| 官方链接 | Roblox, Discord, Trello, YouTube, X |

## Agent Handoff Notes

如果接手的 agent 额度不够，按以下优先级执行：

1. **最低限度**: 验证 /codes 页面工作 → 替换首屏为 GameMonetize 游戏
2. **核心完成**: P0 全部完成（codes + 首页改造 + 游戏替换）
3. **进阶**: P1 的 tier-list 和 beginner guide
4. **完善**: P2 的所有页面 + 中文同步

关键文件不要碰:
- 不要修改 `src/app/layout.tsx` (根布局)
- 不要删除 `public/games/*.html` (自研小游戏保留)
- 不要修改 `src/config/style/theme.css` (主题变量)

## Update Log

- 2026-07-09: 首页游戏平台完成，8个自研小游戏上线，codes 页面创建中
