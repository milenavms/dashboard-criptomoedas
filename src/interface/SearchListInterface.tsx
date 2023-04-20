export interface Coin {
  name: string;
  thumb: string;
  market_cap_rank: number;
  symbol: string;
}

export interface Data {
  coins: Coin[];
}

export interface SearchListInterface {
  status: String;
  data: Data;
}
