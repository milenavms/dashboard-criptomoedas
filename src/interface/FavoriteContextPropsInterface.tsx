import { CriptoTopListInterface } from "./CriptoListInterface";

export interface FavoriteContextPropsInterface {
  favorites: CriptoTopListInterface[];
  setFavorites: React.Dispatch<React.SetStateAction<CriptoTopListInterface[]>>;
}
