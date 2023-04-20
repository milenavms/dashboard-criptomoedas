import axios from 'axios'
import { CriptoListInterface } from 'interface/CriptoListInterface';

export async function getListTopCriptomoedasService(): Promise<any>{
    const endpoint = "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd";

    const response = await axios.get<CriptoListInterface>(endpoint);

    return response.data;
}