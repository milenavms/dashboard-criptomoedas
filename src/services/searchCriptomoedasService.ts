import axios from 'axios'

export interface Coin {
    name: string
    thumb: string
    market_cap_rank: number
    symbol: string
}

export interface Data {
    coins: Coin[];
}

export interface SearchListInterface{
    status: String;
    data: Data;
}

export async function searchCriptoService(name: string | null): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/search/?query=${name}`;

    const response = await axios.get<SearchListInterface>(endpoint);
    
    return response.data;
}