import { useRouteError } from "react-router-dom";
import Header from "components/Header";
import Carousel from "components/Carousel";
import TableValues from "components/TableValues";

export default function DashboardPage() {
  const error = useRouteError();

  return (
    <>
      <Header name="Preço das criptomoedas por valor de mercado" />
      <Carousel />
      <TableValues />
    </>
  );
}
