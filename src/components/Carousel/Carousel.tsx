
import { useState, useEffect, useRef, useContext, MutableRefObject } from 'react'
import {motion} from 'framer-motion'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import iconPolygonHith from '../../assets/icons/icon-polygon-hith.svg';
import { MainCarousel } from './styles';
import iconStarActive from '../../assets/icons/star.svg';


const theme = createTheme();
theme.typography.h5 = {
  marginBottom: '1rem',
  fontSize: '1rem',
  textAlign: 'left',
};


export default function Carousel() {
   
    const carousel = useRef<HTMLDivElement>(null);
    const mainCarousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(()=>{
        if(carousel?.current){
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
      },);
    
   
    return (
      
        <MainCarousel className="main-carousel " ref={mainCarousel}>
            <motion.div className="carousel"  ref={carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5" >Favoritos</Typography>
                    </ThemeProvider>
                </motion.div>
                    
                <motion.div className="inner-carousel" drag="x" 
                dragConstraints={{right: 0, left:-width}} transition={{duration: 0.8}} initial={{x:80}}animate={{x:0}}
                >
                     {Array.from(Array(10)).map((_, index) => (
                        <motion.div className="item-flex-container"  key={index}>
                            
                            <div className="flex-1">
                                <h1>1</h1>
                                <img src={iconStarActive} alt="iconStarActive" />
                            </div>
                            
                            <div className="flex-2">
                                <div className="flex-1">
                                <h2>BTC</h2>
                                <img src={ iconPolygonHith }></img>
                                </div>
                                <p className='coinValue'> R$ 2.000,00</p>
                                <p className='check-high'> + 200%</p>
                            </div>
                        </motion.div>   
                       ))}
                </motion.div>
            </motion.div>
        </MainCarousel>
    ); 
};

