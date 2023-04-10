import { useRouteError } from "react-router-dom";
import BreadcrumbsCustom from "../components/Breadcrumbs/BreadcrumbsCustom";
import HeaderDetailsCoin from "../components/HeaderDetaislCoin/HeaderDetailsCoin";
import CardsDetailsCoin from "../components/CardsDetailsCoin/CardsDetailsCoin";


export default function DetailsCoinPage(){
    const error = useRouteError();
    return (
      <>
       <BreadcrumbsCustom/>
       <HeaderDetailsCoin/>
       <CardsDetailsCoin/>
      </>
    );
};

