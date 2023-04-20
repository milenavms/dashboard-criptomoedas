import { useRouteError } from "react-router-dom";
import BreadcrumbsCustom from "components/Breadcrumbs";
import HeaderDetailsCoin from "components/HeaderDetaislCoin";
import CardsDetailsCoin from "components/CardsDetailsCoin";

export default function DetailsCoinPage() {
  const error = useRouteError();
  return (
    <>
      <BreadcrumbsCustom />
      <HeaderDetailsCoin />
      <CardsDetailsCoin />
    </>
  );
}
