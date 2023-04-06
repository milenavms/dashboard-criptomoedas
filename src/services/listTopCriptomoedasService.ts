import axios from 'axios'
import { CriptoTopListInterface } from '../interface/CriptoTopListInterface';


interface CriptoListInterface{
    status: number,
    data: CriptoTopListInterface[]
}

export async function listTopCriptoService(): Promise<CriptoListInterface>{
    const endpoint = "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd";

    const response = await axios.get<CriptoListInterface>(endpoint);
    
    return response.data;
}