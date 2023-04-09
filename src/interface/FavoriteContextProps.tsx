import { CriptoTopListInterface } from "../services/listTopCriptomoedasService";


export interface FavoriteContextProps {
    favorites: CriptoTopListInterface[];
    setFavorites: React.Dispatch<React.SetStateAction<CriptoTopListInterface[]>>;
}