import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import TableValues from "../components/TableValues/TableValues";


export default function DashboardPage(){
  const error = useRouteError();
   
    return (
      <>
          <Header name="Preço das criptomoedas por valor de mercado"/>
          <Carousel/>
          <TableValues/>
      </>
    );
};

