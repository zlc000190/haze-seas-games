/**
 * Haze Seas Fighting Styles — 5 styles with V1 + V2 (unreleased, Sea 3)
 * Sourced from hazeseas.com/systems/fighting-styles (snapshot 2026-07-04 ET).
 */

export interface MoveEntry {
  key: 'Z' | 'X' | 'C';
  name: string;
  mastery: number;
}

export interface HazeSeasStyle {
  slug: string;
  name: string;
  nameZh: string;
  v1Trainer: string;
  v1Cost: string;
  v1Moves: MoveEntry[];
  v2Moves: MoveEntry[];           // unreleased
  v2Requirement: string;           // unreleased
}

export const fightingStyles: HazeSeasStyle[] = [
  {
    slug: "black-leg",
    name: "Black Leg",
    nameZh: "黑足",
    v1Trainer: "Black Leg trainer",
    v1Cost: "$50k",
    v1Moves: [
      { key: 'Z', name: 'Ground Smash',     mastery: 0  },
      { key: 'X', name: 'Party Table',      mastery: 25 },
      { key: 'C', name: 'Air Barrage',      mastery: 50 }
    ],
    v2Moves: [
      { key: 'Z', name: 'Demonic Crash',      mastery: 0  },
      { key: 'X', name: 'Tempest Whirlwind',  mastery: 25 },
      { key: 'C', name: 'Stampede',           mastery: 50 }
    ],
    v2Requirement: "300 Mastery + 2 Phantom Lantern (Ghostship) + $5M (Sage of Combat, Sea 3)"
  },
  {
    slug: "electro",
    name: "Electro",
    nameZh: "电击",
    v1Trainer: "Carol",
    v1Cost: "$450k",
    v1Moves: [
      { key: 'Z', name: 'Electric Tackle',   mastery: 0  },
      { key: 'X', name: 'Mink Discharge',    mastery: 25 },
      { key: 'C', name: 'Electric Slam',     mastery: 50 }
    ],
    v2Moves: [
      { key: 'Z', name: 'Electrifying Tackle',   mastery: 0  },
      { key: 'X', name: 'Electro Thunderclap',   mastery: 25 },
      { key: 'C', name: 'Lightning Beast Barrage', mastery: 50 }
    ],
    v2Requirement: "300 Mastery + 2 Raijin Core (Raijin boss) + 500 Gems (Sage of Combat, Sea 3)"
  },
  {
    slug: "fishman",
    name: "Fishman",
    nameZh: "鱼人",
    v1Trainer: "Hakkon",
    v1Cost: "$450k",
    v1Moves: [
      { key: 'Z', name: 'Shark Fist',     mastery: 0  },
      { key: 'X', name: 'Shark Barrage',  mastery: 25 },
      { key: 'C', name: 'Titanic Slam',   mastery: 50 }
    ],
    v2Moves: [
      { key: 'Z', name: 'Hydra Launch',     mastery: 0  },
      { key: 'X', name: 'Poseidon Tridents',mastery: 25 },
      { key: 'C', name: 'Tidal Descent',    mastery: 50 }
    ],
    v2Requirement: "300 Mastery + 2 Seabeast Heart (Seabeast, Sea 2-3) + $5M (Sage of Combat, Sea 3)"
  },
  {
    slug: "cyborg",
    name: "Cyborg",
    nameZh: "机械人",
    v1Trainer: "Cyborg Scientist",
    v1Cost: "$800k",
    v1Moves: [
      { key: 'Z', name: 'Cyborg Smash',   mastery: 0  },
      { key: 'X', name: 'Cyborg Bullet',  mastery: 25 },
      { key: 'C', name: 'Cyborg Tackle',  mastery: 50 }
    ],
    v2Moves: [
      { key: 'Z', name: 'Radical Smash',   mastery: 0  },
      { key: 'X', name: 'Radical Beam',    mastery: 25 },
      { key: 'C', name: 'Radical Barrage', mastery: 50 }
    ],
    v2Requirement: "300 Mastery + 2 Saturn's Ring (Saturn boss) + $5M (Sage of Combat, Sea 3)"
  },
  {
    slug: "dragon-claw",
    name: "Dragon Claw",
    nameZh: "龙爪",
    v1Trainer: "Dragon Master",
    v1Cost: "150 Gems",
    v1Moves: [
      { key: 'Z', name: 'Claw Kick',     mastery: 0  },
      { key: 'X', name: 'Direct Flame',  mastery: 25 },
      { key: 'C', name: 'Clawing Pull',  mastery: 50 }
    ],
    v2Moves: [
      { key: 'Z', name: 'Dragonic Kick',    mastery: 0  },
      { key: 'X', name: 'Dragonic Flames',  mastery: 25 },
      { key: 'C', name: 'Dragonic Vortex',  mastery: 50 }
    ],
    v2Requirement: "300 Mastery + material (TBD) — Sage of Combat, Sea 3"
  }
];

export const fightingStylesSnapshot = {
  date: "2026-07-04",
  total: fightingStyles.length,
  v2Released: 0,
  source: "hazeseas.com/systems/fighting-styles"
};