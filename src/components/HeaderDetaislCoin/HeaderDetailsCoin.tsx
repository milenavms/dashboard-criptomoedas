import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {DivDetailsCoin, TextBackground} from './styles'
import IconFavoritar from '../../assets/icons/icon-favoritar.svg'
import {useTheme} from 'styled-components';
import { DataListCriptoInterface, getDataListCriptomoedaService } from "../../services/getDataListCriptomoedaService"
import { getDataListCriptomoedaPriceService } from "../../services/getDataListCriptomoedaPriceService"


export default function HeaderDetailsCoin(){
    const theme = useTheme();
    const [detailsCoin, setDetailsCoin]  = useState<DataListCriptoInterface>();
    const [detailsCoinPrice, setDetailsCoinPrice]  = useState<number>(0);
    const {idmoeda} = useParams<string>();

    useEffect(() => {
       if(!idmoeda) return;

       getDataListCriptomoedaService(idmoeda?.toLocaleLowerCase()).then((response) => setDetailsCoin(response))
       getDataListCriptomoedaPriceService(idmoeda?.toLocaleLowerCase())
       .then((response) => setDetailsCoinPrice(response.prices[0][1]))

    }, [idmoeda]);

    return(
       <DivDetailsCoin>
           <Grid container>
            <Grid item xs={12} md={9} >
                <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "left", alignItems: "center",  marginTop: '28px'}}>
                    <img src={`${detailsCoin?.image.thumb}`} alt="icon default" className="iconCoin" />
                    <Typography variant="h4" gutterBottom sx={{color: theme.colors.black, fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0px', marginLeft: '12px', marginRight: '12px'}}>
                       {detailsCoin?.name}
                   </Typography>
                    
                    <TextBackground color={theme.colors.gray100} className="textGray">  
                        {detailsCoin?.symbol.toUpperCase()} 
                    </TextBackground>
                    <img src={IconFavoritar} alt="icon favoritar" className="iconCoin" />    
               </Grid>

               <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "left", marginTop: '8px'}}>
                    <TextBackground color={theme.colors.gray500}>  Classificação #{detailsCoin?.market_cap_rank}</TextBackground>
               </Grid>
            </Grid>
      

            <Grid item xs={12} md={3} >
                <Grid  item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200 , fontWeight: 'bold'}}>
                        Preço de  {detailsCoin?.name}  ( {detailsCoin?.symbol.toUpperCase()} )
                    </Typography>
               </Grid>
               <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant="h4"  sx={{fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0px'}}>
                        R$ {detailsCoinPrice.toFixed(4)}
                    </Typography> 
                    <TextBackground color={theme.colors.green}> <p className="text-min">6.94%</p></TextBackground>
               </Grid>
               <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200, marginBottom: '0px'}}>
                        R$ 120,00
                    </Typography> 
                    <Typography variant="subtitle1"  sx={{ color: theme.colors.green, marginBottom: '0px', marginRight: '12px'}}>
                       6.94%
                    </Typography> 
               </Grid>
               <Grid item xs={12} md={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant="subtitle1"  sx={{ color: theme.colors.gray200}}>
                        R$ 120,00
                    </Typography> 
                    <Typography variant="subtitle1"  sx={{ color: theme.colors.green, marginRight: '12px'}}>
                       6.94%
                    </Typography> 
               </Grid>

            </Grid>
        </Grid>
        </DivDetailsCoin>
    )
}