import axios from 'axios'


export interface DataListCriptoInterface {
  id: number
  name: string
  market_cap_rank: string
  symbol: string
  market_data:{
    current_price: {
      usd: string
    }
  }
  image: {
    thumb: string
  }

}

interface  ListCoinInterface{
  status: number,
  data: DataListCriptoInterface
}

export async function getDataListCriptomoedaService(name: any ): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/coins/${name}`;

    const response = await axios.get<ListCoinInterface>(endpoint);
    
    return response.data;
}