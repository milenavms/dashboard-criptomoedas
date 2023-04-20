import { CriptoTopListInterface } from "services/getListTopCriptomoedasService";

export interface FavoriteContextProps {
  favorites: CriptoTopListInterface[];
  setFavorites: React.Dispatch<React.SetStateAction<CriptoTopListInterface[]>>;
}
