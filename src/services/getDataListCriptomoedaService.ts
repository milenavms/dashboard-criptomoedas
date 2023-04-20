import axios from 'axios'
import { ListCoinInterface } from 'interface/ListCoinInterface';

export async function getDataListCriptomoedaService(name: any ): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/coins/${name}`;

    const response = await axios.get<ListCoinInterface>(endpoint);
    
    return response.data;
}