import { useState, useEffect } from "react";
import {
  Coin,
  getSearchCriptomoedasService,
} from "services/getSearchCriptomoedasService";
import useDebounce from "hooks/debounce/useDebounce";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchButton() {
  const [getCoins, setGetCoin] = useState<Coin[]>([]);
  const [searchCoin, setSearchCoin] = useState<string>("");
  const debouncedSearch = useDebounce(searchCoin, 500);

  useEffect(() => {
    if (debouncedSearch) {
      getSearchCriptomoedasService(debouncedSearch).then((response) =>
        setGetCoin(response.coins)
      );
    }
  }, [debouncedSearch]);

  return (
    <>
      <Autocomplete
        size="small"
        id="country-select-demo"
        sx={{ width: "175px", backgroundColor: "#EFF2F5" }}
        options={getCoins}
        autoHighlight
        getOptionLabel={(coin) => coin.name}
        renderOption={(props, coin) => (
          <Box component="li" {...props}>
            <NavLink
              to={`/moedas/${coin.name} `}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "14px",
              }}
            >
              {coin.name}
            </NavLink>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setSearchCoin(e.target.value)}
            {...params}
            label="Buscar"
            color="primary"
            inputProps={{
              ...params.inputProps,
              autoFocus: false,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </>
  );
}
