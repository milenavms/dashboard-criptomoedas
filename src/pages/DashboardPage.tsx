import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel/Carousel";

export default function DashboardPage(){
  const error = useRouteError();
   
    return (
      <>
          <Header/>
          <Carousel/>
      </>
    );
};

