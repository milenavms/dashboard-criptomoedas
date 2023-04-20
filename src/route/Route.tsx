import { createBrowserRouter } from "react-router-dom";
import App from "App";
import DashboardPage from "pages/DashboardPage";
import ErrorPage from "pages/ErrorPage";
import DetailsCoinPage from "pages/DetailsCoinPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage name="Página não existe" />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/coin/:idcoin",
        element: <DetailsCoinPage />,
      },
    ],
  },
]);
