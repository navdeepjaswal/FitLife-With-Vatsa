// src/Router/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",          
      element: <Root />,
      children: [
        { index: true, element: <Home /> }
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
