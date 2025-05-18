// src/Router/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import Protfolio from "../Pages/Protfolio/Protfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",          
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "all-services", element: <AllServices /> },
        { path: "service-details", element: <ServiceDetails /> },
        { path: "all-blog", element: <AllBlogs /> },
        { path: "blog-details", element: <BlogDetails /> },
        { path: "contact", element: <Contact /> },
        { path: "protfolio", element: <Protfolio /> },
        { path: "protfolio-details", element: <ProtfolioDetails /> },
      ],
    },
  ],
  {
    // Using "/" in dev so localhost:5173/ works,
    // Repo path in prod so GH Pages routes match.
    basename: import.meta.env.DEV
      ? "/"
      : "/FitLife-With-Vatsa/",
  }
);
