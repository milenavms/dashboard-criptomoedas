import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import DetailsCoinPage from "./pages/DetailsCoinPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: "/",
          element: <DashboardPage/>
        },
        {
          path: "/moedas/:idmoeda",
          element: <DetailsCoinPage/>
        }
      ] 
     
    }
]);


 