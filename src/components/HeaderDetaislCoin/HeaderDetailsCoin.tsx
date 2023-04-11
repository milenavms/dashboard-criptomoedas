import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconDefault from '../../assets/icons/icon-default.svg'
import IconFavoritar from '../../assets/icons/icon-favoritar.svg'
import {useTheme} from 'styled-components';
import { DataListCriptoInterface, getDataListCriptomoedaService } from "../../services/getDataListCriptomoedaService"
import { getDataListCriptomoedaPriceService } from "../../services/getDataListCriptomoedaPriceService"
import styled from 'styled-components'


const TextBackground = styled.div`
    height: 31px;
    border-radius: 8px;
    background-color:  ${props => props.color};
    color:  ${({theme}) => theme.colors.background};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    &.textGray{
        color:${({theme}) => theme.colors.gray200};
    }
`

export const DivDetailsCoin = styled.div`
    min-width: 13.875rem;

    .iconCoin{
        height: 32px;
        width: 32px;
      
    }

    .text-min{
        font-size: 12px;
    }

    .percentage{
    height: 31px;
    border-radius: 8px;
    background-color:  ${({theme}) => theme.colors.green};
    color:  ${({theme}) => theme.colors.background};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    font-weight: bold;
    }
`

export default function HeaderDetailsCoin(){
    const theme = useTheme();
    const [detailsCoin, setDetailsCoin]  = useState<DataListCriptoInterface>();
    const [detailsCoinPrice, setDetailsCoinPrice]  = useState<number>(0);
    const {idmoeda} = useParams<string>();
    const [error, setError]  = useState<string>();

    useEffect(() => {
        setError('');

       if(!idmoeda) return;

       getDataListCriptomoedaService(idmoeda?.toLocaleLowerCase()).then((response) => setDetailsCoin(response))
       getDataListCriptomoedaPriceService(idmoeda?.toLocaleLowerCase())
       .then((response) => setDetailsCoinPrice(response.prices[0][1]))
       .catch((error) => setError(error.response.status))

    }, [idmoeda]);

    return(
        <>
        <DivDetailsCoin>
            <Grid container>
             <Grid item xs={12} md={9} >
                 <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "left", alignItems: "center",  marginTop: '28px'}}>

                     <img src={ error ? IconDefault :`${detailsCoin?.image.thumb}`} alt="icon default" className="iconCoin" />

                     <Typography variant="h4" gutterBottom sx={{color: theme.colors.black, fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0px', marginLeft: '12px', marginRight: '12px'}}>
                        {error ? "Dados Não Encontrados" : detailsCoin?.name} 
                    </Typography>
                     <TextBackground color={theme.colors.gray100} className="textGray">  
                        { error ? "000" : detailsCoin?.symbol.toUpperCase()} 
                     </TextBackground>
                        <img src={IconFavoritar} alt="icon favoritar" className="iconCoin" />    
                </Grid>
 
                <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "left", marginTop: '8px'}}>
                     <TextBackground color={theme.colors.gray500}>  
                     Classificação # {error ? "0" :detailsCoin?.market_cap_rank}
                     </TextBackground>
                </Grid>
             </Grid>
       
 
             <Grid item xs={12} md={3} >
                 <Grid  item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between"}}>
                     <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200 , fontWeight: 'bold'}}>
                        Preço de  {error? "moeda" :detailsCoin?.name}  ( {detailsCoin?.symbol.toUpperCase()} )
                     </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                     <Typography variant="h4"  sx={{fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0px'}}>
                        R$ {error ? "00000" : detailsCoinPrice.toFixed(4)}
                     </Typography> 
                     <TextBackground color={theme.colors.green}> 
                        <p className="text-min"> {error ? "000" :"6.94"}%</p>
                     </TextBackground>
                </Grid>

                <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                     <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200, marginBottom: '0px'}}>
                        R$ 0.00001392 BTC
                     </Typography> 
                     <Typography variant="subtitle1"  sx={{ color: theme.colors.green, marginBottom: '0px', marginRight: '12px'}}>
                        1.94%
                     </Typography> 
                </Grid>
                <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                     <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200}}>
                        R$ 0.00001973 ETH
                     </Typography> 
                     <Typography variant="subtitle1"  sx={{ color: theme.colors.green, marginRight: '12px'}}>
                        2.94%
                     </Typography> 
                </Grid>
 
             </Grid>
         </Grid>
         </DivDetailsCoin>
      </>
    )
    
}