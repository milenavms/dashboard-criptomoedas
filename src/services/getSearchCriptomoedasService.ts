import axios from 'axios'
import { SearchListInterface } from 'interface/SearchListInterface';

export async function getSearchCriptomoedasService(name: string | null): Promise<any>{
    const endpoint = `https://api.coingecko.com/api/v3/search/?query=${name}`;

    const response = await axios.get<SearchListInterface>(endpoint);
    
    return response.data;
}