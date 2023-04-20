import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import iconPolygonLow from "assets/icons/icon-polygon-low.svg";
import iconPolygonHith from "assets/icons/icon-polygon-hith.svg";
import { MainCarousel } from "./styles";
import Star from "components/Star";
import { FavoriteContext } from "context/FavoriteContext";
import { CriptoTopListInterface } from "interface/CriptoListInterface";

const theme = createTheme();
theme.typography.h5 = {
  marginBottom: "1rem",
  fontSize: "1rem",
  textAlign: "left",
};

export default function Carousel() {
  const { favorites } = useContext(FavoriteContext);
  const carousel = useRef<HTMLDivElement>(null);
  const mainCarousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel?.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  });

  useEffect(() => {
    if (mainCarousel?.current) {
      favorites.length == 0
        ? (mainCarousel.current.style.display = "none")
        : (mainCarousel.current.style.display = "block");
    }
  }, [favorites]);

  const { format } = new Intl.NumberFormat("USD", {
    style: "currency",
    currency: "USD",
  });

  const checkHighLowCoin = (topCriptomoeda: CriptoTopListInterface) => {
    return topCriptomoeda.price_change_percentage_24h > 0;
  };

  return (
    <MainCarousel className="main-carousel " ref={mainCarousel}>
      <motion.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Favoritos</Typography>
          </ThemeProvider>
        </motion.div>

        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          transition={{ duration: 0.8 }}
          initial={{ x: 80 }}
          animate={{ x: 0 }}
        >
          {favorites.map((favorite) => (
            <motion.div
              className="item-flex-container"
              key={favorite.market_cap_rank.toString()}
            >
              <div className="flex-1">
                <h1>{favorite.market_cap_rank}</h1>
                <Star value={true} />
              </div>

              <div className="flex-2">
                <div className="flex-1">
                  <h2>{favorite.symbol.toUpperCase()}</h2>
                  <img
                    src={
                      checkHighLowCoin(favorite)
                        ? iconPolygonHith
                        : iconPolygonLow
                    }
                  ></img>
                </div>
                <p className="current-price">
                  {format(favorite.current_price)}
                </p>
                <p
                  className={
                    checkHighLowCoin(favorite) ? "check-high" : "check-low"
                  }
                >
                  {favorite.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainCarousel>
  );
}
