import { useRouteError } from "react-router-dom";
import BreadcrumbsCustom from "../components/Breadcrumbs/BreadcrumbsCustom";
import HeaderDetailsCoin from "../components/HeaderDetaislCoin/HeaderDetailsCoin";


export default function DetailsCoinPage(){
    const error = useRouteError();
    return (
      <>
       <BreadcrumbsCustom/>
       <HeaderDetailsCoin/>
      </>
    );
};

