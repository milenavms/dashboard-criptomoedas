import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

export default function DashboardPage(){
  const error = useRouteError();
   
    return (
      <>
          <Header/>
      </>
    );
};

