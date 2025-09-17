// src/types.ts
export type Boss = {
  name: string;
  description?: string; // descrição em português (pode usar \n\n para parágrafos)
  image?: string; // opcional - caminho da thumb do boss
};

export type Area = {
  id: string;
  name: string;
  image: string;
  map?: string;
  description?: string | string[];
  // suporta ambos: ["Boss A", ...] ou [{name, description}, ...]
  bosses?: Array<string | Boss>;
};
