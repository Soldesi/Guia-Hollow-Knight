export type NPC = {
  name: string;
  description?: string | string[];
  image?: string;
};

export type Boss = {
  name: string;
  description?: string | string[];
  image?: string;
};

export type Area = {
  id: string;
  name: string;
  image?: string;
  map?: string;
  description?: string | string[];
  bosses?: Boss[];
  npcs?: NPC[];
  secondary?: boolean;   // <--- adiciona isto
};
