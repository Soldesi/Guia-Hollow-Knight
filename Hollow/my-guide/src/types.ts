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
  bosses?: any[];
  npcs?: any[];
  secondary?: boolean;   // já existia
  parent?: string;       // <- adicione isto
};
