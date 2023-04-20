export interface DataListCriptoInterface {
  id: number;
  name: string;
  market_cap_rank: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: string;
    };
  };
  image: {
    thumb: string;
  };
}

export interface ListCoinInterface {
  status: number;
  data: DataListCriptoInterface;
}
