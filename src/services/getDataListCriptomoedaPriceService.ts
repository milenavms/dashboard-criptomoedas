import axios from 'axios'
import { ListCoinPriceInterface } from 'interface/ListCoinPriceInterface';

export async function getDataListCriptomoedaPriceService(name: any ): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=1`;

    const response = await axios.get<ListCoinPriceInterface>(endpoint);
   
    return response.data;
}