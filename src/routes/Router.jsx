import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CategoryAndNewsSection from "../components/categoryAndNewsSection/CategoryAndNewsSection";
import NewsDetails from "../components/newsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <CategoryAndNewsSection />,
          },
          {
            path: "/news-details/:id",
            element: (
              <PrivateRoute>
                {" "}
                <NewsDetails />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default routes;
