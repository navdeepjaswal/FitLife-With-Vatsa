// src/Router/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFound from "../Pages/404";
import Home from "../Pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",          
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <NotFound /> }
      ],
    },
  ],
  {
    // Using "/" in dev so localhost/ works,
    // Repo path in prod so GH Pages routes match.
    basename: import.meta.env.DEV
      ? "/"
      : "/FitLife-With-Vatsa/",
  }
);
