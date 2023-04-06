import { CriptoTopListInterface } from "./CriptoTopListInterface";

export interface FavoriteContextProps {
    favorites: CriptoTopListInterface[];
    setFavorites: React.Dispatch<React.SetStateAction<CriptoTopListInterface[]>>;
}