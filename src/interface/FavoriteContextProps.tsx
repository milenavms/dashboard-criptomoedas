import { CriptoTopListInterface } from "./CriptoListInterface";

export interface FavoriteContextProps {
  favorites: CriptoTopListInterface[];
  setFavorites: React.Dispatch<React.SetStateAction<CriptoTopListInterface[]>>;
}
