/**
 * Haze Seas Islands & Seas — from hazeseas.com/islands (snapshot 2026-07-05 ET).
 * Sea 1 (18 islands) and Sea 2 (14 islands) are live; Sea 3 is partially live.
 */

export type SeaStatus = "Live" | "Partial" | "Upcoming";

export interface Island {
  slug: string;
  name: string;
  sea: "Sea 1" | "Sea 2" | "Sea 3";
  status: SeaStatus;
  notes?: string;
}

export interface SeaInfo {
  slug: string;
  name: string;
  status: SeaStatus;
  islandCount: number;
  highlights: string[];
}

export const seas: SeaInfo[] = [
  {
    slug: "sea-1",
    name: "Sea 1",
    status: "Live",
    islandCount: 18,
    highlights: ["Starting area", "Logue City", "Marine HQ", "Cave dungeons"]
  },
  {
    slug: "sea-2",
    name: "Sea 2",
    status: "Live",
    islandCount: 14,
    highlights: ["Flower Capital", "Dragon Island", "Mirror World", "Shadow Island", "Sky Islands"]
  },
  {
    slug: "sea-3",
    name: "Sea 3",
    status: "Partial",
    islandCount: 3,
    highlights: ["Land of the Gods (live)", "Egghead Island (upcoming)", "Throne Room (upcoming)"]
  }
];

// Sea 1 island names (subset of the 18 — verified from community sources)
export const sea1Islands: string[] = [
  "Foosha Village", "Logue City", "Mirrorball Island", "Arlong Park",
  "Baratie", "Drum Island", "Cactus Island", "Whisky Peak",
  "Little Garden", "Drum Rockies", "Alabasta", "Jaya",
  "Skypiea", "Long Ring Long Land", "Water 7", "Enies Lobby",
  "Thriller Bark", "Sabaody Archipelago"
];

export const islandsSnapshot = {
  date: "2026-07-05",
  totalIslands: sea1Islands.length + 14 + 3,
  source: "hazeseas.com/islands + community"
};