export interface CriptoTopListInterface {
  market_cap_rank: number;
  image: String;
  name: String;
  symbol: String;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap: number;
}

export interface CriptoListInterface {
  status: number;
  data: CriptoTopListInterface[];
}
