import React, {useContext, useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import { CriptoTopListInterface, getListTopCriptomoedasService } from '../../services/getListTopCriptomoedasService';
import styled from '@emotion/styled';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import iconPolygonLowMin from '../../assets/icons/icon-polygon-low-min.svg';
import iconPolygonHithMin from '../../assets/icons/icon-polygon-hith-min.svg';
import { NavLink } from 'react-router-dom';
import { TableValuesCustom } from './styles';
import Star from '../Star/Star';
import { FavoriteContext } from '../../context/FavoriteContext';


interface Column {
  id: 'market_cap_rank'| 'image'| 'name' | 'current_price' | 'price_change_percentage_24h' | 'market_cap_change_24h' | 'market_cap';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'market_cap_rank', label: '#', minWidth: 20 },
  { id: 'image', label: '', minWidth: 20 },
  { id: 'name', label: 'Nome', minWidth: 140 },
  {
    id: 'current_price',
    label: 'Preço',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'price_change_percentage_24h',
    label: '24h%',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'market_cap_change_24h',
    label: '7d%',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'market_cap',
    label: 'Valor de Mercado',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];


export default function TableValues() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {favorites, setFavorites}= useContext(FavoriteContext);
  const [topCriptomoedas, setTopCriptomoedas] = React.useState<CriptoTopListInterface[]>([]);
 

  useEffect(() => {
    getListTopCriptomoedasService().then((response) => setTopCriptomoedas(response))
  }, []);

  useEffect(() => {
    const data:any= window.localStorage.getItem('FAVORITES_COINS')
    const data2 = JSON.parse(data)
    if( data2?.length > 0){
      console.log('getItem se F5: ', data2)
      setFavorites(data2) 
    }
  }, [])

  useEffect(() => {
    if(favorites.length >= 0){
      window.localStorage.setItem('FAVORITES_COINS', JSON.stringify(favorites))
      console.log('setItem se o favorites tiver alteração',favorites)
    }
  }, [favorites])



  const checkIsFavorite =  (topCriptomoeda:CriptoTopListInterface) => (
    favorites.some(
      favorites => favorites.market_cap_rank == topCriptomoeda.market_cap_rank,
   )
  )
  
  const removeFavorites = (topCriptomoeda:CriptoTopListInterface) => (
    setFavorites(favorites.filter(
      favorites => favorites.market_cap_rank != topCriptomoeda.market_cap_rank))
  )

  const addFavorites = (topCriptomoeda:CriptoTopListInterface) => (
    setFavorites([...favorites, topCriptomoeda])
  )

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 'bold'
  },
}));

const checkHighLowCoin24 = (topCriptomoeda:CriptoTopListInterface) => {
  return topCriptomoeda.price_change_percentage_24h > 0 
} 

const checkHighLowCoin7 = (topCriptomoeda:CriptoTopListInterface) => {
  return topCriptomoeda.market_cap_change_percentage_24h > 0 
} 

const  {format} = new Intl.NumberFormat('USD', { 
  style: 'currency',currency: 'USD' 
})


  return (
    <TableValuesCustom>
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom:'30px', backgroundColor: '#F8FAFD', boxShadow: 'none' }}>
      <TableContainer sx={{ maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell sx={{backgroundColor: '#F8FAFD'}}></TableCell>
              {columns.map((column) => (

                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#F8FAFD'}} >
                  {column.label}
                </TableCell>
              ))}

            </TableRow>
          </TableHead>
          <TableBody>
            {topCriptomoedas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((topCriptomoeda) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={topCriptomoeda.market_cap_rank} >
                    <TableCell sx={{width: '20px'}}>
                        <IconButton onClick={()=> checkIsFavorite(topCriptomoeda) ? removeFavorites(topCriptomoeda) : addFavorites(topCriptomoeda)}>
                            <Star value ={checkIsFavorite(topCriptomoeda)}/>
                        </IconButton>
                    </TableCell>

                    <StyledTableCell align="left">{topCriptomoeda.market_cap_rank}</StyledTableCell>
                    <StyledTableCell align="right" sx={{paddingRight: '0px'}}> <img className='iconCoin' src={`${topCriptomoeda.image}`}  alt="logoCoin"/></StyledTableCell>
                    <StyledTableCell align="left">
                        {topCriptomoeda.name}
                        <span className='symbol'>{topCriptomoeda.symbol.toUpperCase()}</span>
                    </StyledTableCell>
                    <StyledTableCell align="right">{format(topCriptomoeda.current_price)}</StyledTableCell>
                    <StyledTableCell align="right">
                      <div className={checkHighLowCoin24(topCriptomoeda) ? 'check-high' : 'check-low' }>
                        <img src={checkHighLowCoin24(topCriptomoeda) ? iconPolygonHithMin : iconPolygonLowMin }/>
                        {topCriptomoeda.price_change_percentage_24h.toFixed(2)}%</div></StyledTableCell>
                    <StyledTableCell align="right">
                      <div className={checkHighLowCoin7(topCriptomoeda) ? 'check-high' : 'check-low' }>
                        <img src={checkHighLowCoin7(topCriptomoeda) ? iconPolygonHithMin : iconPolygonLowMin }/>
                        {topCriptomoeda.market_cap_change_percentage_24h.toFixed(2)}% </div> </StyledTableCell>
                    <StyledTableCell align="right">{format(topCriptomoeda.market_cap)} </StyledTableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 100]}
        component="div"
        count={topCriptomoedas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </TableValuesCustom>
  );
}