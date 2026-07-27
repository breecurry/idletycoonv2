export type GameState = {
  money: number;
  managers: number;
  training: number;
  tapPower: number;
  lifetimeRun: number;
  lifetimeTotal: number;
  bestMoney: number;
  brandValue: number;
  rebrands: number;
  owned: { [id: string]: number };
};

export type Business = {
  minRebrands?: number;
};
