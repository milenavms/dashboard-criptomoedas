import styled from 'styled-components'
import {useState, useEffect} from 'react'
import { Coin, searchCriptoService } from '../../services/searchCriptomoedasService';
import iconSearch from '../../assets/icons/icon-search.svg'
import useDebounce from '../../hooks/debounce/useDebounce';


const InputSearch = styled.input`
height:40px;
width: 175px;
padding-left: 32px;
background-image: url(${iconSearch});
background-color: #EFF2F5;
background-repeat: no-repeat;
background-size: 16px;
background-position: 10px;
background-position-y: center;
border: none;
border-radius: 8px;
outline: none;
color: #A7B1C2;
font-weight: bold;
::-webkit-input-placeholder {
  color: '#A7B1C2'
}
`
export default function SearchButton(){
  
  const [getCoins, setGetCoin] =  useState<Coin[]>([])
  const [searchCoin, setSearchCoin] = useState<string>('')
  const debouncedSearch = useDebounce(searchCoin, 500);

  useEffect(() => {

    if(debouncedSearch){
      searchCriptoService(debouncedSearch).then((response) => setGetCoin(response.coins))
    }
    
  },[debouncedSearch]);

  return(
    <>
    <InputSearch 
      className='inputCustom' 
      type="search" 
      placeholder="Buscar" 
      list="list"  
      value={searchCoin}  
      onChange={ (e) => setSearchCoin(e.target.value)} 
      />

      <datalist id="list">
        {getCoins.length > 0 ? (
          getCoins.map((coin) => {
            return (
              <option key={coin.name}  value={coin.name}/>
            )})
        )
        :
        <option  value='Informe o nome da moeda'/>
        }
      </datalist>
    </>
  )  
}






          