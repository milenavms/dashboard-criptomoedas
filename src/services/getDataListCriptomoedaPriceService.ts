import axios from 'axios'

interface  ListCoinPriceInterface{
  status: number,
  data:  {
    prices: []}
}

export async function getDataListCriptomoedaPriceService(name: any ): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=1`;

    const response = await axios.get<ListCoinPriceInterface>(endpoint);
   
    return response.data;
}