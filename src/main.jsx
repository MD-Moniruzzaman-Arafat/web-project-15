import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./routes/Router.jsx";
import NewsContextProvider from "./context/NewsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsContextProvider>
      <RouterProvider router={routes} />
    </NewsContextProvider>
  </StrictMode>
);
