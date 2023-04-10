import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import iconDiamanteBlue from '../../assets/icons/icon-diamante.svg';
import iconNotification from '../../assets/icons/icon-notification.svg';
import logoMin from '../../assets/logo-site-min.png';
import logoMax from '../../assets/logo-site-max.png';
import SearchButton from '../SearchButton/SearchButton';
import { NavLink } from 'react-router-dom';



const pages = ['Cryptoncurrencies','Exchanges','NFT','CrypTowm','Portfolio','Watclist','products'];
const pagesMin = ['Cryptoncurrencies','Exchanges','NFT','CrypTowm','Portfolio','Watclist','products','Login', 'Sigin'];


export default function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const IconNotify = styled('img')(({ theme }) => ({
    height: "12px", 
    width: "12px",
    marginBottom: "7px",
   
  }));


  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    fontFamily: 'Inter', 
    fontWeight: 600,
    fontStyle:'normal', 
    fontSize:'16px',
    borderRadius: '8px',
    marginRight: 12,
    height: 40,
    padding: 0,
    width: 91,
    textTransform: 'capitalize',
    color: theme.palette.getContrastText('#3C67F7'),
    backgroundColor: '#3C67F7',
    '&:hover': {
      backgroundColor: '#3C67F7',
    },
  }));

  return (
    <AppBar position="static" sx={{background: 'white'}} elevation={0}>
      <Container maxWidth="xl"  sx={{ height: 75}}>
        <Toolbar disableGutters >
          <Typography variant="h6" noWrap component="a" href="/"
            sx={{mr: 2,display: { xs: 'none', md: 'flex' }, fontFamily: 'Inter',fontWeight: 600,
              letterSpacing: '.1rem',color: 'inherit', textDecoration: 'none',fontSize: 20
            }}
          >
          <NavLink to='/'>
            <Box component="img"  src={logoMax} alt='logo' sx={{ height: "58px", width: "240 px" }} />
          </NavLink>

          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
             <MenuIcon  
              sx={{color: 'black'}} 
             />
            </IconButton >
            <Menu id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top',horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' }}}
            >
              {pagesMin.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center" >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography variant="h5" noWrap component="a" href=""
            sx={{height: 75,justifyContent: 'space-around',mr: 2,display: { xs: 'flex', md: 'none', flexGrow: 3},
              flexGrow: 1,fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.3rem',color: 'inherit',textDecoration: 'none',
              alignItems: 'center',flexDirection: 'column' 
            }}
          >
            <Box component="img" src={logoMin} alt='logo' sx={{ height: "auto", width: "auto"}} />
          </Typography>
  
          <Box sx={{ flexGrow: 1, height: 75,display: { xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}
                sx={{ my: 3, display: 'block', flexDirection:'column',textTransform: 'capitalize', 
                  fontFamily: 'Inter', fontWeight: '600',fontStyle:'normal', fontSize:'16px', color: 'black'
                }}
              >
                
                <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex'}}}>
                    <span>{page}</span>

                    {page == 'CrypTowm' &&(
                    <span>
                        <IconNotify src={iconNotification}/>
                    </span>
                    )}

                </Box>
              </Button>
              
            ))}
          </Box>

          <Box component="img" src={iconDiamanteBlue} alt='logo' 
            sx={{ display: { xs: 'none', md: 'flex' }, height: "20px",width: "22.5px", padding: "0",marginRight: "4px"}} 
          />

          <Box sx={{flexGrow: 0,display: {xs: 'none',md: 'flex'},}}>
            <ColorButton variant="contained"  
            sx={{backgroundColor: 'white', color: 'black', boxShadow: 'none',"&.MuiButtonBase-root:hover": {bgcolor: "transparent"}}}>
              Sign in
            </ColorButton>          
          </Box>

          <Box sx={{flexGrow: 0,display: {xs: 'none',md: 'flex', marginRight: '0px'},}}>
            <ColorButton variant="contained" >
              Sign up
            </ColorButton>
          </Box>

          <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' }}}>
            <SearchButton/>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
