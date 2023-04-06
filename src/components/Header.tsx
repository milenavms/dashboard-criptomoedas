import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import CustomizedSwitches from './CustomizedSwitches';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  textAlign: 'center',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
    textAlign: 'left',
  },
};

const Item = styled(Paper)(({ theme }) => ({
    borderRadius: '0px',
    boxShadow: '0px 0px',
    background: 'none',
    fontFamily: 'Inter', 
    fontWeight: 600,
  }));

  
export default function Header() {
    return (
    <Box sx={{flexGrow: 1}}>
        <Grid container  spacing={0} 
            sx={{ justifyContent: 'space-between', marginTop: '0px', paddingTop: '6px', paddingBottom: '6px'}}>

            <Grid item xs={12} md={10} sx={{marginTop: '50px', marginBottom: '50px', paddingTop: '6px', paddingBottom: '6px'}}>
                <Item>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3">Preço das criptomoedas por valor de mercado</Typography>
                    </ThemeProvider>
                </Item>
            </Grid>

            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <Grid item xs={12} md={2} 
                    sx={{ textAlign:'right', marginTop: '50px', marginBottom: '50px', paddingTop: '6px', paddingBottom: '6px'}}>
                <Item>
                    <CustomizedSwitches/>
                </Item>
                </Grid>
            </Box>
        </Grid>
    </Box>
    )
  }