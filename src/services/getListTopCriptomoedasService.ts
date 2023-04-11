import axios from 'axios'


export interface CriptoTopListInterface {
    market_cap_rank: number
    image: String
    name: String
    symbol: String
    current_price: number
    price_change_percentage_24h: number
    market_cap_change_percentage_24h: number
    market_cap: number
  }

interface CriptoListInterface{
    status: number,
    data: CriptoTopListInterface[]
}

export async function getListTopCriptomoedasService(): Promise<any>{
    const endpoint = "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd";

    const response = await axios.get<CriptoListInterface>(endpoint);

    return response.data;
}