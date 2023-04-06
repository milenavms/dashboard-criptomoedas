import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import { useTheme } from 'styled-components';

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

const SwitchButton = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#3861FB',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#EFF2F5' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
}));
  

export default function Header() {
  const themes = useTheme();

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
                    <FormControlLabel sx={{fontSize: '16px', color:themes.colors.gray200}}
                        control={
                            <SwitchButton sx={{ m: 1}} defaultChecked />
                        }
                        label="Highlights"
                    />
                </Item>
                </Grid>
            </Box>
        </Grid>
    </Box>
    )
  }