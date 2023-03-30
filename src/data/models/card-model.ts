export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";

export type Type = "character" | "skill" | "weapon";

export type CardModel = {
  id: number;
  name: string;
  description: string;
  image: string;
  cost: number;
  attack: number;
  health: number;
  rarity: Rarity;
  type: Type;
};
