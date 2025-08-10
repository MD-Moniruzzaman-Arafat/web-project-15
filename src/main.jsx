import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./routes/Router.jsx";
import NewsContextProvider from "./context/NewsContextProvider.jsx";
import NewsDetailsContextProvider from "./context/NewsDetailsContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <NewsContextProvider>
        <NewsDetailsContextProvider>
          <RouterProvider router={routes} />
        </NewsDetailsContextProvider>
      </NewsContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
