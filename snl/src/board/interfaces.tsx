export type Player = {
  id: number;
  name: string;
}

export type Cell = {
  num: number;
}

export type Board = {
  size: number;
  moves: Map<number, number>;
}

export type Game = {
  board: Board;
  locations: Map<number, number>;
  players: Map<number, Player>;
}