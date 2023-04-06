import { useState } from "react";
import { createContext } from "react";
import { CriptoTopListInterface } from "../interface/CriptoTopListInterface";
import { FavoriteContextProps } from "../interface/FavoriteContextProps";

interface props {
    children: JSX.Element | JSX.Element[]
}

const VALUE_INITIAL: CriptoTopListInterface[]= [];

export const FavoriteContext = createContext<FavoriteContextProps>({
    favorites: VALUE_INITIAL,
    setFavorites: () => console.warn('setFavorites initial'),
});

export const FavoriteProvider = ({children}:props) => {
    const [favorites, setFavorites] = useState<CriptoTopListInterface[]>(VALUE_INITIAL);

    return(
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}